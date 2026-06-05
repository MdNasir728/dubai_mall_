// ====================================================
// EVENT BOOKING — Success State
// ====================================================

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cardReveal, EASE_CINEMATIC } from "@/constants/animations";
import type { EventFormData } from "@/types/modules.type";
import type { Venue } from "@/types/modules.type";

interface SuccessStepProps {
  formData: EventFormData;
  selectedVenue: Venue | null;
  referenceNumber: string;
  onClose: () => void;
}

export function SuccessStep({
  formData,
  selectedVenue,
  referenceNumber,
  onClose,
}: SuccessStepProps) {
  return (
    <div className="space-y-8 py-12 text-center">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.6, ease: EASE_CINEMATIC }}
      >
        <CheckCircle2 className="mx-auto h-20 w-20 text-gold" />
      </motion.div>

      <div className="space-y-4">
        <h2 className="text-3xl font-light text-foreground">Booking Received</h2>
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
        variants={cardReveal}
        initial="hidden"
        animate="visible"
      >
        <div>
          <p className="text-label mb-2 text-gold">BOOKING DETAILS</p>
          <p className="text-foreground">{formData.eventName}</p>
          <p className="text-sm text-muted-foreground">at {selectedVenue?.name}</p>
        </div>

        <div className="border-t border-foreground/20 pt-4">
          <p className="text-label text-gold">REFERENCE NUMBER</p>
          <p className="text-2xl font-light text-foreground font-mono">
            {referenceNumber}
          </p>
        </div>
      </motion.div>

      <Button onClick={onClose} className="w-full bg-gold text-black">
        Close
      </Button>
    </div>
  );
}
