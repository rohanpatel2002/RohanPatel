---
title: Eval Harnesses Before Prompt Tweaks
description: Prompt tinkering feels like progress. A fixed eval set is what tells you whether the model got better or you got lucky.
date: 2026-07-18
tag: AI
keywords: LLM evals, AI quality, prompt engineering, regression testing, production AI
draft: false
---

The fastest way to waste a week on an AI feature is to chase “better answers” by editing the system prompt until a demo looks good.

I still write prompts. I just refuse to trust them without a harness.

## What an eval harness actually is

Not a research paper. A boring folder of cases:

- Input the product will really see
- The expected *behavior* (not one golden paragraph)
- Tags for failure modes you care about — refusal, citation, tool choice, latency budget

Run the candidate prompt / model / retrieval config against that set. Score. Diff. Ship or don’t.

If you cannot re-run last week’s set tonight, you do not have quality control. You have folklore.

## Prompt edits without evals are untracked migrations

Changing a prompt in production is a behavior change with no schema and no typechecker. Teams that would never merge an untested SQL migration will happily rewrite the system message because one stakeholder disliked a tone.

Treat prompt and tool-policy changes like code:

- PR with the text diff
- Eval score before / after
- Rollback path (previous prompt version pinned)

## Design the score for the product, not the model

Accuracy against a single reference answer is a trap for generative UX. Prefer checks that map to user harm:

- Did it cite only retrieved docs?
- Did it call the right tool with valid args?
- Did it refuse when the user asked for another tenant’s data?
- Did it stay under the token / latency budget?

A model that “writes beautifully” while leaking scope is a failed eval, not a win.

## Start small, stay fixed

Twenty hard cases beat two hundred soft ones. Freeze the set when you ship. Add cases when production surprises you — the same way you add regression tests after bugs.

Prompt tweaks are cheap. Knowing whether they helped is the scarce resource.
