// ====================================================
// LEASING ENQUIRY MODAL — Types & Step Constants
// ====================================================

// Union type for all possible wizard steps
export type LeasingStep = "category" | "details" | "contact" | "success";

// Ordered list of the active (non-success) steps — used for progress bar
export const STEP_ORDER: LeasingStep[] = ["category", "details", "contact"];

// Leasing-specific form data (purely a UI/form concern, not stored in the store)
export interface LeasingFormData {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  category: "luxury" | "retail" | "fnb" | "popup";
  squareFeetage: string;
  timeline: string;
  budget: string;
  businessDescription: string;
}
