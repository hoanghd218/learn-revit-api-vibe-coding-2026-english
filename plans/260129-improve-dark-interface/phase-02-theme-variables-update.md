# Phase 2: Theme Variables Update

**Parent Plan:** [plan.md](./plan.md)
**Dependencies:** Phase 1

## Overview

**Date:** 2026-01-29
**Priority:** P2
**Status:** Pending
**Description:** Update CSS custom properties with improved color values
**Implementation Status:** Not Started
**Review Status:** Not Reviewed

## Key Insights

### Update Strategy

**Brightness Increments:**
- Background: +11% brightness (#0F0F0F → #1A1A1A)
- Card: +8% brightness (#1A1A1A → #242424)
- Popover: +8% brightness (#242424 → #2E2E2E)
- Muted: +6% brightness (#2A2A2A → #333333)

**Contrast Improvements:**
- Border definition: #333333 → #404040
- Muted text: #A1A1AA → #B4B4B8
- Maintain primary text brightness

### Section Alternation

Add depth through background alternation:
- Section dark: #191512 → **#1E1E1E**
- Section light: #1C1C1C → **#222222**

## Requirements

### Functional Requirements

- Update `:root` CSS variables in `globals.css`
- Maintain all existing color variable names
- Preserve accent colors (coral, bronze)
- Update glow effects if needed

### Non-Functional Requirements

- No breaking changes to component usage
- Maintain CSS variable structure
- Keep all utilities working

## Architecture

### CSS Variable Updates

**File:** `app/globals.css` (lines 53-118)

**Changes Required:**
```css
:root {
  /* Backgrounds - Increased brightness */
  --background: #1A1A1A;              /* was #0F0F0F */
  --card: #242424;                    /* was #1A1A1A */
  --popover: #2E2E2E;                 /* was #242424 */
  --muted: #333333;                   /* was #2A2A2A */

  /* Text - Enhanced contrast */
  --foreground: #FAFAFA;              /* maintain */
  --card-foreground: #FAFAFA;         /* maintain */
  --muted-foreground: #B4B4B8;        /* was #A1A1AA */

  /* Structure - Better definition */
  --border: #404040;                  /* was #333333 */
  --input: #404040;                   /* was #333333 */

  /* Accents - Maintain brand */
  --primary: #D97757;                 /* coral - maintain */
  --accent: #D4A27F;                  /* bronze - maintain */
  --ring: #D97757;                    /* maintain */

  /* Section alternation - More depth */
  --section-dark: #1E1E1E;            /* was #191512 */
  --section-light: #222222;           /* was #1C1C1C */

  /* Sidebar updates */
  --sidebar: #242424;                 /* was #1A1A1A */
  --sidebar-accent: #2E2E2E;          /* was #242424 */
}
```

### Glow Effect Adjustments

May need to reduce opacity for lighter backgrounds:
```css
.glow-coral {
  box-shadow: 0 0 20px rgba(217, 119, 87, 0.3);  /* was 0.4 */
}
```

## Related Code Files

### Files to Modify

1. **`app/globals.css`** (PRIMARY)
   - Lines 53-118: CSS variables in `:root`
   - Lines 148-154: Glow effects
   - Lines 175-181: Border effects

### Files to Review

1. **Component files using background colors**
   - `components/bim/section.tsx`
   - `components/sections/*.tsx`

## Implementation Steps

1. **Create Git Commit**
   ```bash
   git add app/globals.css
   git commit -m "backup: before theme update"
   ```

2. **Update Background Variables**
   - Change `--background: #1A1A1A`
   - Change `--card: #242424`
   - Change `--popover: #2E2E2E`
   - Change `--muted: #333333`

3. **Update Text Variables**
   - Change `--muted-foreground: #B4B4B8`
   - Maintain `--foreground: #FAFAFA`

4. **Update Border Variables**
   - Change `--border: #404040`
   - Change `--input: #404040`

5. **Update Section Colors**
   - Change `--section-dark: #1E1E1E`
   - Change `--section-light: #222222`

6. **Update Sidebar Colors**
   - Change `--sidebar: #242424`
   - Change `--sidebar-accent: #2E2E2E`

7. **Adjust Glow Effects** (if needed)
   - Test glow effect visibility
   - Reduce opacity if too bright

8. **Test Development Build**
   ```bash
   npm run dev
   ```
   - Check homepage visual
   - Verify contrast improvements
   - Test all sections

## Todo List

- [ ] Create backup commit
- [ ] Update background color variables
- [ ] Update text color variables
- [ ] Update border color variables
- [ ] Update section color variables
- [ ] Update sidebar color variables
- [ ] Adjust glow effect opacity
- [ ] Test in development environment
- [ ] Verify all pages render correctly
- [ ] Check mobile responsiveness

## Success Criteria

- ✅ All CSS variables updated
- ✅ Homepage renders without errors
- ✅ Visual contrast improved
- ✅ No broken components
- ✅ Glow effects still visible

## Risk Assessment

### Medium Risk
- Changes affect entire site
- Visual regression possible

### Mitigation
- Backup commit before changes
- Test thoroughly after updates
- Quick rollback available (git revert)

## Security Considerations

None (UI-only changes)

## Next Steps

1. Complete theme variable updates
2. Test all pages and components
3. Proceed to Phase 3: Component Refinements
4. Gather user feedback on improvements
