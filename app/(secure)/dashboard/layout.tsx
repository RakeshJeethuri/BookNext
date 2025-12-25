import { ReactNode } from "react"
import { redirect } from "next/navigation"
import { getCurrentUser } from "@/lib/auth/getCurrentuser"
import { LandingNavbardashbaord } from "@/components/secure-components/landing-navbar"

export default async function SecureLayout({
    children,
}: {
    children: ReactNode
}) {
    const user = await getCurrentUser()

    if (!user) {
        redirect("/login")
    }

    return (
        <div className="min-h-screen bg-muted/40 ">
            <LandingNavbardashbaord />
            <main className="pt-4">
                {children}
            </main>
        </div>
    )
}
