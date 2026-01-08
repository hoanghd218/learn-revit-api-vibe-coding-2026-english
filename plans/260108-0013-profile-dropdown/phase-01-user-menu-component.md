---
title: "UserMenu Component"
description: "Create custom UserMenu component with dropdown menu using Clerk UserButton and Radix UI"
status: pending
priority: P1
implementation_status: pending
review_status: pending
created: 2026-01-08
---

# Phase 1: UserMenu Component

## Context
**Parent Plan:** [Profile Page with Dropdown Menu](plan.md)
**Dependencies:** Clerk authentication, Radix UI DropdownMenu
**Related Files:**
- `bimacademy/components/layout/header.tsx` - Header using UserButton
- `bimacademy/components/ui/dropdown-menu.tsx` - Dropdown primitives
- `bimacademy/app/layout.tsx` - ClerkProvider

## Overview
Create a custom `UserMenu` component that replaces the default Clerk `UserButton` with a dropdown menu containing Profile, Affiliate, Courses, and Logout options.

## Key Insights
- Clerk's `UserButton` provides avatar but limited customization
- Radix UI DropdownMenu already available and styled
- Need to wrap Clerk's `UserButton` inside custom dropdown trigger
- Use `useAuth()` hook for sign out functionality
- Coral/bronze accent colors for menu items

## Requirements
- Avatar image with Clerk's UserButton
- Dropdown toggle on avatar click
- Menu items with icons: Profile, Affiliate, Courses, Logout
- Smooth open/close animations (tw-animate-css)
- Proper z-index (z-50) for dropdown content
- Hover states with coral accent color
- Mobile responsive (consider bottom sheet for mobile)

## Architecture

```
UserMenu (client component)
├── DropdownMenu (Radix)
│   ├── DropdownMenuTrigger (wraps UserButton)
│   └── DropdownMenuContent
│       ├── DropdownMenuItem → /profile
│       ├── DropdownMenuItem → /affiliate
│       ├── DropdownMenuItem → /courses
│       ├── DropdownMenuSeparator
│       └── DropdownMenuItem (destructive) → signOut
```

## Related Code Files
```typescript
// Key imports needed
import { useAuth, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { User, CreditCard, LogOut, BookOpen } from 'lucide-react';
```

## Implementation Steps
1. Create `components/layout/user-menu.tsx` client component
2. Import DropdownMenu components from @/components/ui
3. Import UserButton and useAuth from @clerk/nextjs
4. Create dropdown structure with icons
5. Add sign out handler using useAuth().signOut()
6. Style menu items with coral accent hover states
7. Add separator before logout option
8. Export and use in Header

## Todo List
- [ ] Create `components/layout/user-menu.tsx`
- [ ] Implement dropdown with Profile, Affiliate, Courses, Logout items
- [ ] Add icons from lucide-react
- [ ] Style with coral accent colors
- [ ] Add sign out functionality
- [ ] Export component

## Success Criteria
- Avatar click opens dropdown menu
- All menu items navigate correctly
- Logout signs out and redirects
- Hover states use coral accent color
- Animations are smooth
- Mobile responsive

## Risk Assessment
**Low Risk:** Using established Radix UI primitives and Clerk hooks

## Security Considerations
- Sign out handled server-side via Clerk
- No sensitive data exposed in menu
- Proper authentication state checks

## Next Steps
- Proceed to [Phase 2: Profile Page](phase-02-profile-page.md)
