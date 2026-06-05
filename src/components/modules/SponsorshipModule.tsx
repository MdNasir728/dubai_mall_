// SPONSORSHIP MODULE

import { motion } from "framer-motion";
import { staggerContainer, cardReveal } from "../../constants/animations";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";
import { ScrollReveal } from "../animation/ScrollReveal";
import { AUDIENCE_SEGMENTS, SPONSORSHIP_TIERS } from "@/data/mallData";
import { DownloadButton } from "../DownLoadButton";

export default function SponsorshipModule() {
  const { openModal } = useDubaiMallStore();
  return (
    <div className="relative min-h-screen py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 60% at 50% 0%, oklch(0.2 0.04 85 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">PARTNERSHIP OPPORTUNITIES</p>
          <h2 className="section-headline text-foreground max-w-5xl">
            Reach the World's Most
            <br />
            <span className="text-gold-gradient">Valuable Audience.</span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            Partner with the globe's most visited destination. Access 105M+
            annual visitors, premium positioning, and unmatched brand
            amplification.
          </p>
        </ScrollReveal>

        {/* Audience Insights */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Our Audience
            </h3>
            <p className="text-muted-foreground mt-2">
              Segmented by profile and spending power
            </p>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {AUDIENCE_SEGMENTS.map((segment) => (
              <motion.div
                key={segment.segment}
                variants={cardReveal}
                className="glass-panel p-6 rounded-sm"
              >
                <p className="text-4xl font-light text-gold-gradient mb-2">
                  {segment.percentage}
                </p>
                <h4 className="text-lg font-medium text-foreground mb-2">
                  {segment.segment}
                </h4>
                <p className="text-xs text-muted-foreground mb-4">
                  {segment.description}
                </p>
                <p className="text-label text-gold/70">{segment.spending}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Sponsorship Tiers */}
        <div className="mb-32">
          <ScrollReveal className="mb-16">
            <h3 className="text-2xl font-light text-foreground">
              Partnership Tiers
            </h3>
            <p className="text-muted-foreground mt-2">
              Customizable packages for every ambition
            </p>
          </ScrollReveal>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
          >
            {SPONSORSHIP_TIERS.map((tier) => (
              <motion.div
                key={tier.name}
                variants={cardReveal}
                className={`luxury-card rounded-sm p-8 transition-all duration-300 ${
                  tier.featured
                    ? "lg:col-span-1 lg:row-span-1 relative ring-2 ring-gold/50 scale-105"
                    : "glass-panel"
                }`}
                style={{
                  background: tier.featured
                    ? "linear-gradient(135deg, oklch(0.12 0.02 85 / 0.6), oklch(0.08 0.01 85 / 0.4))"
                    : undefined,
                  border: tier.featured
                    ? "2px solid var(--gold)"
                    : "1px solid oklch(0.28 0.005 85 / 0.3)",
                }}
              >
                <div className="text-4xl mb-4">{tier.icon}</div>
                <h4 className="text-2xl font-light text-foreground mb-2">
                  {tier.name}
                </h4>
                <p className="text-2xl font-light text-gold-gradient mb-6">
                  {tier.investment}
                </p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="text-gold mt-0.5">✓</span>
                      <span className="text-sm text-muted-foreground leading-relaxed">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
                {tier.featured && (
                  <button
                    onClick={() => openModal("leasing-inquiry")}
                    className="bg-gold text-black mt-8 w-full py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
                  >
                    Get Started
                  </button>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Activation Examples */}
        <ScrollReveal>
          <div
            className="p-12 md:p-16 rounded-sm"
            style={{
              background:
                "linear-gradient(135deg, oklch(0.08 0.02 85 / 0.5) 0%, oklch(0.05 0.01 85 / 0.3) 100%)",
              border: "1px solid oklch(0.75 0.12 85 / 0.12)",
            }}
          >
            <h3 className="text-2xl font-light text-foreground mb-4">
              Recent Activations
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  brand: "Global Tech Leader",
                  activation: "Product launch with 50K+ visitors",
                  roi: "+450% brand awareness lift",
                },
                {
                  brand: "Luxury Fashion House",
                  activation: "Seasonal pop-up with exclusive events",
                  roi: "+320% foot traffic to boutique",
                },
                {
                  brand: "Travel & Hospitality",
                  activation: "Destination showcase with experiential lounge",
                  roi: "+280% booking inquiries",
                },
              ].map((example) => (
                <div
                  key={example.brand}
                  className="border-l-2 border-gold/30 pl-4"
                >
                  <p className="text-label text-gold/70 mb-2">
                    {example.brand}
                  </p>
                  <p className="text-sm text-muted-foreground mb-3">
                    {example.activation}
                  </p>
                  <p className="text-sm font-medium text-gold">{example.roi}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => openModal("leasing-inquiry")}
                className="bg-gold text-black px-8 py-3 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
              >
                Discuss Partnership
              </button>
              <DownloadButton
                assetId="media-kit"
                fileName="Dubai-Mall-Media-Kit.txt"
                fileUrl="/downloads/Dubai-Mall-Media-Kit.txt"
                variant="ghost"
                size="md"
              >
                Download Media Kit
              </DownloadButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
