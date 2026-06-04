import { ScrollReveal } from "@/components/animation/ScrollReveal";
import {
  cardReveal,
  staggerContainer,
  staggerContainerFast,
} from "@/constants/animations";
import { LUXURY_BRANDS } from "@/data/mallData";
import { TIER_COLORS, TIER_LABELS } from "@/lib/utils";
import { motion } from "framer-motion";

export function BrandShowcase() {
  const ultraLuxury = LUXURY_BRANDS.filter((b) => b.tier === "ultra-luxury");
  const luxury = LUXURY_BRANDS.filter((b) => b.tier === "luxury");

  return (
    <div>
      <ScrollReveal className="mb-8">
        <p className="text-label text-muted-foreground/50">RESIDENT BRANDS</p>
      </ScrollReveal>

      <div className="space-y-6">
        {/* Ultra-luxury tier */}
        <div>
          <p
            className="text-label mb-3"
            style={{ color: TIER_COLORS["ultra-luxury"] }}
          >
            {TIER_LABELS["ultra-luxury"]}
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainerFast}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {ultraLuxury.map((brand) => (
              <motion.span
                key={brand.name}
                variants={cardReveal}
                className="px-4 py-2 text-sm font-medium rounded-sm transition-all duration-300 cursor-default"
                style={{
                  border: `1px solid oklch(0.75 0.12 85 / 0.25)`,
                  color: "oklch(0.75 0.12 85)",
                  background: "oklch(0.12 0.02 85 / 0.15)",
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: "oklch(0.75 0.12 85 / 0.6)",
                }}
              >
                {brand.name}
              </motion.span>
            ))}
          </motion.div>
        </div>

        {/* Luxury tier */}
        <div>
          <p
            className="text-label mb-3"
            style={{ color: TIER_COLORS["luxury"] }}
          >
            {TIER_LABELS["luxury"]}
          </p>
          <motion.div
            className="flex flex-wrap gap-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {luxury.map((brand) => (
              <motion.span
                key={brand.name}
                variants={cardReveal}
                className="px-4 py-2 text-sm rounded-sm transition-all duration-300 cursor-default"
                style={{
                  border: `1px solid oklch(0.35 0 0 / 0.5)`,
                  color: "oklch(0.65 0 0)",
                  background: "oklch(0.1 0 0 / 0.4)",
                }}
                whileHover={{ scale: 1.03, borderColor: "oklch(0.5 0 0)" }}
              >
                {brand.name}
              </motion.span>
            ))}
            <motion.span
              variants={cardReveal}
              className="px-4 py-2 text-sm rounded-sm cursor-default"
              style={{
                color: "oklch(0.4 0 0)",
                border: "1px dashed oklch(0.2 0 0)",
              }}
            >
              + 50 More
            </motion.span>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
