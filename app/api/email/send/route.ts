import { NextResponse } from "next/server";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const { to, subject, html } = await request.json();

        if (!to || !subject || !html) {
            const response: IAPIEndpoints<null> = {
                success: false,
                statuscode: 400,
                data: null,
                message: "Missing required fields: to, subject, html",
            };
            return NextResponse.json(response, { status: 400 });
        }

        const { error } = await resend.emails.send({
            from: `"BookNext" <Booknext@booknext.online>`,
            to,
            subject,
            html,
        });

        if (error) {
            const response: IAPIEndpoints<null> = {
                success: false,
                statuscode: 400,
                data: null,
                message: "Error sending email",
                error: error.message,
            };
            return NextResponse.json(response, { status: 400 });
        }

        const response: IAPIEndpoints<null> = {
            success: true,
            statuscode: 200,
            data: null,
            message: "Email sent successfully",
        };

        return NextResponse.json(response, { status: 200 });

    } catch (error: unknown) {

        const response: IAPIEndpoints<null> = {
            success: false,
            statuscode: 500,
            data: null,
            message: "Error sending email",
            error: error instanceof Error ? error.message : "Unknown error",
        };

        return NextResponse.json(response, { status: 500 });
    }
}
