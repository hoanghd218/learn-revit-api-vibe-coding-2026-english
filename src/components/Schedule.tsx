"use client";

import ScrollReveal from "./ScrollReveal";

const schedule: {
  title: string;
  time: string;
  badge?: string;
  items: string[];
}[] = [
  {
    title: "BUỔI 1 — SETUP & DEMO",
    time: "Tuần 1 · 20h Tối",
    items: [
      "Cài đặt Anti-gravity, Claude Code, Revit, Visual Studio",
      "Demo: AI tự sinh Add-in HelloWorld + rename sheet",
      "Onboarding: cách dùng video HD 16 chương",
      "Setup workspace cá nhân",
    ],
  },
  {
    title: "BUỔI 2 — VIBE CODING ADD-IN",
    time: "Tuần 2 · 20h Tối",
    items: [
      "Mô tả tiếng Việt → AI sinh Add-in chạy thật",
      "Add-in: rename sheet, dimension, sheet từ Excel",
      "Auto debug + hot reload",
      "Q&A code review live",
    ],
  },
  {
    title: "BUỔI 3 — AI QC MODEL REVIT",
    time: "Tuần 3 · 20h Tối",
    items: [
      "AI scan model: clash, missing param, sai dim",
      "Xuất Excel/HTML report cho stakeholders",
      "Setup auto QC chạy hàng đêm",
      "Chia sẻ skills/agents Tony build sẵn",
    ],
  },
  {
    title: "BUỔI 4 — VIBE CODING WEB",
    time: "Tuần 4 · 20h Tối",
    badge: "GÓI 5M",
    items: [
      "AI build landing page + thanh toán SePay/Stripe",
      "Course platform: video, license, member area",
      "Web app render ảnh/video kiến trúc (như app.bimai.vn)",
      "Deploy Vercel/Cloudflare miễn phí",
      "Group Coaching hàng tuần cùng Tony (chỉ gói 5M)",
    ],
  },
];

export default function Schedule() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="schedule">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Lịch Học Live — 4 Buổi Zoom
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
          {schedule.map((day, index) => (
            <ScrollReveal key={day.title} delay={index * 100} direction="up">
              <div
                className={`relative bg-surface p-5 sm:p-7 rounded-xl sm:rounded-2xl border transition-colors h-full ${
                  day.badge
                    ? "border-primary/60 shadow-[0_0_25px_rgba(245,158,11,0.15)]"
                    : "border-primary/30 hover:bg-surface-container-high"
                }`}
              >
                {day.badge && (
                  <div className="absolute -top-2.5 right-4 px-2.5 py-0.5 rounded-full bg-linear-to-r from-primary to-primary-container text-on-primary-container text-[10px] font-black shadow-lg">
                    {day.badge}
                  </div>
                )}
                <div className="text-primary font-black text-lg sm:text-xl mb-1">
                  {day.title}
                </div>
                <div className="text-xs sm:text-sm text-on-surface-variant/70 font-medium mb-4">
                  {day.time}
                </div>
                <div className="space-y-2.5 text-xs sm:text-sm text-on-surface-variant">
                  {day.items.map((item) => (
                    <p key={item} className="flex gap-2">
                      <span className="material-symbols-outlined text-primary text-base shrink-0">
                        check
                      </span>
                      {item}
                    </p>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA under schedule */}
        <ScrollReveal delay={300}>
          <div className="text-center mt-8 sm:mt-12">
            <a
              className="inline-flex items-center gap-3 bg-linear-to-br from-primary to-primary-container text-on-primary-container px-8 sm:px-10 py-4 sm:py-5 rounded-xl font-black text-base sm:text-xl hover:scale-105 active:scale-95 transition-all duration-300 animate-pulse-glow"
              href="#pricing"
            >
              XEM 2 GÓI HỌC — TỪ 3,000,000đ
              <span className="material-symbols-outlined">arrow_downward</span>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
