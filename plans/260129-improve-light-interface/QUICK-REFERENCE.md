# Quick Reference: Light Theme Transformation

**For developers implementing the plan.**

## 🎨 Color Palette Quick Reference

### Primary Colors (Use These 90% of the Time)
```tsx
// Orange-Red (Primary CTA)
className="bg-primary"           // #E85D04
className="text-primary"         // #E85D04
className="border-primary"       // #E85D04
className="hover:bg-primary"     // #E85D04

// Ocean Blue (Secondary)
className="text-ocean-blue-accent"      // #0077B6
className="text-ocean-blue-accent-dark" // #005F92 (for white text)

// Teal (Success/Tertiary)
className="text-teal-accent"    // #2A9D8F
className="text-teal-accent-dark" // #207A6E (for white text)
```

### Text Colors (Accessibility-First)
```tsx
className="text-card-foreground"  // #1A1A1A (headings, AAA ✅)
className="text-foreground"       // #1A1A1A (primary text)
className="text-muted-foreground" // #6B7280 (secondary, AA only)
```

### Backgrounds & Borders
```tsx
className="bg-background"  // #FFFFFF (pure white)
className="bg-card"        // #FFFFFF (cards)
className="bg-muted"       // #F9FAFB (sections)
className="border-border"  // #E5E7EB (subtle)
```

## 🔧 Common Component Patterns

### Buttons
```tsx
// Primary CTA (orange-red with white text)
<Button className="bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm button-hover-shadow">
  Get Started
</Button>

// Secondary (white with border)
<Button variant="outline" className="bg-white border-gray-300 text-primary hover:bg-gray-50">
  Learn More
</Button>

// Ghost (no background)
<Button variant="ghost" className="text-primary hover:bg-primary/10">
  Cancel
</Button>
```

### Cards
```tsx
// Standard card
<div className="bg-card border border-border rounded-lg shadow-light hover:shadow-light-md transition-all">
  <h3 className="text-card-foreground">Title</h3>
  <p className="text-muted-foreground">Description</p>
</div>

// Clickable card (link wrapper)
<Link href="/path" className="block focus:ring-2 focus:ring-primary/20 rounded-lg">
  <div className="bg-card border border-border rounded-lg shadow-light hover:shadow-light-md hover:border-primary transition-all">
    {/* Content */}
  </div>
</Link>
```

### Inputs
```tsx
// Text input
<Input
  className="bg-white border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
  placeholder="Enter text..."
/>

// Textarea
<Textarea
  className="bg-white border-gray-300 focus:ring-2 focus:ring-primary/20 focus:border-primary"
  placeholder="Enter description..."
/>
```

### Sections
```tsx
// White section
<Section className="bg-background">
  {/* Content */}
</Section>

// Light gray section (for alternation)
<Section className="bg-muted">
  {/* Content */}
</Section>

// Accent section (very subtle)
<Section className="bg-primary/5">
  {/* Content */}
</Section>
```

## 🚫 What NOT to Do

### ❌ Don't Use Hardcoded Colors
```tsx
// WRONG
className="bg-[#E85D04]"
className="text-[#1A1A1A]"
className="border-[#E5E7EB]"

// RIGHT
className="bg-primary"
className="text-card-foreground"
className="border-border"
```

### ❌ Don't Use Dark Theme Effects
```tsx
// WRONG - glow effects don't work on light theme
className="glow-coral"
className="shadow-lg shadow-black/20"
className="bg-[#1A1A1A]"

// RIGHT - use shadows + borders
className="button-hover-shadow"
className="shadow-elevation-3"
className="bg-background"
```

### ❌ Don't Use .bg-opacity on Gradients
```tsx
// WRONG - doesn't work
className="bg-gradient-to-r from-primary to-secondary bg-opacity-50"

// RIGHT - use slash syntax
className="bg-gradient-to-r from-primary/50 to-secondary/50"
```

## ✅ Best Practices

### DO: Use Semantic Color Names
```tsx
// Good - semantic
className="bg-primary text-primary-foreground"

// Bad - specific
className="bg-orange-red text-white"
```

### DO: Always Add Borders to Cards
```tsx
// Good - border + shadow
className="bg-card border border-border shadow-light"

// Bad - shadow only (invisible on white)
className="bg-card shadow-lg"
```

### DO: Test Contrast Ratios
```tsx
// Before committing, test at: https://webaim.org/resources/contrastchecker/

// Target ratios:
// - Normal text: 7:1 (AAA)
// - Large text: 4.5:1 (AAA)
// - UI components: 3:1 (AA)
```

### DO: Use Dark Variants for Text Overlays
```tsx
// Ocean blue text on white - FAILS (3.8:1)
<span className="text-[#0077B6]">Text</span>

// Use dark variant - PASSES (5.8:1)
<span className="text-ocean-blue-accent-dark">Text</span>
```

## 🔍 Search Patterns Before Starting

### Find All Hardcoded Colors
```bash
# Find all hardcoded colors
grep -r "bg-\[#" app/ components/
grep -r "text-\[#" app/ components/
grep -r "border-\[#" app/ components/

# Find glow effects
grep -r "glow" app/ components/

# Find dark theme references
grep -r "shadow-black" app/ components/
grep -r "shadow-lg" app/ components/
```

## 📋 Phase Checklist (Quick Overview)

- [ ] **Phase 1:** CSS variables in `app/globals.css` (2h)
- [ ] **Phase 2:** Components (27 files) (4h)
- [ ] **Phase 3:** Pages & sections (30+ files) (4h)
- [ ] **Phase 4:** Visual effects polish (1h)
- [ ] **Phase 5:** Testing & validation (1h)

## 🚨 Critical Reminders

1. **Backup first:** `git commit -m "backup: before light theme"`
2. **Create branch:** `git checkout -b feat/light-theme-transformation`
3. **Phase 1 is critical:** Don't skip, everything depends on it
4. **Test contrast:** Use WebAIM checker after each phase
5. **Commit often:** Don't wait until end of phase
6. **Test browsers:** Chrome, Firefox, Safari, Edge
7. **Test mobile:** Real devices, not just emulators
8. **Accessibility first:** WCAG AAA is non-negotiable

## 🆘 Quick Fixes

### Problem: Card invisible on white
**Fix:** Add border + shadow
```tsx
className="bg-card border border-border shadow-light"
```

### Problem: Text unreadable
**Fix:** Darken text color
```tsx
// Was: text-[#6B7280] (5.7:1 - AA only)
// Now: text-[#5B5F69] (7:1 - AAA)
```

### Problem: Button hover not visible
**Fix:** Use darker variant
```tsx
className="hover:bg-primary-hover" // Instead of hover:bg-primary
```

### Problem: Shadow too heavy
**Fix:** Use light shadow
```tsx
// Was: shadow-lg
// Now: shadow-light or shadow-elevation-3
```

## 📚 Key Resources

- **WebAIM Contrast Checker:** https://webaim.org/resources/contrastchecker/
- **Lighthouse:** Chrome DevTools → Lighthouse tab
- **WAVE Tool:** https://wave.webaim.org/
- **Full Plan:** `plans/260129-improve-light-interface/plan.md`
- **Phase Details:** `phase-*.md` files

## ⏱️ Time Estimates

- Phase 1: 2h (MUST COMPLETE FIRST)
- Phase 2: 4h (Components - most complex)
- Phase 3: 4h (Pages - most files)
- Phase 4: 1h (Polish - can run parallel)
- Phase 5: 1h (Testing - critical)

**Total: 12 hours**

## ✅ Success Criteria

- ✅ All text meets WCAG AAA (7:1) or AA (4.5:1)
- ✅ Lighthouse Accessibility: 100/100
- ✅ Zero hardcoded colors (verified by grep)
- ✅ All major browsers pass
- ✅ No broken functionality
- ✅ Performance score ≥ 90

---

**Remember:** This is a complete replacement, NOT a dual theme. Remove all dark theme code, don't keep both.

**Good luck! 🚀**
