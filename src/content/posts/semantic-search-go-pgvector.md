---
title: Building Semantic Search in Go with pgvector
description: Notes from shipping Docentra — JWT-guarded libraries, FastEmbed pipelines, and where Postgres earns its keep for embeddings.
date: 2026-02-28
tag: Backend
keywords: Go, pgvector, semantic search, FastEmbed, Docentra, PostgreSQL
relatedProject: docentra
draft: false
---

Vector databases are having a moment. Postgres with pgvector is having a quieter, more useful one: keep your relational truth and your embeddings in one operational story.

Docentra is a document search API in Go (Chi, GORM) with JWT auth over private libraries and a containerized Python FastEmbed pipeline for embeddings. The lesson is less “vectors are magic” and more “boring infrastructure with a clear boundary wins.”

## Why Postgres first

For many products, documents already live next to users, ACLs, and audit tables. Duplicating that world into a separate vector store means dual writes, dual backups, and dual failure modes.

pgvector lets you:

- Keep `document_id` foreign keys honest
- Filter by tenant / role in the same query as similarity
- Operate one primary datastore until scale forces a split

When you outgrow it, you will know — latency, index size, or recall needs will tell you. Until then, avoid architecture cosplay.

## The Go side of the boundary

The API’s job:

1. Authenticate (JWT)
2. Authorize (role over library)
3. Accept upload / index requests
4. Query similar chunks with ACL filters applied
5. Return citations the caller is allowed to see

Chi + GORM is intentionally unspectacular. Semantic search fails more often from authz bugs than from cosine distance choice.

## The embedding pipeline

I containerized a Python FastEmbed path so embedding stays reproducible across machines. Go does not need to own model runtimes on day one. A clean handoff beats a heroic single binary.

Practical details that mattered:

- Stable chunking rules (size, overlap, heading awareness)
- Idempotent re-index for document updates
- Version the embedding model id next to vectors so you can migrate deliberately
- Health checks that fail closed if the embed worker is down

## Query design that does not lie

Similarity without filters is a demo. Production queries look like:

```sql
SELECT id, content, 1 - (embedding <=> $1) AS score
FROM chunks
WHERE library_id = $2
ORDER BY embedding <=> $1
LIMIT $3;
```

The `WHERE` is the product. The operator is the math.

Tune indexes (`ivfflat` / `hnsw`) only after you have realistic data volumes. Premature index worship is a great way to feel busy.

## Tradeoffs

**Recall vs latency.** Higher probes / efSearch help recall and hurt p99. Measure with your corpus, not a blog benchmark.

**Python worker ops.** Another container is another pager. Soften with clear queues and backpressure.

**Hybrid search.** Keyword + vector often beats either alone for internal docs. Add it when users show you the miss cases.

## Takeaway

Semantic search in Go with pgvector is mostly systems design: authn/authz, reproducible embeds, and queries that never forget who is asking. Docentra is that shape — private libraries first, vectors second.
