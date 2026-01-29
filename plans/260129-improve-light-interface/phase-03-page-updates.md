---
title: "Phase 3: Page & Section Updates"
description: "Update all pages and section components to use light theme"
status: pending
priority: P1
effort: 4h
branch: feat/light-theme-transformation
tags: [pages, sections, refactor]
created: 2026-01-29
---

## Context Links

- **Research:** [Tailwind CSS Patterns](../research/researcher-02-tailwind-light-theme-patterns.md)
- **Dependencies:** [Phase 1](phase-01-css-variables-foundation.md) ✅, [Phase 2](phase-02-component-updates.md) ✅ BOTH MUST COMPLETE FIRST
- **Blocks:** Phase 5 (Testing)

## Overview

**Date:** 2026-01-29
**Description:** Update all page files and section components to use new light theme, fix hardcoded color values, ensure visual consistency.

**Priority:** HIGH - Pages are what users see, critical for user experience.

## Key Insights from Research

### Section Background Patterns for Light Themes

**Alternating Sections:**
```tsx
// Pure white section
<Section className="bg-background">

// Light gray section
<Section className="bg-muted">

// Accent color section (very light)
<Section className="bg-primary/5">
```

### Hero Section Patterns

**Light Theme Hero:**
```tsx
<section className="bg-gradient-to-b from-white to-gray-50">
  {/* Content */}
</section>
```

## Requirements

### Must Complete
1. ✅ Update all `components/sections/*` components (11 files)
2. ✅ Update `app/page.tsx` (landing page)
3. ✅ Update `app/courses/*` pages (3 files)
4. ✅ Update `app/bimspeed-promo/*` pages (4 files)
5. ✅ Fix hardcoded color values in 16 files

### Must Not Break
1. ❌ Don't break page layouts
2. ❌ Don't break responsive behavior
3. ❌ Don't remove functionality
4. ❌ Don't change content structure

## Architecture

### Page Hierarchy
```
app/
├── page.tsx                    # Landing page (Priority 1)
├── layout.tsx                  # Root layout (Priority 1)
├── courses/                    # Course pages (Priority 2)
│   ├── page.tsx               # Course listing
│   ├── [courseId]/            # Course detail
│   │   ├── page.tsx
│   │   └── loading.tsx
│   └── not-found.tsx
└── bimspeed-promo/            # Promo page (Priority 3)
    ├── page.tsx
    ├── components/
    │   ├── hero-section.tsx
    │   ├── countdown-timer.tsx
    │   ├── video-grid.tsx
    │   └── registration-form.tsx
    └── api/route.ts

components/sections/            # Section components (Priority 1)
├── hero-section.tsx           # Hero
├── pain-points-section.tsx    # Pain points
├── curriculum-section.tsx     # Curriculum
├── tech-stack-section.tsx     # Tech stack
├── instructor-section.tsx     # Instructor
├── student-projects-section.tsx # Projects
├── course-signup-section.tsx  # CTA
├── video-section.tsx          # Video
├── code-animation.tsx         # Code display
└── curriculum-list.tsx        # Curriculum list
```

## Related Code Files

### Priority 1: Core Pages & Sections (Critical Path)
1. `app/layout.tsx` - Root layout with theme
2. `app/page.tsx` - Landing page
3. `components/sections/hero-section.tsx` - Hero
4. `components/sections/pain-points-section.tsx` - Pain points
5. `components/sections/curriculum-section.tsx` - Curriculum
6. `components/sections/tech-stack-section.tsx` - Tech stack
7. `components/sections/instructor-section.tsx` - Instructor
8. `components/sections/student-projects-section.tsx` - Projects
9. `components/sections/course-signup-section.tsx` - CTA
10. `components/sections/video-section.tsx` - Video

### Priority 2: Course Pages
11. `app/courses/page.tsx` - Course listing
12. `app/courses/[courseId]/page.tsx` - Course detail
13. `app/courses/[courseId]/loading.tsx` - Loading state
14. `app/courses/not-found.tsx` - 404 page
15. `components/sections/curriculum-list.tsx` - Curriculum list
16. `components/course/*` - Course components (6 files)

### Priority 3: BIMSpeed Promo
17. `app/bimspeed-promo/page.tsx` - Promo page
18. `app/bimspeed-promo/components/hero-section.tsx`
19. `app/bimspeed-promo/components/countdown-timer.tsx`
20. `app/bimspeed-promo/components/video-grid.tsx`
21. `app/bimspeed-promo/components/registration-form.tsx`

### Priority 4: Other Pages
22. `app/profile/page.tsx` - User profile
23. `components/sections/code-animation.tsx` - Code animation

## Implementation Steps

### Step 1: Update Root Layout (15 min)

**File:** `app/layout.tsx`

**Changes:**
```tsx
// Remove dark mode class if present
<html lang="en" className="scroll-smooth">
  {/* No dark class */}
</html>

// Verify body uses CSS variables
<body className={cn(
  "bg-background text-foreground antialiased",
  fontSans.variable
)}>
```

### Step 2: Update Landing Page Sections (2h)

#### 2.1 Hero Section (30 min)
**File:** `components/sections/hero-section.tsx`

**Current Issues:**
- Likely has dark background colors
- Might use glow effects
- Gradient text might need update

**Changes:**
```tsx
// Update section background
<section className="bg-gradient-to-b from-background to-muted relative overflow-hidden">

  // Update gradient text if present
  <h1 className="text-4xl md:text-6xl font-bold text-gradient mb-6">
    {/* Title */}
  </h1>

  // Update CTA buttons
  <div className="flex flex-col sm:flex-row gap-4">
    <Button size="lg" className="button-hover-shadow">
      Get Started Free
    </Button>
    <Button size="lg" variant="outline" className="bg-white border-gray-300">
      View Curriculum
    </Button>
  </div>
</section>
```

#### 2.2 Video Section (20 min)
**File:** `components/sections/video-section.tsx`

**Changes:**
```tsx
// Update video container
<div className="bg-card border border-border rounded-lg shadow-light overflow-hidden">
  {/* Video player */}
</div>
```

#### 2.3 Pain Points Section (20 min)
**File:** `components/sections/pain-points-section.tsx`

**Pattern:**
```tsx
// Update cards
<div className="grid gap-6 md:grid-cols-3">
  {painPoints.map((point) => (
    <div key={point.title} className="bg-card border border-border rounded-lg p-6 shadow-light">
      <Icon className="h-10 w-10 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-card-foreground mb-2">
        {point.title}
      </h3>
      <p className="text-muted-foreground">
        {point.description}
      </p>
    </div>
  ))}
</div>
```

#### 2.4 Curriculum Section (20 min)
**File:** `components/sections/curriculum-section.tsx`

**Pattern:**
```tsx
// Update section background
<Section className="bg-muted">

  // Update accordion items
  <AccordionItem className="bg-card border border-border rounded-lg mb-4">
    <AccordionTrigger className="text-card-foreground hover:text-primary">
      {section.title}
    </AccordionTrigger>
    <AccordionContent className="text-muted-foreground">
      {section.content}
    </AccordionContent>
  </AccordionItem>
</Section>
```

#### 2.5 Tech Stack Section (15 min)
**File:** `components/sections/tech-stack-section.tsx`

**Changes:**
```tsx
// Update tech cards
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
  {techStack.map((tech) => (
    <div key={tech.name} className="bg-card border border-border rounded-lg p-4 shadow-light hover:shadow-light-md transition-shadow">
      <tech.icon className="h-8 w-8 text-primary mb-2" />
      <p className="text-sm font-medium text-card-foreground">{tech.name}</p>
    </div>
  ))}
</div>
```

#### 2.6 Instructor Section (15 min)
**File:** `components/sections/instructor-section.tsx`

**Pattern:**
```tsx
// Update instructor card
<div className="bg-card border border-border rounded-lg p-8 shadow-light max-w-2xl mx-auto">
  <Image
    src={instructor.image}
    alt={instructor.name}
    className="w-32 h-32 rounded-full border-4 border-primary mb-4"
  />
  <h3 className="text-2xl font-bold text-card-foreground mb-2">
    {instructor.name}
  </h3>
  <p className="text-muted-foreground mb-4">
    {instructor.bio}
  </p>
</div>
```

#### 2.7 Student Projects Section (20 min)
**File:** `components/sections/student-projects-section.tsx`

**Pattern:**
```tsx
// Update project cards
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {projects.map((project) => (
    <div key={project.title} className="bg-card border border-border rounded-lg overflow-hidden shadow-light hover:shadow-light-md transition-shadow group">
      <div className="aspect-video bg-muted relative overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h4 className="font-semibold text-card-foreground mb-2">
          {project.title}
        </h4>
        <p className="text-sm text-muted-foreground">
          {project.description}
        </p>
      </div>
    </div>
  ))}
</div>
```

#### 2.8 Course Signup Section (15 min)
**File:** `components/sections/course-signup-section.tsx`

**Pattern:**
```tsx
// Update CTA section
<section className="bg-primary/5 border-t border-b border-border">
  <Container>
    <div className="text-center max-w-2xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-card-foreground mb-4">
        Ready to Start Learning?
      </h2>
      <p className="text-muted-foreground mb-8">
        Join thousands of students transforming their careers
      </p>
      <Button size="lg" className="button-hover-shadow">
        Enroll Now - It's Free
      </Button>
    </div>
  </Container>
</section>
```

### Step 3: Update Landing Page Structure (15 min)

**File:** `app/page.tsx`

**Changes:**
```tsx
// Update footer background
<Section className="bg-muted">
  <Container>
    <footer className="py-12 border-t border-border">
      {/* Footer content - uses CSS variables */}
    </footer>
  </Container>
</Section>
```

### Step 4: Update Course Pages (1h)

#### 4.1 Course Listing Page (20 min)
**File:** `app/courses/page.tsx`

**Pattern:**
```tsx
// Update course cards
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {courses.map((course) => (
    <Link key={course.id} href={`/courses/${course.id}`}>
      <div className="bg-card border border-border rounded-lg overflow-hidden shadow-light hover:shadow-light-md transition-shadow group">
        {/* Course card content */}
      </div>
    </Link>
  ))}
</div>
```

#### 4.2 Course Detail Page (30 min)
**File:** `app/courses/[courseId]/page.tsx`

**Key Areas:**
```tsx
// Update header section
<div className="bg-card border-b border-border">
  <Container>
    <div className="py-8">
      <Badge variant="secondary" className="mb-4">
        {course.level}
      </Badge>
      <h1 className="text-4xl font-bold text-card-foreground mb-4">
        {course.title}
      </h1>
      <p className="text-lg text-muted-foreground">
        {course.description}
      </p>
    </div>
  </Container>
</div>

// Update curriculum sections
<div className="space-y-4">
  {course.sections.map((section) => (
    <div key={section.id} className="bg-card border border-border rounded-lg p-6 shadow-light">
      {/* Section content */}
    </div>
  ))}
</div>
```

#### 4.3 Course Components (10 min)
**Files:** `components/course/*`

**Pattern for all course components:**
- Replace dark backgrounds with `bg-card`
- Replace light text with `text-card-foreground`
- Add borders where needed: `border-border`
- Add shadows: `shadow-light`

### Step 5: Update BIMSpeed Promo Page (30 min)

#### 5.1 Promo Page (10 min)
**File:** `app/bimspeed-promo/page.tsx`

**Pattern:**
```tsx
// Update page structure
<main className="bg-background min-h-screen">
  <HeroSection />
  <CountdownTimer />
  <VideoGrid />
  <RegistrationForm />
</main>
```

#### 5.2 Promo Components (20 min)
**Files:** `app/bimspeed-promo/components/*`

**Hero Section:**
```tsx
// Update hero styling
<section className="bg-gradient-to-b from-background to-muted">
  <Container>
    <div className="text-center py-16">
      <h1 className="text-5xl font-bold text-gradient mb-6">
        BIMSpeed Promo
      </h1>
      {/* Content */}
    </div>
  </Container>
</section>
```

**Countdown Timer:**
```tsx
// Update timer cards
<div className="flex gap-4 justify-center">
  {timeUnits.map((unit) => (
    <div key={unit.label} className="bg-card border border-border rounded-lg p-6 shadow-light min-w-[100px]">
      <div className="text-4xl font-bold text-primary mb-2">
        {unit.value}
      </div>
      <div className="text-sm text-muted-foreground uppercase">
        {unit.label}
      </div>
    </div>
  ))}
</div>
```

**Video Grid:**
```tsx
// Update video grid
<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
  {videos.map((video) => (
    <div key={video.id} className="bg-card border border-border rounded-lg overflow-hidden shadow-light">
      {/* Video thumbnail */}
    </div>
  ))}
</div>
```

**Registration Form:**
```tsx
// Update form container
<div className="bg-card border border-border rounded-lg p-8 shadow-light max-w-md mx-auto">
  <form className="space-y-4">
    <Input className="bg-white border-gray-300" placeholder="Name" />
    <Input className="bg-white border-gray-300" type="email" placeholder="Email" />
    <Button className="button-hover-shadow w-full">
      Register Now
    </Button>
  </form>
</div>
```

### Step 6: Fix Hardcoded Colors (30 min)

**Search for hardcoded colors in all page/section files:**

```bash
# Find all hardcoded colors
grep -r "bg-\[#" app/ components/sections/ app/bimspeed-promo/
```

**Expected files with hardcoded colors (from research):**
1. `components/sections/tech-stack-section.tsx`
2. `components/sections/pricing-section.tsx`
3. `components/sections/pain-points-section.tsx`
4. `components/sections/instructor-section.tsx`
5. `components/sections/hero-section.tsx`
6. `components/sections/course-signup-section.tsx`
7. `components/sections/code-animation.tsx`
8. `components/course/video-preview-skeleton.tsx`
9. `components/course/course-video-player.tsx`
10. `components/auth/register-form.tsx`
11. `components/auth/login-form.tsx`
12. `components/auth/google-login-button.tsx`
13. `app/profile/page.tsx`

**Pattern for fixing:**
```tsx
// Before:
className="bg-[#1A1A1A]"
className="text-[#D97757]"
className="border-[#404040]"

// After:
className="bg-background"
className="text-primary"
className="border-border"
```

## Todo List

### Core Pages & Layout
- [ ] app/layout.tsx - Remove dark mode class
- [ ] app/page.tsx - Update footer and structure

### Section Components
- [ ] hero-section.tsx - Update background and CTA buttons
- [ ] video-section.tsx - Update video container
- [ ] pain-points-section.tsx - Update cards
- [ ] curriculum-section.tsx - Update accordion
- [ ] tech-stack-section.tsx - Update tech cards
- [ ] instructor-section.tsx - Update instructor card
- [ ] student-projects-section.tsx - Update project cards
- [ ] course-signup-section.tsx - Update CTA section
- [ ] curriculum-list.tsx - Update list styling
- [ ] code-animation.tsx - Update code display

### Course Pages
- [ ] courses/page.tsx - Update course listing
- [ ] courses/[courseId]/page.tsx - Update course detail
- [ ] courses/[courseId]/loading.tsx - Update loading state
- [ ] courses/not-found.tsx - Update 404 page
- [ ] course/course-header.tsx - Update header
- [ ] course/course-page.tsx - Update page structure
- [ ] course/course-video-player.tsx - Update player
- [ ] course/curriculum-panel.tsx - Update panel
- [ ] course/curriculum-accordion.tsx - Update accordion
- [ ] course/curriculum-section.tsx - Update sections
- [ ] course/lesson-item.tsx - Update lessons
- [ ] course/video-preview-skeleton.tsx - Update skeleton
- [ ] course/curriculum-skeleton.tsx - Update skeleton

### BIMSpeed Promo
- [ ] bimspeed-promo/page.tsx - Update page structure
- [ ] bimspeed-promo/components/hero-section.tsx - Update hero
- [ ] bimspeed-promo/components/countdown-timer.tsx - Update timer
- [ ] bimspeed-promo/components/video-grid.tsx - Update grid
- [ ] bimspeed-promo/components/registration-form.tsx - Update form

### Other Pages
- [ ] profile/page.tsx - Update profile page

### Hardcoded Colors
- [ ] Search all page/section files for hardcoded colors
- [ ] Replace with CSS variable references
- [ ] Verify zero hardcoded colors remain

### Testing
- [ ] Visual test each page
- [ ] Test responsive behavior
- [ ] Test all interactive elements
- [ ] Verify no layout shifts

## Success Criteria

### Must Complete
- ✅ All page and section files updated (30+ files)
- ✅ No hardcoded colors remain (verified by grep)
- ✅ All sections use CSS variables
- ✅ Visual consistency across all pages
- ✅ Alternating section backgrounds work correctly

### Must Not Break
- ✅ Page layouts preserved
- ✅ Responsive behavior intact
- ✅ All functionality working
- ✅ No broken links or navigation
- ✅ Course videos play correctly

### Validation Evidence
- ✅ Screenshot of all major pages
- ✅ Zero grep results for hardcoded colors
- ✅ Manual testing checklist complete
- ✅ No console errors on any page

## Risk Assessment

### High Risk
1. **Hardcoded colors in many files** - Easy to miss some
   - **Mitigation:** Use grep systematically, check each file
2. **Section background inconsistencies** - Some might still be dark
   - **Mitigation:** Use CSS variables for all backgrounds
3. **Video player broken** - Custom video player might have dark styles
   - **Mitigation:** Test video player thoroughly

### Medium Risk
1. **Alternating sections not visible** - White on white hard to see
   - **Mitigation:** Use bg-muted for alternating sections
2. **Card stacking issues** - White cards on white background
   - **Mitigation:** Always add border-border to cards
3. **CTA buttons not prominent** - Lost on white background
   - **Mitigation:** Use orange-red with shadow-light

### Low Risk
1. **Layout shifts** - Content might move with theme change
   - **Mitigation:** Test responsive breakpoints

## Security Considerations

None - Page styling changes don't affect security.

## Next Steps

After completing this phase:

1. **Phase 4:** Refine visual effects (shadows, transitions, animations)
2. **Phase 5:** Comprehensive testing (accessibility, cross-browser)

**CRITICAL:** Do not proceed to Phase 4 until:
- ✅ All page and section files updated
- ✅ Zero hardcoded colors found by grep
- ✅ Visual testing complete on all pages
- ✅ Changes committed to git

## Troubleshooting

### Issue: Page still shows dark sections
**Cause:** Section background not updated or CSS cache
**Fix:**
1. Check section className for `bg-background` or `bg-muted`
2. Hard refresh browser
3. Clear Next.js cache: `rm -rf .next`

### Issue: Cards invisible on white background
**Cause:** Missing borders or shadows
**Fix:** Always add both:
```tsx
className="bg-card border border-border shadow-light"
```

### Issue: Alternating sections not visible
**Cause:** Both sections using white background
**Fix:** Use different backgrounds:
```tsx
// Section 1
<Section className="bg-background">

// Section 2
<Section className="bg-muted">
```

### Issue: Video player has dark controls
**Cause:** Video player styling not updated
**Fix:** Check `components/course/course-video-player.tsx` and update player styles

---

**Phase Status:** ⏳ Ready to start (after Phase 2)
**Estimated Completion:** 4 hours
**Blocks:** Phase 5 (Testing)
