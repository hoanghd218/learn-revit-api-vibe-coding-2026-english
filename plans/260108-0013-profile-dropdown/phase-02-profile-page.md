---
title: "Profile Page"
description: "Create full profile page with avatar, personal info, bio, social links, and account settings"
status: pending
priority: P1
implementation_status: pending
review_status: pending
created: 2026-01-08
---

# Phase 2: Profile Page

## Context
**Parent Plan:** [Profile Page with Dropdown Menu](plan.md)
**Dependencies:** UserMenu component (Phase 1)
**Related Files:**
- `bimacademy/components/ui/card.tsx` - Card component
- `bimacademy/components/ui/input.tsx` - Input fields
- `bimacademy/components/ui/textarea.tsx` - Bio field
- `bimacademy/components/ui/button.tsx` - Buttons

## Overview
Create `/bimacademy/app/profile/page.tsx` with a full profile editing interface including avatar, personal info, bio, social links, and account settings.

## Key Insights
- Use Clerk's `useUser()` to get user data (name, email, image)
- Form fields for editable profile information
- Social links section (LinkedIn, GitHub, Website)
- Account settings section (password, notifications)
- Avatar upload placeholder (Clerk handles image management)
- Use Card component for section organization

## Requirements
- Avatar display with upload/edit button
- Personal info: first name, last name, email (read-only), phone
- Bio/description textarea
- Social links: LinkedIn, GitHub, Website
- Account settings: Password management, Notification preferences
- Save changes button
- Responsive layout (mobile: stacked, desktop: two-column)

## Architecture

```
Profile Page
├── PageHeader (title + description)
├── Avatar Section
│   └── AvatarImage + Upload Button
├── Personal Info Card
│   ├── First Name, Last Name inputs
│   ├── Email (read-only)
│   └── Phone input
├── Bio Card
│   └── Textarea for bio
├── Social Links Card
│   ├── LinkedIn input
│   ├── GitHub input
│   └── Website input
└── Account Settings Card
    ├── Password section
    └── Notification toggles
```

## Related Code Files
```typescript
// Key imports needed
import { useUser } from '@clerk/nextjs';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { Save, Upload, Linkedin, Github, Globe, Bell, Lock } from 'lucide-react';
```

## Implementation Steps
1. Create `app/profile/page.tsx` (client component)
2. Add Clerk's useUser() hook for user data
3. Create Avatar section with image display
4. Create Personal Info form fields
5. Create Bio textarea field
6. Create Social Links section
7. Create Account Settings section
8. Add save functionality (placeholder for API integration)
9. Style with coral/bronze accents

## Todo List
- [ ] Create `app/profile/page.tsx`
- [ ] Implement Avatar section with upload button
- [ ] Add personal info form fields
- [ ] Add Bio textarea
- [ ] Add Social Links section
- [ ] Add Account Settings section
- [ ] Style with consistent theme
- [ ] Test responsiveness

## Success Criteria
- Page renders with user data from Clerk
- Avatar displays correctly
- All form fields are editable
- Social links section works
- Account settings are clear
- Layout is responsive
- Coral/bronze accents applied

## Risk Assessment
**Low Risk:** Read-only display with form fields, no backend integration yet

## Security Considerations
- Email is read-only (managed by Clerk)
- Password changes use Clerk's built-in flow
- No sensitive data exposure

## Next Steps
- Proceed to [Phase 3: Affiliate Page](phase-03-affiliate-page.md)
