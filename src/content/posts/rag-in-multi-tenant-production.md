---
title: RAG in Multi-Tenant Production
description: Embeddings are easy. Isolating tenant context under Row-Level Security while the model answers in real time is the real exam.
date: 2026-03-14
tag: AI
keywords: RAG, LangChain, LangGraph, multi-tenant, Row-Level Security, pgvector
relatedProject: docentra
draft: false
---

Demo RAG is a weekend. Production RAG in a multi-tenant product is a trust boundary problem wearing a chatbot costume.

I learned that the hard way shipping AI chat on a multi-tenant stack — Node, PostgreSQL, Supabase, Edge Functions — where a wrong retrieval is not a cute hallucination. It is a data leak.

## The easy part everyone ships first

- Chunk documents
- Embed with a hosted or local model
- Store vectors
- Retrieve top-k
- Stuff into a prompt

That pipeline can look great on a single-tenant corpus. It teaches almost nothing about tenancy.

## The hard part: isolation under load

In a multi-tenant AI platform, every retrieval and every tool call must inherit the same authorization story as the rest of the API:

- Authentication that establishes tenant + user
- Authorization that scopes resources
- Row-Level Security so the database enforces isolation even when application code forgets
- Serverless functions that cannot “accidentally” query across tenants with a service role

If the embedding index is global and filters are optional query params, you do not have RAG. You have a future incident report.

## Patterns that held up

**Tenant-qualified vectors.** Partition or heavily filter by `tenant_id` at write and read. Prefer database enforcement over app-only `WHERE` clauses.

**Prompt context as a least-privilege view.** Only retrieve documents the user could download in the product UI. If they cannot open the PDF, the model should not quote it.

**LangGraph / LangChain for control flow, not for auth.** Orchestration libraries are great for retrieval → tool → answer loops. They are not your security model. Keep auth outside the graph.

**Eval with tenancy adversarial cases.** Test suites that only check answer quality will miss cross-tenant retrieval. Add fixtures that *must* return empty across the boundary.

## Where Docentra fits the same lesson

Docentra’s document search API uses JWT auth and role-based access over private libraries, with a FastEmbed + pgvector path for semantic search. Same principle: semantic power is worthless if authorization is decorative.

## Tradeoffs

**Shared index vs per-tenant indexes.** Shared is cheaper and operationally simpler; per-tenant is cleaner isolation and noisier ops. Start shared with strict filters and a kill switch; split when a tenant’s corpus or compliance demands it.

**Edge functions and service keys.** Convenience keys bypass RLS. Treat them as break-glass, not default.

**Latency.** Authz checks + retrieval + generation stacks up. Cache carefully without caching across tenants.

## Takeaway

RAG quality is a product feature. RAG isolation is a security feature. In multi-tenant production, ship the second before you celebrate the first.

If your chatbot can see another customer’s documents, you did not ship AI — you shipped a liability.
