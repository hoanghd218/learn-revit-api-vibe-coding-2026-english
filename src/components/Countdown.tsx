"use client";

import { useEffect, useState } from "react";

// Promo deadline: 7 days after current launch date — adjust when batch starts
const PROMO_END = new Date("2026-05-10T23:59:59+07:00").getTime();

function getCountdownTarget(now: number) {
  if (now < PROMO_END) {
    return { target: PROMO_END, label: "Ưu đãi 50% — Đợt mở bán đầu tiên kết thúc" };
  }
  return null;
}

function formatTime(ms: number) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;
  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(interval);
  }, []);

  const session = getCountdownTarget(now);
  if (!session) return null;

  const { days, hours, minutes, seconds } = formatTime(session.target - now);

  const TOTAL_SLOTS = 300;
  const REGISTERED = 211;
  const REMAINING = TOTAL_SLOTS - REGISTERED;
  const percentage = (REGISTERED / TOTAL_SLOTS) * 100;

  return (
    <section className="py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative bg-surface-container-high rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 border border-primary-container/30 overflow-hidden">
          {/* Background glow */}
          <div className="absolute -top-20 -right-20 w-40 sm:w-60 h-40 sm:h-60 bg-primary-container/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-32 sm:w-40 h-32 sm:h-40 bg-secondary-container/20 rounded-full blur-3xl animate-pulse" />

          <div className="relative z-10 space-y-5 sm:space-y-8">
            {/* Session label */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-red-600/20 border border-red-500/30 text-red-400 font-bold text-xs sm:text-sm uppercase tracking-widest mb-3 sm:mb-4 animate-pulse">
                <span className="flex h-2 w-2 rounded-full bg-red-500" />
                ƯU ĐÃI ĐÓNG SAU
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-on-surface">
                {session.label}
              </h3>
            </div>

            {/* Countdown boxes */}
            <div className="flex justify-center gap-2 sm:gap-3 md:gap-6">
              {[
                { value: days, label: "Ngày" },
                { value: hours, label: "Giờ" },
                { value: minutes, label: "Phút" },
                { value: seconds, label: "Giây" },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <div className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-24 md:h-24 bg-surface rounded-xl sm:rounded-2xl border border-primary/30 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.1)] countdown-flip">
                    <span className="text-2xl sm:text-3xl md:text-5xl font-black text-primary tabular-nums">
                      {String(unit.value).padStart(2, "0")}
                    </span>
                  </div>
                  <span className="text-[10px] sm:text-xs md:text-sm text-on-surface-variant font-bold uppercase mt-1.5 sm:mt-2">
                    {unit.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Slot progress */}
            <div className="space-y-2 sm:space-y-3">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-1 text-xs sm:text-sm">
                <span className="text-on-surface-variant">
                  <span className="text-primary font-black text-base sm:text-lg">{REGISTERED}</span> / {TOTAL_SLOTS} slot đã đăng ký khóa học
                </span>
                <span className="text-red-400 font-bold animate-pulse">
                  Chỉ còn {REMAINING} slot đợt 1!
                </span>
              </div>
              <div className="relative w-full h-3 sm:h-4 bg-surface rounded-full overflow-hidden border border-primary/10">
                <div
                  className="h-full bg-linear-to-r from-primary to-secondary-container rounded-full transition-all duration-1000 slot-bar-glow"
                  style={{ width: `${percentage}%` }}
                />
              </div>
              <p className="text-center text-on-surface-variant text-[10px] sm:text-xs">
                Đợt mở bán đợt 1 giới hạn <span className="text-primary font-bold">{TOTAL_SLOTS}</span> kỹ sư
              </p>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a
                className="inline-flex items-center gap-2 sm:gap-3 bg-linear-to-br from-primary to-primary-container text-on-primary-container px-5 sm:px-10 py-3.5 sm:py-5 rounded-xl font-black text-sm sm:text-xl hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow max-w-xs sm:max-w-none"
                href="#pricing"
              >
                ĐĂNG KÝ NGAY — TỪ 3,000,000đ
                <span className="material-symbols-outlined">arrow_downward</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
