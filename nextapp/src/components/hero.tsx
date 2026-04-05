"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[100dvh] flex items-center overflow-hidden"
    >
      {/* Deep ambient gradients */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(232,67,10,0.07),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_80%_at_80%_50%,rgba(232,67,10,0.03),transparent_50%)]" />

      {/* Grid pattern — very subtle */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10 w-full pt-[120px] pb-20 md:pt-[140px] md:pb-28 lg:pt-[160px] lg:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left: Content */}
          <div className="order-2 lg:order-1 relative z-10">
            <Reveal delay={0}>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-10">
                <span className="w-10 h-px bg-accent/40" />
                AI Automation for Marketing Agencies
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-[2.75rem] md:text-[3.75rem] lg:text-[5rem] xl:text-[5.5rem] font-extrabold tracking-[-0.035em] leading-[0.95] text-white mb-10">
                Marketing Agencies
                <br />
                Scale on Systems.
                <br />
                <span className="gradient-text">Build Yours.</span>
              </h1>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-[46ch] mb-12">
                We help marketing agencies generate leads, produce content, and
                run operations without adding headcount.
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="flex flex-wrap items-center gap-5">
                <MagneticButton
                  href="https://cal.com/christopher-downer-6pkxir/strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-9 py-[18px] bg-accent hover:bg-accent-light text-white text-sm font-bold tracking-[0.06em] uppercase rounded-xl glow-pulse transition-all duration-300"
                  strength={0.12}
                >
                  Book a Free Strategy Session
                </MagneticButton>
                <a
                  href="#two-path"
                  className="inline-flex items-center gap-2 px-6 py-4 text-sm font-medium text-zinc-500 hover:text-zinc-200 transition-colors duration-300"
                >
                  Learn more
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
              </div>
            </Reveal>
          </div>

          {/* Right: Video */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <Reveal delay={0.15} direction="right">
              <div className="relative w-full max-w-[520px]">
                {/* Glow ring behind video */}
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-br from-accent/12 via-transparent to-accent/4 blur-2xl opacity-50" />
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent/15 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />

                <motion.div
                  className="relative overflow-hidden rounded-2xl border border-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.6)]"
                  whileHover={{ scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 200, damping: 25 }}
                >
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto aspect-square object-cover"
                    poster="/christopher_downer.png"
                  >
                    <source src="/godzi-intro.webm" type="video/webm" />
                    <source src="/godzi-intro.mp4" type="video/mp4" />
                  </video>
                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050507] via-transparent to-transparent opacity-30" />
                </motion.div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#050507] to-transparent" />
    </section>
  );
}
