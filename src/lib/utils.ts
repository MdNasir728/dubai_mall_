import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const TIER_COLORS: Record<string, string> = {
  "ultra-luxury": "oklch(0.75 0.12 85)",
  luxury: "oklch(0.75 0 0)",
  premium: "oklch(0.65 0 0)",
  lifestyle: "oklch(0.5 0 0)",
};

export const TIER_LABELS: Record<string, string> = {
  "ultra-luxury": "Ultra Luxury",
  luxury: "Luxury",
  premium: "Premium",
  lifestyle: "Lifestyle",
};
