# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Next.js with Turbopack)
npm run build    # Production build
npm run lint     # ESLint check
npm start        # Run production server
```

No test framework is configured.

## Architecture

**Stack**: Next.js (App Router) + React 19 + TypeScript + Tailwind CSS 3 + Framer Motion

**Path alias**: `@/*` maps to `./src/*`

**Key structure**:
- `src/app/page.tsx` — Main portfolio page; a single client component with all content sections (Focus, Projects, Experience, Skills). All page content lives here.
- `src/app/layout.tsx` — Root layout; sets metadata and loads Google Fonts (Inter → `font-sans`, Fraunces → `font-display`).
- `src/components/ui/` — Thin wrappers around Radix UI primitives (`accordion.tsx`) and a custom `text.tsx` typography component.
- `src/lib/utils.ts` — `cn()` helper (clsx + tailwind-merge).
- `src/lib/typography.ts` — Shared typography variant definitions used by `text.tsx`.

**Dark mode**: Tailwind `class` strategy, toggled via `src/components/theme-toggle.tsx`.

**Animations**: Framer Motion; all motion is in `page.tsx`.

**Fonts**: Custom font variables (`--font-sans`, `--font-display`) are set on `<html>` in the layout and consumed via Tailwind config.
