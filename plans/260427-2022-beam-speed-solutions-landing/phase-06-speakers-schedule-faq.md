# Phase 06 — Speaker (Tony only) + Schedule + FAQ Rewrite

**Status:** pending
**Priority:** P1
**Effort:** M (~45 phút)

## Goal

- Speakers: chỉ giữ Tony Hoang, đổi bio sát với brief.
- Schedule: thay 2 buổi Zoom T6/T7 chung chung → lịch học khóa Beam Speed (4 buổi live + truy cập video).
- FAQ: rewrite 3 câu hỏi, thêm 3-4 câu mới về Revit/AI/code/payment.

## Files to Modify

- `src/components/Speakers.tsx`
- `src/components/Schedule.tsx`
- `src/components/FAQ.tsx`

## Speakers.tsx

```ts
const speakers = [
  {
    name: "Mr. Tony Hoàng",
    title: "CEO BimSpeed · Tác giả khóa Revit API 16 chương",
    bio: "8+ năm phát triển Revit Add-in cho công ty xây dựng. Tác giả bộ skills/agents Claude Code chuyên cho BIM. Đã đào tạo 2,000+ kỹ sư xây dựng dùng Revit API.",
    image: "/images/hoang-real.jpg",
    stats: [
      { value: "2,000+", label: "Học viên" },
      { value: "16",     label: "Chương Revit API" },
      { value: "8+",     label: "Năm Revit API" },
    ],
  },
];
```

Layout: vì chỉ 1 speaker → đổi grid thành single column centered (max-width tighter).

```diff
-  <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
+  <div className="max-w-3xl mx-auto">
```

## Schedule.tsx

Đổi 2 cột "Thứ 6 / Thứ 7" → 4 buổi live + video on-demand.

```ts
const schedule = [
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
    badge: "GÓI 5M",        // chỉ học viên gói 5M tham dự
    items: [
      "AI build landing page + thanh toán SePay/Stripe",
      "Course platform: video, license, member area",
      "Deploy Vercel/Cloudflare miễn phí",
      "Mentoring 1:1 cá nhân hóa roadmap (chỉ gói 5M)",
    ],
  },
];
```

Buổi 1-3 không có `badge` (cả 2 gói đều có). Buổi 4 có `badge: "GÓI 5M"` — render badge nổi bật góc card.

Section heading: "LỊCH HỌC LIVE — 4 BUỔI ZOOM"

Grid: đổi `sm:grid-cols-2` (2 cột) → giữ 2 cột nhưng xếp 4 cards theo grid 2×2.

CTA dưới schedule:
```diff
-  THAM GIA NHÓM ZALO — NHẬN LINK ZOOM
+  XEM 2 GÓI HỌC — TỪ 3,000,000đ
```
Anchor `#pricing`.

## FAQ.tsx

Replace `faqs` array với 6 câu:

```ts
const faqs = [
  {
    question: "Tôi không biết code C# có học được không?",
    answer:
      "Hoàn toàn được. 60% video HD bắt đầu từ kiến thức C# cơ bản. Track AI Agents (40% live) thiết kế cho người không biết code — bạn mô tả ý tưởng, AI viết code.",
  },
  {
    question: "Anti-gravity là gì? Có miễn phí không?",
    answer:
      "Anti-gravity (Google Antigravity) là IDE AI agent mới do Google ra mắt. Hiện miễn phí trong giai đoạn beta. Khóa học hướng dẫn đầy đủ cách cài + dùng.",
  },
  {
    question: "Khóa học bao nhiêu tiền? Có mấy gói?",
    answer:
      "Giá gốc 10,000,000đ — đợt mở bán đầu tiên còn 2 gói: Gói Revit + AI Agent (3 buổi live + video HD) giá 3,000,000đ; Gói Full + Vibe Coding Web (4 buổi live + bonus web template + mentoring 1:1) giá 5,000,000đ. Trả 1 lần qua chuyển khoản/SePay. Liên hệ Zalo nếu cần trả 2 đợt.",
  },
  {
    question: "Học bao lâu? Có thời hạn truy cập không?",
    answer:
      "4 buổi live (1 tháng) + 13 giờ video HD truy cập trọn đời. Sau khóa vẫn nhận update bonus skills/agents khi Tony build thêm.",
  },
  {
    question: "Có support 1:1 không?",
    answer:
      "Có. Học viên đăng ký sớm được tặng 1 phiên mentoring 1:1 60 phút với Tony Hoàng. Group Zalo support trong suốt khóa.",
  },
  {
    question: "Đăng ký bằng cách nào?",
    answer:
      "Click nút 'Đăng Ký Khóa Học' để vào nhóm Zalo. Tony hoặc team sẽ gửi link thanh toán + tài liệu setup ngay.",
  },
];
```

## Implementation Steps

1. Edit `Speakers.tsx`: speakers array (1 item), layout single-column, stats với value thật.
2. Edit `Schedule.tsx`: schedule array (4 items), heading, CTA label. Đổi grid 2×2 trên desktop, 1 cột mobile.
3. Edit `FAQ.tsx`: faqs array (6 items). Default open câu 3 (giá tiền) thay vì câu 2.
4. Build pass.

## Todo

- [ ] Speakers: 1 speaker centered, stats có value thật
- [ ] Schedule: 4 buổi live, grid 2×2
- [ ] Schedule CTA label
- [ ] FAQ: 6 câu mới
- [ ] FAQ default open question 3 (giá)
- [ ] Build pass

## Success Criteria

- 1 speaker (Tony Hoàng) hiển thị centered.
- Schedule có 4 buổi rõ ràng với mốc thời gian + nội dung khóa.
- FAQ trả lời được những câu hỏi quan trọng nhất: code/giá/thời gian/support/đăng ký.
