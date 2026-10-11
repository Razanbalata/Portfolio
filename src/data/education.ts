export interface EducationItem {
  id: string;
  title: string;
  institution: string;
  period: string;
  description?: string;
}

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: "swe",
    title: "Software Engineering Student",
    institution: "University Studies",
    period: "2023 - Present",
    description: "Specializing in Frontend & Full-Stack Development, Object-Oriented Design, and Software Architecture.",
  },
  {
    id: "gsg-cert",
    title: "Frontend Development Training",
    institution: "Gaza Sky Geeks",
    period: "2025 - 2026",
    description: "Intensive training program covering modern web development, React.js, and real-world project workflows.",
  },
  {
    id: "backend-cert",
    title: "Backend Development Training",
    institution: "UCAS Technology Incubator",
    period: "2026",
    description: "Project-based training focusing on PHP, Laravel, RESTful APIs, MySQL, and AI integration.",
  },
  {
    id: "cert-appreciation",
    title: "Certificates & Training Achievements",
    institution: "Various Platforms & Bootcamps",
    period: "2024 - 2026",
    description: "Continuous learning in Web Architecture, UI/UX, and AI integrations.",
  },
];