// DINING & LIFESTYLE SECTION

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { DINING_VENUES, DINING_STATS } from "@/data/mallData";
import { staggerContainer, cardReveal } from "@/constants/animations";
import { FountainCallout } from "./Fountain";

export function DiningSection() {
  return (
    <section
      id="dining"
      className="relative min-h-screen py-32 overflow-hidden"
      aria-label="Dining and Lifestyle"
    >
      {/* Warm atmosphere background */}
      <div
        className="absolute inset-0 z-0 pointer-pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 0% 50%, oklch(0.18 0.04 55 / 0.2) 0%, transparent 60%), radial-gradient(ellipse 80% 50% at 100% 80%, oklch(0.15 0.03 30 / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">04 — DINING & LIFESTYLE</p>
          <h2 className="section-headline text-foreground max-w-4xl">
            Where Every Meal
            <br />
            <span className="text-gold-gradient">Becomes an Event.</span>
          </h2>
        </ScrollReveal>

        {/* Cinematic food hero */}
        <ScrollReveal className="mb-20">
          <div className="relative overflow-hidden rounded-sm">
            <div className="aspect-[21/9]">
              <img
                src="/dining-rooftop.webp"
                alt="Premium dining at Dubai Mall"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 cinematic-overlay" />
            </div>

            {/* Stats strip */}
            <div className="absolute bottom-0 left-0 border-none right-0 glass-panel p-6 flex flex-wrap justify-between items-center gap-4">
              {DINING_STATS.map((s) => (
                <div key={s.label} className="text-center">
                  <p className="stat-number-sm text-gold-gradient">{s.value}</p>
                  <p className="text-label text-muted-foreground/60 mt-1">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Feature venues */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-28"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {DINING_VENUES.map((venue) => (
            <motion.div
              key={venue.name}
              variants={cardReveal}
              className="luxury-card glass-panel p-8 rounded-sm group"
              whileHover={{ borderColor: "oklch(0.75 0.12 85 / 0.25)" }}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <p className="text-label mb-1 text-gold">
                    {venue.highlight}
                  </p>
                  <h3 className="text-2xl font-light text-foreground">
                    {venue.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {venue.cuisine}
                  </p>
                </div>
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: "oklch(0.75 0.12 85 / 0.15)",
                    border: "1px solid oklch(0.75 0.12 85 / 0.3)",
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path
                      d="M1 6h10M6 1l5 5-5 5"
                      stroke="oklch(0.75 0.12 85)"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {venue.description}
              </p>
              <div className="mt-6 line-subtle" />
            </motion.div>
          ))}
        </motion.div>

        {/* Dubai Fountain experience call-out */}
        <FountainCallout />
      </div>
    </section>
  );
}
