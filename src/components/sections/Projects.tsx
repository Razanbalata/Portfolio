
"use client";

import React, { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { projects, categories } from "../../data/project";
import FadeIn from "../animations/FadeIn";
import { Star } from "lucide-react";
import ProjectCard from "../ui/ProjectCard";
import ProjectDetailModal from "../ui/ProjectDetailModal";
import { AnimatePresence, motion } from "framer-motion";

const categoryKeys: Record<string, string> = {
  All: "all",
  Frontend: "frontend",
  Laravel: "laravel",
  "Full Stack": "fullStack",
  "JavsScript / Vanilla JS": "vanillaJS",
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  const t = useTranslations("Projects");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const filteredProjects =
    activeCategory === "All"
      ? projects.filter((project) => project.featured)
      : projects.filter((project) => project.categories === activeCategory);

  return (
    <section
      id="projects"
      dir={isArabic ? "rtl" : "ltr"}
      className="relative py-24 bg-[var(--color-bg)] overflow-hidden transition-colors duration-500"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-[var(--color-primary)] opacity-[0.03] rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 max-w-[87%] mx-auto px-6 lg:px-8">
        <FadeIn delay={0}>
          <div className="flex flex-col items-center justify-between mb-12 gap-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-[var(--color-text)] tracking-tight">
              {t("titleStart")}{" "}
              <span className="text-[var(--color-primary)]">
                {t("titleHighlight")}
              </span>
            </h2>

            <p className="text-[var(--color-subtext)] text-sm sm:text-base font-medium text-center">
              {t("subtitle")}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full text-xs font-bold
                  border transition-all duration-300 ease-out
                  cursor-pointer hover:-translate-y-0.5 active:scale-95 ${
                    activeCategory === category
                      ? "bg-[var(--color-primary)] text-black border-[var(--color-primary)] shadow-lg shadow-black/10"
                      : "bg-[var(--color-bg)] text-[var(--color-subtext)] border-transparent hover:border-[var(--color-primary)]/40 hover:text-[var(--color-text)]"
                  }`}
              >
                {t(`categories.${categoryKeys[category]}`)}
              </button>
            ))}
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="inline-flex items-center gap-2 mb-3">
            <Star className="w-4 h-4 text-[var(--color-primary)] fill-[var(--color-primary)]" />

            <span className="text-sm font-semibold my-2 text-[var(--color-primary)] tracking-widest uppercase">
              {t("featuredLabel")}
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => {
                const localizedProject = {
                  ...project,
                  description: t(`items.${project.id}.description`),
                };

                return (
                  <div key={project.id} className="h-full">
                    <ProjectCard
                      project={localizedProject}
                      onSelect={() => setSelectedProject(localizedProject)}
                    />
                  </div>
                );
              })}
            </motion.div>
          </AnimatePresence>
        </FadeIn>
      </div>

      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
