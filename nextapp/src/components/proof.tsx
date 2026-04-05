"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const PROOFS = [
  {
    num: "01",
    title: "Lead Generation & Outreach System",
    client: "Marketing Agencies",
    description:
      "Automated prospect sourcing and outreach — pipeline runs without founder involvement.",
  },
  {
    num: "02",
    title: "Content Ideas Generation System",
    client: "Zoom Out Social Marketing Agency",
    description:
      "Saves 10-15 hours per week — content ideas generated and stored in Google Sheets automatically.",
  },
  {
    num: "03",
    title: "Interactive Booking EPK",
    client: "Ras Mundi Music — Austin, TX",
    description:
      "Interactive EPK with integrated booking — professional digital presence for talent.",
  },
  {
    num: "04",
    title: "Badge Tracking Automation",
    client: "FENIX LOGISTIX — Austin International Airport",
    description:
      "Proactive badge expiration alerts — zero compliance violations since deployment.",
  },
  {
    num: "05",
    title: "ULD Count Calculator",
    client: "Cargo Air Operations",
    description:
      "Eliminated manual ULD count errors — increased operational accuracy for ramp teams.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="relative section-spacing overflow-hidden bg-surface">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="mb-20 md:mb-24">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              Real Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              Real Builds. Real Results.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer staggerDelay={0.06}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 mb-5 lg:mb-6">
            {PROOFS.slice(0, 3).map((proof) => (
              <StaggerItem key={proof.num}>
                <ProofCard {...proof} />
              </StaggerItem>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-6">
            {PROOFS.slice(3).map((proof) => (
              <StaggerItem key={proof.num}>
                <ProofCard {...proof} />
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}

function ProofCard({
  num,
  title,
  client,
  description,
}: {
  num: string;
  title: string;
  client: string;
  description: string;
}) {
  return (
    <motion.div
      className="group relative h-full rounded-2xl bg-surface-2 border border-white/[0.04] p-9 md:p-11 overflow-hidden hover:border-accent/15 transition-all duration-500"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
    >
      {/* Animated top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/60 via-accent/20 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-600 ease-out" />

      {/* Large watermark number */}
      <span className="absolute top-4 right-6 text-[5.5rem] font-black text-white/[0.015] leading-none select-none pointer-events-none group-hover:text-white/[0.04] transition-colors duration-700 font-mono">
        {num}
      </span>

      <div className="relative z-10">
        <h3 className="text-base md:text-lg font-bold tracking-tight text-white mb-3 leading-snug">
          {title}
        </h3>
        <span className="inline-flex items-center gap-2.5 text-[11px] font-bold tracking-[0.1em] uppercase text-accent/80 mb-5">
          <span className="w-2 h-2 rounded-full bg-accent/50" />
          {client}
        </span>
        <p className="text-[14px] text-zinc-500 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
}
