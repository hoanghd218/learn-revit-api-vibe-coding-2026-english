"use client";

import { useState } from "react";
import Image from "next/image";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/60 backdrop-blur-xl shadow-[0_0_40px_rgba(245,158,11,0.05)]">
      <div className="flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 max-w-7xl mx-auto gap-3">
        <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0">
          <Image src="/logo.png" alt="Beam Speed Solutions" width={36} height={36} className="w-8 h-8 sm:w-9 sm:h-9 shrink-0" />
          <span className="text-base sm:text-2xl font-black text-on-surface tracking-tighter truncate">
            BEAM SPEED SOLUTIONS
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 hover:scale-105" href="#about">Vấn Đề</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 hover:scale-105" href="#schedule">Lịch Học</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 hover:scale-105" href="#speakers">Mentor</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 hover:scale-105" href="#pricing">Học Phí</a>
          <a className="text-on-surface-variant hover:text-on-surface transition-all duration-300 hover:scale-105" href="#faq">FAQ</a>
          <a
            className="bg-linear-to-br from-primary to-primary-container text-on-primary px-6 py-2 rounded-xl font-bold hover:scale-105 transition-all duration-300"
            href="#pricing"
          >
            Đăng Ký Khóa Học
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-on-surface transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-96" : "max-h-0"}`}>
        <nav className="flex flex-col gap-1 px-4 pb-4 bg-surface/95 backdrop-blur-xl">
          <a className="py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl transition-all" href="#about" onClick={() => setMenuOpen(false)}>Vấn Đề</a>
          <a className="py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl transition-all" href="#schedule" onClick={() => setMenuOpen(false)}>Lịch Học</a>
          <a className="py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl transition-all" href="#speakers" onClick={() => setMenuOpen(false)}>Mentor</a>
          <a className="py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl transition-all" href="#pricing" onClick={() => setMenuOpen(false)}>Học Phí</a>
          <a className="py-3 px-4 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-xl transition-all" href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a
            className="mt-2 py-3 px-4 bg-linear-to-br from-primary to-primary-container text-on-primary rounded-xl font-bold text-center"
            href="#pricing"
            onClick={() => setMenuOpen(false)}
          >
            Đăng Ký Khóa Học
          </a>
        </nav>
      </div>
    </header>
  );
}
