// lib/auth-utils.ts
import { NextResponse } from "next/server";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

interface AuthUser {
    id: string;
    email: string;
}

export function verifyToken(token: string): { valid: boolean; user?: AuthUser; error?: NextResponse } {
    if (!token) {
        return {
            valid: false,
            error: NextResponse.json(
                { success: false, message: 'No token provided' },
                { status: 401 }
            )
        };
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as AuthUser;
        return { valid: true, user: decoded };
    } catch (error) {
        return {
            valid: false,
            error: NextResponse.json(
                { success: false, message: 'Invalid or expired token' },
                { status: 401 }
            )
        };
    }
}