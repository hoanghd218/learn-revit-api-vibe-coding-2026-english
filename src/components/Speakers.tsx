"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";

const speaker = {
  name: "Mr. Tony Hoàng",
  title: "CEO BimSpeed · Tác giả khóa Revit API 16 chương",
  bio: "8+ năm phát triển Revit Add-in cho công ty xây dựng. Tác giả bộ skills/agents Claude Code chuyên cho BIM. Đã đào tạo 2,000+ kỹ sư BIM, chủ doanh nghiệp và cấp quản lý ngành xây dựng dùng Revit API & AI Agents.",
  image: "/images/hoang-real.jpg",
  stats: [
    { value: "2,000+", label: "Học viên" },
    { value: "16", label: "Chương Revit API" },
    { value: "8+", label: "Năm Revit API" },
  ],
};

export default function Speakers() {
  return (
    <section
      className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-container-lowest"
      id="speakers"
    >
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-10 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Mentor Của Bạn
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={150}>
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start">
            <div className="shrink-0 w-48 h-60 sm:w-64 sm:h-80 rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-primary shadow-xl">
              <Image
                className="w-full h-full object-cover"
                src={speaker.image}
                alt={speaker.name}
                width={256}
                height={320}
              />
            </div>
            <div className="space-y-3 sm:space-y-4 text-center sm:text-left flex-1">
              <h3 className="text-2xl sm:text-3xl font-black">{speaker.name}</h3>
              <p className="text-sm sm:text-base text-primary font-semibold -mt-1">
                {speaker.title}
              </p>
              <p className="text-sm sm:text-base text-on-surface-variant italic">
                {speaker.bio}
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3 max-w-md mx-auto sm:mx-0">
                {speaker.stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="text-center bg-surface p-2.5 sm:p-3 rounded-xl border border-primary/10"
                  >
                    <div className="text-primary font-black text-base sm:text-xl">
                      {stat.value}
                    </div>
                    <div className="text-[9px] sm:text-[10px] uppercase font-bold text-on-surface-variant">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
