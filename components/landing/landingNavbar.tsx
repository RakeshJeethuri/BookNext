"use client"
import { Button } from "@/components/ui/button"
import { BookOpen, Menu } from "lucide-react"
import { APP_INFO } from "@/constants/appInfo"
import { useRouter } from "next/navigation";



export function LandingNavbar() {
    const router = useRouter();
    const handleSignIn = () => {
        console.log("Sign In clicked");
        router.push('/login');
    }
    return (
        <nav className="border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <BookOpen className="h-5 w-5 text-primary-foreground" />
                            </div>
                            <span className="text-xl font-bold">{APP_INFO.NAME}</span>
                        </div>

                        <div className="hidden md:flex items-center gap-6">
                            <a href="#explore" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                Explore
                            </a>
                            <a href="#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                How It Works
                            </a>
                            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                                Features
                            </a>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Button variant="ghost" size="sm" className="font-medium" onClick={handleSignIn}>
                            Sign In
                        </Button>
                        <Button size="sm" className="font-medium shadow-sm">
                            List a Book
                        </Button>
                        <Button variant="ghost" size="icon" className="md:hidden">
                            <Menu className="h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
