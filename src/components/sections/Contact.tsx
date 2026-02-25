"use client";
import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Send,
  MessageSquare,
  Facebook,
  FacebookIcon,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "@/src/utils/constants";
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

 const socialIcons: Record<string, any> = {
   github: Github,
   linkedin: Linkedin,
   facebook: FacebookIcon,
 };

  return (
    <section id="contact" className="relative py-24 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500">
      {/* Aesthetic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 border border-[var(--color-primary)]/20 rounded-full mb-6">
              <MessageSquare className="w-4 h-4 text-[var(--color-primary)]" />
              <span className="text-[10px] text-[var(--color-primary)] font-bold tracking-[0.2em] uppercase">Contact Me</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-4 tracking-tight">
              Let’s Craft Something <span className="text-[var(--color-primary)]">Extraordinary</span>
            </h2>
            <p className="text-[var(--color-subtext)] max-w-xl mx-auto font-medium text-lg leading-relaxed">
              Whether you have a groundbreaking idea or a simple question, I’m here to help you bring it to life.
            </p>
          </div>
        </FadeIn>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Form */}
          <FadeIn delay={100}>
            <div className="bg-[var(--color-secondary)]/50 backdrop-blur-sm border border-[var(--color-accent)]/30 rounded-[2.5rem] p-8 md:p-10 shadow-sm">
              <form action="https://formspree.io/f/mdalylpp" method="POST" onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-semibold text-[var(--color-text)] ml-1">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-2xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/40 focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all"
                      placeholder="What should I call you?"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-semibold text-[var(--color-text)] ml-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-2xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/40 focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-semibold text-[var(--color-text)] ml-1">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-5 py-4 bg-[var(--color-bg)] border border-[var(--color-accent)]/40 rounded-2xl text-[var(--color-text)] placeholder-[var(--color-subtext)]/40 focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] outline-none transition-all resize-none"
                    placeholder="Tell me about your next big project..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-5 bg-[var(--color-primary)] text-[var(--color-bg)] font-bold rounded-2xl hover:opacity-95 transition-all flex items-center justify-center gap-3 shadow-lg shadow-[var(--color-primary)]/20 group"
                >
                  <span className="tracking-wide">Send Message</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>

                {status.message && (
                  <div className={`p-4 rounded-2xl text-center text-sm font-bold animate-fadeIn ${status.type === "success" ? "bg-green-500/10 text-green-500 border border-green-500/20" : "bg-red-500/10 text-red-500 border border-red-500/20"}`}>
                    {status.message}
                  </div>
                )}
              </form>
            </div>
          </FadeIn>

          {/* Contact Information */}
          <FadeIn delay={200}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[var(--color-text)] tracking-tight">Contact Information</h3>
              <p className="text-[var(--color-subtext)] font-medium leading-relaxed italic">
                "Great things start with a simple conversation. Let's make it happen."
              </p>
            </div>

            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email", value: PERSONAL_INFO.email, link: `mailto:${PERSONAL_INFO.email}` },
                { icon: MapPin, label: "Location", value: PERSONAL_INFO.location, link: null },
              ].map((item, i) => ( 
                <div key={i} className="flex items-center gap-5 p-5 bg-[var(--color-secondary)]/30 border border-[var(--color-accent)]/20 rounded-[1.5rem] group hover:border-[var(--color-primary)]/40 transition-all duration-300">
                  <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg)] rounded-xl border border-[var(--color-accent)]/30 text-[var(--color-primary)] group-hover:bg-[var(--color-primary)] group-hover:text-[var(--color-bg)] transition-colors duration-300">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-subtext)]">{item.label}</p>
                    {item.link ? (
                      <a href={item.link} className="text-[var(--color-text)] font-bold hover:text-[var(--color-primary)] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--color-text)] font-bold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-6">
              <p className="text-sm font-bold text-[var(--color-subtext)] mb-6 uppercase tracking-[0.2em]">Follow My Journey</p>
              <div className="flex gap-4">
                {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([platform, url]) => {
                  const Icon = socialIcons[platform];
                  return Icon ? (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-14 h-14 flex items-center justify-center bg-[var(--color-secondary)]/50 border border-[var(--color-accent)]/30 rounded-2xl text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:text-[var(--color-bg)] hover:-translate-y-2 transition-all duration-300 shadow-sm"
                    >
                      <Icon className="w-6 h-6" />
                    </a>
                  ) : null;
                })}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export default Contact;