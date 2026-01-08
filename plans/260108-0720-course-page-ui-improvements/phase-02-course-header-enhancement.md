---
title: "CourseHeader Component Enhancement"
description: "Improve typography, badge positioning, metadata display, and visual hierarchy in course header"
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

**Dependencies:** None - standalone component enhancement

**Related Components:**
- `course-header.tsx` - Component being improved
- `video-preview.tsx` - Adjacent component

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Enhance CourseHeader with improved typography, better badge positioning, refined metadata display |
| Priority | P2 |
| Status | pending |

## Key Insights

- CourseHeader provides context - improvements should enhance scannability
- Current implementation is basic, room for visual hierarchy refinement
- Instructor avatar can use gradient border per theme
- Premium badge can be more prominent with gradient styling

## Requirements

1. **Typography Improvements**
   - Title line-height adjustment for readability
   - Subtle gradient text effect for emphasis (optional)
   - Better font weight distribution

2. **Instructor Avatar**
   - Gradient border matching coral/bronze theme
   - Subtle shadow for depth
   - Size adjustment for balance

3. **Metadata Row**
   - Better spacing between items
   - Icon color refinement
   - Hover effects on interactive elements

4. **Premium Badge**
   - Enhanced gradient styling
   - Better glow effect
   - Consistent with video badges

5. **Responsive Design**
   - Stack metadata on mobile
   - Appropriate font scaling
   - Touch-friendly spacing

## Architecture

**Current Structure:**
```
CourseHeader
├── h1 (title)
└── metadata row
    ├── instructor (avatar + name)
    ├── duration (icon + text)
    └── premium badge (conditional)
```

**Proposed Changes:**
- Enhanced title typography
- Improved metadata row layout
- Refined badge styling

## Related Code Files

| File | Purpose |
|------|---------|
| `bimacademy/components/course/course-header.tsx` | Component to improve |
| `bimacademy/app/globals.css` | Theme utilities |

## Implementation Steps

1. **Enhance title typography**
   ```tsx
   <h1 className="text-2xl md:text-3xl font-bold text-foreground
                  leading-tight tracking-tight">
   ```

2. **Add gradient border to instructor avatar**
   ```tsx
   <div className="w-10 h-10 rounded-full bg-gradient-to-br
                   from-coral-accent to-bronze-accent p-[1.5px]">
     <div className="w-full h-full rounded-full bg-card
                     flex items-center justify-center">
       {/* avatar content */}
     </div>
   </div>
   ```

3. **Refine metadata row spacing**
   ```tsx
   <div className="flex flex-wrap items-center gap-4 md:gap-6
                   text-sm text-muted-foreground">
   ```

4. **Enhance premium badge with gradient**
   ```tsx
   <span className="px-3 py-1 rounded-full bg-gradient-to-r
                    from-gold-accent/30 to-gold-light/20
                    text-gold-accent text-xs font-semibold
                    border border-gold-accent/40
                    shadow-sm glow-bronze">
     PREMIUM
   </span>
   ```

5. **Add subtle hover effect to instructor**
   ```tsx
   <div className="flex items-center gap-2 hover-lift cursor-pointer
                   p-1 rounded-lg -m-1 transition-all">
   ```

6. **Mobile responsive adjustments**
   ```tsx
   <div className="flex flex-wrap gap-3 md:gap-4">
   ```

## Todo List

- [ ] Enhance title typography and spacing
- [ ] Add gradient border to instructor avatar
- [ ] Refine metadata row layout
- [ ] Enhance premium badge styling
- [ ] Add hover effects to instructor
- [ ] Implement mobile responsive layout
- [ ] Verify visual hierarchy

## Success Criteria

- [ ] Title is clear and well-spaced
- [ ] Instructor avatar has gradient border
- [ ] Premium badge stands out appropriately
- [ ] Metadata row is scannable
- [ ] Mobile view stacks properly
- [ ] No functionality regression

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Title overflow on mobile | Low | Low | Test breakpoints |
| Badge visibility | Low | Medium | Ensure contrast ratios |

## Security Considerations

- No user input processing
- Static content rendering only

## Next Steps

1. Review and approve plan
2. Move to implementation phase
3. Coordinate with VideoPreview for visual consistency
