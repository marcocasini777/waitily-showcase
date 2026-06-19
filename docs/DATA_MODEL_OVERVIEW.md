# Data Model Overview

The following entities are inferred from source usage. This is not a database dump and does not expose schema definitions, RLS policies or production records.

## Main entities

- `DemandPool`
- `ProductRequest`
- `Offer`
- `UserContact`
- `CategoryRule`
- event/tracking records for pool views, offer views, offer clicks and share actions

## Main domain areas

- **Demand pools:** canonical query, slug, category, demand count, status, average reference price and collection window.
- **Product requests:** original user query, reference price, reference URL, status and optional user contact.
- **Offers:** title, URL, price, type, fallback flag, estimated savings, cashback, status and expiration.
- **Category rules:** keyword-based product classification rules.
- **Events:** behavioral signals used for founder/admin intelligence.

Sensitive schema details, migrations, policies and production data are intentionally excluded.
