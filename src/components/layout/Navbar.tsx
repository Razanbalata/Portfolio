"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/src/utils/constants";
import { scrollToSection, useScrollSpy } from "@/src/hooks/useScrollSpy";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showStatusCard, setShowStatusCard] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  // تحديث الساعة الحية
  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        })
      );
    };
    updateClock();
    const interval = setInterval(updateClock, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-[1000] px-3 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 sm:gap-4 relative">
        
        {/* 1. الأيقونة الدائرية التفاعلية على اليسار (System Status Widget) */}
        <div className="relative shrink-0">
          <button
            onClick={() => setShowStatusCard(!showStatusCard)}
            className="relative flex items-center justify-center w-9 h-9 sm:w-11 sm:h-11 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-secondary)]/80 hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-lg group backdrop-blur-md"
            title="System Status"
            aria-label="Toggle status"
          >
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--color-primary)] group-hover:scale-125 transition-transform" />
            <span className="absolute inset-0 rounded-full border border-[var(--color-primary)]/20 animate-ping opacity-30 pointer-events-none" />
          </button>

          {/* الكرت المنبثق للتفاصيل الحية */}
          {showStatusCard && (
            <div className="absolute top-12 sm:top-14 left-0 w-56 sm:w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/50 p-3.5 sm:p-4 rounded-2xl shadow-2xl text-[11px] sm:text-xs space-y-2.5 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[9px] sm:text-[10px] tracking-wider">TIME:</span>
                <span className="text-[var(--color-primary)] font-semibold font-mono">{currentTime || "02:29 PM"}</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[9px] sm:text-[10px] tracking-wider">LANG:</span>
                <span className="text-[var(--color-primary)] font-semibold">English</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[9px] sm:text-[10px] tracking-wider">LOCATION:</span>
                <span className="text-[var(--color-primary)] font-semibold">{PERSONAL_INFO.location || "Gaza"}</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)] pt-1 border-t border-[var(--color-accent)]/30">
                <span className="font-mono uppercase text-[9px] sm:text-[10px] tracking-wider">STATUS:</span>
                <span className="text-[var(--color-primary)] font-semibold">Available for Work</span>
              </div>
            </div>
          )}
        </div>

        {/* 2. شريط الملاحة الرئيسي الزجاجي */}
        <nav
          className={`flex-1 transition-all duration-300 rounded-xl px-4 sm:px-6 py-2.5 sm:py-3.5 flex items-center justify-between border ${
            isScrolled
              ? "bg-[var(--color-secondary)]/90 backdrop-blur-md border-[var(--color-accent)] shadow-xl"
              : "bg-[var(--color-secondary)]/60 backdrop-blur-md border-[var(--color-accent)]/40"
          }`}
        >
          {/* الاسم الذهبي البارز */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-xs sm:text-sm font-extrabold tracking-wider sm:tracking-widest text-[var(--color-primary)] hover:opacity-80 transition-opacity uppercase cursor-pointer truncate max-w-[150px] sm:max-w-none text-left"
          >
            {PERSONAL_INFO.name || "RAZAN BALATA"}
          </button>

          {/* روابط الأقسام للشاشات الكبيرة */}
          <div className="hidden lg:flex items-center gap-6 lg:gap-8 text-xs font-semibold">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all duration-300 relative py-1 cursor-pointer ${
                  activeSection === link.id
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-subtext)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
                {activeSection === link.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--color-primary)] rounded-full animate-in fade-in" />
                )}
              </button>
            ))}
          </div>

          {/* زر قائمة الجوال */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden text-[var(--color-text)] p-1.5 rounded-lg bg-[var(--color-secondary)] border border-[var(--color-accent)]/50 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* قائمة الجوال (Mobile Drawer) */}
      {isMenuOpen && (
        <div className="lg:hidden w-full max-w-7xl mx-auto mt-2 bg-[var(--color-secondary)]/95 border border-[var(--color-accent)]/50 rounded-xl p-3.5 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
          <nav className="flex flex-col gap-1.5">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-3.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                  activeSection === link.id
                    ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20"
                    : "text-[var(--color-subtext)] hover:bg-[var(--color-accent)]/30 hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;