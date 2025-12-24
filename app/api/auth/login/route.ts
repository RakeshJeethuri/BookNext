import { LoginInput } from "@/lib/validator";
import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validator";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { DbQuery } from "@/lib/db/db-helper";
import { ILoginResponse } from "@/constants/interfaces/auth/login";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { OAuth2Client } from "google-auth-library";

const googleClient = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

export async function POST(request: Request) {

    const body = await request.json();

    if (body.provider === "google") {

        try {
            const ticket = await googleClient.verifyIdToken({
                idToken: body.token,
                audience: process.env.GOOGLE_CLIENT_ID,
            });

            const payload = ticket.getPayload();

            const email = payload?.email;
            const name = payload?.name;
            if (!email) {
                return NextResponse.json(
                    {
                        success: false,
                        statuscode: 400,
                        message: "Google email not found",
                        data: null,
                    }, { status: 400 }
                );
            }

            // check if exists
            const existing = await DbQuery(
                "SELECT id, name, email FROM users WHERE email=$1",
                [email]
            );

            let user = existing[0];

            // create new user if doesn't exist
            if (!user) {
                const inserted = await DbQuery(
                    `INSERT INTO users (name, email, provider)
                     VALUES ($1, $2, 'google')
                     RETURNING id, name, email`,
                    [name, email]
                );

                user = inserted[0];
            }

            // create token
            const token = jwt.sign(
                { id: user.id, email: user.email, name: user.name },
                process.env.JWT_SECRET!,
                { expiresIn: "7d" }
            );

            const loginResp: ILoginResponse = {
                id: user.id,
                email: user.email,
                name: user.name,
                token: token,
            };

            const response: IAPIEndpoints<ILoginResponse> = {
                success: true,
                statuscode: 200,
                message: "Login successful",
                data: loginResp,
            };


            const res = NextResponse.json(response, { status: 200 });

            res.cookies.set({
                name: "auth_token",
                value: token,
                httpOnly: true,
                path: "/",
                sameSite: "lax",
                maxAge: 7 * 24 * 60 * 60,
            });

            return res;

        } catch (err) {

            return NextResponse.json(
                {
                    success: false,
                    statuscode: 401,
                    message: "Invalid google token",
                    data: null,
                    error: err instanceof Error ? err.message : String(err),
                },
                { status: 401 }
            );

        }
    }

    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
        const response: IAPIEndpoints<null> = {
            success: false,
            statuscode: 400,
            message: "Invalid input",
            data: null,
        };
        return NextResponse.json(response, { status: 400 });
    }

    const data: LoginInput = parsed.data;
    const { email, password } = data;

    try {
        const users = await DbQuery(
            "SELECT id, name, email, password_hash FROM users WHERE email=$1",
            [email]
        );

        if (users.length === 0) {
            const response: IAPIEndpoints<null> = {
                success: false,
                statuscode: 401,
                message: "Invalid email or password",
                data: null,
            };
            return NextResponse.json(response, { status: 401 });
        }

        const user = users[0];
        const validPassword = await bcrypt.compare(password, user.password_hash);

        if (!validPassword) {
            const response: IAPIEndpoints<null> = {
                success: false,
                statuscode: 401,
                message: "Invalid email or password",
                data: null,
            };
            return NextResponse.json(response, { status: 401 });
        }

        const token = jwt.sign(
            { id: user.id, email: user.email, name: user.name },
            process.env.JWT_SECRET!,
            { expiresIn: "7d" }
        );

        delete user.password_hash;

        const Loginresponse: ILoginResponse = {
            id: user.id,
            email: user.email,
            name: user.name,
            token: token,
        };

        const response: IAPIEndpoints<ILoginResponse> = {
            success: true,
            statuscode: 200,
            message: "Login successful",
            data: Loginresponse,
        };

        const res = NextResponse.json(response, { status: 200 });

        res.cookies.set({
            name: "auth_token",
            value: token,
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
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
