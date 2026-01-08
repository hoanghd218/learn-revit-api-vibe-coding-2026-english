# Phase 3: Pain Points & Curriculum Sections

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 2: Hero & Header](./phase-02-hero-header.md)
- Design System: [Phase 1](./phase-01-design-system.md)

## Overview
- **Priority:** P1 (Core value proposition)
- **Status:** Pending
- **Effort:** 2.5 hours
- **Description:** Build comparison section highlighting pain points vs solutions, and curriculum roadmap with interactive tech cards

## Key Insights
- Pain points must resonate with daily frustrations of BIM users
- Before/after contrast creates emotional impact
- Curriculum cards should feel like IDE panels or VS Code extensions
- Interactive hover states show this is a developer-focused product
- 4-phase structure matches typical bootcamp progression

## Requirements

### Pain Points Section
- Comparison layout (side-by-side or toggle)
- Left: "The Old Way" (3-4 pain points with icons)
- Right: "The Developer Way" (corresponding solutions)
- Key message: "Don't just use the software. Bend it to your will."
- Visual contrast: red/warning colors vs green/success colors
- Icons: Manual tools vs automation symbols

### Curriculum Roadmap
- Grid layout of 4 tech cards
- Phase 1: C# Foundation for Engineers
- Phase 2: Revit API Mechanics
- Phase 3: Professional UI/UX (WPF/XAML)
- Phase 4: Advanced BIM Apps
- Interactive hover: Reveal learning outcomes
- Progress indicators (optional: "4 weeks", "6 modules", etc.)
- Tech badges for each phase (C#, .NET, WPF, etc.)

### Non-Functional
- Smooth hover transitions (200-300ms)
- Cards should feel tactile (shadow, scale effects)
- Accessible focus states for keyboard navigation
- Mobile: Stack cards vertically, maintain interactivity

## Architecture

### Component Structure
```
PainPointsSection
├── Container
│   ├── SectionHeading
│   ├── ComparisonGrid (2 cols)
│   │   ├── PainPointCard (Old Way)
│   │   │   ├── Icon (❌)
│   │   │   ├── Heading
│   │   │   └── Description
│   │   └── SolutionCard (Developer Way)
│   │       ├── Icon (✅)
│   │       ├── Heading
│   │       └── Description
│   └── KeyMessage (blockquote or callout)

CurriculumSection
├── Container
│   ├── SectionHeading
│   ├── PhaseGrid (4 cols → 2 → 1 responsive)
│   │   └── PhaseCard (x4)
│   │       ├── PhaseNumber (01, 02, 03, 04)
│   │       ├── PhaseTitle
│   │       ├── Description
│   │       ├── TechBadges (array)
│   │       ├── LearningOutcomes (hidden → reveal on hover)
│   │       └── Duration (optional)
```

### Interaction Patterns
- Hover: Card lifts with shadow, reveals learning outcomes
- Focus: Visible outline for keyboard users
- Mobile tap: Toggle outcomes visibility
- Scroll animation: Fade in cards sequentially

## Related Code Files

### To Create
- `bimacademy/components/sections/PainPointsSection.tsx`
- `bimacademy/components/sections/CurriculumSection.tsx`
- `bimacademy/components/bim/ComparisonCard.tsx`
- `bimacademy/components/bim/PhaseCard.tsx`
- `bimacademy/components/bim/TechBadge.tsx`
- `bimacademy/data/curriculum.ts` - Phase content data
- `bimacademy/data/pain-points.ts` - Comparison content

### To Modify
- `bimacademy/app/page.tsx` - Add PainPointsSection + CurriculumSection

## Implementation Steps

1. **Create Pain Points Data**
   - Create `data/pain-points.ts`
   - Define 3-4 pain points with solutions:
     - Pain: "Manual repetition", Solution: "One-click automation"
     - Pain: "Hours wasting", Solution: "Seconds execution"
     - Pain: "Human error risks", Solution: "100% accuracy"
     - Pain: "Limited by software", Solution: "Unlimited custom tools"
   - Include icons (Lucide React), headings, descriptions

2. **Build Comparison Card Component**
   - Create `bim/ComparisonCard.tsx`
   - Props: type (pain | solution), icon, heading, description
   - Styling: Pain (red accent), Solution (green accent)
   - Add subtle glow effect on hover

3. **Build Pain Points Section**
   - Create `sections/PainPointsSection.tsx`
   - 2-column grid (responsive)
   - Map pain-points data to ComparisonCard components
   - Add key message as prominent callout
   - Background: Subtle diagonal split or gradient

4. **Create Curriculum Data**
   - Create `data/curriculum.ts`
   - Define 4 phases with:
     - Phase number, title, description
     - Tech badges array (C#, .NET, WPF, Revit API, etc.)
     - Learning outcomes (3-5 bullets)
     - Duration (optional)

5. **Build Tech Badge Component**
   - Create `bim/TechBadge.tsx`
   - Small pill with tech name and icon
   - Color-coded by category (language, framework, tool)
   - Hover: Slight scale effect

6. **Build Phase Card Component**
   - Create `bim/PhaseCard.tsx`
   - Card with phase number badge (01, 02, 03, 04)
   - Title and description
   - Tech badges row
   - Learning outcomes (hidden by default)
   - Hover state: Lift card, reveal outcomes with fade-in
   - Mobile: Tap to toggle outcomes

7. **Build Curriculum Section**
   - Create `sections/CurriculumSection.tsx`
   - 4-column grid (responsive: 4 → 2 → 1)
   - Map curriculum data to PhaseCard components
   - Add scroll-triggered sequential fade-in (anime.js)

8. **Add Scroll Animations**
   - Use Intersection Observer API
   - Fade in pain points cards with stagger
   - Fade in phase cards sequentially (100ms delay each)
   - Respect `prefers-reduced-motion`

9. **Responsive Optimization**
   - Desktop (1024px+): 2 cols pain points, 4 cols curriculum
   - Tablet (768px): 2 cols pain points, 2 cols curriculum
   - Mobile (640px-): 1 col stacked, tap interactions for cards

10. **Accessibility Audit**
    - Keyboard navigation for all cards
    - Focus-visible styles
    - ARIA labels for icons
    - Screen reader announces hidden content on expand

## Todo List

- [ ] Create `data/pain-points.ts` with content
- [ ] Create `data/curriculum.ts` with 4 phases
- [ ] Build `bim/ComparisonCard.tsx` component
- [ ] Build `bim/TechBadge.tsx` component
- [ ] Build `bim/PhaseCard.tsx` with hover interactions
- [ ] Create `sections/PainPointsSection.tsx`
- [ ] Create `sections/CurriculumSection.tsx`
- [ ] Implement hover states with smooth transitions
- [ ] Add scroll-triggered animations with Intersection Observer
- [ ] Implement mobile tap-to-toggle for phase cards
- [ ] Test responsive grid layouts
- [ ] Audit keyboard navigation
- [ ] Add ARIA labels and roles
- [ ] Test with screen reader
- [ ] Verify `prefers-reduced-motion` fallback

## Success Criteria

✅ Pain points section renders with clear visual contrast
✅ 4 phase cards display in responsive grid
✅ Hover reveals learning outcomes smoothly
✅ Tech badges styled and color-coded
✅ Scroll animations trigger correctly
✅ Mobile tap interactions work intuitively
✅ All interactive elements keyboard accessible
✅ Focus states visible and clear
✅ Screen reader announces content correctly
✅ Reduced motion mode removes animations

## Risk Assessment

### Risks
- **Hover complexity on mobile:** Touch devices don't have hover
  - Mitigation: Implement tap-to-toggle, ensure outcomes always accessible
- **Grid layout inconsistency:** Cards with varying content heights
  - Mitigation: Use CSS Grid with `align-items: stretch`, normalize card heights
- **Animation performance:** Multiple scroll-triggered animations
  - Mitigation: Use `will-change` sparingly, throttle Intersection Observer

### Content Risks
- Phase descriptions too technical for beginners
  - Mitigation: Use simple language, focus on outcomes not syntax

## Security Considerations

- No user input in this phase
- Sanitize any dynamic content if curriculum data comes from CMS later
- Ensure icons loaded from trusted sources (Lucide React is safe)

## Next Steps

1. Complete Phase 3 implementation
2. Get feedback on pain point messaging
3. Validate curriculum structure with instructor
4. Move to Phase 4: Tech Stack & Authority Sections
