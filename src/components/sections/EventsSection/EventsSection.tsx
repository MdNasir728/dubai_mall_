// ====================================================
// EVENTS & GLOBAL PLATFORM SECTION
// ====================================================

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { EASE_CINEMATIC } from "@/constants/animations";
import { PastBrands } from "./PastBrand";
import { EventTypesGrid } from "./EventTypeGrid";
import { VenueCapabilities } from "./VenueCapability";
import { BookingCTA } from "./BookingCTA";

export default function EventsSection() {
  return (
    <section
      id="events"
      className="relative min-h-screen py-32 overflow-hidden"
      aria-label="Events and Global Platform"
    >
      {/* Concert atmosphere glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 40% at 50% 0%, oklch(0.2 0.04 280 / 0.12) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">06 — EVENTS PLATFORM</p>
          <h2 className="section-headline text-foreground max-w-5xl">
            The World's Stage
            <br />
            <span className="text-gold-gradient">for What Matters.</span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            Dubai Mall is not just a retail destination — it's a globally
            recognised event platform. Every year, thousands of activations,
            launches, concerts, and cultural moments unfold across our
            unparalleled event infrastructure.
          </p>
        </ScrollReveal>

        {/* Concert hero image */}
        <ScrollReveal className="mb-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src="/events-concert.avif"
              alt="Events at Dubai Mall — concert and activations"
              className="w-full h-full object-cover animate-slow-zoom"
              loading="lazy"
            />
            <div className="absolute inset-0 cinematic-overlay" />
            <div className="absolute inset-0 vignette" />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
              <motion.div
                className="glass-gold px-10 py-8 rounded-sm max-w-lg"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.9, ease: EASE_CINEMATIC }}
              >
                <p className="text-label mb-3 text-gold">
                  ANNUAL FOOTFALL DURING EVENTS
                </p>
                <p
                  className="text-foreground text-gold-gradient"
                  style={{
                    fontSize: "clamp(2.5rem, 6vw, 6rem)",
                    fontWeight: 200,
                    letterSpacing: "-0.04em",
                    lineHeight: 1,
                  }}
                >
                  8M+
                </p>
                <p className="text-muted-foreground text-sm mt-2">
                  Event-specific visitors per year
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Venue capabilities */}
        <VenueCapabilities />

        {/* Event types grid */}
        <EventTypesGrid />

        {/* Past brand partners */}
        <PastBrands />

        {/* Booking CTA */}
        <BookingCTA />
      </div>
    </section>
  );
}
