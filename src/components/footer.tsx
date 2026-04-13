import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-[#030305] border-t border-white/[0.03] py-14">
      {/* Top gradient accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[280px] h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />

      <div className="max-w-7xl w-full mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-8">
        {/* Logo */}
        <a href="#hero" className="flex items-center group">
          <Image
            src="/godzi_logo_horizontal.png"
            alt="GODZ-i"
            width={120}
            height={30}
            className="h-7 w-auto rounded-md bg-white/95 px-2.5 py-0.5 transition-transform duration-300 group-hover:scale-[1.02]"
          />
        </a>

        {/* Copyright */}
        <p className="text-xs text-zinc-600 font-medium tracking-wide">
          &copy; GODZ-i 2026. All rights reserved.
        </p>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/christopher-downer/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-10 h-10 rounded-full border border-white/[0.05] hover:border-accent/25 hover:bg-accent/8 transition-all duration-300"
          aria-label="Christopher Downer on LinkedIn"
        >
          <svg viewBox="0 0 24 24" className="w-4 h-4 fill-zinc-500 hover:fill-white transition-colors">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>
      </div>
    </footer>
  );
}
