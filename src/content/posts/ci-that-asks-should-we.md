---
title: CI That Asks “Should We?” Not Just “Can We?”
description: ALLOW, WARN, and BLOCK are a culture, not a badge color. How to design promotion decisions humans will respect.
date: 2026-04-22
tag: Systems / DevOps
keywords: CI/CD, deployment culture, ALLOW WARN BLOCK, release engineering, IronClad
relatedProject: ironclad
draft: false
---

“Can we deploy?” is a compiler question. “Should we deploy?” is an organizational one. Most pipelines only answer the first, then act surprised when the second bites them at 2 a.m.

I care about the second question enough to encode it.

## Three outcomes, not two

Binary pass/fail trains binary behavior: green means ship, red means fight the tool. Reality has a middle.

**ALLOW** — risk is within policy; proceed.  
**WARN** — risk is elevated; a human should acknowledge ownership and mitigation.  
**BLOCK** — risk exceeds policy; do not promote until conditions change.

WARN is the cultural load-bearing wall. Without it, every uncomfortable case becomes either ignored green or contested red. With it, you create a deliberate pause that still respects urgency.

## Designing decisions people won’t bypass

A gate people route around is worse than no gate — it teaches contempt for controls.

Rules I use:

- **Explain in English.** “Blocked because checkout + payments share a migration window with thin on-call” beats `ERR_RISK_THRESHOLD`.
- **Name the mitigation.** Rollback SLO, canary plan, feature flag, hold until Monday.
- **Log immutably.** Postmortems need the decision, not folklore.
- **Keep latency human.** If evaluation takes longer than the deploy ritual, people will skip the ritual.

IronClad’s contract is ALLOW / WARN / BLOCK with an actionable explanation. That is the product surface — not a dashboard full of unexplained scores.

## Where “should we” gets its signal

- Change classification (functional vs migration vs infra)
- Dependency impact and blast radius
- Reversibility estimate
- Timing risk (traffic, ops coverage, recent incidents)
- Historical failure grammar for similar intents

None of that replaces tests. It sits *in front of promotion* as a semantic layer.

## Culture failure modes

**WARN inflation.** If everything warns, nothing does. Calibrate with real incidents; retire noisy rules.

**Hero overrides.** Overrides should exist and be audited. Silent overrides are how you get the same SEV twice.

**Policy as code nobody owns.** Thresholds need a named steward — platform, SRE, or a guild — not a magic constant in a PR from 2024.

## Takeaway

CI that only asks “can we?” optimizes for merge velocity. CI that also asks “should we?” optimizes for surviving the merge. The useful vocabulary is three words — ALLOW, WARN, BLOCK — backed by explanations operators can argue with and learn from.

That vocabulary is what IronClad ships toward.
