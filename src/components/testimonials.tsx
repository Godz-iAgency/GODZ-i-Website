"use client";

import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "GODZ-i built a lead gen system that completely removed me from the prospecting process. We've added 3 new retainers this month without me sending a single manual email.",
    author: "Founder",
    agency: "B2B Growth Agency",
  },
  {
    quote:
      "Their content automation workflows are incredible. We reduced our delivery time by 40% across all our client accounts, which allowed us to scale our MRR without adding headcount.",
    author: "COO",
    agency: "Social Media Agency",
  },
  {
    quote:
      "The internal operations systems they set up allowed us to finally stop putting out fires and focus on growth. The ROI from the time saved was immediate.",
    author: "CEO",
    agency: "Paid Ads Agency",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative flex flex-col items-center w-full section-spacing bg-surface overflow-hidden"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.05] to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10">
        <div className="mb-20 md:mb-24 flex flex-col items-center text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 text-[11px] font-semibold tracking-[0.2em] uppercase text-accent/80 mb-7">
              <span className="w-10 h-px bg-accent/40" />
              Testimonials
              <span className="w-10 h-px bg-accent/40" />
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-[-0.03em] text-white">
              What Agencies Say.
            </h2>
          </Reveal>
        </div>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6"
          staggerDelay={0.1}
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <StaggerItem key={i}>
              <motion.div
                className="group relative h-full rounded-2xl bg-surface-3 border border-white/[0.04] p-8 md:p-10 overflow-hidden hover:border-accent/15 transition-all duration-500 flex flex-col justify-between"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
              >
                {/* Subtle top glow on hover */}
                <div className="absolute top-0 left-0 right-0 h-[2px] rounded-t bg-accent/30 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 ease-out origin-left" />

                <div className="relative z-10 mb-8">
                  <svg
                    className="w-8 h-8 text-accent/40 mb-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-[15px] md:text-[16px] text-zinc-300 leading-relaxed font-medium">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/[0.06]">
                  <p className="text-sm font-bold text-white tracking-wide">
                    {testimonial.author}
                  </p>
                  <p className="text-[11px] text-zinc-500 mt-1 tracking-[0.08em] uppercase font-semibold">
                    {testimonial.agency}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
