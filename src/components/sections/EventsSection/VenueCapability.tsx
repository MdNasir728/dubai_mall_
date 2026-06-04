import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { cardReveal, staggerContainer } from "@/constants/animations";
import { EVENT_CAPABILITIES } from "@/data/mallData";
import { motion } from "framer-motion";

export function VenueCapabilities() {
  return (
    <div className="mb-24">
      <ScrollReveal className="mb-10">
        <p className="text-label text-muted-foreground/50">
          VENUE INFRASTRUCTURE
        </p>
      </ScrollReveal>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-5"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
      >
        {EVENT_CAPABILITIES.map((venue) => (
          <motion.div
            key={venue.name}
            variants={cardReveal}
            className="luxury-card glass-panel p-8 rounded-sm group"
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-light text-foreground mb-1">
                  {venue.name}
                </h3>
                <p className="text-label text-gold">{venue.capacity}</p>
              </div>
              <div className="w-2 h-2 rounded-full shrink-0 mt-2 text-gold" />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {venue.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
