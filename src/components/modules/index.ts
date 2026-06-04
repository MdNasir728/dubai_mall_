import { lazy } from "react";

export const LeasingModule = lazy(
  () => import("@/components/modules/LeasingModule"),
);
export const EventsModule = lazy(
  () => import("@/components/modules/EventsModule"),
);
export const PerformanceModule = lazy(
  () => import("@/components/modules/PerformanceModule"),
);
export const SponsorshipModule = lazy(
  () => import("@/components/modules/SponsorshipModule"),
);