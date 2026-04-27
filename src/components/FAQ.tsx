"use client";

import { useState } from "react";
import ScrollReveal from "./ScrollReveal";

const faqs = [
  {
    question: "Tôi không biết code C# có học được không?",
    answer:
      "Hoàn toàn được. 60% video HD bắt đầu từ kiến thức C# cơ bản. Track AI Agents (40% live) thiết kế cho người không biết code — bạn mô tả ý tưởng bằng tiếng Việt, AI viết code.",
  },
  {
    question: "Anti-gravity là gì? Có miễn phí không?",
    answer:
      "Anti-gravity (Google Antigravity) là IDE AI agent mới do Google ra mắt. Hiện miễn phí trong giai đoạn beta. Khóa học hướng dẫn đầy đủ cách cài + dùng cho Revit API.",
  },
  {
    question: "Khóa học bao nhiêu tiền? Có mấy gói?",
    answer:
      "Giá gốc 10,000,000đ — đợt mở bán đầu tiên còn 2 gói: Gói Revit + AI Agent (3 buổi live + 13 giờ video HD) giá 3,000,000đ; Gói Full + Vibe Coding Web (4 buổi live + bonus web template + group coaching hàng tuần) giá 5,000,000đ. Trả 1 lần qua chuyển khoản/SePay. Liên hệ Zalo nếu cần trả 2 đợt.",
  },
  {
    question: "Học bao lâu? Có thời hạn truy cập không?",
    answer:
      "4 buổi live (1 tháng, 20h tối) + 13 giờ video HD truy cập trọn đời. Sau khóa vẫn nhận update bonus skills/agents khi Tony build thêm.",
  },
  {
    question: "Hình thức support trong khóa như thế nào?",
    answer:
      "KHÔNG có support 1:1. Học viên gói Full 5M được tham gia Group Coaching hàng tuần (60 phút) cùng Tony Hoàng — review code/Add-in/web theo cộng đồng, học từ tình huống của tất cả học viên. Cả 2 gói đều có Group Zalo support trong và sau khóa.",
  },
  {
    question: "Đăng ký bằng cách nào?",
    answer:
      "Click nút 'Đăng Ký Khóa Học' để vào nhóm Zalo. Tony hoặc team sẽ gửi link thanh toán SePay/chuyển khoản + tài liệu setup ngay trong 5 phút.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(2);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface-container-lowest" id="faq">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-black mb-8 sm:mb-12 text-center uppercase">
            Thắc Mắc Thường Gặp
          </h2>
        </ScrollReveal>
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={faq.question} delay={index * 100}>
              <div className="bg-surface border border-outline-variant/30 rounded-xl p-4 sm:p-6">
                <button
                  className="flex justify-between items-center cursor-pointer w-full text-left gap-3"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-bold text-sm sm:text-base">{faq.question}</span>
                  <span className="material-symbols-outlined text-primary shrink-0 transition-transform duration-300" style={{ transform: openIndex === index ? "rotate(180deg)" : "" }}>
                    {openIndex === index ? "remove" : "add"}
                  </span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96 mt-3 sm:mt-4" : "max-h-0"}`}>
                  <p className="text-on-surface-variant text-xs sm:text-sm">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
