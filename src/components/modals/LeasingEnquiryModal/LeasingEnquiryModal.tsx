// ====================================================
// LEASING ENQUIRY MODAL — Main Shell
// ====================================================

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";

import {
  STEP_ORDER,
  type LeasingStep,
  type LeasingFormData,
} from "@/types/LeasingEnquiryModal.types";
import {
  INITIAL_FORM_DATA,
  getNextStep,
  getPrevStep,
  isFirstStep,
  isLastFormStep,
  validateStep,
} from "@/lib/LeasingEnquiryModal.utils";

import { CategoryStep } from "./steps/CategoryStep";
import { DetailsStep } from "./steps/DetailsStep";
import { ContactStep } from "./steps/ContactStep";
import { SuccessStep } from "./steps/SuccessStep";

export function LeasingInquiryModal() {
  const {
    currentModal,
    closeModal,
    isLoading,
    setLoading,
    submitLeasingInquiry,
  } = useDubaiMallStore();

  const [step, setStep] = useState<LeasingStep>("category");
  const [formData, setFormData] = useState<LeasingFormData>(INITIAL_FORM_DATA);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isOpen = currentModal === "leasing-inquiry";

  // ── Helpers ──────────────────────────────────────────────────────────────────

  const updateFormData = (updated: Partial<LeasingFormData>) => {
    setFormData((prev) => ({ ...prev, ...updated }));
  };

  const resetModal = () => {
    setStep("category");
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };

  // ── Handlers ─────────────────────────────────────────────────────────────────

  const handleNext = () => {
    const stepErrors = validateStep(step, formData);
    if (Object.keys(stepErrors).length > 0) {
      setErrors(stepErrors);
      return;
    }
    setErrors({});

    if (isLastFormStep(step)) {
      handleSubmit();
    } else {
      setStep(getNextStep(step));
    }
  };

  const handlePrev = () => {
    setErrors({});
    setStep(getPrevStep(step));
  };

  const handleSubmit = async () => {
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const inquiry = submitLeasingInquiry(formData);
    setReferenceNumber(inquiry.referenceNumber);
    setStep("success");
    setLoading(false);
  };

  const handleClose = () => {
    closeModal();
    if (step === "success") resetModal();
  };

  // ── Progress bar ─────────────────────────────────────────────────────────────

  const currentStepIndex = STEP_ORDER.indexOf(
    step as (typeof STEP_ORDER)[number],
  );

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl bg-black/90 backdrop-blur-xl border border-gold overflow-y-auto h-[90vh]"
        data-lenis-prevent
      >
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {step === "success" ? (
            <SuccessStep
              referenceNumber={referenceNumber}
              onClose={handleClose}
            />
          ) : (
            <>
              {/* ── Header & progress bar ─────────────────────────── */}
              <DialogHeader className="border-b border-foreground/10">
                <DialogTitle className="text-2xl font-light">
                  Leasing Inquiry
                </DialogTitle>

                <div className="mt-4 flex gap-2">
                  {STEP_ORDER.map((s, index) => (
                    <div
                      key={s}
                      className="h-1 flex-1 rounded-full transition-all duration-300"
                      style={{
                        background:
                          currentStepIndex >= index
                            ? "var(--gold)"
                            : "var(--border)",
                      }}
                    />
                  ))}
                </div>
              </DialogHeader>

              {/* ── Step content ──────────────────────────────────── */}
              <div className="space-y-6 py-6">
                {step === "category" && (
                  <CategoryStep
                    formData={formData}
                    errors={errors}
                    onChange={updateFormData}
                  />
                )}
                {step === "details" && (
                  <DetailsStep
                    formData={formData}
                    errors={errors}
                    onChange={updateFormData}
                  />
                )}
                {step === "contact" && (
                  <ContactStep
                    formData={formData}
                    errors={errors}
                    onChange={updateFormData}
                  />
                )}
              </div>

              {/* ── Navigation buttons ────────────────────────────── */}
              <div className="flex gap-4 border-t border-foreground/10 pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrev}
                  disabled={isFirstStep(step) || isLoading}
                  className="flex-1 border-foreground/20"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={isLoading}
                  className="flex-1 bg-gold text-black"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : isLastFormStep(step) ? (
                    "Submit Inquiry"
                  ) : (
                    "Continue"
                  )}
                </Button>
              </div>
            </>
          )}
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}
