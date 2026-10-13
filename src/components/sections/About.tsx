"use client";

import React from "react";
import { useTranslations, useLocale } from "next-intl";
import FadeIn from "../animations/FadeIn";
import RadialGradientBackgorund from "../backgrounds/RadialGradientBackgorund";

function About() {
  const t = useTranslations("About");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      id="about"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-28 overflow-hidden bg-[var(--color-bg)] transition-colors duration-500"
    >
      <RadialGradientBackgorund variant="about" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-2">
        {/* Section heading */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
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

        {/* Main glassmorphic card */}
        <FadeIn delay={100}>
          <div className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/10 rounded-[1rem] p-8 md:p-12 md:py-16 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Biography */}
              <div className="lg:col-span-7 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-[var(--color-text)] mb-6 tracking-tight">
                  {t("biography")}
                </h3>

                <div className="space-y-4 text-[var(--color-subtext)] text-sm sm:text-base leading-relaxed font-normal">
                  <p>
                    {t("paragraph1Start")}{" "}
                    <span className="text-[var(--color-text)] font-semibold">
                      {t("frontendSkills")}
                    </span>{" "}
                    {t("paragraph1End")}
                  </p>

                  <p>
                    {t("paragraph2Start")}{" "}
                    <span className="text-[var(--color-text)] font-semibold">
                      {t("backendSkills")}
                    </span>
                    , {t("paragraph2Middle")}
                  </p>

                  <p>{t("paragraph3")}</p>
                </div>
              </div>

              {/* 3D Atom animation — unchanged */}
              <div className="lg:col-span-5 flex justify-center items-center relative py-12">
                <div className="relative w-full h-[400px] flex items-center justify-center overflow-hidden perspective-1000">
                  <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/2 to-[var(--color-accent)]/2 blur-lg pointer-events-none" />

                  <div
                    className="relative w-72 h-72 flex items-center justify-center"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {/* Core glow */}
                    <div className="absolute w-32 h-32 rounded-full bg-[var(--color-primary)]/10 blur-3xl" />

                    {/* Central nucleus */}
                    <div className="absolute w-5 h-5 rounded-full bg-[var(--color-primary)] shadow-[0_0_20px_var(--color-primary)] animate-pulse z-20" />

                    {/* Outer dotted orbit */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-[var(--color-accent)]/20 pointer-events-none" />

                    {/* Orbit 1 */}
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--color-primary)]/40 pointer-events-none"
                      style={{ transform: "rotateX(75deg) rotateZ(45deg)" }}
                    >
                      <div className="w-full h-full animate-spin-slow">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                      </div>
                    </div>

                    {/* Orbit 2 */}
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--color-primary)]/40 pointer-events-none"
                      style={{
                        transform:
                          "rotateX(75deg) rotateY(60deg) rotateZ(120deg)",
                      }}
                    >
                      <div className="w-full h-full animate-spin-reverse-slow">
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                      </div>
                    </div>

                    {/* Orbit 3 */}
                    <div
                      className="absolute inset-0 rounded-full border border-[var(--color-primary)]/30 pointer-events-none"
                      style={{
                        transform:
                          "rotateX(75deg) rotateY(120deg) rotateZ(200deg)",
                      }}
                    >
                      <div
                        className="w-full h-full animate-spin-slow"
                        style={{ animationDuration: "12s" }}
                      >
                        <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default About;