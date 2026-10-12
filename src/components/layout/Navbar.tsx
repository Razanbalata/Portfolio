"use client";

import React, { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/src/utils/constants";
import { scrollToSection, useScrollSpy } from "@/src/hooks/useScrollSpy";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* 1. الأيقونة الدائرية التفاعلية الثابتة على اليسار (System Status Floating Widget) */}
      <div className="fixed top-4 left-4 z-[60]">
        <div className="relative flex items-center p-1 sm:p-2 cursor-pointer">
          <button
            onClick={() => setShowStatusCard(!showStatusCard)}
            className="relative flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-[var(--color-primary)]/40 bg-[var(--color-secondary)]/80 hover:border-[var(--color-primary)] transition-all cursor-pointer shadow-xl backdrop-blur-md group"
            title="System Status"
            aria-label="Toggle status"
          >
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-[var(--color-primary)] group-hover:scale-125 transition-transform" />
            <span className="absolute inset-0 rounded-full border border-[var(--color-primary)]/20 animate-ping opacity-30 pointer-events-none" />
          </button>

          {/* الكرت المنبثق للتفاصيل الحية عند الضغط */}
          {showStatusCard && (
            <div className="absolute top-12 left-0 w-56 sm:w-64 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/50 p-4 rounded-2xl shadow-2xl text-xs space-y-2.5 z-[70] animate-in fade-in slide-in-from-top-2">
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider">TIME:</span>
                <span className="text-[var(--color-primary)] font-semibold font-mono">{currentTime || "02:29 PM"}</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider">LANG:</span>
                <span className="text-[var(--color-primary)] font-semibold">English</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)]">
                <span className="font-mono uppercase text-[10px] tracking-wider">LOCATION:</span>
                <span className="text-[var(--color-primary)] font-semibold">{PERSONAL_INFO.location || "Gaza"}</span>
              </div>
              <div className="flex justify-start items-center gap-2 text-[var(--color-subtext)] pt-1 border-t border-[var(--color-accent)]/30">
                <span className="font-mono uppercase text-[10px] tracking-wider">STATUS:</span>
                <span className="text-[var(--color-primary)] font-semibold">Available for Work</span>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 2. شريط الملاحة الرئيسي (Main Nav Bar) المطابق للـ DOM بالضبط */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
        <div className="max-w-[86%] mx-auto">
          <div className="bg-[var(--color-secondary)]/60 backdrop-blur-md border border-[var(--color-accent)]/40 rounded-xl px-6 py-6 flex items-center justify-between shadow-lg">
            
            {/* الشعار / الاسم البارز على اليسار */}
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("home");
              }}
              className="group text-base sm:text-xl font-extrabold tracking-widest text-[var(--color-primary)] hover:opacity-80 transition-opacity uppercase"
            >
              RAZAN
            </a>

            {/* روابط التنقل على اليمين للـ Large Screens (مطابقة للـ DOM: hidden lg:flex) */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer ${
                    activeSection === link.id
                      ? "text-[var(--color-primary)] font-bold bg-[var(--color-accent)]/30"
                      : "text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/20"
                  }`}
                >
                  {link.label}
                </button>
              ))}

            </div>

            {/* زر القائمة المنسدلة للـ Mobile & Tablet */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-accent)]/30 transition-colors text-[var(--color-text)]"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

          </div>
        </div>

        {/* القائمة المنسدلة الخاصة بالهواتف (Mobile Drawer) */}
        {isMenuOpen && (
          <div className="lg:hidden max-w-7xl mx-auto mt-2 bg-[var(--color-secondary)]/95 border border-[var(--color-accent)] rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`block w-full text-left px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeSection === link.id
                      ? "bg-[var(--color-primary)]/15 text-[var(--color-primary)] font-bold border border-[var(--color-primary)]/20"
                      : "text-[var(--color-subtext)] hover:bg-[var(--color-accent)]/30 hover:text-[var(--color-text)]"
                  }`}
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
}