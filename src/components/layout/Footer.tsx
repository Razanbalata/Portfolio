"use client";
import React from "react";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  MapPin,
  Heart,
  Copyright,
  FacebookIcon,
} from "lucide-react";
import { PERSONAL_INFO, SOCIAL_LINKS, NAV_LINKS } from "@/src/utils/constants";
import { scrollToSection } from "@/src/hooks/useScrollSpy";
import FadeIn from "../animations/FadeIn";

function Footer() {
const socialIcons: Record<string, any> = {
  github: Github,
  linkedin: Linkedin,
  facebook: FacebookIcon,
};

  return (
    <footer className="relative bg-[var(--color-bg)] overflow-hidden border-t border-[var(--color-accent)]/20 transition-colors duration-500">
      {/* Background Decor */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)] opacity-[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          
          {/* Brand Identity */}
          <FadeIn delay={0}>
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-[var(--color-text)] tracking-tighter cursor-default">
                {PERSONAL_INFO.name.split(" ")[0]}
                <span className="text-[var(--color-primary)] animate-pulse">.</span>
              </h3>
              <p className="text-[var(--color-subtext)] text-sm leading-relaxed max-w-xs font-medium">
                {PERSONAL_INFO.title} — Crafting digital experiences with precision and aesthetic balance.
              </p>
              
              <div className="space-y-3 pt-2">
                {/* Email Hover Fix */}
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="group flex items-center gap-3 p-3 bg-[var(--color-secondary)]/30 border border-[var(--color-accent)]/10 rounded-2xl hover:border-[var(--color-primary)]/40 hover:bg-[var(--color-secondary)] transition-all duration-500 shadow-sm"
                >
                  <div className="p-2 bg-[var(--color-primary)]/10 rounded-xl group-hover:bg-[var(--color-primary)] transition-all duration-500">
                    <Mail className="w-4 h-4 text-[var(--color-primary)] group-hover:text-[var(--color-bg)] transition-colors duration-500" />
                  </div>
                  <span className="text-[var(--color-subtext)] text-xs font-bold group-hover:text-[var(--color-text)] transition-colors">
                    {PERSONAL_INFO.email}
                  </span>
                </a>

                {/* Location Card */}
                <div className="flex items-center gap-3 p-3 bg-[var(--color-secondary)]/30 border border-[var(--color-accent)]/10 rounded-2xl shadow-sm hover:border-[var(--color-accent)]/40 transition-colors">
                  <div className="p-2 bg-[var(--color-primary)]/10 rounded-xl">
                    <MapPin className="w-4 h-4 text-[var(--color-primary)]" />
                  </div>
                  <span className="text-[var(--color-subtext)] text-xs font-bold italic">
                    {PERSONAL_INFO.location}
                  </span>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Navigation Links with Bullet Hover */}
          <FadeIn delay={100}>
            <div>
              <h4 className="text-[var(--color-text)] font-bold mb-8 text-sm uppercase tracking-[0.2em] opacity-80">Quick Navigation</h4>
              <ul className="grid grid-cols-1 gap-y-4 gap-x-8">
                {NAV_LINKS.map((link) => (
                  <li key={link.id}>
                    <button
                      className="group flex items-center gap-3 text-[var(--color-subtext)] hover:text-[var(--color-primary)] transition-all duration-300"
                      onClick={() => scrollToSection(link.id)}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)]/40 group-hover:bg-[var(--color-primary)] group-hover:scale-150 transition-all duration-300 shadow-[0_0_8px_transparent] group-hover:shadow-[var(--color-primary)]" />
                      <span className="text-sm font-semibold">{link.label}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>

          {/* Social Presence with Lift Hover */}
          <FadeIn delay={200}>
            <div>
              <h4 className="text-[var(--color-text)] font-bold mb-8 text-sm uppercase tracking-[0.2em] opacity-80">Social Presence</h4>
              <p className="text-[var(--color-subtext)] text-sm mb-8 leading-relaxed font-medium italic">
                Follow me for design insights, tech updates, and a glimpse into my creative process.
              </p>
              <div className="flex gap-4">
                {Object.entries(SOCIAL_LINKS)
                  .slice(0, 3)
                  .map(([platform, url]) => {
                    const Icon = socialIcons[platform];
                    return Icon ? (
                      <a
                        key={platform}
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 bg-[var(--color-secondary)]/50 rounded-2xl border border-[var(--color-accent)]/20 text-[var(--color-text)] hover:text-[var(--color-primary)] hover:border-[var(--color-primary)] hover:-translate-y-2 hover:shadow-lg hover:shadow-[var(--color-primary)]/10 transition-all duration-500 shadow-sm"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    ) : null;
                  })}
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <FadeIn delay={300}>
          <div className="pt-10 border-t border-[var(--color-accent)]/20 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-2 text-[var(--color-subtext)] text-[10px] font-bold tracking-widest uppercase opacity-60 hover:opacity-100 transition-opacity">
              <Copyright className="w-3.5 h-3.5" />
              <span>{new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</span>
            </div>
            
            <div className="flex items-center gap-2 text-[var(--color-subtext)] text-[10px] font-bold tracking-widest uppercase">
              <span>Refined with</span>
              <Heart className="w-3.5 h-3.5 text-[var(--color-primary)] fill-[var(--color-primary)] animate-pulse" />
              <span className="opacity-60">using Next.js & Tailwind</span>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}

export default Footer;