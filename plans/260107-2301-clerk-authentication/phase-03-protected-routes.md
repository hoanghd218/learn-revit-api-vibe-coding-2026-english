# Phase 3: Protected Routes

## Context Links
- Parent: [plan.md](./plan.md)
- Previous: [Phase 2: Auth Pages](./phase-02-auth-pages.md)
- Codebase: `bimacademy/app/`

## Overview
- **Priority:** P2 (Security)
- **Status:** Pending
- **Effort:** 0.5 hours
- **Description:** Create Clerk middleware to protect routes and redirect unauthenticated users

## Key Insights
- Clerk provides `authMiddleware()` for route protection
- Middleware runs before any route handler
- Can specify public routes that don't require auth
- Configurable redirect behavior

## Requirements

### Functional
- Protect `/courses/*` routes
- Protect `/dashboard/*` routes
- Allow public access to `/` and `/sign-in/*`
- Redirect unauthenticated users to sign-in page

### Non-Functional
- Minimal performance impact
- Type-safe middleware configuration
- Easy to extend public routes

## Architecture

```
app/
├── middleware.ts            # Clerk auth middleware
├── courses/                 # Protected course routes
│   └── page.tsx
└── dashboard/               # Protected dashboard routes
    └── page.tsx
```

## Related Code Files

### To Create
- `bimacademy/middleware.ts` - Clerk auth middleware

### To Modify
- None initially (add protected routes as needed)

## Implementation Steps

1. **Create Middleware File**
   ```typescript
   import { authMiddleware } from "@clerk/nextjs";

   export default authMiddleware({
     publicRoutes: ["/", "/sign-in", "/sign-up"]
   });

   export const config = {
     matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
   };
   ```

2. **Define Public Routes**
   - Landing page (/)
   - Sign-in and sign-up pages
   - Any other public content

3. **Configure Protected Routes**
   - /courses/* (course content)
   - /dashboard/* (user dashboard)
   - /api/* (may need selective protection)

4. **Test Protection**
   - Access protected route without auth → redirect to sign-in
   - Access protected route with auth → access granted

## Todo List

- [ ] Create middleware.ts with authMiddleware
- [ ] Define public routes list
- [ ] Configure protected routes
- [ ] Test unauthenticated redirect
- [ ] Test authenticated access
- [ ] Verify build passes

## Success Criteria

- [ ] Middleware exports correctly
- [ ] Public routes accessible without auth
- [ ] Protected routes redirect to sign-in
- [ ] Authenticated users access protected routes
- [ ] Build passes without errors

## Risk Assessment

### Risks
- **Over-protection:** Blocking API routes that should be public
  - Mitigation: Carefully list publicRoutes, test each route
- **Middleware order:** Middleware runs first - can't bypass
  - Mitigation: Test thoroughly before deployment

### Technical Debt
- None - middleware is standard Clerk pattern

## Security Considerations

- All sensitive routes protected by middleware
- No client-side bypass possible
- Server-side verification of sessions

## Next Steps

1. Complete Phase 3
2. Move to Phase 4: User Menu Integration
3. Create course and dashboard pages (future)
