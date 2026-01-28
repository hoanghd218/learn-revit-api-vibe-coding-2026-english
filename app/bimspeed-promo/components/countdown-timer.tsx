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
      {timeUnits.map((unit) => (
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
