"use client";
import React, { useEffect, useState } from "react";
import { Code, Menu, X } from "lucide-react";
import { NAV_LINKS, PERSONAL_INFO } from "@/src/utils/constants";
import { scrollToSection, useScrollSpy } from "@/src/hooks/useScrollSpy";
import ThemeToggle from "../ui/ToggleTheme";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const activeSection = useScrollSpy(NAV_LINKS.map((link) => link.id));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] w-full py-4 transition-all duration-300 ${
        isScrolled
          ? "backdrop-blur-lg border-b border-[var(--color-accent)] bg-[var(--color-bg)]/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Code className="w-6 h-6 text-[var(--color-primary)]" />
            <button
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
              className="text-2xl font-semibold text-[var(--color-text)] hover:opacity-80 transition-opacity"
            >
              {PERSONAL_INFO.name.split(" ")[0]}
            </button>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`font-medium transition-all duration-300 ${
                  activeSection === link.id
                    ? "text-[var(--color-text)]"
                    : "text-[var(--color-subtext)] hover:text-[var(--color-text)]"
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <button
              onClick={() => handleNavClick("contact")}
              className="px-6 py-3 rounded-[14px] font-medium
                         bg-[var(--color-primary)]
                         text-white
                         hover:opacity-90
                         transition-all duration-300"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md
                       text-[var(--color-text)]
                       hover:bg-[var(--color-secondary)]
                       transition-colors duration-300"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-5 py-4 bg-[var(--color-secondary)]">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`block w-full text-left px-4 py-3 rounded-lg font-medium transition-all ${
                  activeSection === link.id
                    ? "bg-[var(--color-accent)] text-[var(--color-text)]"
                    : "text-[var(--color-subtext)] hover:bg-[var(--color-accent)]/40"
                }`}
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNavClick("contact")}
              className="block w-full text-center px-4 py-3 rounded-lg font-medium
                         bg-[var(--color-primary)]
                         text-white
                         hover:opacity-90"
            >
              Hire Me
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;