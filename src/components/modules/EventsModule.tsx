// EVENTS MODULE

import { motion } from "framer-motion";
import { ScrollReveal } from "../animation/ScrollReveal";
import { staggerContainer, cardReveal } from "../../constants/animations";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";
import { PAST_EVENTS, VENUE_CAPABILITIES } from "@/data/mallData";
import { DownloadButton } from "../DownLoadButton";

export default function EventsModule() {
  const { openModal } = useDubaiMallStore();
  return (
    <div className="relative min-h-screen py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 50%, oklch(0.15 0.05 220 / 0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">EVENTS INFRASTRUCTURE</p>
          <h2 className="section-headline text-foreground max-w-5xl">
            Every Event Needs
            <br />
            <span className="text-gold-gradient">
              World-Class Infrastructure.
            </span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            From intimate product launches to world-scale concerts, our
            integrated venue network and operational excellence make impossible
            events possible.
          </p>
        </ScrollReveal>

        {/* Venue Capabilities Grid */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Venue Capabilities
            </h3>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {VENUE_CAPABILITIES.map((venue) => (
              <motion.div
                key={venue.name}
                variants={cardReveal}
                className="luxury-card glass-panel p-6 rounded-sm group"
              >
                <div className="text-4xl mb-4">{venue.icon}</div>
                <h4 className="text-lg font-medium text-foreground mb-2">
                  {venue.name}
                </h4>
                <p className="text-2xl font-light text-gold-gradient mb-4">
                  {venue.capacity}
                </p>
                <ul className="space-y-2">
                  {venue.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="text-gold mt-1">•</span>
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Past Highlights */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Past Highlights
            </h3>
            <p className="text-muted-foreground mt-2">
              Proven track record of world-class events
            </p>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {PAST_EVENTS.map((event) => (
              <motion.div
                key={event.event}
                variants={cardReveal}
                className="luxury-card glass-panel p-8 rounded-sm border-l-2 border-gold"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-label mb-2 text-gold">{event.year}</p>
                    <h4 className="text-xl font-medium text-foreground">
                      {event.event}
                    </h4>
                  </div>
                  <p className="text-2xl font-light text-gold-gradient text-right">
                    {event.attendance}
                  </p>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {event.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Booking CTA */}
        <ScrollReveal>
          <div
            className="p-12 md:p-16 text-center rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.08 0.02 85 / 0.5) 0%, oklch(0.05 0.01 85 / 0.3) 100%)",
              border: "1px solid oklch(0.75 0.12 85 / 0.12)",
            }}
          >
            <h3 className="text-3xl font-light text-foreground mb-4">
              Ready to Host?
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Let's discuss your event vision. Our team specializes in
              transforming ambitious concepts into unforgettable experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal("event-booking")}
                className="bg-gold text-black px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
              >
                Book Your Event
              </button>
              <DownloadButton
                assetId="event-guide"
                fileName="Dubai-Mall-Event-Guide.pdf"
                fileUrl="/downloads/Dubai-Mall-Event-Guide.pdf"
                variant="ghost"
                size="md"
              >
                Download Event Kit
              </DownloadButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
