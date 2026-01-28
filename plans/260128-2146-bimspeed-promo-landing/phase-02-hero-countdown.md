# Phase 02: Hero Section with Countdown

## Objective
Create the hero section with promotional title, description, and a live countdown timer to February 15, 2026.

## Implementation

### 1. Create Countdown Hook: `hooks/use-countdown.ts`

```tsx
"use client";

import { useState, useEffect } from "react";

interface CountdownTime {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export function useCountdown(targetDate: Date): CountdownTime {
  const [timeLeft, setTimeLeft] = useState<CountdownTime>(() =>
    calculateTimeLeft(targetDate)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return timeLeft;
}

function calculateTimeLeft(targetDate: Date): CountdownTime {
  const now = new Date().getTime();
  const target = targetDate.getTime();
  const difference = target - now;

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
    seconds: Math.floor((difference % (1000 * 60)) / 1000),
    isExpired: false,
  };
}
```

### 2. Create Countdown Display Component: `app/bimspeed-promo/components/countdown-timer.tsx`

```tsx
"use client";

import { useCountdown } from "@/hooks/use-countdown";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(targetDate);

  if (isExpired) {
    return (
      <div className="text-center">
        <p className="text-2xl font-bold text-destructive">Offer Expired</p>
      </div>
    );
  }

  const timeUnits = [
    { value: days, label: "Days" },
    { value: hours, label: "Hours" },
    { value: minutes, label: "Minutes" },
    { value: seconds, label: "Seconds" },
  ];

  return (
    <div className="flex justify-center gap-4 sm:gap-6">
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="text-center">
          <div className="bg-card border border-border rounded-lg p-3 sm:p-4 min-w-[70px] sm:min-w-[90px]">
            <span className="text-2xl sm:text-4xl font-bold text-gradient">
              {String(unit.value).padStart(2, "0")}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground mt-2">
            {unit.label}
          </p>
        </div>
      ))}
    </div>
  );
}
```

### 3. Create Hero Section: `app/bimspeed-promo/components/hero-section.tsx`

```tsx
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
```

## Key Points

1. **Countdown Hook**: Reusable `useCountdown` hook that calculates time remaining
2. **Target Date**: February 15, 2026 at 23:59:59 (PROMO_END_DATE constant)
3. **Visual Design**: Gradient text, card-based timer units, responsive sizing
4. **Expired State**: Shows "Offer Expired" message when countdown reaches zero
5. **Auto-update**: Timer updates every second using setInterval

## Next Phase
After this phase is complete, proceed to Phase 03 to build the registration form.
