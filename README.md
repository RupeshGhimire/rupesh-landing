# rupesh-landing

A single-page personal portfolio / landing site for **Rupesh Ghimire**, built with React, TypeScript, Vite, and Tailwind CSS v4. Features a dark, animated aesthetic with ambient glows, film grain, text-scramble and count-up effects, and a live GitHub repos feed.

## Tech Stack

- **React 18** + **TypeScript**
- **Vite 6** (dev server on port `3000`)
- **Tailwind CSS v4** via `@tailwindcss/vite`
- **framer-motion** for animations
- **lucide-react** icons

## Getting Started

```bash
npm install
npm run dev        # start dev server at http://localhost:3000
```

### Scripts

| Script              | Description                     |
| ------------------- | ------------------------------- |
| `npm run dev`       | Start the Vite dev server       |
| `npm run build`     | Production build                |
| `npm run typecheck` | Run `tsc --noEmit` type checks  |

## Project Structure

```
src/
├── App.tsx                  # App shell: background layers, nav, sections, footer
├── index.css                # Tailwind + custom styles (grid, glows, grain, ticker)
├── main.tsx                 # React entry point
├── components/
│   ├── chrome.tsx           # Nav, Ticker, SectionHead, Footer
│   ├── icons.tsx            # Inline SVG icon set
│   └── sections.tsx         # Hero, About, Work, Numbers, Contact, Cta sections
└── lib/
    ├── data.ts              # Personal info, socials, GitHub API endpoint
    └── hooks.tsx            # usePrefersReducedMotion, useInView, Reveal,
                             # useScramble, useCountUp
```

## Key Features

- **Hero** — animated text scramble and intro reveal
- **Ticker** — infinite scrolling marquee
- **About** — bio and skills
- **Work** — projects pulled live from the GitHub API (see `src/lib/data.ts`)
- **Numbers** — animated count-up stats
- **Contact** — copy-to-clipboard email and social links
- **Accessibility** — respects `prefers-reduced-motion` via `usePrefersReducedMotion`
- **Ambient background** — CSS grid layer, drifting glows, and film grain overlay

## Customization

Most personal content lives in `src/lib/data.ts` (`PERSON`, `SOCIALS`) and the section components in `src/components/sections.tsx`. Theme colors and custom effects (grid, glow, grain, ticker) are defined in `src/index.css`.
