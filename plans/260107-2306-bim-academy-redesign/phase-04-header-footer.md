---
title: "Phase 4 - Header & Footer Redesign"
description: "Update header navigation and add footer with ClaudeKit styling"
priority: P2
status: pending
created: 2026-01-07
---

# Phase 4: Header & Footer Redesign

## Overview

| Attribute | Value |
|-----------|-------|
| Date | 2026-01-07 |
| Duration | 3-4 hours |
| Priority | P2 (Medium) |
| Status | Pending |

## Context

- **References**:
  - `bimacademy/components/layout/header.tsx`
  - (Footer needs to be created)
- **Dependencies**: Phase 1, Phase 2
- **Design Tokens**: `bimacademy/lib/design-tokens.ts`

## Requirements

### Header Component Updates

#### Logo Gradient

```tsx
{/* Current - blue to accent gradient */}
<span className="text-lg font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">

{/* New - coral to bronze gradient */}
<span className="text-lg font-bold bg-gradient-to-r from-[#D97757] to-[#D4A27F] bg-clip-text text-transparent">
```

#### Logo Icon Color

```tsx
<Code2 className="h-6 w-6 text-[#D97757]" />  {/* Coral instead of blue */}
```

#### CTA Button

```tsx
<Button className="glow-coral">  {/* Coral glow instead of blue */}
  Start Your Journey
</Button>
```

#### Navigation Links

```tsx
<nav className="hidden md:flex items-center gap-6">
  <button
    onClick={() => scrollToSection('curriculum')}
    className="text-sm text-muted-foreground hover:text-[#D97757] transition-colors"
  >
    Curriculum
  </button>
  {/* ... other links with hover coral transition */}
</nav>
```

#### Header Shadow on Scroll

```tsx
{/* Current */}
scrolled && 'shadow-lg shadow-black/20',

{/* Enhanced with subtle coral tint */}
scrolled && 'shadow-lg shadow-[#D97757]/10',
```

### Footer Component (New)

Create footer with ClaudeKit styling:

```tsx
// bimacademy/components/layout/footer.tsx

import { Container } from '@/components/bim';
import { Code2, Github, Twitter, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
      <Container className="py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Code2 className="h-6 w-6 text-[#D97757]" />
              <span className="text-lg font-bold bg-gradient-to-r from-[#D97757] to-[#D4A27F] bg-clip-text text-transparent">
                BIM Developer
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Transform from BIM User to Developer. Master C#, Revit API, and build powerful automation tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D97757]">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#curriculum" className="hover:text-[#D4A27F] transition-colors">Curriculum</a></li>
              <li><a href="#projects" className="hover:text-[#D4A27F] transition-colors">Student Projects</a></li>
              <li><a href="#tech-stack" className="hover:text-[#D4A27F] transition-colors">Tech Stack</a></li>
              <li><a href="#faq" className="hover:text-[#D4A27F] transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D97757]">Resources</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-[#D4A27F] transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-[#D4A27F] transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-[#D4A27F] transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-[#D4A27F] transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-4 text-[#D97757]">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#D97757] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#D97757] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#D97757] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#D97757] transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; 2024 BIM Developer Academy. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[#D4A27F] transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-[#D4A27F] transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

### Header Layout Updates

Ensure proper spacing and container:

```tsx
<header
  className={cn(
    'fixed top-0 left-0 right-0 z-50',
    'bg-background/80 backdrop-blur-md',
    'border-b border-border/40',
    'transition-all duration-200',
    scrolled && 'shadow-lg shadow-[#D97757]/10',
    className
  )}
>
  <Container>
    <div className="flex items-center justify-between h-16">
      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
        <Code2 className="h-6 w-6 text-[#D97757]" />
        <span className="text-lg font-bold bg-gradient-to-r from-[#D97757] to-[#D4A27F] bg-clip-text text-transparent">
          BIM Developer
        </span>
      </div>

      {/* Navigation */}
      <nav className="hidden md:flex items-center gap-6">
        {/* ... nav items with hover coral transition */}
      </nav>

      {/* CTA Button */}
      <Button className="glow-coral">
        Start Your Journey
      </Button>
    </div>
  </Container>
</header>
```

## Implementation Steps

1. **Update header logo** gradient to coral/bronze
2. **Update header logo icon** color to coral
3. **Update header CTA** to coral glow
4. **Update header navigation** hover states to coral
5. **Update header scroll shadow** with subtle coral tint
6. **Create footer component** with proper layout
7. **Add footer to layout** (layout.tsx or page.tsx)
8. **Test header scroll behavior**
9. **Test footer responsive layout**

## Success Criteria

### Header
- [ ] Logo uses coral-to-bronze gradient text
- [ ] Logo icon is coral color
- [ ] CTA button has coral glow effect
- [ ] Navigation links have coral hover transition
- [ ] Scroll shadow has subtle coral tint
- [ ] Mobile menu works (if implemented)

### Footer
- [ ] Footer component created with proper layout
- [ ] Footer uses coral/bronze accent colors
- [ ] Social icons have coral hover effect
- [ ] Responsive layout works on mobile
- [ ] Navigation links functional
- [ ] Copyright and legal links present

## Risk Assessment

| Risk | Impact | Likelihood | Mitigation |
|------|--------|------------|------------|
| Header scroll broken | High | Low | Test scroll behavior thoroughly |
| Footer not responsive | Medium | Medium | Test on multiple breakpoints |
| Mobile menu broken | Medium | Low | Verify mobile view |

## Files to Modify

- `bimacademy/components/layout/header.tsx`
- `bimacademy/components/layout/footer.tsx` (new file)
- `bimacademy/app/page.tsx` or layout - add footer import
- `bimacademy/app/layout.tsx` - optional footer placement

## Testing Checklist

- [ ] Test header scroll shadow
- [ ] Test navigation click/scroll behavior
- [ ] Test CTA button hover
- [ ] Test footer responsive layout
- [ ] Test social icon hover effects
- [ ] Verify mobile header visibility
- [ ] Test footer links
