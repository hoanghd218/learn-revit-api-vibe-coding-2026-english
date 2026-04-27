# Phase 03 — Pain Points + Value Props Rewrite

**Status:** pending
**Priority:** P1
**Effort:** S (~30 phút)

## Goal

Đổi 4 pain points + 3 value props từ ngôn ngữ marketing/business chung → ngôn ngữ kỹ sư xây dựng cụ thể.

## Files to Modify

- `src/components/PainPoints.tsx`
- `src/components/ValueProps.tsx`

## Pain Points (4 items)

```ts
const painPoints = [
  {
    icon: "construction",
    title: "Lặp đi lặp lại các tác vụ Revit thủ công",
    description:
      "Rename sheet, tạo rebar, dimension, sheet từ Excel... mỗi project tốn hàng chục giờ làm tay. Sai 1 chỗ là sửa cả ngày.",
  },
  {
    icon: "code_off",
    title: "Muốn code Add-in nhưng không biết C#",
    description:
      "Đã thử học Revit API nhưng C#, Visual Studio, debug, MVVM... quá nhiều rào cản. Bỏ giữa chừng vì không có thời gian.",
  },
  {
    icon: "search_check",
    title: "Model Revit lỗi nhưng không tìm ra",
    description:
      "Clash, sai dimension, thiếu tham số, sai family — review thủ công không xuể. Sếp hỏi thì mất uy tín.",
  },
  {
    icon: "trending_up",
    title: "Đồng nghiệp dùng AI bỏ xa mình",
    description:
      "Người khác đã dùng Claude Code / Anti-gravity tự viết Add-in trong 1 tối. Bạn vẫn copy-paste manual. Thị trường chuyển dịch.",
  },
];
```

Section heading:
```diff
-  Bạn Có Đang Mắc Kẹt Trong Vòng Lặp Này?
+  Kỹ Sư Xây Dựng — Bạn Có Đang Mắc Kẹt Ở Đây?
```

## Value Props (3 items)

```ts
const props = [
  {
    icon: "smart_toy",
    title: "AI Agent viết Add-in giúp bạn",
    description:
      "Anti-gravity + Claude Code đọc Revit API docs → tự generate code C#. Bạn chỉ cần mô tả ý tưởng bằng tiếng Việt.",
  },
  {
    icon: "fact_check",
    title: "Phân tích model Revit tự động",
    description:
      "Dùng AI quét toàn bộ model, tìm clash, sai dim, thiếu param. Báo cáo Excel/HTML xuất sẵn cho sếp.",
  },
  {
    icon: "language",
    title: "Bonus: tạo web bán khóa học",
    description:
      "Cùng AI build website cá nhân/công ty/landing page bán hàng có thanh toán tự động — phụ thu 0đ.",
  },
];
```

## Implementation Steps

1. Edit `PainPoints.tsx` dòng 5-30: replace `painPoints` array.
2. Edit `PainPoints.tsx` dòng 38-39: heading.
3. Edit `ValueProps.tsx` dòng 5-24: replace `props` array.

## Todo

- [ ] PainPoints array (4 items)
- [ ] PainPoints heading
- [ ] ValueProps array (3 items)
- [ ] Verify icons tồn tại trong material-symbols (construction, code_off, search_check, trending_up, smart_toy, fact_check, language)

## Risks

- Material Symbols có thể không có `code_off` → fallback `terminal`. Verify khi build.

## Success Criteria

- Tất cả copy đề cập kỹ sư xây dựng / Revit / Add-in / Anti-gravity / Claude Code.
- Không còn từ "AI Agent doanh nghiệp", "marketing", "Amazon KDP".
