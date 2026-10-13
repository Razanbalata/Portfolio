"use client";

import React from "react";
import {
  Mail,
  Github,
  Linkedin,
  Twitter,
  Phone,
} from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/src/utils/constants";
import { useLocale, useTranslations } from "next-intl";

export default function ContactLinks() {
  const t = useTranslations("Contact");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const contactCards = [
    {
      name: "WhatsApp",
      detail: "+970 59 000 0000",
      icon: Phone,
      link: "https://wa.me/970590000000",
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
    },
    {
      name: "GitHub",
      detail: SOCIAL_LINKS.github
        ? SOCIAL_LINKS.github.replace("https://", "")
        : "@Razan-Balata",
      icon: Github,
      link: SOCIAL_LINKS.github || "#",
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
    },
    {
      name: "LinkedIn",
      detail: SOCIAL_LINKS.linkedin
        ? SOCIAL_LINKS.linkedin.replace("https://", "")
        : "@Razan-Balata",
      icon: Linkedin,
      link: SOCIAL_LINKS.linkedin || "#",
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
    },
    {
      name: "Twitter",
      detail: "@Razan_Balata",
      icon: Twitter,
      link: SOCIAL_LINKS.twitter || "#",
      color: "text-sky-400 bg-sky-500/10 border-sky-500/20",
    },
    {
      name: "Email",
      detail: PERSONAL_INFO.email || "razan@example.com",
      icon: Mail,
      link: PERSONAL_INFO.email
        ? `mailto:${PERSONAL_INFO.email}`
        : "mailto:razan@example.com",
      color: "text-red-400 bg-red-500/10 border-red-500/20",
    },
  ];

  return (
    <section
      id="contact"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-24 bg-[var(--color-bg)] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="mb-16">
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

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactCards.map((item, index) => {
            const Icon = item.icon;

            return (
              <FadeIn key={item.name} delay={index * 100}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.name}: ${item.detail}`}
                  className={`flex items-center gap-4 p-6
                    bg-[var(--color-secondary)]/40
                    hover:bg-[var(--color-secondary)]/80
                    border border-[var(--color-accent)]/10
                    hover:border-[var(--color-primary)]/50
                    rounded-2xl transition-all duration-300
                    group shadow-lg ${
                      isArabic ? "text-right" : "text-left"
                    }`}
                >
                  <div
                    className={`w-12 h-12 shrink-0 flex items-center justify-center rounded-xl border ${item.color} transition-transform group-hover:scale-110`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="overflow-hidden min-w-0">
                    <h3 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors">
                      {item.name}
                    </h3>

                    <p
                      dir="ltr"
                      className="text-xs text-[var(--color-subtext)] truncate mt-0.5"
                    >
                      {item.detail}
                    </p>
                  </div>
                </a>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
