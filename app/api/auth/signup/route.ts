import { NextResponse } from "next/server";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { DbQuery } from "@/lib/db/db-helper";
import { ISignupPayload, ISignupResponse } from "@/constants/interfaces/auth/signup";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(request: Request) {

  const body: ISignupPayload = await request.json();

  try {

    //-------------------------------------------------
    // 1️⃣ GOOGLE SIGNUP FLOW
    //-------------------------------------------------
    if (body.provider === "google") {

      if (!body.token) {
        return NextResponse.json(
          {
            success: false,
            statuscode: 400,
            message: "Google token missing",
            data: null,
          },
          { status: 400 }
        );
      }

      const ticket = await googleClient.verifyIdToken({
        idToken: body.token,
        audience: process.env.GOOGLE_CLIENT_ID!,
      });

      const payload = ticket.getPayload();
      const email = payload?.email;
      const name = payload?.name;

      if (!email) {
        return NextResponse.json(
          {
            success: false,
            statuscode: 400,
            message: "Google email missing",
            data: null,
          },
          { status: 400 }
        );
      }

      // check if exists
      const check = await DbQuery(
        "SELECT id FROM users WHERE email=$1",
        [email]
      );

      if (check.length > 0) {
        return NextResponse.json(
          {
            success: false,
            statuscode: 409,
            message: "Email already in use",
            data: null,
          },
          { status: 409 }
        );
      }

      // insert
      const result = await DbQuery(
        `INSERT INTO users (name, email, provider)
         VALUES ($1, $2, 'google')
         RETURNING id, name, email`,
        [name, email]
      );

      const newUser = result[0];

      const token = jwt.sign(
        {
          id: newUser.id,
          email: newUser.email,
          name: newUser.name,
        },
        process.env.JWT_SECRET!,
        { expiresIn: "7d" }
      );

      const responseData: ISignupResponse = {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
        token: token,
      };

      const res = NextResponse.json(
        {
          success: true,
          statuscode: 201,
          message: "Google signup success",
          data: responseData,
        },
        { status: 201 }
      );

      res.cookies.set({
        name: "auth_token",
        value: token,
        httpOnly: true,
        sameSite: "lax",
        path: "/",
        maxAge: 7 * 24 * 60 * 60,
      });

      return res;
    }

    //-------------------------------------------------
    // 2️⃣ NORMAL EMAIL/PASSWORD SIGNUP FLOW
    //-------------------------------------------------

    if (!body.password || !body.name) {
      return NextResponse.json(
        {
          success: false,
          statuscode: 400,
          message: "Name & password required",
          data: null,
        },
        { status: 400 }
      );
    }

    // check if email exists
    const existingUsers = await DbQuery(
      "SELECT id FROM users WHERE email=$1",
      [body.email]
    );

    if (existingUsers.length > 0) {
      const response: IAPIEndpoints<null> = {
        success: false,
        statuscode: 409,
        message: "Email already in use",
        data: null,
      };
      return NextResponse.json(response, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(body.password, 10);

    const result = await DbQuery(
      `INSERT INTO users (name, email, password_hash, provider)
       VALUES ($1, $2, $3, 'auth')
       RETURNING id, name, email`,
      [body.name, body.email, passwordHash]
    );

    const newUser = result[0];

    const token = jwt.sign(
      {
        id: newUser.id,
        email: newUser.email,
        name: newUser.name,
      },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const payload: ISignupResponse = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      token: token,
    };

    const response: IAPIEndpoints<ISignupResponse> = {
      success: true,
      statuscode: 201,
      message: "User registered successfully",
      data: payload,
    };

    const res = NextResponse.json(response, { status: 201 });

    res.cookies.set({
      name: "auth_token",
      value: token,
      httpOnly: true,
      path: "/",
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60,
    });

    return res;

  } catch (error) {

    const response: IAPIEndpoints<null> = {
      success: false,
      statuscode: 500,
      message: "Internal Server Error",
      data: null,
      error: error instanceof Error ? error.message : String(error),
    };

    return NextResponse.json(response, { status: 500 });
  }
}
