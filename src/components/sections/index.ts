import { lazy } from "react";

export const HeroSection = lazy(
  () => import("@/components/sections/heroSection/HeroSection"),
);
export const DiningSection = lazy(
  () => import("@/components/sections/DiningSection/DiningSection"),
);
export const EntertainmentSection = lazy(
  () =>
    import("@/components/sections/EntertainmentSection/EntertainmentSection"),
);

export const LuxuryDistrictSection = lazy(
  () => import("@/components/sections/LuxuryDistrictSection/LuxuryDistrictSection"),
);
export const WhyDubaiMallSection = lazy(
  () => import("@/components/sections/whyDubaiMallSection/WhyDubaiMallSection"),
);
export const RetailSection = lazy(
  () => import("@/components/sections/RetailSection/RetailSection"),
);
export const EventsSection = lazy(
  () => import("@/components/sections/EventsSection/EventsSection"),
);
