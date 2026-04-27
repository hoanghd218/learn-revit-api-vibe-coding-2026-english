# Phase 04 — Course Curriculum (16 chương Revit API + AI Agents track)

**Status:** pending
**Priority:** P0 (đây là điểm bán hàng cốt lõi)
**Effort:** L (~90 phút)

## Goal

Rewrite hoàn toàn `CourseContent.tsx` từ "2 buổi Zoom" → curriculum đầy đủ:
- **Track 1 (60% video HD đã quay sẵn):** 16 chương Revit API hiện có (xem JSON brief).
- **Track 2 (40% live Zoom):** AI Agents — Anti-gravity + Claude Code làm Revit Add-in, build web, automation.

## Files to Modify

- `src/components/CourseContent.tsx` — **rewrite hoàn toàn** (file 150 dòng → ~250 dòng nhưng tách ra 2 sub-components nếu quá 200).

## Data Structure

Tạo `src/components/course-data.ts` (file mới, kebab-case) chứa data 16 chương để giữ `CourseContent.tsx` < 200 LOC.

```ts
// src/components/course-data.ts
export interface Lesson {
  name: string;
  minutes: number;
  isFree?: boolean;
}
export interface Chapter {
  number: string;     // "Phần 1", "Phần 20"
  title: string;
  lessons: Lesson[];
  totalMinutes: number;
}

export const revitApiChapters: Chapter[] = [
  { number: "Phần 1", title: "Kiến thức C# cần thiết", lessons: [...], totalMinutes: 9 },
  { number: "Phần 2", title: "Bắt đầu tạo Add-in đầu tiên", lessons: [...], totalMinutes: 55 },
  // ... 16 chương — copy từ JSON brief
  { number: "Phần 20", title: "Vibe Coding (Bắt buộc xem)", lessons: [...], totalMinutes: 20 },
];

export type Plan = 'option1' | 'option2'; // 'option1' = 3M, 'option2' = 5M

export interface AiAgentChapter extends Chapter {
  availableIn: Plan[]; // ['option1','option2'] = cả 2 gói; ['option2'] = chỉ gói 5M
}

export const aiAgentTracks: AiAgentChapter[] = [
  {
    number: "Live 1",
    title: "Setup Anti-gravity + Claude Code cho Revit",
    availableIn: ['option1', 'option2'],
    lessons: [
      { name: "Cài Anti-gravity, Claude Code, MCP servers", minutes: 0 },
      { name: "Kết nối Revit API docs vào AI", minutes: 0 },
      { name: "Prompt cơ bản để AI hiểu domain BIM", minutes: 0 },
    ],
    totalMinutes: 0,
  },
  {
    number: "Live 2",
    title: "Vibe Coding Revit Add-in từ A-Z",
    availableIn: ['option1', 'option2'],
    lessons: [
      { name: "Demo: tả tiếng Việt → AI tự sinh Add-in chạy thật",  minutes: 0 },
      { name: "Tạo Add-in rename sheet, dimension, sheet từ Excel", minutes: 0 },
      { name: "Auto debug + hot reload cùng AI",                     minutes: 0 },
    ],
    totalMinutes: 0,
  },
  {
    number: "Live 3",
    title: "AI phân tích & QC model Revit",
    availableIn: ['option1', 'option2'],
    lessons: [
      { name: "AI scan model: tìm clash, missing param, sai dim", minutes: 0 },
      { name: "Xuất report Excel/HTML cho stakeholders",          minutes: 0 },
      { name: "Hệ thống auto QC chạy hàng đêm",                   minutes: 0 },
    ],
    totalMinutes: 0,
  },
  {
    number: "Live 4",
    title: "Vibe Coding Web — Build web bán hàng/khóa học",
    availableIn: ['option2'], // CHỈ gói 5M
    lessons: [
      { name: "AI build landing page + thanh toán tự động (SePay/Stripe)", minutes: 0 },
      { name: "Tạo course platform: video, license, member area",          minutes: 0 },
      { name: "Deploy lên Vercel/Cloudflare miễn phí",                     minutes: 0 },
    ],
    totalMinutes: 0,
  },
];
```

**UI lưu ý:** Buổi 4 hiển thị badge `"GÓI 5M"` (màu primary) trong Course list. Buổi 1-3 không có badge (mặc định cả 2 gói đều có). Tooltip: "Buổi này chỉ có ở gói Full 5,000,000đ".

**Source dữ liệu 16 chương:** copy đầy đủ từ JSON trong brief (đã có sẵn trong `command-args`):
- Phần 1: 1 lesson (9 phút)
- Phần 2: 7 lessons (~55 phút) — install, Revit lookup, HelloWorld, debug, github, template multi-version
- Phần 3: 8 lessons (~63 phút) — Selection & Filtering
- Phần 4: 5 lessons (~58 phút) — Parameter
- Phần 5: 16 lessons (~152 phút) — Editing Elements
- Phần 6: 8 lessons (~111 phút) — Geometry
- Phần 7: 1 lesson (14 phút) — Dynamic updater
- Phần 8: 1 lesson (15 phút) — External Events
- Phần 9: 3 lessons (~33 phút) — Ribbons
- Phần 10: 2 lessons (~21 phút) — Đóng gói
- Phần 11: 1 lesson (10 phút) — Multi-version
- Phần 12: 1 lesson (11 phút) — Mã hóa
- Phần 13: 2 lessons (~36 phút) — License
- Phần 14: 4 lessons (~80 phút) — Column Rebar
- Phần 15: 4 lessons (~88 phút) — Beam Rebar
- Phần 20: 1 lesson (20 phút) — Vibe Coding

**Tổng:** ~775 phút ≈ **13 giờ video HD** + 4 buổi live = ~6 giờ live.

## UI Structure

### Section heading
```
🎓 NỘI DUNG KHÓA HỌC
Track 1: 16 chương Revit API (video HD có sẵn — 13 giờ)
Track 2: 4 buổi Live Zoom — AI Agents Vibe Coding
```

### Component layout

```tsx
<section>
  <h2>NỘI DUNG KHÓA HỌC</h2>
  <p>13 giờ video HD + 4 buổi live · Tổng cộng 75+ bài học</p>

  <Tabs>
    <Tab label="Track 1: Revit API (video HD)" badge="Tự học" />
    <Tab label="Track 2: AI Agents Live Zoom" badge="HOT" />
  </Tabs>

  <ChapterList chapters={activeTrack === 'revit' ? revitApiChapters : aiAgentTracks} />
</section>

// ChapterList renders accordion
{chapters.map(ch => (
  <Accordion title={`${ch.number}: ${ch.title}`} subtitle={`${ch.lessons.length} bài · ${ch.totalMinutes} phút`}>
    <ul>
      {ch.lessons.map(l => <li>✓ {l.name} {l.isFree && <Badge>FREE</Badge>}</li>)}
    </ul>
  </Accordion>
))}
```

### Highlight callout (above tabs)
```
┌─────────────────────────────────────────────┐
│  💡 Tại sao 60% là video có sẵn?            │
│  Bạn KHÔNG phải chờ live mới học. Mua xong  │
│  → vào học ngay 13 giờ video. Live Zoom     │
│  dành cho phần AI Agents — phần khó nhất    │
│  cần mentor 1:1.                            │
└─────────────────────────────────────────────┘
```

## Implementation Steps

1. Tạo file mới `src/components/course-data.ts` — copy data từ JSON brief, format theo type.
2. Rewrite `src/components/CourseContent.tsx`:
   - Import data từ `course-data.ts`.
   - Tabs state với `useState<'revit' | 'ai'>('ai')` (default tab = AI Agents để highlight).
   - Accordion component (có thể inline hoặc tách `Accordion.tsx` nếu reuse).
3. Style: dùng theme tokens hiện có (`bg-surface-container-high`, `text-primary`, `border-primary/20`).
4. Mobile: tabs scroll horizontal nếu chật.
5. Accordion mặc định collapsed; user click expand từng chương.

## Todo

- [ ] Tạo `src/components/course-data.ts` với 16 chương Revit + 4 live tracks
- [ ] Verify tổng số bài & thời lượng (75+ bài, ~775 phút)
- [ ] Rewrite `CourseContent.tsx` với Tabs + Accordion
- [ ] Default tab = AI Agents
- [ ] FREE badge cho 2 bài có `isPay: false` từ JSON (Phần 1.1, Phần 3.2.5)
- [ ] Mobile: tabs horizontal scroll nếu cần
- [ ] Accordion smooth animation (max-height transition)
- [ ] Build pass

## Risks

- File CourseContent.tsx có thể vượt 200 LOC → tách `Accordion.tsx` riêng nếu cần.
- Data 16 chương dài → tách `course-data.ts` ngay từ đầu.

## Success Criteria

- 2 tab: Revit API (16 chương) + AI Agents (4 live).
- Mỗi chương expand show full danh sách bài + thời lượng.
- Default open AI Agents tab.
- Tổng thời lượng hiển thị rõ ràng.
- Mobile + desktop responsive.
