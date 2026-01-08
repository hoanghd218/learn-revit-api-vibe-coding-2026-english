---
title: "Affiliate Page"
description: "Create affiliate dashboard with referral link, commission stats, and earnings history"
status: pending
priority: P2
implementation_status: pending
review_status: pending
created: 2026-01-08
---

# Phase 3: Affiliate Page

## Context
**Parent Plan:** [Profile Page with Dropdown Menu](plan.md)
**Dependencies:** UserMenu component (Phase 1)
**Related Files:**
- `bimacademy/components/ui/card.tsx` - Card component
- `bimacademy/components/ui/button.tsx` - Buttons
- `bimacademy/components/ui/badge.tsx` - Status badges

## Overview
Create `/bimacademy/app/affiliate/page.tsx` with an affiliate marketing dashboard showing referral link, commission statistics, and earnings history.

## Key Insights
- Affiliate system is marketing feature, not core course content
- Display referral link for sharing
- Show commission rates and tiers
- Earnings history table
- Use Card components for statistics
- Copy-to-clipboard for referral link

## Requirements
- Referral link display with copy button
- Commission rate information
- Statistics cards: Total Earnings, Referrals, Pending, Paid
- Earnings history table with date, referral, commission, status
- Status badges: Pending, Approved, Paid
- Responsive layout

## Architecture

```
Affiliate Page
├── PageHeader (title + description)
├── Referral Link Section
│   └── Link display + Copy button
├── Stats Grid (4 cards)
│   ├── Total Earnings
│   ├── Total Referrals
│   ├── Pending Commission
│   └── Paid Out
├── Commission Info Card
│   └── Rate tiers and breakdown
└── Earnings History Table
    ├── Date column
    ├── Referral column
    ├── Amount column
    └── Status column
```

## Related Code Files
```typescript
// Key imports needed
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Copy, DollarSign, Users, Clock, CheckCircle, TrendingUp } from 'lucide-react';
```

## Implementation Steps
1. Create `app/affiliate/page.tsx` (client component)
2. Create referral link section with copy functionality
3. Create stats cards grid
4. Create commission information section
5. Create earnings history table
6. Add status badges (Pending, Approved, Paid)
7. Style with coral/bronze accents
8. Mock data for demonstration

## Todo List
- [ ] Create `app/affiliate/page.tsx`
- [ ] Implement referral link section with copy
- [ ] Create 4 stats cards
- [ ] Add commission info section
- [ ] Create earnings history table
- [ ] Add status badges
- [ ] Style with theme colors
- [ ] Test responsiveness

## Success Criteria
- Referral link displays and copies to clipboard
- Stats cards show mock data correctly
- Earnings table renders with all columns
- Status badges have correct colors
- Layout is responsive
- Coral/bronze accents applied

## Risk Assessment
**Low Risk:** Dashboard UI with mock data, no backend integration

## Security Considerations
- Referral link should be unique per user (placeholder)
- No real financial data in mock implementation

## Next Steps
- Proceed to [Phase 4: Courses Page](phase-04-courses-page.md)
