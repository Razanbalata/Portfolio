import { Layout, Smartphone, Code2, Zap, GitBranch, Database, Globe } from "lucide-react";
import * as Icons from "lucide-react";

export const services : {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof Icons;
}[] = [
  {
    id: 1,
    icon: "Layout",
    title: "Frontend Development",
    description: "Building responsive, interactive, and accessible web applications using React.js, Next.js, and modern JavaScript frameworks."
  },
  {
    id: 2,
    icon: "Smartphone",
    title: "Responsive Design",
    description: "Ensuring seamless experiences across devices by implementing mobile-first and adaptive designs."
  },
  {
    id: 3,
    icon: "Code2",
    title: "Custom Components",
    description: "Transforming Figma/Design prototypes into reusable, pixel-perfect, and interactive components."
  },
  {
    id: 4,
    icon: "Zap",
    title: "Performance Optimization",
    description: "Improving app speed, load times, and efficiency using best coding practices and optimization techniques."
  },
  {
    id: 5,
    icon: "GitBranch",
    title: "Code Review & Consulting",
    description: "Providing guidance, reviewing code quality, and suggesting improvements for scalable projects."
  },
  {
    id: 6,
    icon: "Database",
    title: "API Integration & Data Management",
    description: "Integrating RESTful APIs, handling data flow efficiently, and building dynamic, data-driven applications."
  },
  {
    id: 7,
    icon: "Globe",
    title: "Deployment & CI/CD",
    description: "Deploying production-ready apps using Vercel/Netlify with automated build and deployment workflows."
  }
];