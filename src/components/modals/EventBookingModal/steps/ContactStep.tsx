// ====================================================
// EVENT BOOKING — Step 4: Contact Information
// ====================================================

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { staggerContainer, cardReveal } from "@/constants/animations";
import type { EventFormData } from "@/types/modules.type";

interface ContactStepProps {
  formData: EventFormData;
  onChange: (updated: Partial<EventFormData>) => void;
}

export function ContactStep({ formData, onChange }: ContactStepProps) {
  return (
    <motion.div
      className="space-y-4"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">YOUR NAME</label>
        <Input
          placeholder="Full name"
          value={formData.organizerName}
          onChange={(e) => onChange({ organizerName: e.target.value })}
          className="border-foreground/20 bg-foreground/5"
        />
      </motion.div>

      <motion.div className="grid gap-4 md:grid-cols-2" variants={cardReveal}>
        <div>
          <label className="text-label mb-3 block text-gold">EMAIL</label>
          <Input
            type="email"
            placeholder="email@company.com"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="border-foreground/20 bg-foreground/5"
          />
        </div>
        <div>
          <label className="text-label mb-3 block text-gold">PHONE</label>
          <Input
            type="tel"
            placeholder="+971 50 XXX XXXX"
            value={formData.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            className="border-foreground/20 bg-foreground/5"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
