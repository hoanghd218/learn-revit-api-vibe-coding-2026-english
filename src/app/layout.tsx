import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-be-vietnam-pro",
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Beam Speed Solutions — Tạo Đội Ngũ AI Agents Làm Việc Thay Bạn",
  description:
    "Dành cho kỹ sư BIM, chủ doanh nghiệp xây dựng, cấp quản lý. Học cách dùng AI Agents (Anti-gravity, Claude Code) tạo Revit Add-in & web không cần code — biến AI thành nhân viên làm việc 24/7. Cùng Tony Hoàng — CEO BimSpeed. Từ 3,000,000đ.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${beVietnamPro.variable} dark antialiased`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
