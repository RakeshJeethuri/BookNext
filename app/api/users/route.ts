import { NextResponse } from "next/server";
import { DbQuery } from "@/lib/db/db-helper";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { IUser } from "@/constants/interfaces/user";
export async function GET() {
    try {
        const users: IUser[] = await DbQuery("SELECT id, username, email FROM nextjs.users");

        const response: IAPIEndpoints<IUser[]> = {
            success: true,
            data: users,
            statuscode: 200,
            message: "Users fetched successfully",
        };

        return NextResponse.json(response, { status: 200 });
    } catch (error) {
        const response: IAPIEndpoints<null> = {
            success: false,
            data: null,
            statuscode: 500,
            message: "Internal Server Error",
            error: "Internal Server Error",
        };

        return NextResponse.json(response, { status: 500 });
    }
}
