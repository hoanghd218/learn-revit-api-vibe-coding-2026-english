---
slug: beam-speed-solutions-landing
created: 2026-04-27
status: in-progress
blockedBy: []
blocks: []
---

# Beam Speed Solutions — Landing Page Pivot

Pivot trang chủ `src/app/page.tsx` từ funnel "AI Agent Company" miễn phí → trang bán trực tiếp khóa học **Beam Speed Solutions** với **2 gói**: Option 1 (Revit + AI Agent) **3,000,000đ** và Option 2 (Full + Vibe Coding Web) **5,000,000đ**. Giá gốc gạch ngang **10,000,000đ**. Audience: kỹ sư xây dựng (kỹ sư Beam, Beam Manager, Beam Coordinator, Beam Holder).

## Decisions (đã chốt với user)

- **Vị trí trang:** Replace homepage `/` (rewrite `src/app/page.tsx` + components hiện có).
- **Funnel:** Direct sale với 2 options. CTA chính = đăng ký Zalo để chốt đơn / thanh toán. Không free webinar.
- **Pricing 2 options:**
  - **Option 1 — 3,000,000đ:** Revit API (16 chương video HD) + 3 buổi Live Zoom AI Agents cho Revit (Setup, Vibe Coding Add-in, AI QC Model). Bonus: skills Revit + agents tự động hóa Revit.
  - **Option 2 — 5,000,000đ:** Full Option 1 + Buổi 4 Live Zoom Vibe Coding Web (build landing page, course platform, payment SePay/Stripe). Bonus thêm: skills automation web + template web bán khóa học + mentoring 1:1.
  - Hero hiển thị "Từ 3,000,000đ" + 1 CTA "Xem gói học". Pricing section show 2 cards side-by-side.
- **Speaker:** Chỉ Tony Hoang (CEO BimSpeed). Bỏ Tony Trieu khỏi Hero & Speakers.
- **Curriculum:** List 16 chương (collapsible) + nhấn mạnh "60% video HD có sẵn (cơ bản) + 40% live Zoom focus AI Agents (anti-gravity, vibe coding)". Không embed video thật.

## Key Brand Pivots

| Cũ | Mới |
|---|---|
| AI AGENT COMPANY | BEAM SPEED SOLUTIONS |
| Audience: chủ doanh nghiệp / marketer | Kỹ sư xây dựng (Beam roles) |
| Outcome: AI nhân viên 24/7 | Outcome: làm Revit Add-in + web bằng AI không cần code |
| Free Zoom T6+T7 | 2 gói Live Zoom: 3M (Revit-only) hoặc 5M (Full + Web) — gạch 10M |
| Bonus: skill marketing/KDP | Bonus: Tony Hoang's Revit API skills + automation skills |
| 2 mentors | 1 mentor (Tony Hoang) |

## Phases

| # | Phase | Files | Status |
|---|---|---|---|
| 01 | Brand & Header pivot | `Header.tsx`, `layout.tsx`, `Footer.tsx`, `SocialProof.tsx`, `metadata` | pending |
| 02 | Hero rewrite | `Hero.tsx` | pending |
| 03 | Pain points + Value props rewrite | `PainPoints.tsx`, `ValueProps.tsx` | pending |
| 04 | Course curriculum (16 chương) | `CourseContent.tsx` (rewrite) | pending |
| 05 | Bonuses (Tony's skills/agents) | `Bonuses.tsx` | pending |
| 06 | Speaker (Tony only) + Schedule + FAQ | `Speakers.tsx`, `Schedule.tsx`, `FAQ.tsx` | pending |
| 07 | Pricing section + Final CTA + page wiring | NEW `Pricing.tsx`, `FinalCTA.tsx`, `page.tsx`, `AICompany.tsx` decision | pending |

## Key Dependencies

- Phase 01 trước Phase 02 (brand name dùng chung).
- Phase 04 độc lập (chỉ data + UI 16 chương).
- Phase 07 phụ thuộc 01-06 (compose page + thêm pricing trước CTA cuối).

## Success Criteria

- Trang `/` hiển thị nội dung Beam Speed Solutions, không còn từ "AI Agent Company".
- Mọi CTA dẫn về Zalo group (giữ link hiện tại `https://zalo.me/g/ghjisy452` trừ khi user đổi).
- Pricing rõ ràng: 10M gạch → 5M.
- Speakers chỉ còn Tony Hoang.
- Curriculum list đủ 16 chương (Phần 1 → Phần 20) với số bài + tổng thời lượng.
- `pnpm build` pass, `pnpm lint` pass.
- Mobile + desktop responsive (375px, 768px, 1280px).

## Open Questions (cho user xác nhận trong/sau khi review)

1. **Logo & tên công ty:** "Beam Speed Solutions" hay "BimSpeed"? Brief có cả hai (`BimSpeed Solution` trong Speakers cũ vs `Beam Speed Solutions` trong yêu cầu). Xác nhận chính tả?
2. **Anti-gravity** trong brief — đây là sản phẩm Google Antigravity (IDE) hay tên khác? Cách giải thích trên trang?
3. **Số slot / số học viên đã đăng ký** cho Pricing urgency — dùng số nào (hiện trang dùng 211/300)?
4. **CTA:** Zalo link giữ nguyên `zalo.me/g/ghjisy452` hay đổi? Có cần thêm nút Messenger/SĐT không?
5. **Hình ảnh demo Revit Add-in** dùng gì cho Course section? (hiện folder `public/images/day1`, `day2` toàn ảnh marketing — cần ảnh Revit/Add-in mới?)
