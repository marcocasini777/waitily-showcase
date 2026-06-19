# Project Structure

This is a simplified overview of the private production project structure represented by the provided source files.

```text
app/
├── page.tsx
├── actions.ts
├── admin/page.tsx
├── pool/[slug]/page.tsx
├── pool/[slug]/SharePoolButton.tsx
├── events/route.ts
├── offer/[id]/route.ts
├── privacy/page.tsx
├── terms/page.tsx
├── disclaimer/page.tsx
├── layout.tsx
├── loading.tsx
└── not-found.tsx

lib/
├── classify.ts
├── conversion-intelligence.ts
├── demand-intelligence.ts
├── demand-window.ts
├── events.ts
├── normalize.ts
├── offer-intelligence.ts
├── prisma.ts
├── seo.ts
└── supabase.ts

scripts/
├── import-product-requests.ts
└── seed-category-rules.ts

The public showcase repository does not include production secrets, environment variables, Prisma schema files, database dumps or private operational configuration.
```
