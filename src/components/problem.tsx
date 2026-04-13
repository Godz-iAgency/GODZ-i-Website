"use client";

import { FileText, PlayCircle, UserCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const PROBLEMS = [
  {
    icon: FileText,
    title: "Manual Lead Flow",
    description:
      "Prospecting stops when delivery gets busy. There's no system running in the background — your pipeline depends entirely on your attention.",
  },
  {
    icon: PlayCircle,
    title: "Content Bottlenecks",
    description:
      "Every new client means more hours. Production is linear — it doesn't scale. You're grinding harder just to stay even.",
  },
  {
    icon: UserCircle,
    title: "Founder in Operations",
    description:
      "Growth pulls you back into daily tasks instead of running the business. You're the highest-paid operator in your own company.",
  },
];

export function Problem() {
  return (
    <section
      id="problem"
      className="relative flex flex-col items-center w-full section-spacing bg-surface-2 overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Ambient danger glow — positioned subtly */}
      <div className="absolute top-[15%] left-[-8%] w-[700px] h-[700px] rounded-full bg-red-900/[0.035] blur-[180px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] rounded-full bg-accent/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              The Real Issue
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.75rem] font-extrabold tracking-[-0.03em] text-white leading-[1.05] max-w-[700px]">
              Your agency doesn&apos;t have a talent problem.
              <br />
              <span className="text-zinc-600">It has a systems problem.</span>
            </h2>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
          {PROBLEMS.map(({ icon: Icon, title, description }) => (
            <StaggerItem key={title}>
              <motion.div
                className="group relative h-full rounded-2xl bg-surface-3 border border-white/[0.04] p-9 md:p-11 overflow-hidden hover:border-accent/15 transition-all duration-500"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Top accent bar — full width on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/60 via-accent/25 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                {/* Icon with glow ring */}
                <div className="relative w-14 h-14 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/12 group-hover:border-accent/15 transition-all duration-300">
                  <div className="absolute inset-0 rounded-xl bg-accent/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <Icon className="relative z-10 w-6 h-6 text-accent/80" strokeWidth={1.6} />
                </div>

                <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-4">
                  {title}
                </h3>
                <p className="text-[14px] md:text-[15px] text-zinc-400 leading-relaxed">
                  {description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
