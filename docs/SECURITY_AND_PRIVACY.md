# Security and Privacy Review

This public showcase was prepared to avoid exposing production-sensitive implementation details.

## Excluded from the public repository

- `.env` files
- database credentials
- Supabase keys
- Prisma schema and migrations
- production database dumps
- real user emails
- real demand records
- partner/affiliate credentials
- production configuration
- private business logic not needed for review

## Security-related concepts visible in the source structure

- server-side request processing
- URL validation before storing references
- email normalization and validation
- disclosure copy for partner/affiliate outcomes
- server-side offer redirect tracking
- event tracking through route handlers
- public/private code separation for portfolio use

## Public showcase policy

This repository is designed for recruiters and technical evaluators. It shows architecture, UI, product scope and selected safe component examples without making the production app clonable.
