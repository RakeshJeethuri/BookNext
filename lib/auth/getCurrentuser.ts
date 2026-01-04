"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";


export interface ITokenPlayLoad {
    id: string;
    email: string;
    name: string;
    exp: number;
}

export async function getCurrentUser(): Promise<ITokenPlayLoad | null> {
    try {
        const cookieStore = await cookies();
        const token = cookieStore.get("auth_token")?.value;

        if (!token || !process.env.JWT_SECRET) {
            return null;
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET) as ITokenPlayLoad;

        // Type guard to ensure decoded object matches ITokenPlayLoad
        if (decoded && typeof decoded === 'object' &&
            'id' in decoded && 'email' in decoded && 'name' in decoded) {
            return decoded as ITokenPlayLoad;
        }

        return null;
    } catch (error) {
        console.error('Error in getCurrentUser:', error);
        return null;
    }
}