"use client";

import { CountdownTimer } from "./countdown-timer";
import { Gift, Clock } from "lucide-react";

// Promotion end date: February 15, 2026 at 23:59:59
const PROMO_END_DATE = new Date("2026-02-15T23:59:59");

export function HeroSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-8">
          <Gift className="w-4 h-4" />
          <span className="text-sm font-medium">Limited Time Offer</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
          Get <span className="text-gradient">3 Months</span> BIMSpped Pro
          <br />
          <span className="text-gradient">For Free</span>
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
          Supercharge your Revit workflow with BIMSpped Pro plugins.
          Automate repetitive tasks, boost productivity, and deliver projects faster.
        </p>

        {/* Countdown */}
        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <Clock className="w-5 h-5" />
            <span className="text-sm font-medium">Offer ends February 15, 2026</span>
          </div>
          <CountdownTimer targetDate={PROMO_END_DATE} />
        </div>
      </div>
    </section>
  );
}
