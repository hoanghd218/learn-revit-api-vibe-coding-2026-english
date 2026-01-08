---
title: "Courses Page"
description: "Create user's courses page displaying enrolled courses with progress tracking"
status: pending
priority: P2
implementation_status: pending
review_status: pending
created: 2026-01-08
---

# Phase 4: Courses Page

## Context
**Parent Plan:** [Profile Page with Dropdown Menu](plan.md)
**Dependencies:** UserMenu component (Phase 1)
**Related Files:**
- `bimacademy/components/ui/card.tsx` - Card component
- `bimacademy/components/layout/header.tsx` - Header with nav
- `bimacademy/app/page.tsx` - Landing page with curriculum

## Overview
Create `/bimacademy/app/courses/page.tsx` displaying the user's enrolled courses with progress tracking and continue learning button.

## Key Insights
- Course listing page for enrolled courses
- Use Card components for course cards
- Progress bar for each course
- Continue learning button
- Thumbnail, title, instructor, progress
- Empty state when no courses enrolled

## Requirements
- Course cards with thumbnail
- Course title and description
- Progress bar (0-100%)
- Continue learning button
- Total progress summary
- Empty state when no courses
- Responsive grid layout

## Architecture

```
Courses Page
├── PageHeader (title + description)
├── Progress Summary Card
│   └── Overall progress stats
└── Course Grid
    └── Course Card
        ├── Thumbnail image
        ├── Title
        ├── Instructor
        ├── Progress bar
        └── Continue Learning button
```

## Related Code Files
```typescript
// Key imports needed
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Play, Clock, BookOpen, Award } from 'lucide-react';
```

## Implementation Steps
1. Create `app/courses/page.tsx` (client component)
2. Create progress summary section
3. Create course card component
4. Create course grid layout
5. Add mock course data
6. Add progress bar component
7. Add continue learning buttons
8. Handle empty state
9. Style with coral/bronze accents

## Todo List
- [ ] Create `app/courses/page.tsx`
- [ ] Implement progress summary section
- [ ] Create course card component
- [ ] Add mock course data
- [ ] Implement progress bar
- [ ] Add continue learning buttons
- [ ] Handle empty state
- [ ] Style with theme colors
- [ ] Test responsiveness

## Success Criteria
- Course cards display correctly
- Progress bars show accurate percentage
- Continue button navigates to course
- Empty state renders when no courses
- Layout is responsive
- Coral/bronze accents applied

## Risk Assessment
**Low Risk:** Dashboard UI with mock data, no backend integration

## Security Considerations
- Course access should be validated server-side
- Progress data should be user-specific

## Next Steps
- Proceed to [Phase 5: Header Integration](phase-05-header-integration.md)
