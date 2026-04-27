"use client";

import ScrollReveal from "./ScrollReveal";

const ZALO_LINK = "https://zalo.me/g/v169jbjxeuhthgocvhgs";
const REGISTERED = 22;

export default function FinalCTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-linear-to-t from-secondary-container/30 to-surface relative overflow-hidden">
      {/* Decorative elements — hidden on mobile */}
      <div className="hidden sm:block absolute top-1/4 left-10 w-40 h-40 border border-primary/10 rotate-45 animate-spin-slow pointer-events-none" />
      <div className="hidden sm:block absolute bottom-1/4 right-10 w-56 h-56 border border-primary/5 -rotate-12 animate-spin-slow pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-primary-container/10 rounded-full blur-[120px]" />

      <ScrollReveal>
        <div className="max-w-7xl mx-auto text-center space-y-8 sm:space-y-12 relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter px-2">
            1 Người + Đội Ngũ AI Agents
            <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary animate-gradient">
              = Vận Hành Như Cả Team, Không Cần Code.
            </span>
          </h2>

          {/* Urgency bar */}
          <div className="inline-flex flex-wrap justify-center items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-red-600/15 border border-red-500/30 animate-bounce-subtle max-w-full">
            <span className="material-symbols-outlined text-red-400 animate-pulse text-lg sm:text-2xl shrink-0">
              local_fire_department
            </span>
            <span className="text-red-300 font-bold text-sm sm:text-base text-center">
              Đợt mở bán đợt 1 — đăng ký sớm để giữ ưu đãi!
            </span>
          </div>

          {/* 2 CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center max-w-3xl mx-auto">
            <a
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface-container-high border border-primary/40 text-on-surface px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-lg hover:scale-[1.03] active:scale-95 transition-all"
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              GÓI REVIT + AI — 3,000,000đ
            </a>
            <a
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-linear-to-br from-primary to-primary-container text-on-primary-container px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-sm sm:text-lg hover:scale-[1.03] active:scale-95 transition-all shadow-[0_15px_40px_rgba(245,158,11,0.4)] animate-pulse-glow"
              href={ZALO_LINK}
              target="_blank"
              rel="noopener noreferrer"
            >
              GÓI FULL + WEB — 5,000,000đ
              <span className="material-symbols-outlined shrink-0">rocket_launch</span>
            </a>
          </div>
          <p className="text-on-surface-variant font-medium text-sm sm:text-base">
            Đã có {REGISTERED} kỹ sư BIM, chủ doanh nghiệp, quản lý đăng ký khóa học
          </p>
        </div>
      </ScrollReveal>
    </section>
  );
}
