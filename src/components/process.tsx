"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const STEPS = [
  {
    num: "01",
    title: "Audit",
    description:
      "We map your current workflows to identify where automation creates immediate leverage.",
  },
  {
    num: "02",
    title: "Consult",
    description:
      "We prioritize the highest-ROI opportunities that save the most time and directly impact revenue.",
  },
  {
    num: "03",
    title: "Implement",
    description:
      "We build and integrate AI automations directly into your existing stack.",
  },
  {
    num: "04",
    title: "Optimize",
    description:
      "We stay involved post-launch to monitor performance and improve the system as you grow.",
  },
];

export function Process() {
  return (
    <section id="process" className="relative section-spacing overflow-hidden bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-20 md:mb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              The Process
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              Here&apos;s How We Work.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer staggerDelay={0.12}>
          {/* Connecting gradient line — desktop only */}
          <div className="hidden md:block relative mb-14">
            <div className="absolute top-[32px] left-[48px] right-[48px] h-px bg-gradient-to-r from-accent/30 via-accent/10 to-accent/5" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-5">
            {STEPS.map(({ num, title, description }) => (
              <StaggerItem key={num}>
                <motion.div
                  className="group relative rounded-2xl bg-surface-2 border border-white/[0.04] p-9 md:p-10 hover:border-accent/15 transition-all duration-500 overflow-hidden h-full"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/50 via-accent/20 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                  {/* Large background number */}
                  <span className="absolute top-3 right-5 text-[6rem] font-black text-white/[0.015] leading-none select-none pointer-events-none group-hover:text-white/[0.035] transition-colors duration-700 font-mono">
                    {num}
                  </span>

                  {/* Step number badge */}
                  <div className="relative z-10 w-14 h-14 rounded-xl bg-accent/8 border border-accent/12 flex items-center justify-center text-accent font-bold text-sm mb-7 group-hover:bg-accent/12 group-hover:border-accent/20 transition-all duration-300">
                    {num}
                  </div>

                  <h3 className="relative z-10 text-lg font-bold tracking-tight text-white uppercase mb-4">
                    {title}
                  </h3>
                  <p className="relative z-10 text-[14px] text-zinc-500 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
