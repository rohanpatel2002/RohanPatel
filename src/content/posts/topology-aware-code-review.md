---
title: Topology-Aware Code Review
description: A green unit test cannot see the service next door. Architecture risk belongs in the pull request, not the outage channel.
date: 2026-03-30
tag: AI
keywords: service topology, code review, microservices, Tribunal, architecture risk
relatedProject: tribunal
draft: false
---

Unit tests are loyal to the package under change. Production is loyal to the graph. Most review tools inherit the unit-test worldview: they stare at the diff and hope the rest of the system will be fine.

Topology-aware review starts from the opposite assumption: the interesting risk is often *outside* the lines that changed.

## The PR that looks safe

Classic example: rename a field, tighten a validation, bump a shared client. Diff is small. Tests pass. Two services later, a consumer still deserializes the old shape, or a batch job reads the column at 3 a.m.

The reviewer who only reads the PR file list will bless it. The reviewer who knows the graph will pause.

## What “topology-aware” means in practice

In Tribunal, architecture-risk detection uses service-topology awareness to surface cross-service risk before merge. Concretely:

1. Map changed modules to owning services
2. Walk outbound and inbound edges that matter (APIs, events, shared stores)
3. Flag high-coupling blast patterns and contract-sensitive touches
4. Attach the finding to the PR as review context

You are not trying to prove safety. You are trying to force the right conversation while the branch still exists.

## Humans still win at judgment

Graphs do not know that a deprecation is intentional, or that a dual-write is mid-flight. The tool should present *who else is in the room*, not pretend to own the merge button.

Best UX: “This touches the billing event schema — consumers: X, Y. Last related incident: Z.” Then a human decides.

## Building the graph without boiling the ocean

Start with high-signal edges:

- Declared service dependencies in deploy configs
- OpenAPI / protobuf consumers
- Shared database ownership documents
- Message topics with known subscribers

Ignore vanity edges until they earn their keep. A dense wrong graph is how you train people to ignore the tool.

## Tradeoffs

**Stale topology** creates false calm. Prefer freshness SLOs over decorative completeness.

**Monorepo vs polyrepo** changes how you resolve “what changed.” Path → service maps become critical infrastructure.

**Noise.** Not every edge deserves a comment. Threshold on contract surfaces and high-pager services first.

## Takeaway

Code review that cannot see the graph is reviewing a fiction of isolation. Topology-aware review pulls the next outage’s supporting cast into the PR while change is still cheap.

Tribunal’s architecture-risk path exists for that moment — before merge, not after the channel lights up.
