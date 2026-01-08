---
title: "Course Detail Page UI Improvements"
description: "Polish and enhance course detail page UI with refined styling, animations, and responsive design while maintaining coral/bronze/gold theme"
status: pending
priority: P2
effort: 3h
branch: main
tags: [ui, frontend, course-page, polish]
created: 2026-01-08
---

# Course Detail Page UI Improvements

## Overview

Refine and enhance 3 core components of the course detail page with improved visual hierarchy, smooth animations, better responsive design, and refined styling while maintaining the existing coral/bronze/gold theme.

**Target Components:**
1. `course-page.tsx` - Main layout (2-column grid)
2. `video-preview.tsx` - Video player card
3. `course-header.tsx` - Title + metadata

**Status:** Planning complete - awaiting review

---

## Implementation Phases

| Phase | Status | Progress |
|-------|--------|----------|
| [Phase 1: VideoPreview Polish](./phase-01-video-preview-polish.md) | pending | - |
| [Phase 2: CourseHeader Enhancement](./phase-02-course-header-enhancement.md) | pending | - |
| [Phase 3: CoursePage Layout Refinement](./phase-03-course-page-layout.md) | pending | - |

---

## Quick Reference

- **Theme:** Coral (#D97757), Bronze (#D4A27F), Gold (#F59E0B)
- **Font:** Inter with dark background (#0F0F0F)
- **Utilities:** `glow-coral`, `hover-lift`, `hover-border-coral`
- **Responsive:** Mobile-first with lg breakpoint for 2-column layout

## Related Files

- `bimacademy/components/course/course-page.tsx`
- `bimacademy/components/course/video-preview.tsx`
- `bimacademy/components/course/course-header.tsx`
- `bimacademy/app/globals.css`
