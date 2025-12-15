import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { MapPin, MessageSquare, Handshake, Search, Shield, TrendingUp, User, Star, BookOpen, ArrowRight, Sparkles, CheckCircle2, Menu } from 'lucide-react';
import { APP_INFO } from '@/constants/appInfo';

export default function BookNestLanding() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
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
              <Button variant="ghost" size="sm" className="font-medium">
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

      {/* Hero Section */}
      <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-3 w-3 mr-1.5" />
              Available in your city
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-6">
              Buy, Sell & Exchange
              <span className="block mt-2">Books Near You</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-3xl mx-auto">
              Discover books from readers in your locality. Chat directly, negotiate, and exchange books without shipping.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="text-base font-medium shadow-lg hover:shadow-xl transition-all h-12 px-8">
                <Search className="h-5 w-5 mr-2" />
                Explore Books Near Me
              </Button>
              <Button size="lg" variant="outline" className="text-base font-medium border-2 h-12 px-8">
                List Your Book
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </div>
            
            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 pt-8 border-t">
              <div className="text-center">
                <div className="text-3xl font-bold">10k+</div>
                <div className="text-sm text-muted-foreground mt-1">Books Listed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">5k+</div>
                <div className="text-sm text-muted-foreground mt-1">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-muted-foreground mt-1">Cities</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">How It Works</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Three Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Start buying, selling, or exchanging books in minutes
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-px bg-border"></div>
            
            <Card className="relative border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-md">
                  <MapPin className="h-8 w-8" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                  1
                </div>
                <CardTitle className="text-2xl mb-3">Find Nearby Books</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Browse books available in your locality using our location-based discovery. Filter by genre, condition, and distance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-md">
                  <MessageSquare className="h-8 w-8" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                  2
                </div>
                <CardTitle className="text-2xl mb-3">Chat with Owners</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Connect directly through secure messaging. Discuss pricing, book condition, or arrange exchanges seamlessly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="relative border-2 hover:border-primary/50 hover:shadow-lg transition-all duration-300">
              <CardHeader className="text-center pb-8">
                <div className="w-16 h-16 mx-auto rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6 shadow-md">
                  <Handshake className="h-8 w-8" />
                </div>
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shadow-md">
                  3
                </div>
                <CardTitle className="text-2xl mb-3">Meet & Exchange</CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  Meet locally at a convenient location. Complete your transaction face-to-face with zero shipping costs.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 px-4 py-1">Features</Badge>
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Built for book lovers who value community and sustainability
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: MapPin,
                title: "Location-Based Feed",
                desc: "Discover books within your chosen radius with smart filters and real-time updates."
              },
              {
                icon: Shield,
                title: "Secure 1:1 Chat",
                desc: "Private messaging system to negotiate prices and arrange meetups safely."
              },
              {
                icon: TrendingUp,
                title: "Buy, Sell, or Exchange",
                desc: "Flexible options to monetize your collection or swap books with other readers."
              },
              {
                icon: User,
                title: "User Profiles & Ratings",
                desc: "View seller profiles, reading preferences, and verified transaction history."
              },
              {
                icon: Star,
                title: "Community Trust System",
                desc: "Buyer and seller ratings with reviews for safe and reliable transactions."
              },
              {
                icon: BookOpen,
                title: "Book Details",
                desc: "Transparent condition ratings and fair pricing suggestions based on market data."
              },
            ].map(({ icon: Icon, title, desc }) => (
              <Card key={title} className="border hover:shadow-xl hover:border-primary/50 transition-all duration-300 group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{title}</CardTitle>
                  <CardDescription className="text-base leading-relaxed">{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="border rounded-3xl p-12 bg-card shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">Why Readers Love {APP_INFO.NAME}</h3>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: CheckCircle2, text: "Save money on books" },
                { icon: CheckCircle2, text: "Meet fellow readers" },
                { icon: CheckCircle2, text: "Sustainable & eco-friendly" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <item.icon className="h-6 w-6 flex-shrink-0 mt-0.5" />
                  <span className="text-lg font-medium">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0YzAtMi4yMS0xLjc5LTQtNC00cy00IDEuNzktNCA0IDEuNzkgNCA0IDQgNC0xLjc5IDQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-50"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Turn Your Old Books Into Value
          </h2>
          <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
            Join thousands of readers who are giving their books a second life. List your collection today and connect with book lovers in your area.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-base font-medium shadow-xl hover:shadow-2xl transition-all h-12 px-8">
              Get Started Free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-base font-medium border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary h-12 px-8">
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-lg font-bold">{APP_INFO.NAME}</span>
            </div>
            <div className="flex gap-8 text-sm font-medium text-muted-foreground">
              <a href="#about" className="hover:text-foreground transition-colors">
                About
              </a>
              <a href="#contact" className="hover:text-foreground transition-colors">
                Contact
              </a>
              <a href="#privacy" className="hover:text-foreground transition-colors">
                Privacy
              </a>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            © {APP_INFO.year} {APP_INFO.NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}