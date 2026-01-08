# CSS Sticky Positioning for Sidebar Layouts

**Date**: 2026-01-08
**Topic**: CSS `position: sticky` vs JS solutions for sidebar layouts

---

## 1. CSS `position: sticky` vs JavaScript

| Approach | Pros | Cons |
|----------|------|------|
| **CSS `sticky`** | 60fps, no repaints, zero JS, works on resize | Parent container clipping, no scroll callbacks |
| **JS listeners** | Full control, callback hooks, parallax effects | Scroll jank, performance cost, cleanup needed |

**CSS Solution (recommended)**:
```css
.sidebar {
  position: sticky;
  top: 1rem; /* Offset from viewport top */
  height: fit-content;
}
```

**JS fallback (only when needed)**:
```ts
window.addEventListener('scroll', throttle(() => {
  sidebar.style.transform = `translateY(${scrollY}px)`;
}, 16), { passive: true });
```

---

## 2. Mobile-Responsive Patterns

**Stack on mobile, side-by-side on desktop**:
```css
.layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .layout {
    grid-template-columns: 1fr 300px;
  }

  .sidebar {
    position: sticky;
    top: 2rem;
    height: calc(100vh - 4rem);
  }
}
```

**Key consideration**: Parent container must NOT have `overflow: hidden` or sticky breaks.

---

## 3. Performance Considerations

**For scroll-linked effects**:

1. **CSS `position: sticky`** → Main thread free, compositor-only
2. **Intersection Observer** → Efficient, fires only when visibility changes
3. **Avoid `scroll` event listeners** → Use `requestAnimationFrame` + passive flag if unavoidable

```ts
// Efficient scroll tracking
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.1 });

// For sticky state detection
const stickyObserver = new IntersectionObserver(([entry]) => {
  entry.target.classList.toggle('is-stuck', !entry.isIntersecting);
}, { rootMargin: '0px 0px -100% 0px' }); // Triggers when element exits viewport
```

**Performance tips**:
- Use `will-change: transform` sparingly
- Prefer `transform`/`opacity` over `top`/`margin`
- Debounce scroll handlers (100-200ms minimum)

---

## Summary

| Use Case | Solution |
|----------|----------|
| Simple sticky sidebar | CSS `position: sticky` |
| Scroll-triggered callbacks | Intersection Observer |
| Complex parallax/animations | `requestAnimationFrame` + passive listeners |
| Mobile responsiveness | CSS Grid + `@media` breakpoints |

---

**Unresolved Questions**:
- Safari-specific quirks with nested sticky elements (need testing)
- z-index stacking in complex layouts