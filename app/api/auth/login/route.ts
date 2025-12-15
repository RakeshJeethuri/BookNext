import { LoginInput } from '@/lib/validator';
import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validator";
import { IAPIEndpoints } from '@/constants/interfaces/api.interface';
import { DbQuery } from '@/lib/db/db-helper';
import { IUser } from '@/constants/interfaces/user.inteface';
export async function POST(request: Request) {
    const body = await request.json();
    const parsed = loginSchema.safeParse(body);
    if (!parsed.success) {
        const response: IAPIEndpoints<null> = {
            success: false,
            statuscode: 400,
            message: "Invalid input",
            data: null
        }
        return NextResponse.json(response);
    }
    const data: LoginInput = parsed.data;
    try {
        const users = await DbQuery("SELECT id, username, email FROM nextjs.users WHERE email=$1 AND password=$2", [data.email, data.password]);
        if (users.length === 0) {
            const response: IAPIEndpoints<null> = {
                success: false,
                statuscode: 401,
                message: "Invalid email or password",
                data: null
            }
            return NextResponse.json(response);
        }
        else {
            const user = users[0];
            const response: IAPIEndpoints<IUser> = {
                success: true,
                statuscode: 200,
                message: "Login successful",
                data: user
            }
            return NextResponse.json(response);
        };
    }
    catch (error) {
        const response: IAPIEndpoints<null> = {
            success: false,
            statuscode: 500,
            message: "Internal Server Error",
            data: null,
            error: error instanceof Error ? error.message : String(error)
        }
        return NextResponse.json(response);
    }
}
