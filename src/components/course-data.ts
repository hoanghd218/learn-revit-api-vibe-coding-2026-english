// Course curriculum data for Beam Speed Solutions landing page
// Source: 16-chapter Revit API course (bimspeed.vn) + 4 live AI Agents tracks

export type Plan = "option1" | "option2"; // 'option1' = 3M, 'option2' = 5M (Full + Web)

export interface Lesson {
  name: string;
  minutes: number;
  isFree?: boolean;
}

export interface Chapter {
  number: string;
  title: string;
  lessons: Lesson[];
  totalMinutes: number;
}

export interface AiAgentChapter extends Chapter {
  availableIn: Plan[]; // ['option1','option2'] = both plans; ['option2'] = only Full plan
}

// Track 1 — 16 chapters Revit API video HD (already recorded)
export const revitApiChapters: Chapter[] = [
  {
    number: "Phần 1",
    title: "Kiến thức C# cần thiết",
    totalMinutes: 9,
    lessons: [
      { name: "Hướng dẫn các kiến thức C# cần học", minutes: 9, isFree: true },
    ],
  },
  {
    number: "Phần 2",
    title: "Bắt đầu tạo Add-in đầu tiên",
    totalMinutes: 55,
    lessons: [
      { name: "2.1 Cài đặt các phần mềm", minutes: 7 },
      { name: "2.2 Sử dụng Revit Lookup", minutes: 8 },
      { name: "2.3 Tạo add-in đầu tiên HelloWorld", minutes: 8 },
      { name: "2.4 Debug cách 1 — dùng Attach Process", minutes: 8 },
      { name: "2.5.0 Sử dụng Github & Github Desktop", minutes: 7 },
      { name: "2.5.1 Template Revit API cho version 2020-2025", minutes: 12 },
      { name: "2.6 Debug cách 2 + hot reload", minutes: 5 },
    ],
  },
  {
    number: "Phần 3",
    title: "Selection & Filtering",
    totalMinutes: 63,
    lessons: [
      { name: "3.1.1 Chọn đối tượng bằng PickObject", minutes: 10 },
      { name: "3.1.2 Chọn nhiều đối tượng PickObjects", minutes: 10 },
      { name: "3.1.3 PickPoint bằng 2 cách", minutes: 10 },
      { name: "3.2.1 Filter By Category", minutes: 7 },
      { name: "3.2.2 Filter By Class", minutes: 6 },
      { name: "3.2.3 Filter By Type & tổ hợp", minutes: 6 },
      { name: "3.2.4 MultiCategoryFilter", minutes: 6 },
      { name: "3.2.5 BoundingBox intersect filter", minutes: 8, isFree: true },
    ],
  },
  {
    number: "Phần 4",
    title: "Parameter",
    totalMinutes: 58,
    lessons: [
      { name: "4.1 Lý thuyết về parameter", minutes: 7 },
      { name: "4.2 Get Parameter", minutes: 10 },
      { name: "4.3 Set Parameter", minutes: 11 },
      { name: "4.4 Thực hành Rename Sheet MVVM — Phần 1", minutes: 15 },
      { name: "4.5 Thực hành Rename Sheet MVVM — Phần 2", minutes: 15 },
    ],
  },
  {
    number: "Phần 5",
    title: "Editing Elements (16 bài)",
    totalMinutes: 152,
    lessons: [
      { name: "5.1 Giới thiệu tạo mới & hiệu chỉnh đối tượng", minutes: 5 },
      { name: "5.2 Move Elements", minutes: 15 },
      { name: "5.3 Copy Elements", minutes: 15 },
      { name: "5.4 Rotate Elements", minutes: 4 },
      { name: "5.5 Mirror Elements", minutes: 4 },
      { name: "5.6 Create Element — Wall", minutes: 10 },
      { name: "5.7 Create Beam", minutes: 9 },
      { name: "5.8 Create Column", minutes: 8 },
      { name: "5.9 Create Floor", minutes: 8 },
      { name: "5.10 Create Grid", minutes: 4 },
      { name: "5.11 Create Level", minutes: 4 },
      { name: "5.12 Create Dimension for Level", minutes: 4 },
      { name: "5.13 Create Dimension for Grid", minutes: 4 },
      { name: "5.14 Sử dụng JSON để lưu data", minutes: 4 },
      { name: "5.15 Create Sheets from Excel — Part 1", minutes: 12 },
      { name: "5.16 Create Sheets from Excel — Part 2", minutes: 27 },
    ],
  },
  {
    number: "Phần 6",
    title: "Geometry",
    totalMinutes: 111,
    lessons: [
      { name: "6.1 Tổng quan về geometry", minutes: 16 },
      { name: "6.2 Get Solid", minutes: 22 },
      { name: "6.3 Solid với Transform", minutes: 7 },
      { name: "6.4 Các hàm trong SolidUtils", minutes: 7 },
      { name: "6.5 Tính toán formwork cho cột — Phần 1", minutes: 13 },
      { name: "6.6 Tính toán formwork cho cột — Phần 2", minutes: 9 },
      { name: "6.7 Create Piles from CAD — Part 1", minutes: 18 },
      { name: "6.8 Create Piles from CAD — Part 2", minutes: 19 },
    ],
  },
  {
    number: "Phần 7",
    title: "Dynamic Model Updater",
    totalMinutes: 14,
    lessons: [{ name: "7.1 Auto Updater", minutes: 14 }],
  },
  {
    number: "Phần 8",
    title: "External Events",
    totalMinutes: 15,
    lessons: [{ name: "8.1 External Event", minutes: 15 }],
  },
  {
    number: "Phần 9",
    title: "Tạo thanh giao diện, Ribbons",
    totalMinutes: 33,
    lessons: [
      { name: "9.1 Tạo ribbon & các nút bấm", minutes: 12 },
      { name: "9.2 Create Push Button", minutes: 16 },
      { name: "9.3 Tạo Split Button & Pull Down Button", minutes: 5 },
    ],
  },
  {
    number: "Phần 10",
    title: "Tạo bộ cài, đóng gói ứng dụng",
    totalMinutes: 21,
    lessons: [
      { name: "10.1 Lập trình cho nhiều version Revit", minutes: 12 },
      { name: "10.2 Tạo bộ cài", minutes: 9 },
    ],
  },
  {
    number: "Phần 11",
    title: "Nâng cao — Phát triển nhiều version",
    totalMinutes: 10,
    lessons: [{ name: "11. Lập trình nhiều version Revit", minutes: 10 }],
  },
  {
    number: "Phần 12",
    title: "Nâng cao — Mã hóa bảo mật dữ liệu, code",
    totalMinutes: 11,
    lessons: [{ name: "12. Mã hóa dữ liệu", minutes: 11 }],
  },
  {
    number: "Phần 13",
    title: "Nâng cao — License Management",
    totalMinutes: 36,
    lessons: [
      { name: "13.1 License offline — Part 1", minutes: 10 },
      { name: "13.2 License offline — Part 2", minutes: 26 },
    ],
  },
  {
    number: "Phần 14",
    title: "Thực chiến — Tạo Rebar cho cột",
    totalMinutes: 80,
    lessons: [
      { name: "14.1 Column Rebar — Dựng giao diện", minutes: 18 },
      { name: "14.2 Column Rebar — Column Geometry", minutes: 15 },
      { name: "14.3 Column Rebar — Tạo thép đai", minutes: 27 },
      { name: "14.4 Tạo thép chính cho cột", minutes: 20 },
    ],
  },
  {
    number: "Phần 15",
    title: "Thực chiến — Tạo Rebar cho dầm",
    totalMinutes: 88,
    lessons: [
      { name: "15.1 Beam Rebar P1", minutes: 21 },
      { name: "15.2 Beam Rebar P2", minutes: 32 },
      { name: "15.3 Beam Rebar P3", minutes: 18 },
      { name: "15.4 Beam Rebar P4", minutes: 17 },
    ],
  },
  {
    number: "Phần 20",
    title: "Vibe Coding (Quan trọng — bắt buộc xem)",
    totalMinutes: 20,
    lessons: [{ name: "Vibe coding — Duplicate Sheet bằng AI", minutes: 20 }],
  },
];

// Track 2 — 4 live Zoom sessions for AI Agents
export const aiAgentTracks: AiAgentChapter[] = [
  {
    number: "Buổi 1",
    title: "Setup Anti-gravity + Claude Code cho Revit",
    totalMinutes: 90,
    availableIn: ["option1", "option2"],
    lessons: [
      { name: "Cài Anti-gravity, Claude Code, MCP servers", minutes: 0 },
      { name: "Kết nối Revit API docs vào AI", minutes: 0 },
      { name: "Prompt cơ bản để AI hiểu domain BIM", minutes: 0 },
    ],
  },
  {
    number: "Buổi 2",
    title: "Vibe Coding Revit Add-in từ A-Z",
    totalMinutes: 90,
    availableIn: ["option1", "option2"],
    lessons: [
      { name: "Demo: tả tiếng Việt → AI tự sinh Add-in chạy thật", minutes: 0 },
      { name: "Add-in: rename sheet, dimension, sheet từ Excel", minutes: 0 },
      { name: "Auto debug + hot reload cùng AI", minutes: 0 },
    ],
  },
  {
    number: "Buổi 3",
    title: "AI phân tích & QC model Revit",
    totalMinutes: 90,
    availableIn: ["option1", "option2"],
    lessons: [
      { name: "AI scan model: tìm clash, missing param, sai dim", minutes: 0 },
      { name: "Xuất report Excel/HTML cho stakeholders", minutes: 0 },
      { name: "Hệ thống auto QC chạy hàng đêm", minutes: 0 },
    ],
  },
  {
    number: "Buổi 4",
    title: "Vibe Coding Web — Build web bán hàng & web render kiến trúc",
    totalMinutes: 90,
    availableIn: ["option2"], // CHỈ gói Full 5M
    lessons: [
      { name: "AI build landing page + thanh toán SePay/Stripe", minutes: 0 },
      { name: "Course platform: video, license, member area", minutes: 0 },
      { name: "Web app render ảnh/video kiến trúc (như app.bimai.vn)", minutes: 0 },
      { name: "Deploy lên Vercel/Cloudflare miễn phí", minutes: 0 },
    ],
  },
];

// Helpers
export const totalRevitMinutes = revitApiChapters.reduce(
  (sum, ch) => sum + ch.totalMinutes,
  0,
);
export const totalRevitLessons = revitApiChapters.reduce(
  (sum, ch) => sum + ch.lessons.length,
  0,
);
