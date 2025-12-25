"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  BookOpen,
  MapPin,
  Mail,
  Phone,
  Calendar,
  Edit,
  Star,
  TrendingUp,
  Package,
  Repeat,
  ShoppingCart,
  Award,
  MessageSquare,
  Heart,
  Settings
} from 'lucide-react';

// Profile Header Component
const ProfileHeader = () => {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex items-start gap-6">
          {/* Profile Picture */}
          <div className="relative">
            <Avatar className="h-32 w-32">
              <AvatarFallback className="text-3xl bg-gradient-to-br from-blue-500 to-purple-500 text-white">
                RJ
              </AvatarFallback>
            </Avatar>
            <Button
              size="icon"
              variant="secondary"
              className="absolute bottom-0 right-0 h-8 w-8 rounded-full"
            >
              <Edit className="h-4 w-4" />
            </Button>
          </div>

          {/* Profile Info */}
          <div className="flex-1 space-y-4">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold">Rakesh Jeethuri</h1>
                <Badge variant="secondary" className="h-6">
                  <Award className="h-3 w-3 mr-1" />
                  Verified Reader
                </Badge>
              </div>
              <p className="text-gray-600">Passionate book lover and avid reader since 2020</p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-3 text-sm">
              <div className="flex items-center gap-2 text-gray-700">
                <Mail className="h-4 w-4 text-gray-400" />
                rakesh.jeethuri@gmail.com
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Phone className="h-4 w-4 text-gray-400" />
                +91 98765 43210
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <MapPin className="h-4 w-4 text-gray-400" />
                Kurnool, Andhra Pradesh
              </div>
              <div className="flex items-center gap-2 text-gray-700">
                <Calendar className="h-4 w-4 text-gray-400" />
                Member since Jan 2020
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-6 pt-2">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">156</div>
                <div className="text-xs text-gray-600">Books Listed</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">89</div>
                <div className="text-xs text-gray-600">Exchanges Done</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">4.8</div>
                <div className="text-xs text-gray-600">Rating</div>
              </div>
              <Separator orientation="vertical" className="h-12" />
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-600">234</div>
                <div className="text-xs text-gray-600">Followers</div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-3 pt-2">
              <Button>
                <Edit className="h-4 w-4 mr-2" />
                Edit Profile
              </Button>
              <Button variant="outline">
                <Settings className="h-4 w-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

// Quick Stats Component
const QuickStats = () => {
  const stats = [
    {
      icon: Package,
      label: 'Active Listings',
      value: '23',
      change: '+5 this week',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      icon: Repeat,
      label: 'Pending Exchanges',
      value: '7',
      change: '3 awaiting response',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: ShoppingCart,
      label: 'Total Sales',
      value: '₹24,560',
      change: '+12% this month',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      label: 'Profile Views',
      value: '1,234',
      change: '+18% this week',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50'
    }
  ];

  return (
    <div className="grid grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index}>
          <CardContent className="pt-6">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-gray-600">{stat.label}</p>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
              <div className={`${stat.bgColor} p-3 rounded-lg`}>
                <stat.icon className={`h-6 w-6 ${stat.color}`} />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// My Books Component
const MyBooks = () => {
  const books = [
    {
      id: 1,
      title: 'Atomic Habits',
      author: 'James Clear',
      status: 'Available',
      type: 'Sell',
      price: '₹299',
      views: 234,
      interested: 12
    },
    {
      id: 2,
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      status: 'In Exchange',
      type: 'Exchange',
      price: 'Exchange',
      views: 189,
      interested: 8
    },
    {
      id: 3,
      title: 'Sapiens',
      author: 'Yuval Noah Harari',
      status: 'Available',
      type: 'Sell',
      price: '₹450',
      views: 567,
      interested: 23
    },
    {
      id: 4,
      title: 'Zero to One',
      author: 'Peter Thiel',
      status: 'Sold',
      type: 'Sell',
      price: '₹350',
      views: 423,
      interested: 15
    }
  ];

  return (
    <div className="space-y-3">
      {books.map((book) => (
        <Card key={book.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 bg-gradient-to-br from-blue-100 to-purple-100 rounded flex items-center justify-center text-2xl">
                  📘
                </div>
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Badge
                      variant={book.status === 'Available' ? 'default' : book.status === 'Sold' ? 'secondary' : 'outline'}
                    >
                      {book.status}
                    </Badge>
                    <Badge variant="outline">{book.type}</Badge>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <div className="text-lg font-bold">{book.price}</div>
                <div className="text-xs text-gray-600">
                  {book.views} views • {book.interested} interested
                </div>
                <Button size="sm" variant="outline">
                  <Edit className="h-3 w-3 mr-1" />
                  Edit
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Exchange History Component
const ExchangeHistory = () => {
  const exchanges = [
    {
      id: 1,
      book: 'The Psychology of Money',
      partner: 'Priya Sharma',
      date: '2024-12-20',
      status: 'Completed',
      rating: 5
    },
    {
      id: 2,
      book: 'Educated',
      partner: 'Rahul Mehta',
      date: '2024-12-15',
      status: 'Completed',
      rating: 4
    },
    {
      id: 3,
      book: 'Thinking, Fast and Slow',
      partner: 'Ananya Desai',
      date: '2024-12-18',
      status: 'In Progress',
      rating: 0
    },
    {
      id: 4,
      book: 'The 5 AM Club',
      partner: 'Vikram Singh',
      date: '2024-12-10',
      status: 'Completed',
      rating: 5
    }
  ];

  return (
    <div className="space-y-3">
      {exchanges.map((exchange) => (
        <Card key={exchange.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback>{exchange.partner.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="font-semibold">{exchange.book}</h3>
                  <p className="text-sm text-gray-600">Exchanged with {exchange.partner}</p>
                  <div className="flex items-center gap-2 mt-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <span className="text-xs text-gray-600">{exchange.date}</span>
                  </div>
                </div>
              </div>

              <div className="text-right space-y-2">
                <Badge variant={exchange.status === 'Completed' ? 'default' : 'outline'}>
                  {exchange.status}
                </Badge>
                {exchange.rating > 0 && (
                  <div className="flex items-center gap-1">
                    {[...Array(exchange.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                )}
                {exchange.status === 'In Progress' && (
                  <Button size="sm" variant="outline">View Details</Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Wishlist Component
const Wishlist = () => {
  const wishlist = [
    {
      id: 1,
      title: 'The Lean Startup',
      author: 'Eric Ries',
      available: true,
      matches: 5
    },
    {
      id: 2,
      title: 'Deep Work',
      author: 'Cal Newport',
      available: true,
      matches: 3
    },
    {
      id: 3,
      title: 'The Power of Now',
      author: 'Eckhart Tolle',
      available: false,
      matches: 0
    },
    {
      id: 4,
      title: 'Hooked',
      author: 'Nir Eyal',
      available: true,
      matches: 7
    }
  ];

  return (
    <div className="space-y-3">
      {wishlist.map((book) => (
        <Card key={book.id}>
          <CardContent className="p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-16 h-20 bg-gradient-to-br from-pink-100 to-red-100 rounded flex items-center justify-center">
                  <Heart className="h-8 w-8 text-red-400" />
                </div>
                <div>
                  <h3 className="font-semibold">{book.title}</h3>
                  <p className="text-sm text-gray-600">by {book.author}</p>
                  <div className="mt-2">
                    {book.available ? (
                      <Badge variant="default">
                        {book.matches} matches found
                      </Badge>
                    ) : (
                      <Badge variant="secondary">Not Available</Badge>
                    )}
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                {book.available ? (
                  <Button size="sm">View Matches</Button>
                ) : (
                  <Button size="sm" variant="outline">Notify Me</Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Reviews Component
const Reviews = () => {
  const reviews = [
    {
      id: 1,
      reviewer: 'Priya Sharma',
      rating: 5,
      comment: 'Great seller! Books were in excellent condition. Fast delivery and very responsive.',
      date: '2024-12-20'
    },
    {
      id: 2,
      reviewer: 'Rahul Mehta',
      rating: 4,
      comment: 'Good experience overall. Book was as described. Would exchange again!',
      date: '2024-12-15'
    },
    {
      id: 3,
      reviewer: 'Ananya Desai',
      rating: 5,
      comment: 'Perfect transaction! Very professional and friendly. Highly recommended.',
      date: '2024-12-10'
    }
  ];

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <Card key={review.id}>
          <CardContent className="p-4">
            <div className="flex items-start gap-3">
              <Avatar className="h-10 w-10">
                <AvatarFallback>{review.reviewer.split(' ').map(n => n[0]).join('')}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold">{review.reviewer}</h4>
                  <span className="text-xs text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700">{review.comment}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

// Reading Statistics Component
const ReadingStats = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Reading Goals 2024</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm text-gray-600">Books Read</span>
                <span className="text-sm font-semibold">45/50</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-600 h-2 rounded-full" style={{ width: '90%' }}></div>
              </div>
            </div>
            <Separator />
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Fiction</span>
                <span className="font-semibold">28 books</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-gray-600">Non-Fiction</span>
                <span className="font-semibold">17 books</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Favorite Genres</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {[
              { genre: 'Self-Help', percentage: 35 },
              { genre: 'Business', percentage: 25 },
              { genre: 'Fiction', percentage: 20 },
              { genre: 'Biography', percentage: 20 }
            ].map((item) => (
              <div key={item.genre}>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-600">{item.genre}</span>
                  <span className="text-sm font-semibold">{item.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-purple-600 h-2 rounded-full"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

// Main Profile Page
const ProfilePage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}


      {/* Main Content */}
      <div className="container mx-auto px-4 py-6 space-y-6">
        {/* Profile Header */}
        <ProfileHeader />

        {/* Quick Stats */}
        <QuickStats />

        {/* Tabs Section */}
        <Tabs defaultValue="books" className="space-y-4">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="books">
              <Package className="h-4 w-4 mr-2" />
              My Books
            </TabsTrigger>
            <TabsTrigger value="exchanges">
              <Repeat className="h-4 w-4 mr-2" />
              Exchanges
            </TabsTrigger>
            <TabsTrigger value="wishlist">
              <Heart className="h-4 w-4 mr-2" />
              Wishlist
            </TabsTrigger>
            <TabsTrigger value="reviews">
              <Star className="h-4 w-4 mr-2" />
              Reviews
            </TabsTrigger>
            <TabsTrigger value="stats">
              <TrendingUp className="h-4 w-4 mr-2" />
              Statistics
            </TabsTrigger>
          </TabsList>

          <TabsContent value="books">
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>My Listed Books</CardTitle>
                    <CardDescription>Manage your book listings and track their performance</CardDescription>
                  </div>
                  <Button>
                    <Package className="h-4 w-4 mr-2" />
                    Add New Book
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <MyBooks />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="exchanges">
            <Card>
              <CardHeader>
                <CardTitle>Exchange History</CardTitle>
                <CardDescription>View your past and ongoing book exchanges</CardDescription>
              </CardHeader>
              <CardContent>
                <ExchangeHistory />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="wishlist">
            <Card>
              <CardHeader>
                <CardTitle>My Wishlist</CardTitle>
                <CardDescription>Books you&apos;re looking for</CardDescription>
              </CardHeader>
              <CardContent>
                <Wishlist />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Reviews & Ratings</CardTitle>
                <CardDescription>See what others say about you</CardDescription>
              </CardHeader>
              <CardContent>
                <Reviews />
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="stats">
            <div className="space-y-4">
              <ReadingStats />
              <Card>
                <CardHeader>
                  <CardTitle>Activity Timeline</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { action: 'Listed "Atomic Habits"', date: '2 days ago' },
                      { action: 'Completed exchange with Priya', date: '5 days ago' },
                      { action: 'Added 3 books to wishlist', date: '1 week ago' },
                      { action: 'Received 5-star review', date: '1 week ago' }
                    ].map((activity, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                        <div className="flex-1">
                          <p className="text-sm">{activity.action}</p>
                          <p className="text-xs text-gray-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ProfilePage;