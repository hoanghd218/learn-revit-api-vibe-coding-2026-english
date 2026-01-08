---
title: "VideoPreview Component Polish"
description: "Enhance video player card with better shadows, refined badges, hover effects, and play button animation"
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
- `video-preview.tsx` - Component being improved
- `course-page.tsx` - Parent container

## Overview

| Field | Value |
|-------|-------|
| Date | 2026-01-08 |
| Description | Polish VideoPreview with better shadows, hover effects, play button animation, refined badge styling |
| Priority | P2 |
| Status | pending |

## Key Insights

- VideoPreview is the primary visual anchor - improvements will have high impact
- Current design has basic styling, room for polish using existing theme utilities
- `glow-coral` and `hover-lift` utilities available in globals.css
- Badge styling can be unified with curriculum badges for consistency

## Requirements

1. **Shadows & Depth**
   - Add subtle inner shadow for video container depth
   - Enhanced outer shadow on hover (use `glow-coral-lg`)

2. **Play Button Animation**
   - Pulse effect on hover
   - Scale transition for engagement feedback

3. **Badge Refinements**
   - Backdrop blur enhancement
   - Unified styling with curriculum badges
   - Gradient borders for premium feel

4. **Hover Effects**
   - Thumbnail brightness transition
   - Container lift effect using `hover-lift`

5. **Mobile Responsiveness**
   - Touch-friendly play button sizing
   - Better badge positioning on small screens

## Architecture

**Current Structure:**
```
VideoPreview
├── aspect-video container (16:9)
│   ├── gradient overlay
│   ├── Image (thumbnail)
│   ├── play button (absolute center)
│   ├── badges (top-left)
│   └── duration (bottom-right)
```

**Proposed Changes:**
- Add wrapper with `hover-lift` class
- Enhanced play button with animation
- Refined badge positioning and styling

## Related Code Files

| File | Purpose |
|------|---------|
| `bimacademy/components/course/video-preview.tsx` | Component to improve |
| `bimacademy/app/globals.css` | Theme utilities |

## Implementation Steps

1. **Add wrapper with hover lift effect**
   ```tsx
   <div className="group hover-lift cursor-pointer">
   ```

2. **Enhance play button animation**
   ```tsx
   <div className="w-16 h-16 rounded-full bg-coral-accent/90
                   flex items-center justify-center shadow-lg
                   group-hover:scale-110 group-hover:bg-coral-accent
                   transition-all duration-300">
   ```

3. **Add pulse animation to play button**
   ```tsx
   <div className="absolute inset-0 rounded-full bg-coral-accent/30
                   animate-ping opacity-0 group-hover:opacity-100" />
   ```

4. **Refine badge styling with backdrop blur**
   ```tsx
   className="px-3 py-1 rounded-lg bg-black/60 backdrop-blur-md
              border border-white/10 text-white text-sm font-medium
              shadow-sm"
   ```

5. **Add gradient border effect for premium badges**
   ```tsx
   className="bg-gradient-to-r from-purple-500 to-purple-700
              border border-purple-400/30"
   ```

## Todo List

- [ ] Add wrapper with `hover-lift` class
- [ ] Enhance play button with scale animation
- [ ] Add pulse ring effect on hover
- [ ] Refine badge styling with backdrop blur
- [ ] Add gradient border for premium badges
- [ ] Enhance container shadows
- [ ] Verify mobile responsiveness
- [ ] Test all hover states

## Success Criteria

- [ ] Play button has smooth scale animation on hover
- [ ] Container lifts on hover with coral glow
- [ ] Badges have consistent styling with curriculum
- [ ] Video container has enhanced depth/shadows
- [ ] Mobile view shows properly sized elements
- [ ] No functionality regression

## Risk Assessment

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| Animation conflicts | Low | Medium | Use distinct animation classes |
| Mobile sizing issues | Medium | Low | Test breakpoints explicitly |
| Performance impact | Low | Low | CSS animations are GPU accelerated |

## Security Considerations

- No user input processing
- No external API calls
- Static content rendering only

## Next Steps

1. Review and approve plan
2. Move to implementation phase
3. Test in browser for visual feedback
