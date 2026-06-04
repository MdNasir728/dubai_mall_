import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { EASE_CINEMATIC } from "@/constants/animations";
import { TENANT_CATEGORIES } from "@/data/mallData";
import { motion } from "framer-motion";

export function TenantMix({ isInView }: { isInView: boolean }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <ScrollReveal direction="left">
        <p className="text-label mb-4 text-gold">TENANT MIX</p>
        <h3 className="text-4xl font-light text-foreground mb-6 -tracking-tight leading-[1.07]">
          Curated for
          <br />
          maximum conversion.
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-8">
          Every category thoughtfully balanced. Every zone strategically
          positioned to maximise dwell time, cross-category spend, and brand
          elevation.
        </p>
        <button className="px-6 py-3 text-sm font-medium rounded-sm transition-all duration-300 hover:scale-[1.02] bg-gold text-black cursor-pointer tracking-wider">
          Download Leasing Guide
        </button>
      </ScrollReveal>

      <ScrollReveal direction="right">
        <div className="flex flex-col gap-4">
          {TENANT_CATEGORIES.map((cat, i) => (
            <div key={cat.name} className="flex items-center gap-4">
              <span className="text-sm text-foreground/60 w-40 shrink-0">
                {cat.name}
              </span>
              <div
                className="flex-1 relative h-1 rounded-full overflow-hidden"
                style={{ background: "oklch(0.15 0 0)" }}
              >
                <motion.div
                  className="absolute left-0 top-0 bottom-0 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, oklch(0.75 0.12 85), oklch(0.92 0.15 85))`,
                  }}
                  initial={{ scaleX: 0, transformOrigin: "left" }}
                  animate={isInView ? { scaleX: cat.bar / 100 } : { scaleX: 0 }}
                  transition={{
                    duration: 1.1,
                    ease: EASE_CINEMATIC,
                    delay: 0.3 + i * 0.08,
                  }}
                />
              </div>
              <span className="text-sm font-medium w-14 text-right text-gold">
                {cat.count}
              </span>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  );
}
