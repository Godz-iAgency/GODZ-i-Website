"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/reveal";

const TESTIMONIALS = [
  {
    quote:
      "Christopher built our complete artist operations system including EPK, fan outreach automation, venue booking pipeline, and performance reporting all integrated. What took us months to figure out he delivered in a couple of weeks. The system is now handling our entire workflow.",
    author: "Matthias Gautreaux",
    title: "Founder",
    company: "Ras Mundi",
    url: "https://rasmundimusic.com",
    photo: "/matthias_gautreaux.jpg",
  },
  {
    quote:
      "I needed a marketing overhaul fast. Christopher did not just audit our marketing, he rebuilt it. The system he put in place is generating qualified leads consistently. He delivered enterprise level work on a timeline that works for a growing business.",
    author: "Travis Gobson",
    title: "Founder",
    company: "Assemble at Ease",
    url: "https://assembleatease.com",
    photo: "/travis_gobson.png",
  },
  {
    quote:
      "Christopher built us a content production system that changed how we deliver to clients. Clients fill out a form and we generate professional content automatically. What used to take our team days now happens in hours. This is how modern agencies scale without hiring more people.",
    author: "Andrew Knor",
    title: "Founder",
    company: "Zoom Out Social",
    url: "https://zoomoutsocial.com",
    photo: "/andrew_knor.jpg",
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
              What Clients Say.
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
                  <p className="text-[14px] md:text-[15px] text-zinc-300 leading-relaxed">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                </div>

                <div className="relative z-10 pt-6 border-t border-white/[0.06] flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-white/10 flex-shrink-0">
                    <Image
                      src={testimonial.photo}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                      sizes="48px"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white tracking-wide">
                      {testimonial.author}
                    </p>
                    <p className="text-[11px] text-zinc-500 mt-0.5 tracking-[0.04em]">
                      {testimonial.title},{" "}
                      <a
                        href={testimonial.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent/70 hover:text-accent transition-colors duration-200 underline underline-offset-2 decoration-accent/30 hover:decoration-accent/60"
                      >
                        {testimonial.company}
                      </a>
                    </p>
                  </div>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
