import * as Icons from "lucide-react";

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof Icons;
}

export const services: ServiceItem[] = [
  {
    id: 1,
    icon: "Layout",
    title: "Frontend Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    id: 2,
    icon: "Server",
    title: "Full-Stack & Backend",
    description: "Laravel, PHP, MySQL, REST APIs, Authentication",
  },
  {
    id: 3,
    icon: "Sparkles",
    title: "UI/UX & Architecture",
    description: "Scalable frontend architecture & modern user interfaces",
  },
  {
    id: 4,
    icon: "Zap",
    title: "AI Integration",
    description: "Gemini & Groq APIs, real-time features & smart web apps",
  },
];