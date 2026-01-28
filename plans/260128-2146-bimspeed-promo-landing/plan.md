# Plan: BIMSpped Pro 3 Months Free Landing Page

## Overview
Create a promotional landing page to collect user information (name, email, phone, work) in exchange for 3 months free BIMSpped Pro access. The page includes a countdown to the promotion end date (15/02/2026), a form, and a YouTube video showcase section.

---

## Requirements

### Functional Requirements
1. **Landing Page Route**: `/bimspeed-promo`
2. **Hero Section**:
   - Title: "Get 3 Months BIMSpped Pro for Free"
   - Countdown timer showing time remaining until 15/02/2026
   - Brief description of the offer
3. **Registration Form**:
   - Fields: Full Name, Email, Phone, Work/Company
   - Submit button
   - Form validation
4. **YouTube Videos Section**:
   - Grid of embedded YouTube videos showcasing BIMSpped Revit plugins
   - Placeholder for user-provided URLs
5. **Success State**:
   - On successful API submission, show download link
   - Download link: https://drive.google.com/drive/folders/18mScSQVgRK9lStk3x4D8ZIi2mxD7r6IU

### API Integration
- **Endpoint**: `POST https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622`
- **Payload**: `{ fullName, phone, email, submittedAt, work }`
- **Success Handling**: Show download link and success message
- **Error Handling**: Display user-friendly error messages

### Technical Stack
- Next.js 16 App Router
- React 19 + TypeScript
- Tailwind CSS v4
- shadcn/ui components (Input, Button, Card, Label)
- React hooks for form state and countdown

---

## Phase Breakdown

### Phase 01: Page Structure & Routing
**File**: `phase-01-page-structure.md`
- Create route directory `app/bimspeed-promo/`
- Create page.tsx with basic layout
- Add metadata for SEO
- Set up page wrapper with proper styling

### Phase 02: Hero Section with Countdown
**File**: `phase-02-hero-countdown.md`
- Create Hero component with title and description
- Implement countdown timer hook (`useCountdown`)
- Countdown target: February 15, 2026 23:59:59
- Visual countdown display (days, hours, minutes, seconds)
- Responsive design

### Phase 03: Registration Form
**File**: `phase-03-registration-form.md`
- Create form component with fields:
  - Full Name (text input)
  - Email (email input with validation)
  - Phone (tel input)
  - Work/Company (text input)
- Form validation logic
- Submit handler
- Loading states
- Error message display

### Phase 04: API Integration
**File**: `phase-04-api-integration.md`
- Create API service function for webhook call
- Handle success response
- Handle error cases (network, server errors)
- Success state UI with download link
- Google Drive link: https://drive.google.com/drive/folders/18mScSQVgRK9lStk3x4D8ZIi2mxD7r6IU

### Phase 05: YouTube Videos Section
**File**: `phase-05-youtube-section.md`
- Create video grid component
- YouTube embed component (iframe)
- Responsive grid layout (1 col mobile, 2 col tablet, 3 col desktop)
- Placeholder for video URLs (to be provided by user)
- Video thumbnails and titles

### Phase 06: Styling & Polish
**File**: `phase-06-styling-polish.md`
- Apply consistent styling with existing theme
- Dark theme matching BIM Academy design
- Coral/bronze accent colors
- Animations and transitions
- Mobile responsiveness
- Accessibility improvements

---

## File Structure

```
app/
├── bimspeed-promo/
│   ├── page.tsx              # Main landing page
│   ├── layout.tsx            # Page-specific layout (optional)
│   └── components/
│       ├── hero-section.tsx      # Hero with countdown
│       ├── registration-form.tsx # Form component
│       ├── video-grid.tsx        # YouTube videos section
│       └── countdown-timer.tsx   # Countdown display
components/
├── bim/
│   └── ... (existing)
hooks/
├── use-countdown.ts          # Countdown timer hook
lib/
├── api/
│   └── bimspeed-promo.ts     # API integration
```

---

## Design Notes

### Color Scheme (existing)
- Background: `#0F0F0F` (dark)
- Primary (Coral): `#D97757`
- Accent (Bronze): `#D4A27F`
- Card bg: `#1A1A1A`
- Text: `#FAFAFA`
- Muted text: `#A1A1AA`

### Key UI Elements
- Large prominent headline
- Eye-catching countdown timer
- Clean form with clear labels
- Video grid with hover effects
- Success state with prominent download CTA

---

## Open Questions
1. YouTube video URLs - to be provided by user
2. Any specific branding/copy requirements beyond title?
3. Should we send confirmation email (handled by n8n)?

---

## Success Criteria
- [ ] Page accessible at `/bimspeed-promo`
- [ ] Countdown accurately shows time to 15/02/2026
- [ ] Form validates all fields before submit
- [ ] API call made with correct payload format
- [ ] Success state shows download link
- [ ] YouTube videos display in responsive grid
- [ ] Mobile responsive design
- [ ] Matches existing site theme
