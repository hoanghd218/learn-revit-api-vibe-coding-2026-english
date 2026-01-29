---
title: "Phase 1: CSS Variables Foundation"
description: "Replace all CSS variables with light theme colors, WCAG AAA compliant"
status: pending
priority: P1
effort: 2h
branch: feat/light-theme-transformation
tags: [css, variables, foundation]
created: 2026-01-29
---

## Context Links

- **Research:** [Light Theme Best Practices](../research/researcher-01-light-theme-best-practices.md)
- **Research:** [Tailwind CSS Patterns](../research/researcher-02-tailwind-light-theme-patterns.md)
- **Dependencies:** None (first phase)
- **Blocks:** Phase 2, Phase 3, Phase 4

## Overview

**Date:** 2026-01-29
**Description:** Complete replacement of CSS variables in `app/globals.css` from dark theme (coral/bronze) to light theme (orange-red/ocean-blue/teal) with WCAG AAA compliance.

**Priority:** CRITICAL - This phase must be completed before any component updates can begin.

## Key Insights from Research

### WCAG AAA Compliance Requirements
- Normal text (16px): **7:1 contrast ratio** required
- Large text (24px+): **4.5:1 contrast ratio** required
- Current body text #FAFAFA on white = FAILS (1.2:1)

### Color Contrast Analysis
| Color | White Text Contrast | Status | Solution |
|-------|-------------------|--------|----------|
| #E85D04 (orange-red) | 4.1:1 | ⚠️ AA only | Use with dark text for body, white for large text |
| #0077B6 (ocean blue) | 3.8:1 | ❌ FAILS | Use #005F92 for white text |
| #2A9D8F (teal) | 3.5:1 | ❌ FAILS | Use #207A6E for white text |

### Light Theme Shadow System
- Dark theme: Heavy shadows (0.3-0.5 opacity)
- Light theme: Subtle shadows (0.05-0.07 opacity)
- Use borders + shadows for depth, not shadows alone

## Requirements

### Must Complete
1. ✅ Replace all `:root` CSS variables with light theme colors
2. ✅ Remove `.dark` class block (no dual theme)
3. ✅ Add darker variants for accessibility
4. ✅ Update scrollbar styles for light theme
5. ✅ Remove all glow effect utilities
6. ✅ Test contrast ratios with WebAIM checker

### Must Not Break
1. ❌ Don't remove CSS variable names (only change values)
2. ❌ Don't break Tailwind CSS variable mapping
3. ❌ Don't remove utility classes that components depend on
4. ❌ Don't change font families or spacing

## Architecture

### File Structure
```
app/globals.css
  ├── @import statements (keep)
  ├── @theme inline (keep variable mapping)
  ├── :root (REPLACE all values)
  ├── .dark (REMOVE entire block)
  ├── @layer base (update scrollbar)
  └── @layer utilities (REPLACE glow utilities)
```

### Variable Naming Strategy
**KEEP existing names, CHANGE values:**
- `--coral-accent` → `--orange-red-accent` (#E85D04)
- `--bronze-accent` → `--ocean-blue-accent` (#0077B6)
- Add: `--teal-accent` (#2A9D8F)
- Add: `--ocean-blue-dark` (#005F92) for text
- Add: `--teal-dark` (#207A6E) for text

## Related Code Files

### Primary Files
- `app/globals.css` - Lines 53-118 (CSS variables), Lines 120-123 (dark mode), Lines 139-311 (utilities)

### Secondary Files (will be updated in Phase 2)
- `components/ui/*` - All shadcn components using CSS variables
- `components/layout/*` - Header, footer using CSS variables

### No Changes Required
- Tailwind config (no theme configuration, uses CSS variables)
- Package.json (no new dependencies)

## Implementation Steps

### Step 1: Backup Current State (5 min)
```bash
git add app/globals.css
git commit -m "backup: dark theme CSS variables before light theme transformation"
```

### Step 2: Replace :root Variables (30 min)

**Update `app/globals.css` lines 53-118:**

```css
:root {
  /* === Light Theme Foundation === */
  --background: #FFFFFF;              /* Pure white background */
  --foreground: #1A1A1A;              /* Near black text - WCAG AAA ✅ */

  /* Cards & Popovers */
  --card: #FFFFFF;                    /* White cards */
  --card-foreground: #1A1A1A;         /* Near black text */
  --popover: #FFFFFF;                 /* White popovers */
  --popover-foreground: #1A1A1A;      /* Near black text */

  /* Primary Accent: Orange-Red #E85D04 */
  --primary: #E85D04;                 /* Orange-red - primary accent */
  --primary-foreground: #FFFFFF;      /* White text (large text only) */
  --primary-hover: #D74E00;           /* Darker variant for hover */

  /* Secondary */
  --secondary: #F3F4F6;               /* Light gray for sections */
  --secondary-foreground: #1A1A1A;    /* Near black text */

  /* Muted Colors */
  --muted: #F9FAFB;                   /* Very light gray */
  --muted-foreground: #6B7280;        /* Medium gray - WCAG AA (5.7:1) */

  /* Accent: Ocean Blue #0077B6 */
  --accent: #0077B6;                  /* Ocean blue - decorative only */
  --accent-foreground: #1A1A1A;       /* Dark text on light blue backgrounds */
  --accent-hover: #005F92;            /* Darker variant for text overlays - WCAG AA ✅ */

  /* Destructive: Red */
  --destructive: #DC2626;
  --destructive-foreground: #FFFFFF;

  /* Borders & Inputs */
  --border: #E5E7EB;                  /* Subtle gray border */
  --input: #E5E7EB;                   /* Same as border */
  --ring: #E85D04;                    /* Focus ring - orange-red */

  /* Chart Colors - Orange-Red/Ocean-Blue/Teal Palette */
  --chart-1: #E85D04;                /* Orange-red */
  --chart-2: #0077B6;                /* Ocean blue */
  --chart-3: #2A9D8F;                /* Teal */
  --chart-4: #F59E0B;                /* Gold/amber */
  --chart-5: #10B981;                /* Emerald green */

  /* Border Radius */
  --radius: 0.5rem;

  /* Sidebar */
  --sidebar: #FFFFFF;                /* White sidebar */
  --sidebar-foreground: #1A1A1A;     /* Near black text */
  --sidebar-primary: #E85D04;        /* Orange-red */
  --sidebar-primary-foreground: #FFFFFF;
  --sidebar-accent: #F3F4F6;         /* Light gray */
  --sidebar-accent-foreground: #1A1A1A;
  --sidebar-border: #E5E7EB;         /* Subtle border */
  --sidebar-ring: #E85D04;           /* Orange-red focus */

  /* Font Families */
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'Fira Code', 'Consolas', 'Monaco', 'Courier New', monospace;

  /* === Accent Color Variables (Renamed for Clarity) === */
  --orange-red-accent: #E85D04;           /* Primary CTA color */
  --orange-red-accent-hover: #D74E00;     /* Darker hover state */
  --orange-red-accent-light: #FFF0E6;     /* Background variant */

  --ocean-blue-accent: #0077B6;           /* Secondary accent */
  --ocean-blue-accent-dark: #005F92;      /* Text overlay variant - WCAG AA ✅ */
  --ocean-blue-accent-light: #E0F2FE;     /* Background variant */

  --teal-accent: #2A9D8F;                /* Tertiary accent */
  --teal-accent-dark: #207A6E;           /* Text overlay variant - WCAG AA ✅ */
  --teal-accent-light: #E6F7F5;          /* Background variant */

  /* === Semantic Colors === */
  --color-success: #2A9D8F;              /* Teal for success */
  --color-success-light: #E6F7F5;
  --color-warning: #E85D04;              /* Orange-red for warning */
  --color-warning-light: #FFF0E6;
  --color-error: #DC2626;                /* Red for error */
  --color-error-light: #FEE2E2;
  --color-info: #0077B6;                 /* Ocean blue for info */
  --color-info-light: #E0F2FE;

  /* === Course Page Specific === */
  --purple-primary: #7C3AED;
  --purple-light: #8B5CF6;
  --purple-dark: #6D28D9;
  --gold-accent: #F59E0B;
  --gold-light: #FBBF24;
  --gold-dark: #D97706;
  --video-bg: #F9FAFB;                  /* Light gray for video bg */
  --panel-bg: #FFFFFF;                  /* White panels */
  --pro-badge: #E85D04;                 /* Orange-red */
  --free-badge: #0077B6;                /* Ocean blue */
  --premium-badge: #F59E0B;             /* Gold */

  /* === Section Backgrounds === */
  --section-light: #FFFFFF;             /* Pure white */
  --section-gray: #F9FAFB;              /* Very light gray */
  --section-alt: #F3F4F6;               /* Light gray */
}
```

### Step 3: Remove Dark Mode Block (5 min)

**Remove lines 120-123 in `app/globals.css`:**
```css
/* DELETE THIS ENTIRE BLOCK */
.dark {
  /* Dark theme is default, no changes needed */
}
```

### Step 4: Update Scrollbar Styles (20 min)

**Replace lines 280-294 in `app/globals.css`:**

```css
/* Light theme scrollbar */
.custom-scrollbar::-webkit-scrollbar {
  width: 6px;  /* Slightly wider for visibility on light bg */
}
.custom-scrollbar::-webkit-scrollbar-track {
  background: #F3F4F6;  /* Light gray track */
}
.custom-scrollbar::-webkit-scrollbar-thumb {
  background: #D1D5DB;  /* Medium gray thumb */
  border-radius: 10px;
  transition: background 0.3s ease;
}
.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background: #E85D04;  /* Orange-red on hover */
}
```

**Add global scrollbar styles in `@layer base`:**

```css
/* After line 136 in @layer base */
/* Global scrollbar for light theme */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #F9FAFB;
}

::-webkit-scrollbar-thumb {
  background: #D1D5DB;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #9CA3AF;
}
```

### Step 5: Replace Glow Utilities (30 min)

**Remove lines 148-181 in `app/globals.css` (glow effects):**

```css
/* DELETE THESE UTILITIES */
.glow-coral { ... }
.glow-coral-lg { ... }
.glow-bronze { ... }
.hover-border-coral { ... }
```

**Replace with shadow + border utilities:**

```css
/* Add after line 138 in @layer utilities */
/* === Light Theme Shadow System === */
.shadow-light {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.shadow-light-md {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.06);
}

.shadow-light-lg {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
}

/* Card with border + shadow */
.card-light {
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  transition: box-shadow 200ms ease, border-color 200ms ease;
}

.card-light:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07);
  border-color: #E85D04;  /* Orange-red border on hover */
}

/* Button hover shadow for light theme */
.button-hover-shadow {
  transition: box-shadow 200ms ease;
}

.button-hover-shadow:hover {
  box-shadow: 0 4px 6px rgba(232, 93, 4, 0.15);  /* Subtle orange-red shadow */
}
```

### Step 6: Update Gradient Utilities (10 min)

**Replace lines 140-146 in `app/globals.css`:**

```css
/* Gradient text - orange-red to ocean-blue */
.text-gradient {
  background: linear-gradient(to right, #E85D04, #0077B6);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Icon background - subtle gradient */
.icon-bg-gradient {
  background: linear-gradient(
    to bottom right,
    rgba(232, 93, 4, 0.1),
    rgba(0, 119, 182, 0.05)
  );
}
```

### Step 7: Update Skeleton Animation (10 min)

**Replace lines 260-278 in `app/globals.css`:**

```css
/* Skeleton shimmer for light theme */
@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

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

### Step 8: Validate & Test (30 min)

**Manual Testing Checklist:**
1. ✅ Load homepage in browser - verify white background
2. ✅ Check text contrast - should be dark on light
3. ✅ Test scrollbar - should be light gray
4. ✅ Check DevTools - verify CSS variable values
5. ✅ Test WebAIM Contrast Checker on key color combinations:
   - #1A1A1A on #FFFFFF (17.4:1) ✅ AAA
   - #374151 on #FFFFFF (10.5:1) ✅ AAA
   - #6B7280 on #FFFFFF (5.7:1) ✅ AA
   - #E85D04 on #FFFFFF (4.1:1) ✅ AA
   - #005F92 on #FFFFFF (5.8:1) ✅ AA
   - #207A6E on #FFFFFF (4.8:1) ✅ AA

**Automated Testing:**
```bash
# Run linter to ensure no syntax errors
npm run lint
# Or if using next lint
npx next lint
```

## Todo List

- [ ] Backup current `app/globals.css` to git
- [ ] Replace `:root` CSS variables (lines 53-118)
- [ ] Remove `.dark` class block (lines 120-123)
- [ ] Update scrollbar styles (lines 280-294)
- [ ] Remove glow utilities (lines 148-181)
- [ ] Add shadow + border utilities
- [ ] Update gradient utilities (lines 140-146)
- [ ] Update skeleton animation (lines 260-278)
- [ ] Add global scrollbar styles in `@layer base`
- [ ] Manual browser testing
- [ ] WebAIM contrast validation
- [ ] Commit changes with descriptive message

## Success Criteria

### Must Complete
- ✅ All CSS variables updated to light theme colors
- ✅ No dark theme variables remain
- ✅ `.dark` class block removed
- ✅ Glow effects replaced with shadows
- ✅ Scrollbar styles updated for light theme
- ✅ All text colors meet WCAG AAA (7:1) or AA (4.5:1)

### Must Not Break
- ✅ No CSS syntax errors (browser DevTools clean)
- ✅ Tailwind variable mapping intact
- ✅ Utility classes still functional
- ✅ No layout shifts (page structure unchanged)

### Validation Evidence
- ✅ Screenshot of homepage showing white background
- ✅ WebAIM contrast checker results (all pass)
- ✅ Git commit showing clean diff
- ✅ Console showing no CSS errors

## Risk Assessment

### High Risk
1. **Breaking variable references** - If components use hardcoded old values
   - **Mitigation:** Search for `#D97757`, `#D4A27F` before starting
2. **Contrast compliance failures** - If text too light on white
   - **Mitigation:** Test every color combination with WebAIM
3. **Missing dark variants** - If ocean-blue/teal used for white text
   - **Mitigation:** Added `--ocean-blue-accent-dark` and `--teal-accent-dark`

### Medium Risk
1. **Scrollbar visibility** - Light thumb on light track hard to see
   - **Mitigation:** Use #D1D5DB (medium gray) for thumb
2. **Glow removal breaks hover states** - Components depend on `.glow-coral`
   - **Mitigation:** Replace with `.button-hover-shadow` utility

### Low Risk
1. **Skeleton animation looks wrong** - Shimmer too subtle on light bg
   - **Mitigation:** Increased contrast in gradient stops

## Security Considerations

None - CSS variable changes don't affect security.

## Next Steps

After completing this phase:

1. **Phase 2:** Update all `components/ui/*` components to use new variables
2. **Phase 3:** Update pages and sections
3. **Phase 4:** Refine visual effects
4. **Phase 5:** Comprehensive testing

**CRITICAL:** Do not proceed to Phase 2 until:
- ✅ All CSS variables validated
- ✅ Contrast ratios verified
- ✅ Manual testing complete
- ✅ Changes committed to git

## Troubleshooting

### Issue: Page still shows dark colors
**Cause:** Browser cache or CSS not reloaded
**Fix:** Hard refresh (Cmd+Shift+R) and check DevTools Network tab

### Issue: Text unreadable on white background
**Cause:** `--foreground` variable not updated
**Fix:** Verify `--foreground: #1A1A1A` in `:root`

### Issue: Components still have glow effects
**Cause:** Components using inline styles or different class names
**Fix:** Search for `box-shadow` and `glow` in component files (Phase 2)

### Issue: Scrollbar invisible
**Cause:** Thumb color too light
**Fix:** Adjust `::-webkit-scrollbar-thumb` to darker gray (#9CA3AF)

---

**Phase Status:** ⏳ Ready to start
**Estimated Completion:** 2 hours
**Blocks:** Phase 2 (Component Updates)
