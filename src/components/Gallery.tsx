"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import ScrollReveal from "./ScrollReveal";

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

const speakerImages: GalleryImage[] = [
  { src: "/images/speakers/IMG_1187.jpg", alt: "Speaker thuyết trình về OpenClaw Toolkit", caption: "Giới thiệu The OpenClaw Toolkit — hệ thống AI Agent hoàn chỉnh" },
  { src: "/images/speakers/IMG_1189.jpg", alt: "Speaker demo quy trình AI Agent ra mắt sản phẩm", caption: "Demo: Agent ra mắt sản phẩm Amazon trong vài phút" },
  { src: "/images/speakers/hoi truong.jpg", alt: "Hội trường sự kiện AI Agent", caption: "Hội trường — Sự kiện AI Agent thực chiến" },
  { src: "/images/speakers/tony trieu hooi truong.jpg", alt: "Tony Trieu thuyết trình tại hội trường", caption: "Tony Trieu chia sẻ kinh nghiệm KDP & AI Agent" },
];

const coloringBookImages: GalleryImage[] = [
  { src: "/images/coloring-book/book-1.jpg", alt: "Adorable Owls Coloring Book — tạo bởi AI Agent", caption: "Adorable Owls — Bold and Easy Coloring Book" },
  { src: "/images/coloring-book/cover1.png", alt: "4th of July Coloring Book — bán trên Amazon KDP", caption: "4th of July — Kids Coloring Book (Ages 3-7)" },
];

function Lightbox({ image, onClose }: { image: GalleryImage; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <button
        className="absolute top-4 right-4 text-white/70 hover:text-white z-10"
        onClick={onClose}
        aria-label="Đóng"
      >
        <span className="material-symbols-outlined text-3xl">close</span>
      </button>
      <div className="relative max-w-4xl max-h-[85vh] w-full" onClick={(e) => e.stopPropagation()}>
        <Image
          src={image.src}
          alt={image.alt}
          width={1200}
          height={800}
          className="w-full h-full object-contain rounded-xl"
        />
        {image.caption && (
          <p className="text-center text-white/80 text-sm mt-3">{image.caption}</p>
        )}
      </div>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<GalleryImage | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-surface" id="gallery">
      <div className="max-w-6xl mx-auto space-y-16 sm:space-y-24">

        {/* Speakers Section */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary font-bold text-[10px] sm:text-xs uppercase tracking-widest mb-4 sm:mb-6">
                <span className="material-symbols-outlined text-base sm:text-lg">photo_camera</span>
                HÌNH ẢNH THỰC TẾ
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-3 sm:mb-4">
                Speakers Tại Các{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary animate-gradient">
                  Sự Kiện
                </span>
              </h2>
              <p className="text-sm sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
                Hoàng Trần & Tony Trieu thuyết trình trực tiếp về AI Agent & OpenClaw
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4">
            {speakerImages.map((img, index) => (
              <ScrollReveal key={img.src} delay={index * 120} direction={index % 2 === 0 ? "left" : "right"}>
                <button
                  className="relative w-full aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden border border-primary/15 hover:border-primary/40 transition-all duration-300 group cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                    <div className="flex items-center gap-2 text-white">
                      <span className="material-symbols-outlined text-sm sm:text-lg">zoom_in</span>
                      <span className="text-[10px] sm:text-sm font-medium line-clamp-1">{img.caption}</span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Coloring Book Section */}
        <div>
          <ScrollReveal>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-on-surface tracking-tighter mb-3 sm:mb-4">
                Sản Phẩm{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary via-primary-container to-secondary animate-gradient">
                  Coloring Book
                </span>{" "}
                Thực Tế
              </h2>
              <p className="text-sm sm:text-lg text-on-surface-variant max-w-2xl mx-auto">
                Được tạo hoàn toàn bằng AI Agent — đang bán trên Amazon KDP
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {coloringBookImages.map((img, index) => (
              <ScrollReveal key={img.src} delay={index * 150} direction={index === 0 ? "left" : "right"}>
                <button
                  className="relative w-full aspect-[2/1] rounded-xl sm:rounded-2xl overflow-hidden border border-primary/15 hover:border-primary/40 transition-all duration-300 group cursor-pointer shadow-[0_0_20px_rgba(0,0,0,0.3)] hover:shadow-[0_0_30px_rgba(245,158,11,0.15)]"
                  onClick={() => setLightbox(img)}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 sm:p-5">
                    <div className="flex items-center gap-2 text-white">
                      <span className="material-symbols-outlined text-lg">zoom_in</span>
                      <span className="text-xs sm:text-sm font-medium">{img.caption}</span>
                    </div>
                  </div>
                </button>
              </ScrollReveal>
            ))}
          </div>
        </div>

      </div>

      {lightbox && <Lightbox image={lightbox} onClose={() => setLightbox(null)} />}
    </section>
  );
}
