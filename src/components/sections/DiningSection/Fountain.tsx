import { ScrollReveal } from "@/components/animation/ScrollReveal";

export function FountainCallout() {
  return (
    <ScrollReveal>
      <div className="relative overflow-hidden rounded-sm">
        <div
          className="p-12 md:p-16 text-center"
          style={{
            background:
              "linear-gradient(135deg, oklch(0.08 0.02 85 / 0.5) 0%, oklch(0.05 0.01 85 / 0.3) 100%)",
            border: "1px solid oklch(0.75 0.12 85 / 0.12)",
          }}
        >
          {/* Ambient glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 100%, oklch(0.75 0.12 85 / 0.05) 0%, transparent 70%)",
            }}
          />

          <p className="text-label mb-6 text-gold">THE DUBAI FOUNTAIN</p>
          <h3 className="text-lg md:text-3xl lg:text-5xl text-foreground mb-6 tracking-tight leading-8 md:leading-10 lg:leading-20 font-extralight">
            The World's Largest
            <br />
            <span className="text-gold-gradient">Choreographed Fountain.</span>
          </h3>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed mb-8">
            6,600 lights, 25 colour projectors, and 22 shoots reaching 150
            metres into the sky. Every evening, 100,000+ visitors gather to
            witness the spectacle — creating an unmissable captive brand
            audience.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {[
              { v: "6,600", l: "Lights" },
              { v: "150m", l: "Jet Height" },
              { v: "2x", l: "Daily Shows" },
              { v: "100K+", l: "Nightly Audience" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-2xl font-light text-gold-gradient">{s.v}</p>
                <p className="text-label text-muted-foreground/50 mt-1">
                  {s.l}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
}
