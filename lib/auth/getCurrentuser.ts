"use server";
import jwt from "jsonwebtoken";
import {cookies} from "next/headers";


 export interface ITokenPlayLoad{
    id:string;
    email:string;
    name:string;
    exp:number;
}

export async function getCurrentUser(): Promise<ITokenPlayLoad | null> {
    try {
        const cookieStore = cookies();
        const token = (await cookieStore).get("auth_token")?.value;
        if (!token) {
            return null;
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET!) as ITokenPlayLoad;
        return decoded;
    }
    catch (error) {
        return null;
    }
}