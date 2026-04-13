"use client";

import { Mail, FileText, ClipboardList } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const SERVICES = [
  {
    icon: Mail,
    title: "Lead Generation & Outreach",
    description:
      "Automated prospect sourcing, qualification, and outreach that keeps your pipeline full without founder involvement.",
    badge: "For Your Agency",
    badgeColor: "bg-accent/12 text-accent border border-accent/10",
  },
  {
    icon: FileText,
    title: "Content Production Systems",
    description:
      "Automated content ideation, repurposing, and scheduling that scales across all your clients.",
    badge: "For Your Clients",
    badgeColor: "bg-blue-500/8 text-blue-400 border border-blue-500/10",
  },
  {
    icon: ClipboardList,
    title: "Agency Ops & Reporting",
    description:
      "Automated onboarding, internal workflows, and client reporting that eliminates manual operational overhead.",
    badge: "For Your Agency",
    badgeColor: "bg-accent/12 text-accent border border-accent/10",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative flex flex-col items-center w-full section-spacing bg-surface-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.02] blur-[140px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-12 md:mb-16">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              What We Build
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              What We Build For Agencies.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sm text-zinc-500 max-w-2xl">
              Engagements are priced based on scope and complexity. Book a call to get your custom quote.
            </p>
          </Reveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          staggerDelay={0.1}
        >
          {SERVICES.map(
            ({ icon: Icon, title, description, badge, badgeColor }) => (
              <StaggerItem key={title}>
                <motion.div
                  className="group relative h-full rounded-2xl bg-surface-3 border border-white/[0.04] p-9 md:p-11 overflow-hidden hover:border-accent/15 transition-all duration-500"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  {/* Top accent — animates full width on hover */}
                  <div className="absolute top-0 left-0 w-16 h-[2px] rounded-r bg-accent/30 group-hover:w-full transition-all duration-700 ease-out" />

                  {/* Icon with glow */}
                  <div className="relative w-14 h-14 rounded-xl bg-accent/8 border border-accent/10 flex items-center justify-center mb-7 group-hover:bg-accent/12 group-hover:border-accent/15 transition-all duration-300">
                    <div className="absolute inset-0 rounded-xl bg-accent/5 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <Icon className="relative z-10 w-6 h-6 text-accent/80" strokeWidth={1.6} />
                  </div>

                  <span
                    className={`inline-block text-[10px] font-bold tracking-[0.12em] uppercase px-3.5 py-1.5 rounded-lg ${badgeColor} mb-6`}
                  >
                    {badge}
                  </span>

                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-4">
                    {title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-zinc-400 leading-relaxed">
                    {description}
                  </p>
                </motion.div>
              </StaggerItem>
            )
          )}
        </StaggerContainer>
      </div>
    </section>
  );
}
