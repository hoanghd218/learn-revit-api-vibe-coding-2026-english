"use client";

import ScrollReveal from "./ScrollReveal";

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
    title: "Bonus: Web bán hàng & web render kiến trúc",
    description:
      "Build landing page bán khóa học, web app render ảnh/video kiến trúc (như app.bimai.vn) — thanh toán tự động, deploy 0đ. (gói 5M)",
  },
];

export default function ValueProps() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
        {props.map((prop, index) => (
          <ScrollReveal key={prop.icon} delay={index * 150} direction="up">
            <div className="bg-surface-container-high p-6 sm:p-10 rounded-xl sm:rounded-2xl border-t-4 border-primary-container flex flex-col items-center text-center hover:-translate-y-1 transition-transform duration-300">
              <span className="material-symbols-outlined text-primary text-4xl sm:text-6xl mb-4 sm:mb-6">
                {prop.icon}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mb-3 sm:mb-4 uppercase">{prop.title}</h3>
              <p className="text-sm sm:text-base text-on-surface-variant">{prop.description}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
