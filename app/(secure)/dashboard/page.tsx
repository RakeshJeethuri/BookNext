'use client'
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Search, Send, BookOpen, MapPin, Tag } from 'lucide-react';

// Left Sidebar Component
const LeftSidebar = () => {
    const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
    const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
    const [selectedLanguages, setSelectedLanguages] = useState<string[]>([]);

    const toggleSelection = (item: string, list: string[], setList: (val: string[]) => void) => {
        if (list.includes(item)) {
            setList(list.filter(i => i !== item));
        } else {
            setList([...list, item]);
        }
    };

    return (
        <div className="w-full sticky top-4 h-[calc(100vh-2rem)] overflow-y-auto">
            <Card>
                <CardHeader>
                    <CardTitle className="text-lg">Filters</CardTitle>
                    <CardDescription>Find your perfect book</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Exchange Type */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm">Exchange Type</h3>
                        <div className="space-y-2">
                            {['Sell', 'Buy', 'Exchange'].map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={type}
                                        checked={selectedTypes.includes(type)}
                                        onCheckedChange={() => toggleSelection(type, selectedTypes, setSelectedTypes)}
                                    />
                                    <label htmlFor={type} className="text-sm cursor-pointer">
                                        {type}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* City Selector */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm">City</h3>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder="Select city" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="mumbai">Mumbai</SelectItem>
                                <SelectItem value="delhi">Delhi</SelectItem>
                                <SelectItem value="bangalore">Bangalore</SelectItem>
                                <SelectItem value="hyderabad">Hyderabad</SelectItem>
                                <SelectItem value="chennai">Chennai</SelectItem>
                                <SelectItem value="kolkata">Kolkata</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>

                    <Separator />

                    {/* Genre */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm">Genre</h3>
                        <ScrollArea className="h-48">
                            <div className="space-y-2">
                                {['Fiction', 'Non-Fiction', 'Mystery', 'Romance', 'Science Fiction', 'Biography', 'Self-Help', 'Business', 'History', 'Fantasy'].map((genre) => (
                                    <div key={genre} className="flex items-center space-x-2">
                                        <Checkbox
                                            id={genre}
                                            checked={selectedGenres.includes(genre)}
                                            onCheckedChange={() => toggleSelection(genre, selectedGenres, setSelectedGenres)}
                                        />
                                        <label htmlFor={genre} className="text-sm cursor-pointer">
                                            {genre}
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </ScrollArea>
                    </div>

                    <Separator />

                    {/* Language */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm">Language</h3>
                        <div className="space-y-2">
                            {['English', 'Hindi', 'Telugu', 'Tamil', 'Bengali'].map((lang) => (
                                <div key={lang} className="flex items-center space-x-2">
                                    <Checkbox
                                        id={lang}
                                        checked={selectedLanguages.includes(lang)}
                                        onCheckedChange={() => toggleSelection(lang, selectedLanguages, setSelectedLanguages)}
                                    />
                                    <label htmlFor={lang} className="text-sm cursor-pointer">
                                        {lang}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>

                    <Separator />

                    {/* Price Range */}
                    <div>
                        <h3 className="font-semibold mb-3 text-sm">Price Range (₹)</h3>
                        <div className="space-y-3">
                            <Input type="number" placeholder="Min" />
                            <Input type="number" placeholder="Max" />
                        </div>
                    </div>

                    <Button className="w-full">Apply Filters</Button>
                </CardContent>
            </Card>
        </div>
    );
};

// Book Feed Component
const BookFeed = () => {
    const books = [
        {
            id: 1,
            title: 'Atomic Habits',
            author: 'James Clear',
            city: 'Mumbai',
            type: 'Sell',
            price: '₹299',
            image: '📘',
            genre: 'Self-Help'
        },
        {
            id: 2,
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            city: 'Bangalore',
            type: 'Exchange',
            price: 'Exchange',
            image: '📕',
            genre: 'Fiction'
        },
        {
            id: 3,
            title: 'Sapiens',
            author: 'Yuval Noah Harari',
            city: 'Delhi',
            type: 'Buy',
            price: '₹450',
            image: '📗',
            genre: 'Non-Fiction'
        },
        {
            id: 4,
            title: 'Zero to One',
            author: 'Peter Thiel',
            city: 'Hyderabad',
            type: 'Sell',
            price: '₹350',
            image: '📙',
            genre: 'Business'
        },
        {
            id: 5,
            title: 'The Psychology of Money',
            author: 'Morgan Housel',
            city: 'Mumbai',
            type: 'Exchange',
            price: 'Exchange',
            image: '📘',
            genre: 'Finance'
        },
        {
            id: 6,
            title: 'Educated',
            author: 'Tara Westover',
            city: 'Chennai',
            type: 'Sell',
            price: '₹399',
            image: '📕',
            genre: 'Biography'
        }
    ];

    return (
        <div className="space-y-4">
            {/* Search Bar */}
            <Card>
                <CardContent className="pt-6">
                    <div className="relative">
                        <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                        <Input
                            placeholder="Search books by title, author, or ISBN..."
                            className="pl-10"
                        />
                    </div>
                </CardContent>
            </Card>

            {/* Book Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {books.map((book) => (
                    <Card key={book.id} className="hover:shadow-lg transition-shadow h-full">
                        <CardContent className="p-6">
                            <div className="flex gap-4">
                                {/* Book Image Placeholder */}
                                <div className="flex-shrink-0 w-24 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center text-4xl">
                                    {book.image}
                                </div>

                                {/* Book Details */}
                                <div className="flex-1 space-y-2">
                                    <div className="flex items-start justify-between">
                                        <div>
                                            <h3 className="font-semibold text-lg">{book.title}</h3>
                                            <p className="text-sm text-gray-600">by {book.author}</p>
                                        </div>
                                        <Badge variant={book.type === 'Sell' ? 'default' : book.type === 'Buy' ? 'secondary' : 'outline'}>
                                            {book.type}
                                        </Badge>
                                    </div>

                                    <div className="flex items-center gap-4 text-sm text-gray-600">
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            {book.city}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Tag className="h-4 w-4" />
                                            {book.genre}
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-2">
                                        <span className="font-semibold text-lg">{book.price}</span>
                                        <Button size="sm">
                                            {book.type === 'Exchange' ? 'Exchange' : 'View Details'}
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

// Community Feed Component
const CommunityFeed = () => {
    const [expandedPost, setExpandedPost] = useState<number | null>(null);
    const posts = [
        {
            id: 1,
            user: 'Priya Sharma',
            avatar: 'PS',
            message: 'Just finished reading "Atomic Habits"! Life-changing book. Highly recommend for anyone looking to build better habits.',
            timestamp: '2 hours ago'
        },
        {
            id: 2,
            user: 'Rahul Mehta',
            avatar: 'RM',
            message: 'Looking for book recommendations on entrepreneurship. Any suggestions?',
            timestamp: '5 hours ago'
        },
        {
            id: 3,
            user: 'Ananya Desai',
            avatar: 'AD',
            message: 'Successfully exchanged 3 books this week! This platform is amazing.',
            timestamp: '1 day ago'
        },
        {
            id: 4,
            user: 'Vikram Singh',
            avatar: 'VS',
            message: 'Anyone interested in starting a book club in Bangalore?',
            timestamp: '1 day ago'
        }
    ];

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg">Community Feed</CardTitle>
                <CardDescription>See what others are reading</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 overflow-hidden">
                <ScrollArea className="h-full pr-4">
                    <div className="space-y-4">
                        {posts.map((post) => (
                            <div key={post.id} className="space-y-2">
                                <div className="flex items-start gap-3">
                                    <Avatar className="h-8 w-8">
                                        <AvatarFallback className="text-xs">{post.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div className="flex-1 space-y-0.5">
                                        <div className="flex items-center justify-between">
                                            <p className="text-xs font-medium">{post.user}</p>
                                            <span className="text-[10px] text-gray-400">{post.timestamp}</span>
                                        </div>
                                        <p
                                            className={`text-xs text-gray-600 ${expandedPost === post.id ? '' : 'line-clamp-2'}`}
                                            onClick={() => setExpandedPost(expandedPost === post.id ? null : post.id)}
                                        >
                                            {post.message}
                                        </p>
                                    </div>
                                </div>
                                <Separator />
                            </div>
                        ))}
                    </div>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

// AI Chat Component
const AIChat = () => {
    const [messages, setMessages] = useState([
        {
            id: 1,
            sender: 'ai',
            text: 'Hello! I\'m your BookNext AI assistant. Ask me for book recommendations!'
        }
    ]);
    const [input, setInput] = useState('');

    const handleSend = () => {
        if (!input.trim()) return;

        const userMessage = { id: messages.length + 1, sender: 'user', text: input };
        setMessages([...messages, userMessage]);

        // Simulate AI response
        setTimeout(() => {
            const aiResponse = {
                id: messages.length + 2,
                sender: 'ai',
                text: 'Based on your interest, I recommend checking out "Atomic Habits" by James Clear and "The Psychology of Money" by Morgan Housel!'
            };
            setMessages(prev => [...prev, aiResponse]);
        }, 1000);

        setInput('');
    };

    return (
        <Card className="h-full flex flex-col">
            <CardHeader>
                <CardTitle className="text-lg">AI Book Assistant</CardTitle>
                <CardDescription>Get personalized recommendations</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col overflow-hidden">
                <ScrollArea className="flex-1 pr-4 mb-4">
                    <div className="space-y-3">
                        {messages.map((msg) => (
                            <div
                                key={msg.id}
                                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${msg.sender === 'user'
                                        ? 'bg-primary text-primary-foreground'
                                        : 'bg-gray-100 text-gray-900'
                                        }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}
                    </div>
                </ScrollArea>
                <div className="flex gap-2">
                    <Input
                        placeholder="Ask for recommendations..."
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                    />
                    <Button size="icon" onClick={handleSend}>
                        <Send className="h-4 w-4" />
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

// Right Sidebar Component
const RightSidebar = () => {
    return (
        <div className="w-full sticky top-4 h-[calc(100vh-2rem)] flex flex-col gap-4">
            <div className="h-1/2">
                <CommunityFeed />
            </div>
            <div className="h-1/2">
                <AIChat />
            </div>
        </div>
    );
};

// Main Dashboard Page
const BookNextDashboard = () => {
    return (
        <div className="min-h-screen bg-gray-50 ">


            {/* Main Content - 3 Column Layout */}
            <div className="container mx-auto px-4 py-6">
                <div className="grid grid-cols-12 gap-6">
                    {/* Left Sidebar - Filters */}
                    <div className="col-span-2">
                        <LeftSidebar />
                    </div>

                    {/* Center - Book Feed */}
                    <div className="col-span-7">
                        <BookFeed />
                    </div>

                    {/* Right Sidebar - Community & AI Chat */}
                    <div className="col-span-3">
                        <RightSidebar />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookNextDashboard;