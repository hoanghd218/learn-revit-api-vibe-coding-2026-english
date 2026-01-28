# Phase 01: Page Structure & Routing

## Objective
Create the basic page structure and routing for the BIMSpped Pro promotional landing page.

## Implementation

### 1. Create Route Directory
```bash
mkdir -p app/bimspeed-promo/components
```

### 2. Create Page File: `app/bimspeed-promo/page.tsx`

```tsx
import type { Metadata } from "next";
import { HeroSection } from "./components/hero-section";
import { RegistrationForm } from "./components/registration-form";
import { VideoGrid } from "./components/video-grid";

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
```

## Key Points

1. **Route**: Page will be accessible at `/bimspeed-promo`
2. **SEO**: Metadata configured for search engines and social sharing
3. **Structure**: Three main sections - Hero, Form, Videos
4. **Styling**: Uses existing theme variables (dark theme)
5. **Responsive**: Container max-widths for different screen sizes

## Next Phase
After this phase is complete, proceed to Phase 02 to build the Hero section with countdown timer.
