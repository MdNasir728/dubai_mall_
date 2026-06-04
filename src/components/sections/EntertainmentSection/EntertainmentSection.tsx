// ENTERTAINMENT & ATTRACTIONS SECTION

import { useRef } from "react";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { AttractionsGrid } from "./Attractiona";

export default function EntertainmentSection() {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      id="entertainment"
      ref={sectionRef}
      className="relative min-h-screen py-32 overflow-hidden"
      aria-label="Entertainment and Attractions"
    >
      {/* Dynamic ambient lighting */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 30%, oklch(0.2 0.06 220 / 0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">05 — ENTERTAINMENT</p>
          <h2 className="section-headline text-foreground max-w-5xl">
            Not a destination.
            <br />
            <span className="text-gold-gradient">An experience universe.</span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            No other mall on Earth offers this density of world-class
            entertainment. Six attractions that individually command global
            attention — together, they create an unmissable gravity that keeps
            visitors here for hours.
          </p>
        </ScrollReveal>

        {/* Full-width aquarium hero image */}
        <ScrollReveal className="mb-20">
          <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
            <img
              src="/entertainment-aquarium.avif"
              alt="Dubai Aquarium — world's largest"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 cinematic-overlay" />
            <div className="absolute inset-0 vignette" />

            {/* Floating headline */}
            <div className=" absolute inset-0 flex flex-col items-center justify-center text-center">
              <p className="text-label mb-3 text-gold">SIGNATURE ATTRACTION</p>
              <h3
                className="text-foreground"
                style={{
                  fontSize: "clamp(2rem, 5vw, 5.5rem)",
                  fontWeight: 200,
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                }}
              >
                Dubai Aquarium &<br />
                <span className="text-gold-gradient">Underwater Zoo</span>
              </h3>
              <p className="text-muted-foreground mt-4 text-base font-light max-w-sm">
                10 million litres — the world's largest suspended aquarium
              </p>
            </div>

            {/* Bottom stats */}
            <div className="absolute bottom-0 left-0 right-0 glass-panel p-6 grid grid-cols-2 md:grid-cols-4 justify-center gap-8">
              {[
                { v: "33,000+", l: "Aquatic Animals" },
                { v: "10M", l: "Litres of Water" },
                { v: "140", l: "Species" },
                { v: "2M+", l: "Annual Visitors" },
              ].map((s) => (
                <div key={s.l} className="text-center">
                  <p className="text-2xl font-light text-gold-gradient">
                    {s.v}
                  </p>
                  <p className="text-label text-muted-foreground/60 mt-1">
                    {s.l}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Attractions grid */}
        <AttractionsGrid />
      </div>
    </section>
  );
}
