
import { NextResponse } from "next/server";
import { verifyToken } from '@/lib/auth/auth-utils';

export async function GET(request: Request) {
    const authHeader = request.headers.get('authorization');
    const token = authHeader?.split(' ')[1] || '';

    const { valid, user, error } = verifyToken(token);
    if (!valid || !user) return error || NextResponse.json(
        { success: false, message: 'Authentication failed' },
        { status: 401 }
    );

    // If we get here, the token is valid
    return NextResponse.json({
        success: true,
        message: 'Access granted',
        user
    });
}