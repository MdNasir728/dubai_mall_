// ====================================================
// SCROLL PROGRESS HOOK
// ====================================================

import { useState, useEffect, useCallback } from "react";

interface ScrollProgress {
  scrollY: number;
  scrollYProgress: number;
  direction: "up" | "down";
}

export function useScrollProgress(): ScrollProgress {
  const [state, setState] = useState<ScrollProgress>({
    scrollY: 0,
    scrollYProgress: 0,
    direction: "down",
  });

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const scrollYProgress = maxScroll > 0 ? scrollY / maxScroll : 0;

    setState((prev) => ({
      scrollY,
      scrollYProgress: Math.min(1, Math.max(0, scrollYProgress)),
      direction: scrollY > prev.scrollY ? "down" : "up",
    }));
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return state;
}
