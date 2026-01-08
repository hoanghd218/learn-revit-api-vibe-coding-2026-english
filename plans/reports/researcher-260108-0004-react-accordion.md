# React Accordion Components: Best Practices Research

**Date:** 2026-01-08
**Scope:** CSS-only vs JS animation, accessibility, performance, libraries

---

## 1. CSS-Only vs JavaScript Animation

### CSS-Only Approach
```css
.AccordionContent {
  overflow: hidden;
  transition: max-height 300ms ease-out;
}
.AccordionContent[data-state="open"] {
  max-height: 500px; /* Fixed upper bound */
}
```

**Pros:** Simple, performant, no JS bundle overhead
**Cons:** `height: auto` not animatable, requires fixed max-height

### Modern CSS (2024+)
```css
.AccordionContent {
  transition: height 300ms ease-out;
  transition-behavior: allow-discrete;
}
@starting-style {
  .AccordionContent { height: 0; }
}
```

### JavaScript Animation Libraries

**Framer Motion** - Recommended for React
```jsx
<motion.div
  initial={{ height: 0, opacity: 0 }}
  animate={{ height: "auto", opacity: 1 }}
  exit={{ height: 0, opacity: 0 }}
  transition={{ duration: 0.3 }}
>
  {children}
</motion.div>
```

**Anime.js** - Lightweight alternative
```js
anime({
  targets: contentRef.current,
  height: [0, content.scrollHeight],
  duration: 300,
  easing: 'easeOutQuad'
});
```

---

## 2. Accessibility Patterns (ARIA/WAI-ARIA)

| Attribute | Element | Purpose |
|-----------|---------|---------|
| `role="heading"` + `aria-level` | Header | Semantic structure |
| `role="button"` | Trigger | Interactive behavior |
| `aria-expanded="true/false"` | Trigger | Panel visibility state |
| `aria-controls="panelId"` | Trigger | Links header to content |
| `aria-disabled="true"` | Trigger (optional) | Prevent collapse |
| `role="region"` | Content | Landmark for screen readers |

**Keyboard Navigation:**
| Key | Action |
|-----|--------|
| Enter/Space | Toggle panel |
| Arrow Down/Up | Navigate headers |
| Home/End | First/last header |

---

## 3. Performance Considerations

### Large Lists (>50 items)
```jsx
// Virtualization with react-window
<Accordion>
  {items.map(item => (
    <AccordionItem key={item.id}>
      {/* Content rendered on-demand */}
    </AccordionItem>
  ))}
</Accordion>

// Memoize to prevent re-renders
const AccordionContent = memo(function Content({ children }) {
  return <motion.div layout>{children}</motion.div>;
});
```

### Optimization Strategies
1. **CSS `will-change`** - Hint browser for upcoming animations
2. **Transform/opacity only** - GPU-accelerated properties
3. **Content memoization** - Prevent unnecessary re-renders
4. **Lazy hydration** - Defer accordion logic
5. **Reduced motion** - Respect `prefers-reduced-motion`

```css
@media (prefers-reduced-motion: reduce) {
  .AccordionContent {
    transition: none !important;
  }
}
```

---

## 4. Recommended Libraries

| Library | Size | Accessibility | Animation | Recommendation |
|---------|------|---------------|-----------|----------------|
| **Radix UI** | ~8KB | Built-in WAI-ARIA | CSS-only | Best for headless, styled accordions |
| **Headless UI** | ~12KB | Full ARIA | Framer Motion | Good if already using Tailwind |
| **cmdk** | ~6KB | Excellent | CSS/JS | Command palette style |
| **shadcn/ui** | Wrapper | Radix-based | Framer Motion | Best DX, copy-paste friendly |

### Radix UI Example
```jsx
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDownIcon } from 'lucide-react';

<Accordion.Root type="single" collapsible>
  <Accordion.Item value="item-1">
    <Accordion.Header>
      <Accordion.Trigger>
        Section 1
        <ChevronDownIcon className="AccordionChevron" />
      </Accordion.Trigger>
    </Accordion.Header>
    <Accordion.Content>
      <div className="pb-4">Content here</div>
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
```

---

## 5. Animation Library Comparison

| Feature | Framer Motion | Anime.js |
|---------|---------------|----------|
| React integration | Native | Requires refs |
| Layout animations | Automatic | Manual |
| Bundle size | ~40KB | ~15KB |
| Learning curve | Low | Medium |
| TypeScript | First-class | Partial |

**Recommendation:** Framer Motion for React apps (DX, animation primitives). Anime.js for lightweight needs or non-React projects.

---

## Summary

| Aspect | Recommendation |
|--------|----------------|
| **Base component** | Radix UI Accordion (headless, accessible) |
| **Animation** | Framer Motion for complex, CSS transitions for simple |
| **Accessibility** | Radix handles ARIA automatically |
| **Performance** | Memoize content, support reduced motion |
| **Large lists** | Consider virtualization if >50 items |

---

## Unresolved Questions

1. Should `layout="position"` in Framer Motion be used for accordion animations?
2. Best practices for nested accordions with screen readers?
