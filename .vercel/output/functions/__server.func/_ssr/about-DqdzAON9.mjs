import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { W as WordReveal, R as Reveal, a as site } from "./router-jjw8zR6r.mjs";
import { r as resume } from "./resume-B5JuwJYX.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { m as motion, d as useReducedMotion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
import "../_libs/lucide-react.mjs";
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/lenis.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const ACT_MS = 6500;
const EASE = [0.22, 1, 0.36, 1];
const ACTS = [{
  code: "01",
  beat: "Screen → schema",
  line: "One product story. Layers tell the same truth."
}, {
  code: "02",
  beat: "Tenants hold",
  line: "Traffic splits. Isolation holds. Boring on purpose."
}, {
  code: "03",
  beat: "Model in the loop",
  line: "AI as a component — gated, logged, reversible."
}, {
  code: "04",
  beat: "Brief → owned",
  line: "Ambiguity in. Smallest honest system out."
}];
const MOBILE_BOARDS = [{
  nodes: [{
    title: "Request",
    accent: true,
    lines: ["POST /v1/projects", "201 · 42ms · traced"],
    detail: "Bearer · idempotency-key"
  }, {
    title: "UI → API → Schema",
    accent: true,
    lines: ["Form → ProjectDTO", "CreateProject · authz", "projects table"]
  }, {
    title: "Shared contract",
    lines: ["type Project = {…}", "UI · API · DB agree"],
    detail: "one source of truth"
  }]
}, {
  nodes: [{
    title: "Session",
    lines: ['tid: "tenant_a"', "JWT · 15m · admin"]
  }, {
    title: "API + policy",
    accent: true,
    lines: ["authorize → open tx", "SET app.tenant"],
    detail: "then query / mutate"
  }],
  split: [{
    title: "Tenant A",
    lines: ["p_01 acme", "p_04 north"]
  }, {
    title: "Tenant B",
    lines: ["p_02 helix", "p_09 orbit"]
  }],
  footer: "RLS wall · cross read denied"
}, {
  nodes: [{
    title: "Query",
    lines: ["user ask + tenant_a"]
  }, {
    title: "Retrieve",
    accent: true,
    lines: ["pgvector top-k", "filter: tenant_id"],
    detail: "k=6 · score ≥ 0.72"
  }, {
    title: "Model + gate",
    accent: true,
    lines: ["eval · citations", "kill switch: OFF"]
  }],
  footer: "rollback = feature flag"
}, {
  nodes: [{
    title: "Brief",
    lines: ["ambiguous ask", "find the real constraint"]
  }, {
    title: "Owned system",
    accent: true,
    lines: ["CI · RLS tests", "rollback · decision log"],
    detail: "smallest honest system"
  }, {
    title: "Handoff",
    lines: ["README · ADRs", "team runs it without me"]
  }]
}];
const FOCUS = [{
  title: "Full-stack product systems",
  lead: "One product story from the screen to the schema.",
  body: "I design interfaces, APIs, and data models as a single system — not a frontend bolted onto someone else's backend. When the UI, the contract, and the database agree, features stay shippable. When they don't, every release becomes integration debt. The work is making those layers tell the same truth so product velocity doesn't rot into glue code."
}, {
  title: "Backend & infrastructure",
  lead: "Services you can trust when traffic and tenants collide.",
  body: "Go and Node backends with explicit contracts, multi-tenant boundaries, and enough observability to diagnose failure without folklore. Isolation belongs in the platform — JWT sessions, authorization checks, and Row-Level Security — so a forgotten WHERE clause cannot become a cross-tenant leak. Infrastructure here means CI, deploy paths, and data rules that keep production boring on purpose."
}, {
  title: "Applied AI in production",
  lead: "Models as components — with auth, evals, and an exit ramp.",
  body: "RAG pipelines, semantic search, and AI-assisted review tooling only count when quality is measurable and risk is reversible. I treat retrieval, prompts, and tool calls like any other production surface: scoped to the right tenant, logged, tested against real failure modes, and easy to turn off. A chatbot demo is cheap. An AI feature that respects data boundaries and survives an incident is the actual product."
}, {
  title: "Forward-deployed delivery",
  lead: "Ambiguous brief in. Owned system out.",
  body: "Client work and research environments rarely arrive with a tidy ticket. I sit with the mess, find the real constraint, and ship the smallest system a team can keep running without me. That means clarifying scope, choosing boring architecture when it wins, and leaving decisions visible — so ownership transfers cleanly instead of vanishing into a handoff call."
}];
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28 md:pt-36", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 8
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ ABOUT ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 font-display text-5xl sm:text-7xl md:text-8xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "Rohan Patel", className: "inline" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent", children: [
        "Software Engineer · ",
        resume.location
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-10 max-w-2xl text-xl font-light leading-[1.65] text-muted-foreground sm:text-2xl sm:leading-[1.6]", children: [
        "I build and ship",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "production systems that stay reliable under pressure" }),
        ". Full-stack products, resilient backend APIs, and AI-assisted workflows — with explicit guarantees for safety, rollback, and operational clarity. The goal is software teams can trust after the demo: tenancy that holds, deploys that reverse, and interfaces that match the contracts underneath."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.28, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: [
        "Built at",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Praalak Tech Solutions" }),
        ", where the work spans multi-tenant backends, compliance engines, and AI platforms that have to isolate data correctly under load. I previously contributed research software at the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Physical Research Laboratory (PRL, ISRO)" }),
        "— scientific pipelines and analysis tooling for polarization camera telemetry. Alongside that I have shipped freelance platforms end to end, contributed to open source at Grafana, Supabase, and Ollama, authored two peer-reviewed ML papers, and wrote",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.book, target: "_blank", rel: "noreferrer", className: "font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent", children: "Hired by an Algorithm" }),
        ", a field guide to how hiring systems actually parse documents."
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.34, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "The through-line is the same whether the context is a product team, a research lab, or a client brief: understand the real constraint, design the smallest honest system, and leave behind evidence — tests, boundaries, and decisions — that make the next change safer than the last." }) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ FOCUS ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "How I build.", className: "mt-3 font-display text-4xl uppercase sm:text-5xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg", children: "Four surfaces, one through-line. Watch a request become a system — then ship." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(FocusStory, {})
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function FocusStory() {
  const reduce = useReducedMotion();
  const [act, setAct] = reactExports.useState(0);
  const [paused, setPaused] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setAct((n) => (n + 1) % FOCUS.length);
    }, ACT_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 space-y-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-sm border border-border bg-background", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false), children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-end justify-between gap-4 border-b border-border px-4 py-4 sm:gap-6 sm:px-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[11px] uppercase tracking-[0.22em] text-accent", children: [
            "Act ",
            ACTS[act].code
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 8
          }, animate: {
            opacity: 1,
            y: 0
          }, exit: {
            opacity: 0,
            y: -6
          }, transition: {
            duration: 0.45,
            ease: EASE
          }, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 font-display text-xl uppercase tracking-tight text-foreground sm:text-2xl", children: ACTS[act].beat }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base", children: ACTS[act].line })
          ] }, act) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "hidden shrink-0 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block", children: paused ? "Paused" : "Playing" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sm:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MobileStoryBoard, { act, reduce: !!reduce }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative hidden aspect-[2/1] w-full bg-[color-mix(in_oklab,var(--background)_94%,var(--foreground)_3%)] sm:block", children: /* @__PURE__ */ jsxRuntimeExports.jsx(SystemStorySvg, { act, reduce: !!reduce }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 border-t border-border sm:grid-cols-4", children: ACTS.map((a, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setAct(i), className: "relative border-border px-3 py-3.5 text-left transition-colors hover:bg-foreground/[0.03] sm:px-5 sm:py-4 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r sm:[&:not(:last-child)]:border-r", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[11px] tracking-[0.18em] ${i === act ? "text-accent" : "text-muted-foreground"}`, children: a.code }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `mt-1.5 block font-display text-sm uppercase leading-tight sm:text-base ${i === act ? "text-foreground" : "text-muted-foreground/65"}`, children: a.beat }),
        i === act && !reduce && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent", initial: {
          scaleX: 0
        }, animate: {
          scaleX: paused ? void 0 : 1
        }, transition: paused ? {
          duration: 0
        } : {
          duration: ACT_MS / 1e3,
          ease: "linear"
        } }, act)
      ] }, a.code)) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4", children: FOCUS.map((item, i) => {
      const on = reduce || act === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", onClick: () => setAct(i), className: `relative flex min-h-[14rem] flex-col overflow-hidden rounded-sm border bg-background p-5 text-left transition-colors sm:min-h-[16rem] sm:p-6 ${on ? "border-accent" : "border-border hover:border-foreground/25"}`, children: [
        on && !reduce && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 h-full w-full text-accent", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.rect, { x: "1", y: "1", width: "98", height: "98", rx: "1.2", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", vectorEffect: "non-scaling-stroke", pathLength: 100, strokeDasharray: "18 82", initial: {
          strokeDashoffset: 0
        }, animate: {
          strokeDashoffset: -100
        }, transition: {
          duration: ACT_MS / 1e3,
          ease: "linear",
          repeat: Infinity
        } }, `focus-run-${act}`) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-baseline justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[11px] tracking-[0.2em] ${on ? "text-accent" : "text-muted-foreground"}`, children: String(i + 1).padStart(2, "0") }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `font-mono text-[10px] uppercase tracking-[0.16em] ${on ? "text-accent" : "text-muted-foreground/50"}`, children: on ? "Active" : "—" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: `relative mt-3 font-display text-xl uppercase leading-[0.95] sm:text-2xl ${on ? "text-foreground" : "text-muted-foreground"}`, children: item.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `relative mt-3 text-[15px] font-medium leading-snug sm:text-base ${on ? "text-foreground" : "text-muted-foreground"}`, children: item.lead }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `relative mt-2.5 line-clamp-4 flex-1 text-[13px] font-light leading-relaxed sm:line-clamp-5 sm:text-[14px] ${on ? "text-muted-foreground" : "text-muted-foreground/70"}`, children: item.body })
      ] }, item.title);
    }) })
  ] });
}
function MobileStoryBoard({
  act,
  reduce
}) {
  const board = MOBILE_BOARDS[act] ?? MOBILE_BOARDS[0];
  const total = board.nodes.length + (board.split ? 2 : 0);
  const {
    active: run,
    lapMs,
    hold
  } = useBorderRunner(total, !reduce, act);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 12
  }, animate: {
    opacity: 1,
    y: 0
  }, exit: {
    opacity: 0,
    y: -10
  }, transition: {
    duration: 0.45,
    ease: EASE
  }, className: "relative bg-[color-mix(in_oklab,var(--background)_92%,var(--foreground)_4%)] px-4 py-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-border" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-stretch gap-0", children: [
      board.nodes.map((node, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneNode, { node, index: i, reduce, running: run === i, lapMs, hold: hold && run === i, drift: act === 3 && !!node.accent }),
        (i < board.nodes.length - 1 || board.split) && /* @__PURE__ */ jsxRuntimeExports.jsx(FlowConnector, { reduce, delay: i * 0.15 })
      ] }, node.title)),
      board.split && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 px-0.5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneNode, { node: board.split[0], index: board.nodes.length, reduce, running: run === board.nodes.length, lapMs, hold: hold && run === board.nodes.length, compact: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center px-0.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "h-full min-h-[4.5rem] w-[3px] rounded-full bg-accent/80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent", children: "rls" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneNode, { node: board.split[1], index: board.nodes.length + 1, reduce, running: run === board.nodes.length + 1, lapMs, hold: hold && run === board.nodes.length + 1, compact: true })
      ] }),
      board.footer && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, transition: {
        delay: 0.35
      }, className: "mt-5 text-center font-mono text-[12px] uppercase tracking-[0.14em] text-accent", children: board.footer })
    ] })
  ] }, act) });
}
function FlowConnector({
  reduce,
  delay = 0
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex h-9 flex-col items-center justify-center", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "h-full w-px bg-accent/50", initial: {
      scaleY: 0
    }, animate: {
      scaleY: 1
    }, transition: {
      duration: 0.4,
      delay,
      ease: EASE
    }, style: {
      transformOrigin: "top"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "text-accent", animate: reduce ? void 0 : {
      y: [0, 3, 0],
      opacity: [0.5, 1, 0.5]
    }, transition: {
      duration: 1.6,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "10", viewBox: "0 0 14 10", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M7 10L0 0h14L7 10Z" }) }) })
  ] });
}
function PhoneNode({
  node,
  index,
  reduce,
  compact = false,
  drift = false,
  running = false,
  lapMs,
  hold = false
}) {
  const lap = (lapMs ?? Math.floor(ACT_MS / 5)) / 1e3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
    opacity: 0,
    y: 10
  }, animate: drift && !reduce ? {
    opacity: 1,
    y: 0,
    x: [0, 8, 0]
  } : {
    opacity: 1,
    y: 0,
    x: 0
  }, transition: drift && !reduce ? {
    opacity: {
      duration: 0.45,
      delay: index * 0.08
    },
    y: {
      duration: 0.45,
      delay: index * 0.08
    },
    x: {
      duration: 4.2,
      repeat: Infinity,
      ease: EASE,
      delay: 0.4
    }
  } : {
    duration: 0.45,
    delay: index * 0.08,
    ease: EASE
  }, className: `relative w-full rounded-sm border bg-background ${running || node.accent ? "border-accent/70" : "border-border"} ${compact ? "px-3 py-3.5" : "px-4 py-5"}`, children: [
    running && !reduce && /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 h-full w-full text-accent", viewBox: "0 0 100 100", preserveAspectRatio: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.rect, { x: "1", y: "1", width: "98", height: "98", rx: "1.5", fill: "none", stroke: "currentColor", strokeWidth: "1.75", strokeLinecap: "round", vectorEffect: "non-scaling-stroke", pathLength: 100, strokeDasharray: "20 80", initial: {
      strokeDashoffset: 0
    }, animate: {
      strokeDashoffset: -100
    }, transition: {
      duration: lap,
      ease: "linear",
      repeat: hold ? Infinity : 0
    } }, hold ? `hold-${index}` : `run-${index}`) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: `font-display uppercase tracking-tight ${compact ? "text-lg leading-none" : "text-2xl leading-none"} ${running || node.accent ? "text-accent" : "text-foreground"}`, children: node.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: `mt-3 space-y-1.5 ${compact ? "mt-2" : ""}`, children: node.lines.map((line) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: `font-mono leading-snug text-foreground ${compact ? "text-[12px]" : "text-[14px]"}`, children: line }, line)) }),
        node.detail && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 font-mono text-[12px] text-muted-foreground", children: node.detail })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `shrink-0 font-mono tabular-nums text-muted-foreground ${compact ? "text-[10px]" : "text-[11px]"}`, children: String(index + 1).padStart(2, "0") })
    ] })
  ] });
}
const LABEL = {
  fontSize: 13,
  letterSpacing: "0.1em",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
};
const LABEL_SM = {
  fontSize: 11,
  letterSpacing: "0.06em",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
};
const CODE = {
  fontSize: 10.5,
  letterSpacing: "0.02em",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace"
};
function SystemStorySvg({
  act,
  reduce
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 920 460", className: "absolute inset-0 h-full w-full text-foreground", "aria-hidden": true, preserveAspectRatio: "xMidYMid meet", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "text-border", stroke: "currentColor", strokeWidth: "1", fill: "none", opacity: "0.65", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M28 36 H44 M28 36 V52" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M892 36 H876 M892 36 V52" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M28 424 H44 M28 424 V408" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M892 424 H876 M892 424 V408" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimatePresence, { mode: "wait", children: [
      act === 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.55,
        ease: EASE
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActLayers, { reduce }) }, "act-0"),
      act === 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.55,
        ease: EASE
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActTenants, { reduce }) }, "act-1"),
      act === 2 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.55,
        ease: EASE
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActModel, { reduce }) }, "act-2"),
      act === 3 && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.55,
        ease: EASE
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(ActShip, { reduce }) }, "act-3")
    ] })
  ] });
}
function Panel({
  x,
  y,
  w,
  h,
  title,
  accent = false,
  delay = 0,
  pulse = false,
  lapMs,
  hold = false,
  children
}) {
  const runLen = 22;
  const lap = (lapMs ?? Math.floor(ACT_MS / 5)) / 1e3;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.g, { initial: {
    opacity: 0,
    y: 8
  }, animate: {
    opacity: 1,
    y: 0
  }, transition: {
    duration: 0.55,
    delay,
    ease: EASE
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y, width: w, height: h, rx: "5", fill: "color-mix(in oklab, var(--background) 94%, var(--foreground) 3%)", stroke: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y, width: w, height: h, rx: "5", fill: "none", stroke: "currentColor", className: accent || pulse ? "text-accent/70" : "text-foreground/40", strokeWidth: accent || pulse ? 1.45 : 1.1 }),
    pulse && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.rect, { x, y, width: w, height: h, rx: "5", fill: "none", stroke: "currentColor", className: "text-accent", strokeWidth: "2.35", strokeLinecap: "round", pathLength: 100, strokeDasharray: `${runLen} ${100 - runLen}`, initial: {
      strokeDashoffset: 0
    }, animate: {
      strokeDashoffset: -100
    }, transition: {
      duration: lap,
      ease: "linear",
      repeat: hold ? Infinity : 0
    } }, hold ? "runner-hold" : "runner"),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y, width: w, height: "28", rx: "5", fill: "color-mix(in oklab, var(--background) 82%, var(--foreground) 6%)", stroke: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x, y: y + 16, width: w, height: "12", fill: "color-mix(in oklab, var(--background) 82%, var(--foreground) 6%)", stroke: "none" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: x, y1: y + 28, x2: x + w, y2: y + 28, stroke: "currentColor", className: accent || pulse ? "text-accent/45" : "text-border", strokeWidth: "1" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: x + 12, y: y + 19, className: accent || pulse ? "fill-accent" : "fill-foreground", style: LABEL, children: title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("g", { transform: `translate(${x}, ${y + 28})`, children })
  ] });
}
function CodeLine({
  x,
  y,
  text,
  muted = false,
  accent = false
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x, y, className: accent ? "fill-accent" : muted ? "fill-muted-foreground" : "fill-foreground", style: CODE, children: text });
}
function Arrow({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  dashed = false
}) {
  const horizontal = Math.abs(x2 - x1) >= Math.abs(y2 - y1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.g, { initial: {
    opacity: 0
  }, animate: {
    opacity: 1
  }, transition: {
    duration: 0.45,
    delay,
    ease: EASE
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.line, { x1, y1, x2, y2, stroke: "currentColor", className: "text-accent", strokeWidth: "1.4", strokeLinecap: "round", strokeDasharray: dashed ? "5 5" : void 0, initial: {
      pathLength: 0
    }, animate: {
      pathLength: 1
    }, transition: {
      duration: 0.65,
      delay,
      ease: EASE
    } }),
    horizontal ? /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: `${x2},${y2} ${x2 - 7},${y2 - 4.5} ${x2 - 7},${y2 + 4.5}`, className: "fill-accent" }) : /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: `${x2},${y2} ${x2 - 4.5},${y2 - 7} ${x2 + 4.5},${y2 - 7}`, className: "fill-accent" })
  ] });
}
function useBorderRunner(count, enabled, resetKey = 0) {
  const [active, setActive] = reactExports.useState(0);
  const lapMs = count > 0 ? Math.floor(ACT_MS / count) : ACT_MS;
  reactExports.useEffect(() => {
    setActive(0);
  }, [count, enabled, resetKey]);
  reactExports.useEffect(() => {
    if (!enabled || count < 1) return;
    const id = window.setInterval(() => {
      setActive((n) => n >= count - 1 ? count - 1 : n + 1);
    }, lapMs);
    return () => window.clearInterval(id);
  }, [count, enabled, lapMs, resetKey]);
  const hold = enabled && count > 0 && active >= count - 1;
  return {
    active: enabled ? active : -1,
    lapMs,
    hold
  };
}
function ActLayers({
  reduce
}) {
  const cx = 390;
  const {
    active: run,
    lapMs,
    hold
  } = useBorderRunner(5, !reduce);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 40, y: 56, w: 200, h: 348, title: "REQUEST", delay: 0, pulse: run === 0, lapMs, hold: hold && run === 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "POST /v1/projects", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "Authorization: Bearer …", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: '{"name":"acme"}', muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 96, text: "status → 201", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 116, text: "latency 42ms", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 154, text: "idempotency-key", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 174, text: "trace: req_8f2a", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 214, text: "same shape down", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 234, text: "the stack — no", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 254, text: "glue adapters.", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 240, y1: 120, x2: 278, y2: 120, delay: 0.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 288, y: 56, w: 204, h: 100, title: "UI", accent: true, delay: 0.1, pulse: run === 1, lapMs, hold: hold && run === 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "/projects/new" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 42, text: "Form → ProjectDTO", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 60, text: "optimistic UI + undo", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: cx, y1: 156, x2: cx, y2: 176, delay: 0.3 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 288, y: 184, w: 204, h: 112, title: "API", accent: true, delay: 0.2, pulse: run === 2, lapMs, hold: hold && run === 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "handler: CreateProject" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 42, text: "validate(DTO) → ok", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 60, text: "authz: can(write)", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: cx, y1: 296, x2: cx, y2: 316, delay: 0.4 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 288, y: 324, w: 204, h: 80, title: "SCHEMA", accent: true, delay: 0.3, pulse: run === 3, lapMs, hold: hold && run === 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "projects (id, tenant_id," }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 42, text: "name, created_at)", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 492, y1: 240, x2: 528, y2: 240, delay: 0.45 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 536, y: 120, w: 340, h: 220, title: "SHARED CONTRACT", delay: 0.35, pulse: run === 4, lapMs, hold: hold && run === 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 14, y: 28, text: "type Project = {", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 26, y: 48, text: "id: UUID", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 26, y: 66, text: "tenant_id: UUID", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 26, y: 84, text: "name: string", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 26, y: 102, text: "created_at: DateTime", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 14, y: 122, text: "}", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 14, y: 154, text: "UI · API · DB agree" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 14, y: 174, text: "one source of truth", muted: true })
    ] })
  ] });
}
function ActTenants({
  reduce
}) {
  const {
    active: run,
    lapMs,
    hold
  } = useBorderRunner(5, !reduce);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 36, y: 70, w: 200, h: 150, title: "SESSION", delay: 0, pulse: run === 0, lapMs, hold: hold && run === 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "JWT", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: 'sub: "user_19"', muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 62, text: 'tid: "tenant_a"', accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 80, text: 'role: "admin"', muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 98, text: "exp: 15m", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 36, y: 240, w: 200, h: 150, title: "EDGE CHECKS", delay: 0.1, pulse: run === 1, lapMs, hold: hold && run === 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "✓ signature valid" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "✓ tenant claim set" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "✓ rate limit ok", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "→ set_config(tid)", accent: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 236, y1: 145, x2: 272, y2: 145, delay: 0.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 236, y1: 300, x2: 272, y2: 300, delay: 0.25 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 280, y: 70, w: 220, h: 320, title: "API + POLICY", accent: true, delay: 0.15, pulse: run === 2, lapMs, hold: hold && run === 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "Go / Node service" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 48, text: "1. parse JWT", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 66, text: "2. authorize action", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "3. open tx", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 102, text: "4. SET app.tenant", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 120, text: "5. query / mutate", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 156, text: "observability" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 176, text: "• request_id", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 194, text: "• tenant_id", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 212, text: "• error class", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 246, text: "no folklore debug", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.g, { initial: {
      opacity: 0
    }, animate: {
      opacity: 1
    }, transition: {
      duration: 0.6,
      delay: 0.3,
      ease: EASE
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "536", x2: "536", y1: "70", y2: "390", stroke: "currentColor", className: "text-accent", strokeWidth: "2.4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("text", { x: "498", y: "58", className: "fill-accent", style: LABEL_SM, children: "RLS" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 500, y1: 200, x2: 528, y2: 200, delay: 0.35 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 560, y: 70, w: 320, h: 140, title: "TENANT A · rows", delay: 0.4, pulse: run === 3, lapMs, hold: hold && run === 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "id        tenant_id   name", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "p_01      tenant_a   acme" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 62, text: "p_04      tenant_a   north" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 88, text: "policy: tenant_id = tid()", accent: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 560, y: 230, w: 320, h: 160, title: "TENANT B · rows", delay: 0.5, pulse: run === 4, lapMs, hold: hold && run === 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "id        tenant_id   name", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "p_02      tenant_b   helix" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 62, text: "p_09      tenant_b   orbit" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 88, text: "cross read → denied ✕", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 106, text: "WHERE alone is not enough", muted: true })
    ] })
  ] });
}
function ActModel({
  reduce
}) {
  const {
    active: run,
    lapMs,
    hold
  } = useBorderRunner(5, !reduce);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 36, y: 90, w: 150, h: 120, title: "QUERY", delay: 0, pulse: run === 0, lapMs, hold: hold && run === 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "user ask" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "+ tenant_a", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "auth context", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 186, y1: 150, x2: 218, y2: 150, delay: 0.15 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 226, y: 78, w: 160, h: 144, title: "EMBED", delay: 0.1, pulse: run === 1, lapMs, hold: hold && run === 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "vectorize" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "dim: 1536", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "model: emb-3", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "cache hit?", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 386, y1: 150, x2: 418, y2: 150, delay: 0.25 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 426, y: 60, w: 190, h: 180, title: "RETRIEVE", accent: true, delay: 0.2, pulse: run === 2, lapMs, hold: hold && run === 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "pgvector top-k" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "filter: tenant_id", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "k = 6", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "score ≥ 0.72", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 114, text: "no cross-tenant" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 132, text: "chunks ever", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 616, y1: 150, x2: 648, y2: 150, delay: 0.35 }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 656, y: 78, w: 220, h: 144, title: "MODEL + GATE", delay: 0.3, pulse: run === 3, lapMs, hold: hold && run === 3, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "prompt + citations" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "eval: grounded?", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "log tool calls", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "kill switch: OFF", accent: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 36, y: 280, w: 840, h: 120, title: "PRODUCTION SURFACE", delay: 0.45, pulse: run === 4, lapMs, hold: hold && run === 4, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 16, y: 28, text: "auth on every tool call" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 240, y: 28, text: "eval suite on deploy", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 460, y: 28, text: "rollback = feature flag", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 16, y: 56, text: "traces: retrieve → generate → gate", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 380, y: 56, text: "demo is cheap · boundaries are the product", muted: true })
    ] })
  ] });
}
function ActShip({
  reduce
}) {
  const {
    active: run,
    lapMs,
    hold
  } = useBorderRunner(3, !reduce);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 36, y: 70, w: 220, h: 300, title: "BRIEF", delay: 0, pulse: run === 0, lapMs, hold: hold && run === 0, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "“make it work”", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "unclear users", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "no success metric", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "legacy CSV dump", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 114, text: "real constraint →", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 134, text: "find it, cut scope", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 166, text: "sit with the mess", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 186, text: "before the build", muted: true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 256, y1: 210, x2: 300, y2: 210, delay: 0.2 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.g, { initial: {
      opacity: 0,
      x: -8
    }, animate: reduce ? {
      opacity: 1,
      x: 0
    } : {
      opacity: 1,
      x: [0, 28, 0]
    }, transition: reduce ? {
      duration: 0.55,
      delay: 0.25,
      ease: EASE
    } : {
      duration: 4.5,
      delay: 0.25,
      times: [0, 0.55, 1],
      repeat: Infinity,
      ease: EASE
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 308, y: 70, w: 300, h: 300, title: "OWNED SYSTEM", accent: true, delay: 0, pulse: run === 1, lapMs, hold: hold && run === 1, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "✓ CI + deploy path" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "✓ RLS + authz tests" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "✓ rollback runbook" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "✓ decision log" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 114, text: "architecture: boring", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 134, text: "where boring wins", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 164, text: "scope cut visible", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 184, text: "ownership transfers", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 204, text: "without a hero call", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 234, text: "smallest honest system", muted: true })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Arrow, { x1: 640, y1: 210, x2: 678, y2: 210, delay: 0.45, dashed: true }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Panel, { x: 686, y: 110, w: 200, h: 220, title: "HANDOFF", delay: 0.5, pulse: run === 2, lapMs, hold: hold && run === 2, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 24, text: "README" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 44, text: "ADRs", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 64, text: "dashboards", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 84, text: "on-call notes", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 114, text: "team can run it", accent: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 134, text: "without me", muted: true }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeLine, { x: 12, y: 164, text: "shipped → owned", muted: true })
    ] })
  ] });
}
export {
  About as component
};
