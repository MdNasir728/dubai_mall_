// ====================================================
// EVENT BOOKING MODAL — Types & Step Constants
// ====================================================

// Re-export shared form data type for convenience
export type { EventFormData } from "@/types/modules.type";

// Union type for all possible wizard steps
export type EventBookingStep = "venue" | "type" | "details" | "contact" | "success";

// Ordered list of the active (non-success) steps — used for progress bar
export const STEP_ORDER: EventBookingStep[] = ["venue", "type", "details", "contact"];
