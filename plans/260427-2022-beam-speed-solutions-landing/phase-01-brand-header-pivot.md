# Phase 01 — Brand & Header Pivot

**Status:** pending
**Priority:** P0 (blocker — brand name dùng xuyên suốt)
**Effort:** S (~30 phút)

## Goal

Đổi brand từ "AI AGENT COMPANY" → "BEAM SPEED SOLUTIONS" trên Header, Footer, metadata. SocialProof giữ logic random nhưng đổi context phù hợp (kỹ sư).

## Files to Modify

- `src/components/Header.tsx` — brand text + nav labels + CTA label
- `src/components/Footer.tsx` — brand text + tagline
- `src/components/SocialProof.tsx` — đổi message từ "vừa đăng ký Zoom" → "vừa đăng ký khóa học"
- `src/app/layout.tsx` — `metadata.title`, `metadata.description`
- `public/logo.png` — KHÔNG đổi (giữ logo cũ trừ khi user yêu cầu thay)

## Concrete Changes

### Header.tsx
```diff
-  AI AGENT COMPANY
+  BEAM SPEED SOLUTIONS
```
Nav items giữ nguyên cấu trúc (`#about`, `#schedule`, `#speakers`, `#faq`) nhưng:
```diff
-  Đăng Ký Miễn Phí
+  Đăng Ký Khóa Học
```
Cả desktop và mobile menu CTA.

### Footer.tsx
- Đổi brand text "AI AGENT COMPANY" → "BEAM SPEED SOLUTIONS"
- Đổi tagline về "Tổ chức khoa học AI Agents cho kỹ sư xây dựng"

### SocialProof.tsx
- `names[]` array: thay vài tên nghe hợp với kỹ sư xây dựng (giữ Hoang/Minh/Duc/Tuan, thêm role gợi ý nếu cần). Giữ nguyên logic.
- Đổi text mẫu `"vừa đăng ký Zoom miễn phí"` (nếu có) → `"vừa đăng ký khóa học Beam Speed"` — kiểm tra dòng 41-106 để locate.

### layout.tsx metadata
```ts
title: "Beam Speed Solutions — AI Agents cho Kỹ Sư Xây Dựng"
description: "Học cách dùng AI Agents (Anti-gravity, Claude Code) để tạo Revit Add-in mà không cần biết code. Live Zoom với Tony Hoàng — CEO BimSpeed."
```

## Implementation Steps

1. Edit `Header.tsx`: replace 2 chỗ "AI AGENT COMPANY" + 2 chỗ "Đăng Ký Miễn Phí".
2. Edit `Footer.tsx`: brand + tagline.
3. Edit `SocialProof.tsx`: đọc full file → đổi text notification + giữ logic.
4. Edit `layout.tsx`: title + description metadata.
5. `pnpm build` để verify không có lỗi.

## Todo

- [ ] Header brand + CTA labels
- [ ] Footer brand + tagline
- [ ] SocialProof message
- [ ] layout.tsx metadata
- [ ] Build pass

## Risks

- Logo image (`/logo.png`) đang là logo AI Agent — nếu user muốn logo Beam Speed mới phải replace asset. Hỏi trong question #1.

## Success Criteria

- Không còn chuỗi "AI Agent Company" / "AI AGENT COMPANY" trong Header/Footer/metadata (grep verify).
- Mobile menu + desktop nav cùng dùng "Đăng Ký Khóa Học".
