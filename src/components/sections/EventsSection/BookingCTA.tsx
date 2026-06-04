import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { motion } from "framer-motion";

export function BookingCTA() {
  return (
    <ScrollReveal>
      <div
        className="relative overflow-hidden rounded-sm p-12 md:p-20 text-center"
        style={{
          background:
            "linear-gradient(135deg, oklch(0.1 0.02 85 / 0.5) 0%, oklch(0.06 0 0) 100%)",
          border: "1px solid oklch(0.75 0.12 85 / 0.15)",
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 50% 60% at 50% 50%, oklch(0.75 0.12 85 / 0.05) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <p className="text-label mb-6 text-gold">READY TO BE PART OF THIS?</p>
          <h2
            className="text-foreground mb-6"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 6rem)",
              fontWeight: 200,
              letterSpacing: "-0.03em",
              lineHeight: 1,
            }}
          >
            Let's Build Something
            <br />
            <span className="text-gold-gradient">Extraordinary Together.</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto leading-relaxed mb-12 text-base">
            From flagship retail leasing to sponsorship deals, event bookings,
            and venue partnerships — the world's most powerful retail platform
            awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              className="px-10 py-4 text-sm font-medium tracking-widest uppercase bg-gold text-black"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
            >
              Book a Partnership Meeting
            </motion.button>
            <motion.button
              className="px-10 py-4 text-sm font-medium tracking-widest uppercase border"
              style={{
                borderColor: "oklch(0.3 0 0)",
                color: "oklch(0.7 0 0)",
              }}
              whileHover={{
                borderColor: "oklch(0.75 0.12 85 / 0.5)",
                color: "var(--gold)",
              }}
            >
              Download Media Kit
            </motion.button>
          </div>

          {/* Contact info */}
          <div
            className="mt-12 pt-8 border-t flex flex-wrap justify-center gap-8"
            style={{ borderColor: "oklch(0.18 0 0)" }}
          >
            {[
              { label: "Commercial Leasing", val: "leasing@dubaimall.com" },
              { label: "Events & Sponsorship", val: "events@dubaimall.com" },
              { label: "Partnerships", val: "+971 4 362 7500" },
            ].map((c) => (
              <div key={c.label} className="text-center">
                <p className="text-label text-muted-foreground/40 mb-1">
                  {c.label}
                </p>
                <p className="text-sm text-foreground/60">{c.val}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
