---
title: "Clerk Authentication Integration"
description: "Add Clerk authentication with email/password and OAuth for course content protection"
status: pending
priority: P2
effort: 3h
branch: main
tags: [authentication, clerk, nextjs, security]
created: 2026-01-07
---

# Clerk Authentication Integration

## Overview

Add full authentication to bimacademy using Clerk. Protect course content, enable user accounts with email/password and social OAuth (Google, GitHub).

**Tech Stack:** Next.js 16 + React 19 + Clerk + TypeScript
**Goal:** Secure user accounts and course access

## Phases

| # | Phase | Status | Effort | Link |
|---|-------|--------|--------|------|
| 1 | Setup & Configuration | Pending | 1h | [phase-01](./phase-01-setup.md) |
| 2 | Sign-in/Sign-up Pages | Pending | 1h | [phase-02](./phase-02-auth-pages.md) |
| 3 | Protected Routes | Pending | 0.5h | [phase-03](./phase-03-protected-routes.md) |
| 4 | User Menu Integration | Pending | 0.5h | [phase-04](./phase-04-user-menu.md) |

**Total Effort:** 3 hours

## Key Features

- Email/password authentication
- Google and GitHub OAuth
- Protected course routes
- User button in header
- Session management via Clerk middleware

## Dependencies

- Clerk account with application created
- OAuth credentials for Google/GitHub (optional)

## Next Steps

1. Review and approve plan
2. Begin Phase 1: Setup & Configuration
3. Test authentication flow
4. Deploy to staging
