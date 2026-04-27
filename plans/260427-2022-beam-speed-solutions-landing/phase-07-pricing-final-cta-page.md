# Phase 07 — Pricing Section + Final CTA + Page Wiring

**Status:** pending
**Priority:** P0 (closing the sale)
**Effort:** M (~60 phút)

## Goal

- Tạo `Pricing.tsx` mới — section bán hàng dedicated với breakdown 10M → 5M, ROI, gì có trong khóa.
- Rewrite `FinalCTA.tsx` thành closing hard-sell.
- Sửa `page.tsx`: thêm Pricing, quyết định giữ/bỏ `AICompany` + `Gallery` + `Countdown`.

## Files to Modify

- `src/components/Pricing.tsx` — **NEW**
- `src/components/FinalCTA.tsx`
- `src/app/page.tsx`
- `src/components/AICompany.tsx` — **decision: bỏ khỏi page** (không relevant với audience kỹ sư xây dựng — section visualize "AI company team" không phù hợp). KHÔNG xóa file (tránh phá rối các route khác); chỉ unmount khỏi `page.tsx`.
- `src/components/Gallery.tsx` — **decision: kiểm tra content**. Nếu là ảnh marketing/community thì giữ với caption mới về "Học viên kỹ sư xây dựng". Nếu không phù hợp → bỏ.
- `src/components/Countdown.tsx` — giữ với mục đích đếm ngược tới buổi 1 hoặc end-of-promo.

## Pricing.tsx (NEW) — 2 Cards Side-by-Side

```tsx
"use client";
import ScrollReveal from "./ScrollReveal";

const ZALO_LINK = "https://zalo.me/g/ghjisy452";

interface Tier {
  id: 'option1' | 'option2';
  badge?: string;             // "PHỔ BIẾN NHẤT"
  highlighted: boolean;        // option2 = true
  name: string;
  tagline: string;
  oldPrice: string;
  price: string;
  saving: string;
  includes: string[];
  notIncluded?: string[];      // hiển thị xám/gạch
  ctaLabel: string;
}

const tiers: Tier[] = [
  {
    id: 'option1',
    highlighted: false,
    name: "Gói Revit + AI",
    tagline: "Cho kỹ sư chỉ cần làm Revit Add-in bằng AI",
    oldPrice: "6,000,000đ",
    price: "3,000,000đ",
    saving: "Tiết kiệm 3,000,000đ",
    includes: [
      "13 giờ video HD — 16 chương Revit API (trọn đời)",
      "Buổi 1: Setup Anti-gravity + Claude Code",
      "Buổi 2: Vibe Coding Revit Add-in",
      "Buổi 3: AI phân tích & QC model Revit",
      "Bộ Skills phát triển Revit API (3M)",
      "Bộ Agents tự động hóa Revit (2.5M)",
      "Group Zalo support",
    ],
    notIncluded: [
      "Buổi 4: Vibe Coding Web",
      "Skills tự động hóa website",
      "Template web bán khóa học",
      "Mentoring 1:1 với Tony",
    ],
    ctaLabel: "ĐĂNG KÝ — 3,000,000đ",
  },
  {
    id: 'option2',
    highlighted: true,
    badge: "PHỔ BIẾN NHẤT",
    name: "Gói Full + Vibe Coding Web",
    tagline: "Cho kỹ sư muốn cả Revit Add-in lẫn web bán hàng",
    oldPrice: "10,000,000đ",
    price: "5,000,000đ",
    saving: "Tiết kiệm 5,000,000đ",
    includes: [
      "TẤT CẢ những gì có trong Gói Revit + AI",
      "Buổi 4: Vibe Coding Web — build web bán hàng/khóa học",
      "Skills tự động hóa website (2M)",
      "Template web bán khóa học (2.5M)",
      "Mentoring 1:1 60 phút với Tony Hoàng",
      "Ưu tiên reply trong Zalo group",
    ],
    ctaLabel: "ĐĂNG KÝ — 5,000,000đ",
  },
];

export default function Pricing() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6" id="pricing">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10">
            <div className="inline-block px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-black mb-4">
              ƯU ĐÃI MỞ BÁN ĐỢT 1
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tighter mb-3">
              Chọn Gói Phù Hợp Với Bạn
            </h2>
            <p className="text-on-surface-variant">2 gói — học 1 lần, dùng cả sự nghiệp</p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {tiers.map((tier, i) => (
            <ScrollReveal key={tier.id} delay={i * 150}>
              <div
                className={`relative h-full rounded-3xl p-6 sm:p-8 flex flex-col
                  ${tier.highlighted
                    ? "bg-surface-container-high border-2 border-primary shadow-[0_0_60px_rgba(245,158,11,0.25)]"
                    : "bg-surface border border-outline-variant/40"
                  }`}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-linear-to-r from-primary to-primary-container text-on-primary-container text-xs font-black shadow-lg">
                    {tier.badge}
                  </div>
                )}

                <h3 className="text-2xl font-black mb-1">{tier.name}</h3>
                <p className="text-sm text-on-surface-variant mb-6">{tier.tagline}</p>

                <div className="mb-6">
                  <div className="text-on-surface-variant line-through text-base">{tier.oldPrice}</div>
                  <div className={`text-4xl sm:text-5xl font-black ${tier.highlighted
                      ? "bg-clip-text text-transparent bg-linear-to-r from-primary via-primary-container to-secondary"
                      : "text-on-surface"
                    }`}>
                    {tier.price}
                  </div>
                  <div className="text-xs text-red-400 font-bold mt-1">{tier.saving}</div>
                </div>

                <ul className="space-y-2.5 mb-6 flex-1">
                  {tier.includes.map(item => (
                    <li key={item} className="flex gap-2 text-sm">
                      <span className="material-symbols-outlined text-primary text-base shrink-0">check_circle</span>
                      <span>{item}</span>
                    </li>
                  ))}
                  {tier.notIncluded?.map(item => (
                    <li key={item} className="flex gap-2 text-sm text-on-surface-variant/50 line-through">
                      <span className="material-symbols-outlined text-base shrink-0">close</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={ZALO_LINK}
                  target="_blank" rel="noopener noreferrer"
                  className={`block w-full text-center py-4 rounded-2xl font-black text-base sm:text-lg transition-all hover:scale-[1.02] active:scale-95
                    ${tier.highlighted
                      ? "bg-linear-to-br from-primary to-primary-container text-on-primary-container animate-pulse-glow"
                      : "bg-surface-container-high text-on-surface border border-primary/30 hover:bg-surface-container-highest"
                    }`}
                >
                  {tier.ctaLabel}
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <p className="text-center text-xs text-on-surface-variant mt-6">
          Click → Zalo của Tony · gửi link thanh toán SePay/chuyển khoản trong 5 phút
        </p>
      </div>
    </section>
  );
}
```

**Style notes:**
- Card 2 (Option 2) `highlighted: true` — viền primary, glow, gradient price, animated CTA.
- Card 1 (Option 1) flat — vẫn rõ ràng nhưng không cướp focus.
- `notIncluded` items: gạch ngang + opacity thấp để khách thấy "thiếu gì khi mua gói rẻ" → push upgrade.

## FinalCTA.tsx — Rewrite

```diff
-  Một Người. Một Hệ Thống AI Agent.
-  Vận Hành Như Cả Team.
+  Kỹ Sư Xây Dựng + AI Agents
+  = Sản Phẩm Trong 1 Tối, Không Cần Code.
```

CTA: 2 nút song song (mobile: stack dọc):
```tsx
<div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
  <a href={ZALO_LINK} className="bg-surface-container-high border border-primary/40 text-on-surface px-6 py-4 rounded-2xl font-black">
    GÓI REVIT + AI — 3,000,000đ
  </a>
  <a href={ZALO_LINK} className="bg-linear-to-br from-primary to-primary-container text-on-primary-container px-6 py-4 rounded-2xl font-black animate-pulse-glow">
    GÓI FULL + WEB — 5,000,000đ
  </a>
</div>
```

```diff
-  Hơn 2,400+ người đã tham gia. Đừng bỏ lỡ!
+  Đợt mở bán đợt 1 chỉ 100 slot · còn 89 slot.
```

Bỏ `REMAINING = 89` constant cũ → đổi thành `SLOTS_LEFT = 89` text only (không hardcode misleading).

## page.tsx Wiring

```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import PainPoints from "@/components/PainPoints";
import ValueProps from "@/components/ValueProps";
import CourseContent from "@/components/CourseContent";
import Bonuses from "@/components/Bonuses";
import Speakers from "@/components/Speakers";
import Schedule from "@/components/Schedule";
import Pricing from "@/components/Pricing";   // NEW
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import SocialProof from "@/components/SocialProof";

export default function Home() {
  return (
    <>
      <Header />
      <SocialProof />
      <main className="tech-grid min-h-screen pt-20">
        <Hero />
        <PainPoints />        {/* Pain → why need this */}
        <ValueProps />        {/* Solution promise */}
        <Countdown />         {/* Urgency: countdown to next batch */}
        <CourseContent />     {/* What you'll learn (16 chapters + 4 live) */}
        <Speakers />          {/* Who teaches (Tony only) */}
        <Schedule />          {/* When (4 weekly sessions) */}
        <Bonuses />           {/* Stack value */}
        <Pricing />           {/* The ask: 5M */}
        <FAQ />               {/* Objection handling */}
        <FinalCTA />          {/* Closer */}
      </main>
      <Footer />
    </>
  );
}
```

**Bỏ:** `<AICompany />` (không relevant). **Bỏ:** `<Gallery />` trừ khi user xác nhận giữ.

**Reorder rationale:**
- Pain → ValueProps (problem-solution)
- Countdown sớm để tạo urgency
- CourseContent → Speakers → Schedule (what + who + when)
- Bonuses → Pricing (stack value rồi đưa giá)
- FAQ → FinalCTA (xử lý objection rồi close)

## Implementation Steps

1. Tạo `src/components/Pricing.tsx`.
2. Edit `FinalCTA.tsx`: headline + CTA + tagline.
3. Edit `Countdown.tsx`: đọc file → đổi target sang ngày khóa học mở (hoặc giữ generic countdown).
4. Edit `page.tsx`: bỏ AICompany + Gallery, thêm Pricing, reorder.
5. `pnpm build && pnpm lint`.
6. Test mobile (375px), tablet (768px), desktop (1280px).

## Todo

- [ ] Tạo `Pricing.tsx` — 2 cards side-by-side, Option 2 highlighted
- [ ] Rewrite `FinalCTA.tsx` — 2 CTA buttons (3M + 5M)
- [ ] Đọc + cập nhật `Countdown.tsx`
- [ ] Sửa `page.tsx` (imports + JSX, bỏ AICompany & Gallery)
- [ ] Hero CTA anchor `#pricing` smooth scroll
- [ ] Schedule CTA anchor `#pricing`
- [ ] `pnpm build` pass
- [ ] `pnpm lint` pass
- [ ] Visual QA: mobile 375px (cards stack vertical), desktop 1280px (side-by-side)
- [ ] Confirm tất cả CTA → Zalo link

## Risks

- 2 cards trên mobile sẽ stack dọc → đảm bảo Option 2 (highlighted) ở DƯỚI Option 1 trên mobile (visual hierarchy "rẻ trước, đắt sau") — hoặc đảo lên trên để push upgrade. **Decision: Option 2 vẫn ở dưới, mobile flow tự nhiên trái → phải = trên → dưới.**
- `Gallery.tsx` chứa nội dung có thể relevant — cần đọc trước khi bỏ. Nếu chứa ảnh học viên hoặc demo → giữ với caption mới.
- `Countdown.tsx` đang đếm tới ngày sự kiện cũ → cần update target date hoặc bỏ.
- Bỏ `AICompany` (327 LOC) là quyết định lớn — không xóa file, chỉ unmount.

## Success Criteria

- Pricing section hiển thị 2 cards: Option 1 (3M, flat) + Option 2 (5M, highlighted "PHỔ BIẾN NHẤT").
- Option 1 có `notIncluded` items gạch ngang để push upgrade.
- FinalCTA có 2 CTA buttons.
- `page.tsx` flow: Hero → Pain → Value → Countdown → Course → Speaker → Schedule → Bonus → Pricing → FAQ → Final.
- Hero + Schedule CTA scroll smooth tới `#pricing`.
- Build + lint pass.
- Test 3 breakpoints OK.
