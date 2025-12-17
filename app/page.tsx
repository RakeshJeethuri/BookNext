import { HeroSection } from "@/components/landing/herosection";
import { LandingNavbar } from "@/components/landing/landingNavbar";
import { LandingSections } from "@/components/landing/sections";

export default function BookNestLanding() {
  return (
    <div className="min-h-screen bg-background">
      <LandingNavbar />
      <HeroSection />
      <LandingSections />
    </div>
  );
}
