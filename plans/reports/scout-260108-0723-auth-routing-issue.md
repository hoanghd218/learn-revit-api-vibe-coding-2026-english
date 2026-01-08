# Scout Report: Authentication & Routing Issue

## Issue Summary
User cannot navigate to homepage after authentication. Analysis reveals **critical redirect misconfiguration** in auth flow.

## Current Authentication Setup

### Middleware Configuration (middleware.ts)
- **Public routes**: `/`, `/sign-in`, `/sign-up`, `/api/webhooks`, robots/sitemap
- **Protected routes**: `/courses/*`, `/dashboard/*`
- **Homepage** (`/`) is marked as PUBLIC ✅
- **Clerk middleware** properly installed via `@clerk/nextjs/server`

### Sign-In/Sign-Up Pages
**Sign-In (app/sign-in/[[...sign-in]]/page.tsx:53)**
```typescript
redirectUrl="/courses"  // PROBLEM: Redirects to /courses after sign-in
signUpUrl="/sign-up"
```

**Sign-Up (app/sign-up/[[...sign-up]]/page.tsx:53)**
```typescript
redirectUrl="/courses"  // PROBLEM: Redirects to /courses after sign-up
signInUrl="/sign-in"
```

### Root Layout
- ClerkProvider properly configured with appearance settings
- Clerk dependency properly injected
- No middleware blocking authenticated users

## Root Cause

**Both auth pages hardcode `redirectUrl="/courses"`** instead of returning to homepage. After successful auth:
1. User completes sign-in/sign-up
2. Clerk redirects to `/courses` (hardcoded)
3. If `/courses` is unfinished/empty → user stuck
4. No redirect back to homepage available

## Suspected Issues

1. **Missing /courses route** - Likely empty or incomplete
2. **No fallback redirect** - Should default to `/` if user just browsing
3. **Hardcoded redirect URL** - Should allow user to return to initial page or default to homepage

## Files Involved
- `/middleware.ts` → Route protection (correct)
- `/app/layout.tsx` → Clerk setup (correct)
- `/app/sign-in/[[...sign-in]]/page.tsx` → Line 53: hardcoded redirect
- `/app/sign-up/[[...sign-up]]/page.tsx` → Line 53: hardcoded redirect
- `/app/page.tsx` → Homepage (marked public, accessible)

## Recommendation

Change redirect URLs in both auth pages:
```typescript
// FROM
redirectUrl="/courses"

// TO
redirectUrl="/"  // Return to homepage
```

Or implement dynamic redirect using `useRouter` + session callback.

---
**Report**: scout-260108-0723-auth-routing-issue.md
