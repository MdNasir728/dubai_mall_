// ====================================================
// EVENT BOOKING MODAL — Utils & Validation
// ====================================================

import type { EventFormData } from "@/types/modules.type";
import type { EventBookingStep } from "@/types/EventBookingModal.types";

// ── Initial State ─────────────────────────────────────────────────────────────

export const INITIAL_FORM_DATA: EventFormData = {
  eventName: "",
  organizerName: "",
  email: "",
  phone: "",
  eventType: "",
  audience: "",
  preferredDate: "",
  venueId: "",
  technicalNeeds: "",
};

// ── Step Navigation ───────────────────────────────────────────────────────────

export function getNextStep(step: EventBookingStep): EventBookingStep {
  const map: Partial<Record<EventBookingStep, EventBookingStep>> = {
    venue: "type",
    type: "details",
    details: "contact",
  };
  return map[step] ?? step;
}

export function getPrevStep(step: EventBookingStep): EventBookingStep {
  const map: Partial<Record<EventBookingStep, EventBookingStep>> = {
    type: "venue",
    details: "type",
    contact: "details",
  };
  return map[step] ?? step;
}

export function isFirstStep(step: EventBookingStep): boolean {
  return step === "venue";
}

export function isLastFormStep(step: EventBookingStep): boolean {
  return step === "contact";
}

// ── Validation ────────────────────────────────────────────────────────────────

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateStep(
  step: EventBookingStep,
  formData: EventFormData,
  selectedVenueId: string | undefined,
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === "venue") {
    if (!selectedVenueId) errors.venue = "Please select a venue";
  } else if (step === "type") {
    if (!formData.eventType) errors.eventType = "Please select event type";
  } else if (step === "details") {
    if (!formData.eventName.trim()) errors.eventName = "Event name is required";
    if (!formData.audience) errors.audience = "Please specify audience size";
    if (!formData.preferredDate) errors.preferredDate = "Please select a date";
  } else if (step === "contact") {
    if (!formData.organizerName.trim()) errors.organizerName = "Name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email)) errors.email = "Please enter valid email";
    if (!formData.phone.trim()) errors.phone = "Phone is required";
  }

  return errors;
}
