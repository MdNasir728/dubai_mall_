// ====================================================
// EVENT BOOKING — Step 2: Select Event Type
// ====================================================

import { motion } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { staggerContainer } from "@/constants/animations";
import { EVENT_TYPES } from "@/data/events";
import type { EventFormData } from "@/types/modules.type";
import type { Venue } from "@/types/modules.type";

interface EventTypeStepProps {
  selectedVenue: Venue | null;
  formData: EventFormData;
  onChange: (updated: Partial<EventFormData>) => void;
}

export function EventTypeStep({ selectedVenue, formData, onChange }: EventTypeStepProps) {
  if (!selectedVenue) return null;

  return (
    <motion.div
      className="space-y-4"
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
    >
      <p className="text-label text-gold">EVENT TYPE</p>
      <Select
        value={formData.eventType}
        onValueChange={(value) => onChange({ eventType: value })}
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
  );
}
