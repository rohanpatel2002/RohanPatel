---
title: Tool Calls Need Contracts
description: Agents that can call anything will eventually call the wrong thing. Production tool use is an API design problem with a model in the loop.
date: 2026-07-08
tag: AI
keywords: tool calling, agents, LLM tools, API contracts, production AI
relatedProject: tribunal
draft: false
---

Giving a model tools is how demos become products. It is also how products become incident tickets.

A tool call is a network request with weaker intent than a human click. Treat it like an untrusted client.

## The contract is the product

For every tool I expose:

- **Name and description** that match what the backend actually does — no marketing copy
- **Strict JSON schema** for arguments; reject extras
- **Auth context inherited from the session**, never from the model’s “user_id” field
- **Side-effect class**: read, write, irreversible
- **Idempotency** for writes the model may retry when the stream dies

If the schema is loose, the model will invent fields. If auth is a parameter, the model will invent tenants.

## Narrow beats clever

One fat `run_sql` tool is a liability. Prefer small tools that encode product verbs:

- `search_documents`
- `create_review_comment`
- `get_deployment_status`

Narrow tools are easier to authorize, log, and eval. Clever mega-tools are harder to sandbag when the model gets creative.

## Make failure visible to the model — carefully

Return structured errors the model can recover from (`NOT_FOUND`, `FORBIDDEN`, `VALIDATION`) without dumping stack traces or internal IDs into the transcript. The model should retry intelligently; the user should not see your VPC topology.

## Log the decision, not just the outcome

Store: tool name, args (redacted), auth subject, latency, result class. When an agent does something weird at 11 p.m., you need the transcript of *choices*, not only the final message.

Tool calling without contracts is just RPC with vibes. Contracts turn it into software.
