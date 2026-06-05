// ====================================================
// LEASING ENQUIRY — Step 2: Business Details
// ====================================================

import { motion } from "framer-motion";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { staggerContainer, cardReveal } from "@/constants/animations";
import { TIMELINES, BUDGETS } from "@/lib/LeasingEnquiryModal.utils";
import type { LeasingFormData } from "@/types/LeasingEnquiryModal.types";

interface DetailsStepProps {
  formData: LeasingFormData;
  errors: Record<string, string>;
  onChange: (updated: Partial<LeasingFormData>) => void;
}

export function DetailsStep({ formData, errors, onChange }: DetailsStepProps) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Timeline */}
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">PROJECTED TIMELINE</label>
        <Select
          value={formData.timeline}
          onValueChange={(value) => onChange({ timeline: value })}
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
          <p className="mt-2 text-sm text-destructive">{errors.timeline}</p>
        )}
      </motion.div>

      {/* Budget */}
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">BUDGET RANGE</label>
        <Select
          value={formData.budget}
          onValueChange={(value) => onChange({ budget: value })}
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
          <p className="mt-2 text-sm text-destructive">{errors.budget}</p>
        )}
      </motion.div>

      {/* Business description */}
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">DESCRIBE YOUR BUSINESS</label>
        <Textarea
          placeholder="Tell us about your brand and leasing interests..."
          value={formData.businessDescription}
          onChange={(e) => onChange({ businessDescription: e.target.value })}
          className="border-foreground/20 bg-foreground/5 min-h-24"
        />
        {errors.businessDescription && (
          <p className="mt-2 text-sm text-destructive">{errors.businessDescription}</p>
        )}
      </motion.div>
    </motion.div>
  );
}
