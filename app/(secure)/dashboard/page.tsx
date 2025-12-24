"use client"

import * as React from "react"
import {
    Book,
    Bell,
    Settings,
    Plus,
    Search,
    MessageSquare,
    Heart,
    MoreVertical,
    MapPin,
    Star,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs"
import {
    Avatar,
    AvatarFallback,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu"

/* ------------------ MOCK DATA ------------------ */

const stats = [
    { label: "Books Listed", value: "3" },
    { label: "Total Views", value: "135" },
    { label: "Interested Users", value: "9" },
    { label: "Active Chats", value: "2" },
]

const nearbyBooks = [
    {
        id: 1,
        title: "Atomic Habits",
        author: "James Clear",
        price: null,
        condition: "Good",
        type: "Exchange",
        rating: 4.9,
        distance: "1.2 km",
        owner: "Rahul",
    },
    {
        id: 2,
        title: "The Psychology of Money",
        author: "Morgan Housel",
        price: 250,
        condition: "Like New",
        type: "Sell",
        rating: 5.0,
        distance: "2.5 km",
        owner: "Anita",
    },
]

const messages = [
    {
        id: 1,
        user: "Priya",
        message: "Is the book still available?",
        time: "2h ago",
        unread: true,
    },
    {
        id: 2,
        user: "Rahul",
        message: "Interested in exchange?",
        time: "1d ago",
        unread: false,
    },
]

const wishlist = [
    {
        id: 1,
        title: "48 Laws of Power",
        author: "Robert Greene",
        avgPrice: 280,
    },
]

/* ------------------ PAGE ------------------ */

export default function BookNextDashboard() {
    return (
        <h1>rakesh  jeethuri</h1>
    )
}
