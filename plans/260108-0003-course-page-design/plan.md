---
title: "Course Detail Page Design"
description: "2-column course page with video preview and accordion curriculum panel"
status: pending
priority: P2
effort: 6h
branch: main
tags: [course-page, ui, react, accordion, video-player]
created: 2026-01-08
---

# Course Detail Page Implementation Plan

## Overview
Design and implement a course detail page at `/bimacademy/app/courses/[courseId]/page.tsx` with 2-column layout, video preview, and accordion curriculum panel.

## Phases
| Phase | Status | Progress |
|-------|--------|----------|
| [Phase 1: Data Layer & Types](./phase-01-data-layer.md) | completed | ✅ |
| [Phase 2: Video Preview Component](./phase-02-video-preview.md) | completed | ✅ |
| [Phase 3: Curriculum Components](./phase-03-curriculum-components.md) | completed | ✅ |
| [Phase 4: Course Page Layout](./phase-04-course-page-layout.md) | completed | ✅ |
| [Phase 5: Styles & Polish](./phase-05-styles-polish.md) | completed | ✅ |

## Key Decisions
1. **Accordion**: Radix UI + CSS transitions (no Framer Motion to minimize deps)
2. **Sticky**: CSS `position: sticky` with parent overflow check
3. **Theme**: Purple (#7C3AED) primary + Gold (#F59E0B) accent per design spec
4. **Animations**: Extend existing `useScrollAnimation` hook pattern
5. **Icons**: lucide-react (already in project)

## Dependencies
- `@radix-ui/react-accordion` (available in dependencies)
- `lucide-react` (existing)
- No new animation libraries needed

## Validation Summary

**Validated:** 2026-01-08
**Questions asked:** 4

### Confirmed Decisions
1. **Video player**: YouTube embed (lightweight, existing pattern)
2. **Accordion behavior**: Single expand (one section at a time, mobile-friendly)
3. **Badge colors**: Match existing coral (#D97757) / bronze (#D4A27F) theme instead of red/blue
4. **Auth gating**: Show lock icon on locked lessons

### Plan Revisions Required
- [ ] Phase 1: Update badge color constants to use coral/bronze
- [ ] Phase 2: Remove PRO red/Free blue badge definitions, use theme colors
- [ ] Phase 3: Set accordion `collapsible` prop for single expand behavior
- [ ] Phase 3: Add lock icon display logic for `isLocked` lessons
