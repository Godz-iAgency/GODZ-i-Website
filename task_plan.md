# Task Plan — GODZ-i Conversion Website

## North Star
Get marketing agency founders to book a strategy session at:
https://cal.com/christopher-downer-6pkxir/strategy-session

## Blueprint (Approved)

### Phase 0: Initialization ✅
- Memory files created: gemini.md, claude.md, findings.md, progress.md
- Directories created: architecture/, tools/, .tmp/
- Data schema defined and locked

### Phase 1: Architect — HTML Structure
Build `index.html` with the following 9 sections (in order):
1. **Nav** — GODZ-i logo (left), LinkedIn icon (right)
2. **Hero** — Headline, subheadline, orange CTA button
3. **Problem** — Dark navy background, 3 problem columns
4. **How It Works** — 4-step horizontal timeline
5. **What We Automate** — 3 service cards, light grey background
6. **Proof** — 5 project cards, white background
7. **About** — Dark navy, founder bio, LinkedIn CTA
8. **Final CTA** — Orange background, white CTA button
9. **Footer** — Logo left, LinkedIn right, copyright

### Phase 2: Style — CSS
Build `styles.css`:
- Google Fonts: Montserrat
- CSS variables for all brand colors
- Mobile-first responsive at 768px breakpoint
- Micro-animations: hover states only (no scroll animation)

### Phase 3: Assets
- Generate GODZ-i logo SVG (orange circle + navy wordmark)
- No stock imagery

### Phase 4: QA
- Confirm all 9 sections render correctly
- Verify all CTA links → cal.com URL
- Verify LinkedIn links → linkedin.com/in/christopher-downer/
- Mobile layout test via browser resize
- Tone audit: remove any passive/fluffy language

## Goals
- Single-page site deliverable: index.html + styles.css
- Zero external dependencies except Google Fonts CDN
- Blazing fast load time (pure CSS/HTML)
