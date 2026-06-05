// ====================================================
// LEASING ENQUIRY — Step 1: Category & Space
// ====================================================

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { staggerContainer, cardReveal } from "@/constants/animations";
import { CATEGORIES } from "@/lib/LeasingEnquiryModal.utils";
import type { LeasingFormData } from "@/types/LeasingEnquiryModal.types";

interface CategoryStepProps {
  formData: LeasingFormData;
  errors: Record<string, string>;
  onChange: (updated: Partial<LeasingFormData>) => void;
}

export function CategoryStep({ formData, errors, onChange }: CategoryStepProps) {
  return (
    <motion.div
      className="space-y-6"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      {/* Category selection */}
      <div>
        <label className="text-label mb-4 block text-gold">LEASING CATEGORY</label>
        <div className="grid gap-3">
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat.id}
              variants={cardReveal}
              onClick={() => onChange({ category: cat.id })}
              className="rounded-sm border-2 p-4 text-left transition-all"
              style={{
                borderColor:
                  formData.category === cat.id ? "var(--gold)" : "var(--border)",
                background:
                  formData.category === cat.id
                    ? "oklch(0.12 0.02 85 / 0.3)"
                    : "transparent",
              }}
            >
              <p className="font-medium text-foreground">{cat.label}</p>
              <p className="text-sm text-muted-foreground">{cat.description}</p>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Square footage */}
      <motion.div variants={cardReveal}>
        <label className="text-label mb-3 block text-gold">ESTIMATED SPACE NEEDED</label>
        <Input
          placeholder="e.g., 2,500 - 5,000 sqm"
          value={formData.squareFeetage}
          onChange={(e) => onChange({ squareFeetage: e.target.value })}
          className="border-foreground/20 bg-foreground/5"
        />
        {errors.squareFeetage && (
          <p className="mt-2 text-sm text-destructive">{errors.squareFeetage}</p>
        )}
      </motion.div>
    </motion.div>
  );
}
