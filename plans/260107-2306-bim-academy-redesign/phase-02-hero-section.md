---
title: "Phase 2 - Hero Section Redesign"
description: "Update hero section with ClaudeKit gradient text, coral/bronze accents, and improved layout"
priority: P1
status: pending
created: 2026-01-07
---

# Phase 2: Hero Section Redesign

## Overview

| Attribute | Value |
|-----------|-------|
| Date | 2026-01-07 |
| Duration | 3-4 hours |
| Priority | P1 (High) |
| Status | Pending |

## Context

- **Reference**: `bimacademy/components/sections/hero-section.tsx`
- **Dependencies**: Phase 1 (CSS Variables)
- **Design Tokens**: `bimacademy/lib/design-tokens.ts`

## Requirements

### 1. Headline Gradient Text

Replace current gradient with ClaudeKit Coral-to-Bronze:

```tsx
// Current
<span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">

// New
<span className="block bg-gradient-to-r from-[#D97757] via-[#D4A27F] to-[#D97757] bg-clip-text text-transparent">
```

### 2. CTA Button Updates

```tsx
// Primary button - Coral glow
<Button
  size="lg"
  className="text-lg px-8 bg-[#D97757] hover:bg-[#D97757]/90 glow-coral"
>
  Start Your Developer Journey
  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
</Button>

// Secondary button - Bronze accent
<Button
  size="lg"
  variant="outline"
  className="text-lg px-8 border-[#D4A27F] text-[#D4A27F] hover:bg-[#D4A27F]/10"
>
  <Play className="mr-2 h-5 w-5" />
  View Student Projects
</Button>
```

### 3. Trust Indicators with Coral/Bronze

Update indicator dots and text:

```tsx
<div className="flex flex-wrap gap-8 justify-center lg:justify-start text-sm text-muted-foreground">
  <div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#D97757]" />
    <span>98% success rate</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#D4A27F]" />
    <span>500+ graduates</span>
  </div>
  <div className="flex items-center gap-2">
    <div className="h-2 w-2 rounded-full bg-[#E89B7A]" />
    <span>4-week bootcamp</span>
  </div>
</div>
```

### 4. Background Effects

Enhance gradient backgrounds:

```tsx
{/* Background gradient - Coral/bronze tint */}
<div className="absolute inset-0 bg-gradient-to-br from-[#D97757]/5 via-background to-[#D4A27F]/5 -z-10" />
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D97757]/10 via-transparent to-transparent -z-10" />
```

### 5. Sub-headline Enhancement

```tsx
<p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
  <span className="font-semibold text-[#D4A27F]">Stop clicking. Start coding.</span>{' '}
  Transition from a BIM User to a High-Paid BIM Developer. Learn C#, .NET, and WPF to
  automate the impossible.
</p>
```

### 6. Responsive Layout Adjustments

Ensure consistent padding per ClaudeKit standard:
- Section padding: `py-16`
- Container: `max-w-6xl`
- Gap: `gap-12` (lg breakpoint)

## Implementation Steps

1. **Update headline gradient** to use coral/bronze colors
2. **Update CTA buttons** with new color scheme
3. **Update trust indicators** with coral/bronze accent colors
4. **Enhance background gradients** with new color palette
5. **Add icon background effects** to Play icon
6. **Verify responsive layout** on mobile/tablet/desktop
7. **Test scroll behavior** for smooth section navigation

## Success Criteria

- [ ] Headline uses gradient from coral to bronze
- [ ] Primary CTA has coral glow effect
- [ ] Secondary CTA has bronze border/text
- [ ] Trust indicators use coral/bronze accent colors
- [ ] Background gradients use subtle coral/bronze tint
- [ ] Sub-headline emphasis in bronze color
- [ ] Layout consistent with `max-w-6xl` container
- [ ] Section padding consistent at `py-16`

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Gradient not rendering | Low | Low | Check CSS gradient syntax |
| Button hover states broken | Medium | Low | Test hover state transitions |
| Mobile layout broken | Medium | Medium | Test on multiple breakpoints |

## Files to Modify

- `bimacademy/components/sections/hero-section.tsx` - Main component
- `bimacademy/app/globals.css` - Add button glow utilities if needed

## Testing Checklist

- [ ] Verify gradient text renders correctly
- [ ] Test button hover states
- [ ] Check mobile responsive layout
- [ ] Validate scroll-to-section navigation
- [ ] Test code animation (right side)
