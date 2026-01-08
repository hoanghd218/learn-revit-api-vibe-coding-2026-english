# Phase 2: Hero & Header Section

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 1: Design System](./phase-01-design-system.md)
- Page: `bimacademy/app/page.tsx`

## Overview
- **Priority:** P1 (Above-the-fold critical)
- **Status:** Pending
- **Effort:** 2 hours
- **Description:** Sticky navigation header and hero section with split layout, headline, CTAs, and code animation visual

## Key Insights
- Hero is first impression - must immediately convey professional developer tool
- Split layout (text left, visual right) proven pattern for tech products
- Code animation should show real C#/Revit API, not placeholder
- CTAs must stand out with syntax-highlight colors
- Sticky header improves conversion by keeping CTAs accessible

## Requirements

### Functional
- Sticky header with logo, navigation, CTA
- Hero split layout: left (content), right (animation)
- Headline: "Master Revit API & Build Powerful BIM Apps."
- Sub-headline: "Stop clicking. Start coding. Transition from a BIM User to a High-Paid BIM Developer. Learn C#, .NET, and WPF to automate the impossible."
- Primary CTA: "Start Your Developer Journey"
- Secondary link: "View Student Projects" (scroll to section)
- Code animation: Revit model updates + C# code scrolling
- Mobile: Stack layout, reduce animation complexity

### Non-Functional
- Header height: 64px desktop, 56px mobile
- Hero height: 100vh desktop, auto mobile
- Animation smooth at 60fps
- Accessible keyboard navigation
- SEO-optimized heading hierarchy (H1)

## Architecture

### Component Structure
```
Header (Sticky)
├── Logo (left)
├── Navigation (center) [optional links]
└── CTA Button (right)

Hero Section
├── Container
│   ├── Grid (2 cols desktop, 1 col mobile)
│   │   ├── Content (left)
│   │   │   ├── Headline (H1)
│   │   │   ├── Sub-headline (P)
│   │   │   ├── CTA Group
│   │   │   │   ├── Primary Button
│   │   │   │   └── Secondary Link
│   │   │   └── Trust Indicators (stats)
│   │   └── Visual (right)
│   │       └── CodeAnimation Component
│   │           ├── MockRevitWindow
│   │           └── MockVSCodeWindow (scrolling code)
```

### Animation Strategy
- Use CSS animations for code scrolling (performance)
- Stagger fade-in for headline → sub-headline → CTAs (anime.js)
- Parallax effect on scroll (optional, test performance)
- Reduce motion for users with `prefers-reduced-motion`

## Related Code Files

### To Create
- `bimacademy/components/layout/Header.tsx` - Sticky header
- `bimacademy/components/layout/Navigation.tsx` - Nav links
- `bimacademy/components/sections/HeroSection.tsx` - Hero container
- `bimacademy/components/sections/CodeAnimation.tsx` - Code visual
- `bimacademy/data/code-snippets.ts` - Real C# examples

### To Modify
- `bimacademy/app/page.tsx` - Import and render Header + HeroSection
- `bimacademy/app/layout.tsx` - Adjust for sticky header offset

## Implementation Steps

1. **Create Header Component**
   - Build `layout/Header.tsx` with sticky positioning
   - Add logo placeholder (text or SVG)
   - Implement navigation menu (empty links for now)
   - Add primary CTA button (styled with accent color)
   - Mobile: Hamburger menu (optional for MVP)
   - Test sticky behavior on scroll

2. **Create Code Snippets Data**
   - Create `data/code-snippets.ts` with real C# examples
   - Include: FilteredElementCollector, Transaction, Element manipulation
   - 10-15 lines per snippet, realistic Revit API usage
   - Add syntax highlighting metadata

3. **Build Code Animation Component**
   - Create `sections/CodeAnimation.tsx`
   - Mock VS Code window with title bar, line numbers
   - Implement auto-scrolling code with CSS keyframes
   - Add syntax highlighting using Prism.js
   - Mock Revit window (static image or simple 3D representation)
   - Sync animation timing (code scrolls as "model updates")

4. **Build Hero Section**
   - Create `sections/HeroSection.tsx`
   - Implement 2-column grid (responsive)
   - Add headline with H1 tag (SEO)
   - Add sub-headline with optimized line breaks
   - Create CTA group with primary + secondary
   - Add subtle background gradient or pattern
   - Integrate CodeAnimation component

5. **Add Entrance Animations**
   - Install anime.js: `npm install animejs`
   - Stagger fade-in: headline (0ms) → sub (200ms) → CTAs (400ms)
   - Slide-in code animation from right (600ms delay)
   - Respect `prefers-reduced-motion` media query

6. **Responsive Optimization**
   - Desktop (1024px+): Full split layout
   - Tablet (768px): Reduce code animation size
   - Mobile (640px-): Stack layout, simplify animation or replace with static image
   - Test on real devices

7. **Accessibility & SEO**
   - Ensure proper heading hierarchy (H1 for headline)
   - Add alt text for visual elements
   - Keyboard navigation for header menu
   - Skip-to-content link for screen readers
   - Meta description based on sub-headline

## Todo List

- [ ] Create `layout/Header.tsx` with sticky positioning
- [ ] Add logo and navigation structure
- [ ] Create `data/code-snippets.ts` with real C# examples
- [ ] Build `sections/CodeAnimation.tsx` with mock windows
- [ ] Implement CSS keyframe scrolling animation
- [ ] Add Prism.js syntax highlighting
- [ ] Create `sections/HeroSection.tsx` with grid layout
- [ ] Implement headline and sub-headline
- [ ] Create CTA button group
- [ ] Install anime.js for entrance animations
- [ ] Add staggered fade-in animations
- [ ] Implement responsive breakpoints
- [ ] Test mobile layout and animations
- [ ] Add `prefers-reduced-motion` fallback
- [ ] Audit accessibility (keyboard nav, ARIA)
- [ ] Add meta tags for SEO

## Success Criteria

✅ Header sticky on scroll with smooth transition
✅ Hero renders correctly on desktop, tablet, mobile
✅ Headline is H1 with proper SEO structure
✅ Code animation scrolls smoothly at 60fps
✅ Real C# code displayed with syntax highlighting
✅ CTA buttons visually prominent with hover states
✅ Entrance animations smooth and accessible
✅ Reduced motion respects user preferences
✅ Keyboard navigation works for all interactive elements
✅ Mobile layout stacks correctly without horizontal scroll

## Risk Assessment

### Risks
- **Animation performance on mobile:** Complex animations may lag
  - Mitigation: Test early, use CSS transforms, consider static fallback
- **Code readability at small sizes:** Syntax highlighting hard to read on mobile
  - Mitigation: Increase font size, reduce code lines shown, or use static screenshot
- **Header z-index conflicts:** Sticky header may overlap other elements
  - Mitigation: Establish z-index system early, test across sections

### Performance Concerns
- Code animation should use `will-change: transform` for GPU acceleration
- Lazy load CodeAnimation component if below fold
- Optimize font loading with `next/font` preload

## Security Considerations

- Sanitize any dynamic content in header navigation
- Ensure external links (if any) use `rel="noopener noreferrer"`
- No inline scripts in animation (use CSS animations where possible)

## Next Steps

1. Complete Phase 2 implementation
2. Test hero on multiple devices and browsers
3. Get stakeholder approval on headline copy
4. Move to Phase 3: Pain Points & Curriculum Sections
