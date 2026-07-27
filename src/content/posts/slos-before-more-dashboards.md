---
title: SLOs Before More Dashboards
description: Another Grafana board will not tell you when to page. Service level objectives turn metrics into decisions people can defend.
date: 2026-06-02
tag: Systems / DevOps
keywords: SLO, observability, SRE, on-call, DevOps, reliability
relatedProject: ironclad
draft: false
---

Teams in pain often ask for more graphs. What they usually need is a sentence: *this is how good we promised to be, and this is how we are doing.*

That sentence is an SLO.

## Dashboards without SLOs are museums

Pretty panels show that something moved. They do not answer:

- Should we page?
- Should we freeze deploys?
- Did this week’s “improvement” help users?

If on-call is driven by intuition over a wall of charts, you will either burn people out or miss real pain.

## Write the promise in user words

Good SLOs sound like product:

- “99.9% of checkout starts complete within 2s”
- “99% of deploy gate evaluations finish within 5s”
- “Search returns success for 99.5% of authenticated queries”

Bad SLOs sound like infrastructure vanity: CPU under 70%, pod restarts low. Those can be *indicators*. They are not the promise.

## Error budgets are the culture hack

An error budget converts reliability into a shared currency with product and eng:

- Budget healthy → ship
- Budget burning → slow down, fix, or explicitly spend

Without a budget, every reliability debate is a vibe fight. With one, you can still choose speed — you just choose it with eyes open.

## Instrument for the SLO, not for completeness

You do not need every span forever. You need:

- The golden signals that feed the SLO
- Traces for the paths that burn budget
- Logs that explain *why* when the burn spikes

Add cardinality only when a question keeps recurring. Observability spend without an SLO is how you buy a second full-time job for your metrics bill.

Ship the promise first. Then build the smallest dashboard that proves it.
