"use client";

import ScrollReveal from "./ScrollReveal";

const painPoints = [
  {
    icon: "construction",
    title: "Lặp đi lặp lại các tác vụ Revit thủ công",
    description:
      "Rename sheet, tạo rebar, dimension, sheet từ Excel... mỗi project tốn hàng chục giờ làm tay. Sai 1 chỗ là sửa cả ngày.",
  },
  {
    icon: "terminal",
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
    title: "Đồng nghiệp dùng AI đang bỏ xa bạn",
    description:
      "Người khác đã dùng Claude Code / Anti-gravity tự viết Add-in trong 1 tối. Bạn vẫn copy-paste manual. Thị trường đang chuyển dịch.",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-container-lowest" id="about">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-on-surface tracking-tight mb-4 uppercase">
              Kỹ Sư BIM, Chủ Doanh Nghiệp, Cấp Quản Lý — Có Đang Mắc Kẹt Ở Đây?
            </h2>
            <div className="w-24 h-1 bg-primary-container mx-auto" />
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {painPoints.map((point, index) => (
            <ScrollReveal key={point.icon} delay={index * 150} direction={index % 2 === 0 ? "left" : "right"}>
              <div className="bg-surface p-5 sm:p-8 rounded-xl sm:rounded-2xl border border-primary-container/20 hover:border-primary-container/50 transition-all duration-300 group hover:shadow-[0_0_25px_rgba(245,158,11,0.1)] hover:-translate-y-1">
                <div className="mb-4 sm:mb-6">
                  <span className="material-symbols-outlined text-secondary-container text-3xl sm:text-4xl group-hover:scale-110 transition-transform inline-block">
                    {point.icon}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-extrabold mb-3 sm:mb-4">{point.title}</h3>
                <p className="text-sm sm:text-base text-on-surface-variant">{point.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
