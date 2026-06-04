// ====================================================
// CINEMATIC FLOATING NAVIGATION
// ====================================================

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_SECTIONS } from "@/data/mallData";
import { useNavigationStore } from "@/stores/navigationStore";
import type { SectionId } from "@/types";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { Button } from "../ui/button";

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export function FloatingNav() {
  const { activeSection, setActiveSection, isNavVisible, setNavVisible } =
    useNavigationStore();
  const { scrollY } = useScrollProgress();
  const prevScrollY = useRef(0);

  useEffect(() => {
    setNavVisible(scrollY > 80);
    prevScrollY.current = scrollY;
  }, [scrollY, setNavVisible]);

  // Intersection observer to track active section
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    NAV_SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id as SectionId);
          }
        },
        { threshold: 0.4, rootMargin: "-10% 0px -40% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [setActiveSection]);

  return (
    <>
      {/* Side dot navigation */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.nav
            aria-label="Section navigation"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col items-end gap-3"
          >
            {NAV_SECTIONS.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="group flex items-center gap-3 cursor-pointer"
                aria-label={`Navigate to ${label}`}
              >
                <span
                  className="text-label text-muted-foreground opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap"
                  style={{
                    color: activeSection === id ? "var(--gold)" : undefined,
                  }}
                > 
                  {label}
                </span>
                <div
                  className={`nav-dot transition-all duration-400 ${
                    activeSection === id
                      ? "active"
                      : "group-hover:bg-foreground/40"
                  }`}
                />
              </button>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Top logo bar */}
      <AnimatePresence>
        {isNavVisible && (
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.02 0 0 / 0.9) 0%, transparent 100%)",
            }}
          >
            <button
              onClick={() => scrollToSection("hero")}
              className="cursor-pointer text-label text-muted-foreground hover:text-gold transition-colors duration-300"
              style={{ color: "var(--gold)", letterSpacing: "0.2em" }}
            >
              DUBAI MALL
            </button>

            <button
              onClick={() => scrollToSection("events")}
              className="cursor-pointer text-label px-5 py-2.5 border border-gold/30 text-gold/80 hover:bg-gold/10 hover:text-gold hover:border-gold/60 transition-all duration-300 rounded-sm"
              style={{ color: "var(--gold)" }}
            >
              PARTNER WITH US
            </button>
          </motion.header>
        )}
      </AnimatePresence>

      {/* Scroll progress bar */}
      <ScrollProgressBar />
    </>
  );
}

function ScrollProgressBar() {
  const { scrollYProgress } = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-[2px]">
      <motion.div
        className="h-full origin-left"
        style={{
          background:
            "linear-gradient(90deg, oklch(0.75 0.12 85), oklch(0.92 0.15 85), oklch(0.75 0.12 85))",
          scaleX: scrollYProgress,
        }}
      />
    </div>
  );
}
