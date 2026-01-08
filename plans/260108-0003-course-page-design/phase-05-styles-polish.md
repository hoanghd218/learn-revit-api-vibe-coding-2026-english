---
title: "Phase 5: Styles & Polish"
description: "Add global styles, animations, and final polish"
status: pending
priority: P2
effort: 0.5h
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
| Description | Add CSS variables, animations, and final polish to course page |
| Priority | P2 |
| Status | pending |
| Review Status | pending |

# Key Insights
- Add purple (#7C3AED) and gold (#F59E0B) CSS variables
- Use existing coral/bronze as secondary colors
- Accordion animations need custom CSS
- Skeleton shimmer effect needs animation

# Requirements
1. CSS variables for purple/gold colors
2. Accordion expand/collapse animations
3. Chevron rotation animation
4. Skeleton shimmer animation
5. Hover transition effects
6. Focus states for accessibility

# Architecture
- Modify: `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/app/globals.css`
- Optional: `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/app/courses/[courseId]/globals.css`

# Related Code Files
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/app/globals.css` - Existing styles + variables
- `/Users/hoangtran/Documents/revit-robot/learn-revit-api-vibe-coding-2026-english/bimacademy/components/sections/curriculum-section.tsx` - Reference transitions

# Implementation Steps
1. Add CSS variables to globals.css:
   ```css
   :root {
     --purple-primary: #7C3AED;
     --purple-light: #8B5CF6;
     --purple-dark: #6D28D9;
     --gold-accent: #F59E0B;
     --gold-light: #FBBF24;
     --gold-dark: #D97706;
     --video-bg: #0F172A;
     --panel-bg: #FFFFFF;
     --pro-badge: #EF4444;
     --free-badge: #3B82F6;
     --premium-badge: #F59E0B;
   }
   ```
2. Add accordion animations:
   ```css
   .accordion-content {
     overflow: hidden;
     transition: max-height 0.3s ease;
   }
   .accordion-trigger[data-state='open'] .chevron {
     transform: rotate(180deg);
   }
   ```
3. Add skeleton shimmer animation:
   ```css
   @keyframes shimmer {
     0% { background-position: -200% 0; }
     100% { background-position: 200% 0; }
   }
   .skeleton {
     background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
     background-size: 200% 100%;
     animation: shimmer 1.5s infinite;
   }
   ```
4. Add hover transition classes
5. Add focus-visible styles for accessibility
6. Test all animations with `prefers-reduced-motion`

# Todo List
- [ ] Add CSS variables for purple/gold colors
- [ ] Add accordion expand/collapse animation
- [ ] Add chevron rotation animation
- [ ] Add skeleton shimmer animation
- [ ] Add hover transition classes
- [ ] Add focus-visible accessibility styles
- [ ] Test reduced motion preference

# Success Criteria
- All colors from design spec available as CSS variables
- Accordion expands/collapses smoothly
- Skeleton shows shimmer effect
- Hover states work on all interactive elements
- Focus indicators visible for keyboard navigation
- Respects `prefers-reduced-motion`

# Risk Assessment
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Animation conflicts | Low | Low | Use specific class names |
| Variable conflicts | Low | Medium | Check existing variables first |

# Security Considerations
- No user input in CSS
- No inline styles

# Next Steps
Complete implementation. Run TypeScript build and verify all success criteria.
