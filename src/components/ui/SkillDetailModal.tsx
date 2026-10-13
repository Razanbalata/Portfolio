
"use client";

import React, { useEffect, useState } from "react";
import { X } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";

interface SubSkill {
  name: string;
  description: string;
}

interface SkillCategoryDetail {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  items: SubSkill[];
}

interface SkillDetailModalProps {
  category: SkillCategoryDetail | null;
  onClose: () => void;
}

export default function SkillDetailModal({
  category,
  onClose,
}: SkillDetailModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations("Skills");
  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    if (!category) {
      setIsVisible(false);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [category]);

  if (!category) return null;

  const Icon = category.icon;

  return (
    <div
      onClick={onClose}
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-0 z-[40] flex items-center justify-center p-4
        bg-black/70 backdrop-blur-md
        transition-opacity duration-300 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-4xl max-h-[85vh]
          bg-[var(--color-secondary)]/95 backdrop-blur-2xl
          border border-[var(--color-accent)]/50 rounded-3xl
          shadow-2xl overflow-hidden flex flex-col
          transform transition-all duration-300 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-[0.97]"
          }`}
      >
        {/* Header */}
        <div className="p-6 sm:p-8 pb-6 flex items-start justify-between border-b border-[var(--color-accent)]/20 gap-4">
          <div className="flex items-center gap-4 min-w-0">
            <div className="shrink-0 w-14 h-14 flex items-center justify-center bg-[var(--color-bg)] rounded-2xl border border-[var(--color-accent)]/40 text-[var(--color-primary)] shadow-md">
              <Icon className="w-7 h-7" />
            </div>

            <div className="min-w-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-[var(--color-text)] tracking-tight">
                {t(`categories.${category.id}.title`)}
              </h2>

              <p className="text-xs sm:text-sm text-[var(--color-subtext)] mt-1 max-w-xl leading-relaxed">
                {t(`categories.${category.id}.description`)}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label={t("close")}
            className="shrink-0 p-2 rounded-full text-[var(--color-subtext)] hover:text-[var(--color-text)] hover:bg-[var(--color-accent)]/30 transition-all cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Technologies Grid Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-4 pr-4 scrollbar-thin scrollbar-thumb-[var(--color-accent)]/60 scrollbar-track-transparent">
          <div className="text-xs font-bold text-[var(--color-subtext)] tracking-wider uppercase mb-2">
            {t("technologiesTitle")}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {category.items.map((item, index) => (
              <div
                key={item.name}
                style={{
                  transitionDelay: isVisible
                    ? `${Math.min(index * 50, 250)}ms`
                    : "0ms",
                }}
                className={`bg-[var(--color-bg)]/60 border border-[var(--color-accent)]/30
                  hover:border-[var(--color-primary)]/50 rounded-2xl p-5
                  transition-all duration-300 shadow-sm flex flex-col justify-between
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-3"
                  }`}
              >
                <div>
                  <h3 className="text-base font-bold text-[var(--color-text)] mb-2">
                    {item.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
