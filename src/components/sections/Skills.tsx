"use client";
import React from "react";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFramer,
  SiPostman,
  SiSupabase,
  SiGlobus,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { Database, GitBranch, Smartphone } from "lucide-react";

function Skills() {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#38BDF8" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "React Query", icon: Database, color: "#FF4154" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Git & GitHub", icon: GitBranch, color: "#F05032" },
    { name: "Responsive Design", icon: Smartphone, color: "#38BDF8" },
    { name: "Figma", icon: FiFigma, color: "#F24E1E" },
    { name: "Framer Motion", icon: SiFramer, color: "#0055FF" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
    { name: "REST APIs", icon: Icons.Globe, color: "#4B5563" },
    { name: "Zustand", icon: Icons.Layers, color: "#443E38" },
  ];

  return (
    <section id="skills" className="py-20 bg-[var(--color-bg)]">
      <FadeIn delay={500}>
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-[var(--color-text)] mb-2">
              Tech Stack & Expertise
            </h3>
            <p className="text-sm text-[var(--color-subtext)]">
              Technologies I work with to build amazing projects
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-[var(--color-secondary)] 
                           border border-[var(--color-accent)] 
                           hover:border-[var(--color-primary)] 
                           rounded-2xl p-7 flex flex-col items-center justify-center gap-3 
                           transition-all duration-300 hover:scale-105"
              >
                <skill.icon
                  className="text-3xl"
                  style={{ color: skill.color }}
                />
                <div className="text-sm text-[var(--color-text)] font-medium text-center">
                  {skill.name}
                </div>

                <div
                  className="absolute inset-0 
                                bg-linear-to-br from-primary/0 to-primary/0 
                                group-hover:from-primary/10 group-hover:to-primary/10 
                                rounded-2xl transition-all duration-300"
                ></div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Skills;
