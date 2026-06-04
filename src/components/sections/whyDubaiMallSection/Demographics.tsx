import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { EASE_CINEMATIC } from "@/constants/animations";
import { DEMOGRAPHICS } from "@/data/mallData";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function DemographicsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
    >
      <ScrollReveal direction="left">
        <p className="text-label mb-4" style={{ color: "var(--gold)" }}>
          VISITOR DEMOGRAPHICS
        </p>
        <h3
          className="text-4xl font-light text-foreground mb-6 leading-tight"
          style={{ letterSpacing: "-0.02em" }}
        >
          Premium audience.
          <br />
          Global reach.
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          Dubai Mall consistently attracts the world's highest concentration of
          luxury shoppers — discerning, high-spending, and globally mobile
          consumers with unmatched purchasing intent.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="right">
        <div className="flex flex-col gap-5">
          {DEMOGRAPHICS.map((d, i) => (
            <div key={d.label} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-foreground/70">{d.label}</span>
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--gold)" }}
                >
                  {d.value}
                </span>
              </div>
              <div
                className="h-px w-full rounded-full overflow-hidden"
                style={{ background: "oklch(0.18 0 0)" }}
              >
                <motion.div
                  className="h-full rounded-full"
                  style={{
                    background: `linear-gradient(90deg, oklch(0.75 0.12 85), oklch(0.92 0.15 85))`,
                  }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={isInView ? { scaleX: d.bar / 100 } : { scaleX: 0 }}
                  transition={{
                    duration: 1.2,
                    ease: EASE_CINEMATIC,
                    delay: 0.2 + i * 0.1,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}