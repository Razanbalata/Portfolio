"use client";
import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/src/utils/constants";
import { scrollToSection, useScrollSpy } from "@/src/hooks/useScrollSpy";
import ThemeToggle from "../ui/ToggleTheme";

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
    <header className="fixed top-4 left-0 right-0 z-[40] px-6 sm:px-6 lg:px-8">
      <div className="max-w-8xl mx-auto flex items-center gap-3 relative">
        
        {/* 1. الأيقونة الدائرية التفاعلية على اليسار (Orbit / Status Widget Trigger) */}
        <div className="relative">
          <button
            onClick={() => setShowStatusCard(!showStatusCard)}
            className="relative flex items-center justify-center w-10 h-10 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-secondary)]/80 hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-lg group"
            title="System Status"
          >
            <span className="w-3 h-3 rounded-full bg-[var(--color-primary)] group-hover:scale-125 transition-transform" />
            <span className="absolute inset-0 rounded-full border border-[var(--color-primary)]/20 animate-ping opacity-30" />
          </button>

          {/* الكرت المنبثق للتفاصيل الحية */}
          {showStatusCard && (
            <div className="absolute top-12 left-0 w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)] p-4 rounded-2xl shadow-2xl text-xs space-y-2.5 z-50 animate-in fade-in slide-in-from-top-2">
              <div className="flex justify-between items-center text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider text-[var(--color-subtext)]">TIME:</span>
                <span className="text-[var(--color-primary)] font-semibold font-mono">{currentTime || "02:29 PM"}</span>
              </div>
              <div className="flex justify-between items-center text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider text-[var(--color-subtext)]">LANG:</span>
                <span className="text-[var(--color-primary)] font-semibold">English</span>
              </div>
              <div className="flex justify-between items-center text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider text-[var(--color-subtext)]">LOCATION:</span>
                <span className="text-[var(--color-primary)] font-semibold">{PERSONAL_INFO.location || "Gaza"}</span>
              </div>
              <div className="flex justify-between items-center text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider text-[var(--color-subtext)]">STATUS:</span>
                <span className="text-[var(--color-primary)] font-semibold">Available for Work</span>
              </div>
            </div>
          )}
        </div>

        {/* 2. شريط الملاحة الرئيسي الزجاجي */}
        <nav
          className={`flex-1 max-w-7xl mx-auto ml-4 transition-all duration-300 rounded-xl p-6 flex items-center justify-between border ${
            isScrolled
              ? "bg-[var(--color-secondary)]/90 backdrop-blur-md border-[var(--color-accent)] shadow-xl"
              : "bg-[var(--color-secondary)]/60 backdrop-blur-md border-[var(--color-accent)]"
          }`}
        >
          {/* اسمك الذهبي البارز */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm sm:text-base font-extrabold tracking-widest text-[var(--color-primary)] hover:opacity-80 transition-opacity uppercase cursor-pointer"
          >
            {PERSONAL_INFO.name || "RAZAN BALATA"}
          </button>

          {/* روابط الأقسام للشاشات الكبيرة */}
          <div className="hidden md:flex items-center gap-12 text-sm font-medium">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`transition-all duration-300 font-semibold cursor-pointer ${
                  activeSection === link.id
                    ? "text-[var(--color-primary)] font-bold"
                    : "text-[var(--color-subtext)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* زر الجوال */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-[var(--color-text)] p-1.5 rounded-lg bg-[var(--color-secondary)] border border-[var(--color-accent)]"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </div>

      {/* قائمة الجوال */}
      {isMenuOpen && (
        <div className="md:hidden max-w-5xl mx-auto mt-2 bg-[var(--color-secondary)] border border-[var(--color-accent)] rounded-2xl p-5 flex flex-col gap-4 shadow-xl backdrop-blur-xl animate-in fade-in">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-[var(--color-accent)] text-[var(--color-primary)]"
                    : "text-[var(--color-subtext)] hover:bg-[var(--color-accent)]/40"
                }`}
              >
                {link.label}
              </button>
            ))}

            <div className="flex items-center justify-between pt-2 border-t border-[var(--color-accent)]">
              <span className="text-xs text-[var(--color-subtext)]">Theme:</span>
              <ThemeToggle />
            </div>

            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-center px-4 py-2.5 rounded-xl font-medium text-xs bg-[var(--color-primary)] text-white hover:opacity-90 transition-all mt-2"
            >
              Let's Talk
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;