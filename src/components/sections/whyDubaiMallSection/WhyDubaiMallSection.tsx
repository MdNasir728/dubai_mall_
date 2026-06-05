// WHY DUBAI MALL — The Property Section

import { useRef } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { WHY_METRICS } from "@/data/mallData";
import {
  staggerContainer,
  cardReveal,
  lineExpand,
  EASE_CINEMATIC,
} from "@/constants/animations";
import { StatsRow } from "./StatsRow";
import { DemographicsSection } from "./Demographics";
import locationMap from '@/assets/location-map.avif'

export default function WhyDubaiMallSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="why-dubai-mall"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden"
      aria-label="Why Dubai Mall"
    >
      {/* Background texture */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 100%, oklch(0.12 0.02 85 / 0.2) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <ScrollReveal direction="up" className="mb-20">
          <p className="text-label mb-4" style={{ color: "var(--gold)" }}>
            01 — THE OPPORTUNITY
          </p>
          <h2 className="section-headline text-foreground max-w-4xl">
            Where the <span className="text-gold-gradient">World</span>
            <br />
            Comes to Shop.
          </h2>
          <motion.div
            className="mt-6 h-px w-24"
            style={{ background: "var(--gold)", transformOrigin: "left" }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: EASE_CINEMATIC, delay: 0.3 }}
            variants={lineExpand}
          />
        </ScrollReveal>

        {/* Location image + copy split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28">
          <ScrollReveal direction="left">
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={locationMap}
                alt="Dubai Mall location — Downtown Dubai"
                className="w-full h-full object-cover animate-slow-zoom"
                loading="lazy"
              />
              <div className="absolute inset-0 cinematic-overlay" />

              {/* Overlay badges */}
              <div className="absolute -bottom-2 left-6 right-6 flex flex-wrap gap-2">
                {[
                  "0 min to Burj Khalifa",
                  "Metro Connected",
                  "15 min from DXB",
                ].map((label) => (
                  <span
                    key={label}
                    className="glass-gold px-3 py-1.5 rounded-sm text-xs font-medium"
                    style={{ color: "var(--gold)" }}
                  >
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right">
            <div className="flex flex-col justify-center h-full gap-8">
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                Positioned at the pulsing heart of{" "}
                <strong className="text-foreground font-medium">
                  Downtown Dubai
                </strong>{" "}
                — the world's most connected retail destination, adjacent to the
                Burj Khalifa and within a 4-hour flight radius of{" "}
                <strong className="text-foreground font-medium">
                  3.3 billion people
                </strong>
                .
              </p>
              <p className="text-lg font-light text-muted-foreground leading-relaxed">
                A sovereign platform for global brands, hosting visitors from
                over{" "}
                <strong className="text-foreground font-medium">
                  200 countries
                </strong>{" "}
                — with 62% international footfall and unrivalled luxury
                demographic density.
              </p>

              {/* Quick stats grid */}
              <motion.div
                className="grid grid-cols-2 gap-4"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {WHY_METRICS.slice(0, 4).map((m) => (
                  <motion.div
                    key={m.label}
                    variants={cardReveal}
                    className="glass-panel p-4 rounded-sm"
                  >
                    <p className="stat-number-sm text-gold-gradient leading-none">
                      {m.value}
                    </p>
                    <p className="text-label text-muted-foreground mt-1">
                      {m.label}
                    </p>
                    <p className="text-xs text-muted-foreground/60 mt-1">
                      {m.desc}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        </div>

        {/* Full stats row */}
        <StatsRow />

        {/* Demographics */}
        <DemographicsSection />
      </div>
    </section>
  );
}
