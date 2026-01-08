# Phase 4: User Menu Integration

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 3: Protected Routes](./phase-03-protected-routes.md)
- Codebase: `bimacademy/components/layout/`

## Overview
- **Priority:** P2 (UX feature)
- **Status:** Pending
- **Effort:** 0.5 hours
- **Description:** Add UserButton component to header showing avatar and sign-out option

## Key Insights
- Clerk provides `<UserButton>` component for user menu
- Shows avatar, name, and sign-out option
- Can customize with appearance props
- Works with Clerk's authenticated state

## Requirements

### Functional
- Show "Sign In" button for unauthenticated users
- Show UserButton with avatar for authenticated users
- UserButton includes sign-out functionality
- Integrate with existing header component

### Non-Functional
- Match IDE theme styling
- Responsive design
- Accessible (keyboard navigation)

## Architecture

```
components/
├── layout/
│   └── header.tsx          # Updated with auth state
└── auth/
    └── user-button.tsx     # UserButton wrapper (optional)
```

## Related Code Files

### To Modify
- `bimacademy/components/layout/header.tsx` - Add auth state and UserButton

## Implementation Steps

1. **Check Authentication State**
   - Import `useAuth` from @clerk/nextjs
   - Check `isSignedIn` state

2. **Update Header**
   - Show Sign In button when !isSignedIn
   - Show UserButton when isSignedIn
   - Use existing Button component styling

3. **Customize UserButton**
   - Match appearance to IDE theme
   - Configure appearance props if needed

4. **Test User Menu**
   - Sign out functionality works
   - Avatar displays correctly
   - Dropdown menu works

## Todo List

- [ ] Import useAuth in header.tsx
- [ ] Add isSignedIn check
- [ ] Replace CTA button with conditional rendering
- [ ] Style UserButton to match theme
- [ ] Test sign-out flow
- [ ] Verify build passes

## Success Criteria

- [ ] Header shows Sign In for unauthenticated users
- [ ] Header shows UserButton for authenticated users
- [ ] UserButton displays avatar correctly
- [ ] Sign-out works and redirects appropriately
- [ ] Responsive design maintained
- [ ] Build passes without errors

## Risk Assessment

### Risks
- **Hydration mismatch:** Auth state may differ between server/client
  - Mitigation: Use Clerk's `useAuth` which handles this properly
- **UserButton styling:** May not match IDE theme
  - Mitigation: Use Clerk appearance API, or style via CSS

### Technical Debt
- None - standard Clerk integration

## Security Considerations

- Sign-out properly clears session
- No sensitive data in user menu
- User data handled by Clerk securely

## Next Steps

1. Complete Phase 4 - Authentication complete
2. Run full authentication flow test
3. Deploy to staging for review
4. Configure OAuth providers in Clerk Dashboard
