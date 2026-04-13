"use client";

import { MagneticButton } from "@/components/ui/magnetic-button";
import { Reveal } from "@/components/ui/reveal";

export function FinalCTA() {
  return (
    <section id="cta" className="relative flex flex-col items-center w-full section-spacing overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      {/* Large accent glow in center */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full bg-accent/[0.035] blur-[220px] pointer-events-none" />

      {/* Subtle gradient bottom-to-top for depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-accent/[0.02] via-transparent to-transparent pointer-events-none" />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.012]"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(232,67,10,0.4) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 text-center relative z-10">
        <Reveal>
          <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/60 mb-10 justify-center">
            <span className="w-8 h-px bg-accent/25" />
            Ready?
            <span className="w-8 h-px bg-accent/25" />
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-3xl md:text-5xl lg:text-[4.25rem] font-extrabold tracking-[-0.03em] text-white leading-[1.05] max-w-[780px] mx-auto mb-7">
            Your agency doesn&apos;t have a talent problem.
            <br />
            <span className="gradient-text">It has a systems problem.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="text-lg md:text-xl text-zinc-300 mb-6 font-medium">
            We&apos;ll fix it in 30 minutes.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-sm text-accent/80 font-semibold tracking-wide uppercase mb-12">
            Currently accepting 3 founding clients
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <MagneticButton
            href="https://cal.com/christopher-downer-6pkxir/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-12 py-[22px] bg-accent hover:bg-accent-light text-white text-[15px] font-bold tracking-[0.06em] uppercase rounded-xl glow-pulse transition-all duration-300"
            strength={0.12}
          >
            Book a Free Strategy Session
            <svg className="w-4.5 h-4.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
            </svg>
          </MagneticButton>
        </Reveal>
        <Reveal delay={0.3} className="w-full flex justify-center">
          <p className="mt-5 text-[13px] md:text-sm text-zinc-400 font-medium max-w-[520px] leading-relaxed text-center">
            We take on a limited number of new agency builds each quarter. If you are ready to fix the systems problem, book your call now.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
