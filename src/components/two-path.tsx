"use client";

import { Settings, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";
import { MagneticButton } from "@/components/ui/magnetic-button";

const PATHS = [
  {
    icon: Settings,
    title: "Fix Your Agency Operations",
    description:
      "We automate your internal lead gen, content production, and reporting so your team stops doing manual work and your pipeline never runs dry.",
    badge: "Internal Systems",
    accentGrad: "from-accent/20 to-orange-900/10",
    borderAccent: "hover:border-accent/25",
  },
  {
    icon: Rocket,
    title: "Level Up What You Offer Clients",
    description:
      "We build AI-powered lead gen and content systems you can deploy for your own clients — turning your agency into a tech-enabled service firm.",
    badge: "Client Offerings",
    accentGrad: "from-blue-500/15 to-blue-900/5",
    borderAccent: "hover:border-blue-400/20",
  },
];

export function TwoPath() {
  return (
    <section id="two-path" className="relative flex flex-col items-center w-full section-spacing overflow-hidden bg-surface">
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="text-center mb-20 md:mb-24">
          <Reveal>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white leading-tight">
              Two Ways We Help
              <br />
              Marketing Agencies.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-zinc-400 mt-5 text-base md:text-lg max-w-md mx-auto">
              Pick the path that fits — or combine both.
            </p>
          </Reveal>
        </div>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {PATHS.map(({ icon: Icon, title, description, badge, accentGrad, borderAccent }) => (
            <StaggerItem key={title}>
              <motion.div
                className={`group relative h-full rounded-2xl bg-surface-2 border border-white/[0.04] p-10 md:p-14 overflow-hidden transition-all duration-500 ${borderAccent}`}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${accentGrad} opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-2xl`} />

                {/* Top accent bar */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-accent/50 via-accent/15 to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out" />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon + Badge */}
                  <div className="flex items-center gap-5 mb-10">
                    <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/10 flex items-center justify-center group-hover:bg-accent/15 group-hover:border-accent/20 transition-all duration-300">
                      <Icon className="w-6 h-6 text-accent" strokeWidth={1.6} />
                    </div>
                    <div className="flex items-center gap-2.5">
                      <span className="w-[3px] h-4 rounded-full bg-accent/50" />
                      <span className="text-[11px] font-bold tracking-[0.14em] uppercase text-zinc-400 group-hover:text-zinc-300 transition-colors">
                        {badge}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-[1.75rem] font-bold tracking-[-0.01em] text-white mb-4 leading-tight">
                    {title}
                  </h3>
                  <p className="text-[15px] md:text-base text-zinc-400 leading-relaxed mb-12 max-w-[44ch]">
                    {description}
                  </p>

                  <MagneticButton
                    href="https://cal.com/christopher-downer-6pkxir/strategy-session"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-[0.08em] uppercase rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(232,67,10,0.08)] hover:shadow-[0_0_30px_rgba(232,67,10,0.18)]"
                    strength={0.15}
                  >
                    Book a Free Strategy Session
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </MagneticButton>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
