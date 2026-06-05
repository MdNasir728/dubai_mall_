// ====================================================
// EVENT BOOKING — Step 3: Event Details
// ====================================================

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { staggerContainer, cardReveal } from "@/constants/animations";
import type { EventFormData } from "@/types/modules.type";

interface EventDetailsStepProps {
  formData: EventFormData;
  onChange: (updated: Partial<EventFormData>) => void;
}

export function EventDetailsStep({ formData, onChange }: EventDetailsStepProps) {
  return (
    <motion.div
      className="space-y-4"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">EVENT NAME</label>
        <Input
          placeholder="e.g., Product Launch 2025"
          value={formData.eventName}
          onChange={(e) => onChange({ eventName: e.target.value })}
          className="border-foreground/20 bg-foreground/5"
        />
      </motion.div>

      <motion.div className="grid gap-4 md:grid-cols-2" variants={cardReveal}>
        <div>
          <label className="text-label mb-3 block text-gold">EXPECTED AUDIENCE</label>
          <Input
            type="number"
            placeholder="Number of guests"
            value={formData.audience}
            onChange={(e) => onChange({ audience: e.target.value })}
            className="border-foreground/20 bg-foreground/5"
          />
        </div>
        <div>
          <label className="text-label mb-3 block text-gold">PREFERRED DATE</label>
          <Input
            type="date"
            value={formData.preferredDate}
            onChange={(e) => onChange({ preferredDate: e.target.value })}
            className="border-foreground/20 bg-foreground/5"
          />
        </div>
      </motion.div>

      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">TECHNICAL REQUIREMENTS</label>
        <Textarea
          placeholder="Audio, lighting, staging, other technical needs..."
          value={formData.technicalNeeds}
          onChange={(e) => onChange({ technicalNeeds: e.target.value })}
          className="border-foreground/20 bg-foreground/5 min-h-20"
        />
      </motion.div>
    </motion.div>
  );
}
