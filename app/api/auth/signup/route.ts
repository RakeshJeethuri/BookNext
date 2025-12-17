
import { NextResponse } from 'next/server';
import { IAPIEndpoints } from '@/constants/interfaces/api.interface';
import { DbQuery } from '@/lib/db/db-helper';
import { ISignupPayload } from '@/constants/interfaces/auth/signup';
import { ISignupResponse } from '@/constants/interfaces/auth/signup';
import bcrypt from 'bcryptjs';
export async function POST(request: Request) {
    const body = await request.json();
    const data: ISignupPayload = body;
    try {
        const existingUsers = await DbQuery("SELECT id FROM users WHERE email=$1", [data.email]);
        if (existingUsers.length > 0) {
            const response: IAPIEndpoints<null> = {
                success: false,
                statuscode: 409,
                message: "Email already in use",
                data: null
            }
            return NextResponse.json(response, { status: response.statuscode });
        }
    } catch (error) {
        const response: IAPIEndpoints<null> = {
            success: false,
            statuscode: 500,
            message: "Internal Server Error",
            data: null
        }
        return NextResponse.json(response, { status: response.statuscode });
    }
    try {
        const result = await DbQuery("INSERT INTO users (name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, name, email", [data.username, data.email, data.password]);
        const newUser = result[0];
        const response: IAPIEndpoints<ISignupResponse> = {
            success: true,
            statuscode: 201,
            message: "User registered successfully",
            data: newUser
        }
        return NextResponse.json(response, { status: response.statuscode });
    } catch (error) {
        const response: IAPIEndpoints<null> = {
            success: false,
            statuscode: 500,
            message: "Internal Server Error",
            data: null,
            error: error instanceof Error ? error.message : String(error)
        }
        return NextResponse.json(response, { status: response.statuscode });
    }
}