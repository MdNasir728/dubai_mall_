// ====================================================
// LEASING INQUIRY MODAL — Fully Interactive Form
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
import { X, CheckCircle2, Loader2 } from "lucide-react";

interface LeasingFormData {
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

const CATEGORIES = [
  {
    id: "luxury",
    label: "Luxury & Flagship",
    description: "Ultra-premium brand positioning",
  },
  {
    id: "retail",
    label: "Contemporary Retail",
    description: "Mid-tier established brands",
  },
  { id: "fnb", label: "Food & Beverage", description: "Dining destinations" },
  {
    id: "popup",
    label: "Pop-Up & Seasonal",
    description: "Short-term activations",
  },
];

const TIMELINES = [
  "Immediate (0-3 months)",
  "Short-term (3-6 months)",
  "Medium-term (6-12 months)",
  "Long-term (12+ months)",
  "Not decided yet",
];

const BUDGETS = [
  "$100K - $500K",
  "$500K - $1M",
  "$1M - $5M",
  "$5M+",
  "To be discussed",
];

export function LeasingInquiryModal() {
  const {
    currentModal,
    closeModal,
    isLoading,
    setLoading,
    submitLeasingInquiry,
  } = useDubaiMallStore();
  const [step, setStep] = useState<
    "category" | "details" | "contact" | "success"
  >("category");
  const [formData, setFormData] = useState<LeasingFormData>({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    category: "luxury",
    squareFeetage: "",
    timeline: "",
    budget: "",
    businessDescription: "",
  });
  const [referenceNumber, setReferenceNumber] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const isOpen = currentModal === "leasing-inquiry";

  const validateEmail = (email: string) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateStep = (currentStep: string): boolean => {
    const newErrors: Record<string, string> = {};

    if (currentStep === "category") {
      if (!formData.category) newErrors.category = "Please select a category";
      if (!formData.squareFeetage)
        newErrors.squareFeetage = "Please specify square footage";
    } else if (currentStep === "details") {
      if (!formData.timeline) newErrors.timeline = "Please select timeline";
      if (!formData.budget) newErrors.budget = "Please select budget";
      if (!formData.businessDescription.trim())
        newErrors.businessDescription = "Please describe your business";
    } else if (currentStep === "contact") {
      if (!formData.companyName.trim())
        newErrors.companyName = "Company name is required";
      if (!formData.contactName.trim())
        newErrors.contactName = "Contact name is required";
      if (!formData.email.trim()) newErrors.email = "Email is required";
      if (!validateEmail(formData.email))
        newErrors.email = "Please enter a valid email";
      if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (!validateStep(step)) return;

    if (step === "category") {
      setStep("details");
    } else if (step === "details") {
      setStep("contact");
    } else if (step === "contact") {
      handleSubmit();
    }
  };

  const handlePreviousStep = () => {
    if (step === "details") setStep("category");
    else if (step === "contact") setStep("details");
  };

  const handleSubmit = async () => {
    if (!validateStep("contact")) return;

    setLoading(true);

    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1500));

    const inquiry = submitLeasingInquiry(formData);
    setReferenceNumber(inquiry.referenceNumber);
    setStep("success");
    setLoading(false);
  };

  const handleClose = () => {
    if (step === "success") {
      closeModal();
      setStep("category");
      setFormData({
        companyName: "",
        contactName: "",
        email: "",
        phone: "",
        category: "luxury",
        squareFeetage: "",
        timeline: "",
        budget: "",
        businessDescription: "",
      });
      setErrors({});
    } else {
      closeModal();
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="max-w-2xl bg-black/90 backdrop-blur-xl border border-gold overflow-y-auto h-[80vh]" data-lenis-prevent>
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {step === "success" ? (
            // ====================================================
            // SUCCESS STATE
            // ====================================================
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
                  Inquiry Received
                </h2>
                <p className="text-lg text-muted-foreground">
                  Thank you for your interest in leasing space at Dubai Mall.
                </p>
              </div>

              <motion.div
                className="rounded-lg p-6 border border-gold"
                style={{
                  background:
                    "linear-gradient(135deg, oklch(0.12 0.02 85 / 0.6), oklch(0.08 0.01 85 / 0.4))",
                }}
                variants={cardReveal}
                initial="hidden"
                animate="visible"
              >
                <p className="mb-2 text-label text-gold">REFERENCE NUMBER</p>
                <p className="text-2xl font-light text-foreground font-mono">
                  {referenceNumber}
                </p>
              </motion.div>

              <motion.div
                className="space-y-3 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <p>
                  Our leasing team will review your inquiry and contact you
                  within 24-48 hours.
                </p>
                <p>
                  Please keep your reference number for future correspondence.
                </p>
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
                    Leasing Inquiry
                  </DialogTitle>
                  {/* <button
                    onClick={handleClose}
                    className="rounded-full p-2 hover:bg-foreground/10 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button> */}
                </div>

                {/* Progress indicator */}
                <div className="mt-4 flex gap-2">
                  {["category", "details", "contact"].map((s) => (
                    <div
                      key={s}
                      className="h-1 flex-1 rounded-full bg-foreground/10"
                      style={{
                        background:
                          ["category", "details", "contact"].indexOf(step) >=
                          ["category", "details", "contact"].indexOf(s)
                            ? "var(--gold)"
                            : "var(--border)",
                      }}
                    />
                  ))}
                </div>
              </DialogHeader>

              <div className="space-y-6 py-6">
                {step === "category" && (
                  <motion.div
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <div>
                      <label className="text-label mb-4 block text-gold">
                        LEASING CATEGORY
                      </label>
                      <div className="grid gap-3">
                        {CATEGORIES.map((cat) => (
                          <motion.button
                            key={cat.id}
                            variants={cardReveal}
                            onClick={() =>
                              setFormData({
                                ...formData,
                                category: cat.id as any,
                              })
                            }
                            className="rounded-sm border-2 p-4 text-left transition-all"
                            style={{
                              borderColor:
                                formData.category === cat.id
                                  ? "var(--gold)"
                                  : "var(--border)",
                              background:
                                formData.category === cat.id
                                  ? "oklch(0.12 0.02 85 / 0.3)"
                                  : "transparent",
                            }}
                          >
                            <p className="font-medium text-foreground">
                              {cat.label}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {cat.description}
                            </p>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        ESTIMATED SPACE NEEDED
                      </label>
                      <Input
                        placeholder="e.g., 2,500 - 5,000 sqm"
                        value={formData.squareFeetage}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            squareFeetage: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5"
                      />
                      {errors.squareFeetage && (
                        <p className="mt-2 text-sm text-destructive">
                          {errors.squareFeetage}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                )}

                {step === "details" && (
                  <motion.div
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        PROJECTED TIMELINE
                      </label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) =>
                          setFormData({ ...formData, timeline: value })
                        }
                      >
                        <SelectTrigger className="border-foreground/20 bg-foreground/5">
                          <SelectValue placeholder="Select timeline" />
                        </SelectTrigger>
                        <SelectContent>
                          {TIMELINES.map((timeline) => (
                            <SelectItem key={timeline} value={timeline}>
                              {timeline}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.timeline && (
                        <p className="mt-2 text-sm text-destructive">
                          {errors.timeline}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        BUDGET RANGE
                      </label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) =>
                          setFormData({ ...formData, budget: value })
                        }
                      >
                        <SelectTrigger className="border-foreground/20 bg-foreground/5">
                          <SelectValue placeholder="Select budget" />
                        </SelectTrigger>
                        <SelectContent>
                          {BUDGETS.map((budget) => (
                            <SelectItem key={budget} value={budget}>
                              {budget}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      {errors.budget && (
                        <p className="mt-2 text-sm text-destructive">
                          {errors.budget}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        DESCRIBE YOUR BUSINESS
                      </label>
                      <Textarea
                        placeholder="Tell us about your brand and leasing interests..."
                        value={formData.businessDescription}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            businessDescription: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5 min-h-24"
                      />
                      {errors.businessDescription && (
                        <p className="mt-2 text-sm text-destructive">
                          {errors.businessDescription}
                        </p>
                      )}
                    </motion.div>
                  </motion.div>
                )}

                {step === "contact" && (
                  <motion.div
                    className="space-y-6"
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                  >
                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        COMPANY NAME
                      </label>
                      <Input
                        placeholder="Your company name"
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            companyName: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5"
                      />
                      {errors.companyName && (
                        <p className="mt-2 text-sm text-destructive">
                          {errors.companyName}
                        </p>
                      )}
                    </motion.div>

                    <motion.div variants={cardReveal}>
                      <label className="text-label mb-3 block text-gold">
                        YOUR NAME
                      </label>
                      <Input
                        placeholder="Full name"
                        value={formData.contactName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            contactName: e.target.value,
                          })
                        }
                        className="border-foreground/20 bg-foreground/5"
                      />
                      {errors.contactName && (
                        <p className="mt-2 text-sm text-destructive">
                          {errors.contactName}
                        </p>
                      )}
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
                          placeholder="your.email@company.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          className="border-foreground/20 bg-foreground/5"
                        />
                        {errors.email && (
                          <p className="mt-2 text-sm text-destructive">
                            {errors.email}
                          </p>
                        )}
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
                        {errors.phone && (
                          <p className="mt-2 text-sm text-destructive">
                            {errors.phone}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </div>

              {/* Action buttons */}
              <div className="flex gap-4 border-t border-foreground/10 pt-6">
                <Button
                  variant="outline"
                  onClick={handlePreviousStep}
                  disabled={step === "category" || isLoading}
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
