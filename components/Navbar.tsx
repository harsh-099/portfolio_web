"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Resume", href: "#resume" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks
        .map((link) => document.getElementById(link.href.substring(1)))
        .filter(Boolean);

      let currentSection = "home";

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.getBoundingClientRect().top;

          if (sectionTop <= 140) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    const handleNavbarScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("scroll", handleNavbarScroll);
    handleScroll();
    handleNavbarScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleNavbarScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${scrolled
          ? "border-slate-200 bg-white/95 shadow-lg shadow-slate-200/20 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/95 dark:shadow-black/20"
          : "border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/50 dark:bg-slate-950/80"
        }`}    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => setActiveSection("home")}
          className="text-2xl font-bold tracking-tight text-slate-950 dark:text-white"
        >
          HP<span className="text-cyan-500 dark:text-cyan-400">.</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => {
            const sectionId = link.href.substring(1);
            const isActive = activeSection === sectionId;

            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative text-sm font-medium transition-colors duration-300 ${isActive
                  ? "text-cyan-600 dark:text-cyan-400"
                  : "text-slate-500 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                  }`}
              >
                {link.name}

                {isActive && (
                  <span className="absolute -bottom-2 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-cyan-500 dark:bg-cyan-400" />
                )}
              </a>
            );
          })}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <ThemeToggle />

          {/* Mobile Menu Button */}
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-900 transition-all duration-300 hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-700 dark:text-white dark:hover:border-cyan-400 dark:hover:text-cyan-400 lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-5 dark:border-slate-800 dark:bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => {
              const sectionId = link.href.substring(1);
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setMenuOpen(false);
                    setActiveSection(sectionId);
                  }}
                  className={`text-sm font-medium transition-colors duration-300 ${isActive
                    ? "text-cyan-600 dark:text-cyan-400"
                    : "text-slate-600 hover:text-cyan-500 dark:text-slate-400 dark:hover:text-cyan-400"
                    }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}