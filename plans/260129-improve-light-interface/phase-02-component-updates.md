---
title: "Phase 2: Component Updates"
description: "Update all UI, layout, auth, and BIM components to use light theme variables"
status: pending
priority: P1
effort: 4h
branch: feat/light-theme-transformation
tags: [components, ui, refactor]
created: 2026-01-29
---

## Context Links

- **Research:** [Tailwind CSS Patterns](../research/researcher-02-tailwind-light-theme-patterns.md)
- **Dependencies:** [Phase 1: CSS Variables Foundation](phase-01-css-variables-foundation.md) ✅ MUST COMPLETE FIRST
- **Blocks:** Phase 3 (Pages depend on components)

## Overview

**Date:** 2026-01-29
**Description:** Update all component files to use new light theme CSS variables, remove hardcoded colors, replace glow effects with border + shadow system.

**Priority:** HIGH - Components are building blocks for all pages.

## Key Insights from Research

### Component Color Patterns for Light Themes

**Buttons:**
```tsx
// Primary button - orange-red with white text
<Button className="bg-primary text-white hover:bg-primary-hover">
  CTA Button
</Button>

// Secondary button - white with border
<Button variant="outline" className="border-gray-300 text-primary">
  Secondary
</Button>
```

**Cards:**
```tsx
// Default card - white with border + subtle shadow
<div className="bg-card border border-border shadow-light">
  Content
</div>
```

**Inputs:**
```tsx
// Text input - white background, gray border
<Input className="bg-white border-gray-300 focus:ring-primary/20" />
```

## Requirements

### Must Complete
1. ✅ Update all `components/ui/*` shadcn components (15 files)
2. ✅ Update `components/layout/*` components (2 files)
3. ✅ Update `components/bim/*` components (8 files)
4. ✅ Update `components/auth/*` components (3 files)
5. ✅ Replace all `.glow-coral` with `.button-hover-shadow`
6. ✅ Fix hardcoded color values in component files

### Must Not Break
1. ❌ Don't break component functionality
2. ❌ Don't change component APIs (props)
3. ❌ Don't remove accessibility features
4. ❌ Don't break responsive layouts

## Architecture

### Component Hierarchy
```
components/
├── ui/                    # shadcn primitives (Priority 1)
│   ├── button.tsx        # Primary/secondary variants
│   ├── card.tsx          # Card with border + shadow
│   ├── input.tsx         # Form inputs
│   ├── badge.tsx         # Status badges
│   └── [12 more files]
├── layout/               # Layout components (Priority 2)
│   ├── header.tsx        # Navigation header
│   └── user-menu.tsx     # User dropdown
├── auth/                 # Authentication (Priority 3)
│   ├── login-form.tsx
│   ├── register-form.tsx
│   └── google-login-button.tsx
└── bim/                  # BIM-specific (Priority 4)
    ├── container.tsx
    ├── section.tsx
    ├── project-card.tsx
    └── [5 more files]
```

### Update Strategy
1. **Priority 1:** UI components (used by everything else)
2. **Priority 2:** Layout components (header, navigation)
3. **Priority 3:** Auth components (forms, buttons)
4. **Priority 4:** BIM components (specialized cards, sections)

## Related Code Files

### Priority 1: UI Components (Critical Path)
1. `components/ui/button.tsx` - Button variants, glow effects
2. `components/ui/card.tsx` - Card components
3. `components/ui/input.tsx` - Form inputs
4. `components/ui/textarea.tsx` - Text areas
5. `components/ui/label.tsx` - Form labels
6. `components/ui/field.tsx` - Field groups
7. `components/ui/badge.tsx` - Status badges
8. `components/ui/select.tsx` - Dropdowns
9. `components/ui/combobox.tsx` - Combo boxes
10. `components/ui/dropdown-menu.tsx` - Menus
11. `components/ui/separator.tsx` - Dividers
12. `components/ui/progress.tsx` - Progress bars
13. `components/ui/alert-dialog.tsx` - Alerts
14. `components/ui/input-group.tsx` - Input groups

### Priority 2: Layout Components
15. `components/layout/header.tsx` - Main navigation
16. `components/layout/user-menu.tsx` - User menu dropdown

### Priority 3: Auth Components
17. `components/auth/login-form.tsx` - Login form
18. `components/auth/register-form.tsx` - Registration form
19. `components/auth/google-login-button.tsx` - OAuth button

### Priority 4: BIM Components
20. `components/bim/container.tsx` - Layout container
21. `components/bim/section.tsx` - Section wrapper
22. `components/bim/project-card.tsx` - Project cards
23. `components/bim/tech-card.tsx` - Tech stack cards
24. `components/bim/stat-badge.tsx` - Stat badges
25. `components/bim/code-block.tsx` - Code display
26. `components/bim/section-heading.tsx` - Headings
27. `components/bim/index.ts` - Barrel exports

## Implementation Steps

### Step 1: Update UI Components (1.5h)

#### 1.1 Button Component (20 min)
**File:** `components/ui/button.tsx`

**Changes:**
```tsx
// Replace all instances of:
className="glow-coral"
// With:
className="button-hover-shadow"

// Update variant styles for light theme
const variants = {
  primary: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm",
  secondary: "bg-white border border-gray-300 text-primary hover:bg-gray-50 shadow-sm",
  ghost: "text-primary hover:bg-primary/10",
  outline: "border-2 border-primary text-primary hover:bg-primary hover:text-white",
}
```

#### 1.2 Card Component (15 min)
**File:** `components/ui/card.tsx`

**Changes:**
```tsx
// Update default card style
const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "rounded-lg border border-border bg-card text-card-foreground shadow-light",
        className
      )}
      {...props}
    />
  )
)
```

#### 1.3 Input Components (20 min)
**Files:** `components/ui/input.tsx`, `components/ui/textarea.tsx`

**Changes:**
```tsx
// Input component
const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
```

#### 1.4 Badge Component (10 min)
**File:** `components/ui/badge.tsx`

**Changes:**
```tsx
// Update badge variants for light theme
const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary/20",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-primary text-primary-foreground shadow-sm",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground shadow-sm",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)
```

#### 1.5 Select & Dropdown Components (15 min)
**Files:** `components/ui/select.tsx`, `components/ui/dropdown-menu.tsx`, `components/ui/combobox.tsx`

**Changes:**
```tsx
// Update SelectContent
<SelectContent className="bg-popover border-border shadow-light-md">

// Update DropdownMenuContent
<DropdownMenuContent className="bg-popover border-border shadow-light-md">
```

#### 1.6 Remaining UI Components (30 min)
**Files:** `label.tsx`, `field.tsx`, `separator.tsx`, `progress.tsx`, `alert-dialog.tsx`, `input-group.tsx`

**Pattern:**
- Replace dark backgrounds with white (`bg-white` or `bg-card`)
- Replace dark text with light (`text-card-foreground`)
- Add borders where needed (`border-border`)
- Update shadows to light variants (`shadow-light`)

### Step 2: Update Layout Components (45 min)

#### 2.1 Header Component (30 min)
**File:** `components/layout/header.tsx`

**Current Issues:**
- Line 46: `shadow-lg shadow-black/20` - too dark for light theme
- Line 57: Uses `text-coral-accent` variable (needs rename)
- Line 97: Uses `glow-coral` class (needs replacement)

**Changes:**
```tsx
// Line 46: Replace shadow
className={cn(
  'fixed top-0 left-0 right-0 z-50',
  'bg-background/80 backdrop-blur-md',
  'border-b border-border/40',
  'transition-all duration-200',
  scrolled && 'shadow-light-md',  // Changed from shadow-lg
  className
)}

// Line 57: Update color reference
<span className="text-2xl font-bold text-primary font-mono">  // Changed from text-coral-accent
  &lt;/&gt;
</span>

// Line 60: Update gradient class
<span className="text-lg font-bold text-gradient">  // Keep using text-gradient utility
  BIM Developer
</span>

// Line 69: Update hover color
className="text-sm text-muted-foreground hover:text-primary transition-colors"  // Changed from hover:text-coral-accent

// Line 97: Replace glow effect
<Button asChild className="button-hover-shadow" size="sm">  // Changed from glow-coral
  <Link href="/sign-up">Learn Now for Free</Link>
</Button>
```

#### 2.2 User Menu Component (15 min)
**File:** `components/layout/user-menu.tsx`

**Changes:**
```tsx
// Update dropdown menu styling
<DropdownMenuContent className="bg-popover border-border shadow-light-md w-56">
  // Update menu items
  <DropdownMenuItem className="text-card-foreground hover:bg-muted focus:bg-muted">
    // Content
  </DropdownMenuItem>
</DropdownMenuContent>
```

### Step 3: Update Auth Components (45 min)

#### 3.1 Login & Register Forms (30 min)
**Files:** `components/auth/login-form.tsx`, `components/auth/register-form.tsx`

**Pattern for both files:**
```tsx
// Update form inputs
<Input
  className="bg-white border-gray-300 focus:ring-primary/20"
  // ... other props
/>

// Update submit button
<Button className="button-hover-shadow w-full">
  Sign In / Sign Up
</Button>

// Update form container
<form className="space-y-4 bg-card p-6 rounded-lg border border-border shadow-light">
```

#### 3.2 Google Login Button (15 min)
**File:** `components/auth/google-login-button.tsx`

**Changes:**
```tsx
// Update button styling
<Button
  variant="outline"
  className="w-full bg-white border-gray-300 hover:bg-gray-50"
>
  <Icons.google className="mr-2 h-4 w-4" />
  Continue with Google
</Button>
```

### Step 4: Update BIM Components (1h)

#### 4.1 Container & Section (20 min)
**Files:** `components/bim/container.tsx`, `components/bim/section.tsx`

**Changes:**
```tsx
// Container - no color changes needed, just verify
export function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  )
}

// Section - update background handling
export function Section({
  className,
  children,
  contained = false,
}: SectionProps) {
  if (contained) {
    return (
      <section className={cn("bg-card", className)}>
        <Container>{children}</Container>
      </section>
    )
  }

  return (
    <section className={cn("bg-background", className)}>
      <Container>{children}</Container>
    </section>
  )
}
```

#### 4.2 Card Components (20 min)
**Files:** `components/bim/project-card.tsx`, `components/bim/tech-card.tsx`

**Changes for ProjectCard:**
```tsx
// Update card styling
<div className="group bg-card border border-border rounded-lg p-6 shadow-light hover:shadow-light-md transition-all duration-300 hover-lift">
  {/* Content */}
</div>
```

**Changes for TechCard:**
```tsx
// Update icon background
<div className="icon-bg-gradient mb-4">
  <Icon className="h-8 w-8 text-primary" />
</div>

// Update card
<div className="bg-card border border-border rounded-lg p-6 shadow-light">
  {/* Content */}
</div>
```

#### 4.3 Badge & Code Block (15 min)
**Files:** `components/bim/stat-badge.tsx`, `components/bim/code-block.tsx`

**Changes for StatBadge:**
```tsx
// Update badge styling
<div className="bg-muted border border-border rounded-lg px-4 py-2 text-center shadow-light">
  <div className="text-2xl font-bold text-primary">{value}</div>
  <div className="text-sm text-muted-foreground">{label}</div>
</div>
```

**Changes for CodeBlock:**
```tsx
// Update code block styling
<pre className="bg-popover border border-border rounded-lg p-4 overflow-x-auto text-sm font-mono">
  <code>{children}</code>
</pre>
```

#### 4.4 Section Heading (5 min)
**File:** `components/bim/section-heading.tsx`

**Changes:**
```tsx
// Update heading colors
<h2 className="text-3xl font-bold text-card-foreground mb-4">
  {title}
</h2>
{description && (
  <p className="text-muted-foreground text-lg mb-6">
    {description}
  </p>
)}
```

### Step 5: Fix Hardcoded Colors (30 min)

**Search and replace in all component files:**

```bash
# Find all hardcoded colors
grep -r "bg-\[#" components/
grep -r "text-\[#" components/
grep -r "border-\[#" components/
```

**Expected findings to fix:**
1. `components/bim/stat-badge.tsx` - Any hardcoded badge colors
2. `components/bim/tech-card.tsx` - Any icon background colors
3. `components/bim/code-block.tsx` - Any syntax highlighting colors

**Pattern for fixing:**
```tsx
// Before:
className="bg-[#D97757]"

// After:
className="bg-primary"
// Or for specific colors:
className="bg-[#E85D04]"  // Only if creating new color reference
```

## Todo List

### UI Components
- [ ] button.tsx - Replace glow-coral with button-hover-shadow
- [ ] card.tsx - Update to border + shadow system
- [ ] input.tsx - Update background and borders
- [ ] textarea.tsx - Update background and borders
- [ ] label.tsx - Update text colors
- [ ] badge.tsx - Update variants
- [ ] select.tsx - Update dropdown styling
- [ ] dropdown-menu.tsx - Update menu styling
- [ ] combobox.tsx - Update styling
- [ ] separator.tsx - Update border colors
- [ ] progress.tsx - Update colors
- [ ] alert-dialog.tsx - Update overlay and content
- [ ] input-group.tsx - Update grouping
- [ ] field.tsx - Update field styling

### Layout Components
- [ ] header.tsx - Replace shadow-black/20, update color references
- [ ] user-menu.tsx - Update dropdown styling

### Auth Components
- [ ] login-form.tsx - Update form styling
- [ ] register-form.tsx - Update form styling
- [ ] google-login-button.tsx - Update button styling

### BIM Components
- [ ] container.tsx - Verify no changes needed
- [ ] section.tsx - Update background handling
- [ ] project-card.tsx - Update card styling
- [ ] tech-card.tsx - Update icon and card styling
- [ ] stat-badge.tsx - Update badge styling
- [ ] code-block.tsx - Update code block styling
- [ ] section-heading.tsx - Update text colors
- [ ] index.ts - Verify exports

### Hardcoded Colors
- [ ] Search for all `bg-[#`, `text-[#`, `border-[#` patterns
- [ ] Replace with CSS variable references
- [ ] Verify no hardcoded colors remain

### Testing
- [ ] Visual test each component in isolation
- [ ] Test hover states
- [ ] Test focus states
- [ ] Test responsive behavior
- [ ] Verify accessibility (keyboard nav, screen readers)

## Success Criteria

### Must Complete
- ✅ All 27 component files updated
- ✅ No hardcoded colors remain (verified by grep)
- ✅ All glow effects replaced with shadows
- ✅ All components use CSS variables
- ✅ Visual consistency across components

### Must Not Break
- ✅ Component functionality preserved
- ✅ Component APIs unchanged (props)
- ✅ Accessibility features intact
- ✅ Responsive layouts working
- ✅ TypeScript types correct

### Validation Evidence
- ✅ Screenshot of component library page
- ✅ Zero grep results for hardcoded colors
- ✅ Storybook or component catalog working
- ✅ No console errors

## Risk Assessment

### High Risk
1. **Breaking component APIs** - Changing props could break usage
   - **Mitigation:** Only change className, don't touch props
2. **Hardcoded colors in many places** - Easy to miss some
   - **Mitigation:** Use grep to find all instances
3. **Glow effects widely used** - Removing breaks hover states
   - **Mitigation:** Systematic replacement with shadow utilities

### Medium Risk
1. **Typography contrast** - Text might be too light on white
   - **Mitigation:** Use text-card-foreground for body text
2. **Input visibility** - White inputs on white background hard to see
   - **Mitigation:** Add border-gray-300 to all inputs
3. **Button hover states** - Might not be visible on light theme
   - **Mitigation:** Use darker variant for hover (bg-primary-hover)

### Low Risk
1. **Shadows too subtle** - Light shadows hard to see
   - **Mitigation:** Combine with borders for depth

## Security Considerations

None - Component styling changes don't affect security.

## Next Steps

After completing this phase:

1. **Phase 3:** Update pages and sections (components will be ready)
2. **Phase 4:** Refine visual effects (shadows, transitions)
3. **Phase 5:** Comprehensive testing

**CRITICAL:** Do not proceed to Phase 3 until:
- ✅ All 27 component files updated
- ✅ Zero hardcoded colors found by grep
- ✅ Visual testing complete
- ✅ Changes committed to git

## Troubleshooting

### Issue: Component still shows dark colors
**Cause:** CSS variables not loaded or component cache
**Fix:**
1. Check `app/globals.css` has updated variables
2. Hard refresh browser (Cmd+Shift+R)
3. Clear Next.js cache: `rm -rf .next`

### Issue: Button hover not visible
**Cause:** Hover color too light on white background
**Fix:** Use darker variant in button.tsx:
```tsx
hover:bg-primary-hover  // Instead of hover:bg-primary
```

### Issue: Input fields invisible
**Cause:** White input on white background without border
**Fix:** Add border to all inputs:
```tsx
className="bg-white border border-gray-300"
```

### Issue: Cards have no depth
**Cause:** Shadows too subtle on light background
**Fix:** Combine border + shadow:
```tsx
className="bg-card border border-border shadow-light"
```

---

**Phase Status:** ⏳ Ready to start (after Phase 1)
**Estimated Completion:** 4 hours
**Blocks:** Phase 3 (Page Updates)
