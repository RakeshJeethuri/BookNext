import { NextResponse } from "next/server";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { DbQuery } from "@/lib/db/db-helper";
import { ISignupPayload, ISignupResponse } from "@/constants/interfaces/auth/signup";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {

  const body = await request.json();
  const data: ISignupPayload = body;

  try {
    const existingUsers = await DbQuery(
      "SELECT id FROM users WHERE email=$1",
      [data.email]
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

    const passwordHash = await bcrypt.hash(data.password, 10);

    const result = await DbQuery(
      "INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email",
      [data.name, data.email, passwordHash]
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
