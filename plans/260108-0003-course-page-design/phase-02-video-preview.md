---
title: "Phase 2: Video Preview Component"
description: "Create 16:9 video card with overlay badges and YouTube-style play button"
status: pending
priority: P1
effort: 1.5h
created: 2026-01-08
review_status: pending
---

# Context
- **Parent Plan**: [Course Detail Page Design](../plan.md)
- **Dependencies**: [Phase 1: Data Layer & Types](./phase-01-data-layer.md)
- **Related Docs**: [Research: CSS Sticky Sidebar](../../research/researcher-260108-0004-css-sticky-sidebar.md)

# Overview
| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Create VideoPreview component with 16:9 aspect ratio, play button, and overlay badges |
| Priority | P1 |
| Status | pending |
| Review Status | pending |

# Key Insights
- Use CSS `aspect-video` (16:9) for responsive ratio
- Play button: YouTube-style red circle with white triangle
- Overlay badges: EP.01 (corner), INTRO GUIDE, COMFYUI logo
- Background: #0F172A (dark slate)
- Existing video-section.tsx uses iframe with 16:9 wrapper pattern

# Requirements
1. 16:9 aspect ratio container
2. Large thumbnail image (or gradient fallback)
3. Center play button (YouTube-style)
4. Overlay badges: EP.01, INTRO GUIDE, COMFYUI
5. Course title below video
6. Metadata row: instructor, duration, Premium badge
7. Responsive (mobile: full width, desktop: 70%)

# Architecture
```
@/components/course/
├── video-preview.tsx    # Main video card component
├── course-header.tsx    # Title + metadata row
└── badges.tsx           # Badge components (PRO, Free, Premium)
```

# Related Code Files
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/components/sections/video-section.tsx` - Existing video pattern
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/components/ui/badge.tsx` - Existing badge component
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/hooks/use-scroll-animation.ts` - Animation hook

# Implementation Steps
1. Create `@/components/course/video-preview.tsx`:
   - Props: `Course` type
   - Container with `aspect-video` class
   - Thumbnail image with fallback gradient
   - Play button (absolute center, hover scale)
   - Overlay badges positioned absolutely
   - Course title with `text-xl font-bold`
   - Metadata row with icons (lucide-react)
2. Create `@/components/course/course-header.tsx`:
   - Title component
   - Metadata row with instructor avatar, duration icon, Premium badge
3. Create/use badge variants:
   - PRO: red background (#EF4444)
   - Free/Miễn phí: blue background (#3B82F6)
   - Premium: gold background (#F59E0B)
4. Add CSS variables for purple/gold colors to globals.css

# Todo List
- [ ] Create video-preview.tsx with 16:9 aspect ratio
- [ ] Add play button with hover effect
- [ ] Add overlay badges (EP.01, INTRO GUIDE, COMFYUI)
- [ ] Create course-header.tsx for title + metadata
- [ ] Add Premium gold badge component
- [ ] Add CSS variables (#7C3AED, #F59E0B) to globals.css
- [ ] Test responsive behavior

# Success Criteria
- Video card displays at 16:9 ratio
- Play button appears centered with hover effect
- Overlay badges render correctly
- Course title and metadata display below video
- Premium badge visible
- Responsive: full width on mobile, scaled on desktop

# Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Thumbnail loading | Medium | Low | Add skeleton/placeholder |
| Icon sizing | Low | Low | Use consistent lucide sizes |

# Security Considerations
- Sanitize any HTML in course title
- Use proper img `alt` attributes

# Next Steps
Proceed to [Phase 3: Curriculum Components](./phase-03-curriculum-components.md)
