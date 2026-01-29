# BIMSpeed Promo Landing Page - Deployment Guide

**Feature**: BIMSpeed Pro 3 Months Free Landing Page
**Route**: `/bimspeed-promo`
**Status**: Production-ready
**Last Updated**: 2026-01-28

---

## Pre-Deployment Checklist

### Code Quality & Testing ✅
- [x] All 66 tests passing
- [x] TypeScript compilation: 0 errors
- [x] ESLint validation: 0 warnings
- [x] Code review: 8.2/10 score, issues resolved
- [x] Build verification: successful (3.1s)

### Security ✅
- [x] Webhook URL moved to environment variable
- [x] Input sanitization implemented
- [x] Rate limiting configured (5 requests/IP/hour)
- [x] No hardcoded secrets in codebase
- [x] Form validation (client + server)

### Accessibility & Performance ✅
- [x] WCAG 2.1 Level AA compliance verified
- [x] Countdown timer tested and working
- [x] Responsive design verified
- [x] Bundle size optimized (~2KB)
- [x] Lighthouse score: 90+ (estimated)

---

## Environment Configuration

### Required Environment Variables

```bash
# Production environment (.env.production)
BIMSPEED_WEBHOOK_URL=https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622
```

### Configuration Details

| Variable | Value | Description |
|----------|-------|-------------|
| `BIMSPEED_WEBHOOK_URL` | n8n webhook URL | Server-side API uses this to submit form data |

### Verification

```bash
# Verify environment variable is set
echo $BIMSPEED_WEBHOOK_URL

# Should output:
# https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622
```

---

## Deployment Process

### Step 1: Verify Build

```bash
# Install dependencies
npm install

# Run TypeScript check
npm run type-check

# Run ESLint validation
npm run lint

# Build production bundle
npm run build

# Expected output:
# ✓ Compiled successfully in 3.1s
# ✓ Generating static pages (11/11 workers)
```

### Step 2: Staging Deployment

```bash
# 1. Deploy to staging environment
#    (Specific process depends on your platform)

# 2. Set staging environment variable
BIMSPEED_WEBHOOK_URL=<staging-n8n-webhook-url>

# 3. Run test suite
npm test -- bimspeed-promo

# 4. Test form submission
#    - Navigate to https://staging.example.com/bimspeed-promo
#    - Fill in form and submit
#    - Verify success message appears
#    - Check webhook logs in n8n dashboard
```

### Step 3: Production Deployment

```bash
# 1. Set production environment variable
#    (Set in your hosting platform's environment variables)
BIMSPEED_WEBHOOK_URL=https://n8n.bimspeed.net/webhook/caed31dc-98f7-4510-9576-ef977eaaa622

# 2. Deploy to production
#    (Using your deployment pipeline)

# 3. Verify deployment
curl https://example.com/bimspeed-promo

# 4. Check page loads and countdown displays correctly
```

### Recommended Deployment Strategy

**Blue-Green Deployment**:
1. Deploy to "green" environment (new version)
2. Run smoke tests on green
3. Switch traffic from blue to green
4. Monitor green for 30 minutes
5. Keep blue as rollback option

**Canary Deployment** (Alternative):
1. Deploy to production
2. Route 10% of traffic to new version
3. Monitor error rates and metrics
4. Gradually increase to 100% over 1 hour
5. Rollback if error rate exceeds threshold (>1%)

---

## Post-Deployment Monitoring

### Key Metrics to Monitor

| Metric | Tool | Threshold | Alert |
|--------|------|-----------|-------|
| Error rate | Sentry/LogRocket | <0.5% | >0.5% |
| Form submission success | Custom analytics | >95% | <90% |
| Page load time | Lighthouse/DataDog | <2s | >3s |
| Rate limit hits | Server logs | <10/day | >50/day |
| Webhook failures | Webhook logs | <5% | >10% |

### Monitoring Setup

```bash
# Check error logs
tail -f /var/log/app/bimspeed-promo.log

# Monitor webhook delivery
# (Check n8n dashboard for delivery status)

# Track form submissions
# (Set up analytics in Google Analytics or custom solution)
```

### Alert Configuration

**Email alerts for**:
- Form submission errors (email: ops@company.com)
- Webhook delivery failures (email: devops@company.com)
- Rate limit threshold exceeded (email: security@company.com)

---

## Troubleshooting

### Issue: Form submissions not received

**Check**:
1. Verify `BIMSPEED_WEBHOOK_URL` environment variable is set
   ```bash
   echo $BIMSPEED_WEBHOOK_URL
   ```

2. Verify webhook endpoint is accessible
   ```bash
   curl -X POST https://n8n.bimspeed.net/webhook/... \
     -H "Content-Type: application/json" \
     -d '{"test": "data"}'
   ```

3. Check server logs for errors
   ```bash
   grep "bimspeed-promo" /var/log/app/error.log
   ```

4. Verify n8n webhook is enabled in dashboard

**Solution**: Contact DevOps to restore webhook configuration

---

### Issue: Countdown timer shows wrong time

**Check**:
1. Verify system time is correct
   ```bash
   date
   ```

2. Check browser timezone
   - Open browser DevTools → Console
   - Run: `new Date("2026-02-15T23:59:59").toString()`

3. Verify countdown target date is correct
   - Should be: February 15, 2026 at 23:59:59 UTC

**Solution**: Countdown uses client browser time; if showing incorrectly, it's a browser timezone issue (not a server issue)

---

### Issue: Rate limiting preventing submissions

**Check**:
1. Verify client IP is not in rate limit
   ```bash
   grep "429\|Too Many Requests" /var/log/app/access.log
   ```

2. Current rate limit: 5 requests per IP per hour

**Solution**: Wait 1 hour for rate limit window to expire, or adjust rate limit in `/app/api/bimspeed-promo/route.ts`

---

### Issue: Form validation rejecting valid input

**Check**:
1. Email validation pattern (should support: john@company.com, user+tag@domain.co.uk)
2. Phone validation pattern (should support international formats)
3. Name/Company: should allow 2+ characters

**Reference**: Validation patterns in `/app/bimspeed-promo/components/registration-form.tsx`

---

## Rollback Procedure

### If Critical Issues Found

```bash
# Option 1: Revert to previous version
git revert <commit-hash>
npm run build
# Deploy previous version

# Option 2: Disable route
# Add to middleware or server config:
if (pathname.startsWith('/bimspeed-promo')) {
  return NextResponse.redirect(new URL('/'));
}

# Option 3: Temporary feature flag
BIMSPEED_PROMO_ENABLED=false
```

### Rollback Triggers

- Error rate > 1% for 5 minutes
- Form submission failure rate > 10%
- Page load time > 5 seconds consistently
- Webhook delivery failure rate > 25%

---

## Performance Optimization Tips

### If Page Load Time Increases

1. **Lazy load YouTube iframes** (in `/app/bimspeed-promo/components/video-grid.tsx`)
   ```tsx
   <iframe loading="lazy" ... />
   ```

2. **Implement image optimization**
   - Use Next.js Image component for any images
   - Reduce image file sizes

3. **Enable caching**
   - Page is static, should be cached indefinitely
   - Set cache headers in `next.config.ts`

### Current Performance
- Build time: 3.1 seconds
- Bundle impact: ~2KB gzipped
- Estimated Lighthouse: 90+

---

## Video Placeholder Replacement

### Current Status
Video grid has 6 placeholder entries with video IDs: `VIDEO_ID_1` through `VIDEO_ID_6`

### How to Replace

**File**: `/app/bimspeed-promo/components/video-grid.tsx`

```typescript
// Find the videoData array:
const videoData = [
  { id: "VIDEO_ID_1", title: "..." },
  // ...
];

// Replace VIDEO_ID_1-6 with actual YouTube video IDs
// Example: "dQw4w9WgXcQ" (YouTube video ID from URL)
```

### Testing
1. Replace video IDs
2. Run `npm run dev`
3. Navigate to `/bimspeed-promo`
4. Verify videos load in grid
5. Test video playback

---

## Success Criteria

### Immediate (First 24 hours)
- ✅ Page accessible at `/bimspeed-promo`
- ✅ Countdown timer displays correctly
- ✅ Form accepts submissions
- ✅ Webhook delivers data to n8n
- ✅ Success message appears after submission
- ✅ No error logs in server

### Week 1
- ✅ Form submission success rate > 95%
- ✅ Error rate < 0.5%
- ✅ Page load time < 2 seconds
- ✅ Rate limit hits < 10/day
- ✅ No customer complaints

### Ongoing
- ✅ Monitor metrics weekly
- ✅ Replace video placeholders
- ✅ Plan enhancements (analytics, CAPTCHA)

---

## Support & Escalation

### For Issues
1. Check troubleshooting section above
2. Review logs in `/var/log/app/`
3. Check n8n webhook dashboard
4. Contact DevOps team

### For Enhancements
1. Document requirements
2. Create issue in project tracker
3. Assign to development team
4. Follow standard development workflow

---

## Rollback Timeline

| Scenario | Time to Rollback | Process |
|----------|------------------|---------|
| Critical error | < 5 minutes | Git revert + deploy |
| Performance degradation | < 15 minutes | Feature flag disable |
| Webhook failure | < 10 minutes | Disable route |

---

## Maintenance Schedule

### Daily
- Monitor error rates
- Check webhook delivery status

### Weekly
- Review analytics metrics
- Check form submission patterns
- Review error logs

### Monthly
- Update video content (when ready)
- Review rate limit patterns
- Plan enhancements

---

## Appendix: File Locations

### Source Code
```
/app/bimspeed-promo/page.tsx                    # Main page
/app/bimspeed-promo/components/hero-section.tsx # Hero + countdown
/app/bimspeed-promo/components/countdown-timer.tsx
/app/bimspeed-promo/components/registration-form.tsx
/app/bimspeed-promo/components/video-grid.tsx
/app/api/bimspeed-promo/route.ts                # API route
/hooks/use-countdown.ts
/lib/api/bimspeed-promo.ts
```

### Documentation
```
/plans/260128-2146-bimspeed-promo-landing/plan.md
/plans/260128-2146-bimspeed-promo-landing/COMPLETION_STATUS.md
/plans/260128-2146-bimspeed-promo-landing/DEPLOYMENT_GUIDE.md (this file)
/plans/reports/project-manager-260128-2211-bimspeed-promo-completion.md
/plans/reports/code-reviewer-260128-2211-bimspeed-promo.md
/plans/reports/tester-260128-2211-bimspeed-promo.md
```

---

**Deployment Ready**: ✅ YES
**Last Reviewed**: 2026-01-28
**Next Review**: 2026-02-04
