"use client";

import ScrollReveal from "./ScrollReveal";

type BonusPlan = "both" | "option2";

const bonuses: {
  icon: string;
  title: string;
  description: string;
  value: string;
  plan: BonusPlan;
}[] = [
    // ===== Cả 2 gói =====
    {
      icon: "extension",
      title: "TOÀN BỘ Skills Phát Triển Revit API",
      description:
        "Mọi skill Tony đã build cho Claude Code: tự sinh boilerplate Add-in, debug Revit API, generate ribbon, MVVM, parameter helpers, geometry utils — copy về dùng ngay.",
      value: "3,000,000đ",
      plan: "both",
    },
    {
      icon: "smart_toy",
      title: "TOÀN BỘ Agents Tự Động Hóa Revit",
      description:
        "Agents đọc model Revit, sinh báo cáo QC Excel, gửi email stakeholders, post update lên Discord/Slack — chạy 24/7 không cần can thiệp.",
      value: "2,500,000đ",
      plan: "both",
    },
    {
      icon: "auto_awesome",
      title: "TOÀN BỘ Skills AI Agent General-Purpose",
      description:
        "Toolkit Claude Code: prompts library, MCP configs, sub-agent templates, hooks, workflow patterns — dùng cho mọi domain ngoài Revit.",
      value: "2,000,000đ",
      plan: "both",
    },
    {
      icon: "folder_special",
      title: "TOÀN BỘ Templates Revit Add-in Tony Đã Tạo",
      description:
        "Starter projects (multi-version 2020-2025), MVVM template, ribbon template, license offline template, installer template — chỉnh sửa là chạy.",
      value: "1,500,000đ",
      plan: "both",
    },
    {
      icon: "handshake",
      title: "Ưu Tiên Hợp Tác Dự Án Cùng Tony & BimSpeed",
      description:
        "Học viên hoàn thành tốt khóa học được ưu tiên mời tham gia các dự án thực tế của Tony Hoàng và BimSpeed — kiếm tiền từ skill vừa học, build portfolio chuyên nghiệp.",
      value: "5,000,000đ+",
      plan: "both",
    },

    // ===== Chỉ gói 5M =====
    {
      icon: "code_blocks",
      title: "TOÀN BỘ Skills Vibe Coding Web",
      description:
        "Skills sinh Next.js component, Tailwind layouts, payment integration (SePay/Stripe), auth, deployment Vercel/Cloudflare — build web không cần code.",
      value: "3,000,000đ",
      plan: "option2",
    },
    {
      icon: "campaign",
      title: "Bộ Agents Marketing & Content cho Web",
      description:
        "Agents tự sinh blog post, SEO meta, social copy, email campaign, scrape competitor data — mở web cá nhân/công ty xong là có content chạy ngay.",
      value: "2,000,000đ",
      plan: "option2",
    },
    {
      icon: "captive_portal",
      title: "Skills Tự Động Hóa Website",
      description:
        "Skills scrape data, đăng bài, quản lý fanpage, update sản phẩm, monitor uptime — tự động hóa toàn bộ vận hành website.",
      value: "2,000,000đ",
      plan: "option2",
    },
    {
      icon: "rocket_launch",
      title: "Template Web Bán Khóa Học Có Sẵn",
      description:
        "Template Next.js + Tailwind landing page, tích hợp SePay/Stripe, member area, license offline — deploy 1 click lên Vercel.",
      value: "2,500,000đ",
      plan: "option2",
    },
    {
      icon: "view_in_ar",
      title: "FULL Source Code app.bimai.vn + Hướng Dẫn",
      description:
        "Trọn bộ source code phần mềm render ảnh/video kiến trúc & nội thất bằng AI (giống app.bimai.vn). Kèm hướng dẫn deploy, chỉnh sửa, vận hành — bạn có thể tự host và bán dịch vụ render cho khách hàng.",
      value: "10,000,000đ",
      plan: "option2",
    },
  ];

export default function Bonuses() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Background decorations — hidden on mobile */}
      <div className="hidden sm:block absolute top-10 left-10 w-48 h-48 border border-primary/5 rotate-45 animate-spin-slow pointer-events-none" />
      <div className="hidden sm:block absolute bottom-10 right-10 w-32 h-32 border border-primary/5 rotate-12 animate-spin-slow pointer-events-none" />

      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-8 sm:mb-12">
            <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 animate-bounce-subtle">
              <span className="material-symbols-outlined text-base sm:text-xl">redeem</span>
              TỔNG GIÁ TRỊ BONUS LÊN TỚI 33,500,000đ
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black uppercase text-on-surface tracking-tighter mb-3 sm:mb-4">
              Quà Tặng{" "}
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary animate-gradient">
                ĐẶC BIỆT
              </span>
            </h2>
            <p className="text-base sm:text-xl text-on-surface-variant">
              Tặng <span className="font-black text-primary">TOÀN BỘ</span> skills, agents, templates Tony đã build —
              <br className="hidden sm:block" /> dùng cả sự nghiệp, không giới hạn project.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
          {bonuses.map((bonus, index) => (
            <ScrollReveal key={bonus.title} delay={index * 100} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="relative group bg-surface-container-high p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(245,158,11,0.15)] animate-shimmer overflow-hidden h-full">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-linear-to-br from-primary to-primary-container flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="material-symbols-outlined text-on-primary-container text-xl sm:text-2xl">
                      {bonus.icon}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0 pt-0.5 sm:pt-1">
                    <div className="flex flex-wrap items-center gap-1.5 mb-1">
                      <span className="px-2 py-0.5 rounded-full bg-primary/20 text-primary text-[10px] font-black">
                        Trị giá {bonus.value}
                      </span>
                      <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-black ${bonus.plan === "option2"
                            ? "bg-red-600/20 text-red-400"
                            : "bg-green-600/20 text-green-400"
                          }`}
                      >
                        {bonus.plan === "option2" ? "GÓI 5M" : "Cả 2 gói"}
                      </span>
                    </div>
                    <h3 className="text-base sm:text-lg font-black mb-1 leading-snug">{bonus.title}</h3>
                    <p className="text-xs sm:text-sm text-on-surface-variant">{bonus.description}</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Special bonus */}
        <ScrollReveal delay={400} direction="scale">
          <div className="relative bg-linear-to-br from-primary/10 via-surface-container-high to-secondary-container/10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl border-2 border-primary/40 shadow-[0_0_50px_rgba(245,158,11,0.2)] text-center overflow-hidden group hover:shadow-[0_0_60px_rgba(245,158,11,0.3)] transition-all duration-500">
            <div className="absolute inset-0 animate-shimmer" />
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-br from-primary to-primary-container mb-3 sm:mb-4 animate-float shadow-[0_0_30px_rgba(245,158,11,0.3)]">
                <span className="material-symbols-outlined text-on-primary-container text-3xl sm:text-4xl">
                  school
                </span>
              </div>
              <div className="px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-[10px] sm:text-xs font-black inline-block mb-2 sm:mb-3 animate-pulse">
                ĐẶC BIỆT — Chỉ Gói Full 5M
              </div>
              <h3 className="text-xl sm:text-2xl md:text-3xl font-black mb-2">
                Group Coaching Hàng Tuần Cùng Tony
              </h3>
              <p className="text-sm sm:text-base text-on-surface-variant max-w-lg mx-auto">
                Buổi group coaching 60 phút mỗi tuần — Tony review code/Add-in/web của học viên,
                giải đáp thắc mắc, chia sẻ best practice.
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
