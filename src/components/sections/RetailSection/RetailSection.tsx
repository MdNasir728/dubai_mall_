// RETAIL EXPERIENCE SECTION

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { staggerContainer, cardReveal } from "@/constants/animations";
import { RETAIL_HIGHLIGHTS } from "@/data/mallData";
import { TenantMix } from "./TenantCard";

export default function RetailSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      id="retail"
      ref={sectionRef}
      className="relative min-h-screen py-16 overflow-hidden"
      aria-label="Retail Experience"
    >
      {/* Left accent glow */}
      <div
        className="absolute left-0 top-1/4 w-96 h-96 rounded-full pointer-events-none blur-2xl"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.12 85 / 0.05) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">02 — RETAIL PLATFORM</p>
          <h2 className="section-headline text-foreground max-w-4xl">
            The World's <span className="text-gold-gradient">Most Desired</span>
            <br />
            Retail Address.
          </h2>
        </ScrollReveal>

        {/* Hero image with overlay text */}
        <ScrollReveal className="mb-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src="/retail-corridor.webp"
              alt="Dubai Mall retail corridor"
              className="w-full h-full object-cover animate-slow-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 cinematic-overlay" />

            {/* Stats overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 flex flex-wrap gap-6 md:gap-12">
              {[
                { v: "1,200+", l: "Retail Outlets" },
                { v: "$2,500", l: "Avg. Monthly Spend/visitor" },
                { v: "89%", l: "Occupancy Rate" },
                { v: "#1", l: "MENA Retail Hub" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="stat-number-sm text-gold-gradient">{s.v}</p>
                  <p className="text-label text-foreground/50 mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Highlight cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-28"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {RETAIL_HIGHLIGHTS.map((item) => (
            <motion.div
              key={item.label}
              variants={cardReveal}
              className="luxury-card group overflow-hidden rounded-sm"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 cinematic-overlay" />
                <div className="absolute top-4 right-4">
                  <span className="glass-gold px-3 py-1.5 rounded-sm text-xs font-medium text-gold">
                    {item.stat}
                  </span>
                </div>
              </div>
              <div className="glass-panel p-6">
                <h3 className="text-lg font-medium text-foreground mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tenant mix */}
        <TenantMix isInView={isInView} />
      </div>
    </section>
  );
}
