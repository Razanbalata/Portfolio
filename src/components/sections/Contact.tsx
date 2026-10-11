"use client";
import React, { useState } from "react";
import { Send } from "lucide-react";
import FadeIn from "../animations/FadeIn";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setStatus({ type: "error", message: "Please enter a valid email address." });
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

      if (!res.ok) throw new Error("Failed");

      setStatus({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", message: "" });

    } catch (error) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    }

    setTimeout(() => setStatus({ type: "", message: "" }), 5000);
  };

  return (
    <section id="lets talk" className="relative py-28 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500">
      
      {/* خلفية متوهجة خفيفة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        
        {/* العنوان والوصف العلوي */}
        <FadeIn delay={0}>
          <div className="mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              Let's <span className="text-[var(--color-primary)]">Talk</span>
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              Happy to connect and share thoughts. I respond within 24 hours.
            </p>
          </div>
        </FadeIn>

        {/* صندوق النموذج المركّز */}
        <FadeIn delay={100}>
          <div className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/30 rounded-[2rem] p-8 md:p-10 shadow-2xl text-left">
            <form action="https://formspree.io/f/mdalylpp" method="POST" onSubmit={handleSubmit} className="space-y-6">
              
              {/* حقل الاسم */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/50 focus:border-[var(--color-primary)] outline-none transition-all text-sm"
                  placeholder="Your Name"
                />
              </div>

              {/* حقل الإيميل */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/50 focus:border-[var(--color-primary)] outline-none transition-all text-sm"
                  placeholder="Your Email"
                />
              </div>

              {/* حقل الرسالة */}
              <div>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/50 focus:border-[var(--color-primary)] outline-none transition-all resize-none text-sm"
                  placeholder="Your Message"
                />
              </div>

              {/* زر الإرسال */}
              <button
                type="submit"
                className="w-full py-4 bg-[var(--color-primary)] text-white font-semibold rounded-xl hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg text-sm cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Send Message</span>
              </button>

              {/* ملاحظة تحت الزر */}
              <p className="text-center text-xs text-[var(--color-subtext)] pt-1">
                I read every message and reply within 24 hours.
              </p>

              {/* تنبيهات الحالة (نجاح / خطأ) */}
              {status.message && (
                <div className={`p-3 rounded-xl text-center text-xs font-semibold ${status.type === "success" ? "bg-green-500/10 text-green-400 border border-green-500/20" : "bg-red-500/10 text-red-400 border border-red-500/20"}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </FadeIn>

        {/* النص السفلي الإضافي */}
        <FadeIn delay={200}>
          <div className="mt-8 text-xs text-[var(--color-subtext)]">
            Prefer social media? Check out my{" "}
            <a href="#contact" className="text-[var(--color-primary)] hover:underline font-medium">
              contact page
            </a>{" "}
            for more options.
          </div>
        </FadeIn>

      </div>
    </section>
  );
}

export default Contact;