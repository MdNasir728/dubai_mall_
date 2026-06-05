// ====================================================
// LEASING ENQUIRY — Step 3: Contact Information
// ====================================================

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { staggerContainer, cardReveal } from "@/constants/animations";
import type { LeasingFormData } from "@/types/LeasingEnquiryModal.types";

interface ContactStepProps {
  formData: LeasingFormData;
  errors: Record<string, string>;
  onChange: (updated: Partial<LeasingFormData>) => void;
}

export function ContactStep({ formData, errors, onChange }: ContactStepProps) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Company name */}
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">COMPANY NAME</label>
        <Input
          placeholder="Your company name"
          value={formData.companyName}
          onChange={(e) => onChange({ companyName: e.target.value })}
          className="border-foreground/20 bg-foreground/5"
        />
        {errors.companyName && (
          <p className="mt-2 text-sm text-destructive">{errors.companyName}</p>
        )}
      </motion.div>

      {/* Contact name */}
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">YOUR NAME</label>
        <Input
          placeholder="Full name"
          value={formData.contactName}
          onChange={(e) => onChange({ contactName: e.target.value })}
          className="border-foreground/20 bg-foreground/5"
        />
        {errors.contactName && (
          <p className="mt-2 text-sm text-destructive">{errors.contactName}</p>
        )}
      </motion.div>

      {/* Email & Phone */}
      <motion.div className="grid gap-4 md:grid-cols-2" variants={cardReveal}>
        <div>
          <label className="text-label mb-3 block text-gold">EMAIL</label>
          <Input
            type="email"
            placeholder="your.email@company.com"
            value={formData.email}
            onChange={(e) => onChange({ email: e.target.value })}
            className="border-foreground/20 bg-foreground/5"
          />
          {errors.email && (
            <p className="mt-2 text-sm text-destructive">{errors.email}</p>
          )}
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
          {errors.phone && (
            <p className="mt-2 text-sm text-destructive">{errors.phone}</p>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
