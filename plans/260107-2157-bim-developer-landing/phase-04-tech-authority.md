# Phase 4: Tech Stack & Instructor Authority

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 3: Pain Points & Curriculum](./phase-03-pain-curriculum.md)
- Design System: [Phase 1](./phase-01-design-system.md)

## Overview
- **Priority:** P1 (Credibility building)
- **Status:** Pending
- **Effort:** 2 hours
- **Description:** Tech stack showcase with animated logos and instructor authority section with credibility indicators

## Key Insights
- Tech stack signals "real tools used by pros"
- Logo animations add polish without being distracting
- Instructor credibility critical for course conversions
- Stats must be specific and impressive (10+ years, 50+ plugins, 500+ students)
- Photo should show "developer in action" not generic headshot

## Requirements

### Tech Stack Section
- Heading: "Master Industry-Standard Tools"
- Horizontal logo strip or grid (7 technologies)
- Technologies: Visual Studio 2022, C#, .NET Framework, Revit API, GitHub, WPF, PyRevit
- Logos with grayscale → color on hover
- Caption: "Industry-standard tools used by top AEC tech firms."
- Subtle reveal animation on scroll

### Instructor Authority Section
- Heading: "Learn from a Senior BIM Solution Architect."
- Bio card layout (photo + content)
- Name: [Insert Name] placeholder
- Title: "Founder of BIMDev & Senior Plugin Developer"
- Stats: "10+ Years in AEC", "50+ Custom Plugins Deployed", "500+ Students Mentored"
- Professional photo: Multi-monitor setup with code visible
- Trust signals: Companies worked with, certifications (optional)

### Non-Functional
- Logos should lazy load (performance)
- Bio photo should use `next/image` optimization
- Hover states smooth (200ms transition)
- Accessible alt text for logos and photo

## Architecture

### Component Structure
```
TechStackSection
├── Container
│   ├── SectionHeading
│   ├── TechGrid (7 logos, responsive)
│   │   └── TechLogo (x7)
│   │       ├── Image (grayscale filter)
│   │       ├── Label
│   │       └── Hover: Remove grayscale, add glow
│   └── Caption

InstructorSection
├── Container
│   ├── SectionHeading
│   ├── BioCard
│   │   ├── PhotoColumn
│   │   │   └── Image (Next.js optimized)
│   │   └── ContentColumn
│   │       ├── Name (H3)
│   │       ├── Title (subtitle)
│   │       ├── StatsRow (3 badges)
│   │       │   ├── Stat: Years
│   │       │   ├── Stat: Plugins
│   │       │   └── Stat: Students
│   │       ├── Bio Paragraph (optional)
│   │       └── TrustIndicators (companies/certs)
```

### Logo Animation Strategy
- Initial: Grayscale filter (100%)
- Hover: Color reveal + scale(1.05) + glow
- Scroll trigger: Fade in with stagger (50ms delay each)
- Mobile: Remove hover, always show color

## Related Code Files

### To Create
- `bimacademy/components/sections/TechStackSection.tsx`
- `bimacademy/components/sections/InstructorSection.tsx`
- `bimacademy/components/bim/TechLogo.tsx`
- `bimacademy/components/bim/StatBadge.tsx`
- `bimacademy/data/tech-stack.ts` - Logo URLs and names
- `bimacademy/data/instructor.ts` - Instructor bio data
- `bimacademy/public/logos/` - Tech logo images (SVG preferred)
- `bimacademy/public/instructor/` - Instructor photo

### To Modify
- `bimacademy/app/page.tsx` - Add TechStackSection + InstructorSection

## Implementation Steps

1. **Gather Tech Logos**
   - Download/create SVG logos for: VS 2022, C#, .NET, Revit API, GitHub, WPF, PyRevit
   - Save to `public/logos/` directory
   - Ensure consistent sizing (square aspect ratio, ~200x200px)
   - Optimize SVGs with SVGO

2. **Create Tech Stack Data**
   - Create `data/tech-stack.ts`
   - Array of objects: { name, logo, description (optional) }
   - 7 technologies with display order

3. **Build Tech Logo Component**
   - Create `bim/TechLogo.tsx`
   - Props: name, logo, showLabel
   - Image with grayscale filter by default
   - Hover: Remove filter, add glow, scale
   - Label below logo (optional)

4. **Build Tech Stack Section**
   - Create `sections/TechStackSection.tsx`
   - Grid layout: 7 cols desktop → 4 → 3 → 2 (responsive)
   - Map tech-stack data to TechLogo components
   - Add caption text
   - Scroll animation: Stagger fade-in with Intersection Observer

5. **Prepare Instructor Assets**
   - Placeholder photo or instructor's actual photo
   - Place in `public/instructor/photo.jpg`
   - Optimize image (WebP format, ~800px wide)
   - Alt text: "BIM Developer instructor at multi-monitor coding setup"

6. **Create Instructor Data**
   - Create `data/instructor.ts`
   - Name, title, photo path
   - Stats: years, plugins, students (numbers + labels)
   - Bio paragraph (2-3 sentences)
   - Trust indicators (optional)

7. **Build Stat Badge Component**
   - Create `bim/StatBadge.tsx`
   - Props: number, label, icon (optional)
   - Large number with accent color
   - Small label below
   - Icon next to number (optional)

8. **Build Instructor Section**
   - Create `sections/InstructorSection.tsx`
   - 2-column layout: photo left, content right (reverse on mobile)
   - Use `next/image` for photo optimization
   - Display name, title, stats row (3 badges)
   - Optional: Bio paragraph and trust indicators
   - Background: Subtle gradient or pattern

9. **Add Animations**
   - Tech logos: Stagger fade-in on scroll (50ms delay each)
   - Instructor section: Fade in photo + content together
   - Respect `prefers-reduced-motion`

10. **Responsive Optimization**
    - Desktop (1024px+): 7-col grid tech, 2-col instructor
    - Tablet (768px): 4-col grid tech, 2-col instructor
    - Mobile (640px-): 2-col grid tech, 1-col instructor (photo above content)

11. **Accessibility Audit**
    - Alt text for all logos and instructor photo
    - ARIA labels for stat badges
    - Keyboard focus states
    - Color contrast for all text

## Todo List

- [ ] Download/create tech logos (VS 2022, C#, .NET, Revit API, GitHub, WPF, PyRevit)
- [ ] Optimize logos to SVG and save to `public/logos/`
- [ ] Create `data/tech-stack.ts` with logo data
- [ ] Build `bim/TechLogo.tsx` with hover effects
- [ ] Create `sections/TechStackSection.tsx` with grid layout
- [ ] Add scroll-triggered stagger animation for logos
- [ ] Prepare instructor photo (placeholder or real)
- [ ] Optimize and save photo to `public/instructor/`
- [ ] Create `data/instructor.ts` with bio data
- [ ] Build `bim/StatBadge.tsx` component
- [ ] Create `sections/InstructorSection.tsx` with 2-col layout
- [ ] Use `next/image` for photo optimization
- [ ] Add fade-in animation for instructor section
- [ ] Test responsive layouts (tech grid + instructor bio)
- [ ] Add alt text for all images
- [ ] Audit color contrast and accessibility
- [ ] Test keyboard navigation

## Success Criteria

✅ 7 tech logos display in responsive grid
✅ Logos animate from grayscale to color on hover
✅ Scroll animation staggers logo reveals
✅ Instructor section renders with photo and content
✅ Stats badges styled with accent colors
✅ Photo optimized with `next/image`
✅ Responsive layout works on all breakpoints
✅ All images have descriptive alt text
✅ Keyboard navigation works for all interactive elements
✅ Reduced motion mode removes animations

## Risk Assessment

### Risks
- **Logo availability:** May not find high-quality logos for all techs
  - Mitigation: Create simple SVG badges with text if needed, use official brand assets
- **Instructor photo quality:** Stock photo may look generic
  - Mitigation: Use placeholder, request professional photo from instructor
- **Grid alignment:** Uneven logo sizes cause misalignment
  - Mitigation: Normalize logo sizes with CSS, use object-fit

### Performance Concerns
- Multiple logo images could slow load
  - Mitigation: Use SVG (small file size), lazy load with Intersection Observer
- Large instructor photo impacts LCP
  - Mitigation: Use `next/image` with priority, optimize to WebP

## Security Considerations

- Ensure logo images from trusted sources (official brand sites)
- Use `next/image` to prevent hotlinking attacks
- No user input in this phase
- Validate external links (if adding instructor LinkedIn/GitHub)

## Next Steps

1. Complete Phase 4 implementation
2. Get instructor's photo and bio details
3. Verify logo usage rights for all tech brands
4. Move to Phase 5: Social Proof & Pricing
