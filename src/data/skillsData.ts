import { Code2, Server, Layout, Sparkles } from "lucide-react";

export interface SubSkill {
  name: string;
  description: string;
}

export interface SkillCategory {
  id: string;
  icon: React.ElementType;
  title: string;
  description: string;
  items: SubSkill[];
}

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    icon: Code2,
    title: "Frontend Development",
    description:
      "Building responsive, high-performance web apps with modern React and Next.js. Animations, clean state management, and pixel perfection matter to me.",
    items: [
      {
        name: "React.js",
        description:
          "Component-based UI library for building interactive web applications with hooks and state management.",
      },
      {
        name: "Next.js",
        description:
          "React framework for production with SSR, SSG, and API routes built-in.",
      },
      {
        name: "TypeScript",
        description:
          "Typed superset of JavaScript for building scalable and maintainable applications.",
      },
      {
        name: "Tailwind CSS",
        description:
          "Utility-first CSS framework for rapidly building custom designs.",
      },
      {
        name: "JavaScript",
        description:
          "Core language for dynamic web scripting and modern ES6+ features.",
      },
      {
        name: "TanStack Query",
        description:
          "Powerful asynchronous state management for server data fetching and caching.",
      },
      {
        name: "Redux / Zustand",
        description:
          "Global state management libraries for handling complex application states.",
      },
      {
        name: "Framer Motion",
        description:
          "Production-ready motion library for React animations and micro-interactions.",
      },
    ],
  },
  {
    id: "backend",
    icon: Server,
    title: "Backend & Database",
    description:
      "Building dynamic web applications with Laravel and PHP, designing relational databases, implementing secure authentication and authorization, and integrating APIs and AI-powered features.",
    items: [
      {
        name: "Laravel",
        description:
          "PHP framework for building dynamic web applications using MVC architecture, middleware, services, and reusable components.",
      },
      {
        name: "PHP",
        description:
          "Server-side programming language for implementing application logic, data processing, and dynamic web functionality.",
      },
      {
        name: "MySQL",
        description:
          "Relational database management system for designing schemas, managing structured data, and writing database queries.",
      },
      {
        name: "Eloquent ORM",
        description:
          "Laravel's ORM for querying databases, defining model relationships, and managing application data.",
      },
      {
        name: "MVC Architecture",
        description:
          "Organizing applications into Models, Views, and Controllers for separation of concerns and maintainable code.",
      },
      {
        name: "REST APIs",
        description:
          "Designing HTTP endpoints and handling requests and responses for communication between applications and services.",
      },

      {
        name: "Events & Notifications",
        description:
          "Building event-driven features and managing application notifications using Laravel's event and notification systems.",
      },
      {
        name: "Laravel Reverb & Echo",
        description:
          "Implementing real-time application updates through WebSockets, broadcasting, and client-side event listeners.",
      },

      {
        name: "Git & GitHub",
        description:
          "Tracking code changes, managing repositories, and maintaining project history.",
      },
      {
        name: "Postman",
        description:
          "Sending HTTP requests and inspecting API responses during API development and debugging.",
      },
    ],
  },
  {
    id: "architecture",
    icon: Layout,
    title: "UI/UX & Architecture",
    description:
      "Translating complex Figma prototypes into modular, reusable components with responsive mobile-first structures and clean code practices.",
    items: [
      {
        name: "Figma to Code",
        description:
          "Converting design prototypes into pixel-perfect, responsive components.",
      },
      {
        name: "Responsive Design",
        description:
          "Ensuring flawless user experience across mobile, tablet, and desktop viewports.",
      },
      {
        name: "Clean Architecture",
        description:
          "Structuring modular codebases for scalability, maintainability, and testing.",
      },
      {
        name: "Reusable Components",
        description:
          "Building modular UI components that improve consistency, maintainability, and development efficiency.",
      },
      {
        name: "Shadcn/UI",
        description:
          "Re-usable components built using Radix UI and Tailwind CSS.",
      },
      {
        name: "Git & GitHub",
        description:
          "Version control workflows, branching strategies, and collaborative code hosting.",
      },
    ],
  },
  {
    id: "ai-realtime",
    icon: Sparkles,
    title: "AI Integration & Automation",
    description:
      "Integrating cutting-edge LLMs and AI services to automate features, generate dynamic content, and add smart interactive features into web apps.",
    items: [
      {
        name: "Google Gemini API",
        description:
          "Leveraging advanced multimodal AI models for content generation and image analysis.",
      },
      {
        name: "Groq API",
        description:
          "High-speed LLM inference engine for lightning-fast AI text processing.",
      },
      {
        name: "Structured Data / JSON",
        description:
          "Parsing and formatting structured outputs from AI models for frontend consumption.",
      },
      {
        name: "Prompt Engineering",
        description:
          "Crafting precise instructions and system prompts to guide AI model behaviors.",
      },
      {
        name: "Real-time Data",
        description:
          "Implementing live data synchronization and streaming updates across clients.",
      },
    ],
  },
];
