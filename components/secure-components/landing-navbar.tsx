"use client"

import { useRouter } from "next/navigation"
import {
  BookOpen,
  MessageSquare,
  Bell,
  Heart,
  ChevronDown,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { APP_INFO } from "@/constants/appInfo"

export function LandingNavbardashbaord() {
  const router = useRouter()

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">

          {/* LEFT: LOGO */}
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <BookOpen className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              {APP_INFO.APP_NAME}
            </span>
          </div>

          {/* RIGHT: ACTIONS */}
          <div className="flex items-center gap-2">

            {/* Messages */}
            <Button variant="ghost" size="icon">
              <MessageSquare className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </Button>

            {/* Wishlist */}
            <Button variant="ghost" size="icon">
              <Heart className="h-5 w-5" />
            </Button>

            {/* List Book CTA */}
            <Button
              className="hidden sm:inline-flex"
              onClick={() => router.push("/list-book")}
            >
              List a Book
            </Button>

            {/* PROFILE DROPDOWN */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 rounded-full px-2 py-1 hover:bg-muted transition">
                  <Avatar className="h-8 w-8">
                    <AvatarFallback>R</AvatarFallback>
                  </Avatar>
                  <span className="hidden md:block text-sm font-medium">
                    Rakesh
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground" />
                </button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-44">
                <DropdownMenuItem onClick={() => router.push("/profile")}>
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/my-books")}>
                  My Books
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => router.push("/messages")}>
                  Messages
                </DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

          </div>
        </div>
      </div>
    </nav>
  )
}
