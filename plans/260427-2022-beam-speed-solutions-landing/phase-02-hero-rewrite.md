# Phase 02 — Hero Rewrite

**Status:** pending
**Priority:** P0 (above-the-fold = quan trọng nhất)
**Effort:** M (~45 phút)

## Goal

Rewrite Hero để bắt đúng audience kỹ sư xây dựng + value prop "AI làm Revit Add-in không cần code" + price anchor 10M→5M ngay trong hero để qualify visitor.

## Files to Modify

- `src/components/Hero.tsx`

## Concrete Changes

### Top badge
```diff
-  ZOOM MIỄN PHÍ — THỨ 6 & THỨ 7 — 20H
+  KHÓA HỌC LIVE ZOOM — TUYỂN SINH ĐỢT 1
```

### Headline (h1)
```
Kỹ Sư Xây Dựng:
Tạo Revit Add-in & Web Bán Hàng Bằng AI Agents —
KHÔNG CẦN BIẾT CODE
```
Phần "KHÔNG CẦN BIẾT CODE" dùng gradient text (giữ class hiện tại).

### Sub-paragraph (p)
```
Live Zoom cùng Tony Hoàng — CEO BimSpeed.
Học cách dùng Anti-gravity + Claude Code biến mọi
ý tưởng Revit Add-in thành sản phẩm chạy thật.
Bonus: trọn bộ skills/agents Tony đã build.
```

### Price banner (NEW — thay slot counter cũ)
Container đỏ-vàng với:
- Giá gốc gạch ngang: ~~10,000,000đ~~
- Giá hiện tại: **Từ 3,000,000đ** (lớn, gradient)
- Sub-line nhỏ: "2 gói: Revit + AI (3M) · Full + Web (5M)"
- Badge: "GIẢM TỚI 70% — HỖ TRỢ KỸ SƯ XÂY DỰNG"

Giữ slot counter (211/300) ở dưới CTA hoặc bỏ — **decision: giữ nhưng đổi text "slot đã đăng ký khóa học"**.

### CTA button
```diff
-  THAM GIA NHÓM ZALO — MIỄN PHÍ
+  XEM 2 GÓI HỌC — TỪ 3,000,000đ
```
Click → scroll xuống `#pricing` (Pricing section show 2 cards). Anchor link `<a href="#pricing">`.

### Speaker block
- **Bỏ Tony Trieu** (xóa block thứ 2 dòng 93-107).
- Giữ Tony Hoang, đổi role:
  ```diff
  -  CEO BimSpeed
  +  CEO BimSpeed · Tác giả khóa Revit API 16 chương
  ```
- Dời block speaker này thành 1 cột centered thay vì 2 cột flex-row.

## Implementation Steps

1. Replace badge text (dòng 28).
2. Rewrite h1 (dòng 31-36) — 3 dòng, gradient phần cuối.
3. Rewrite paragraph (dòng 38-44).
4. Replace slot counter container (dòng 47-61) bằng price block. Slot counter dời xuống dưới CTA, đổi text.
5. Đổi CTA label (dòng 70).
6. Xóa block Tony Trieu (dòng 93-107). Đổi flex container thành single-column centered.
7. Update Tony Hoang role text (dòng 90).

## Visual Spec

```
[ Badge: KHÓA HỌC LIVE ZOOM — TUYỂN SINH ĐỢT 1 ]

  Kỹ Sư Xây Dựng:
  Tạo Revit Add-in & Web Bán Hàng Bằng AI Agents —
  KHÔNG CẦN BIẾT CODE   ← gradient

  Live Zoom cùng Tony Hoàng — CEO BimSpeed.
  Học cách dùng Anti-gravity + Claude Code...

  ┌──────────────────────────────────┐
  │  GIẢM TỚI 70% — HỖ TRỢ KỸ SƯ      │
  │  ~~10,000,000đ~~                  │
  │  Từ 3,000,000đ                    │   ← gradient, font-black
  │  2 gói: Revit+AI (3M) · Full (5M) │
  └──────────────────────────────────┘

  [ XEM 2 GÓI HỌC — TỪ 3,000,000đ →]    ← anchor #pricing

  ┌─ 211/300 slot đã đăng ký · còn 89 ─┐

       [Avatar Tony Hoang]
       Mr. Tony Hoang
       CEO BimSpeed · Tác giả khóa Revit API 16 chương
```

## Todo

- [ ] Top badge text
- [ ] Headline (3 dòng + gradient)
- [ ] Paragraph rewrite
- [ ] Price block (10M gạch → "Từ 3M" + sub-line 2 gói)
- [ ] CTA label "XEM 2 GÓI HỌC" + anchor `#pricing`
- [ ] Slot counter — chuyển vị trí + đổi text
- [ ] Bỏ Tony Trieu, single speaker centered
- [ ] Update Tony Hoang role
- [ ] Mobile responsive check (375px)

## Success Criteria

- Headline mention rõ "Kỹ sư xây dựng" + "Revit Add-in" + "không cần code".
- Price "Từ 3,000,000đ" có gạch giá gốc 10M + dòng phụ 2 gói.
- CTA scroll smooth xuống `#pricing`.
- Chỉ 1 speaker centered.
- Không vỡ layout mobile (hero `min-h-[100svh]`).
