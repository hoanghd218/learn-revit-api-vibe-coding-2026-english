# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a landing page for BIM Developer Academy (bimdeveloperacademy.com), built with Next.js 16, React 19, and TypeScript. The site promotes a Revit API & C# programming course for BIM professionals.

## Commands

```bash
cd bimacademy
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run start    # Start production server
npm run lint     # Run ESLint
```

## Architecture

### Directory Structure

```
bimacademy/
├── app/              # Next.js App Router pages
│   ├── page.tsx      # Landing page (composed of sections)
│   ├── layout.tsx    # Root layout with metadata
│   └── globals.css   # Tailwind + CSS variables
├── components/
│   ├── ui/           # shadcn/ui base components (button, input, etc.)
│   ├── bim/          # Custom BIM-specific components (Section, Container, etc.)
│   ├── sections/     # Landing page sections (Hero, Pricing, Curriculum, etc.)
│   └── layout/       # Layout components (Header)
├── lib/
│   └── utils.ts      # cn() utility for className merging
├── hooks/
│   └── use-scroll-animation.ts  # anime.js scroll animations
└── data/
    └── code-snippets.ts
```

### Component Patterns

- **Path alias**: `@/*` maps to project root (e.g., `@/components/ui`)
- **shadcn/ui**: Uses `radix-vega` style, configured in `components.json`
- **Styling**: Tailwind CSS v4 with CSS variables in `app/globals.css`
- **Animations**: `useScrollAnimation` hook using Intersection Observer + anime.js
- **Class merging**: Use `cn()` from `@/lib/utils` for conditional classes

### Key Components

- **Section/Container** (`@/components/bim`): Layout wrappers with consistent styling
- **Sections** (`@/components/sections`): Landing page sections (Hero, PainPoints, Curriculum, etc.)
- **CodeAnimation** (`@/components/sections/code-animation.tsx`): Code snippet animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI**: React 19, shadcn/ui with radix-ui primitives
- **Styling**: Tailwind CSS v4, CSS variables
- **Animations**: anime.js + Intersection Observer
- **Icons**: lucide-react
- **Language**: TypeScript (strict mode)
