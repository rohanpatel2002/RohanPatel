---
title: Idempotency Keys Are a Product Feature
description: Retries are inevitable. Double charges and duplicate rows are optional — if the API treats idempotency as part of the user promise.
date: 2026-06-28
tag: Backend
keywords: idempotency, API design, retries, distributed systems, backend
draft: false
---

Clients retry. Mobile networks flap. Users double-click. Load balancers time out while the write succeeds. Pretending any of that is rare is how you get duplicate invoices.

Idempotency is not an infrastructure footnote. It is what the product *means* when someone says “submit.”

## The minimum viable contract

For mutating endpoints that matter:

1. Client sends an `Idempotency-Key` (UUID) per logical user action
2. Server records key → response (or in-flight lock) scoped to the auth principal
3. Replays with the same key return the same outcome
4. Keys expire on a documented TTL — long enough for retries, short enough not to be forever storage

If two different bodies share a key, that is a client bug: reject it loudly.

## Where people cut corners

**Only at the payment provider.** Your app still creates two local orders that both “failed” to charge once. Local state needs the same key discipline.

**Only in the UI.** Disable the button. Good. Insufficient. Network retries and webhook redelivery do not care about your disabled button.

**Keys without scope.** A key reused across users or tenants is a confusion bomb. Scope by principal + route intent.

## Design the key with the UX

The key should bind to the user’s intent, not the HTTP attempt:

- “Pay invoice #442” → one key for that click / confirm
- “Save draft” can be last-write-wins without keys if you accept it
- “Create resource” almost always wants a key

Document it in the API the way you document auth. Frontend and mobile will get it wrong otherwise — and they will retry anyway.

## Test the boring path

Integration tests that fire the same key twice under concurrency are worth more than another OpenAPI example. The bug you want to catch is “two rows, one user action.”

Retries are free. Duplicate side effects are product debt. Idempotency keys are how you keep the promise.
