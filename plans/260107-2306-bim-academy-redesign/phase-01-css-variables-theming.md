---
title: "Phase 1 - CSS Variables & Theming Migration"
description: "Migrate color palette from VS Code IDE to ClaudeKit Coral/Bronze theme"
priority: P1
status: pending
created: 2026-01-07
---

# Phase 1: CSS Variables & Theming Migration

## Overview

| Attribute | Value |
|-----------|-------|
| Date | 2026-01-07 |
| Duration | 2-3 hours |
| Priority | P1 (High) |
| Status | Pending |

## Context

- **Reference**: `bimacademy/app/globals.css`
- **Design Tokens**: `bimacademy/lib/design-tokens.ts`
- **Previous Phase**: Codebase Analysis
- **Next Phase**: Hero Section Redesign

## Requirements

### 1. Update CSS Variables in globals.css

Replace VS Code IDE color palette with ClaudeKit Coral/Bronze theme:

```css
/* Current (to be replaced) */
--primary: #569CD6;
--accent: #C586C6;
--chart-1: #569CD6;
--chart-2: #C586C6;
--chart-3: #C586C6;  /* Actually green #4EC9B0 */

/* New ClaudeKit theme */
--coral: #D97757;
--coral-light: #E89B7A;
--coral-dark: #B85C45;
--bronze: #D4A27F;
--bronze-light: #E0B892;
--bronze-dark: #A88565;
```

### 2. Maintain Dark Theme

Keep dark background for contrast:
```css
--background: #1E1E1E;  /* Keep existing */
--foreground: #D4D4D4;  /* Keep existing */
```

### 3. Update shadcn Variable Mappings

```css
--primary: #D97757;           /* Coral - primary actions */
--primary-foreground: #FFFFFF;
--accent: #D4A27F;            /* Bronze - secondary actions */
--accent-foreground: #FFFFFF;
--ring: #D97757;              /* Focus ring - coral */
```

### 4. Add ClaudeKit Utility Classes

```css
@layer utilities {
  /* Gradient text */
  .text-gradient-coral-bronze {
    background: linear-gradient(to right, #D97757, #D4A27F);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  /* Icon background with circular gradient */
  .icon-bg-coral {
    background: radial-gradient(circle, rgba(217, 119, 87, 0.15) 0%, transparent 70%);
  }

  .icon-bg-bronze {
    background: radial-gradient(circle, rgba(212, 162, 127, 0.15) 0%, transparent 70%);
  }

  /* Card hover border effects */
  .card-hover-border {
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  }
  .card-hover-border:hover {
    border-color: rgba(217, 119, 87, 0.5);
    box-shadow: 0 0 20px rgba(217, 119, 87, 0.15);
  }

  /* Coral glow */
  .glow-coral {
    box-shadow: 0 0 20px rgba(217, 119, 87, 0.5);
  }

  /* Bronze glow */
  .glow-bronze {
    box-shadow: 0 0 20px rgba(212, 162, 127, 0.5);
  }
}
```

### 5. Update design-tokens.ts

Add new color definitions:
```typescript
export const colors = {
  // ... existing IDE colors (keep for fallback)

  // ClaudeKit Theme
  claudekit: {
    coral: {
      primary: '#D97757',
      light: '#E89B7A',
      dark: '#B85C45',
    },
    bronze: {
      primary: '#D4A27F',
      light: '#E0B892',
      dark: '#A88565',
    },
  },

  // Updated semantic mappings
  semantic: {
    primary: '#D97757',      // Coral
    secondary: '#D4A27F',    // Bronze
    success: '#4EC9B0',      // Keep green for success
    warning: '#DCDCAA',      // Keep yellow
    error: '#F48771',        // Keep red
  },
};
```

### 6. Update Tailwind Theme Config

```typescript
@theme inline {
  --color-primary: var(--coral);
  --color-primary-foreground: #FFFFFF;
  --color-accent: var(--bronze);
  --color-accent-foreground: #FFFFFF;
  --color-ring: var(--coral);

  /* Gradient colors for text */
  --color-gradient-coral: #D97757;
  --color-gradient-bronze: #D4A27F;
}
```

## Implementation Steps

1. **Backup current globals.css** and design-tokens.ts
2. **Update CSS variables** in globals.css for new palette
3. **Add utility classes** for gradient text, icon backgrounds, card hovers
4. **Update design-tokens.ts** with new color definitions
5. **Update shadcn mappings** to use new primary/accent colors
6. **Add Tailwind theme extensions** for gradient colors
7. **Test component rendering** across all sections

## Success Criteria

- [ ] All primary buttons use Coral (#D97757)
- [ ] All secondary elements use Bronze (#D4A27F)
- [ ] Gradient text applies correctly with `from-coral to-bronze`
- [ ] Icon backgrounds show circular gradient effect
- [ ] Cards have hover border color transition
- [ ] Glow effects use coral/bronze colors
- [ ] No breaking changes to component functionality
- [ ] Dark theme background maintained

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Color contrast issues | Medium | Low | Test accessibility after changes |
| Component breakage | High | Low | Test each component incrementally |
| Tailwind config errors | Medium | Low | Validate CSS syntax before commit |

## Files to Modify

- `bimacademy/app/globals.css` - CSS variables & utilities
- `bimacademy/lib/design-tokens.ts` - Color definitions
- `bimacademy/app/layout.tsx` - Clerk appearance (optional update)

## Testing Checklist

- [ ] Run lint: `npm run lint`
- [ ] Verify CSS compilation: `npm run build`
- [ ] Check accessibility contrast ratios
- [ ] Test on multiple screen sizes
