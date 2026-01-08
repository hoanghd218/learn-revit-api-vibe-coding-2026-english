---
title: "CoursePage Layout Refinement"
description: "Improve grid spacing, responsive breakpoints, container styling, and visual flow of main course page layout"
status: pending
priority: P2
effort: 1h
implementation_status: pending
review_status: pending
created: 2026-01-08
parent_plan: ../plan.md
---

## Context

**Parent Plan:** [Course Detail Page UI Improvements](../plan.md)

**Dependencies:** Phases 1 & 2 (VideoPreview, CourseHeader)

**Related Components:**
- `course-page.tsx` - Main layout component
- `video-preview.tsx` - Left column content
- `course-header.tsx` - Left column content
- `curriculum-panel.tsx` - Right column content

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Refine CoursePage layout with better spacing, responsive breakpoints, and container styling |
| Priority | P2 |
| Status | pending |

## Key Insights

- CoursePage is the layout container - improvements affect overall flow
- Current grid uses `lg:grid-cols-[1fr_380px]` - may need adjustment
- Container padding could be refined for better visual balance
- Sticky curriculum panel needs proper scroll handling

## Requirements

1. **Container Refinement**
   - Consistent padding across breakpoints
   - Max-width optimization
   - Background treatment

2. **Grid Improvements**
   - Better column proportions (70/30 vs current)
   - Gap spacing refinement
   - Responsive behavior

3. **Sticky Panel**
   - Smooth scroll handling
   - Proper z-index stacking
   - Shadow on scroll

4. **Visual Flow**
   - Section spacing consistency
   - Vertical rhythm
   - Background color treatment

5. **Mobile Optimization**
   - Stacked layout refinement
   - Touch-friendly spacing
   - Scroll behavior

## Architecture

**Current Structure:**
```
CoursePage
└── container (mx-auto px-4 py-8)
    └── grid (grid-cols-1 lg:grid-cols-[1fr_380px] gap-8)
        ├── left column (space-y-6)
        │   ├── VideoPreview
        │   └── CourseHeader
        └── right column (sticky)
            └── CurriculumPanel
```

**Proposed Changes:**
- Enhanced container with proper max-width
- Improved grid proportions
- Refined sticky behavior

## Related Code Files

| File | Purpose |
|------|---------|
| `bimacademy/components/course/course-page.tsx` | Component to improve |
| `bimacademy/app/globals.css` | Theme utilities |

## Implementation Steps

1. **Enhance container styling**
   ```tsx
   <div className="container mx-auto px-4 md:px-6 lg:px-8 py-6 md:py-8 lg:py-10">
   ```

2. **Refine grid proportions**
   ```tsx
   <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-6 lg:gap-10">
   ```

3. **Add background card effect to container**
   ```tsx
   <div className="min-h-screen bg-background">
     <div className="container ...">
   ```

4. **Improve left column spacing**
   ```tsx
   <div className="space-y-5 md:space-y-7">
   ```

5. **Enhance sticky panel**
   ```tsx
   <div className="lg:sticky lg:top-6 lg:self-start
                   lg:max-h-[calc(100vh-3rem)] lg:overflow-y-auto">
   ```

6. **Add scroll shadow to sticky panel**
   ```tsx
   className={`
     transition-all duration-300
     ${isSticky ? 'sticky top-6 shadow-lg rounded-xl' : ''}
   `}
   ```

7. **Mobile layout refinement**
   ```tsx
   {/* Right column - Curriculum panel */}
   <div className="lg:sticky lg:top-6 lg:self-start order-first lg:order-last">
   ```

## Todo List

- [ ] Enhance container padding and max-width
- [ ] Refine grid proportions and gap
- [ ] Improve left column spacing
- [ ] Enhance sticky panel behavior
- [ ] Add scroll shadow effect
- [ ] Implement mobile order (content first)
- [ ] Test scroll behavior
- [ ] Verify visual flow

## Success Criteria

- [ ] Container has consistent padding
- [ ] Grid proportions feel balanced
- [ ] Sticky panel scrolls smoothly
- [ ] Mobile layout shows content first
- [ ] Visual rhythm is consistent
- [ ] No functionality regression

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Sticky panel scroll issues | Medium | Medium | Test on multiple screen sizes |
| Mobile order confusion | Low | Low | Use order-first class |
| Container overflow | Low | Low | Test max-width behavior |

## Security Considerations

- No user input processing
- No external API calls
- Static content rendering only

## Next Steps

1. Review and approve plan
2. Move to implementation phase
3. Coordinate with VideoPreview and CourseHeader
4. Test curriculum panel sticky behavior
