"use client";

import { useState, useTransition } from "react";
import { Globe, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/src/i18n/navigation";
const LANGUAGES = [
  { code: "en", flag: "US", label: "English" },
  { code: "ar", flag: "AR", label: "العربية" },
] as const;

export default function GlobeButton() {
  const [isOpen, setIsOpen] = useState(false);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const handleSelectLanguage = (langCode: "en" | "ar") => {
    setIsOpen(false);

    if (langCode === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: langCode });
    });
  };

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`siderbar-hover relative flex items-center justify-center w-12 h-12 rounded-full border transition-all duration-300 cursor-pointer shadow-lg backdrop-blur-md ${
          isOpen
            ? "border-[var(--color-primary)] text-[var(--color-primary)] bg-[var(--color-primary)]/15"
            : "border-border/50 text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:border-[var(--color-primary)]/60 bg-background/80 hover:bg-background"
        }`}
        title="Language Switcher"
        aria-label="Language Switcher"
        aria-expanded={isOpen}
      >
        <Globe className="w-5 h-5" />
      </button>

      {isOpen && (
        <div className="absolute right-14 top-0 w-56 bg-[var(--color-secondary)]/95 backdrop-blur-xl border border-[var(--color-accent)]/10 rounded-2xl p-2 shadow-2xl z-50 animate-in fade-in slide-in-from-right-2">
          <div className="space-y-1">
            {LANGUAGES.map((lang) => {
              const isSelected = locale === lang.code;

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
                    <span className="font-mono font-bold text-xs text-[var(--color-primary)]">
                      {lang.flag}
                    </span>

                    <span className="text-sm font-semibold">{lang.label}</span>
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
