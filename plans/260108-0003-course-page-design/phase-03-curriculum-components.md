---
title: "Phase 3: Curriculum Components"
description: "Create accordion curriculum with lesson items and sticky panel"
status: pending
priority: P1
effort: 2h
created: 2026-01-08
review_status: pending
---

# Context
- **Parent Plan**: [Course Detail Page Design](../plan.md)
- **Dependencies**: [Phase 1: Data Layer & Types](./phase-01-data-layer.md)
- **Related Docs**: [Research: React Accordion](../../research/researcher-260108-0003-react-accordion.md)

# Overview
| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Create accordion curriculum panel with lesson items, using Radix UI + CSS transitions |
| Priority | P1 |
| Status | pending |
| Review Status | pending |

# Key Insights
- Use `@radix-ui/react-accordion` (available in dependencies)
- CSS transitions for smooth expand/collapse (avoid Framer Motion bloat)
- Sticky positioning with `position: sticky; top: 24px`
- Hover effects on lesson rows
- Icons: play, clock, lock (lucide-react)

# Requirements
1. Accordion component with expand/collapse
2. Section headers with chevron indicator
3. Lesson items with thumbnail, title, duration, badge
4. PRO badge (red), Free badge (blue), Lock icon
5. Sticky right panel on scroll
6. Smooth animations
7. Skeleton loading state

# Architecture
```
@/components/course/
├── curriculum-accordion.tsx   # Radix accordion root
├── curriculum-section.tsx     # Individual section header + content
├── lesson-item.tsx            # Individual lesson row
├── curriculum-panel.tsx       # Sticky container wrapper
└── curriculum-skeleton.tsx    # Loading skeleton
```

# Related Code Files
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/components/ui/accordion.tsx` - Check if exists (shadcn pattern)
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/components/sections/curriculum-section.tsx` - Reference pattern
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/app/globals.css` - Add accordion animations

# Implementation Steps
1. Check/create `@/components/ui/accordion.tsx`:
   - Export Radix Accordion components
   - Add CSS for accordion animations
2. Create `@/components/course/curriculum-accordion.tsx`:
   - Import Radix components
   - Map through curriculum sections
   - Handle open/close state
3. Create `@/components/course/curriculum-section.tsx`:
   - Section header with title
   - Chevron icon (rotates on open)
   - Lessons container
4. Create `@/components/course/lesson-item.tsx`:
   - Props: Lesson type, isActive, isLocked
   - Thumbnail image or placeholder
   - Title text
   - Duration with clock icon
   - Badge (PRO/Free) or lock icon
   - Hover effect styling
5. Create `@/components/course/curriculum-panel.tsx`:
   - `position: sticky; top: 24px`
   - Max-height with overflow
   - White background (#FFFFFF)
   - Rounded corners (12px)
6. Create `@/components/course/curriculum-skeleton.tsx`:
   - Loading skeleton with shimmer effect
7. Add CSS animations to globals.css:
   - Accordion content expand/collapse
   - Chevron rotation
   - Hover transitions

# Todo List
- [ ] Check/create accordion UI component with Radix
- [ ] Create curriculum-accordion.tsx with sections
- [ ] Create curriculum-section.tsx with header + chevron
- [ ] Create lesson-item.tsx with hover effects
- [ ] Create curriculum-panel.tsx with sticky positioning
- [ ] Create curriculum-skeleton.tsx loading state
- [ ] Add accordion animations to globals.css
- [ ] Test expand/collapse smooth animation

# Success Criteria
- Accordion sections expand/collapse smoothly
- Chevron icon rotates on open/close
- Lesson items show hover effects
- Right panel stays sticky on scroll
- Lock icon shows for locked lessons
- Skeleton displays during loading
- All badges render correctly

# Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Sticky not working | Medium | Medium | Check parent overflow: hidden |
| Animation jank | Low | Low | Use CSS `will-change` |
| Nested sticky issues | Low | Medium | Test on Safari |

# Security Considerations
- Sanitize lesson titles
- No user content in badge content

# Next Steps
Proceed to [Phase 4: Course Page Layout](./phase-04-course-page-layout.md)
