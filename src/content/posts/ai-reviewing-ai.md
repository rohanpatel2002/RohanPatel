---
title: "AI Reviewing AI: The Missing Layer"
description: When models write the PR, classic review still misses context the model never saw. A field report from building Tribunal.
date: 2026-04-12
tag: AI
keywords: AI code review, LLM, pull requests, Tribunal, software engineering
relatedProject: tribunal
draft: false
---

We already live in a world where a non-trivial share of diffs are model-authored. The review ritual barely changed. That mismatch is the bug.

Humans reviewing humans assume shared context: the incident last week, the migration still rolling out, the service that must not take a schema lock on Fridays. Models do not inherit that context unless you put it in the prompt — and even then, they optimize for local coherence, not organizational memory.

## What classic review still catches

Style, obvious logic errors, missing tests, API smell. Good reviewers still earn their keep.

## What classic review systematically misses on AI diffs

- **Confident wrongness** — fluent code that violates an unstated invariant
- **Cross-service blindness** — a “clean” change that breaks a contract two repos away
- **Generated patterns at scale** — the same unsafe abstraction pasted across services
- **Missing negative space** — what the model did *not* update (callers, dashboards, runbooks)

When the author is an LLM, the probability of locally pretty, globally dangerous code goes up. Review volume goes up too. You cannot hire your way out of that curve forever.

## The missing layer

Tribunal’s premise: semantic pull-request analysis aimed at AI-shaped risk — not another linter that nags about import order.

Useful signals:

- Likelihood the change is primarily model-generated (and therefore needs different scrutiny)
- Semantic drift against stated architecture constraints
- Topology-aware risk: which services sit downstream of the touched surface
- Explanations a human can dispute in review comments

The output should feel like a sharp reviewer leaving notes, not a scoreboard.

## Guardrails for AI reviewing AI

Recursive nonsense is a real failure mode. If the reviewer model hallucinates policy, you have automated false confidence.

Mitigations I care about:

- Ground claims in repo facts (ownership files, service catalogs, recent incidents) where possible
- Prefer *questions and flags* over absolute verdicts
- Keep a human as the merge authority
- Log model rationale for audit when the call is close

## Tradeoffs

**Latency vs depth.** Full-repo agents are slow and expensive. Targeted analysis on the diff + neighborhood graph is the practical path.

**False accusation.** Labeling a human PR as “AI-generated” is a social grenade. Treat provenance as a *scrutiny hint*, not a moral judgment.

**Policy encoding.** Architecture rules must be machine-readable enough to check, or the tool becomes a chatty summarizer.

## Takeaway

AI authorship changes the prior on what a PR is likely to get wrong. The missing layer is review that understands that prior — semantic, topology-aware, and humble enough to ask humans the questions models skip.

That is the layer Tribunal is built to occupy.
