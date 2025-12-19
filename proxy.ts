import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import Jwt from "jsonwebtoken";

export function proxy(req: NextRequest) {
    const token = req.cookies.get("auth_token")?.value;

    // If no token → redirect to login
    if (!token) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    try {
        // Validate token
        Jwt.verify(token, process.env.JWT_SECRET_KEY as string);

        // allow request to continue
        return NextResponse.next();

    } catch (error) {
        // token invalid → delete cookie + redirect
        const response = NextResponse.redirect(new URL("/login", req.url));
        response.cookies.delete("auth_token");
        return response;
    }
}

// Protect routes here
export const config = {
    matcher: [
        "/dashboard/:path*",   // protect dashboard pages
        "/profile/:path*",     // protect profile pages
        "/api/private/:path*", // protect APIs if needed
    ],
};
