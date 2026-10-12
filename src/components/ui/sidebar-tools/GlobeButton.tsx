"use client";

import React, { useState } from "react";
import { Globe, Check } from "lucide-react";

type LanguageCode = "en" | "ar" | "tr";

interface LanguageOption {
  code: LanguageCode;
  flag: string; // الرمز المختصر (US, AR, TR)
  label: string;
}

const LANGUAGES: LanguageOption[] = [
  { code: "en", flag: "US", label: "English" },
  { code: "ar", flag: "AR", label: "العربية" },
  { code: "tr", flag: "TR", label: "Türkçe" },
];

export default function GlobeButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLang, setActiveLang] = useState<LanguageCode>("en");

  const handleSelectLanguage = (langCode: LanguageCode) => {
    setActiveLang(langCode);
    setIsOpen(false);
    console.log(`Language switched to: ${langCode}`);
    // هنا يمكن ربط مكتبة الترجمة أو تغيير اتجاه الصفحة (RTL/LTR) لاحقاً
  };

  return (
    <div className="relative">
      {/* زر الأيقونة في السايدبار */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
          isOpen
            ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
            : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
        }`}
        title="Language Switcher"
        aria-label="Language Switcher"
      >
        <Globe className="w-5 h-5" />
      </button>

      {/* القائمة المنبثقة للغات */}
      {isOpen && (
        <div className="absolute right-14 top-0 w-56 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          <div className="space-y-1">
            {LANGUAGES.map((lang) => {
              const isSelected = activeLang === lang.code;
              return (
                <button
                  key={lang.code}
                  onClick={() => handleSelectLanguage(lang.code)}
                  className={`w-full flex items-center justify-between p-3 rounded-xl transition-all duration-150 text-left cursor-pointer ${
                    isSelected
                      ? "bg-[var(--color-primary)]/10 text-[var(--color-text)]"
                      : "bg-transparent hover:bg-[var(--color-accent)]/20 text-[var(--color-subtext)] hover:text-[var(--color-text)]"
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={`font-mono font-bold text-xs ${
                        isSelected
                          ? "text-[var(--color-primary)]"
                          : "text-[var(--color-subtext)]"
                      }`}
                    >
                      {lang.flag}
                    </span>
                    <span
                      className={`text-sm font-semibold ${
                        isSelected ? "text-[var(--color-text)]" : ""
                      }`}
                    >
                      {lang.label}
                    </span>
                  </div>
                  {isSelected && (
                    <Check className="w-4 h-4 text-[var(--color-primary)]" />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
