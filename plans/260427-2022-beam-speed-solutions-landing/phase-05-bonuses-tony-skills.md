# Phase 05 — Bonuses (Tony Hoang's Skills/Agents)

**Status:** pending
**Priority:** P1
**Effort:** S (~30 phút)

## Goal

Replace bonus list từ marketing/KDP skills → Tony Hoang's Revit API skills + automation skills (theo brief).

## Files to Modify

- `src/components/Bonuses.tsx`

## Bonus List — phân loại theo gói

```ts
type Plan = 'option1' | 'option2';

interface Bonus {
  icon: string;
  title: string;
  description: string;
  value: string;
  availableIn: Plan[]; // gói nào nhận bonus này
}

const bonuses: Bonus[] = [
  {
    icon: "extension",
    title: "Bộ Skills Phát Triển Revit API",
    description:
      "Skills đã build sẵn cho Claude Code: tự sinh boilerplate Add-in, debug Revit API, generate ribbon, MVVM template — copy về dùng ngay.",
    value: "3,000,000đ",
    availableIn: ['option1', 'option2'],
  },
  {
    icon: "smart_toy",
    title: "Bộ Agents Tự Động Hóa Công Việc Revit",
    description:
      "Agents tự đọc model Revit, sinh báo cáo QC Excel, gửi email stakeholders, post update lên Discord/Slack — chạy 24/7.",
    value: "2,500,000đ",
    availableIn: ['option1', 'option2'],
  },
  {
    icon: "captive_portal",
    title: "Skills Tự Động Hóa Website",
    description:
      "Bộ skills scrape data, đăng bài, quản lý fanpage, update sản phẩm — tự động hóa website cá nhân/công ty.",
    value: "2,000,000đ",
    availableIn: ['option2'], // chỉ gói 5M
  },
  {
    icon: "rocket_launch",
    title: "Template Web Bán Khóa Học Có Sẵn",
    description:
      "Template Next.js + Tailwind landing page, tích hợp SePay/Stripe, member area, license offline — deploy 1 click lên Vercel.",
    value: "2,500,000đ",
    availableIn: ['option2'], // chỉ gói 5M
  },
];
```

**UI:** Mỗi bonus card hiển thị badge nhỏ:
- `availableIn` = cả 2 → badge "Cả 2 gói" (xám/neutral)
- `availableIn` = chỉ option2 → badge "GÓI 5M" (primary highlight)

### Special bonus (giữ container hiện tại, thay copy)
```diff
-  Khoá Học 2 Ngày Miễn Phí
-  Khoá học chuyên sâu 2 ngày hướng dẫn xây dựng AI Agent từ A-Z — chỉ dành cho thành viên AI Agent Company
+  Mentoring 1:1 — 1 buổi 60 phút (Chỉ gói 5M)
+  Phiên 1:1 với Tony Hoàng để review code/Add-in của bạn, fix bug và roadmap cá nhân — đặc quyền dành cho học viên gói Full 5,000,000đ.
```

### Header section
```diff
-  TỔNG GIÁ TRỊ HƠN 8,000,000đ
+  TỔNG GIÁ TRỊ BONUS LÊN TỚI 12,000,000đ
```

## Implementation Steps

1. Edit `Bonuses.tsx` dòng 5-30: replace `bonuses` array.
2. Edit dòng 44: tổng giá trị 12M.
3. Edit dòng 95-100: special bonus title + description.
4. Edit dòng 53: subtitle "Tham gia đủ 2 buổi Zoom" → "Tham gia khóa học để nhận trọn bộ".

## Todo

- [ ] Replace bonuses[] (4 items + `availableIn` field)
- [ ] Render badge "Cả 2 gói" / "GÓI 5M" trên mỗi card
- [ ] Update tổng giá trị badge (12M)
- [ ] Special bonus copy (Mentoring 1:1 — chỉ gói 5M)
- [ ] Subtitle text
- [ ] Verify icons material-symbols (extension, smart_toy, captive_portal, rocket_launch)

## Success Criteria

- Tất cả bonus xoay quanh Revit API skills + automation (không còn marketing/KDP).
- 2 bonus đầu áp dụng cả gói 3M và 5M; 2 bonus sau + mentoring chỉ gói 5M.
- Tổng giá trị 12M anchor cho deal 5M (gói Full).
- Badge phân loại rõ ràng để khách hàng thấy giá trị upgrade từ 3M → 5M.
