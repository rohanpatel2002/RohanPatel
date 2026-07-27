---
title: Compliance Engines in Go
description: Certificate windows, multi-site shipments, and why business rules belong in a testable Go engine — not a spreadsheet and a prayer.
date: 2026-02-02
tag: Backend
keywords: Go, compliance, GraphQL, Hasura, validation engine, domain logic
draft: false
---

Compliance is where product language and database rows refuse to match. “Is this shipment allowed under this certificate for this site in this date window?” sounds like a sentence. It behaves like a state machine with lawyers.

At Praalak, on the Regenerative Organic Alliance (ROA) traceability work, I designed a Go backend compliance engine that enforces certificate business rules — validating shipment dates against scope-certificate windows across multi-certificate, multi-site cases — and surfaced failures through GraphQL/Hasura into a React UI.

## Why a dedicated engine

Scattered `if` statements in resolvers rot. Spreadsheets drift. The useful shape is a pure-ish domain engine:

- Inputs: certificates, sites, shipment events, effective dates
- Outputs: pass / fail with machine-readable reasons
- Side effects: none in the core — persistence and GraphQL sit outside

That boundary makes unit tests possible. Compliance without tests is folklore.

## Multi-certificate, multi-site reality

Real orgs do not have one certificate and one warehouse. They have overlapping scopes, partial site coverage, and shipments that cross boundaries the PDF never explained clearly.

The engine has to:

- Resolve which certificates could apply
- Intersect date windows with shipment timestamps
- Respect site scope, not just org-level paperwork
- Emit errors a human can fix (which cert, which window, which site)

Ambiguous failures (“invalid”) train users to ignore the system. Specific failures train users to correct data.

## GraphQL as a delivery truck, not the brain

Hasura/GraphQL extensions were how we fed the UI and kept queries aligned with the validation surface. The brain stayed in Go. Putting rule logic in GraphQL schema directives alone would have made versioning and testing painful.

Frontend (React + Ant Design) showed real-time validation errors so operators were not waiting for a nightly batch to learn they shipped wrong.

## Tests are the product

We added Go tests for the engine and Vitest coverage on the UI paths that render failures. The valuable tests are tables of cases:

- Shipment on the last valid day
- Shipment one day after expiry
- Site not on the certificate
- Two certificates, only one covering the SKU/site combo

If you cannot express the rule as a table, you do not understand the rule yet.

## Tradeoffs

**Flexibility vs correctness.** Configurable rules sound nice until nobody can explain the config. Prefer code-reviewed rule modules for high-stakes constraints.

**Performance.** Validating on write paths beats bulk “hope” jobs — but you must keep the engine fast enough for interactive forms.

**Partial automation.** Some edge cases still need human override with audit. Encode the override; do not pretend the world is fully decidable.

## Takeaway

Compliance engines earn their keep when business rules are testable, explanations are specific, and the API surface cannot silently drift from the PDF. Go is a strong fit: clear types, fast tests, boring deploy story.

Ship the engine. Keep the spreadsheet as a museum exhibit.
