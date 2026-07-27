---
title: Multi-Tenant Postgres with RLS Without Shooting Yourself
description: Row-Level Security is a seatbelt. Application filters are a sticky note. Lessons from shipping tenant isolation on Supabase and Postgres.
date: 2026-02-16
tag: Backend
keywords: PostgreSQL, Row-Level Security, multi-tenant, Supabase, backend security
draft: false
---

If tenancy lives only in application `WHERE tenant_id = ?` clauses, you are one forgotten filter away from a breach. Row-Level Security moves the boundary into the database — where a tired engineer cannot casually bypass it with a new endpoint.

I have leaned on Postgres RLS and Supabase patterns while building multi-tenant backends for production AI and platform work. The feature is powerful. Misused, it creates a false sense of safety that is worse than honesty.

## What RLS is for

RLS policies attach to tables and constrain which rows a role can see or mutate. Combined with a session variable or JWT claim that identifies the tenant, the database refuses cross-tenant reads even if the query text is wrong.

That is the point: defense in depth when application code inevitably drifts.

## Patterns that work

**Set the tenant context per request.** Middleware extracts tenant from the JWT and sets `request.jwt.claim.sub` / custom claims or `SET LOCAL app.tenant_id = ...` inside the transaction. Policies read that context.

**Prefer `SET LOCAL` in transactions.** Connection pooling will ruin your week if tenant context leaks across requests on a shared connection.

**Keep service-role access rare.** Admin paths that bypass RLS should be explicit, audited, and tiny.

**Test negative paths.** Automated tests that only check happy-path reads will not catch isolation bugs. Insert two tenants’ rows and assert emptiness across the boundary on every sensitive table.

## Failure modes I watch for

- Policies that use `OR true` “temporarily”
- Views that bypass intended policies
- ORM query builders that switch to a privileged role for convenience
- Background jobs using a global service key over user-scoped data
- Caching layers that key on document id but not tenant id

RLS does not fix a CDN that caches private JSON under a public URL.

## Supabase specifics

Supabase makes JWT claims easy to reference in policies. Edge Functions tempt you into service-role usage for speed. Default to the user-scoped client. Reach for service role only when the operation is truly system-level — and still constrain by tenant in SQL.

Multi-tenant AI stacks amplify the risk: retrieval queries, file storage objects, and chat transcripts all need the same story. One table left unprotected becomes the exfiltration path.

## Tradeoffs

**Complexity.** Policies are another language in your stack. Document them next to the schema; treat policy PRs as security PRs.

**Performance.** Poorly written policies can hurt plans. Index the columns your policies filter on. Measure.

**Migration discipline.** Adding RLS to a live table without a rollout plan will lock out legitimate traffic. Pair enablement with monitoring.

## Takeaway

Multi-tenant Postgres without RLS is an application pinky-promise. With RLS, you still need careful session context, scarce privileged paths, and adversarial tests — but a whole class of “oops” endpoints stop being fatal.

Seatbelts are not optional after the first passenger.
