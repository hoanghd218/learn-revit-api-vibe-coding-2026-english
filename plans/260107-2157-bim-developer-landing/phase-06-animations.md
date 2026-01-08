# Phase 6: Animations & Interactions

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 5: Social Proof & Pricing](./phase-05-proof-pricing.md)
- Hero Animations: [Phase 2](./phase-02-hero-header.md)

## Overview
- **Priority:** P2 (Polish & engagement)
- **Status:** Pending
- **Effort:** 2 hours
- **Description:** Comprehensive animation system with scroll-triggered reveals, hover states, smooth transitions, and IDE-style interactions

## Key Insights
- Animations make page feel premium and interactive
- IDE aesthetic = subtle, functional animations (not flashy)
- Scroll-triggered reveals create sense of progression
- Hover states provide feedback and encourage exploration
- Must respect `prefers-reduced-motion` for accessibility
- Performance critical - use CSS transforms, avoid layout thrashing

## Requirements

### Animation Types
1. **Page Load Animations**
   - Hero content fade-in with stagger
   - Header slide-in from top
   - Initial above-fold content only (defer below-fold)

2. **Scroll-Triggered Reveals**
   - Sections fade in as user scrolls
   - Cards appear with stagger delay
   - Subtle parallax on hero background (optional)

3. **Hover Interactions**
   - Buttons: Glow + scale
   - Cards: Lift + shadow increase
   - Tech logos: Color reveal + scale
   - Links: Underline animation

4. **IDE-Style Effects**
   - Code cursor blink in hero animation
   - Syntax highlight color pulse on hover
   - "Loading" dots animation (optional)
   - Terminal-style text typing (optional)

5. **Micro-Interactions**
   - Checkbox checkmarks (feature lists)
   - Badge pulse on scroll into view
   - CTA button "press" effect
   - Smooth scroll to anchor links

### Performance Requirements
- 60fps on all animations
- No layout shifts (CLS score = 0)
- GPU-accelerated transforms only
- Intersection Observer for scroll triggers
- Debounced scroll events
- Lazy load animation library (anime.js)

### Accessibility
- Respect `prefers-reduced-motion` media query
- All animations skippable
- Keyboard focus visible at all times
- No motion-triggered seizures (avoid fast flashing)

## Architecture

### Animation System Structure
```
lib/
├── animations/
│   ├── scroll-triggers.ts      # Intersection Observer setup
│   ├── page-load.ts            # Initial load animations
│   ├── hover-effects.css       # CSS-only hover states
│   ├── reduced-motion.ts       # Accessibility handler
│   └── animation-constants.ts  # Timing, easing constants
```

### Animation Hierarchy
1. **Critical:** Hero, Header (page load, 0-500ms)
2. **Important:** Above-fold sections (scroll trigger, 0-1500ms)
3. **Progressive:** Below-fold cards (scroll trigger, lazy)
4. **Polish:** Micro-interactions (CSS only, instant)

## Related Code Files

### To Create
- `bimacademy/lib/animations/scroll-triggers.ts` - Intersection Observer
- `bimacademy/lib/animations/page-load.ts` - Initial animations
- `bimacademy/lib/animations/animation-constants.ts` - Config
- `bimacademy/lib/animations/reduced-motion.ts` - Accessibility
- `bimacademy/app/globals.css` - Animation utilities and hover effects

### To Modify
- All section components - Add `data-animate` attributes
- `bimacademy/app/layout.tsx` - Import scroll trigger system
- `bimacademy/components/bim/*.tsx` - Add hover classes
- `bimacademy/app/globals.css` - Add animation utility classes

## Implementation Steps

1. **Install Animation Library**
   - `npm install animejs` (if not already)
   - `npm install @types/animejs --save-dev`
   - Lazy load library for performance

2. **Create Animation Constants**
   - Create `lib/animations/animation-constants.ts`
   - Define timing values: `DURATION_FAST = 200ms`, `DURATION_NORMAL = 300ms`, etc.
   - Define easing functions: `EASE_OUT_CUBIC`, `EASE_IN_OUT_QUAD`
   - Export as typed constants

3. **Build Reduced Motion Handler**
   - Create `lib/animations/reduced-motion.ts`
   - Detect `prefers-reduced-motion: reduce` media query
   - Export `shouldReduceMotion()` function
   - Apply to all animation logic

4. **Create Scroll Trigger System**
   - Create `lib/animations/scroll-triggers.ts`
   - Use Intersection Observer API
   - Add `data-animate="fade-in"` attribute to sections
   - Observer triggers class addition → CSS animation
   - Support stagger delays with `data-animate-delay="100"`

5. **Build Page Load Animations**
   - Create `lib/animations/page-load.ts`
   - Hero content: Stagger fade-in (headline → sub → CTAs)
   - Header: Slide in from top with delay
   - Use anime.js timeline
   - Check reduced motion before running

6. **Add CSS Animation Utilities**
   - Update `app/globals.css`
   - Create utility classes:
     - `.animate-fade-in` - Opacity 0 → 1
     - `.animate-slide-up` - TranslateY(20px) → 0
     - `.animate-scale-in` - Scale(0.95) → 1
   - Add hover utilities:
     - `.hover-lift` - TranslateY(0) → -4px
     - `.hover-glow` - Box-shadow intensity increase
     - `.hover-scale` - Scale(1) → 1.05

7. **Implement Hover Effects**
   - Add hover classes to all interactive components
   - Buttons: Glow + slight scale
   - Cards: Lift + shadow + border glow
   - Tech logos: Grayscale removal + scale
   - Transition duration: 200-300ms
   - Use `will-change` property carefully

8. **Add Scroll Animations to Sections**
   - Add `data-animate` attributes to all sections
   - Pain points: Fade in with stagger
   - Curriculum cards: Slide up with stagger
   - Projects: Scale in with stagger
   - Pricing: Fade in simultaneously

9. **Implement Micro-Interactions**
   - CTA button "press" effect (scale down on active)
   - Checkbox checkmarks animate in (stroke-dashoffset)
   - Badge pulse on scroll into view (scale keyframe)
   - Smooth scroll to anchor links (CSS `scroll-behavior: smooth`)

10. **Optional IDE-Style Effects**
    - Code cursor blink animation (CSS keyframe)
    - Syntax color pulse on hover (subtle glow)
    - Terminal typing effect for tagline (anime.js)
    - Loading dots animation (CSS keyframe)

11. **Performance Optimization**
    - Use `will-change` only on actively animating elements
    - Remove `will-change` after animation completes
    - Lazy load anime.js (dynamic import)
    - Throttle scroll event listeners
    - Use `transform` and `opacity` only (GPU-accelerated)

12. **Testing & Refinement**
    - Test on low-end devices (throttle CPU in DevTools)
    - Verify 60fps in Performance tab
    - Test with `prefers-reduced-motion` enabled
    - Check CLS score (should be 0)
    - Test all hover states
    - Verify keyboard focus visible during animations

## Todo List

- [ ] Install anime.js and TypeScript types
- [ ] Create `animation-constants.ts` with timing/easing
- [ ] Build `reduced-motion.ts` handler
- [ ] Create `scroll-triggers.ts` with Intersection Observer
- [ ] Build `page-load.ts` animations
- [ ] Add CSS animation utilities to `globals.css`
- [ ] Add hover effect classes to `globals.css`
- [ ] Apply `data-animate` attributes to all sections
- [ ] Implement scroll-triggered reveals
- [ ] Add hover classes to buttons and cards
- [ ] Implement CTA button press effect
- [ ] Add checkbox checkmark animation
- [ ] Add badge pulse animation
- [ ] Enable smooth scroll for anchor links
- [ ] Optional: Add code cursor blink effect
- [ ] Optional: Add terminal typing effect
- [ ] Lazy load anime.js library
- [ ] Test animations on low-end devices
- [ ] Verify 60fps performance
- [ ] Test reduced motion mode
- [ ] Check CLS score (target: 0)

## Success Criteria

✅ Hero content animates on page load with stagger
✅ All sections reveal on scroll with Intersection Observer
✅ Cards appear with stagger delays
✅ All hover states smooth at 60fps
✅ Buttons have glow + scale effects
✅ Cards lift with shadow on hover
✅ Tech logos reveal color on hover
✅ Smooth scroll works for anchor links
✅ Reduced motion mode removes animations
✅ No layout shifts (CLS = 0)
✅ Animations use GPU-accelerated properties only
✅ anime.js lazy loaded
✅ 60fps verified in Chrome DevTools
✅ Keyboard focus visible during animations

## Risk Assessment

### Risks
- **Performance on low-end devices:** Too many animations may cause jank
  - Mitigation: Use CSS animations where possible, throttle observers, test on low-end devices
- **Animation conflicts:** Multiple animations triggering simultaneously
  - Mitigation: Coordinate timings, use animation queues, prioritize critical animations
- **Reduced motion not respected:** Animations still play when user requests no motion
  - Mitigation: Strict checks before every animation, test thoroughly with setting enabled

### Technical Debt
- Consider migrating to Framer Motion for better React integration
- May need animation orchestration layer for complex sequences

## Security Considerations

- No user input involved in animations
- Ensure anime.js loaded from trusted CDN or bundled
- No eval() or dynamic code execution in animation logic

## Next Steps

1. Complete Phase 6 implementation
2. Performance test on multiple devices
3. Get feedback on animation timing and style
4. Move to Phase 7: Performance & SEO
