import { LoginInput } from "@/lib/validator";
import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validator";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { DbQuery } from "@/lib/db/db-helper";
import { ILoginResponse } from "@/constants/interfaces/auth/login";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export async function POST(request: Request) {
    const body = await request.json();
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
            {
                id: user.id,
                email: user.email,
                name: user.name,
            },
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
            path: "/",
            sameSite: "lax",
            maxAge: 7 * 24 * 60 * 60, // 7 days
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
