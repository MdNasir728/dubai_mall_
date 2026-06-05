import { EASE_CINEMATIC } from "@/constants/animations";
import { AnimatedCounter } from "@/components/typography/AnimatedCounter";
import { motion } from "framer-motion";

export function HeroMetrics() {
  const metrics = [
    { value: 105, suffix: "M+", label: "Annual Visitors" },
    { value: 1200, suffix: "+", label: "Retail Outlets" },
    { value: 1124511, suffix: " sqm", label: "Total Area" },
    { value: 200, suffix: "+", label: "Restaurants" },
  ];

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-5 gap-2 md:gap-4 lg:gap-10 w-full max-w-full border-t pt-8 mt-15"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15, delayChildren: 1.8 } },
      }}
      style={{ borderColor: "oklch(0.25 0 0)" }}
    >
      {metrics.map((m, i) => (
        <motion.div
          key={m.label}
          className={`text-center w-full ${i === 2 ? "md:col-span-2" : ""}`}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.8, ease: EASE_CINEMATIC },
            },
          }}
        >
          <div className="stat-number-sm text-gold-gradient mb-1 whitespace-nowrap">
            <AnimatedCounter
              target={m.value}
              suffix={m.suffix}
              duration={2200}
            />
          </div>
          <p className="text-label text-muted-foreground/60">{m.label}</p>
        </motion.div>
      ))}
    </motion.div>
  );
}
