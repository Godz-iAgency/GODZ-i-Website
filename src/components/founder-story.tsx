"use client";

import { Reveal } from "@/components/ui/reveal";

export function FounderStory() {
  return (
    <section
      id="founder-story"
      className="relative flex flex-col items-center w-full section-spacing bg-surface-2 overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />
      {/* Subtle ambient glow */}
      <div className="absolute top-[-10%] left-[-5%] w-[600px] h-[600px] rounded-full bg-accent/[0.025] blur-[160px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-16 lg:gap-24 items-start">

          {/* Left — Label + pull quote */}
          <div className="lg:sticky lg:top-32">
            <Reveal>
              <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
                <span className="w-10 h-px bg-accent/40" />
                The Story
              </span>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-[-0.03em] text-white leading-[1.1]">
                Why I Built GODZ-i.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base md:text-lg text-accent/80 font-semibold leading-relaxed border-l-2 border-accent/30 pl-5">
                &ldquo;I got tired of watching talented agency founders burn out doing work a system could do.&rdquo;
              </p>
            </Reveal>
          </div>

          {/* Right — narrative body */}
          <div className="space-y-8">
            <Reveal delay={0.15}>
              <p className="text-[16px] md:text-[17px] text-zinc-300 leading-[1.85]">
                I spent years inside marketing agencies — watching founders who were brilliant at their craft get buried in operational chaos. The pipeline would dry up the moment delivery got busy. Content fell behind because every new client meant more manual hours. And the founder? Stuck in the weeds instead of building a business.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[16px] md:text-[17px] text-zinc-300 leading-[1.85]">
                That cycle isn&apos;t a talent problem. It&apos;s a systems problem. And I knew AI could break it — if someone built the right systems instead of just selling tools and templates.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[16px] md:text-[17px] text-zinc-300 leading-[1.85]">
                So I built GODZ-i. Not a SaaS. Not a course. A hands-on automation agency that goes inside your operation, finds exactly where you&apos;re bleeding time and money, and replaces it with infrastructure that runs without you.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-[16px] md:text-[17px] text-zinc-400 leading-[1.85]">
                Every system we build is scoped to your agency, integrated into your stack, and built to outlast any trend. The result isn&apos;t just saved hours — it&apos;s a business you can actually scale.
              </p>
            </Reveal>

            {/* Signature line */}
            <Reveal delay={0.35}>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-sm font-bold text-white tracking-wide">Christopher Downer</p>
                <p className="text-xs text-zinc-500 mt-1 tracking-[0.08em] uppercase">Founder, GODZ-i · Austin, Texas</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
