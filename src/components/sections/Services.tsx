"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import { services } from "@/src/data/services";
import {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  BrainCircuit,
  Bot,
  type LucideIcon,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { scrollToSection } from "@/src/hooks/useScrollSpy";
const IconsMap: Record<string, LucideIcon> = {
  Code,
  Palette,
  Smartphone,
  Globe,
  Database,
  Server,
  BrainCircuit,
  Bot,
};
export default function Services() {
  const t = useTranslations("Services");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      id="services"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-24 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Section heading */}
        <FadeIn delay={0}>
          <div className="mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              {t("titleStart")}{" "}
              <span className="text-[var(--color-primary)]">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              {t("description")}
            </p>
          </div>
        </FadeIn>

        {/* Service cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => {
            const IconComponent = IconsMap[service.icon] ?? Code;

            const translationKey = String(service.id);

            return (
              <FadeIn key={service.id} delay={index * 100}>
                <div className="bg-[var(--color-secondary)]/40 hover:bg-[var(--color-secondary)]/80 border border-[var(--color-accent)]/10 hover:border-[var(--color-primary)]/50 rounded-2xl p-8 transition-all duration-300 group flex flex-col items-center text-center shadow-lg h-full">
                  {/* Icon */}
                  <div className="w-14 h-14 flex items-center justify-center bg-[var(--color-bg)] rounded-xl border border-[var(--color-accent)]/10 text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title and description */}
                  <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                    {t(`items.${translationKey}.title`)}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--color-subtext)]">
                    {t(`items.${translationKey}.description`)}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>

        {/* About button */}
        <FadeIn delay={400}>
          <div className="flex justify-center">
            <button
              onClick={() => scrollToSection("about")}
              className="px-6 py-3 rounded-full bg-[var(--color-secondary)]/60 hover:bg-[var(--color-secondary)] border border-[var(--color-accent)]/10 hover:border-[var(--color-primary)] text-[var(--color-text)] text-sm font-medium transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-md group"
            >
              <span>{t("aboutMe")}</span>

              <span
                className={`group-hover:translate-x-1 transition-transform text-[var(--color-primary)] ${
                  isArabic ? "rotate-180" : ""
                }`}
              >
                →
              </span>
            </button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
