---
title: "Dark to Light Theme Transformation - BIM Developer Academy"
description: "Complete transformation from dark theme (coral/bronze) to modern light theme (orange-red/ocean-blue/teal) with WCAG AAA compliance"
status: pending
priority: P1
effort: 12h
branch: main
tags: [theme, ui, accessibility, redesign]
created: 2026-01-29
---

## Overview

Complete transformation of BIM Developer Academy website from dark theme to modern light theme with user-approved color palette. This is a complete replacement, not a dual-theme system.

**Theme Colors (User Approved):**
- **Background:** Pure white #FFFFFF
- **Primary Accent:** Vibrant orange-red #E85D04 (CTAs, primary buttons, key highlights)
- **Secondary Accent:** Ocean blue #0077B6 (secondary actions, links, informational elements)
- **Tertiary Accent:** Teal #2A9D8F (success states, features, complementary elements)
- **Text:** Near black #1A1A1A (headings), #374151 (body text)
- **Subtle backgrounds:** #F9FAFB, #F3F4F6
- **Borders:** #E5E7EB (subtle gray borders)
- **Cards:** White #FFFFFF with subtle shadow

**Accessibility Target:** WCAG AAA (7:1 contrast) for educational content

## Research Context

This plan is based on comprehensive research:

1. **[Light Theme Best Practices](research/researcher-01-light-theme-best-practices.md)** - WCAG AAA compliance, color psychology, accessibility guidelines
2. **[Tailwind CSS Patterns](research/researcher-02-tailwind-light-theme-patterns.md)** - CSS variables, shadow treatments, gradient adaptations

## Current State Analysis

**Existing Theme (Dark):**
- Background: #1A1A1A (near black)
- Primary: Coral #D97757
- Secondary: Bronze #D4A27F
- Foreground: #FAFAFA (off-white)
- Heavy glow effects, strong shadows

**Key Findings:**
- 16 files with hardcoded color values using `bg-[#]`, `text-[#]`, `border-[#]` syntax
- CSS variables in `app/globals.css` (lines 53-118)
- Custom utility classes for glow effects that don't translate to light theme
- Gradient text utilities need complete replacement

## Implementation Phases

### Phase 1: CSS Variables Foundation (2h)
**Status:** Pending
**File:** [phase-01-css-variables-foundation.md](phase-01-css-variables-foundation.md)
**Priority:** Critical - blocks all other phases

**Deliverables:**
- Complete CSS variable replacement in `app/globals.css`
- WCAG AAA compliant color values
- Remove dark theme-specific variables
- Add light theme scrollbar styles

### Phase 2: Component Updates (4h)
**Status:** Pending
**File:** [phase-02-component-updates.md](phase-02-component-updates.md)
**Priority:** High - core UI elements

**Deliverables:**
- Update all `components/ui/*` components (shadcn/radix)
- Update `components/layout/*` components
- Update `components/bim/*` components
- Update `components/auth/*` components
- Replace glow effects with border + shadow system

### Phase 3: Page & Section Updates (4h)
**Status:** Pending
**File:** [phase-03-page-updates.md](phase-03-page-updates.md)
**Priority:** High - visible user-facing pages

**Deliverables:**
- Update all `components/sections/*` components
- Update `app/page.tsx` (landing page)
- Update `app/courses/*` pages
- Update `app/bimspeed-promo/*` pages
- Fix hardcoded color values in 16 files

### Phase 4: Visual Effects Adjustments (1h)
**Status:** Pending
**File:** [phase-04-visual-effects-adjustments.md](phase-04-visual-effects-adjustments.md)
**Priority:** Medium - polish and refinement

**Deliverables:**
- Remove heavy glow effects
- Implement subtle shadow system
- Update gradient utilities for light backgrounds
- Adjust hover/focus states for light theme
- Fix skeleton loading animations

### Phase 5: Testing & Validation (1h)
**Status:** Pending
**File:** [phase-05-testing-validation.md](phase-05-testing-validation.md)
**Priority:** Critical - quality assurance

**Deliverables:**
- WCAG AAA contrast validation (WebAIM checker)
- Lighthouse accessibility audit (target: 100)
- Visual regression testing
- Print stylesheet validation
- Cross-browser testing

## Dependencies

```
Phase 1 (Foundation)
  ↓
Phase 2 (Components) ← Phase 1 required
  ↓
Phase 3 (Pages) ← Phase 2 required
  ↓
Phase 4 (Visual Effects) ← Can run parallel with Phase 3
  ↓
Phase 5 (Testing) ← All previous phases required
```

## Risk Assessment

### High Risk Areas
1. **Hardcoded colors in 16 files** - manual replacement required
2. **Glow effects don't translate** - complete redesign needed
3. **Contrast compliance** - ocean blue (#0077B6) and teal (#2A9D8F) need dark variants for text
4. **Visual hierarchy collapse** - white-on-white needs borders + shadows

### Mitigation Strategies
1. Use Grep to find all color usages before starting
2. Create darker variants: #005F92 (ocean blue), #207A6E (teal)
3. Implement border-first approach for card separation
4. Test contrast at each phase, don't wait until end

## Success Criteria

### Accessibility Metrics
- ✅ 100% text meets WCAG AAA (7:1 contrast)
- ✅ 100% interactive elements meet WCAG AA (4.5:1)
- ✅ Lighthouse Accessibility Score: 100
- ✅ WAVE Checker: 0 errors

### Visual Quality Metrics
- ✅ Modern, clean aesthetic suitable for educational platform
- ✅ Consistent color usage across all components
- ✅ Subtle shadows (0.05-0.07 opacity) not heavy
- ✅ Borders for card separation (#E5E7EB)

### Functional Metrics
- ✅ All existing functionality preserved
- ✅ Print stylesheet works (Cmd+P test)
- ✅ No broken layouts or responsive issues
- ✅ Smooth transitions (no jarring color shifts)

## Total Effort Estimate

**12 hours total breakdown:**
- Phase 1: 2h (CSS variables, foundation)
- Phase 2: 4h (component updates - most complex)
- Phase 3: 4h (pages and sections)
- Phase 4: 1h (visual effects polish)
- Phase 5: 1h (testing and validation)

## Prerequisites

1. ✅ Research reports completed and reviewed
2. ✅ User approves color palette (COMPLETED)
3. ⏳ Full codebase backup before starting
4. ⏳ Create feature branch: `feat/light-theme-transformation`
5. ⏳ Staging environment ready for testing

## Next Steps

1. **Start Phase 1:** Update CSS variables in `app/globals.css`
2. **Create backup:** Commit current state to git before changes
3. **Feature branch:** Create `feat/light-theme-transformation` branch
4. **Follow phases sequentially:** Each phase builds on previous
5. **Test continuously:** Don't wait until Phase 5 for validation

## Unresolved Questions

1. **Brand alignment:** Does orange-red #E85D04 align with Revit API/Autodesk brand guidelines?
2. **User migration:** Should light theme be default or opt-in? Consider A/B testing.
3. **Glow replacement:** Confirm border + shadow approach meets design requirements
4. **Print requirements:** Are users printing course materials? Critical if yes.
5. **Color blindness:** Need simulation testing for deuteranopia/protanopia

## References

- [WCAG 2.2 Contrast Requirements](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Tailwind CSS Dark Mode Documentation](https://tailwindcss.com/docs/dark-mode)

---

**Plan Status:** ✅ Ready for implementation
**Last Updated:** 2026-01-29
**Owner:** Development Team
