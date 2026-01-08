---
title: "Fix Auth Redirect to Homepage"
description: "Change auth redirect from /courses to / allowing homepage access"
status: completed
priority: P1
effort: 15min
branch: main
tags: [auth, redirect, clerk, routing, bugfix]
created: 2026-01-08
completed: 2026-01-08 07:30
---

# Fix Auth Redirect to Homepage

## Overview

**Issue:** Users cannot access homepage after authentication - hardcoded redirect sends them to `/courses`

**Solution:** Change `redirectUrl` from `/courses` to `/` in auth pages

**Status:** ✅ COMPLETED (2026-01-08 07:30) | **Priority:** P1 | **Effort:** 15min

## Problem

**Current Behavior:**
1. User signs in/up
2. Clerk redirects to `/courses` (hardcoded)
3. User stuck, cannot access homepage

**Root Cause:**
- `redirectUrl="/courses"` in sign-in page (line 53)
- `redirectUrl="/courses"` in sign-up page (line 53)

**Middleware Status:** ✅ Correct - homepage (`/`) is public route

## Implementation Phase

### Phase 1: Update Auth Redirect URLs
**File:** `phase-01-update-redirect.md`
**Status:** ✅ COMPLETED (2026-01-08 07:30)
**Effort:** 15min

- ✅ Change redirectUrl in sign-in page
- ✅ Change redirectUrl in sign-up page
- ✅ Verify middleware allows homepage access
- ✅ Test auth flow

**Progress:** 4/4 tasks completed

## Technical Approach

**Simple 2-line change:**
```tsx
// Before
redirectUrl="/courses"

// After
redirectUrl="/"
```

**Files:**
- `app/sign-in/[[...sign-in]]/page.tsx:53`
- `app/sign-up/[[...sign-up]]/page.tsx:53`

**Middleware:** No changes needed - already allows `/` as public route

## Success Criteria

✅ Sign in → redirects to `/` (homepage)
✅ Sign up → redirects to `/` (homepage)
✅ Authenticated users can access homepage
✅ Protected routes (`/courses`, `/dashboard`) still require auth
✅ No build errors

## Risk Assessment

**Risk Level:** Very Low

- ✅ Simple string change
- ✅ Middleware already configured correctly
- ✅ No logic changes
- ✅ Easy rollback if needed

## Files Modified

```
app/sign-in/[[...sign-in]]/page.tsx (line 53)
app/sign-up/[[...sign-up]]/page.tsx (line 53)
```

## Testing Plan

1. Clear browser cookies/session
2. Sign in → verify redirect to `/`
3. Sign up → verify redirect to `/`
4. Navigate to `/courses` → verify auth required
5. Sign out → verify homepage accessible

## Questions

None - straightforward bug fix.
