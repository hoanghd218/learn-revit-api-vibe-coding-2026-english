---
title: "Codebase Analysis - BIM Academy Landing Page"
description: "Comprehensive analysis of existing landing page codebase"
status: completed
created: 2026-01-07
---

# Codebase Analysis Report

## Executive Summary

Current landing page uses VS Code / Dark IDE aesthetic with syntax highlighting colors. Transition to ClaudeKit style requires shift from blue/purple/green to Coral/Bronze color palette with enhanced visual polish.

## Current Architecture

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Styling**: Tailwind CSS + CSS Variables
- **UI Components**: shadcn/ui based components
- **Animation**: Custom scroll animations via hooks
- **Icons**: Lucide React

### Component Structure

```
bimacademy/
├── app/
│   ├── layout.tsx          # Root layout with Clerk auth & SEO
│   └── globals.css         # CSS variables & Tailwind config
├── components/
│   ├── layout/
│   │   └── header.tsx      # Sticky navigation with scroll effects
│   └── sections/
│       ├── hero-section.tsx       # Hero with code animation
│       ├── pain-points-section.tsx # Before/after comparison cards
│       └── tech-stack-section.tsx  # Technology grid cards
└── lib/
    └── design-tokens.ts    # Color, spacing, typography constants
```

## Current Design System

### Color Palette (VS Code IDE)
```css
--background: #1E1E1E      /* Main bg */
--foreground: #D4D4D4      /* Text */
--primary: #569CD6         /* Syntax blue - primary actions */
--accent: #C586C6          /* Syntax purple */
--chart-1: #569CD6         /* Blue */
--chart-2: #C586C6         /* Purple */
--chart-3: #4EC9B0         /* Green */
--chart-4: #DCDCAA         /* Yellow */
--chart-5: #CE9178         /* Orange */
```

### Typography
- **Headings**: Roboto Bold
- **Body**: Roboto Regular
- **Code**: Fira Code

### Layout Constants
- **Container**: Custom Container component with size variants
- **Section Padding**: Not consistently defined
- **Card Radius**: 0.375rem (sharp, IDE-like)

## Key Components Analysis

### Header
- Fixed position with backdrop blur
- Scroll shadow effect
- Gradient text logo
- Navigation links to sections
- CTA button with glow effect

### Hero Section
- Split layout (content + code animation)
- Gradient text headline
- Two CTA buttons (primary + outline)
- Trust indicator badges

### Pain Points Section
- Grid of 4 comparison cards
- Before/after format with X/Zap icons
- Metric badges
- Call-to-action paragraph

### Tech Stack Section
- Grid of 7 technology cards
- Icon + name + description layout
- Scroll fade-in animations
- Industry standard badge footer

## Design Tokens File

Located at `/bimacademy/lib/design-tokens.ts`:
- Defines IDE color palette
- Spacing scale (xs to 6xl)
- Typography with sizes/weights
- Breakpoints definition
- Shadows with glow variants
- shadcn CSS variable mappings

## Identified Issues for Redesign

1. **Inconsistent spacing** - No unified section padding standard
2. **Sharp corners** - IDE-style radius may feel too harsh
3. **Color palette** - Needs migration to Coral/Bronze
4. **Card design** - Missing hover border effects per ClaudeKit style
5. **Icon backgrounds** - Currently plain icons, need circular gradient backgrounds
6. **Gradient text** - Need to apply `from-coral to-bronze` patterns
7. **Container width** - May need to standardize on max-w-6xl

## Migration Requirements

### CSS Variables to Update
| Current | Target (ClaudeKit) |
|---------|-------------------|
| #569CD6 (blue) | #D97757 (coral) |
| #C586C6 (purple) | #D4A27F (bronze) |
| #4EC9B0 (green) | Maintain for success states |
| #1E1E1E (bg) | Keep dark theme |
| 0.375rem radius | 0.75rem+ for rounded feel |

### New CSS Variables Needed
```css
--coral: #D97757
--coral-light: #E89B7A
--coral-dark: #B85C45
--bronze: #D4A27F
--bronze-light: #E0B892
--bronze-dark: #A88565
```

### Utility Classes Needed
- Gradient text: `bg-gradient-to-r from-coral to-bronze`
- Icon backgrounds: Circular gradients with low opacity
- Card hover: Border color transition effects
