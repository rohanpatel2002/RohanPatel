import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { site } from "@/lib/site";
import { resume } from "@/lib/resume";

/** One act of the system story — long enough to read the beat. */
const ACT_MS = 6500;

const EASE = [0.22, 1, 0.36, 1] as const;

const ACTS = [
  {
    code: "01",
    beat: "Screen → schema",
    line: "One product story. Layers tell the same truth.",
  },
  {
    code: "02",
    beat: "Tenants hold",
    line: "Traffic splits. Isolation holds. Boring on purpose.",
  },
  {
    code: "03",
    beat: "Model in the loop",
    line: "AI as a component — gated, logged, reversible.",
  },
  {
    code: "04",
    beat: "Brief → owned",
    line: "Ambiguity in. Smallest honest system out.",
  },
] as const;

type MobileNode = {
  title: string;
  accent?: boolean;
  lines: string[];
  detail?: string;
};

/** Portrait-first story boards — designed for ~390px, not a shrunk desktop. */
const MOBILE_BOARDS: {
  nodes: MobileNode[];
  /** optional split pair after the main stack (e.g. tenant A / B) */
  split?: [MobileNode, MobileNode];
  footer?: string;
}[] = [
  {
    nodes: [
      {
        title: "Request",
        accent: true,
        lines: ["POST /v1/projects", "201 · 42ms · traced"],
        detail: "Bearer · idempotency-key",
      },
      {
        title: "UI → API → Schema",
        accent: true,
        lines: ["Form → ProjectDTO", "CreateProject · authz", "projects table"],
      },
      {
        title: "Shared contract",
        lines: ["type Project = {…}", "UI · API · DB agree"],
        detail: "one source of truth",
      },
    ],
  },
  {
    nodes: [
      {
        title: "Session",
        lines: ['tid: "tenant_a"', "JWT · 15m · admin"],
      },
      {
        title: "API + policy",
        accent: true,
        lines: ["authorize → open tx", "SET app.tenant"],
        detail: "then query / mutate",
      },
    ],
    split: [
      {
        title: "Tenant A",
        lines: ["p_01 acme", "p_04 north"],
      },
      {
        title: "Tenant B",
        lines: ["p_02 helix", "p_09 orbit"],
      },
    ],
    footer: "RLS wall · cross read denied",
  },
  {
    nodes: [
      {
        title: "Query",
        lines: ["user ask + tenant_a"],
      },
      {
        title: "Retrieve",
        accent: true,
        lines: ["pgvector top-k", "filter: tenant_id"],
        detail: "k=6 · score ≥ 0.72",
      },
      {
        title: "Model + gate",
        accent: true,
        lines: ["eval · citations", "kill switch: OFF"],
      },
    ],
    footer: "rollback = feature flag",
  },
  {
    nodes: [
      {
        title: "Brief",
        lines: ["ambiguous ask", "find the real constraint"],
      },
      {
        title: "Owned system",
        accent: true,
        lines: ["CI · RLS tests", "rollback · decision log"],
        detail: "smallest honest system",
      },
      {
        title: "Handoff",
        lines: ["README · ADRs", "team runs it without me"],
      },
    ],
  },
];

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rohan Patel" },
      {
        name: "description",
        content:
          "Software Engineer building production-grade systems across full-stack product engineering, backend architecture, DevOps reliability, and applied AI delivery.",
      },
    ],
  }),
  component: About,
});

const FOCUS = [
  {
    title: "Full-stack product systems",
    lead: "One product story from the screen to the schema.",
    body: "I design interfaces, APIs, and data models as a single system — not a frontend bolted onto someone else's backend. When the UI, the contract, and the database agree, features stay shippable. When they don't, every release becomes integration debt. The work is making those layers tell the same truth so product velocity doesn't rot into glue code.",
  },
  {
    title: "Backend & infrastructure",
    lead: "Services you can trust when traffic and tenants collide.",
    body: "Go and Node backends with explicit contracts, multi-tenant boundaries, and enough observability to diagnose failure without folklore. Isolation belongs in the platform — JWT sessions, authorization checks, and Row-Level Security — so a forgotten WHERE clause cannot become a cross-tenant leak. Infrastructure here means CI, deploy paths, and data rules that keep production boring on purpose.",
  },
  {
    title: "Applied AI in production",
    lead: "Models as components — with auth, evals, and an exit ramp.",
    body: "RAG pipelines, semantic search, and AI-assisted review tooling only count when quality is measurable and risk is reversible. I treat retrieval, prompts, and tool calls like any other production surface: scoped to the right tenant, logged, tested against real failure modes, and easy to turn off. A chatbot demo is cheap. An AI feature that respects data boundaries and survives an incident is the actual product.",
  },
  {
    title: "Forward-deployed delivery",
    lead: "Ambiguous brief in. Owned system out.",
    body: "Client work and research environments rarely arrive with a tidy ticket. I sit with the mess, find the real constraint, and ship the smallest system a team can keep running without me. That means clarifying scope, choosing boring architecture when it wins, and leaving decisions visible — so ownership transfers cleanly instead of vanishing into a handoff call.",
  },
] as const;

function About() {
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
          >
            [ ABOUT ]
          </motion.p>

          <WordReveal
            text="Rohan Patel."
            className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl"
          />

          <Reveal delay={0.12}>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Software Engineer · {resume.location}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-xl font-light leading-[1.65] text-muted-foreground sm:text-2xl sm:leading-[1.6]">
              I build and ship{" "}
              <span className="font-medium text-foreground">
                production systems that stay reliable under pressure
              </span>
              . Full-stack products, resilient backend APIs, and AI-assisted
              workflows — with explicit guarantees for safety, rollback, and
              operational clarity. The goal is software teams can trust after
              the demo: tenancy that holds, deploys that reverse, and interfaces
              that match the contracts underneath.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              I currently engineer at{" "}
              <span className="font-medium text-foreground">
                Praalak Tech Solutions
              </span>
              , where the work spans multi-tenant backends, compliance engines,
              and AI platforms that have to isolate data correctly under load. I
              previously contributed research software at the{" "}
              <span className="font-medium text-foreground">
                Physical Research Laboratory (PRL, ISRO)
              </span>
              — scientific pipelines and analysis tooling for polarization
              camera telemetry. Alongside that I have shipped freelance
              platforms end to end, authored two peer-reviewed ML papers, and
              wrote{" "}
              <a
                href={site.book}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Hired by an Algorithm
              </a>
              , a field guide to how hiring systems actually parse documents.
            </p>
          </Reveal>

          <Reveal delay={0.34}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              The through-line is the same whether the context is a product team,
              a research lab, or a client brief: understand the real constraint,
              design the smallest honest system, and leave behind evidence —
              tests, boundaries, and decisions — that make the next change safer
              than the last.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Focus — one continuous system story */}
      <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"
        />
        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              [ FOCUS ]
            </p>
            <WordReveal
              text="What I do."
              className="mt-3 font-display text-4xl uppercase sm:text-5xl"
            />
            <p className="mt-5 max-w-2xl text-base font-light leading-relaxed text-muted-foreground sm:text-lg">
              Four surfaces, one through-line. Watch a request become a system —
              then ship.
            </p>
          </Reveal>

          <FocusStory />
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}

function FocusStory() {
  const reduce = useReducedMotion();
  const [act, setAct] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (reduce || paused) return;
    const id = window.setInterval(() => {
      setAct((n) => (n + 1) % FOCUS.length);
    }, ACT_MS);
    return () => window.clearInterval(id);
  }, [reduce, paused]);

  return (
    <div className="mt-12 space-y-10">
      <div
        className="relative overflow-hidden rounded-sm border border-border bg-background"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="relative flex items-end justify-between gap-4 border-b border-border px-4 py-4 sm:gap-6 sm:px-6">
          <div className="min-w-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
              Act {ACTS[act].code}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={act}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.45, ease: EASE }}
              >
                <p className="mt-1.5 font-display text-xl uppercase tracking-tight text-foreground sm:text-2xl">
                  {ACTS[act].beat}
                </p>
                <p className="mt-1.5 max-w-lg text-[15px] leading-relaxed text-muted-foreground sm:text-base">
                  {ACTS[act].line}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="hidden shrink-0 pb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground sm:block">
            {paused ? "Paused" : "Playing"}
          </p>
        </div>

        {/* Phone: dedicated vertical graphic board — no swipe, big nodes */}
        <div className="sm:hidden">
          <MobileStoryBoard act={act} reduce={!!reduce} />
        </div>

        {/* Desktop / tablet: full architecture SVG */}
        <div className="relative hidden aspect-[2/1] w-full bg-[color-mix(in_oklab,var(--background)_94%,var(--foreground)_3%)] sm:block">
          <SystemStorySvg act={act} reduce={!!reduce} />
        </div>

        <div className="grid grid-cols-2 border-t border-border sm:grid-cols-4">
          {ACTS.map((a, i) => (
            <button
              key={a.code}
              type="button"
              onClick={() => setAct(i)}
              className="relative border-border px-3 py-3.5 text-left transition-colors hover:bg-foreground/[0.03] sm:px-5 sm:py-4 [&:nth-child(odd)]:border-r sm:[&:nth-child(odd)]:border-r sm:[&:not(:last-child)]:border-r"
            >
              <span
                className={`font-mono text-[11px] tracking-[0.18em] ${
                  i === act ? "text-accent" : "text-muted-foreground"
                }`}
              >
                {a.code}
              </span>
              <span
                className={`mt-1.5 block font-display text-sm uppercase leading-tight sm:text-base ${
                  i === act ? "text-foreground" : "text-muted-foreground/65"
                }`}
              >
                {a.beat}
              </span>
              {i === act && !reduce && (
                <motion.span
                  key={act}
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: paused ? undefined : 1 }}
                  transition={
                    paused
                      ? { duration: 0 }
                      : { duration: ACT_MS / 1000, ease: "linear" }
                  }
                />
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="divide-y divide-border border-y border-border">
        {FOCUS.map((item, i) => {
          const on = reduce || act === i;
          return (
            <button
              key={item.title}
              type="button"
              onClick={() => setAct(i)}
              className="block w-full py-8 text-left sm:py-10"
            >
              <motion.div
                animate={{ opacity: on ? 1 : 0.35 }}
                transition={{ duration: 0.5, ease: EASE }}
              >
                <div className="flex items-baseline gap-4">
                  <span
                    className={`font-mono text-[11px] tracking-[0.2em] ${
                      on ? "text-accent" : "text-muted-foreground"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`font-display text-2xl leading-[0.95] sm:text-3xl ${
                      on ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {item.title}
                  </h3>
                </div>
                <AnimatePresence initial={false}>
                  {on && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.45, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="mt-4 max-w-2xl text-base font-medium leading-snug text-foreground sm:text-lg">
                        {item.lead}
                      </p>
                      <p className="mt-3 max-w-2xl text-[15px] font-light leading-[1.75] text-muted-foreground sm:text-base">
                        {item.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

/** Phone-only graphic: big nodes, vertical flow, drawn connectors. */
function MobileStoryBoard({ act, reduce }: { act: number; reduce: boolean }) {
  const board = MOBILE_BOARDS[act] ?? MOBILE_BOARDS[0];
  const total = board.nodes.length + (board.split ? 2 : 0);
  const { active: run, lapMs, hold } = useBorderRunner(total, !reduce, act);

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={act}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.45, ease: EASE }}
        className="relative bg-[color-mix(in_oklab,var(--background)_92%,var(--foreground)_4%)] px-4 py-6"
      >
        <span aria-hidden className="pointer-events-none absolute left-3 top-3 h-3 w-3 border-l-2 border-t-2 border-border" />
        <span aria-hidden className="pointer-events-none absolute right-3 top-3 h-3 w-3 border-r-2 border-t-2 border-border" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 left-3 h-3 w-3 border-b-2 border-l-2 border-border" />
        <span aria-hidden className="pointer-events-none absolute bottom-3 right-3 h-3 w-3 border-b-2 border-r-2 border-border" />

        <div className="flex flex-col items-stretch gap-0">
          {board.nodes.map((node, i) => (
            <div key={node.title} className="flex flex-col items-center">
              <PhoneNode
                node={node}
                index={i}
                reduce={reduce}
                running={run === i}
                lapMs={lapMs}
                hold={hold && run === i}
                drift={act === 3 && !!node.accent}
              />
              {(i < board.nodes.length - 1 || board.split) && (
                <FlowConnector reduce={reduce} delay={i * 0.15} />
              )}
            </div>
          ))}

          {board.split && (
            <div className="grid grid-cols-[1fr_auto_1fr] items-stretch gap-2 px-0.5">
              <PhoneNode
                node={board.split[0]}
                index={board.nodes.length}
                reduce={reduce}
                running={run === board.nodes.length}
                lapMs={lapMs}
                hold={hold && run === board.nodes.length}
                compact
              />
              <div className="flex flex-col items-center justify-center px-0.5">
                <div
                  aria-hidden
                  className="h-full min-h-[4.5rem] w-[3px] rounded-full bg-accent/80"
                />
                <span className="mt-1 font-mono text-[9px] uppercase tracking-[0.16em] text-accent">
                  rls
                </span>
              </div>
              <PhoneNode
                node={board.split[1]}
                index={board.nodes.length + 1}
                reduce={reduce}
                running={run === board.nodes.length + 1}
                lapMs={lapMs}
                hold={hold && run === board.nodes.length + 1}
                compact
              />
            </div>
          )}

          {board.footer && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mt-5 text-center font-mono text-[12px] uppercase tracking-[0.14em] text-accent"
            >
              {board.footer}
            </motion.p>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

function FlowConnector({ reduce, delay = 0 }: { reduce: boolean; delay?: number }) {
  return (
    <div className="flex h-9 flex-col items-center justify-center" aria-hidden>
      <motion.div
        className="h-full w-px bg-accent/50"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.4, delay, ease: EASE }}
        style={{ transformOrigin: "top" }}
      />
      <motion.span
        className="text-accent"
        animate={reduce ? undefined : { y: [0, 3, 0], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.6, delay, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="14" height="10" viewBox="0 0 14 10" fill="currentColor">
          <path d="M7 10L0 0h14L7 10Z" />
        </svg>
      </motion.span>
    </div>
  );
}

function PhoneNode({
  node,
  index,
  reduce,
  compact = false,
  drift = false,
  running = false,
  lapMs,
  hold = false,
}: {
  node: MobileNode;
  index: number;
  reduce: boolean;
  compact?: boolean;
  drift?: boolean;
  running?: boolean;
  lapMs?: number;
  hold?: boolean;
}) {
  const lap = (lapMs ?? Math.floor(ACT_MS / 5)) / 1000;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={
        drift && !reduce
          ? { opacity: 1, y: 0, x: [0, 8, 0] }
          : { opacity: 1, y: 0, x: 0 }
      }
      transition={
        drift && !reduce
          ? {
              opacity: { duration: 0.45, delay: index * 0.08 },
              y: { duration: 0.45, delay: index * 0.08 },
              x: { duration: 4.2, repeat: Infinity, ease: EASE, delay: 0.4 },
            }
          : { duration: 0.45, delay: index * 0.08, ease: EASE }
      }
      className={`relative w-full rounded-sm border bg-background ${
        running || node.accent ? "border-accent/70" : "border-border"
      } ${compact ? "px-3 py-3.5" : "px-4 py-5"}`}
    >
      {running && !reduce && (
        <svg
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full text-accent"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <motion.rect
            key={hold ? `hold-${index}` : `run-${index}`}
            x="1"
            y="1"
            width="98"
            height="98"
            rx="1.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            vectorEffect="non-scaling-stroke"
            pathLength={100}
            strokeDasharray="20 80"
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -100 }}
            transition={{
              duration: lap,
              ease: "linear",
              repeat: hold ? Infinity : 0,
            }}
          />
        </svg>
      )}

      <div className="relative flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            className={`font-display uppercase tracking-tight ${
              compact ? "text-lg leading-none" : "text-2xl leading-none"
            } ${running || node.accent ? "text-accent" : "text-foreground"}`}
          >
            {node.title}
          </p>
          <ul className={`mt-3 space-y-1.5 ${compact ? "mt-2" : ""}`}>
            {node.lines.map((line) => (
              <li
                key={line}
                className={`font-mono leading-snug text-foreground ${
                  compact ? "text-[12px]" : "text-[14px]"
                }`}
              >
                {line}
              </li>
            ))}
          </ul>
          {node.detail && (
            <p className="mt-2.5 font-mono text-[12px] text-muted-foreground">
              {node.detail}
            </p>
          )}
        </div>
        <span
          className={`shrink-0 font-mono tabular-nums text-muted-foreground ${
            compact ? "text-[10px]" : "text-[11px]"
          }`}
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>
    </motion.div>
  );
}

const LABEL = {
  fontSize: 13,
  letterSpacing: "0.1em",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

const LABEL_SM = {
  fontSize: 11,
  letterSpacing: "0.06em",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

const CODE = {
  fontSize: 10.5,
  letterSpacing: "0.02em",
  fontFamily: "ui-monospace, SFMono-Regular, Menlo, monospace",
} as const;

/** Four clear acts — one composition at a time, no overlap. */
function SystemStorySvg({ act, reduce }: { act: number; reduce: boolean }) {
  return (
    <svg
      viewBox="0 0 920 460"
      className="absolute inset-0 h-full w-full text-foreground"
      aria-hidden
      preserveAspectRatio="xMidYMid meet"
    >
      <g className="text-border" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.65">
        <path d="M28 36 H44 M28 36 V52" />
        <path d="M892 36 H876 M892 36 V52" />
        <path d="M28 424 H44 M28 424 V408" />
        <path d="M892 424 H876 M892 424 V408" />
      </g>

      <AnimatePresence mode="wait">
        {act === 0 && (
          <motion.g
            key="act-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <ActLayers reduce={reduce} />
          </motion.g>
        )}
        {act === 1 && (
          <motion.g
            key="act-1"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <ActTenants reduce={reduce} />
          </motion.g>
        )}
        {act === 2 && (
          <motion.g
            key="act-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <ActModel reduce={reduce} />
          </motion.g>
        )}
        {act === 3 && (
          <motion.g
            key="act-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
          >
            <ActShip reduce={reduce} />
          </motion.g>
        )}
      </AnimatePresence>
    </svg>
  );
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
  children,
}: {
  x: number;
  y: number;
  w: number;
  h: number;
  title: string;
  accent?: boolean;
  delay?: number;
  /** Accent segment runs around this box only while true. */
  pulse?: boolean;
  /** Lap duration in ms — fits all boxes into ACT_MS. */
  lapMs?: number;
  /** Keep revolving on this box (last in the act) until the act ends. */
  hold?: boolean;
  children?: ReactNode;
}) {
  // pathLength=100 → dash units are % of perimeter
  const runLen = 22;
  const lap = (lapMs ?? Math.floor(ACT_MS / 5)) / 1000;

  return (
    <motion.g
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay, ease: EASE }}
    >
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="5"
        fill="color-mix(in oklab, var(--background) 94%, var(--foreground) 3%)"
        stroke="none"
      />
      {/* quiet static frame */}
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="5"
        fill="none"
        stroke="currentColor"
        className={accent || pulse ? "text-accent/70" : "text-foreground/40"}
        strokeWidth={accent || pulse ? 1.45 : 1.1}
      />
      {/* single active runner — only on the current box */}
      {pulse && (
        <motion.rect
          key={hold ? "runner-hold" : "runner"}
          x={x}
          y={y}
          width={w}
          height={h}
          rx="5"
          fill="none"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="2.35"
          strokeLinecap="round"
          pathLength={100}
          strokeDasharray={`${runLen} ${100 - runLen}`}
          initial={{ strokeDashoffset: 0 }}
          animate={{ strokeDashoffset: -100 }}
          transition={{
            duration: lap,
            ease: "linear",
            repeat: hold ? Infinity : 0,
          }}
        />
      )}
      <rect
        x={x}
        y={y}
        width={w}
        height="28"
        rx="5"
        fill="color-mix(in oklab, var(--background) 82%, var(--foreground) 6%)"
        stroke="none"
      />
      <rect
        x={x}
        y={y + 16}
        width={w}
        height="12"
        fill="color-mix(in oklab, var(--background) 82%, var(--foreground) 6%)"
        stroke="none"
      />
      <line
        x1={x}
        y1={y + 28}
        x2={x + w}
        y2={y + 28}
        stroke="currentColor"
        className={accent || pulse ? "text-accent/45" : "text-border"}
        strokeWidth="1"
      />
      <text
        x={x + 12}
        y={y + 19}
        className={accent || pulse ? "fill-accent" : "fill-foreground"}
        style={LABEL}
      >
        {title}
      </text>
      <g transform={`translate(${x}, ${y + 28})`}>{children}</g>
    </motion.g>
  );
}

function CodeLine({
  x,
  y,
  text,
  muted = false,
  accent = false,
}: {
  x: number;
  y: number;
  text: string;
  muted?: boolean;
  accent?: boolean;
}) {
  return (
    <text
      x={x}
      y={y}
      className={
        accent ? "fill-accent" : muted ? "fill-muted-foreground" : "fill-foreground"
      }
      style={CODE}
    >
      {text}
    </text>
  );
}

function Arrow({
  x1,
  y1,
  x2,
  y2,
  delay = 0,
  dashed = false,
}: {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  delay?: number;
  dashed?: boolean;
}) {
  const horizontal = Math.abs(x2 - x1) >= Math.abs(y2 - y1);
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.45, delay, ease: EASE }}
    >
      <motion.line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        stroke="currentColor"
        className="text-accent"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeDasharray={dashed ? "5 5" : undefined}
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.65, delay, ease: EASE }}
      />
      {horizontal ? (
        <polygon
          points={`${x2},${y2} ${x2 - 7},${y2 - 4.5} ${x2 - 7},${y2 + 4.5}`}
          className="fill-accent"
        />
      ) : (
        <polygon
          points={`${x2},${y2} ${x2 - 4.5},${y2 - 7} ${x2 + 4.5},${y2 - 7}`}
          className="fill-accent"
        />
      )}
    </motion.g>
  );
}

/** Step through every box inside ACT_MS; keep revolving on the last until the act ends. */
function useBorderRunner(count: number, enabled: boolean, resetKey: number | string = 0) {
  const [active, setActive] = useState(0);
  const lapMs = count > 0 ? Math.floor(ACT_MS / count) : ACT_MS;

  useEffect(() => {
    setActive(0);
  }, [count, enabled, resetKey]);

  useEffect(() => {
    if (!enabled || count < 1) return;
    const id = window.setInterval(() => {
      setActive((n) => (n >= count - 1 ? count - 1 : n + 1));
    }, lapMs);
    return () => window.clearInterval(id);
  }, [count, enabled, lapMs, resetKey]);

  const hold = enabled && count > 0 && active >= count - 1;
  return { active: enabled ? active : -1, lapMs, hold };
}

/** Act 01 — real product stack with routes, contract, schema. */
function ActLayers({ reduce }: { reduce: boolean }) {
  const cx = 390;
  const { active: run, lapMs, hold } = useBorderRunner(5, !reduce);

  return (
    <g>
      <Panel x={40} y={56} w={200} h={348} title="REQUEST" delay={0} pulse={run === 0} lapMs={lapMs} hold={hold && run === 0}>
        <CodeLine x={12} y={24} text="POST /v1/projects" accent />
        <CodeLine x={12} y={44} text="Authorization: Bearer …" muted />
        <CodeLine x={12} y={64} text='{"name":"acme"}' muted />
        <CodeLine x={12} y={96} text="status → 201" accent />
        <CodeLine x={12} y={116} text="latency 42ms" muted />
        <CodeLine x={12} y={154} text="idempotency-key" muted />
        <CodeLine x={12} y={174} text="trace: req_8f2a" muted />
        <CodeLine x={12} y={214} text="same shape down" muted />
        <CodeLine x={12} y={234} text="the stack — no" muted />
        <CodeLine x={12} y={254} text="glue adapters." muted />
      </Panel>

      <Arrow x1={240} y1={120} x2={278} y2={120} delay={0.2} />

      <Panel x={288} y={56} w={204} h={100} title="UI" accent delay={0.1} pulse={run === 1} lapMs={lapMs} hold={hold && run === 1}>
        <CodeLine x={12} y={24} text="/projects/new" />
        <CodeLine x={12} y={42} text="Form → ProjectDTO" muted />
        <CodeLine x={12} y={60} text="optimistic UI + undo" muted />
      </Panel>

      <Arrow x1={cx} y1={156} x2={cx} y2={176} delay={0.3} />

      <Panel x={288} y={184} w={204} h={112} title="API" accent delay={0.2} pulse={run === 2} lapMs={lapMs} hold={hold && run === 2}>
        <CodeLine x={12} y={24} text="handler: CreateProject" />
        <CodeLine x={12} y={42} text="validate(DTO) → ok" muted />
        <CodeLine x={12} y={60} text="authz: can(write)" muted />
      </Panel>

      <Arrow x1={cx} y1={296} x2={cx} y2={316} delay={0.4} />

      <Panel x={288} y={324} w={204} h={80} title="SCHEMA" accent delay={0.3} pulse={run === 3} lapMs={lapMs} hold={hold && run === 3}>
        <CodeLine x={12} y={24} text="projects (id, tenant_id," />
        <CodeLine x={12} y={42} text="name, created_at)" muted />
      </Panel>

      <Arrow x1={492} y1={240} x2={528} y2={240} delay={0.45} />

      <Panel x={536} y={120} w={340} h={220} title="SHARED CONTRACT" delay={0.35} pulse={run === 4} lapMs={lapMs} hold={hold && run === 4}>
        <CodeLine x={14} y={28} text="type Project = {" accent />
        <CodeLine x={26} y={48} text="id: UUID" muted />
        <CodeLine x={26} y={66} text="tenant_id: UUID" muted />
        <CodeLine x={26} y={84} text="name: string" muted />
        <CodeLine x={26} y={102} text="created_at: DateTime" muted />
        <CodeLine x={14} y={122} text="}" accent />
        <CodeLine x={14} y={154} text="UI · API · DB agree" />
        <CodeLine x={14} y={174} text="one source of truth" muted />
      </Panel>
    </g>
  );
}

/** Act 02 — JWT → policy → RLS → isolated tenants. */
function ActTenants({ reduce }: { reduce: boolean }) {
  const { active: run, lapMs, hold } = useBorderRunner(5, !reduce);

  return (
    <g>
      <Panel x={36} y={70} w={200} h={150} title="SESSION" delay={0} pulse={run === 0} lapMs={lapMs} hold={hold && run === 0}>
        <CodeLine x={12} y={24} text="JWT" accent />
        <CodeLine x={12} y={44} text='sub: "user_19"' muted />
        <CodeLine x={12} y={62} text='tid: "tenant_a"' accent />
        <CodeLine x={12} y={80} text='role: "admin"' muted />
        <CodeLine x={12} y={98} text="exp: 15m" muted />
      </Panel>

      <Panel x={36} y={240} w={200} h={150} title="EDGE CHECKS" delay={0.1} pulse={run === 1} lapMs={lapMs} hold={hold && run === 1}>
        <CodeLine x={12} y={24} text="✓ signature valid" />
        <CodeLine x={12} y={44} text="✓ tenant claim set" />
        <CodeLine x={12} y={64} text="✓ rate limit ok" muted />
        <CodeLine x={12} y={84} text="→ set_config(tid)" accent />
      </Panel>

      <Arrow x1={236} y1={145} x2={272} y2={145} delay={0.2} />
      <Arrow x1={236} y1={300} x2={272} y2={300} delay={0.25} />

      <Panel x={280} y={70} w={220} h={320} title="API + POLICY" accent delay={0.15} pulse={run === 2} lapMs={lapMs} hold={hold && run === 2}>
        <CodeLine x={12} y={24} text="Go / Node service" />
        <CodeLine x={12} y={48} text="1. parse JWT" muted />
        <CodeLine x={12} y={66} text="2. authorize action" muted />
        <CodeLine x={12} y={84} text="3. open tx" muted />
        <CodeLine x={12} y={102} text="4. SET app.tenant" accent />
        <CodeLine x={12} y={120} text="5. query / mutate" muted />
        <CodeLine x={12} y={156} text="observability" />
        <CodeLine x={12} y={176} text="• request_id" muted />
        <CodeLine x={12} y={194} text="• tenant_id" muted />
        <CodeLine x={12} y={212} text="• error class" muted />
        <CodeLine x={12} y={246} text="no folklore debug" muted />
      </Panel>

      <motion.g
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
      >
        <line
          x1="536"
          x2="536"
          y1="70"
          y2="390"
          stroke="currentColor"
          className="text-accent"
          strokeWidth="2.4"
        />
        <text x="498" y="58" className="fill-accent" style={LABEL_SM}>
          RLS
        </text>
      </motion.g>

      <Arrow x1={500} y1={200} x2={528} y2={200} delay={0.35} />

      <Panel x={560} y={70} w={320} h={140} title="TENANT A · rows" delay={0.4} pulse={run === 3} lapMs={lapMs} hold={hold && run === 3}>
        <CodeLine x={12} y={24} text="id        tenant_id   name" muted />
        <CodeLine x={12} y={44} text="p_01      tenant_a   acme" />
        <CodeLine x={12} y={62} text="p_04      tenant_a   north" />
        <CodeLine x={12} y={88} text="policy: tenant_id = tid()" accent />
      </Panel>

      <Panel x={560} y={230} w={320} h={160} title="TENANT B · rows" delay={0.5} pulse={run === 4} lapMs={lapMs} hold={hold && run === 4}>
        <CodeLine x={12} y={24} text="id        tenant_id   name" muted />
        <CodeLine x={12} y={44} text="p_02      tenant_b   helix" />
        <CodeLine x={12} y={62} text="p_09      tenant_b   orbit" />
        <CodeLine x={12} y={88} text="cross read → denied ✕" accent />
        <CodeLine x={12} y={106} text="WHERE alone is not enough" muted />
      </Panel>
    </g>
  );
}

/** Act 03 — production AI path with retrieval + eval + kill switch. */
function ActModel({ reduce }: { reduce: boolean }) {
  const { active: run, lapMs, hold } = useBorderRunner(5, !reduce);

  return (
    <g>
      <Panel x={36} y={90} w={150} h={120} title="QUERY" delay={0} pulse={run === 0} lapMs={lapMs} hold={hold && run === 0}>
        <CodeLine x={12} y={24} text="user ask" />
        <CodeLine x={12} y={44} text="+ tenant_a" accent />
        <CodeLine x={12} y={64} text="auth context" muted />
      </Panel>
      <Arrow x1={186} y1={150} x2={218} y2={150} delay={0.15} />

      <Panel x={226} y={78} w={160} h={144} title="EMBED" delay={0.1} pulse={run === 1} lapMs={lapMs} hold={hold && run === 1}>
        <CodeLine x={12} y={24} text="vectorize" />
        <CodeLine x={12} y={44} text="dim: 1536" muted />
        <CodeLine x={12} y={64} text="model: emb-3" muted />
        <CodeLine x={12} y={84} text="cache hit?" muted />
      </Panel>
      <Arrow x1={386} y1={150} x2={418} y2={150} delay={0.25} />

      <Panel x={426} y={60} w={190} h={180} title="RETRIEVE" accent delay={0.2} pulse={run === 2} lapMs={lapMs} hold={hold && run === 2}>
        <CodeLine x={12} y={24} text="pgvector top-k" />
        <CodeLine x={12} y={44} text="filter: tenant_id" accent />
        <CodeLine x={12} y={64} text="k = 6" muted />
        <CodeLine x={12} y={84} text="score ≥ 0.72" muted />
        <CodeLine x={12} y={114} text="no cross-tenant" />
        <CodeLine x={12} y={132} text="chunks ever" muted />
      </Panel>
      <Arrow x1={616} y1={150} x2={648} y2={150} delay={0.35} />

      <Panel x={656} y={78} w={220} h={144} title="MODEL + GATE" delay={0.3} pulse={run === 3} lapMs={lapMs} hold={hold && run === 3}>
        <CodeLine x={12} y={24} text="prompt + citations" />
        <CodeLine x={12} y={44} text="eval: grounded?" accent />
        <CodeLine x={12} y={64} text="log tool calls" muted />
        <CodeLine x={12} y={84} text="kill switch: OFF" accent />
      </Panel>

      <Panel x={36} y={280} w={840} h={120} title="PRODUCTION SURFACE" delay={0.45} pulse={run === 4} lapMs={lapMs} hold={hold && run === 4}>
        <CodeLine x={16} y={28} text="auth on every tool call" />
        <CodeLine x={240} y={28} text="eval suite on deploy" muted />
        <CodeLine x={460} y={28} text="rollback = feature flag" accent />
        <CodeLine x={16} y={56} text="traces: retrieve → generate → gate" muted />
        <CodeLine x={380} y={56} text="demo is cheap · boundaries are the product" muted />
      </Panel>
    </g>
  );
}

/** Act 04 — messy brief → structured owned system + handoff. */
function ActShip({ reduce }: { reduce: boolean }) {
  const { active: run, lapMs, hold } = useBorderRunner(3, !reduce);

  return (
    <g>
      <Panel x={36} y={70} w={220} h={300} title="BRIEF" delay={0} pulse={run === 0} lapMs={lapMs} hold={hold && run === 0}>
        <CodeLine x={12} y={24} text="“make it work”" muted />
        <CodeLine x={12} y={44} text="unclear users" muted />
        <CodeLine x={12} y={64} text="no success metric" muted />
        <CodeLine x={12} y={84} text="legacy CSV dump" muted />
        <CodeLine x={12} y={114} text="real constraint →" accent />
        <CodeLine x={12} y={134} text="find it, cut scope" muted />
        <CodeLine x={12} y={166} text="sit with the mess" muted />
        <CodeLine x={12} y={186} text="before the build" muted />
      </Panel>

      <Arrow x1={256} y1={210} x2={300} y2={210} delay={0.2} />

      <motion.g
        initial={{ opacity: 0, x: -8 }}
        animate={
          reduce
            ? { opacity: 1, x: 0 }
            : { opacity: 1, x: [0, 28, 0] }
        }
        transition={
          reduce
            ? { duration: 0.55, delay: 0.25, ease: EASE }
            : {
                duration: 4.5,
                delay: 0.25,
                times: [0, 0.55, 1],
                repeat: Infinity,
                ease: EASE,
              }
        }
      >
        <Panel x={308} y={70} w={300} h={300} title="OWNED SYSTEM" accent delay={0} pulse={run === 1} lapMs={lapMs} hold={hold && run === 1}>
          <CodeLine x={12} y={24} text="✓ CI + deploy path" />
          <CodeLine x={12} y={44} text="✓ RLS + authz tests" />
          <CodeLine x={12} y={64} text="✓ rollback runbook" />
          <CodeLine x={12} y={84} text="✓ decision log" />
          <CodeLine x={12} y={114} text="architecture: boring" muted />
          <CodeLine x={12} y={134} text="where boring wins" muted />
          <CodeLine x={12} y={164} text="scope cut visible" accent />
          <CodeLine x={12} y={184} text="ownership transfers" muted />
          <CodeLine x={12} y={204} text="without a hero call" muted />
          <CodeLine x={12} y={234} text="smallest honest system" muted />
        </Panel>
      </motion.g>

      <Arrow x1={640} y1={210} x2={678} y2={210} delay={0.45} dashed />

      <Panel x={686} y={110} w={200} h={220} title="HANDOFF" delay={0.5} pulse={run === 2} lapMs={lapMs} hold={hold && run === 2}>
        <CodeLine x={12} y={24} text="README" />
        <CodeLine x={12} y={44} text="ADRs" muted />
        <CodeLine x={12} y={64} text="dashboards" muted />
        <CodeLine x={12} y={84} text="on-call notes" muted />
        <CodeLine x={12} y={114} text="team can run it" accent />
        <CodeLine x={12} y={134} text="without me" muted />
        <CodeLine x={12} y={164} text="shipped → owned" muted />
      </Panel>
    </g>
  );
}
