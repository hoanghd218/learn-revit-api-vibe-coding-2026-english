# Phase 01: Update Auth Redirect URLs

## Context Links
- **Parent Plan:** [plan.md](./plan.md)
- **Dependencies:** None
- **Scout Report:** [scout-260108-0723-auth-routing-issue.md](../../reports/scout-260108-0723-auth-routing-issue.md)

## Overview

**Date:** 2026-01-08
**Description:** Change redirectUrl from /courses to / in sign-in and sign-up pages
**Priority:** P1
**Implementation Status:** ✅ COMPLETED (2026-01-08 07:30)
**Review Status:** ✅ APPROVED

## Key Insights

### Current Issue
```tsx
// app/sign-in/[[...sign-in]]/page.tsx:53
<SignIn redirectUrl="/courses" />

// app/sign-up/[[...sign-up]]/page.tsx:53
<SignUp redirectUrl="/courses" />
```

**Problem:** After auth, users sent to `/courses` → cannot return to homepage

### Middleware Analysis
```tsx
// middleware.ts:9-16
const isPublicRoute = createRouteMatcher([
  '/',              // ✅ Homepage is public
  '/sign-in(.*)',
  '/sign-up(.*)',
  // ...
]);
```

**Middleware Status:** ✅ Already correct - no changes needed

## Requirements

### Functional
1. Redirect to homepage (`/`) after sign-in
2. Redirect to homepage (`/`) after sign-up
3. Allow homepage access when authenticated
4. Maintain protection for `/courses` and `/dashboard`

### Non-Functional
1. No breaking changes
2. Preserve existing auth styling/UX
3. Fast implementation (2 lines)

## Architecture

### Change Flow
```
User → Sign In/Up → Clerk Auth → redirectUrl="/" → Homepage
```

### No Changes Needed
- Middleware configuration (already correct)
- Route protection logic
- Auth UI appearance
- Public route definitions

## Related Code Files

### Files to Modify
- `bimacademy/app/sign-in/[[...sign-in]]/page.tsx` (line 53)
- `bimacademy/app/sign-up/[[...sign-up]]/page.tsx` (line 53)

### Files to Verify (No Changes)
- `bimacademy/middleware.ts` (confirm `/` is public)
- `bimacademy/app/page.tsx` (homepage exists)

## Implementation Steps

### Step 1: Update Sign-In Redirect
**File:** `app/sign-in/[[...sign-in]]/page.tsx:53`

```tsx
// Before
redirectUrl="/courses"

// After
redirectUrl="/"
```

### Step 2: Update Sign-Up Redirect
**File:** `app/sign-up/[[...sign-up]]/page.tsx:53`

```tsx
// Before
redirectUrl="/courses"

// After
redirectUrl="/"
```

### Step 3: Verify Build
```bash
cd bimacademy
npx tsc --noEmit
npm run build
```

### Step 4: Test Auth Flow
**Manual Testing:**
1. Clear cookies/localStorage
2. Navigate to `/sign-in`
3. Sign in with test account
4. Verify redirect to `/` (homepage)
5. Sign out
6. Navigate to `/sign-up`
7. Create account
8. Verify redirect to `/` (homepage)

### Step 5: Test Protected Routes
```
1. Visit /courses (unauthenticated) → redirects to sign-in
2. Sign in → redirects to homepage
3. Navigate to /courses manually → access granted
```

## Todo List

- [x] Update redirectUrl in sign-in page (line 53)
- [x] Update redirectUrl in sign-up page (line 53)
- [x] Run TypeScript check
- [x] Run production build
- [x] Test sign-in flow → homepage redirect
- [x] Test sign-up flow → homepage redirect
- [x] Verify protected routes still work

## Success Criteria

✅ **Functional:**
- Sign-in redirects to `/` (not `/courses`)
- Sign-up redirects to `/` (not `/courses`)
- Homepage accessible when authenticated
- `/courses` and `/dashboard` still protected

✅ **Technical:**
- No TypeScript errors
- Build succeeds
- No console warnings
- Middleware works correctly

✅ **UX:**
- Auth flow smooth
- No broken navigation
- Users can access all public routes

## Risk Assessment

**Risk Level:** Very Low

### Why Low Risk?
1. ✅ Only string value change (2 occurrences)
2. ✅ No logic modifications
3. ✅ Middleware already configured correctly
4. ✅ Easy rollback (revert 2 lines)

### Potential Issues
**None identified** - straightforward configuration change

## Security Considerations

**No Security Impact**

- Route protection unchanged (middleware)
- Auth mechanism unchanged (Clerk)
- Only redirect destination changed
- Homepage is already public route

## Implementation Summary

### Completed Changes
- Modified `app/sign-in/[[...sign-in]]/page.tsx:53` → redirectUrl="/"
- Modified `app/sign-up/[[...sign-up]]/page.tsx:53` → redirectUrl="/"
- Build validation: ✅ PASSED
- Auth flow test: ✅ PASSED
- Protected routes: ✅ VERIFIED

### Verification Results
- Sign-in redirects to homepage (/)
- Sign-up redirects to homepage (/)
- Protected routes (/courses, /dashboard) require authentication
- No build errors or warnings

---

**Estimated Time:** 15 minutes
**Actual Time:** ~15 minutes
**Status:** ✅ COMPLETE
**Completed:** 2026-01-08 07:30
**Dependencies:** None
**Blocked By:** None
