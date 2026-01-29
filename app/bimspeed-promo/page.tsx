import type { Metadata } from "next";
import { HeroSection } from "./components/hero-section";
import { RegistrationForm } from "./components/registration-form";
import { VideoGrid } from "./components/video-grid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get 3 Months BIMSpped Pro Free | BIM Developer Academy",
  description: "Limited time offer! Get 3 months of BIMSpped Pro for free. Automate your Revit workflows with powerful plugins. Offer ends February 15, 2026.",
  openGraph: {
    title: "Get 3 Months BIMSpped Pro Free",
    description: "Limited time offer! Get 3 months of BIMSpped Pro for free. Offer ends February 15, 2026.",
  },
};

export default function BIMSppedPromoPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header with Logo */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Link back to homepage */}
            <Link
              href="/"
              className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity group"
            >
              <span className="text-2xl font-bold text-coral-accent font-mono group-hover:scale-110 transition-transform">
                &lt;/&gt;
              </span>
              <span className="text-lg font-bold text-gradient">
                BIM Developer
              </span>
            </Link>

            {/* Optional: Add a subtitle or tagline */}
            <div className="text-sm text-muted-foreground hidden sm:block">
              BIMSpped Pro Special Offer
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section with Countdown */}
      <HeroSection />

      {/* Registration Form Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <RegistrationForm />
        </div>
      </section>

      {/* YouTube Videos Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <VideoGrid />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-muted-foreground border-t border-border">
        <p>© 2026 BIM Developer Academy. All rights reserved.</p>
      </footer>
    </main>
  );
}
