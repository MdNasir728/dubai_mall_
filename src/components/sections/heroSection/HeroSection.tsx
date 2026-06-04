// HERO SECTION — Cinematic Opening

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { heroText, staggerContainer } from "@/constants/animations";
import { HeroMetrics } from "@/components/sections/heroSection/HeroMetrics";

gsap.registerPlugin(ScrollTrigger);

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);

  // GSAP: slow-zoom on the background image
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    gsap.to(el, {
      scale: 1.15,
      duration: 20,
      ease: "none",
      repeat: -1,
      yoyo: true,
    });
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.6; // slower
    }
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="section-full flex flex-col items-center justify-center relative"
      aria-label="Hero — Dubai Mall Overview"
    >
      {/* Cinematic Video Background */}
      <motion.div
        className="absolute inset-0 z-0 overflow-hidden"
        style={{ y, scale }}
      >
        <div ref={imgRef} className="relative w-full h-full">
          <video
            autoPlay
            ref={videoRef}
            muted
            loop
            playsInline
            preload="none"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Dubai Mall cinematic background video"
            poster="/hero-dubai-mall.avif"
          >
            <source src="/HERO.mp4" type="video/mp4" />
          </video>
        </div>
      </motion.div>

      {/* Cinematic overlays */}
      <div className="absolute inset-0 z-10 cinematic-overlay" />
      <div className="absolute inset-0 z-10 vignette" />
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            "linear-gradient(0deg, oklch(0.02 0 0 / 0.95) 0%, oklch(0.02 0 0 / 0.2) 40%, oklch(0.02 0 0 / 0.1) 100%)",
        }}
      />

      {/* Ambient gold glow */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 80%, oklch(0.75 0.12 85 / 0.06) 0%, transparent 70%)",
        }}
      />

      {/* Main content */}
      <motion.div
        className="relative z-20 flex flex-col items-center text-center px-6 max-w-[1280px] mx-auto w-full"
        style={{ opacity }}
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Overline */}
        <motion.p
          variants={heroText}
          custom={0}
          className="text-label mb-8"
          style={{ color: "var(--gold)", letterSpacing: "0.3em" }}
        >
          EMAAR PROPERTIES — DUBAI, UAE
        </motion.p>

        {/* Main headline */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            variants={heroText}
            custom={1}
            className="hero-headline text-foreground"
          >
            Not Just
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1 variants={heroText} custom={2} className="hero-headline">
            <span className="text-gold-gradient">A Mall.</span>
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-10">
          <motion.h1
            variants={heroText}
            custom={3}
            className="hero-headline text-foreground/80"
          >
            A World.
          </motion.h1>
        </div>

        {/* Gold divider line */}
        <motion.div
          variants={heroText}
          custom={4}
          className="w-16 h-px mb-2"
          style={{ background: "var(--gold)" }}
        />

        <motion.div
          variants={heroText}
          custom={5}
          className="relative mb-16 max-w-3xl"
        >
          {/* Glass background */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.1] backdrop-blur-2xl px-8 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.35)]">
            {/* Ambient gradient glow */}
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,215,120,0.10) 0%, rgba(255,255,255,0.02) 40%, rgba(255,215,120,0.08) 100%)",
              }}
            />

            {/* Inner shine */}
            <div className="absolute inset-[1px] rounded-3xl border border-white/5 pointer-events-none" />

            {/* Content */}
            <p className="relative z-10 text-lg md:text-xl font-normal leading-relaxed text-neutral-50 tracking-[0.01em]">
              The most visited destination on Earth — where{" "}
              <span className="text-white font-medium">105 million guests</span>{" "}
              converge every year. A platform for brands, events, and ambitions
              of global scale.
            </p>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={heroText}
          custom={6}
          className="flex flex-col sm:flex-row gap-4 mb-24"
        >
          <button
            onClick={() => scrollToSection("why-dubai-mall")}
            className="px-8 py-4 text-sm font-medium tracking-widest uppercase transition-all duration-300 hover:scale-[1.02]"
            style={{
              background: "var(--gold)",
              color: "#000",
              letterSpacing: "0.15em",
            }}
          >
            Explore the Platform
          </button>
          <button
            onClick={() => scrollToSection("events")}
            className="px-8 py-4 text-sm font-medium tracking-widest uppercase border border-foreground/20 text-foreground/60 hover:border-gold/50 hover:text-gold/80 transition-all duration-300"
            style={{ letterSpacing: "0.15em" }}
          >
            Partner With Us
          </button>
        </motion.div>

        {/* Animated Metrics Strip */}
        <HeroMetrics />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <p className="text-label text-muted-foreground/50">Scroll to Explore</p>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-transparent via-gold/60 to-transparent"
          animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />
      </motion.div>
    </section>
  );
}
