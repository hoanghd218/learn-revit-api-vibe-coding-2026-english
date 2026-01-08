---
title: "Phase 4: Course Page Layout"
description: "Create main course page with 2-column layout and responsive behavior"
status: pending
priority: P1
effort: 1h
created: 2026-01-08
review_status: pending
---

# Context
- **Parent Plan**: [Course Detail Page Design](../plan.md)
- **Dependencies**: [Phase 2: Video Preview Component](./phase-02-video-preview.md), [Phase 3: Curriculum Components](./phase-03-curriculum-components.md)

# Overview
| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Create main course page with 2-column layout, responsive grid, and dynamic route |
| Priority | P1 |
| Status | pending |
| Review Status | pending |

# Key Insights
- 70/30 split on desktop (left/right columns)
- Stacked layout on mobile
- Use CSS Grid or Flexbox for responsive behavior
- Dynamic route `[courseId]` for course data fetching

# Requirements
1. 2-column layout (70% left, 30% right)
2. Stacked layout on mobile (flex-col)
3. Dynamic route: `/courses/[courseId]`
4. Fetch course data based on courseId
5. Handle loading state with skeleton
6. Handle not found state

# Architecture
```
@/app/courses/
├── [courseId]/
│   ├── page.tsx           # Main course page (dynamic route)
│   └── loading.tsx        # Loading state
└── not-found.tsx          # 404 page

@/components/course/
└── course-page.tsx        # Page layout component
```

# Related Code Files
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/app/page.tsx` - Landing page pattern
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/components/bim/section.tsx` - Section wrapper
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/app/layout.tsx` - Root layout

# Implementation Steps
1. Create `@/app/courses/[courseId]/page.tsx`:
   - Export `generateStaticParams` for static generation
   - Fetch course data via `getCourse(params.courseId)`
   - Render `CoursePage` component
   - Add metadata (title, description)
2. Create `@/components/course/course-page.tsx`:
   - 2-column grid layout (lg:grid-cols-[70fr_30fr])
   - Left column: VideoPreview + CourseHeader
   - Right column: CurriculumPanel
   - Responsive: flex-col on mobile
3. Create `@/app/courses/[courseId]/loading.tsx`:
   - Skeleton for video preview area
   - Skeleton for curriculum panel
4. Create `@/app/courses/not-found.tsx`:
   - "Course not found" message
   - Back to courses link
5. Update parent layout if needed for courses route

# Todo List
- [ ] Create course-page.tsx with 2-column layout
- [ ] Create app/courses/[courseId]/page.tsx dynamic route
- [ ] Add generateStaticParams for static generation
- [ ] Add loading.tsx with skeleton states
- [ ] Create not-found.tsx for 404 handling
- [ ] Add metadata generation
- [ ] Test responsive behavior (mobile stacked, desktop 2-column)

# Success Criteria
- Page loads at `/courses/[courseId]`
- Desktop: 70/30 split layout
- Mobile: stacked layout
- Loading skeleton displays
- 404 page for invalid courseId
- Metadata populated from course data

# Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Layout shift on load | Medium | Low | Use skeleton loading |
| Mobile layout issues | Low | Medium | Test breakpoints |

# Security Considerations
- Validate courseId parameter
- Handle undefined course gracefully

# Next Steps
Proceed to [Phase 5: Styles & Polish](./phase-05-styles-polish.md)
