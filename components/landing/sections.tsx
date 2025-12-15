import {
  MapPin,
  MessageSquare,
  Handshake,
  Shield,
  TrendingUp,
  User,
  Star,
  BookOpen,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { APP_INFO } from "@/constants/appInfo"

export function LandingSections() {
  return (
    <>
      {/* How It Works */}
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

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Find Nearby Books",
                desc: "Browse books available in your locality using our location-based discovery.",
              },
              {
                icon: MessageSquare,
                title: "Chat with Owners",
                desc: "Connect directly through secure messaging and negotiate seamlessly.",
              },
              {
                icon: Handshake,
                title: "Meet & Exchange",
                desc: "Meet locally and exchange books with zero shipping costs.",
              },
            ].map(({ icon: Icon, title, desc }, i) => (
              <Card key={i} className="border-2 hover:border-primary/50 transition-all">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-2xl bg-primary text-primary-foreground flex items-center justify-center mb-6">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl mb-3">{title}</CardTitle>
                  <CardDescription className="text-base">{desc}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
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
              { icon: MapPin, title: "Location-Based Feed" },
              { icon: Shield, title: "Secure Chat" },
              { icon: TrendingUp, title: "Buy, Sell, or Exchange" },
              { icon: User, title: "User Profiles & Ratings" },
              { icon: Star, title: "Community Trust System" },
              { icon: BookOpen, title: "Book Details" },
            ].map(({ icon: Icon, title }) => (
              <Card key={title} className="border hover:shadow-xl transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="text-xl mb-2">{title}</CardTitle>
                  <CardDescription className="text-base">
                    Designed for a safe and seamless experience.
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/50">
        <div className="max-w-5xl mx-auto">
          <div className="border rounded-3xl p-12 bg-card shadow-sm">
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold mb-4">
                Why Readers Love {APP_INFO.NAME}
              </h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {["Save money on books", "Meet fellow readers", "Sustainable & eco-friendly"].map(
                (text) => (
                  <div key={text} className="flex items-start gap-3">
                    <CheckCircle2 className="h-6 w-6 mt-0.5" />
                    <span className="text-lg font-medium">{text}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Turn Your Old Books Into Value
          </h2>
          <p className="text-xl opacity-90 mb-10">
            Join thousands of readers who are giving their books a second life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary">
              Get Started Free
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Sign In
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Separator className="my-8" />
          <p className="text-center text-sm text-muted-foreground">
            © {APP_INFO.year} {APP_INFO.NAME}. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  )
}
