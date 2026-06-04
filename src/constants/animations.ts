import type { Variants } from "framer-motion";

export const EASE_CINEMATIC = [0.16, 1, 0.3, 1] as const;

export const DURATION = {
  fast: 0.3,
  normal: 0.6,
  slow: 0.9,
  cinematic: 1.2,
  epic: 1.8,
} as const;

export const heroText: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION.epic,
      ease: EASE_CINEMATIC,
      delay: custom * 0.15,
    },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const lineExpand: Variants = {
  hidden: { scaleX: 0, opacity: 0, transformOrigin: "left" },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 1.0, ease: EASE_CINEMATIC },
  },
};

export const cardReveal: Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_CINEMATIC },
  },
};
