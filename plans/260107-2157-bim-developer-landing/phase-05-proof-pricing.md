# Phase 5: Social Proof & Pricing

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 4: Tech Stack & Authority](./phase-04-tech-authority.md)
- Design System: [Phase 1](./phase-01-design-system.md)

## Overview
- **Priority:** P1 (Conversion critical)
- **Status:** Pending
- **Effort:** 2.5 hours
- **Description:** Student project showcases with metrics and two-tier pricing cards with clear CTAs

## Key Insights
- Project spotlights more credible than text testimonials
- Showing real plugins built by students proves course effectiveness
- "98% built functional plugin in 4 weeks" metric creates urgency
- Two-tier pricing common in online courses (self-paced vs mentorship)
- Clear feature comparison essential for tier differentiation

## Requirements

### Student Showcase Section
- Heading: "Real Projects, Built by Students Like You"
- 2-3 project spotlight cards (grid layout)
- Card 1: "Auto-Reinforcement Tool" - [Student Name]
- Card 2: "Smart Room Tagger" - [Student Name]
- Optional Card 3: Third project example
- Each card: Project name, student name, description, screenshot/GIF, tech badges
- Metric highlight: "98% of graduates built their first functional plugin within 4 weeks."
- Optional: Link to full portfolio/gallery

### Pricing Section
- Heading: "Invest in Your Developer Future"
- 2 pricing cards (side-by-side)
- Option A: Self-Paced ($X)
  - Lifetime video access
  - Source Code Library
  - Private Discord Community
  - Q&A access
- Option B: Mentorship ($X + Y)
  - Everything in Option A
  - Weekly Code Reviews
  - 1-on-1 Career Coaching
  - Priority support
- "Most Popular" badge on one tier
- CTAs: "Enroll Now & Upgrade Your Career"
- Trust badges: Money-back guarantee, secure payment

### Non-Functional
- Cards should feel premium with shadows and hover effects
- Pricing must be clear and scannable
- CTA buttons prominent with accent colors
- Mobile: Stack cards vertically

## Architecture

### Component Structure
```
StudentShowcaseSection
├── Container
│   ├── SectionHeading
│   ├── ProjectGrid (2-3 cols)
│   │   └── ProjectCard (x2-3)
│   │       ├── Screenshot/GIF
│   │       ├── ProjectTitle
│   │       ├── StudentName
│   │       ├── Description
│   │       ├── TechBadges
│   │       └── Hover: Lift with glow
│   ├── MetricHighlight (callout)
│   └── Optional: Gallery CTA

PricingSection
├── Container
│   ├── SectionHeading
│   ├── PricingGrid (2 cols)
│   │   └── PricingCard (x2)
│   │       ├── PopularBadge (conditional)
│   │       ├── TierName
│   │       ├── Price
│   │       ├── FeatureList (checkmarks)
│   │       ├── CTA Button
│   │       └── Hover: Lift with border glow
│   └── TrustBadges (money-back, secure, etc.)
```

### Visual Treatments
- Project cards: Screenshot as background with gradient overlay
- Pricing cards: Subtle IDE panel aesthetic (border, shadow)
- "Most Popular" badge: Accent color with glow
- Hover states: Lift (translateY), glow, scale

## Related Code Files

### To Create
- `bimacademy/components/sections/StudentShowcaseSection.tsx`
- `bimacademy/components/sections/PricingSection.tsx`
- `bimacademy/components/bim/ProjectCard.tsx`
- `bimacademy/components/bim/PricingCard.tsx`
- `bimacademy/components/bim/FeatureList.tsx`
- `bimacademy/data/student-projects.ts` - Project data
- `bimacademy/data/pricing-tiers.ts` - Pricing data
- `bimacademy/public/projects/` - Project screenshots

### To Modify
- `bimacademy/app/page.tsx` - Add StudentShowcaseSection + PricingSection

## Implementation Steps

1. **Prepare Project Assets**
   - Create/gather 2-3 project screenshots or GIFs
   - Mock Revit interface with plugins in action
   - Save to `public/projects/` directory
   - Optimize images (WebP, ~1200px wide)

2. **Create Project Data**
   - Create `data/student-projects.ts`
   - Array of projects:
     - Title, student name, description (1-2 sentences)
     - Screenshot path, tech badges used
   - Example: "Auto-Reinforcement Tool" - C#, Revit API, WPF

3. **Build Project Card Component**
   - Create `bim/ProjectCard.tsx`
   - Props: title, student, description, screenshot, techBadges
   - Screenshot as background with dark gradient overlay
   - Content overlaid on image
   - Tech badges at bottom
   - Hover: Lift and glow effect

4. **Build Student Showcase Section**
   - Create `sections/StudentShowcaseSection.tsx`
   - Grid layout: 2-3 cols desktop → 1 col mobile
   - Map student-projects data to ProjectCard
   - Add metric highlight callout (large text with accent color)
   - Optional: "View All Projects" CTA button

5. **Create Pricing Data**
   - Create `data/pricing-tiers.ts`
   - Two objects: Self-Paced, Mentorship
   - Properties: name, price, features (array), popular (boolean), cta
   - Features as array of strings for easy mapping

6. **Build Feature List Component**
   - Create `bim/FeatureList.tsx`
   - Props: features (string[])
   - Map features to list with checkmark icons
   - Style: Green checkmarks, aligned text

7. **Build Pricing Card Component**
   - Create `bim/PricingCard.tsx`
   - Props: name, price, features, popular, cta
   - Conditional "Most Popular" badge
   - Price display (large, accent color)
   - Feature list with checkmarks
   - CTA button (primary style)
   - Hover: Lift and border glow (syntax-highlight color)

8. **Build Pricing Section**
   - Create `sections/PricingSection.tsx`
   - 2-column grid (responsive: 2 → 1)
   - Map pricing-tiers data to PricingCard
   - Add trust badges below (icons: shield, lock, money-back)
   - Background: Subtle IDE panel texture

9. **Add Scroll Animations**
   - Project cards: Stagger fade-in (100ms delay each)
   - Pricing cards: Fade in simultaneously
   - Metric highlight: Count-up animation (optional)

10. **Responsive Optimization**
    - Desktop (1024px+): 2-3 col projects, 2 col pricing
    - Tablet (768px): 2 col projects, 2 col pricing
    - Mobile (640px-): 1 col stacked for both sections

11. **Accessibility & Conversion**
    - Alt text for project screenshots
    - Semantic pricing table structure
    - Clear focus states on CTAs
    - Screen reader announces pricing details
    - Test CTA button contrast (high visibility)

## Todo List

- [ ] Create/gather 2-3 project screenshots or mockups
- [ ] Optimize images and save to `public/projects/`
- [ ] Create `data/student-projects.ts` with project content
- [ ] Build `bim/ProjectCard.tsx` with background image
- [ ] Create `sections/StudentShowcaseSection.tsx`
- [ ] Add metric highlight callout with large text
- [ ] Create `data/pricing-tiers.ts` with tier details
- [ ] Build `bim/FeatureList.tsx` with checkmarks
- [ ] Build `bim/PricingCard.tsx` with hover effects
- [ ] Add "Most Popular" badge logic
- [ ] Create `sections/PricingSection.tsx`
- [ ] Add trust badges below pricing
- [ ] Implement scroll-triggered animations
- [ ] Test responsive layouts (projects + pricing)
- [ ] Audit CTA button visibility and contrast
- [ ] Add alt text for project images
- [ ] Test keyboard navigation for CTAs

## Success Criteria

✅ 2-3 project cards display with screenshots
✅ Project cards show tech badges and descriptions
✅ Metric highlight visible and prominent
✅ 2 pricing cards render side-by-side
✅ "Most Popular" badge displays correctly
✅ Feature lists styled with checkmarks
✅ CTA buttons highly visible with hover states
✅ Trust badges display below pricing
✅ Scroll animations trigger correctly
✅ Responsive layout works on all breakpoints
✅ All images have alt text
✅ CTAs keyboard accessible with visible focus
✅ Screen reader announces pricing structure

## Risk Assessment

### Risks
- **Project screenshots quality:** Mock screenshots may look fake
  - Mitigation: Use real student work if possible, or create high-fidelity mockups
- **Pricing display:** Actual prices may not be finalized
  - Mitigation: Use placeholders ($X, $Y) until pricing confirmed
- **Feature parity:** Confusion if feature lists not clearly differentiated
  - Mitigation: Use clear visual hierarchy, highlight exclusive features

### Conversion Concerns
- CTA buttons must be impossible to miss
  - Solution: Use accent color, large size, hover animation
- Pricing comparison should be scannable in <5 seconds
  - Solution: Use icons, short feature names, clear typography

## Security Considerations

- Validate any form inputs if adding waitlist/email capture
- Ensure payment links (if external) use HTTPS
- No sensitive student data displayed without permission
- Trust badges should link to legitimate policies (money-back, privacy)

## Next Steps

1. Complete Phase 5 implementation
2. Get real student project examples and testimonials
3. Finalize pricing structure with stakeholder
4. Move to Phase 6: Animations & Interactions
