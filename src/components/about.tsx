"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal } from "@/components/ui/reveal";

const STATS = [
  { value: "5+", label: "Systems Built" },
  { value: "Austin, TX", label: "Based In" },
  { value: "100%", label: "AI-Native Stack" },
  { value: "0", label: "Fluff Tolerated" },
];

export function About() {
  return (
    <section
      id="about"
      className="relative section-spacing bg-surface-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      <div className="absolute top-[30%] right-[-5%] w-[500px] h-[500px] rounded-full bg-accent/[0.025] blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-20 lg:gap-24 items-center">
          {/* Left: Copy */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
                <span className="w-10 h-px bg-accent/40" />
                The Founder
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white mb-10 leading-tight">
                Who&apos;s Behind GODZ-i.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[15px] md:text-base text-zinc-400 leading-[1.85] mb-12 max-w-[55ch]">
                I&apos;m Christopher Downer, founder of GODZ-i, based in
                Austin, Texas. GODZ-i operates with a dedicated technical
                delivery team that designs, builds, and maintains AI automation
                systems for marketing agencies across the US. I lead every
                client relationship, strategy session, and audit personally —
                our team handles implementation and ongoing system performance
                so your automations run without interruption. Our focus is one
                thing: replacing manual, founder-dependent processes with
                reliable systems that scale.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a
                href="https://www.linkedin.com/in/christopher-downer/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-7 py-4 border border-white/[0.06] hover:border-accent/25 text-zinc-300 hover:text-white text-sm font-semibold tracking-wide uppercase rounded-xl transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_0_24px_rgba(232,67,10,0.06)]"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                Connect on LinkedIn
              </a>
            </Reveal>
          </div>

          {/* Right: Visual */}
          <div className="flex flex-col items-center gap-12">
            <Reveal delay={0.2} direction="right">
              <div className="relative">
                {/* Decorative rings */}
                <div className="absolute -inset-7 rounded-full border border-accent/[0.05] animate-[spin_35s_linear_infinite]" />
                <div className="absolute -inset-12 rounded-full border border-white/[0.015]" />
                <div className="absolute -inset-[4.5rem] rounded-full border border-white/[0.008]" />

                {/* Glow */}
                <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/12 via-transparent to-accent/4 blur-xl" />

                <motion.div
                  className="relative overflow-hidden rounded-full border-2 border-white/[0.06] shadow-[0_24px_80px_rgba(0,0,0,0.5)]"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                >
                  <Image
                    src="/christopher_downer.png"
                    alt="Christopher Downer, Founder of GODZ-i"
                    width={380}
                    height={380}
                    className="w-[260px] h-[260px] md:w-[320px] md:h-[320px] lg:w-[380px] lg:h-[380px] object-cover object-top"
                  />
                </motion.div>
              </div>
            </Reveal>

            {/* Stats Grid */}
            <Reveal delay={0.35}>
              <div className="grid grid-cols-2 gap-3.5 w-full max-w-[380px]">
                {STATS.map(({ value, label }) => (
                  <div
                    key={label}
                    className="bg-surface-3 border border-white/[0.04] rounded-xl px-5 py-6 text-center hover:border-accent/10 transition-all duration-300 group"
                  >
                    <div className="text-xl md:text-2xl font-bold text-accent tracking-tight group-hover:scale-105 transition-transform duration-300">
                      {value}
                    </div>
                    <div className="text-[10px] text-zinc-500 uppercase tracking-[0.14em] mt-2 font-semibold">
                      {label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
