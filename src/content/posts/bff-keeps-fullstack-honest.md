---
title: A BFF Keeps Full-Stack Honest
description: When the UI talks to five microservices directly, “full-stack” becomes glue debt. A backend-for-frontend is how product shape stays intentional.
date: 2026-06-14
tag: Product / Delivery
keywords: BFF, full-stack, API design, frontend architecture, product delivery
draft: false
---

Full-stack used to mean one person could ship a feature. Too often it now means the browser is the integration layer.

That is not velocity. That is coupling with a CSS file.

## What a BFF is for

A backend-for-frontend is a thin server that speaks **product language** to the UI and **service language** to the domain:

- Aggregate the three calls the screen needs into one
- Shape DTOs for the view, not for storage
- Enforce session auth once
- Hide internal IDs, pagination quirks, and partial-failure modes

The React tree should not know that billing lives in service A and entitlements in service B.

## Without a BFF, the frontend becomes the org chart

Every new microservice adds:

- Another client SDK in the browser
- Another loading / error state
- Another CORS and versioning story
- Another place to forget a header

You can “move fast” for one quarter. Then every feature is a distributed systems problem in `useEffect`.

## Keep it thin on purpose

A BFF that grows a second domain model is a new monolith with extra hops. Rules of thumb:

- No long-lived business workflows that belong in a domain service
- Mapping and aggregation yes; inventing policy no — call the service that owns the rule
- Version the BFF with the app release when you can; do not forever-support three UI shapes

## Full-stack ownership still matters

The win is not “frontend people never touch servers.” The win is **one place** where the product’s read/write story is coherent — owned by people who care about the screen *and* the failure modes behind it.

That is full-stack as a delivery model, not as a browser that speaks gRPC-Web to everything.
