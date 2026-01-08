---
title: "Phase 3 - Content Sections Redesign"
description: "Update Pain Points, Curriculum, Student Projects, Tech Stack, and Instructor sections with ClaudeKit styling"
priority: P2
status: pending
created: 2026-01-07
---

# Phase 3: Content Sections Redesign

## Overview

| Attribute | Value |
|-----------|-------|
| Date | 2026-01-07 |
| Duration | 6-8 hours |
| Priority | P2 (Medium) |
| Status | Pending |

## Context

- **References**:
  - `bimacademy/components/sections/pain-points-section.tsx`
  - `bimacademy/components/sections/curriculum-section.tsx`
  - `bimacademy/components/sections/student-projects-section.tsx`
  - `bimacademy/components/sections/tech-stack-section.tsx`
  - `bimacademy/components/sections/instructor-section.tsx`
- **Dependencies**: Phase 1, Phase 2
- **Design Tokens**: `bimacademy/lib/design-tokens.ts`

## Requirements

### Pain Points Section

#### Card Design Updates

```tsx
<Card
  className={cn(
    'group relative overflow-hidden h-full',
    'border-border/50 hover:border-[#D97757]/50',  // Coral hover border
    'transition-all duration-300 hover-lift glow-coral/20'  // Coral glow
  )}
>
```

#### Badge Updates

```tsx
// Problem badge - Coral accent
<Badge variant="outline" className="bg-[#D97757]/10 text-[#D97757] border-[#D97757]/50">
  Problem
</Badge>

// Metric badge - Bronze accent
<Badge className="bg-[#D4A27F]/20 text-[#D4A27F] border-[#D4A27F]/50 font-bold">
  {point.metric}
</Badge>
```

#### Icon Updates

```tsx
// X icon - Coral (replacing destructive red)
<X className="h-4 w-4 text-[#D97757]" />

// Zap icon - Bronze (replacing accent)
<Zap className="h-4 w-4 text-[#D4A27F]" />

// Arrow icon - Bronze gradient
<ArrowRight className="h-5 w-5 text-[#D4A27F]" />
```

#### Section CTA Paragraph

```tsx
<p className="text-xl md:text-2xl font-bold text-foreground">
  This isn't just about learning to code.
</p>
<p className="text-lg text-muted-foreground max-w-3xl mx-auto">
  It's about <span className="text-[#D97757] font-semibold">multiplying your impact</span>,{' '}
  <span className="text-[#D4A27F] font-semibold">doubling your salary</span>, and becoming{' '}
  <span className="text-[#E89B7A] font-semibold">irreplaceable</span> in your organization.
</p>
```

### Curriculum Section

#### Module Cards

```tsx
// Module card with coral accent
<div className="module-card border-border/50 hover:border-[#D97757]/50 transition-all duration-300">
  <div className="module-number text-[#D97757] font-bold">
    Module {index + 1}
  </div>
  <h3 className="text-xl font-bold text-foreground">
    {module.title}
  </h3>
  <p className="text-muted-foreground">
    {module.description}
  </p>
</div>
```

#### Module Number Badge

```tsx
// Coral gradient badge for module numbers
<div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br from-[#D97757] to-[#D4A27F]">
  <span className="text-white font-bold">{index + 1}</span>
</div>
```

#### Progress Indicator

```tsx
// Progress bar with bronze accent
<div className="progress-bar bg-[#D97757]/20">
  <div className="progress-fill bg-gradient-to-r from-[#D97757] to-[#D4A27F]" style={{ width: `${progress}%` }} />
</div>
```

#### Section Heading

```tsx
<SectionHeading
  level={2}
  subtitle="A structured path from beginner to professional BIM developer"
  className="text-gradient-coral-bronze"
>
  Complete Curriculum
</SectionHeading>
```

### Student Projects Section

#### Project Cards

```tsx
<Card className="project-card border-border/50 hover:border-[#D97757]/50 glow-coral/10">
  <div className="project-image relative overflow-hidden">
    <img src={project.image} alt={project.title} className="transition-transform duration-300 hover:scale-105" />
    <div className="project-overlay absolute inset-0 bg-gradient-to-t from-background to-transparent" />
  </div>
  <CardContent>
    <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
    <p className="text-muted-foreground">{project.description}</p>
    <div className="project-tags flex gap-2 mt-4">
      {project.tags.map(tag => (
        <Badge key={tag} className="bg-[#D97757]/20 text-[#D97757] border-[#D97757]/50">
          {tag}
        </Badge>
      ))}
    </div>
  </CardContent>
</Card>
```

#### Project Badge

```tsx
// Bronze badge for difficulty level
<Badge className="bg-[#D4A27F]/20 text-[#D4A27F] border-[#D4A27F]/50">
  {project.difficulty}
</Badge>
```

#### Before/After Stats

```tsx
// Time saved indicator with coral accent
<div className="stat-badge bg-[#D97757]/20 text-[#D97757] border-[#D97757]/50">
  <Clock className="h-4 w-4" />
  <span>{project.timeSaved}</span>
</div>
```

### Tech Stack Section

#### Icon Background Effects

Add circular gradient backgrounds to tech icons:

```tsx
// For each tech card, wrap icon in gradient background
<div className="icon-bg-coral rounded-full p-4 inline-flex">
  {tech.icon}
</div>
```

Or with dynamic colors based on tech:

```tsx
<div
  className="rounded-full p-4 inline-flex"
  style={{
    background: `radial-gradient(circle, ${tech.color}15 0%, transparent 70%)`
  }}
>
  {tech.icon}
</div>
```

#### Card Hover Effects

```tsx
<TechCard
  name={tech.name}
  logo={tech.icon}
  description={tech.description}
  className="card-hover-border hover:shadow-lg hover:shadow-[#D97757]/10"
/>
```

#### Section Badge

```tsx
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Learn the <span className="font-bold text-[#D97757]">exact same tools</span> used by
  professional BIM developers at{' '}
  <span className="font-semibold text-[#D4A27F]">
    Autodesk, Thornton Tomasetti, and Kohn Pedersen Fox
  </span>
</p>
```

#### Section Heading Updates

```tsx
<SectionHeading
  level={2}
  subtitle="Master the complete BIM development stack"
  className="text-gradient-coral-bronze"
>
  Professional Technology Stack
</SectionHeading>
```

### Instructor Section

#### Instructor Card

```tsx
<Card className="instructor-card border-border/50 hover:border-[#D97757]/50">
  <div className="instructor-avatar relative">
    <img src={instructor.avatar} alt={instructor.name} className="rounded-full w-24 h-24" />
    <div className="verified-badge absolute -bottom-1 -right-1 bg-[#D97757] rounded-full p-1">
      <Check className="h-4 w-4 text-white" />
    </div>
  </div>
  <h3 className="text-xl font-bold text-foreground">{instructor.name}</h3>
  <p className="text-[#D97757] font-medium">{instructor.title}</p>
  <p className="text-muted-foreground mt-2">{instructor.bio}</p>
</Card>
```

#### Stats/Badges

```tsx
// Experience badge - Coral
<Badge className="bg-[#D97757]/20 text-[#D97757] border-[#D97757]/50">
  {instructor.yearsExperience} Years Experience
</Badge>

// Students badge - Bronze
<Badge className="bg-[#D4A27F]/20 text-[#D4A27F] border-[#D4A27F]/50">
  {instructor.students}+ Students
</Badge>
```

#### Social Links

```tsx
// Social icons with coral hover
<a href={instructor.social.twitter} className="social-link hover:text-[#D97757] transition-colors">
  <Twitter className="h-5 w-5" />
</a>
<a href={instructor.social.linkedin} className="social-link hover:text-[#D97757] transition-colors">
  <Linkedin className="h-5 w-5" />
</a>
```

#### Section CTA

```tsx
<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
  Learn from <span className="font-bold text-[#D97757]">industry experts</span> who have built
  production systems at{' '}
  <span className="font-semibold text-[#D4A27F]">top AEC firms worldwide</span>.
</p>
```

### Section Layout Standardization

Apply consistent padding per ClaudeKit:

```tsx
// All sections should use:
<Section id="section-id" contained className="py-16">
  <Container>
    {/* content */}
  </Container>
</Section>
```

## Implementation Steps

1. **Update Pain Points cards** with coral/bronze color scheme
2. **Update Pain Points badges** to use new accent colors
3. **Update Pain Points icons** (X, Zap, ArrowRight) with new colors
4. **Update Pain Points CTA paragraph** with gradient text emphasis
5. **Update Curriculum module cards** with coral accents and gradient badges
6. **Update Student Projects cards** with coral/bronze styling
7. **Update Tech Stack icons** with circular gradient backgrounds
8. **Update Tech Stack cards** with hover border effects
9. **Update Instructor section** with coral/bronze accents
10. **Standardize section padding** to `py-16` across all sections

## Success Criteria

### Pain Points Section
- [ ] Cards have coral hover border and glow effect
- [ ] Problem badges use coral accent
- [ ] Metric badges use bronze accent
- [ ] X/Zap icons use new color palette
- [ ] CTA paragraph uses coral/bronze text emphasis

### Curriculum Section
- [ ] Module cards have coral hover border
- [ ] Module number badges use coral/bronze gradient
- [ ] Progress indicators use coral accent
- [ ] Section heading uses gradient text

### Student Projects Section
- [ ] Project cards have coral hover border and glow
- [ ] Difficulty badges use bronze accent
- [ ] Time saved indicators use coral accent
- [ ] Project tags use coral styling

### Tech Stack Section
- [ ] All tech icons have circular gradient backgrounds
- [ ] Cards have hover border transition effect
- [ ] Section badge uses coral/bronze emphasis
- [ ] Cards maintain readability with new backgrounds

### Instructor Section
- [ ] Instructor cards have coral hover border
- [ ] Experience badges use coral accent
- [ ] Students badges use bronze accent
- [ ] Social icons have coral hover effect
- [ ] Section CTA uses coral/bronze emphasis

### General
- [ ] All sections use consistent `py-16` padding
- [ ] Container uses `max-w-6xl` standard
- [ ] No breaking layout changes
- [ ] Animations remain functional

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Icon contrast issues | Medium | Low | Test each icon visibility |
| Card hover effects broken | Medium | Low | Verify transition CSS |
| Animation performance | Low | Medium | Use CSS transforms only |
| Too many coral accents | Low | Medium | Balance coral and bronze usage |

## Files to Modify

- `bimacademy/components/sections/pain-points-section.tsx`
- `bimacademy/components/sections/curriculum-section.tsx`
- `bimacademy/components/sections/student-projects-section.tsx`
- `bimacademy/components/sections/tech-stack-section.tsx`
- `bimacademy/components/sections/instructor-section.tsx`
- `bimacademy/app/globals.css` - Add icon background utilities if needed

## Testing Checklist

- [ ] Test card hover effects on all sections
- [ ] Verify badge visibility across all sections
- [ ] Check icon contrast on dark background
- [ ] Test scroll animations still work
- [ ] Verify mobile layout for all sections
- [ ] Test section navigation from header
- [ ] Verify gradient text rendering
