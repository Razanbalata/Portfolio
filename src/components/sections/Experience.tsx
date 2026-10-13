
"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import FadeIn from "../animations/FadeIn";
import { EXPERIENCES, ExperienceItem } from "@/src/data/experience";
import { Briefcase, Calendar } from "lucide-react";
import ExperienceDetailModal from "../ui/ExperienceDetailModal";

export default function Experience() {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);

  const t = useTranslations("Experience");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      id="experience"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-24 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500"
    >
      <div className="relative z-10 max-w-[87%] mx-auto px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              {t("titleStart")}{" "}
              <span className="text-[var(--color-primary)]">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EXPERIENCES.map((exp, index) => (
            <FadeIn key={exp.id} delay={index * 100}>
              <button
                type="button"
                onClick={() => setSelectedExperience(exp)}
                aria-label={t("viewDetails", {
                  role: t(`items.${exp.id}.role`),
                })}
                className="w-full text-start bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/10 hover:border-[var(--color-primary)]/50 rounded-[1.5rem] p-8 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg cursor-pointer hover:shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
              >
                <div>
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {t(`items.${exp.id}.role`)}
                  </h3>

                  <div className="flex items-center gap-2 text-xs sm:text-sm text-[var(--color-subtext)] mb-2 font-medium">
                    <Briefcase className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>{exp.company}</span>
                  </div>

                  <div className="flex items-center gap-1.5 text-xs text-[var(--color-subtext)]/80 mb-4 font-mono">
                    <Calendar className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed mb-5">
                    {t(`items.${exp.id}.description`)}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 pt-2 border-t border-[var(--color-accent)]/10">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-md text-[11px] font-medium bg-[var(--color-bg)]/80 text-[var(--color-text)] border border-[var(--color-accent)]/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <ExperienceDetailModal
        experience={selectedExperience}
        onClose={() => setSelectedExperience(null)}
      />
    </section>
  );
}
