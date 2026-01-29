# Phase 1: Color System Analysis

**Parent Plan:** [plan.md](./plan.md)

## Overview

**Date:** 2026-01-29
**Priority:** P2
**Status:** Pending
**Description:** Analyze current color system and identify improvement areas
**Implementation Status:** Not Started
**Review Status:** Not Reviewed

## Key Insights

### Current State Analysis

**Background Colors:**
- `--background: #0F0F0F` - Too dark, near-black
- `--card: #1A1A1A` - Insufficient contrast from background
- `--muted: #2A2A2A` - Blends with background
- `--popover: #242424` - Adequate but can be lighter

**Text Colors:**
- `--foreground: #FAFAFA` - Good brightness
- `--muted-foreground: #A1A1AA` - Low contrast on dark backgrounds

**Accent Colors:**
- `--primary: #D97757` (Coral) - Good, maintain
- `--accent: #D4A27F` (Bronze) - Good, maintain
- Glow effects may need adjustment for lighter backgrounds

### Problems Identified

1. **Flat Hierarchy:** Background and cards too similar in brightness
2. **Low Contrast:** Muted elements disappear
3. **Eye Strain:** #0F0F0F creates harsh contrast
4. **Depth Loss:** No clear layering
5. **Accessibility:** May fail WCAG AA standards

## Requirements

### Functional Requirements

- Increase background brightness by 10-15%
- Improve card contrast from background
- Enhance text readability
- Maintain brand identity (coral/bronze)
- Preserve existing component structure

### Non-Functional Requirements

- WCAG AA compliance (4.5:1 contrast ratio)
- Maintain performance (no additional CSS files)
- Backward compatible with existing components
- Consistent across all pages

## Architecture

### Color System Structure

```
globals.css
├── :root (CSS variables)
│   ├── Background layers (4 levels)
│   ├── Text hierarchy (3 levels)
│   ├── Accent colors (coral, bronze)
│   └── Semantic colors (success, warning, error)
└── Component utilities
    ├── Gradients
    ├── Glow effects
    └── Hover states
```

### Proposed Color Values

**Background Hierarchy:**
1. Base: #0F0F0F → **#1A1A1A** (+11%)
2. Card: #1A1A1A → **#242424** (+8%)
3. Elevated: #242424 → **#2E2E2E** (+8%)
4. Muted: #2A2A2A → **#333333** (+6%)

**Text Refinements:**
- Primary: #FAFAFA (maintain)
- Secondary: #E4E4E7 (brighten slightly)
- Muted: #A1A1AA → **#B4B4B8** (+5%)

**Border Enhancement:**
- Border: #333333 → **#404040** (better definition)

## Related Code Files

### Files to Modify

1. **`app/globals.css`** (lines 53-118)
   - Update CSS custom properties
   - Adjust color values
   - Maintain structure

2. **Component files** (if needed for contrast fixes)
   - `components/sections/hero-section.tsx`
   - `components/sections/curriculum-section.tsx`
   - `components/bim/section.tsx`

### Files to Analyze

1. **`app/page.tsx`** - Homepage layout
2. **`components/layout/header.tsx`** - Navigation
3. **Tailwind configuration** - If exists

## Implementation Steps

1. **Document Current Values**
   - List all color variables
   - Map relationships
   - Identify problem areas

2. **Calculate New Values**
   - Use HSL for brightness adjustments
   - Test contrast ratios
   - Verify WCAG compliance

3. **Create Migration Plan**
   - Order of color changes
   - Testing checkpoints
   - Rollback strategy

## Todo List

- [ ] Document all current CSS color variables
- [ ] Calculate brightness-adjusted values
- [ ] Test contrast ratios with online tools
- [ ] Verify WCAG AA compliance
- [ ] Document recommended changes
- [ ] Create comparison mockup (if needed)

## Success Criteria

- ✅ All color values documented
- ✅ New values meet WCAG AA
- ✅ Brightness increase ≥10%
- ✅ Visual hierarchy clear
- ✅ Brand identity preserved

## Risk Assessment

### Low Risk
- Color-only changes
- Non-breaking changes
- Easy rollback (git revert)

### Mitigation
- Commit before changes
- Test on multiple screens
- Get user validation

## Security Considerations

None (UI-only changes)

## Next Steps

1. Complete color analysis documentation
2. Proceed to Phase 2: Theme Variables Update
3. Test new colors in development environment
