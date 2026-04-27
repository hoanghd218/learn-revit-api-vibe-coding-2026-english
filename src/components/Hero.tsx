"use client";

import Image from "next/image";

const TOTAL_SLOTS = 300;
const REGISTERED = 211;
const REMAINING = TOTAL_SLOTS - REGISTERED;

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] sm:min-h-[921px] flex flex-col items-center justify-center px-4 sm:px-6 overflow-hidden">
      {/* Decorative Tech Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-container to-transparent" />
        <div className="absolute bottom-1/4 left-0 w-full h-px bg-linear-to-r from-transparent via-primary-container to-transparent" />
        <div className="absolute top-0 left-1/3 w-px h-full bg-linear-to-b from-transparent via-primary-container to-transparent" />
      </div>

      {/* Rotating decorative squares — hidden on small screens */}
      <div className="hidden sm:block absolute top-20 right-10 w-32 h-32 border border-primary/10 rotate-45 animate-spin-slow pointer-events-none" />
      <div className="hidden sm:block absolute bottom-40 left-10 w-24 h-24 border border-primary/5 rotate-12 animate-spin-slow pointer-events-none" />

      <div className="z-10 text-center max-w-5xl mx-auto space-y-5 sm:space-y-8">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-surface-container-highest/80 border border-primary-container/30 text-primary-container font-bold text-[10px] sm:text-xs uppercase tracking-widest animate-bounce-subtle">
          <span className="flex h-2 w-2 rounded-full bg-red-600 animate-pulse" />
          KHÓA HỌC LIVE ZOOM — TUYỂN SINH ĐỢT 1
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-5xl lg:text-6xl font-black text-on-surface leading-[1.1] tracking-tighter">
          Kỹ Sư BIM · Chủ Doanh Nghiệp · Cấp Quản Lý:
          <br />
          Tạo Đội Ngũ AI Agents Làm Việc Thay Bạn —{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary animate-gradient">
            KHÔNG CẦN BIẾT CODE
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto px-2">
          Live Zoom cùng <span className="text-primary font-bold">Tony Hoàng — CEO BimSpeed</span>.
          Học cách dùng <span className="text-primary font-bold">Anti-gravity + Claude Code</span> biến AI thành
          đội nhân viên 24/7 — tự build Revit Add-in, scan model, vận hành website thay bạn.
          <br />
          Bonus: TOÀN BỘ skills/agents/templates Tony đã build.
        </p>

        {/* Price banner */}
        <div className="flex justify-center">
          <div className="inline-flex flex-col items-center gap-1 px-5 sm:px-8 py-4 rounded-2xl bg-linear-to-br from-red-600/10 to-primary/10 border border-primary/40 shadow-[0_0_30px_rgba(245,158,11,0.15)]">
            <div className="px-2 py-0.5 rounded-full bg-red-600/20 text-red-400 text-[10px] sm:text-xs font-black uppercase tracking-widest">
              GIẢM TỚI 70% — HỖ TRỢ NGÀNH XÂY DỰNG
            </div>
            <div className="flex items-baseline gap-2 mt-1">
              <span className="text-on-surface-variant line-through text-sm sm:text-base">10,000,000đ</span>
            </div>
            <div className="text-3xl sm:text-5xl font-black bg-clip-text text-transparent bg-linear-to-r from-primary via-primary-container to-secondary">
              Từ 3,000,000đ
            </div>
            <div className="text-[11px] sm:text-xs text-on-surface-variant">
              2 gói: <span className="font-bold text-on-surface">Revit + AI (3M)</span> · <span className="font-bold text-on-surface">Full + Web (5M)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center gap-5 sm:gap-6 w-full sm:w-auto">
          <a
            className="group relative bg-linear-to-br from-primary to-primary-container text-on-primary-container px-5 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-sm sm:text-xl flex items-center justify-center gap-2 sm:gap-3 transition-all duration-300 hover:scale-105 active:scale-95 animate-pulse-glow w-full sm:w-auto max-w-xs sm:max-w-none mx-auto"
            href="#pricing"
          >
            XEM 2 GÓI HỌC — TỪ 3,000,000đ
            <span className="material-symbols-outlined group-hover:translate-y-1 transition-transform shrink-0">
              arrow_downward
            </span>
          </a>

          {/* Slot counter (moved below CTA) */}
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-red-600/10 border border-red-500/30">
            <span className="material-symbols-outlined text-red-400 text-lg animate-pulse">group</span>
            <div className="text-left">
              <div className="text-xs sm:text-sm text-red-300 font-bold">
                <span className="text-base sm:text-lg text-red-400 font-black">{REGISTERED}</span>/{TOTAL_SLOTS} slot đã đăng ký khóa học
              </div>
              <div className="text-[10px] sm:text-xs text-red-400/80">
                Chỉ còn <span className="font-black text-red-400">{REMAINING} slot</span> đợt 1!
              </div>
            </div>
          </div>

          {/* Hero Speaker (Tony Hoang only) */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 mt-4 sm:mt-6 animate-float">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full border-2 border-primary-container p-0.5 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              <Image
                className="w-full h-full object-cover rounded-full"
                src="/images/hoang-real.jpg"
                alt="Mr. Tony Hoang"
                width={80}
                height={80}
              />
            </div>
            <div className="text-center">
              <div className="font-bold text-on-surface text-sm sm:text-base">Mr. Tony Hoàng</div>
              <div className="text-[10px] sm:text-xs text-primary font-medium">CEO BimSpeed · Tác giả khóa Revit API 16 chương</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
