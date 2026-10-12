export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "ucasti",
    role: "Backend Developer Trainee",
    company: "UCASTI",
    period: "Apr 2026 - Present",
    location: "Palestine",
    description: "Participate in project-based training focused on PHP, Laravel, backend development, REST APIs, and scalable application architecture.",
    highlights: [
      "Participate in project-based training focused on PHP, Laravel, backend development, REST APIs, and scalable application architecture.",
      "Develop backend features involving database design, REST API integration, authentication, business logic, and secure coding practices.",
      "Integrate AI-powered tools and intelligent APIs while applying clean architecture principles and Git workflows to build maintainable backend solutions."
    ],
    skills: ["PHP", "Laravel", "REST APIs", "Database Design", "AI Integration", "Git"],
  },
  {
    id: "atyaf",
    role: "Front-End Developer Trainee",
    company: "Atyaf Company",
    period: "Apr 2026 - Jul 2026",
    location: "Palestine",
    description: "Developed responsive and user-friendly web applications using React.js, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.",
    highlights: [
      "Developed responsive and user-friendly web applications using React.js, Next.js, TypeScript, HTML5, CSS3, and Tailwind CSS.",
      "Applied Next.js App Router, CSS Modules, React state management, and API data fetching practices in real-world frontend projects.",
      "Collaborated on improving UI implementation, code quality, and development workflow through Git-based collaboration and code reviews."
    ],
    skills: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "App Router", "Git"],
  },
  {
    id: "gaza-sky-geeks",
    role: "Front-End Developer Trainee",
    company: "Gaza Sky Geeks",
    period: "Aug 2025 - Dec 2026",
    location: "Remote / Palestine",
    description: "Developed clean, responsive, and user-friendly web applications using modern frontend technologies.",
    highlights: [
      "Developed clean, responsive, and user-friendly web applications using modern frontend technologies.",
      "Built and optimized web applications including e-commerce platforms and interactive job portals.",
      "Applied component-based development, responsive design, and API integration practices.",
      "Collaborated in a professional training environment to improve software quality."
    ],
    skills: ["React.js", "Next.js", "Tailwind CSS", "Responsive Design", "API Integration"],
  },
];