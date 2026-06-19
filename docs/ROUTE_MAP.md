# Route Map

Generated from the Waitily source structure provided for the showcase.

## Pages

- `app/page.tsx` — public landing page and product request form
- `app/admin/page.tsx` — admin/founder intelligence dashboard
- `app/pool/[slug]/page.tsx` — public demand pool page
- `app/privacy/page.tsx` — privacy policy page
- `app/terms/page.tsx` — terms page
- `app/disclaimer/page.tsx` — commercial disclosure page
- `app/loading.tsx` — loading state
- `app/not-found.tsx` — not found page

## Route Handlers

- `app/events/route.ts` — event/share tracking endpoint
- `app/offer/[id]/route.ts` — offer click tracking and redirect endpoint

## Server Actions

- `app/actions.ts` — product request creation, query normalization, category classification and pool creation/joining

## Core Libraries

- `lib/classify.ts`
- `lib/conversion-intelligence.ts`
- `lib/demand-intelligence.ts`
- `lib/demand-window.ts`
- `lib/events.ts`
- `lib/normalize.ts`
- `lib/offer-intelligence.ts`
- `lib/prisma.ts`
- `lib/seo.ts`
- `lib/supabase.ts`
