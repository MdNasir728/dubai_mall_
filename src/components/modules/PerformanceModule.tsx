// PERFORMING ARTS CENTER MODULE

import { motion } from "framer-motion";
import { ScrollReveal } from "../animation/ScrollReveal";
import { staggerContainer, cardReveal } from "../../constants/animations";
import {
  ACOUSTIC_FEATURES,
  PERFORMING_ART_EVENT_TYPES,
  TECHNICAL_SPECS,
} from "@/data/mallData";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";

export function PerformanceModule() {
  const { openModal } = useDubaiMallStore();

  return (
    <div className="relative min-h-screen py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 30%, oklch(0.15 0.06 220 / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">PERFORMING ARTS CENTER</p>
          <h2 className="section-headline text-foreground max-w-5xl">
            A Theater for the
            <br />
            <span className="text-gold-gradient">
              World's Greatest Performances.
            </span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            Purpose-built for world-class performances: opera, ballet, Broadway,
            symphony orchestras, and digital-first events. A destination venue
            within a destination mall.
          </p>
        </ScrollReveal>

        {/* Key Statistics */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-32"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {TECHNICAL_SPECS.map((spec) => (
            <motion.div
              key={spec.label}
              variants={cardReveal}
              className="glass-panel p-6 rounded-sm text-center"
            >
              <p className="text-label text-gold/70 mb-2">{spec.label}</p>
              <p className="text-2xl font-light text-gold-gradient">
                {spec.value}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Acoustic Features Grid */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Engineered for Excellence
            </h3>
            <p className="text-muted-foreground mt-2">
              State-of-the-art technical specifications
            </p>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {ACOUSTIC_FEATURES.map((item) => (
              <motion.div
                key={item.feature}
                variants={cardReveal}
                className="luxury-card glass-panel p-8 rounded-sm border-l-2 boder border-gold"
              >
                <h4 className="text-lg font-medium text-foreground mb-3">
                  {item.feature}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.benefit}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Event Types */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Event Versatility
            </h3>
            <p className="text-muted-foreground mt-2">
              Optimized for diverse programming
            </p>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {PERFORMING_ART_EVENT_TYPES.map((eventType) => (
              <motion.div
                key={eventType}
                variants={cardReveal}
                className="flex items-center gap-4 p-6 glass-panel rounded-sm hover:bg-foreground/5 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-gold" />
                <span className="text-foreground">{eventType}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Artist Testimonials / Success Stories */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Recent Performances
            </h3>
            <p className="text-muted-foreground mt-2">
              Celebrated artists and world premieres
            </p>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {[
              {
                artist: "Dubai Opera Orchestra",
                performance: "Wagner's Ring Cycle",
                details: "4-night engagement, 8,000+ attendees",
              },
              {
                artist: "International Ballet",
                performance: "Swan Lake premiere",
                details: "Streaming to 50M+ viewers globally",
              },
              {
                artist: "Grammy-winning conductor",
                performance: "Exclusive concert series",
                details: "5 sold-out performances",
              },
            ].map((item) => (
              <motion.div
                key={item.performance}
                variants={cardReveal}
                className="luxury-card glass-panel p-8 rounded-sm"
              >
                <p className="text-label mb-3 text-gold">{item.artist}</p>
                <h4 className="text-lg font-medium text-foreground mb-4">
                  {item.performance}
                </h4>
                <p className="text-sm text-muted-foreground">{item.details}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technical Support & Services */}
        <ScrollReveal>
          <div
            className="p-12 md:p-16"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.08 0.02 85 / 0.5) 0%, oklch(0.05 0.01 85 / 0.3) 100%)",
              border: "1px solid oklch(0.75 0.12 85 / 0.12)",
            }}
          >
            <h3 className="text-2xl font-light text-foreground mb-8">
              End-to-End Support
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {[
                {
                  service: "Technical Direction",
                  description: "Expert crew and equipment management",
                },
                {
                  service: "Sound Engineering",
                  description: "World-class acoustical specialists",
                },
                {
                  service: "Lighting Design",
                  description: "Bespoke lighting programming",
                },
                {
                  service: "Artist Management",
                  description: "Hospitality and coordination",
                },
              ].map((item) => (
                <div key={item.service}>
                  <p className="text-label mb-2 text-gold">{item.service}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="bg-gold text-black px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
                onClick={() => openModal("event-booking")}
              >
                Book a Performance
              </button>
              <button className="px-8 py-3 text-sm font-medium tracking-widest uppercase border border-foreground/20 text-foreground/60 hover:border-gold/50 hover:text-gold/80 transition-all duration-300">
                Technical Specifications
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
