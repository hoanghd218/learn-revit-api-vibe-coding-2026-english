---
title: "BIM Academy Landing Page Redesign - ClaudeKit Style"
description: "Complete redesign of BIM Academy landing page with ClaudeKit Coral/Bronze color scheme"
status: pending
priority: P1
effort: 12-16 hours
branch: main
tags: [redesign, bimakademy, claudekit, tailwind, css]
created: 2026-01-07
---

# BIM Academy Landing Page Redesign Plan

## Overview

Redesign the BIM Academy landing page to adopt the ClaudeKit visual style while maintaining functionality. Key changes include migrating from VS Code IDE blue/purple palette to ClaudeKit Coral (#D97757) and Bronze (#D4A27F) color scheme.

## Background

Current landing page uses VS Code / Dark IDE aesthetic with:
- Primary color: #569CD6 (syntax blue)
- Accent color: #C586C6 (syntax purple)
- Background: #1E1E1E (dark)

Target ClaudeKit style:
- Primary: #D97757 (coral)
- Secondary: #D4A27F (bronze)
- Background: Keep dark theme (#1E1E1E)

## Scope

### In Scope
- CSS variables and Tailwind theming migration
- Hero section redesign
- Pain Points section redesign
- Curriculum section redesign
- Student Projects section redesign
- Tech Stack section redesign
- Instructor section redesign
- Header component updates
- Footer component creation

### Out of Scope
- Layout structure changes
- Content text updates
- New section creation
- Animation logic changes

## ClaudeKit Design Specifications

| Element | ClaudeKit Style |
|---------|-----------------|
| **Color Scheme** | Dark theme, Coral (#D97757) primary, Bronze (#D4A27F) secondary |
| **Gradient Text** | `bg-gradient-to-r from-coral to-bronze` |
| **Icon Backgrounds** | Circular gradients with low opacity |
| **Cards** | Rounded corners, subtle borders, hover border effects |
| **Layout** | Container-based, `max-w-6xl`, `py-16` padding |
| **Glow Effects** | Coral and Bronze colored shadows |

## Phases

### Phase 1: CSS Variables & Theming Migration
**Duration**: 2-3 hours | **Priority**: P1

Update CSS variables, add utility classes, and migrate design tokens to new palette.

### Phase 2: Hero Section Redesign
**Duration**: 3-4 hours | **Priority**: P1

Update headline gradient, CTA buttons, trust indicators, and background effects.

### Phase 3: Content Sections Redesign
**Duration**: 6-8 hours | **Priority**: P2

Update Pain Points, Curriculum, Student Projects, Tech Stack, and Instructor sections with new color scheme.

### Phase 4: Header & Footer Redesign
**Duration**: 3-4 hours | **Priority**: P2

Update header styling and create new footer component.

## Success Criteria

### Design Consistency
- [ ] All primary actions use Coral (#D97757)
- [ ] All secondary elements use Bronze (#D4A27F)
- [ ] Gradient text applies correctly with coral-to-bronze
- [ ] Icon backgrounds show circular gradient effect
- [ ] Cards have hover border color transitions
- [ ] Glow effects use coral/bronze colors

### Layout Standards
- [ ] All sections use consistent `py-16` padding
- [ ] Container uses `max-w-6xl` standard
- [ ] Dark theme background maintained

### Functionality
- [ ] All navigation links work correctly
- [ ] Scroll animations remain functional
- [ ] No breaking changes to component behavior
- [ ] Mobile responsive layout maintained

## File Changes Summary

| File | Action | Description |
|------|--------|-------------|
| `bimacademy/app/globals.css` | Modify | CSS variables, utility classes |
| `bimacademy/lib/design-tokens.ts` | Modify | Color definitions update |
| `bimacademy/components/sections/hero-section.tsx` | Modify | Hero redesign |
| `bimacademy/components/sections/pain-points-section.tsx` | Modify | Pain Points redesign |
| `bimacademy/components/sections/curriculum-section.tsx` | Modify | Curriculum redesign |
| `bimacademy/components/sections/student-projects-section.tsx` | Modify | Student Projects redesign |
| `bimacademy/components/sections/tech-stack-section.tsx` | Modify | Tech Stack redesign |
| `bimacademy/components/sections/instructor-section.tsx` | Modify | Instructor redesign |
| `bimacademy/components/layout/header.tsx` | Modify | Header styling update |
| `bimacademy/components/layout/footer.tsx` | Create | New footer component |

## Dependencies

1. Phase 1 must complete before Phase 2-4
2. Phase 2-3 can run in parallel after Phase 1
3. Phase 4 can run in parallel after Phase 1

## Testing Strategy

1. **Unit Testing**: Component rendering verification
2. **Visual Testing**: Screenshot comparison for layout changes
3. **Responsive Testing**: Mobile, tablet, desktop layouts
4. **Accessibility Testing**: Color contrast verification
5. **Performance Testing**: CSS bundle size verification

## Rollback Plan

If issues arise:
1. Revert globals.css and design-tokens.ts to backup
2. Revert each component file individually
3. Run full test suite to verify恢复

## Next Steps

1. Review and approve plan
2. Execute Phase 1: CSS Variables & Theming
3. Execute Phase 2-4 in parallel
4. Complete testing and validation
5. Deploy changes
