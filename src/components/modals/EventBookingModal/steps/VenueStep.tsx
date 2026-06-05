// ====================================================
// EVENT BOOKING — Step 1: Select Venue
// ====================================================

import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { staggerContainer, cardReveal } from "@/constants/animations";
import { VENUES } from "@/data/events";
import type { Venue } from "@/types/modules.type";

interface VenueStepProps {
  selectedVenue: Venue | null;
  onSelect: (venue: Venue) => void;
}

export function VenueStep({ selectedVenue, onSelect }: VenueStepProps) {
  return (
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
            onClick={() => onSelect(venue)}
            className="rounded-sm border-2 p-4 text-left transition-all"
            style={{
              borderColor:
                selectedVenue?.id === venue.id ? "var(--gold)" : "var(--border)",
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
  );
}
