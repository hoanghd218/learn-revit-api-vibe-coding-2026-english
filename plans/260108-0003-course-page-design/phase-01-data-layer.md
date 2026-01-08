---
title: "Phase 1: Data Layer & Types"
description: "Define TypeScript interfaces and mock course data"
status: pending
priority: P1
effort: 1h
created: 2026-01-08
review_status: pending
---

# Context
- **Parent Plan**: [Course Detail Page Design](../plan.md)
- **Dependencies**: None
- **Related Docs**: [Scout Report](../../scout/scout-260108-0003-codebase.md)

# Overview
| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Define TypeScript interfaces for course data and create mock data matching design spec |
| Priority | P1 |
| Status | pending |
| Review Status | pending |

# Key Insights
- Use `as const` pattern from existing data layer (`@/data/code-snippets.ts`)
- Design spec uses Vietnamese content - match exactly
- Badge types: PRO (red), Free/Miễn phí (blue), Premium (gold)
- Duration format: `HH:MM:SS` or `00:05:00`

# Requirements
1. `Course` interface with nested `CurriculumSection[]` and `Lesson[]`
2. Mock data for 3 curriculum sections with 5 total lessons
3. Badge type union: `'pro' | 'free' | 'premium'`
4. Duration helper function for display formatting

# Architecture
```
@/data/
└── courses.ts          # Course interfaces + mock data

@/types/
└── course.ts           # TypeScript interfaces (new file if not exists)
```

# Related Code Files
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/data/code-snippets.ts` - Existing data pattern

# Implementation Steps
1. Create `@/types/course.ts` with interfaces:
   - `Lesson` interface (id, title, duration, thumbnail?, badge, isLocked?)
   - `CurriculumSection` interface (id, title, lessons[])
   - `Course` interface (id, title, instructor, duration, videoUrl, thumbnail, curriculum[])
2. Create `@/data/courses.ts` with:
   - Import interfaces
   - Mock `SAMPLE_COURSES` array
   - `getCourse(courseId)` function (placeholder)
   - `formatDuration(seconds)` helper
3. Export types from `lib/types` or `data/courses.ts`

# Todo List
- [ ] Create `@/types/course.ts` with Lesson, CurriculumSection, Course interfaces
- [ ] Create `@/data/courses.ts` with mock data matching design spec
- [ ] Add `formatDuration()` helper function
- [ ] Verify TypeScript strict mode passes

# Success Criteria
- All interfaces exported and usable
- Mock data matches design spec exactly
- `getCourse(courseId)` returns typed course data
- No TypeScript errors

# Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Type conflicts with existing | Low | Medium | Review existing types first |

# Security Considerations
- No user input in mock data
- Static data only

# Next Steps
Proceed to [Phase 2: Video Preview Component](./phase-02-video-preview.md)
