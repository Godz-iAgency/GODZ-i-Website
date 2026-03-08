# Data Schema & Maintenance Log

## Data Schema (Inputs/Outputs)

### Project Type
Static single-page website (no backend, no external APIs)

### Input (Brand Brief)
```json
{
  "company": "GODZ-i",
  "founder": "Christopher Downer",
  "location": "Austin, Texas",
  "colors": {
    "primary": "#E8430A",
    "secondary": "#2B3A52",
    "background": "#FFFFFF"
  },
  "font": "Montserrat",
  "north_star": "Book a strategy session",
  "cta_url": "https://cal.com/christopher-downer-6pkxir/strategy-session",
  "linkedin_url": "https://www.linkedin.com/in/christopher-downer/",
  "target_audience": "Marketing agency founders and operators",
  "tone": "Direct, confident, zero fluff"
}
```

### Output (Deliverable)
```json
{
  "files": ["index.html", "styles.css"],
  "sections": 9,
  "cta_count": "1 (Book a Free Strategy Session)",
  "cta_link": "https://cal.com/christopher-downer-6pkxir/strategy-session",
  "linkedin_link": "https://www.linkedin.com/in/christopher-downer/",
  "mobile_responsive": true,
  "animations": "subtle micro-animations only, no performance cost",
  "no_pricing": true,
  "no_generic_ai_imagery": true
}
```

## Maintenance Log

| Date | Change | Author |
|------|--------|--------|
| 2026-03-08 | Initial project setup | System Pilot |
