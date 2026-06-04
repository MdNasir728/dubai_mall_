// SCROLL REVEAL — universal reveal animation wrapper

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import type { ScrollRevealProps } from "@/types";
import { EASE_CINEMATIC } from "@/constants/animations";

const directionMap = {
  up: { y: 48, x: 0 },
  left: { y: 0, x: -48 },
  right: { y: 0, x: 48 },
  none: { y: 0, x: 0 },
};

export function ScrollReveal({
  children,
  delay = 0,
  direction = "up",
  className = "",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-80px" });
  const { x, y } = directionMap[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: 0.9,
        ease: EASE_CINEMATIC,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}
