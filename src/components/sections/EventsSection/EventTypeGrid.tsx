import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { cardReveal, staggerContainer } from "@/constants/animations";
import { EVENT_STATS } from "@/data/mallData";
import { motion } from "framer-motion";

export function EventTypesGrid() {
  return (
    <div className="mb-24">
      <ScrollReveal className="mb-10">
        <p className="text-label text-muted-foreground/50">
          EVENT FORMATS WE HOST
        </p>
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {EVENT_STATS.map((type) => (
          <motion.div
            key={type.label}
            variants={cardReveal}
            className="luxury-card glass-gold p-5 rounded-sm text-center hover:border-2 hover:border-gold transition-all duration-600 transform-3d hover:-translate-y-[1px]"
          >
            <p className="text-xl font-light text-gold-gradient mb-1">
              {type.count}
            </p>
            <p className="text-sm font-medium text-foreground/80">
              {type.label}
            </p>
            <p className="text-xs text-muted-foreground/50 mt-1">{type.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
