const ZALO_LINK = "https://zalo.me/g/ghjisy452";

export default function Footer() {
  return (
    <>
      <footer className="bg-surface-container-lowest py-10 sm:py-16 px-4 sm:px-8 border-t border-primary-container/10">
        <div className="flex flex-col items-center gap-4 sm:gap-6 max-w-7xl mx-auto">
          <div className="text-xl sm:text-2xl font-black text-on-surface uppercase">
            Beam Speed Solutions
          </div>
          <p className="text-on-surface-variant text-xs sm:text-sm text-center max-w-xl">
            Tổ chức khoa học AI Agents cho kỹ sư BIM, chủ doanh nghiệp xây dựng, cấp quản lý — biến AI thành đội nhân viên làm việc thay bạn.
          </p>
          <div className="flex gap-6 sm:gap-8 text-sm sm:text-base">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.youtube.com/@theaifirst" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="https://www.facebook.com/theaifirst" target="_blank" rel="noopener noreferrer">Facebook</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href={ZALO_LINK} target="_blank" rel="noopener noreferrer">Zalo</a>
          </div>
          <p className="text-on-surface-variant text-xs sm:text-sm">
            © 2026 Beam Speed Solutions. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile Bottom NavBar — extra bottom padding for safe area */}
      <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 rounded-full px-6 sm:px-8 py-3 sm:py-4 w-[92%] max-w-md md:hidden z-50 bg-linear-to-r from-primary to-primary-container shadow-[0_0_20px_rgba(245,158,11,0.4)] animate-pulse safe-area-bottom">
        <a
          className="flex items-center justify-center gap-2 text-black font-black uppercase text-sm"
          href="#pricing"
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            rocket_launch
          </span>
          Đăng Ký — Từ 3,000,000đ
        </a>
      </div>

      {/* Spacer for mobile bottom bar */}
      <div className="h-20 md:hidden" />
    </>
  );
}
