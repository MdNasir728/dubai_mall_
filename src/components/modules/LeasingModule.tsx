// LEASING PATHS MODULE

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "@/components/animation/ScrollReveal";
import { staggerContainer, cardReveal } from "@/constants/animations";
import { useDubaiMallStore } from "@/stores/dubaiMallStore";
import { LEASING_CATEGORIES } from "@/data/mallData";
import { DownloadButton } from "../DownLoadButton";

export default function LeasingPathsModule() {
  const [activeCategory, setActiveCategory] = useState("luxury");
  const { openModal } = useDubaiMallStore();
  const activeLease = LEASING_CATEGORIES.find(
    (cat) => cat.id === activeCategory,
  );

  return (
    <div className="relative min-h-screen py-32 overflow-hidden">
      {/* Ambient background glow */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% 50%, oklch(0.18 0.03 85 / 0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        {/* Section Header */}
        <ScrollReveal className="mb-20">
          <p className="text-label mb-4 text-gold">
            RETAIL LEASING OPPORTUNITIES
          </p>
          <h2 className="section-headline text-foreground max-w-5xl">
            The Right Space
            <br />
            <span className="text-gold-gradient">For Your Brand.</span>
          </h2>
          <p className="mt-8 text-lg font-light text-muted-foreground max-w-2xl leading-relaxed">
            From ultra-luxury flagships to innovative pop-ups, we have tailored
            leasing solutions for brands at every scale and positioning.
          </p>
        </ScrollReveal>

        {/* Category Selector */}
        <div className="mb-20">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {LEASING_CATEGORIES.map((cat) => (
              <motion.button
                key={cat.id}
                variants={cardReveal}
                onClick={() => setActiveCategory(cat.id)}
                className="relative p-6 text-center rounded-sm transition-all duration-300 group"
                style={{
                  background:
                    activeCategory === cat.id
                      ? "linear-gradient(135deg, oklch(0.12 0.02 85 / 0.7), oklch(0.08 0.01 85 / 0.5))"
                      : "oklch(0.08 0 0 / 0.3)",
                  border:
                    activeCategory === cat.id
                      ? "2px solid var(--gold)"
                      : "1px solid oklch(0.25 0 0)",
                }}
              >
                <div className="text-3xl mb-2">{cat.icon}</div>
                <p className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                  {cat.name}
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Active Category Details */}
        <AnimatePresence mode="wait">
          {activeLease && (
            <motion.div
              key={activeLease.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-32"
            >
              {/* Left: Overview */}
              <div className="glass-panel p-8 rounded-sm">
                <p className="text-label mb-3 text-gold">CATEGORY OVERVIEW</p>
                <h3 className="text-2xl font-light text-foreground mb-4">
                  {activeLease.name}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  {activeLease.description}
                </p>

                <div className="space-y-6">
                  <div>
                    <p className="text-label text-gold/70 mb-2">
                      Average Space Size
                    </p>
                    <p className="text-lg font-light text-foreground">
                      {activeLease.details.avgSpaceSize}
                    </p>
                  </div>
                  <div>
                    <p className="text-label text-gold/70 mb-2">
                      Financial Terms
                    </p>
                    <p className="text-lg font-light text-foreground">
                      {activeLease.details.financialTerms}
                    </p>
                  </div>
                  <div>
                    <p className="text-label text-gold/70 mb-2">
                      Standard Lease Length
                    </p>
                    <p className="text-lg font-light text-foreground">
                      {activeLease.details.leaseLength}
                    </p>
                  </div>
                </div>
              </div>

              {/* Right: Benefits & Targets */}
              <div className="space-y-8">
                {/* Premium Benefits */}
                <div
                  className="p-8 rounded-sm"
                  style={{
                    background:
                      "linear-gradient(135deg, oklch(0.12 0.02 85 / 0.4), oklch(0.06 0 0 / 0.3))",
                    border: "1px solid oklch(0.75 0.12 85 / 0.15)",
                  }}
                >
                  <p className="text-label mb-4 text-gold">PREMIUM BENEFITS</p>
                  <ul className="space-y-3">
                    {activeLease.details.premiumBenefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3">
                        <span className="text-gold mt-1">✓</span>
                        <span className="text-sm text-muted-foreground leading-relaxed">
                          {benefit}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Target Tenants */}
                <div className="glass-panel p-8 rounded-sm">
                  <p className="text-label mb-4 text-gold">TARGET BRANDS</p>
                  <div className="flex flex-wrap gap-2">
                    {activeLease.details.targetTenants.map((tenant) => (
                      <span
                        key={tenant}
                        className="px-3 py-1 text-xs font-medium rounded-full text-gold"
                        style={{
                          background: "oklch(0.75 0.12 85 / 0.1)",
                          border: "1px solid oklch(0.75 0.12 85 / 0.3)",
                        }}
                      >
                        {tenant}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
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
              Let's Find Your Perfect Space
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Connect with our leasing team to explore opportunities tailored to
              your brand's vision and growth objectives.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal("leasing-inquiry")}
                className="text-black tracking-widest px-8 py-3 text-sm font-medium uppercase transition-all duration-300 hover:scale-[1.02] bg-gold"
              >
                Schedule a Meeting
              </button>
              <DownloadButton
                assetId="leasing-guide"
                fileName="Dubai-Mall-Leasing-Guide.pdf"
                fileUrl="/downloads/Dubai-Mall-Leasing-Guide.pdf"
                variant="ghost"
                size="md"
              >
                Get Leasing Brochure
              </DownloadButton>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
