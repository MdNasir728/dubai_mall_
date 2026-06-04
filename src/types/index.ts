export interface NavSection {
  id: string;
  label: string;
  index: number;
}

export type SectionId =
  | "hero"
  | "why-dubai-mall"
  | "retail"
  | "luxury-district"
  | "dining"
  | "entertainment"
  | "events";

export interface NavigationState {
  activeSection: SectionId;
  setActiveSection: (section: SectionId) => void;
  isNavVisible: boolean;
  setNavVisible: (visible: boolean) => void;
}

export interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
  decimals?: number;
}

export interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
  once?: boolean;
}

export interface BrandItem {
  name: string;
  tier: "ultra-luxury" | "luxury" | "premium" | "lifestyle";
  category: string;
}

export interface DiningVenue {
  name: string;
  cuisine: string;
  description: string;
  highlight: string;
}

export interface EntertainmentAttraction {
  name: string;
  description: string;
  highlight: string;
  icon: string;
}


export interface EventCapability {
  name: string;
  capacity: string;
  description: string;
}
