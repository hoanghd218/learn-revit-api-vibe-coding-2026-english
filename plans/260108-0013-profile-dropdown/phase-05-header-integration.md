---
title: "Header Integration"
description: "Replace default UserButton with custom UserMenu component in header"
status: pending
priority: P1
implementation_status: pending
review_status: pending
created: 2026-01-08
---

# Phase 5: Header Integration

## Context
**Parent Plan:** [Profile Page with Dropdown Menu](plan.md)
**Dependencies:** UserMenu component (Phase 1)
**Related Files:**
- `bimacademy/components/layout/header.tsx` - Header component
- `bimacademy/components/layout/user-menu.tsx` - New component

## Overview
Update the Header component to replace Clerk's default `UserButton` with the custom `UserMenu` component that provides the dropdown menu.

## Key Insights
- Header already has UserButton imported
- Need to import UserMenu instead
- Remove "My Courses" link (now in dropdown)
- Maintain existing scroll effects
- Keep same styling and positioning

## Requirements
- Replace UserButton with UserMenu
- Remove redundant "My Courses" link
- Keep avatar styling consistent
- Maintain scroll effect for header
- Keep responsive behavior

## Related Code Files
```typescript
// Current header imports
import { useAuth, UserButton, SignInButton } from '@clerk/nextjs';

// Needed imports
import { useAuth, SignInButton } from '@clerk/nextjs';
import { UserMenu } from './user-menu';
```

## Implementation Steps
1. Update `header.tsx` imports
2. Replace UserButton with UserMenu
3. Remove "My Courses" nav link
4. Keep SignInButton for unauthenticated users
5. Test dropdown functionality
6. Verify responsive behavior

## Todo List
- [ ] Update header.tsx imports
- [ ] Replace UserButton with UserMenu
- [ ] Remove "My Courses" nav link
- [ ] Test dropdown menu functionality
- [ ] Verify responsive behavior
- [ ] Test unauthenticated state

## Success Criteria
- Avatar dropdown works correctly
- All menu items navigate properly
- Logout signs out user
- Header scroll effect still works
- Mobile responsive
- Coral/bronze accents consistent

## Risk Assessment
**Low Risk:** Direct replacement of existing component

## Security Considerations
- Authentication still handled by Clerk
- No additional security concerns

## Completion Criteria
- All 5 phases complete
- Build passes without errors
- TypeScript strict mode passes
- Dropdown menu works on all screen sizes
- Navigation to all pages functional
