# Phase 1: Design System & Foundation

## Context Links
- Parent: [plan.md](./plan.md)
- Codebase: `bimacademy/` (Next.js 16 + React 19 + Tailwind 4)
- Components: `bimacademy/components/`

## Overview
- **Priority:** P1 (Critical foundation)
- **Status:** Pending
- **Effort:** 3 hours
- **Description:** Establish design system, color palette, typography, spacing scale, and reusable UI components matching VS Code aesthetic

## Key Insights
- Project uses Next.js 16 with App Router
- Tailwind CSS 4 + shadcn/ui already configured (radix-vega style)
- Existing shadcn components: Button, Card, Badge, Alert Dialog, Select, Input
- CSS variables enabled - perfect for IDE theme customization
- Strategy: Extend shadcn components with IDE aesthetic via CSS variables
- Fira Code font requires external import (Google Fonts or self-hosted)

## Requirements

### Functional
- Color system with VS Code palette
- Typography system (Roboto + Fira Code)
- Spacing scale (4px, 8px, 12px, 16px, 24px, 32px, 48px, 64px)
- Reusable components (Button, Card, Badge, Section, Container)
- Syntax highlighting color tokens
- Responsive breakpoints (mobile: 640px, tablet: 768px, desktop: 1024px, xl: 1280px)

### Non-Functional
- Type-safe design tokens
- Consistent with existing Tailwind setup
- Accessible color contrast (WCAG AA)
- No breaking changes to existing code

## Architecture

### Design Token System
```typescript
// lib/design-tokens.ts
export const colors = {
  ide: {
    bg: {
      primary: '#1E1E1E',
      secondary: '#252526',
      tertiary: '#2D2D30',
    },
    syntax: {
      blue: '#569CD6',
      purple: '#C586C6',
      green: '#4EC9B0',
      yellow: '#DCDCAA',
      orange: '#CE9178',
    },
    text: {
      primary: '#D4D4D4',
      secondary: '#858585',
      muted: '#6A6A6A',
    },
    border: '#3E3E42',
    accent: '#007ACC',
  }
}
```

### Component Architecture
```
components/
├── ui/                     # shadcn/ui components (existing - DO NOT MODIFY)
│   ├── button.tsx         # Use via import
│   ├── card.tsx           # Use via import
│   ├── badge.tsx          # Use via import
│   └── ...other shadcn components
├── bim/                    # BIM-specific extensions (new)
│   ├── tech-card.tsx      # Extends shadcn Card
│   ├── project-card.tsx   # Extends shadcn Card
│   ├── stat-badge.tsx     # Extends shadcn Badge
│   ├── section.tsx        # Page section wrapper
│   ├── container.tsx      # Content container
│   ├── code-block.tsx     # Syntax-highlighted code
│   └── section-heading.tsx # Consistent headings
└── layout/                 # Layout components (new)
    ├── header.tsx
    ├── footer.tsx
    └── navigation.tsx
```

## Related Code Files

### To Create
- `bimacademy/lib/design-tokens.ts` - Design system tokens
- `bimacademy/components/bim/tech-card.tsx` - Extends shadcn Card
- `bimacademy/components/bim/project-card.tsx` - Extends shadcn Card
- `bimacademy/components/bim/stat-badge.tsx` - Extends shadcn Badge
- `bimacademy/components/bim/section.tsx` - Section wrapper
- `bimacademy/components/bim/container.tsx` - Container component
- `bimacademy/components/bim/code-block.tsx` - Code display with Prism
- `bimacademy/components/bim/section-heading.tsx` - Headings
- `bimacademy/components/bim/index.ts` - Barrel export

### To Modify
- `bimacademy/app/globals.css` - Override shadcn CSS variables with IDE theme, add fonts
- No need to modify Tailwind config - shadcn uses CSS variables

## Implementation Steps

1. **Setup Design Tokens**
   - Create `lib/design-tokens.ts` with IDE color palette, spacing, typography
   - Export typed constants for colors, fonts, spacing, breakpoints
   - Document shadcn component overrides needed

2. **Override shadcn CSS Variables with IDE Theme**
   - Update `app/globals.css` to override shadcn CSS variables
   - Map IDE colors to shadcn semantic tokens:
     - `--background` → #1E1E1E (IDE dark)
     - `--foreground` → #D4D4D4 (IDE text)
     - `--primary` → #569CD6 (syntax blue)
     - `--accent` → #C586C6 (syntax purple)
     - `--border` → #3E3E42 (IDE border)
   - Import Google Fonts (Roboto 400/500/700, Fira Code 400/500)
   - Keep all existing shadcn components working

3. **Install Additional shadcn Components (if needed)**
   - Check which components needed: `npx shadcn@latest add [component]`
   - Potential additions: Separator, Tooltip, Dialog
   - All will automatically use IDE theme from CSS variables

4. **Build BIM-Specific Component Extensions**
   - Create `components/bim/` directory
   - `tech-card.tsx` - Import shadcn Card, add tech-specific styling
   - `project-card.tsx` - Import shadcn Card, add project layout
   - `stat-badge.tsx` - Import shadcn Badge, add stat display
   - `section.tsx` - Container with consistent spacing
   - `container.tsx` - Max-width wrapper
   - `section-heading.tsx` - Typography component
   - All components use shadcn primitives internally

5. **Code Block Component**
   - Install: `npm install prismjs @types/prismjs`
   - Create `code-block.tsx` with C# syntax support
   - Style with VS Code color scheme (match IDE colors)
   - Add copy button using shadcn Button
   - Support inline and block code

6. **Create Component Examples**
   - Create `components/bim/examples.tsx`
   - Show each BIM component with shadcn integration
   - Demonstrate IDE theme in action
   - Create visual preview page

7. **Accessibility Audit**
   - Verify color contrast ratios (WCAG AA: 4.5:1)
   - Test keyboard navigation (shadcn handles most of this)
   - Add ARIA labels where needed
   - Test with screen reader

## Todo List

- [ ] Create `lib/design-tokens.ts` with IDE color/spacing/typography system
- [ ] Update `app/globals.css` to override shadcn CSS variables with IDE theme
- [ ] Import Google Fonts (Roboto, Fira Code) in globals.css
- [ ] Install additional shadcn components if needed: `npx shadcn@latest add separator tooltip`
- [ ] Create `components/bim/` directory structure
- [ ] Implement `tech-card.tsx` extending shadcn Card
- [ ] Implement `project-card.tsx` extending shadcn Card
- [ ] Implement `stat-badge.tsx` extending shadcn Badge
- [ ] Implement `section.tsx` and `container.tsx`
- [ ] Implement `section-heading.tsx`
- [ ] Install Prism.js: `npm install prismjs @types/prismjs`
- [ ] Implement `code-block.tsx` with C# support using Prism
- [ ] Create barrel export `components/bim/index.ts`
- [ ] Create examples file showing shadcn integration
- [ ] Verify shadcn Button/Card/Badge work with IDE theme
- [ ] Audit accessibility (contrast, keyboard, ARIA)
- [ ] Test responsive behavior across breakpoints

## Success Criteria

✅ All design tokens defined and exported
✅ shadcn CSS variables successfully overridden with IDE theme
✅ Existing shadcn components (Button, Card, Badge) styled with IDE aesthetic
✅ 6 BIM-specific components extending shadcn primitives
✅ Code syntax highlighting works with VS Code color scheme
✅ All components meet WCAG AA contrast requirements (4.5:1)
✅ Components responsive across all breakpoints
✅ Example page demonstrates shadcn + IDE theme integration
✅ No console errors or TypeScript warnings

## Risk Assessment

### Risks
- **Font loading performance:** Roboto + Fira Code could impact FCP
  - Mitigation: Use `next/font` with subset optimization, preload critical fonts
- **CSS variable override conflicts:** IDE theme may conflict with shadcn defaults
  - Mitigation: Test all shadcn components after override, use CSS specificity carefully
- **shadcn updates:** Future shadcn updates may override custom variables
  - Mitigation: Document all CSS variable overrides, avoid modifying shadcn component files directly
- **Component complexity:** Over-engineering BIM components
  - Mitigation: Follow YAGNI, extend shadcn primitives minimally

### Technical Debt
- Future: Consider moving to CSS-in-JS if Tailwind becomes limiting
- Future: Extract design system to separate package for reusability

## Security Considerations

- Sanitize any user-provided content in CodeBlock (XSS risk)
- Ensure external font URLs use HTTPS
- No third-party analytics or tracking in base components
- Validate all component props with TypeScript

## Next Steps

1. Complete Phase 1 implementation
2. Create PR for design system review
3. Get design approval from stakeholder
4. Move to Phase 2: Hero & Header Section
