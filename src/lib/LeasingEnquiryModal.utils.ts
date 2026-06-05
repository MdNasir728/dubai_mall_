// ====================================================
// LEASING ENQUIRY MODAL — Utils, Constants & Validation
// ====================================================

import type { LeasingFormData, LeasingStep } from "@/types/LeasingEnquiryModal.types";

// ── Static Data Constants ─────────────────────────────────────────────────────
// Moved from the old monolithic modal file

export const CATEGORIES = [
  {
    id: "luxury" as const,
    label: "Luxury & Flagship",
    description: "Ultra-premium brand positioning",
  },
  {
    id: "retail" as const,
    label: "Contemporary Retail",
    description: "Mid-tier established brands",
  },
  {
    id: "fnb" as const,
    label: "Food & Beverage",
    description: "Dining destinations",
  },
  {
    id: "popup" as const,
    label: "Pop-Up & Seasonal",
    description: "Short-term activations",
  },
];

export const TIMELINES = [
  "Immediate (0-3 months)",
  "Short-term (3-6 months)",
  "Medium-term (6-12 months)",
  "Long-term (12+ months)",
  "Not decided yet",
];

export const BUDGETS = [
  "$100K - $500K",
  "$500K - $1M",
  "$1M - $5M",
  "$5M+",
  "To be discussed",
];

// ── Initial State ─────────────────────────────────────────────────────────────

export const INITIAL_FORM_DATA: LeasingFormData = {
  companyName: "",
  contactName: "",
  email: "",
  phone: "",
  category: "luxury",
  squareFeetage: "",
  timeline: "",
  budget: "",
  businessDescription: "",
};

// ── Step Navigation ───────────────────────────────────────────────────────────

export function getNextStep(step: LeasingStep): LeasingStep {
  const map: Partial<Record<LeasingStep, LeasingStep>> = {
    category: "details",
    details: "contact",
  };
  return map[step] ?? step;
}

export function getPrevStep(step: LeasingStep): LeasingStep {
  const map: Partial<Record<LeasingStep, LeasingStep>> = {
    details: "category",
    contact: "details",
  };
  return map[step] ?? step;
}

export function isFirstStep(step: LeasingStep): boolean {
  return step === "category";
}

export function isLastFormStep(step: LeasingStep): boolean {
  return step === "contact";
}

// ── Validation ────────────────────────────────────────────────────────────────

export function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function validateStep(
  step: LeasingStep,
  formData: LeasingFormData,
): Record<string, string> {
  const errors: Record<string, string> = {};

  if (step === "category") {
    if (!formData.category) errors.category = "Please select a category";
    if (!formData.squareFeetage) errors.squareFeetage = "Please specify square footage";
  } else if (step === "details") {
    if (!formData.timeline) errors.timeline = "Please select timeline";
    if (!formData.budget) errors.budget = "Please select budget";
    if (!formData.businessDescription.trim())
      errors.businessDescription = "Please describe your business";
  } else if (step === "contact") {
    if (!formData.companyName.trim()) errors.companyName = "Company name is required";
    if (!formData.contactName.trim()) errors.contactName = "Contact name is required";
    if (!formData.email.trim()) errors.email = "Email is required";
    else if (!validateEmail(formData.email)) errors.email = "Please enter a valid email";
    if (!formData.phone.trim()) errors.phone = "Phone number is required";
  }

  return errors;
}
