# Phase 7: Performance & SEO Optimization

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 6: Animations & Interactions](./phase-06-animations.md)
- All Phases: Foundation for optimization

## Overview
- **Priority:** P1 (Critical for launch)
- **Status:** Pending
- **Effort:** 2 hours
- **Description:** Performance optimization, SEO setup, accessibility audit, and production readiness

## Key Insights
- First Contentful Paint (FCP) <1.8s critical for conversions
- Core Web Vitals directly impact Google rankings
- Landing pages live or die by load time
- SEO metadata essential for organic traffic
- Lighthouse score >90 across all categories is table stakes
- Next.js provides excellent optimization defaults - leverage them

## Requirements

### Performance Targets
- **Lighthouse Score:** >90 Performance, >95 Accessibility, >90 Best Practices, >95 SEO
- **Core Web Vitals:**
  - LCP (Largest Contentful Paint): <2.5s
  - FID (First Input Delay): <100ms
  - CLS (Cumulative Layout Shift): <0.1
- **Load Time:** <3s on 3G, <1s on WiFi
- **Bundle Size:** <500KB initial, <2MB total

### SEO Requirements
- Meta tags (title, description, OG, Twitter)
- Structured data (Course, Organization)
- Semantic HTML (proper heading hierarchy)
- Sitemap.xml and robots.txt
- Canonical URLs
- Alt text for all images
- Internal linking structure

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Focus indicators
- ARIA labels where needed

## Architecture

### Optimization Strategy
```
Performance Layers:
1. Image Optimization (next/image, WebP, lazy load)
2. Code Splitting (dynamic imports, route-based)
3. Font Optimization (next/font, preload)
4. Asset Compression (Gzip/Brotli)
5. Caching Strategy (static + revalidate)
6. Third-party Scripts (defer, async)
7. CSS Optimization (critical inline, tree-shake)
```

### SEO Structure
```
app/
├── layout.tsx              # Global metadata, structured data
├── page.tsx                # Page-specific metadata
├── sitemap.ts              # Auto-generated sitemap
├── robots.ts               # Robots.txt config
└── opengraph-image.tsx     # OG image generator
```

## Related Code Files

### To Create
- `bimacademy/app/sitemap.ts` - Dynamic sitemap
- `bimacademy/app/robots.ts` - Robots.txt
- `bimacademy/app/opengraph-image.tsx` - OG image (optional)
- `bimacademy/lib/seo/structured-data.ts` - JSON-LD schemas
- `bimacademy/public/favicon/` - Favicon variants

### To Modify
- `bimacademy/app/layout.tsx` - Add global metadata
- `bimacademy/app/page.tsx` - Add page metadata
- `bimacademy/next.config.ts` - Add performance config
- All image imports - Convert to `next/image`
- All font imports - Migrate to `next/font`

## Implementation Steps

### Performance Optimization

1. **Image Optimization**
   - Audit all images in project
   - Convert `<img>` to `<Image>` from `next/image`
   - Add `priority` to hero image (LCP)
   - Use WebP format with fallbacks
   - Define width/height to prevent CLS
   - Lazy load below-fold images
   - Optimize image sizes (responsive srcset)

2. **Font Optimization**
   - Migrate to `next/font` if not already
   - Subset fonts (Latin only if possible)
   - Preload critical fonts (Roboto for headings)
   - Use `font-display: swap` for secondary fonts
   - Reduce font weights loaded (400, 500, 700 only)

3. **Code Splitting**
   - Lazy load anime.js library
   - Dynamic import for heavy components (CodeAnimation, ProjectCard)
   - Route-based splitting (automatic with App Router)
   - Tree-shake unused libraries

4. **Bundle Analysis**
   - Run `npm run build` and analyze output
   - Check for large dependencies
   - Remove unused imports
   - Use bundle analyzer: `npm install @next/bundle-analyzer`

5. **Caching & Compression**
   - Update `next.config.ts` with compression
   - Set appropriate cache headers
   - Enable static generation where possible
   - Configure ISR (Incremental Static Regeneration) if using CMS

6. **Third-Party Scripts**
   - Audit any external scripts (analytics, etc.)
   - Use Next.js `<Script>` component with `strategy="lazyOnload"`
   - Defer non-critical scripts
   - Self-host if possible to reduce DNS lookups

### SEO Optimization

7. **Metadata Setup**
   - Update `app/layout.tsx` with global metadata
   - Title: "BIM Developer Masterclass | Learn Revit API & C#"
   - Description: "Transform from BIM User to Developer. Master C#, Revit API, and WPF. Build custom plugins that automate the impossible."
   - Open Graph image (1200x630px)
   - Twitter Card metadata

8. **Structured Data**
   - Create `lib/seo/structured-data.ts`
   - Add Course schema (JSON-LD)
   - Add Organization schema
   - Add Breadcrumbs schema (if multi-page later)
   - Inject into `layout.tsx` head

9. **Sitemap & Robots**
   - Create `app/sitemap.ts` (auto-generates sitemap.xml)
   - Create `app/robots.ts` (robots.txt rules)
   - List all important URLs
   - Set appropriate priorities and change frequencies

10. **Semantic HTML Audit**
    - Verify heading hierarchy (H1 → H2 → H3, no skips)
    - Use `<section>`, `<article>`, `<aside>`, `<nav>` appropriately
    - Add ARIA landmarks where needed
    - Ensure forms have proper labels

### Accessibility Audit

11. **Color Contrast**
    - Run axe DevTools or Lighthouse audit
    - Fix any contrast ratio failures (target 4.5:1 for text, 3:1 for large)
    - Test all interactive states (hover, focus, active)

12. **Keyboard Navigation**
    - Tab through entire page
    - Verify logical tab order
    - Ensure all interactive elements reachable
    - Test skip-to-content link
    - Verify no keyboard traps

13. **Screen Reader Testing**
    - Test with NVDA (Windows) or VoiceOver (Mac)
    - Ensure all images have descriptive alt text
    - Verify form labels announced correctly
    - Check ARIA labels on icon buttons

14. **Focus Indicators**
    - Ensure visible focus rings on all interactive elements
    - Use `:focus-visible` for better UX (not just `:focus`)
    - Match focus style to design system (IDE accent color)

### Testing & Validation

15. **Lighthouse Audit**
    - Run Lighthouse in Chrome DevTools
    - Test Performance, Accessibility, Best Practices, SEO
    - Address all red and orange issues
    - Target scores: 90, 95, 90, 95

16. **Core Web Vitals**
    - Use Chrome DevTools Performance tab
    - Measure LCP, FID, CLS on real device
    - Test on slow 3G connection
    - Use WebPageTest.org for external validation

17. **Cross-Browser Testing**
    - Test on Chrome, Firefox, Safari, Edge
    - Verify animations work consistently
    - Check layout on all screen sizes
    - Test on real iOS and Android devices

18. **Validation**
    - Validate HTML with W3C validator
    - Test structured data with Google Rich Results Test
    - Check OpenGraph preview with LinkedIn Post Inspector
    - Verify sitemap.xml loads correctly

## Todo List

### Performance
- [ ] Audit all images and convert to `next/image`
- [ ] Add `priority` to hero image
- [ ] Optimize images to WebP format
- [ ] Migrate fonts to `next/font` if needed
- [ ] Lazy load anime.js library
- [ ] Dynamic import heavy components
- [ ] Run bundle analyzer and identify large deps
- [ ] Update `next.config.ts` with compression
- [ ] Defer third-party scripts with `<Script>`

### SEO
- [ ] Add metadata to `app/layout.tsx`
- [ ] Create `lib/seo/structured-data.ts`
- [ ] Add Course and Organization JSON-LD
- [ ] Create `app/sitemap.ts`
- [ ] Create `app/robots.ts`
- [ ] Generate OG image (1200x630px)
- [ ] Audit heading hierarchy (H1→H2→H3)
- [ ] Add semantic HTML tags

### Accessibility
- [ ] Run axe DevTools audit
- [ ] Fix color contrast issues
- [ ] Test keyboard navigation (tab through page)
- [ ] Add alt text to all images
- [ ] Test with screen reader (VoiceOver/NVDA)
- [ ] Ensure focus indicators visible
- [ ] Use `:focus-visible` for better UX

### Testing
- [ ] Run Lighthouse audit (target: 90/95/90/95)
- [ ] Measure Core Web Vitals (LCP, FID, CLS)
- [ ] Test on slow 3G connection
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)
- [ ] Test on real iOS and Android devices
- [ ] Validate HTML with W3C
- [ ] Test structured data with Google tool
- [ ] Verify sitemap.xml loads

## Success Criteria

✅ Lighthouse Performance score >90
✅ Lighthouse Accessibility score >95
✅ Lighthouse Best Practices score >90
✅ Lighthouse SEO score >95
✅ LCP <2.5s, FID <100ms, CLS <0.1
✅ Page loads <3s on 3G
✅ All images use `next/image` with proper optimization
✅ Fonts optimized with `next/font`
✅ Bundle size <500KB initial
✅ Metadata complete (title, description, OG, Twitter)
✅ Structured data validates with Google tool
✅ Sitemap.xml and robots.txt present
✅ All images have descriptive alt text
✅ Color contrast meets WCAG AA (4.5:1)
✅ Keyboard navigation works completely
✅ Screen reader announces content correctly
✅ Focus indicators visible on all interactive elements
✅ Cross-browser compatible (Chrome, Firefox, Safari, Edge)
✅ Mobile responsive on real devices

## Risk Assessment

### Risks
- **Image optimization may break layout:** Switching to `next/image` requires dimensions
  - Mitigation: Test each image individually, use layout="responsive" where appropriate
- **Font loading may cause FOUT:** Flash of unstyled text during font load
  - Mitigation: Use `font-display: swap`, preload critical fonts
- **Third-party scripts slow down:** Analytics/tracking impacts performance
  - Mitigation: Use `strategy="lazyOnload"`, consider removing non-essential scripts

### Performance Concerns
- Heavy animations may still cause jank on low-end devices
  - Already addressed in Phase 6, but retest after optimizations
- Large bundle size from dependencies
  - Consider lighter alternatives or tree-shaking

## Security Considerations

- Ensure no sensitive data in metadata or structured data
- Validate all external script sources (CSP)
- Use `rel="noopener noreferrer"` for external links
- Review robots.txt doesn't expose sensitive paths

## Next Steps

1. Complete Phase 7 optimization
2. Run full Lighthouse audit and address issues
3. Get stakeholder approval for SEO metadata
4. Deploy to staging for final review
5. Launch to production!

## Unresolved Questions

- What analytics provider? (Google Analytics, Plausible, etc.)
- Need custom 404 page?
- Email capture integration required?
- Any third-party integrations (Stripe, Discord, etc.)?
