"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import FadeIn from "../animations/FadeIn";
import { useLocale, useTranslations } from "next-intl";

function Contact() {
  const t = useTranslations("ContactForm");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      setStatus({ type: "error", message: t("errors.required") });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: t("errors.invalidEmail") });
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send message");

      setStatus({
        type: "success",
        message: t("success"),
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus({
        type: "error",
        message: t("errors.generic"),
      });
    }

    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  return (
    <section
      id="lets-talk"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-28 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Section Header */}
        <FadeIn delay={0}>
          <div className="mb-12">
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

        {/* Contact Form */}
        <FadeIn delay={100}>
          <div
            className={`bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/10 rounded-[1rem] p-8 md:p-10 shadow-2xl ${
              isArabic ? "text-right" : "text-left"
            }`}
          >
            <form
              action="https://formspree.io/f/mdalylpp"
              method="POST"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  aria-label={t("fields.name")}
                  placeholder={t("fields.name")}
                  className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/10 rounded-xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/50 focus:border-[var(--color-primary)] outline-none transition-all text-sm"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  aria-label={t("fields.email")}
                  placeholder={t("fields.email")}
                  className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/10 rounded-xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/50 focus:border-[var(--color-primary)] outline-none transition-all text-sm"
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  aria-label={t("fields.message")}
                  placeholder={t("fields.message")}
                  className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/10 rounded-xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/50 focus:border-[var(--color-primary)] outline-none transition-all resize-none text-sm"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t("send")}</span>
              </button>

              {/* Response Time Note */}
              <p className="text-center text-xs text-[var(--color-subtext)] pt-1">
                {t("responseNote")}
              </p>

              {/* Submission Status */}
              {status.message && (
                <div
                  role="status"
                  aria-live="polite"
                  className={`p-3 rounded-xl text-center text-xs font-semibold ${
                    status.type === "success"
                      ? "bg-green-500/10 text-green-400 border border-green-500/20"
                      : "bg-red-500/10 text-red-400 border border-red-500/20"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </FadeIn>

        {/* Bottom Note */}
        <FadeIn delay={200}>
          <div className="mt-8 text-xs text-[var(--color-subtext)]">
            {t("socialNote")}{" "}
            <a
              href="#contact"
              className="text-[var(--color-primary)] hover:underline font-medium"
            >
              {t("contactLink")}
            </a>{" "}
            {t("socialNoteEnd")}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Contact;