"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { Cpu, Network, Zap, ShieldCheck } from "lucide-react";

const TECHNOLOGIES = [
  {
    icon: Network,
    title: "Multi-Agent Architectures",
    description:
      "We don't just use ChatGPT wrappers. We build specialized, communicating LLM agents that handle distinct parts of your agency's workflows autonomously.",
  },
  {
    icon: Zap,
    title: "Headless Automations",
    description:
      "Our systems run in the background via intelligent webhooks and API integrations connecting your CRM, Slack, and delivery tools seamlessly.",
  },
  {
    icon: Cpu,
    title: "Custom Data Processing",
    description:
      "We build vector databases and RAG (Retrieval-Augmented Generation) systems trained specifically on your agency's past performance and brand voice.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Reliability",
    description:
      "Every workflow we deploy includes built-in error handling, human-in-the-loop fallback mechanisms, and robust security protocols.",
  },
];

export function Technology() {
  return (
    <section
      id="technology"
      className="relative flex flex-col items-center w-full section-spacing bg-surface-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute top-[20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-blue-500/[0.02] blur-[150px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-20 md:mb-24 flex flex-col items-start md:items-center text-left md:text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              The Engine
              <span className="hidden md:inline-block w-10 h-px bg-accent/40" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              AI Agent Technology.
            </h2>
          </Reveal>
          <Reveal delay={0.2} className="md:max-w-2xl mt-5">
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed md:mx-auto">
              We leverage modern AI agent architectures and orchestration layers to build production-grade systems that don&apos;t just generate text, but take autonomous action.
            </p>
          </Reveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5"
          staggerDelay={0.08}
        >
          {TECHNOLOGIES.map(({ icon: Icon, title, description }, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="group relative h-full rounded-2xl bg-surface-3 border border-white/[0.04] p-8 md:p-9 overflow-hidden hover:border-white/10 transition-all duration-500"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t bg-white/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

                <div className="relative w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-zinc-300" strokeWidth={1.5} />
                </div>

                <h3 className="text-[17px] font-bold tracking-tight text-white mb-3 leading-snug">
                  {title}
                </h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
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
