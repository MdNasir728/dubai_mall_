// ====================================================
// EVENT BOOKING MODAL
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";
import {
  staggerContainer,
  cardReveal,
  EASE_CINEMATIC,
} from "@/constants/animations";
import { CheckCircle2, Loader2, Users } from "lucide-react";
import type { EventFormData } from "@/types/modules.type";
import { VENUES, EVENT_TYPES } from "@/data/events";

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
  const [step, setStep] = useState<
    "venue" | "type" | "details" | "contact" | "success"
  >("venue");
  const [formData, setFormData] = useState<EventFormData>({
    eventName: "",
    organizerName: "",
    email: "",
    phone: "",
    eventType: "",
    audience: "",
    preferredDate: "",
    venueId: "",
    technicalNeeds: "",
  });
  const [referenceNumber, setReferenceNumber] = useState("");
  const [_errors, setErrors] = useState<Record<string, string>>({});

  const isOpen = currentModal === "event-booking";

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = (currentStep: string): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === "venue") {
      if (!selectedVenue) newErrors.venue = "Please select a venue";
    } else if (currentStep === "type") {
      if (!formData.eventType) newErrors.eventType = "Please select event type";
    } else if (currentStep === "details") {
      if (!formData.eventName.trim())
        newErrors.eventName = "Event name is required";
      if (!formData.audience)
        newErrors.audience = "Please specify audience size";
      if (!formData.preferredDate)
        newErrors.preferredDate = "Please select a date";
    } else if (currentStep === "contact") {
      if (!formData.organizerName.trim())
        newErrors.organizerName = "Name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!validateEmail(formData.email))
        newErrors.email = "Please enter valid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (!validateStep(step)) return;

    if (formData.venueId !== selectedVenue?.id) {
      setFormData({ ...formData, venueId: selectedVenue?.id || "" });
    }

    if (step === "venue") setStep("type");
    else if (step === "type") setStep("details");
    else if (step === "details") setStep("contact");
    else if (step === "contact") handleSubmit();
  };

  const handlePreviousStep = () => {
    if (step === "type") setStep("venue");
    else if (step === "details") setStep("type");
    else if (step === "contact") setStep("details");
  };

  const handleSubmit = async () => {
    if (!validateStep("contact")) return;

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
      venueId: selectedVenue?.id || "",
      technicalNeeds: formData.technicalNeeds,
    });

    setReferenceNumber(booking.referenceNumber);
    setStep("success");
    setLoading(false);
  };

  const handleClose = () => {
    if (step === "success") {
      closeModal();
      setStep("venue");
      setSelectedVenue(null);
      setFormData({
        eventName: "",
        organizerName: "",
        email: "",
        phone: "",
        eventType: "",
        audience: "",
        preferredDate: "",
        venueId: "",
        technicalNeeds: "",
      });
      setErrors({});
    } else {
      closeModal();
    }
  };

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
            <div className="space-y-8 py-12 text-center">
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
              >
                <CheckCircle2 className="mx-auto h-20 w-20 text-gold" />
              </motion.div>

              <div className="space-y-4">
                <h2 className="text-3xl font-light text-foreground">
                  Booking Received
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thank you for your event booking inquiry.
                </p>
              </div>

              <motion.div
                className="rounded-lg p-6 space-y-4 border border-gold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.12 0.02 85 / 0.6), oklch(0.08 0.01 85 / 0.4))",
                }}
              >
                <div>
                  <p className="text-label mb-2 text-gold">BOOKING DETAILS</p>
                  <p className="text-foreground">{formData.eventName}</p>
                  <p className="text-sm text-muted-foreground">
                    at {selectedVenue?.name}
                  </p>
                </div>

                <div className="border-t border-foreground/20 pt-4">
                  <p className="text-label text-gold">REFERENCE NUMBER</p>
                  <p className="text-2xl font-light text-foreground font-mono">
                    {referenceNumber}
                  </p>
                </div>
              </motion.div>

              <Button
                onClick={handleClose}
                className="w-full bg-gold text-black"
              >
                Close
              </Button>
            </div>
          ) : (
            <>
              <DialogHeader className="border-b border-foreground/10">
                <div className="flex items-center justify-between">
                  <DialogTitle className="text-2xl font-light">
                    Event Booking
                  </DialogTitle>
                </div>

                <div className="mt-4 flex gap-2">
                  {["venue", "type", "details", "contact"].map((s) => (
                    <div
                      key={s}
                      className="h-1 flex-1 rounded-full"
                      style={{
                        background:
                          ["venue", "type", "details", "contact"].indexOf(
                            step,
                          ) >=
                          ["venue", "type", "details", "contact"].indexOf(s)
                            ? "var(--gold)"
                            : "var(--border)",
                      }}
                    />
                  ))}
                </div>
              </DialogHeader>

              <div className="space-y-6 py-6">
                {step === "venue" && (
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-label text-gold">SELECT VENUE</p>
                    <div className="grid gap-3">
                      {VENUES.map((venue) => (
                        <motion.button
                          key={venue.id}
                          variants={cardReveal}
                          onClick={() => setSelectedVenue(venue)}
                          className="rounded-sm border-2 p-4 text-left transition-all"
                          style={{
                            borderColor:
                              selectedVenue?.id === venue.id
                                ? "var(--gold)"
                                : "var(--border)",
                            background:
                              selectedVenue?.id === venue.id
                                ? "oklch(0.12 0.02 85 / 0.3)"
                                : "transparent",
                          }}
                        >
                          <div className="flex items-start justify-between">
                            <div>
                              <p className="font-medium text-foreground">
                                {venue.icon} {venue.name}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {venue.capacity} capacity
                              </p>
                            </div>
                            <Users className="h-4 w-4 text-muted-foreground" />
                          </div>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === "type" && selectedVenue && (
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <p className="text-label text-gold">EVENT TYPE</p>
                    <Select
                      value={formData.eventType}
                      onValueChange={(value) =>
                        setFormData({ ...formData, eventType: value })
                      }
                    >
                      <SelectTrigger className="border-foreground/20 bg-foreground/5">
                        <SelectValue placeholder="Select event type" />
                      </SelectTrigger>
                      <SelectContent>
                        {EVENT_TYPES.map((type) => (
                          <SelectItem key={type.id} value={type.id}>
                            {type.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </motion.div>
                )}

                {step === "details" && (
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        EVENT NAME
                      </label>
                      <Input
                        placeholder="e.g., Product Launch 2025"
                        value={formData.eventName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            eventName: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5"
                      />
                    </motion.div>

                    <motion.div
                      className="grid gap-4 md:grid-cols-2"
                      variants={cardReveal}
                    >
                      <div>
                        <label className="text-label mb-3 block text-gold">
                          EXPECTED AUDIENCE
                        </label>
                        <Input
                          type="number"
                          placeholder="Number of guests"
                          value={formData.audience}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              audience: e.target.value,
                            })
                          }
                          className="border-foreground/20 bg-foreground/5"
                        />
                      </div>
                      <div>
                        <label className="text-label mb-3 block text-gold">
                          PREFERRED DATE
                        </label>
                        <Input
                          type="date"
                          value={formData.preferredDate}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              preferredDate: e.target.value,
                            })
                          }
                          className="border-foreground/20 bg-foreground/5"
                        />
                      </div>
                    </motion.div>

                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        TECHNICAL REQUIREMENTS
                      </label>
                      <Textarea
                        placeholder="Audio, lighting, staging, other technical needs..."
                        value={formData.technicalNeeds}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            technicalNeeds: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5 min-h-20"
                      />
                    </motion.div>
                  </motion.div>
                )}

                {step === "contact" && (
                  <motion.div
                    className="space-y-4"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        YOUR NAME
                      </label>
                      <Input
                        placeholder="Full name"
                        value={formData.organizerName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organizerName: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5"
                      />
                    </motion.div>

                    <motion.div
                      className="grid gap-4 md:grid-cols-2"
                      variants={cardReveal}
                    >
                      <div>
                        <label className="text-label mb-3 block text-gold">
                          EMAIL
                        </label>
                        <Input
                          type="email"
                          placeholder="email@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border-foreground/20 bg-foreground/5"
                        />
                      </div>
                      <div>
                        <label className="text-label mb-3 block text-gold">
                          PHONE
                        </label>
                        <Input
                          type="tel"
                          placeholder="+971 50 XXX XXXX"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({ ...formData, phone: e.target.value })
                          }
                          className="border-foreground/20 bg-foreground/5"
                        />
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              <div className="flex gap-4 border-t border-foreground/10 pt-6">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={step === "venue" || isLoading}
                  className="flex-1 border-foreground/20"
                >
                  Previous
                </Button>
                <Button
                  onClick={handleNextStep}
                  disabled={isLoading}
                  className="flex-1 bg-gold text-black"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : step === "contact" ? (
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
