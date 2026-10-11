"use client";

import React from "react";
import FadeIn from "../animations/FadeIn";
import { Code2, Server, Layout, Sparkles } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      id: "frontend",
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive, high-performance web apps with modern React and Next.js. Animations, clean state management, and pixel perfection matter to me.",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "TanStack Query",
        "Redux / Zustand",
        "Framer Motion",
      ],
    },
    {
      id: "backend",
      icon: Server,
      title: "Backend & Database",
      description:
        "Developing scalable backend services, designing databases, handling authentication, and building dynamic RESTful APIs for modern applications.",
      skills: [
        "Laravel",
        "PHP",
        "MySQL",
        "REST APIs",
        "Supabase",
        "Firebase",
        "Postman",
      ],
    },
    {
      id: "architecture",
      icon: Layout,
      title: "UI/UX & Architecture",
      description:
        "Translating complex Figma prototypes into modular, reusable components with responsive mobile-first structures and clean code practices.",
      skills: [
        "Figma to Code",
        "Responsive Design",
        "Clean Architecture",
        "Shadcn/UI",
        "Git & GitHub",
      ],
    },
    {
      id: "ai-realtime",
      icon: Sparkles,
      title: "AI Integration & Automation",
      description:
        "Integrating cutting-edge LLMs and AI services to automate features, generate dynamic content, and add smart interactive features into web apps.",
      skills: [
        "Google Gemini API",
        "Groq API",
        "Structured Data / JSON",
        "Prompt Engineering",
        "Real-time Data",
      ],
    },
  ];

  return (
    <section id="skills" className="relative py-28 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500">
      
      {/* خلفية توهج خفيفة */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[140px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Header - عنوان القسم */}
        <FadeIn delay={0}>
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] mb-3 tracking-tight">
              My <span className="text-[var(--color-primary)]">Skills</span>
            </h2>
            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium">
              Technologies and domains I work in - structured for real-world products.
            </p>
          </div>
        </FadeIn>

        {/* Grid - شبكة المجالات الأربعة */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <FadeIn key={category.id} delay={index * 100}>
                <div className="bg-[var(--color-secondary)]/40 backdrop-blur-md border border-[var(--color-accent)]/30 hover:border-[var(--color-primary)]/50 rounded-[2rem] p-8 transition-all duration-300 group flex flex-col justify-between h-full shadow-lg">
                  
                  <div>
                    {/* Icon Box */}
                    <div className="w-12 h-12 flex items-center justify-center bg-[var(--color-bg)] rounded-xl border border-[var(--color-accent)]/30 text-[var(--color-primary)] mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-xl font-bold text-[var(--color-text)] mb-3">
                      {category.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[var(--color-subtext)] leading-relaxed mb-8">
                      {category.description}
                    </p>
                  </div>

                  {/* Skills Badges / Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {category.skills.map((skill, i) => (
                      <span
                        key={i}
                        className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-[var(--color-bg)]/80 text-[var(--color-text)] border border-[var(--color-accent)]/40 hover:border-[var(--color-primary)]/50 hover:text-[var(--color-primary)] transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
}