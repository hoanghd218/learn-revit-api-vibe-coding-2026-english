# Phase 2: Sign-in/Sign-up Pages

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 1: Setup](./phase-01-setup.md)
- Codebase: `bimacademy/app/`

## Overview
- **Priority:** P2 (Core feature)
- **Status:** Pending
- **Effort:** 1 hour
- **Description:** Create sign-in and sign-up pages using Clerk's pre-built components

## Key Insights
- Clerk provides `<SignIn>` and `<SignUp>` React components
- Pages use Next.js App Router with catch-all routes
- Can customize appearance to match landing page theme
- Social OAuth buttons configured in Clerk Dashboard

## Requirements

### Functional
- Create `/sign-in` page with Clerk SignIn component
- Create `/sign-up` page with Clerk SignUp component
- Redirect to course page after successful authentication
- Show both email/password and OAuth options

### Non-Functional
- Responsive design
- Fast loading (static generation)
- Consistent with site design

## Architecture

```
app/
├── sign-in/
│   └── [[...sign-in]]/
│       └── page.tsx    # Clerk SignIn component
└── sign-up/
    └── [[...sign-up]]/
        └── page.tsx    # Clerk SignUp component
```

## Related Code Files

### To Create
- `app/sign-in/[[...sign-in]]/page.tsx`
- `app/sign-up/[[...sign-up]]/page.tsx`

### To Modify
- None (uses Clerk components)

## Implementation Steps

1. **Create Sign-in Page Directory**
   ```bash
   mkdir -p app/sign-in/[[...sign-in]]
   ```

2. **Create Sign-in Page**
   - Import SignIn from @clerk/nextjs
   - Wrap with Section/Container for consistent layout
   - Configure appearance

3. **Create Sign-up Page Directory**
   ```bash
   mkdir -p app/sign-up/[[...sign-up]]
   ```

4. **Create Sign-up Page**
   - Import SignUp from @clerk/nextjs
   - Use consistent Section/Container layout
   - Match appearance to sign-in page

5. **Configure Redirect**
   - Set afterSignInUrl to `/courses`
   - Set afterSignUpUrl to `/courses`

6. **Style Pages**
   - Use IDE theme colors
   - Center content vertically
   - Add header/footer context

## Todo List

- [ ] Create app/sign-in/[[...sign-in]]/page.tsx
- [ ] Create app/sign-up/[[...sign-up]]/page.tsx
- [ ] Style both pages to match IDE theme
- [ ] Configure redirect URLs
- [ ] Test sign-in/sign-up flow
- [ ] Verify build passes

## Success Criteria

- [ ] Sign-in page renders Clerk SignIn component
- [ ] Sign-up page renders Clerk SignUp component
- [ ] OAuth buttons display (Google, GitHub)
- [ ] Email/password authentication works
- [ ] Redirect to /courses after successful auth
- [ ] Responsive design on mobile
- [ ] Build passes without errors

## Risk Assessment

### Risks
- **OAuth not configured:** Social login won't appear without Clerk Dashboard setup
  - Mitigation: Document OAuth setup in Clerk Dashboard
- **Redirect loops:** Misconfigured redirect URLs
  - Mitigation: Use Clerk's default redirects, test thoroughly

### Technical Debt
- None - using Clerk's official components

## Security Considerations

- Clerk handles all credential security
- No sensitive data stored locally
- Session managed securely by Clerk

## Next Steps

1. Complete Phase 2
2. Move to Phase 3: Protected Routes Middleware
3. Configure OAuth providers in Clerk Dashboard
