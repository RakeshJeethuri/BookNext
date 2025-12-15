import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative py-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            Discover books from readers in your locality. Chat directly,
            negotiate, and exchange books without shipping.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="h-12 px-8 shadow-lg">
              <Search className="h-5 w-5 mr-2" />
              Explore Books Near Me
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8">
              List Your Book
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

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
  )
}
