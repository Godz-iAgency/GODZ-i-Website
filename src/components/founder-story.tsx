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
                &ldquo;I got tired of watching talented people burn out doing work a system could do.&rdquo;
              </p>
            </Reveal>
          </div>

          {/* Right — narrative body */}
          <div className="space-y-8">
            <Reveal delay={0.15}>
              <p className="text-[16px] md:text-[17px] text-zinc-300 leading-[1.85]">
                I got tired of watching talented people burn out doing work a system could do. I spent 20 years in the music industry learning how to build momentum from nothing. Then I moved into logistics where I learned systems, operations, supply chain management, and how to hold complex processes together simultaneously.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-[16px] md:text-[17px] text-zinc-300 leading-[1.85]">
                When I discovered Elon Musk&apos;s Algorithm, everything clicked. Question every requirement. Delete what is unnecessary. Simplify what remains. Accelerate the process. Then and only then, automate. Most agencies skip straight to automation without doing the first four steps. That is why their systems break.
              </p>
            </Reveal>
            <Reveal delay={0.25}>
              <p className="text-[16px] md:text-[17px] text-zinc-300 leading-[1.85]">
                I built GODZ-i to apply that exact framework to marketing agencies. We go inside your operation, map every process, delete the waste, simplify what remains, and then build automation that actually holds. Not a SaaS. Not a course. A hands-on agency that replaces founder dependent chaos with infrastructure that runs without you.
              </p>
            </Reveal>

            {/* Signature line */}
            <Reveal delay={0.3}>
              <div className="pt-4 border-t border-white/[0.06]">
                <p className="text-sm font-bold text-white tracking-wide">Christopher Downer</p>
                <p className="text-xs text-zinc-500 mt-1 tracking-[0.08em] uppercase">Founder, GODZ-i, Austin Texas</p>
              </div>
            </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
}
