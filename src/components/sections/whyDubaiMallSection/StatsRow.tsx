import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { AnimatedCounter } from "@/components/typography/AnimatedCounter";
import { cardReveal, staggerContainer } from "@/constants/animations";
import { PROPERTY_STATS } from "@/data/mallData";
import { motion } from "framer-motion";

export function StatsRow() {
  return (
    <div className="mb-28">
      <ScrollReveal className="mb-10">
        <p className="text-label text-muted-foreground/60">PROPERTY SCALE</p>
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {PROPERTY_STATS.map((stat) => (
          <motion.div
            key={stat.label}
            variants={cardReveal}
            className="luxury-card glass-panel p-6 rounded-sm flex flex-col gap-2 text-center"
          >
            <div className="stat-number-sm text-gold-gradient">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                duration={2000}
              />
            </div>
            <p className="text-sm font-medium text-foreground/80">
              {stat.label}
            </p>
            <p className="text-xs text-muted-foreground/50">
              {stat.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
