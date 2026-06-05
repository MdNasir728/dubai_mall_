// ====================================================
// LEASING ENQUIRY — Success State
// ====================================================

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cardReveal, EASE_CINEMATIC } from "@/constants/animations";

interface SuccessStepProps {
  referenceNumber: string;
  onClose: () => void;
}

export function SuccessStep({ referenceNumber, onClose }: SuccessStepProps) {
  return (
    <div className="space-y-8 py-12 text-center">
      {/* Animated check icon */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
      >
        <CheckCircle2 className="mx-auto h-20 w-20 text-gold" />
      </motion.div>

      {/* Heading */}
      <div className="space-y-4">
        <h2 className="text-3xl font-light text-foreground">Inquiry Received</h2>
        <p className="text-lg text-muted-foreground">
          Thank you for your interest in leasing space at Dubai Mall.
        </p>
      </div>

      {/* Reference number card */}
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

      {/* Follow-up info */}
      <motion.div
        className="space-y-3 text-sm text-muted-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <p>
          Our leasing team will review your inquiry and contact you within 24-48 hours.
        </p>
        <p>Please keep your reference number for future correspondence.</p>
      </motion.div>

      <Button onClick={onClose} className="w-full bg-gold text-black">
        Close
      </Button>
    </div>
  );
}
