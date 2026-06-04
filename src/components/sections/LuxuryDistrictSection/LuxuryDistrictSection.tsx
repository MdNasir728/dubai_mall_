// LUXURY DISTRICT SECTION

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { EASE_CINEMATIC } from "@/constants/animations";
import { BrandShowcase } from "./BrandShowcase";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";

export function LuxuryDistrictSection() {
  const {openModal} = useDubaiMallStore();
  return (
    <section
      id="luxury-district"
      className="relative min-h-screen py-32 overflow-hidden"
      aria-label="Luxury District"
    >
      {/* Dark luxury image background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/luxury-district.webp"
          alt="Dubai Mall Luxury District"
          className="w-full h-full object-cover opacity-20"
          loading="lazy"
        />
        <div
          className="absolute inset-0"
          style={{ background: "oklch(0.02 0 0 / 0.85)" }}
        />
      </div>

      {/* Deep luxury gradient */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.02 0 0) 0%, oklch(0.06 0.01 85 / 0.5) 50%, oklch(0.02 0 0) 100%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">03 — LUXURY DISTRICT</p>
          <h2 className="section-headline text-foreground max-w-5xl">
            <span className="text-silver-gradient">Fashion Avenue.</span>
            <br />
            <span className="text-muted-foreground/50">Elevated.</span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            A dedicated luxury promenade unmatched anywhere on Earth. Over 70 of
            the world's most prestigious houses housed under one magnificent
            roof — each brand elevated to its fullest expression.
          </p>
        </ScrollReveal>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28">
          {/* Left: Image */}
          <ScrollReveal direction="left">
            <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
              <img
                src="/luxury-district.webp"
                alt="Luxury boutique — Fashion Avenue"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 cinematic-overlay" />

              {/* Floating stat */}
              <div className="absolute top-8 left-8">
                <div className="glass-gold px-5 py-4 rounded-sm">
                  <p className="stat-number-sm text-gold-gradient">#1</p>
                  <p className="text-label text-muted-foreground mt-1">
                    MENA Luxury Hub
                  </p>
                </div>
              </div>
              <div className="absolute bottom-8 right-8">
                <div className="glass-gold px-5 py-4 rounded-sm">
                  <p className="stat-number-sm text-gold-gradient">70+</p>
                  <p className="text-label text-muted-foreground mt-1">
                    Luxury Houses
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Luxury attributes */}
          <ScrollReveal direction="right">
            <div className="flex flex-col h-full justify-center gap-8">
              {/* Key propositions */}
              {[
                {
                  title: "The Premium Address",
                  desc: "Fashion Avenue is where the world's most discerning consumers seek flagship experiences. A premium address that elevates every brand it houses.",
                },
                {
                  title: "VIP Concierge Experience",
                  desc: "Dedicated VIP services, private styling suites, and white-glove concierge — creating a world apart for ultra-HNW clients.",
                },
                {
                  title: "Architecture as Brand Statement",
                  desc: "Bespoke store designs by world-renowned architects — each space a statement of brand identity at its most pure.",
                },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="border-l-2 pl-6"
                  style={{ borderColor: "oklch(0.75 0.12 85 / 0.3)" }}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{
                    duration: 0.8,
                    ease: EASE_CINEMATIC,
                    delay: i * 0.12,
                  }}
                >
                  <h4 className="text-base font-medium text-foreground mb-2">
                    {item.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}

              <motion.button
                className="self-start px-6 py-3 text-sm font-medium border rounded-sm transition-all duration-300 border-gold text-gold"
                onClick={() => openModal("leasing-inquiry")}
                whileHover={{
                  scale: 1.03,
                  backgroundColor: "oklch(0.75 0.12 85 / 0.08)",
                }}
              >
                Luxury Leasing Enquiry →
              </motion.button>
            </div>
          </ScrollReveal>
        </div>

        {/* Brand showcase */}
        <BrandShowcase />
      </div>
    </section>
  );
}
