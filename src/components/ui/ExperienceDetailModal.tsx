"use client";

import React, { useEffect, useState } from "react";
import { X, Briefcase, Calendar, MapPin } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { ExperienceItem } from "@/src/data/experience";

interface ExperienceDetailModalProps {
  experience: ExperienceItem | null;
  onClose: () => void;
}

export default function ExperienceDetailModal({
  experience,
  onClose,
}: ExperienceDetailModalProps) {
  const [isVisible, setIsVisible] = useState(false);

  const t = useTranslations("Experience");
  const locale = useLocale();
  const isArabic = locale === "ar";

  useEffect(() => {
    if (!experience) {
      setIsVisible(false);
      return;
    }

    const frame = requestAnimationFrame(() => {
      setIsVisible(true);
    });

    return () => cancelAnimationFrame(frame);
  }, [experience]);

  if (!experience) return null;

  const itemKey = `items.${experience.id}`;

  return (
    <div
      onClick={onClose}
      dir={isArabic ? "rtl" : "ltr"}
      className={`fixed inset-0 z-[40] flex items-center justify-center p-4
        bg-black/80 backdrop-blur-md
        transition-opacity duration-300 ease-out
        ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`relative w-full max-w-2xl max-h-[85vh] overflow-y-auto
          bg-[#0b131a] border border-[#1e293b] rounded-[1.5rem]
          shadow-[0_20px_50px_rgba(0,0,0,0.7)]
          flex flex-col p-6 sm:p-8
          transition-all duration-300 ease-out
          ${
            isVisible
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-5 scale-[0.97]"
          }`}
      >
        <button
          onClick={onClose}
          aria-label={t("close")}
          className={`absolute top-6 ${
            isArabic ? "left-6" : "right-6"
          } w-9 h-9 flex items-center justify-center
            rounded-full bg-[#131d28] text-gray-400
            hover:text-white hover:bg-[#1a2634]
            transition-colors cursor-pointer border border-[#223042]`}
        >
          <X className="w-5 h-5" />
        </button>

        <h2
          className={`text-2xl sm:text-3xl font-bold
            text-[var(--color-primary)] tracking-tight
            ${isArabic ? "pl-12" : "pr-12"} mb-4`}
        >
          {t(`${itemKey}.role`)}
        </h2>

        <div
          className="flex flex-wrap items-center gap-5 text-xs sm:text-sm
          text-gray-300 font-medium pb-6 border-b border-[#1e293b]"
        >
          <div className="flex items-center gap-2">
            <Briefcase className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
            <span>{experience.company}</span>
          </div>

          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
            <span>{experience.period}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
            <span>{experience.location}</span>
          </div>
        </div>

        <p className="text-sm text-gray-200 leading-relaxed my-6">
          {t(`${itemKey}.description`)}
        </p>

        <div className="space-y-4">
          <h3 className="text-[11px] font-bold text-gray-400 tracking-widest uppercase">
            {t("highlightsTitle")}
          </h3>

          <div className="space-y-3">
            {experience.highlights.map((_, index) => (
              <div
                key={index}
                style={{
                  transitionDelay: isVisible
                    ? `${Math.min(index * 60, 300)}ms`
                    : "0ms",
                }}
                className={`flex items-start gap-3
                  transition-all duration-300 ease-out
                  ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-2"
                  }`}
              >
                <span
                  className="w-2 h-2 rounded-full
                  bg-[var(--color-primary)]
                  shadow-[0_0_8px_var(--color-primary)]
                  shrink-0 mt-2"
                />

                <span className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                  {t(`${itemKey}.highlights.${index}`)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
