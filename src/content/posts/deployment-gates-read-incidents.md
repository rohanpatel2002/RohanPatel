---
title: Why Deployment Gates Should Read Incidents
description: Green CI is not safety. The useful gate scores deploy intent against dependency topology, timing, and what already broke you once.
date: 2026-05-18
tag: Systems / DevOps
keywords: deployment gates, CI/CD, incident history, IronClad, DevOps
relatedProject: ironclad
draft: false
---

Most deployment pipelines answer three questions: does it compile, do the tests pass, and is lint clean. Those are necessary. They are also the wrong ceiling for production risk.

A change can be perfectly green and still be the wrong thing to ship *right now* — into a brittle dependency graph, during a thin on-call window, or against a service that failed for the same class of change three months ago. Syntax does not know your last outage. Intent does.

## The gap CI leaves open

Traditional gates optimize for *correctness of code*. Operators care about *survivability of change*. Those overlap, but they diverge exactly where incidents live:

- Blast radius: how many downstream journeys light up if this fails
- Reversibility: can you undo it inside the SLO that your users actually feel
- Timing: peak traffic, post-migration fatigue, half the pager roster on leave

None of those show up as a red Jest suite. They show up in postmortems as “we knew this was risky, but the pipeline said go.”

## What “reading incidents” actually means

When I started IronClad, the thesis was simple: sit in front of promotion and evaluate *deploy intent*, not just artifacts.

For a candidate change the gate should:

1. Ingest the deploy request and diff metadata from CI
2. Classify intent — functional, infra, migration, rollout
3. Resolve an impact graph from changed components
4. Score risk axes and consult historical failure patterns
5. Emit ALLOW, WARN, or BLOCK with a plain-English explanation

The explanation matters as much as the decision. A binary block without mitigation teaching is just another opaque flaky check people will learn to bypass. An immutable decision log is what turns the gate into an audit surface and a learning loop.

## Learning from your own failure grammar

Incident history is not a sentiment feed. It is a grammar of what already hurt you: which services fail together, which change types cluster before SEVs, which windows correlate with bad rollbacks.

That does not require a mystical model on day one. Start with structured correlations — service + change class + time-of-day + rollback outcome. Score conservatively. Prefer WARN with a clear owner path over BLOCK theater.

The P95 latency goal I set for IronClad is under two seconds. If the gate is slower than the human’s willingness to wait, they will route around it. Safety that people skip is not safety.

## Tradeoffs I keep revisiting

**False positives vs trust.** Over-blocking trains workarounds. Under-blocking trains complacency. WARN with ownership is the middle that preserves culture.

**Topology freshness.** A stale service graph is worse than no graph — it lies with confidence. Prefer partial graphs with explicit uncertainty over fake completeness.

**Who owns the threshold.** Org-level SLOs for reversibility (for example, rollback under 60 seconds) should be config, not buried constants. Engineers will argue thresholds; that argument is healthy if it is visible.

## Takeaway

If your pipeline only certifies that code is correct, you are still guessing about whether production can absorb the intent. The next useful layer of CI asks whether this change matches what the system can safely take *today* — and it should be able to point at the last time a similar intent went wrong.

That is the work behind IronClad: a semantic deployment risk engine, not another green checkmark.
