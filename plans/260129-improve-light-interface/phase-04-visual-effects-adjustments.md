---
title: "Phase 4: Visual Effects Adjustments"
description: "Refine shadows, transitions, gradients, and animations for light theme"
status: pending
priority: P2
effort: 1h
branch: feat/light-theme-transformation
tags: [visual, polish, animations]
created: 2026-01-29
---

## Context Links

- **Research:** [Tailwind CSS Patterns](../research/researcher-02-tailwind-light-theme-patterns.md) - Section 3 (Gradients), Section 5 (Transitions)
- **Dependencies:** [Phase 1](phase-01-css-variables-foundation.md) ✅, [Phase 2](phase-02-component-updates.md) ✅, [Phase 3](phase-03-page-updates.md) ✅
- **Parallel:** Can run partially in parallel with Phase 3

## Overview

**Date:** 2026-01-29
**Description:** Polish visual effects for light theme - refine shadows, fix gradients, adjust hover/focus states, update animations.

**Priority:** MEDIUM - Polish phase, can run partially parallel with Phase 3.

## Key Insights from Research

### Shadow System for Light Themes

**Subtle Shadows (0.05-0.07 opacity):**
```css
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
--shadow-md: 0 2px 4px rgba(0, 0, 0, 0.06);
--shadow-lg: 0 4px 6px rgba(0, 0, 0, 0.07);
```

**Combine Borders + Shadows:**
```tsx
className="bg-card border border-border shadow-light"
```

### Gradient Adaptations

**Low Opacity on Light Backgrounds:**
```tsx
// Subtle background gradient
className="bg-gradient-to-r from-primary/10 via-secondary/10 to-tertiary/10"

// Text gradient (full opacity)
className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
```

**DO NOT USE `.bg-opacity` on gradients:**
```tsx
// ❌ Wrong
className="bg-gradient-to-r from-primary to-secondary bg-opacity-50"

// ✅ Correct
className="bg-gradient-to-r from-primary/50 to-secondary/50"
```

### Hover & Focus States

**Button Hover:**
```tsx
className="bg-primary hover:bg-primary-hover active:scale-95 transition-all"
```

**Card Hover:**
```tsx
className="shadow-light hover:shadow-light-md hover:border-primary transition-all duration-300"
```

**Input Focus:**
```tsx
className="focus:ring-2 focus:ring-primary/20 focus:border-primary"
```

## Requirements

### Must Complete
1. ✅ Refine all shadow effects (reduce opacity)
2. ✅ Fix gradient utilities for light backgrounds
3. ✅ Update hover states for better visibility
4. ✅ Fix focus states for accessibility
5. ✅ Adjust skeleton loading animations
6. ✅ Update scrollbar hover states
7. ✅ Fix transition durations for light theme

### Must Not Break
1. ❌ Don't remove animations (only adjust)
2. ❌ Don't break hover functionality
3. ❌ Don't remove focus indicators
4. ❌ Don't make animations too subtle

## Architecture

### Visual Effects Categories

```
Visual Effects
├── Shadows              # Elevation and depth
│   ├── Card shadows
│   ├── Button shadows
│   └── Dropdown shadows
├── Gradients            # Visual interest
│   ├── Text gradients
│   ├── Background gradients
│   └── Icon backgrounds
├── Transitions          # Smooth changes
│   ├── Hover states
│   ├── Focus states
│   └── Theme transitions
└── Animations           # Movement
    ├── Skeleton loading
    ├── Fade in animations
    └── Accordion animations
```

## Related Code Files

### Primary Files
1. `app/globals.css` - All utility classes and animations (lines 139-311)
2. `components/ui/button.tsx` - Button hover/focus states
3. `components/ui/card.tsx` - Card hover effects
4. `components/ui/input.tsx` - Input focus states
5. `components/bim/project-card.tsx` - Card hover lift
6. `components/bim/tech-card.tsx` - Tech card hover

### Secondary Files
7. `components/sections/hero-section.tsx` - Hero gradients
8. `components/sections/student-projects-section.tsx` - Card grids
9. `components/course/video-preview-skeleton.tsx` - Skeleton animation

## Implementation Steps

### Step 1: Refine Shadow Effects (15 min)

#### 1.1 Review Current Shadows
**Check:**
```bash
grep -r "shadow-" app/ components/
```

**Expected findings:**
- `shadow-lg` (too strong for light theme)
- `shadow-md` (might need reduction)
- `shadow-black/20` (not suitable for light theme)

#### 1.2 Update Shadow Utilities
**File:** `app/globals.css`

**Add refined shadow utilities:**
```css
/* Add to @layer utilities after line 138 */
/* === Refined Light Theme Shadows === */

/* Subtle card elevation */
.shadow-card {
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.04);
}

.shadow-card-hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.05);
}

/* Button shadows */
.shadow-button {
  box-shadow: 0 1px 2px rgba(232, 93, 4, 0.1);
}

.shadow-button-hover {
  box-shadow: 0 4px 6px rgba(232, 93, 4, 0.15);
}

/* Dropdown shadows */
.shadow-dropdown {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 2px 4px rgba(0, 0, 0, 0.04);
}

/* Elevation system */
.shadow-elevation-1 {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.shadow-elevation-2 {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

.shadow-elevation-3 {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

.shadow-elevation-4 {
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.08);
}
```

#### 1.3 Replace Heavy Shadows
**Pattern:**
```tsx
// Before:
className="shadow-lg"
className="shadow-xl"
className="shadow-black/20"

// After:
className="shadow-elevation-3"
className="shadow-card-hover"
className="shadow-dropdown"
```

### Step 2: Fix Gradient Utilities (15 min)

#### 2.1 Update Text Gradient
**File:** `app/globals.css` (lines 140-146)

**Current:**
```css
.text-gradient {
  background: linear-gradient(to right, var(--coral-accent), var(--bronze-accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

**Update to:**
```css
.text-gradient {
  background: linear-gradient(to right, #E85D04, #0077B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Alternate gradient - three colors */
.text-gradient-tri {
  background: linear-gradient(to right, #E85D04, #0077B6, #2A9D8F);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

#### 2.2 Update Background Gradients
**File:** `app/globals.css`

**Add new utilities:**
```css
/* Subtle background gradients */
.bg-gradient-subtle {
  background: linear-gradient(to right, rgba(232, 93, 4, 0.05), rgba(0, 119, 182, 0.05));
}

.bg-gradient-subtle-vertical {
  background: linear-gradient(to bottom, rgba(232, 93, 4, 0.05), rgba(0, 119, 182, 0.05));
}

/* Icon background gradient */
.icon-bg-gradient {
  background: linear-gradient(
    135deg,
    rgba(232, 93, 4, 0.1) 0%,
    rgba(0, 119, 182, 0.05) 100%
  );
}

/* Section background gradient */
.section-gradient-alt {
  background: linear-gradient(to bottom, #FFFFFF 0%, #F9FAFB 100%);
}
```

#### 2.3 Fix Gradient Opacity Usage
**Search and fix:**
```bash
# Find wrong usage
grep -r "bg-opacity" components/ app/

# Find gradients without opacity
grep -r "bg-gradient" components/ app/
```

**Pattern:**
```tsx
// ❌ Wrong - bg-opacity doesn't work on gradients
className="bg-gradient-to-r from-primary to-secondary bg-opacity-50"

// ✅ Correct - use slash syntax
className="bg-gradient-to-r from-primary/50 to-secondary/50"

// ✅ Also correct - use opacity on container
<div className="bg-gradient-to-r from-primary to-secondary opacity-50">
```

### Step 3: Update Hover States (15 min)

#### 3.1 Button Hover Effects
**File:** `components/ui/button.tsx`

**Update variants:**
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-white transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-button hover:bg-primary-hover hover:shadow-button-hover active:scale-95",
        secondary: "bg-white text-primary border border-gray-300 shadow-sm hover:bg-gray-50 hover:border-primary",
        ghost: "text-primary hover:bg-primary/10",
        outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white shadow-sm hover:shadow-md",
      },
    },
    // ... rest of config
  }
)
```

#### 3.2 Card Hover Effects
**Files:** `components/bim/project-card.tsx`, `components/bim/tech-card.tsx`

**Pattern:**
```tsx
// Before:
className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"

// After:
className="group shadow-card hover:shadow-card-hover hover:border-primary transition-all duration-300 hover:-translate-y-1"
```

#### 3.3 Navigation Hover Effects
**File:** `components/layout/header.tsx`

**Update nav links:**
```tsx
// Before:
className="text-sm text-muted-foreground hover:text-coral-accent transition-colors"

// After:
className="text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 px-3 py-2 rounded-md transition-all duration-200"
```

### Step 4: Fix Focus States (10 min)

#### 4.1 Input Focus States
**Files:** `components/ui/input.tsx`, `components/ui/textarea.tsx`

**Pattern:**
```tsx
// Ensure consistent focus ring
<Input className="focus:ring-2 focus:ring-primary/20 focus:border-primary focus:ring-offset-2" />
```

#### 4.2 Button Focus States
**File:** `components/ui/button.tsx`

**Pattern:**
```tsx
// Add focus-visible styles
className="focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2"
```

#### 4.3 Card Focus States (Keyboard Nav)
**Files:** Interactive cards that are links/buttons

**Pattern:**
```tsx
// For clickable cards
<Link href="#" className="block focus:outline-none focus:ring-2 focus:ring-primary/20 focus:ring-offset-2 rounded-lg">
  <div className="bg-card border border-border shadow-card hover:shadow-card-hover transition-all">
    {/* Card content */}
  </div>
</Link>
```

### Step 5: Update Animations (5 min)

#### 5.1 Skeleton Animation
**File:** `app/globals.css` (lines 260-278)

**Already updated in Phase 1, verify:**
```css
.skeleton {
  background: linear-gradient(
    90deg,
    #F3F4F6 25%,
    #E5E7EB 50%,
    #F3F4F6 75%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
}
```

#### 5.2 Fade In Animation
**File:** `app/globals.css` (lines 296-310)

**Verify it works for light theme:**
```css
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.6s ease-out forwards;
}
```

### Step 6: Update Scrollbar Hover (5 min)

**File:** `app/globals.css` (lines 280-294)

**Verify hover states:**
```css
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #E85D04;  /* Orange-red on hover */
}

/* Add transition for smooth hover */
.custom-scrollbar::-webkit-scrollbar-thumb {
  transition: background 0.3s ease;
}
```

### Step 7: Add Smooth Transitions (5 min)

**Global color transitions:**

**File:** `app/globals.css`

**Add to `@layer base`:**
```css
@layer base {
  /* Smooth color transitions for theme changes */
  * {
    @apply transition-colors duration-200 ease-in-out;
  }

  /* Smooth transitions for interactive elements */
  button,
  a,
  input,
  textarea,
  select {
    @apply transition-all duration-200 ease-in-out;
  }

  /* No transition for reduced motion */
  @media (prefers-reduced-motion: reduce) {
    * {
      transition-duration: 0.01ms !important;
      animation-duration: 0.01ms !important;
    }
  }
}
```

## Todo List

### Shadow Refinements
- [ ] Add refined shadow utilities to globals.css
- [ ] Replace shadow-lg with shadow-elevation-3
- [ ] Replace shadow-xl with shadow-card-hover
- [ ] Replace shadow-black/20 with shadow-dropdown
- [ ] Update card hover effects
- [ ] Update button hover shadows

### Gradient Fixes
- [ ] Update text-gradient utility
- [ ] Add text-gradient-tri utility
- [ ] Add background gradient utilities
- [ ] Fix gradient opacity usage
- [ ] Update icon background gradients
- [ ] Update section background gradients

### Hover States
- [ ] Update button hover effects
- [ ] Update card hover effects
- [ ] Update navigation hover effects
- [ ] Update link hover effects
- [ ] Update dropdown hover effects

### Focus States
- [ ] Update input focus rings
- [ ] Update button focus rings
- [ ] Update card focus states
- [ ] Update keyboard navigation
- [ ] Test Tab key navigation

### Animations
- [ ] Verify skeleton animation
- [ ] Verify fade-in animation
- [ ] Verify accordion animation
- [ ] Test reduced motion support
- [ ] Verify animation durations

### Transitions
- [ ] Add global color transitions
- [ ] Add interactive element transitions
- [ ] Test transition smoothness
- [ ] Verify reduced motion respected

## Success Criteria

### Must Complete
- ✅ All shadows refined (0.05-0.07 opacity)
- ✅ All gradients work correctly on light backgrounds
- ✅ Hover states visible and smooth
- ✅ Focus states accessible (WCAG AA)
- ✅ Animations subtle but visible
- ✅ Transitions smooth (200-300ms)

### Must Not Break
- ✅ Hover functionality preserved
- ✅ Focus indicators visible
- ✅ Animations still work
- ✅ Reduced motion respected
- ✅ No jarring transitions

### Validation Evidence
- ✅ Visual test of all hover states
- ✅ Keyboard navigation test (Tab key)
- ✅ Reduced motion test (OS settings)
- ✅ Transition duration audit
- ✅ No layout shifts from transitions

## Risk Assessment

### Low Risk (Polish Phase)
1. **Shadows too subtle** - Might not be visible
   - **Mitigation:** Combine with borders for depth
2. **Transitions too slow** - Feels sluggish
   - **Mitigation:** Keep durations short (200ms)
3. **Gradients not visible** - Too low opacity
   - **Mitigation:** Test on actual content

### Very Low Risk
1. **Animations cause motion sickness** - Too much movement
   - **Mitigation:** Respect reduced motion preference
2. **Focus states not visible** - Lost on white background
   - **Mitigation:** Use darker ring color (primary/20)

## Security Considerations

None - Visual effects don't affect security.

## Next Steps

After completing this phase:

1. **Phase 5:** Comprehensive testing (accessibility, cross-browser, visual regression)

**CRITICAL:** Do not proceed to Phase 5 until:
- ✅ All visual effects refined
- ✅ Hover/focus states tested
- ✅ Animations verified
- ✅ Changes committed to git

## Troubleshooting

### Issue: Shadows not visible
**Cause:** Opacity too low or background too light
**Fix:**
1. Increase shadow opacity to 0.08-0.10
2. Add border for additional depth

### Issue: Gradients look muddy
**Cause:** Too many colors or wrong opacity
**Fix:**
1. Use 2-color gradients max
2. Use low opacity (5-10%) for backgrounds
3. Use full opacity for text gradients

### Issue: Hover states not visible
**Cause:** Hover color too similar to default
**Fix:**
1. Use darker variant for hover
2. Add shadow change for additional feedback
3. Use border color change

### Issue: Focus rings not visible
**Cause:** Ring color too light on white background
**Fix:**
```tsx
className="focus:ring-2 focus:ring-primary/20 focus:ring-offset-2"
```

### Issue: Animations feel jerky
**Cause:** Missing transitions or wrong easing
**Fix:**
```tsx
className="transition-all duration-300 ease-in-out"
```

---

**Phase Status:** ⏳ Ready to start (can run parallel with Phase 3)
**Estimated Completion:** 1 hour
**Blocks:** Phase 5 (Testing)
