// ====================================================
// ANIMATED COUNTER — cinematic number reveal
// ====================================================

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";
import type { AnimatedCounterProps } from "@/types";

function easeOutQuart(t: number): number {
  return 1 - Math.pow(1 - t, 4);
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2000,
  className = "",
  decimals = 0,
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const animatingRef = useRef(false);

  useEffect(() => {
    if (!isInView || animatingRef.current) return;
    animatingRef.current = true;

    const startTime = performance.now();
    const multiplier = Math.pow(10, decimals);

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeOutQuart(progress);
      const current = Math.round(eased * target * multiplier) / multiplier;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    }

    requestAnimationFrame(animate);
  }, [isInView, target, duration, decimals]);

  const formatted =
    decimals > 0 ? count.toFixed(decimals) : count.toLocaleString();

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
