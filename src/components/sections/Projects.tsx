"use client";
import React, { useRef, useState, useEffect } from "react";
import { projects, categories } from "../../data/project";
import FadeIn from "../animations/FadeIn";
import {
  Briefcase,
  Sparkles,
  Target,
  Globe,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProjectCard from "../ui/ProjectCard";

function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(3);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filterProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.categories === activeCategory);

  // ضبط عدد الكروسات حسب حجم الشاشة
  const updateVisibleCards = () => {
    if (window.innerWidth >= 1024) setVisibleCards(3);
    else if (window.innerWidth >= 768) setVisibleCards(2);
    else setVisibleCards(1);
  };

  useEffect(() => {
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  const scrollToIndex = (index: number) => {
    setCurrentIndex(index);
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const card = container.querySelector<HTMLDivElement>(".snap-start");
      if (card) {
        const gap = 24; // نفس الـgap اللي مستخدم في flex
        const cardWidth = card.clientWidth + gap;
        container.scrollTo({ left: cardWidth * index, behavior: "smooth" });
      }
    }
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, filterProjects.length - visibleCards);
    scrollToIndex(Math.min(currentIndex + 1, maxIndex));
  };

  const prevSlide = () => {
    scrollToIndex(Math.max(currentIndex - 1, 0));
  };

  const categoryIcons: Record<string, React.ElementType> = {
    All: Briefcase,
    "Full Stack": Sparkles,
    Frontend: Target,
    "JavsScript / Vanilla JS": Globe,
  };

  return (
    <section id="projects" className="relative py-20 bg-[var(--color-bg)] overflow-hidden">
      {/* Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 right-0 w-96 h-96 bg-[var(--color-primary)]/20 opacity-20 rounded-full" />
        <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-[var(--color-primary)]/20 opacity-20 rounded-full" />
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-[var(--color-primary)]/20 opacity-20 rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <FadeIn delay={0}>
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)] border border-[var(--color-accent)] rounded-full mb-6">
              <Briefcase className="w-4 h-4 text-[var(--color-bg)]" />
              <span className="text-sm font-medium text-[var(--color-bg)]">My Work</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-normal text-[var(--color-text)] mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-[var(--color-subtext)] max-w-2xl mx-auto">
              Showcasing my best work and achievements
            </p>
          </div>
        </FadeIn>

        {/* Category Filter */}
        <FadeIn delay={100}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`group relative px-6 py-3 rounded-full font-medium transition-all duration-300 
                  ${activeCategory === category
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-subtext)] hover:text-[var(--color-text)]"}`}
              >
                <div
                  className={`absolute inset-0 rounded-full transition-all duration-300 
                    ${activeCategory === category
                      ? "bg-[var(--color-primary)]/10 opacity-100"
                      : "bg-[var(--color-secondary)] border border-[var(--color-accent)]"}`}
                />
                <div className="relative flex items-center gap-2">
                  {React.createElement(categoryIcons[category], {
                    className: "w-4 h-4 text-[var(--color-primary)]",
                  })}
                  <span className="text-sm">{category}</span>
                </div>
                {activeCategory === category && (
                  <div className="absolute inset-0 rounded-full bg-[var(--color-primary)] blur-xl opacity-50 -z-10" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        {/* Projects Carousel */}
        <FadeIn delay={200}>
          <div className="relative">
            <div
              ref={scrollContainerRef}
              className="overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-none"
            >
              <div className="flex gap-6 pb-4">
                {filterProjects.map((project, index) => (
                  <div
                    key={project.id}
                    className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 snap-start"
                  >
                    <div className="group relative rounded-2xl overflow-hidden hover:scale-100 transition-transform duration-300">
                      <ProjectCard project={project} />
                      <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/10 transition-all duration-300 blur-xl rounded-2xl" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            {filterProjects.length > visibleCards && (
              <>
                <button
                  onClick={prevSlide}
                  disabled={currentIndex === 0}
                  className="flex absolute -left-10 top-1/2 -translate-y-1/2 -translate-x-2 lg:-translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[var(--color-secondary)]/20 backdrop-blur-sm border border-[var(--color-accent)] rounded-full hover:bg-[var(--color-secondary)]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                  aria-label="Previous projects"
                >
                  <ChevronLeft className="text-[var(--color-text)]" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={currentIndex >= filterProjects.length - visibleCards}
                  className="flex absolute -right-10 top-1/2 -translate-y-1/2 translate-x-2 lg:translate-x-4 items-center justify-center w-10 h-10 lg:w-12 lg:h-12 bg-[var(--color-secondary)]/20 backdrop-blur-sm border border-[var(--color-accent)] rounded-full hover:bg-[var(--color-secondary)]/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed z-10"
                  aria-label="Next projects"
                >
                  <ChevronRight className="text-[var(--color-text)]" />
                </button>
              </>
            )}

            {/* Navigation Dots */}
            {filterProjects.length > visibleCards && (
              <div className="flex items-center justify-center gap-2 mt-8">
                {Array.from({
                  length: Math.max(0, filterProjects.length - visibleCards + 1),
                }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToIndex(index)}
                    className={`transition-all duration-300 rounded-full 
                      ${index === currentIndex
                        ? "bg-[var(--color-primary)] w-6 h-2"
                        : "bg-[var(--color-accent)] w-2 h-2 hover:bg-[var(--color-primary)]"}`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

export default Projects;