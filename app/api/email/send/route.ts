
import { NextResponse } from "next/server";
import { IAPIEndpoints } from "@/constants/interfaces/api.interface";
import { transporter } from "@/lib/mail";

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
        await transporter.sendMail({
            from: `"BookNext" <${process.env.BREVO_SMTP_USER}>`,
            to,
            subject,
            html,
        });

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
