export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  type: string;
  period: string;
  location: string;
  description: string;
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ucas",
    role: "Back End Developer",
    company: "UCAS Technology Incubator",
    type: "Internship",
    period: "Apr 2026 - Present",
    location: "Gaza Strip · On-site",
    description: "Building scalable backend architecture, REST APIs, and database solutions with Laravel and AI integration.",
    skills: ["PHP", "Laravel", "MySQL", "REST APIs", "AI"],
  },
  {
    id: "atyaf",
    role: "Frontend Developer",
    company: "Atyaf",
    type: "Internship",
    period: "Apr 2026 - Jul 2026",
    location: "Gaza Strip · Remote",
    description: "Developed responsive web applications, improved UI implementations, and optimized code quality.",
    skills: ["React", "Next.js", "Tailwind CSS", "Postman"],
  },
  {
    id: "gsg",
    role: "Frontend Developer",
    company: "Gaza Sky Geeks",
    type: "Internship",
    period: "Aug 2025 - Jan 2026",
    location: "Gaza, Gaza Strip · Remote",
    description: "Built interactive web components, integrated RESTful APIs, and managed Git workflows on real projects.",
    skills: ["JavaScript", "React.js", "APIs", "Git"],
  },
];