# Technical Architecture

Waitily is structured as a full-stack Next.js App Router application with server-side product logic and a database-backed demand model.

## High-level layers

1. **Public layer**
   - landing page
   - request form
   - demand pool pages
   - legal/disclosure pages

2. **Demand aggregation layer**
   - product query normalization
   - category classification
   - demand pool matching
   - default collection windows
   - user-facing pool status labels

3. **Offer outcome layer**
   - negotiated offer handling
   - retailer-direct offer handling
   - affiliate/cashback fallback handling
   - transparent user disclosure labels
   - offer ranking and active-state checks

4. **Behavior and conversion layer**
   - pool view tracking
   - offer view tracking
   - offer click tracking
   - share action tracking
   - performance and CTR helpers

5. **Admin intelligence layer**
   - demand pool ranking
   - opportunity scoring
   - strategic labels
   - founder decision suggestions
   - conversion insights
   - monetization potential estimates

6. **Data layer**
   - Prisma client
   - PostgreSQL database
   - Supabase client integration

## Source modules represented

- `app/actions.ts` handles request creation and pool matching.
- `app/pool/[slug]/page.tsx` renders pool status, requests and offers.
- `app/offer/[id]/route.ts` tracks offer clicks before redirecting.
- `app/events/route.ts` receives share/action events.
- `lib/demand-window.ts` controls lifecycle copy and time remaining.
- `lib/demand-intelligence.ts` ranks pools for admin review.
- `lib/conversion-intelligence.ts` scores offer performance.
- `lib/offer-intelligence.ts` ranks and labels user-facing outcomes.
- `lib/seo.ts` creates metadata, share text and structured data.
