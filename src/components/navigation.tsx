"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "Solutions", href: "#two-path" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#proof" },
  { label: "About", href: "#about" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 flex flex-col items-center w-full transition-all duration-500 ${
        scrolled
          ? "bg-[#050507]/90 backdrop-blur-2xl border-b border-white/[0.04] shadow-[0_4px_30px_rgba(0,0,0,0.4)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-2.5 shrink-0 group">
          <Image
            src="/godzi_logo_horizontal.png"
            alt="GODZ-i"
            width={140}
            height={36}
            className="h-8 w-auto rounded-md bg-white/95 px-2.5 py-1 transition-transform duration-300 group-hover:scale-[1.02]"
            priority
          />
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-zinc-300 hover:text-white transition-colors duration-300 group"
            >
              {label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-accent rounded-full group-hover:w-5 transition-all duration-300" />
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/christopher-downer/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-9 h-9 rounded-full border border-white/[0.06] hover:border-accent/40 hover:bg-accent/10 transition-all duration-300"
            aria-label="Christopher Downer on LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-zinc-400 hover:fill-white transition-colors">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>

          {/* CTA */}
          <a
            href="https://cal.com/christopher-downer-6pkxir/strategy-session"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center px-5 py-2.5 bg-accent hover:bg-accent-light text-white text-xs font-bold tracking-[0.08em] uppercase rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(232,67,10,0.15)] hover:shadow-[0_0_30px_rgba(232,67,10,0.25)]"
          >
            Book a Strategy Session
          </a>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-white/[0.06] hover:bg-white/[0.04] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-zinc-300" />
            ) : (
              <Menu className="w-5 h-5 text-zinc-300" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="lg:hidden w-full overflow-hidden bg-[#050507]/98 backdrop-blur-2xl border-b border-white/[0.04]"
          >
            <div className="px-6 py-8 flex items-stretch flex-col gap-1">
              {NAV_LINKS.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center w-full px-4 py-3.5 rounded-xl text-zinc-300 hover:text-white hover:bg-white/[0.03] transition-all duration-200 text-sm font-medium tracking-wide cursor-pointer tap-highlight-transparent"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                >
                  {label}
                </a>
              ))}
              <div className="mt-6 pt-6 border-t border-white/[0.04] flex flex-col gap-3">
                <a
                  href="https://cal.com/christopher-downer-6pkxir/strategy-session"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full px-5 py-3.5 bg-accent text-white text-sm font-bold tracking-wide uppercase rounded-xl cursor-pointer tap-highlight-transparent"
                  style={{ WebkitTapHighlightColor: 'transparent' }}
                  onClick={() => setMobileOpen(false)}
                >
                  Book a Strategy Session
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
