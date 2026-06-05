// ====================================================
// EVENT BOOKING MODAL — Main Shell
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
import type { EventFormData } from "@/types/modules.type";

import { STEP_ORDER, type EventBookingStep } from "@/types/EventBookingModal.types";
import {
  INITIAL_FORM_DATA,
  getNextStep,
  getPrevStep,
  isFirstStep,
  isLastFormStep,
  validateStep,
} from "@/lib/EventBookingModal.utils";

import { VenueStep } from "./steps/VenueStep";
import { EventTypeStep } from "./steps/EventTypeStep";
import { EventDetailsStep } from "./steps/EventDetailsStep";
import { ContactStep } from "./steps/ContactStep";
import { SuccessStep } from "./steps/SuccessStep";

export function EventBookingModal() {
  const {
    currentModal,
    closeModal,
    isLoading,
    setLoading,
    submitEventBooking,
    selectedVenue,
    setSelectedVenue,
  } = useDubaiMallStore();

  const [step, setStep] = useState<EventBookingStep>("venue");
  const [formData, setFormData] = useState<EventFormData>(INITIAL_FORM_DATA);
  const [referenceNumber, setReferenceNumber] = useState("");
  const [_errors, setErrors] = useState<Record<string, string>>({});

  const isOpen = currentModal === "event-booking";

  // ── Helpers ──────────────────────────────────────────────────────────────────

  const updateFormData = (updated: Partial<EventFormData>) => {
    setFormData((prev) => ({ ...prev, ...updated }));
  };

  const resetModal = () => {
    setStep("venue");
    setSelectedVenue(null);
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
  };

  // ── Handlers ─────────────────────────────────────────────────────────────────

  const handleNext = () => {
    const errors = validateStep(step, formData, selectedVenue?.id);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }
    setErrors({});

    // Sync selected venue into formData when leaving the venue step
    if (step === "venue" && formData.venueId !== selectedVenue?.id) {
      updateFormData({ venueId: selectedVenue?.id ?? "" });
    }

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

    const booking = submitEventBooking({
      eventName: formData.eventName,
      organizerName: formData.organizerName,
      email: formData.email,
      phone: formData.phone,
      eventType: formData.eventType,
      audience: parseInt(formData.audience),
      preferredDate: formData.preferredDate,
      venueId: selectedVenue?.id ?? "",
      technicalNeeds: formData.technicalNeeds,
    });

    setReferenceNumber(booking.referenceNumber);
    setStep("success");
    setLoading(false);
  };

  const handleClose = () => {
    closeModal();
    if (step === "success") resetModal();
  };

  // ── Progress bar ─────────────────────────────────────────────────────────────

  const currentStepIndex = STEP_ORDER.indexOf(step as (typeof STEP_ORDER)[number]);

  // ── Render ───────────────────────────────────────────────────────────────────

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-3xl border-0 bg-black/90 backdrop-blur-xl max-h-[90vh] overflow-y-auto border border-gold"
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
              formData={formData}
              selectedVenue={selectedVenue}
              referenceNumber={referenceNumber}
              onClose={handleClose}
            />
          ) : (
            <>
              {/* ── Header & progress bar ─────────────────────────── */}
              <DialogHeader className="border-b border-foreground/10">
                <DialogTitle className="text-2xl font-light">
                  Event Booking
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
                {step === "venue" && (
                  <VenueStep
                    selectedVenue={selectedVenue}
                    onSelect={setSelectedVenue}
                  />
                )}
                {step === "type" && (
                  <EventTypeStep
                    selectedVenue={selectedVenue}
                    formData={formData}
                    onChange={updateFormData}
                  />
                )}
                {step === "details" && (
                  <EventDetailsStep formData={formData} onChange={updateFormData} />
                )}
                {step === "contact" && (
                  <ContactStep formData={formData} onChange={updateFormData} />
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
                    "Submit Booking"
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
