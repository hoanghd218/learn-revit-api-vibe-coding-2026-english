# Phase 1: Setup & Configuration

## Context Links
- Parent: [plan.md](./plan.md)
- Codebase: `bimacademy/` (Next.js 16 + React 19 + TypeScript)
- Components: `bimacademy/components/`

## Overview
- **Priority:** P2 (Important feature)
- **Status:** Pending
- **Effort:** 1 hour
- **Description:** Install Clerk, configure environment variables, wrap app with ClerkProvider

## Key Insights
- Clerk provides Next.js middleware for route protection
- Need to add ClerkProvider to root layout
- Environment variables must be set for development
- Clerk uses publishable key (frontend) and secret key (backend)

## Requirements

### Functional
- Install @clerk/nextjs package
- Add CLERK_PUBLISHABLE_KEY and CLERK_SECRET_KEY to .env
- Wrap RootLayout with ClerkProvider
- Configure Clerk appearance to match IDE theme

### Non-Functional
- Type-safe configuration
- Consistent with existing shadcn/ui design
- No breaking changes to existing code

## Architecture

```
bimacademy/
├── .env.local              # Clerk keys (gitignored)
├── .env.example            # Template for Clerk variables
├── app/
│   └── layout.tsx          # Add ClerkProvider wrapper
└── middleware.ts           # Route protection (Phase 3)
```

## Related Code Files

### To Create
- `bimacademy/.env.example` - Environment variable template

### To Modify
- `bimacademy/app/layout.tsx` - Add ClerkProvider
- `bimacademy/.env.local` - Add actual Clerk keys

## Implementation Steps

1. **Install Clerk Package**
   ```bash
   npm install @clerk/nextjs
   ```

2. **Create Environment Template**
   - Create `.env.example` with Clerk variables
   - Document required keys and where to find them

3. **Configure ClerkProvider**
   - Import ClerkProvider in layout.tsx
   - Wrap the body with ClerkProvider
   - Pass publishableKey from environment

4. **Customize Clerk Appearance**
   - Match Clerk components to IDE theme
   - Use variables for colors, fonts, radius

5. **Create .env.local Template**
   ```env
   CLERK_PUBLISHABLE_KEY=pk_test_...
   CLERK_SECRET_KEY=sk_test_...
   ```

## Todo List

- [ ] Install @clerk/nextjs package
- [ ] Create .env.example with Clerk variables
- [ ] Update app/layout.tsx with ClerkProvider
- [ ] Configure Clerk appearance for IDE theme
- [ ] Create .env.local with actual keys
- [ ] Verify build passes

## Success Criteria

- [ ] Clerk package installed without errors
- [ ] ClerkProvider wraps app correctly
- [ ] Build passes without TypeScript errors
- [ ] Environment variables documented in .env.example

## Risk Assessment

### Risks
- **Missing keys:** App won't work without valid Clerk keys
  - Mitigation: Document clearly in .env.example, provide setup guide
- **Theme mismatch:** Clerk UI may not match IDE theme
  - Mitigation: Use Clerk appearance API to customize

### Technical Debt
- None significant - Clerk is production-ready

## Security Considerations

- Never commit CLERK_SECRET_KEY to version control
- Use `.env.local` for sensitive keys
- Clerk handles secure token storage

## Next Steps

1. Complete Phase 1 setup
2. Move to Phase 2: Sign-in/Sign-up Pages
3. Configure OAuth providers in Clerk Dashboard
