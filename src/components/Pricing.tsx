"use client";

import ScrollReveal from "./ScrollReveal";

const ZALO_LINK = "https://zalo.me/g/ghjisy452";

interface ValueItem {
  label: string;
  value: number; // VND
}

interface Tier {
  id: "option1" | "option2";
  badge?: string;
  highlighted: boolean;
  name: string;
  tagline: string;
  pricePaid: number;
  valueStack: ValueItem[];
  fastActionBonus?: ValueItem[]; // chỉ nhận khi đăng ký trong 48h
  notIncluded?: string[];
  ctaLabel: string;
}

const formatVnd = (n: number) =>
  n.toLocaleString("vi-VN").replace(/,/g, ",") + "đ";

const tiers: Tier[] = [
  {
    id: "option1",
    highlighted: false,
    name: "Gói Revit + AI",
    tagline: "Cho kỹ sư BIM chỉ cần làm Revit Add-in bằng AI",
    pricePaid: 3_000_000,
    valueStack: [
      { label: "Khóa Revit API 16 chương — 13 giờ video HD (trọn đời)", value: 8_000_000 },
      { label: "3 buổi Live Zoom (Setup, Vibe Add-in, AI QC Model)", value: 4_500_000 },
      { label: "TOÀN BỘ Skills phát triển Revit API", value: 3_000_000 },
      { label: "TOÀN BỘ Agents tự động hóa Revit", value: 2_500_000 },
      { label: "TOÀN BỘ Skills AI Agent General-Purpose", value: 2_000_000 },
      { label: "TOÀN BỘ Templates Revit Add-in (multi-version)", value: 1_500_000 },
      { label: "🤝 Ưu tiên hợp tác dự án cùng Tony & BimSpeed (top học viên)", value: 5_000_000 },
      { label: "Group Zalo support trong & sau khóa", value: 500_000 },
    ],
    fastActionBonus: [
      { label: "🔥 BONUS 48H: Audit code review (group session 60p)", value: 1_000_000 },
    ],
    notIncluded: [
      "Buổi 4: Vibe Coding Web",
      "Skills Vibe Coding Web",
      "Agents Marketing & Content cho Web",
      "Skills tự động hóa Website",
      "Template web bán khóa học",
      "Group Coaching hàng tuần cùng Tony",
    ],
    ctaLabel: "ĐĂNG KÝ NGAY — 3,000,000đ",
  },
  {
    id: "option2",
    highlighted: true,
    badge: "PHỔ BIẾN NHẤT · TIẾT KIỆM 86%",
    name: "Gói Full + Vibe Coding Web",
    tagline: "Cho người muốn cả đội AI Revit + AI Web bán hàng",
    pricePaid: 5_000_000,
    valueStack: [
      { label: "TẤT CẢ Gói Revit + AI bên trái", value: 27_000_000 },
      { label: "Buổi 4 Live Zoom — Vibe Coding Web (gồm web render kiến trúc kiểu app.bimai.vn)", value: 1_500_000 },
      { label: "TOÀN BỘ Skills Vibe Coding Web (Next.js, payment, render 3D, deploy)", value: 3_000_000 },
      { label: "Bộ Agents Marketing & Content cho Web", value: 2_000_000 },
      { label: "Skills tự động hóa Website", value: 2_000_000 },
      { label: "Template Web Bán Khóa Học (deploy 1 click)", value: 2_500_000 },
      { label: "Group Coaching hàng tuần cùng Tony (4 buổi/tháng)", value: 4_000_000 },
    ],
    fastActionBonus: [
      { label: "🔥 BONUS 48H: Workshop tự host AI Agent server (giá trị 2M)", value: 2_000_000 },
      { label: "🔥 BONUS 48H: Pack 50+ prompt templates Tony dùng hàng ngày", value: 1_500_000 },
    ],
    ctaLabel: "ĐĂNG KÝ NGAY — 5,000,000đ",
  },
];

function calcTotal(tier: Tier, includeFastAction = true) {
  const base = tier.valueStack.reduce((s, i) => s + i.value, 0);
  const fa = includeFastAction
    ? (tier.fastActionBonus?.reduce((s, i) => s + i.value, 0) ?? 0)
    : 0;
  return base + fa;
}

export default function Pricing() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-black mb-4 animate-pulse">
              ƯU ĐÃI MỞ BÁN ĐỢT 1 — CHỈ CÒN 89 SLOT
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter mb-3">
              Đây Là TẤT CẢ Những Gì Bạn Nhận Được
            </h2>
            <p className="text-on-surface-variant text-sm sm:text-base">
              Mỗi gói đều stack giá trị gấp{" "}
              <span className="text-primary font-black">7x — 8x</span> so với mức bạn trả
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, i) => {
            const baseTotal = tier.valueStack.reduce((s, it) => s + it.value, 0);
            const totalWithFA = calcTotal(tier);
            const savings = totalWithFA - tier.pricePaid;
            const savingsPct = Math.round((savings / totalWithFA) * 100);
            return (
              <ScrollReveal key={tier.id} delay={i * 150}>
                <div
                  className={`relative h-full rounded-3xl p-6 sm:p-8 flex flex-col ${
                    tier.highlighted
                      ? "bg-surface-container-high border-2 border-primary shadow-[0_0_60px_rgba(245,158,11,0.25)]"
                      : "bg-surface border border-outline-variant/40"
                  }`}
                >
                  {tier.badge && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-primary to-primary-container text-on-primary-container text-[10px] sm:text-xs font-black shadow-lg whitespace-nowrap">
                      {tier.badge}
                    </div>
                  )}

                  <h3 className="text-2xl font-black mb-1">{tier.name}</h3>
                  <p className="text-sm text-on-surface-variant mb-5">
                    {tier.tagline}
                  </p>

                  {/* Value stack */}
                  <ul className="space-y-2 mb-4 flex-1">
                    {tier.valueStack.map((item) => (
                      <li
                        key={item.label}
                        className="flex items-start justify-between gap-3 text-xs sm:text-sm"
                      >
                        <div className="flex gap-2 flex-1 min-w-0">
                          <span className="material-symbols-outlined text-primary text-base shrink-0">
                            check_circle
                          </span>
                          <span className="leading-snug">{item.label}</span>
                        </div>
                        <span className="text-on-surface-variant font-bold whitespace-nowrap text-[11px] sm:text-xs">
                          {formatVnd(item.value)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* Subtotal before fast action */}
                  <div className="border-t border-outline-variant/30 pt-3 mb-3 flex items-center justify-between text-xs sm:text-sm">
                    <span className="text-on-surface-variant">Tổng giá trị nội dung:</span>
                    <span className="font-black text-on-surface">{formatVnd(baseTotal)}</span>
                  </div>

                  {/* Fast action bonus */}
                  {tier.fastActionBonus && tier.fastActionBonus.length > 0 && (
                    <div className="bg-red-600/10 border border-red-500/30 rounded-xl p-3 mb-4">
                      <div className="text-[10px] font-black text-red-400 uppercase tracking-wider mb-1.5">
                        ⚡ Bonus đăng ký trong 48h
                      </div>
                      <ul className="space-y-1.5">
                        {tier.fastActionBonus.map((b) => (
                          <li
                            key={b.label}
                            className="flex items-start justify-between gap-2 text-xs"
                          >
                            <span className="flex-1">{b.label}</span>
                            <span className="text-red-400 font-bold whitespace-nowrap">
                              {formatVnd(b.value)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* notIncluded */}
                  {tier.notIncluded && tier.notIncluded.length > 0 && (
                    <ul className="space-y-1.5 mb-4">
                      {tier.notIncluded.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2 text-xs text-on-surface-variant/50 line-through"
                        >
                          <span className="material-symbols-outlined text-sm shrink-0">
                            close
                          </span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* The deal */}
                  <div
                    className={`rounded-2xl p-4 sm:p-5 mb-4 ${
                      tier.highlighted
                        ? "bg-linear-to-br from-primary/10 to-secondary-container/10 border border-primary/40"
                        : "bg-surface-container-high border border-outline-variant/30"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5 text-xs sm:text-sm">
                      <span className="text-on-surface-variant">Giá trị thật:</span>
                      <span className="line-through text-on-surface-variant">
                        {formatVnd(totalWithFA)}
                      </span>
                    </div>
                    <div className="flex items-baseline justify-between mb-1">
                      <span className="text-xs sm:text-sm font-bold">Bạn chỉ trả:</span>
                      <span
                        className={`text-3xl sm:text-4xl font-black ${
                          tier.highlighted
                            ? "bg-clip-text text-transparent bg-linear-to-r from-primary via-primary-container to-secondary"
                            : "text-on-surface"
                        }`}
                      >
                        {formatVnd(tier.pricePaid)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-red-400 font-bold">Tiết kiệm:</span>
                      <span className="text-red-400 font-black">
                        {formatVnd(savings)} ({savingsPct}% off)
                      </span>
                    </div>
                  </div>

                  {/* CTA */}
                  <a
                    href={ZALO_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-4 rounded-2xl font-black text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-95 ${
                      tier.highlighted
                        ? "bg-linear-to-br from-primary to-primary-container text-on-primary-container animate-pulse-glow"
                        : "bg-surface-container-high text-on-surface border border-primary/30 hover:bg-surface-container-highest"
                    }`}
                  >
                    {tier.ctaLabel}
                  </a>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Guarantee + scarcity reminder */}
        <ScrollReveal delay={300}>
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-surface-container-high rounded-2xl p-5 sm:p-6 border-2 border-green-500/40">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-2xl">
                    verified_user
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-black text-green-400 uppercase tracking-wider mb-1">
                    Cam kết của Tony Hoàng
                  </div>
                  <h4 className="font-black text-base sm:text-lg mb-1">
                    Hoàn tiền 100% trong 7 ngày
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Học 7 ngày đầu, nếu không hài lòng — refund 100%, không hỏi lý do.
                    Bạn không có rủi ro nào cả.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-high rounded-2xl p-5 sm:p-6 border-2 border-red-500/40">
              <div className="flex items-start gap-3">
                <div className="shrink-0 w-12 h-12 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                  <span className="material-symbols-outlined text-red-400 text-2xl">
                    schedule
                  </span>
                </div>
                <div>
                  <div className="text-[10px] font-black text-red-400 uppercase tracking-wider mb-1">
                    Tại sao phải đăng ký NGAY?
                  </div>
                  <h4 className="font-black text-base sm:text-lg mb-1">
                    Đợt 1 chỉ còn 89 slot · Bonus 48h hết sau giờ
                  </h4>
                  <p className="text-xs sm:text-sm text-on-surface-variant">
                    Sau đợt 1: giá quay lại 10M, không còn fast action bonus, không còn group coaching subsidy.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <p className="text-center text-xs text-on-surface-variant mt-6">
          Click → Zalo của Tony · gửi link thanh toán SePay/chuyển khoản trong 5 phút
        </p>
      </div>
    </section>
  );
}
