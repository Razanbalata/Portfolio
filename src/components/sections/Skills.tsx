import React from "react";
import { skills } from "@/src/data/skills";
import * as Icons from "lucide-react";
import FadeIn from "../animations/FadeIn";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiFramer,
} from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { Database, GitBranch, Smartphone } from "lucide-react";
function Skills() {
  const skills = [
    { name: "React.js", icon: SiReact, color: "#61DAFB", level: "Expert" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000", level: "Advanced" },
    {
      name: "Tailwind CSS",
      icon: SiTailwindcss,
      color: "#38BDF8",
      level: "Expert",
    },
    {
      name: "TypeScript",
      icon: SiTypescript,
      color: "#3178C6",
      level: "Advanced",
    },
    {
      name: "React Query",
      icon: Database,
      color: "#FF4154",
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: SiJavascript,
      color: "#F7DF1E",
      level: "Expert",
    },
    {
      name: "Git & GitHub",
      icon: GitBranch,
      color: "#F05032",
      level: "Advanced",
    },
    {
      name: "Responsive Design",
      icon: Smartphone,
      color: "#38BDF8",
      level: "Expert",
    },
    { name: "Figma", icon: FiFigma, color: "#F24E1E", level: "Intermediate" },
    {
      name: "Framer Motion",
      icon: SiFramer,
      color: "#0055FF",
      level: "Intermediate",
    },
  ];

  return (
    <section id="skills">
      <FadeIn delay={500}>
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-2xl font-normal text-white mb-2">
              Tech Stack & Expertise
            </h3>
            <p className="text-sm text-white/60">
              Technologies I work with to build amazing projects
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full max-w-4xl">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 rounded-2xl p-7 flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:scale-100"
              >
                <skill.icon className="text-3xl text-primary" />
                <div className="text-sm text-white/80 font-medium text-center">
                  {skill.name}
                </div>

                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/10 rounded-2xl transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
}

export default Skills;
