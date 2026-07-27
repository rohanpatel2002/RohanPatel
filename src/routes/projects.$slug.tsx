import { createFileRoute, Link } from "@tanstack/react-router";
import { projects, type Project } from "@/lib/data";
import { getPostsByProject } from "@/lib/posts";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, Magnetic } from "@/components/Motion";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type MouseEvent as ReactMouseEvent,
  type PointerEvent as ReactPointerEvent,
} from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight, Check, Copy } from "lucide-react";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw new Error("Project not found");
    const idx = projects.findIndex((p) => p.slug === params.slug);
    return {
      project,
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
      index: idx + 1,
      total: projects.length,
    };
  },
  head: ({ loaderData }) => ({
    meta: [
      {
        title: `${loaderData?.project.name ?? "Project"} — Rohan Patel`,
      },
      {
        name: "description",
        content: loaderData?.project.blurb ?? "Project by Rohan Patel",
      },
    ],
  }),
  component: ProjectPage,
});

const CHAPTERS = [
  { id: "brief", label: "BRIEF" },
  { id: "lens", label: "LENS" },
  { id: "tape", label: "TAPE" },
  { id: "matrix", label: "MATRIX" },
  { id: "signal", label: "SIGNAL" },
] as const;

function ProjectPage() {
  const { project, prev, next, index, total } = Route.useLoaderData();
  const relatedWriting = getPostsByProject(project.slug);
  const outbound = project.repoUrl || project.productUrl;
  const outboundLabel = project.repoUrl
    ? "View on GitHub"
    : project.productUrl
      ? "Get the book"
      : null;

  const pageRef = useRef<HTMLDivElement>(null);
  const [chapter, setChapter] = useState("BRIEF");
  const [pinnedLayer, setPinnedLayer] = useState<string | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${mouseX}px ${mouseY}px, oklch(0.7 0.22 35 / 0.09), transparent 55%)`;

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  // Direct mapping — springing scroll progress lag feels like sticky/vibrating scroll.
  const progressPct = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const onMove = useCallback(
    (e: ReactMouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    },
    [mouseX, mouseY],
  );

  useEffect(() => {
    const ids = CHAPTERS.map((c) => c.id);
    const observers: IntersectionObserver[] = [];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setChapter(CHAPTERS[i].label);
        },
        { rootMargin: "-40% 0px -45% 0px" },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [project.slug]);

  return (
    <div
      className="grain relative min-h-screen bg-background"
      ref={pageRef}
      onMouseMove={onMove}
    >
      <SiteHeader />

      {/* Spotlight — unique cursor atmosphere */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] hidden mix-blend-multiply md:block dark:mix-blend-soft-light"
        style={{ background: spotlight }}
      />

      <motion.div
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] bg-accent"
        style={{ width: progressWidth }}
      />

      {/* ── BRIEF ── */}
      <section
        id="brief"
        className="relative z-[2] overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 md:pt-32"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-[20%] select-none overflow-hidden text-center font-display text-[20vw] leading-none tracking-tighter text-foreground/[0.03]"
        >
          {String(index).padStart(2, "0")}
        </div>

        <div className="relative mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              All work
            </Link>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
              <span>
                Case {String(index).padStart(2, "0")} /{" "}
                {String(total).padStart(2, "0")}
              </span>
              {project.status && (
                <>
                  <span className="text-border">·</span>
                  <span className="inline-flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {project.status}
                  </span>
                </>
              )}
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-14 text-xs font-semibold uppercase tracking-[0.35em] text-accent"
          >
            {project.tag}
          </motion.p>

          <h1 className="mt-5 overflow-hidden font-display text-[15vw] leading-[0.84] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.75rem]">
            <motion.span
              className="block"
              initial={{ y: "115%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
            >
              {project.name.toUpperCase()}
              <span className="text-accent">.</span>
            </motion.span>
          </h1>

          <div className="mt-10 flex flex-col gap-8 border-t border-border/80 pt-8 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-16 md:pt-10">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg font-light leading-[1.7] text-muted-foreground sm:text-xl md:text-[1.35rem]"
            >
              {project.blurb}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex shrink-0 flex-col gap-4 md:items-end"
            >
              {project.roles && (
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.roles.map((role) => (
                    <span
                      key={role}
                      className="rounded-full border border-border/60 bg-background/70 px-3.5 py-1.5 text-[11px] text-muted-foreground backdrop-blur-sm"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              )}
              {outbound && outboundLabel && (
                <Magnetic>
                  <a
                    href={outbound}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground"
                  >
                    {outboundLabel}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </a>
                </Magnetic>
              )}
            </motion.div>
          </div>

          {project.specs && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:mt-16 md:grid-cols-4"
            >
              {Object.entries(project.specs).map(([key, value]) => (
                <div
                  key={key}
                  className="bg-card p-5 transition-colors hover:bg-accent/[0.06] sm:p-6"
                >
                  <p className="font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground">
                    {key}
                  </p>
                  <p className="mt-2.5 font-display text-xl leading-none sm:text-2xl md:text-3xl">
                    {value}
                  </p>
                </div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      <div className="relative z-[2] mx-auto max-w-6xl space-y-28 px-4 pb-36 sm:space-y-36 sm:px-6 sm:pb-44">
        {/* ── LENS: drag to reveal solution over problem ── */}
        {(project.problem || project.solution) && (
          <section id="lens">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Interactive lens
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl">
                PROBLEM → SOLUTION
              </h2>
              <p className="mt-3 max-w-lg text-sm text-muted-foreground">
                Drag the handle right to reveal the solution over the problem.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <CompareLens
                problem={project.problem ?? ""}
                solution={project.solution ?? ""}
              />
            </Reveal>

            {project.outcomes && project.outcomes.length > 0 && (
              <div className="mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5">
                {project.outcomes.map((item, i) => (
                  <Reveal key={item} delay={i * 0.07}>
                    <article className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/5 sm:p-7">
                      <div
                        aria-hidden
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                      />
                      <div className="relative flex items-start justify-between gap-3">
                        <span className="font-display text-5xl leading-none text-accent/20 transition-colors group-hover:text-accent/40">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span className="rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent">
                          Result
                        </span>
                      </div>
                      <p className="relative mt-5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]">
                        {item}
                      </p>
                    </article>
                  </Reveal>
                ))}
              </div>
            )}
          </section>
        )}

        {project.architecture && project.architecture.length > 0 && (
          <section id="tape">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Execution flow
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl">
                HOW IT RUNS
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                End-to-end flow from trigger to decision output.
              </p>
            </Reveal>
            <ArchitectureTape steps={project.architecture} />
          </section>
        )}

        {project.highlights && project.highlights.length > 0 && (
          <section>
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Capabilities
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl">
                WHAT IT CATCHES
              </h2>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5">
              {project.highlights.map((item, i) => {
                const [title, ...rest] = item.split(":");
                const body = rest.length ? rest.join(":").trim() : null;
                return (
                  <Reveal key={item} delay={Math.min(i * 0.05, 0.2)}>
                    <article className="group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/5 sm:p-8">
                      <span
                        aria-hidden
                        className="pointer-events-none absolute right-5 top-4 font-display text-5xl leading-none text-foreground/[0.06] transition-colors group-hover:text-accent/15 sm:right-6 sm:top-5 sm:text-6xl"
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <div
                        aria-hidden
                        className="absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100"
                      />
                      <span className="relative font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                        Signal {String(i + 1).padStart(2, "0")}
                      </span>
                      {body ? (
                        <>
                          <h3 className="relative mt-3 max-w-[85%] font-display text-2xl leading-[0.95] sm:text-3xl">
                            {title.trim()}
                          </h3>
                          <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]">
                            {body}
                          </p>
                        </>
                      ) : (
                        <p className="relative mt-3 max-w-[90%] text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]">
                          {item}
                        </p>
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </section>
        )}

        {/* ── MATRIX: interactive stack pinboard ── */}
        {project.stackLayers && project.stackLayers.length > 0 && (
          <section id="matrix">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Pin a layer
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl">
                STACK MATRIX
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">
                Click a layer to isolate it — {project.meta}
              </p>
            </Reveal>
            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {project.stackLayers.map((row, i) => {
                const active = pinnedLayer === row.layer;
                const dimmed = pinnedLayer && !active;
                return (
                  <motion.button
                    key={row.layer}
                    type="button"
                    onClick={() =>
                      setPinnedLayer(active ? null : row.layer)
                    }
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className={`rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${
                      active
                        ? "border-accent bg-accent/10 shadow-lg shadow-accent/10"
                        : dimmed
                          ? "border-border/40 bg-card/40 opacity-40"
                          : "border-border bg-card hover:border-accent/40 hover:bg-accent/[0.04]"
                    }`}
                  >
                    <span className="font-mono text-[10px] text-accent">
                      L{String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="mt-2 font-display text-2xl uppercase leading-none sm:text-3xl">
                      {row.layer}
                    </p>
                    <p className="mt-3 font-mono text-xs text-muted-foreground">
                      {row.tech}
                    </p>
                  </motion.button>
                );
              })}
            </div>
          </section>
        )}

        {/* ── SIGNAL: typewriter code ── */}
        {project.codeSnippet && (
          <section id="signal">
            <Reveal>
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Live signal
              </p>
              <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl">
                CORE LOGIC
              </h2>
            </Reveal>
            <TypewriterCode slug={project.slug} code={project.codeSnippet} />
            {project.content && (
              <p className="mt-10 max-w-3xl text-base font-light leading-[1.8] text-muted-foreground sm:text-lg">
                {project.content}
              </p>
            )}
          </section>
        )}

        {/* CTA */}
        {outbound && outboundLabel && (
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-primary-foreground sm:px-14 sm:py-20">
              <motion.div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-10 h-80 w-80 rounded-full bg-accent/45 blur-3xl"
                animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
                transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] opacity-55">
                    [ VERIFY ]
                  </p>
                  <h2 className="mt-5 font-display text-5xl leading-[0.9] sm:text-7xl md:text-8xl">
                    Open the
                    <br />
                    source<span className="text-accent">.</span>
                  </h2>
                  <p className="mt-5 max-w-md text-sm leading-relaxed opacity-70 sm:text-base">
                    Claims should survive a read of the repo.
                  </p>
                </div>
                <Magnetic>
                  <a
                    href={outbound}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground"
                  >
                    {outboundLabel}
                    <ArrowUpRight size={16} />
                  </a>
                </Magnetic>
              </div>
            </div>
          </Reveal>
        )}

        {relatedWriting.length > 0 && (
          <Reveal>
            <div className="mb-14 border-t border-border pt-14">
              <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Related writing
              </p>
              <div className="mt-6 divide-y divide-border border-y border-border">
                {relatedWriting.map((p) => (
                  <Link
                    key={p.slug}
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between"
                  >
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                        {p.tag}
                      </p>
                      <p className="mt-1 font-display text-2xl transition-colors group-hover:text-accent sm:text-3xl">
                        {p.title}
                      </p>
                    </div>
                    <span className="text-sm font-semibold">Read →</span>
                  </Link>
                ))}
              </div>
            </div>
          </Reveal>
        )}

        <nav className="grid gap-4 border-t border-border pt-14 sm:grid-cols-2 sm:gap-5">
          <ProjectHop label="Previous" project={prev} />
          <ProjectHop label="Next" project={next} align="right" />
        </nav>
      </div>

      {/* Sticky HUD — instrument panel */}
      <div className="pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6">
        <div className="pointer-events-auto flex max-w-full items-center gap-3 overflow-x-auto rounded-full border border-border/80 bg-card/90 px-4 py-2.5 shadow-2xl shadow-foreground/10 backdrop-blur-xl sm:gap-5 sm:px-5">
          <span className="hidden font-display text-sm sm:inline">
            {project.name}
          </span>
          <span className="hidden h-3 w-px bg-border sm:block" />
          <span className="font-mono text-[10px] tracking-[0.2em] text-accent">
            {chapter}
          </span>
          <span className="h-3 w-px bg-border" />
          <motion.span className="font-mono text-[10px] tabular-nums tracking-wider text-muted-foreground">
            {progressPct}
          </motion.span>
          {outbound && (
            <>
              <span className="h-3 w-px bg-border" />
              <a
                href={outbound}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground"
              >
                Source <ArrowUpRight size={10} />
              </a>
            </>
          )}
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

/** Drag right to reveal solution over problem. */
function CompareLens({
  problem,
  solution,
}: {
  problem: string;
  solution: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pct, setPct] = useState(12);
  const [boxW, setBoxW] = useState(0);
  const dragging = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBoxW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const setFromClientX = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width <= 0) return;
    const next = ((clientX - r.left) / r.width) * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);

  useEffect(() => {
    const onMove = (e: PointerEvent | MouseEvent) => {
      if (!dragging.current) return;
      e.preventDefault();
      setFromClientX("clientX" in e ? e.clientX : 0);
    };
    const onUp = () => {
      if (!dragging.current) return;
      dragging.current = false;
      document.body.style.cursor = "";
      document.body.style.userSelect = "";
    };
    window.addEventListener("pointermove", onMove, { passive: false });
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerup", onUp);
      window.removeEventListener("pointercancel", onUp);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };
  }, [setFromClientX]);

  const startDrag = (e: ReactPointerEvent | ReactMouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
    setFromClientX(e.clientX);
  };

  return (
    <div className="mt-10">
      <div className="mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em]">
        <span className="text-muted-foreground">← Problem</span>
        <span className="text-accent">Solution →</span>
      </div>

      <div
        ref={ref}
        className="relative min-h-[300px] touch-none rounded-[1.75rem] border border-border bg-background sm:min-h-[340px]"
        style={{ touchAction: "none" }}
        onPointerDown={startDrag}
        onMouseDown={startDrag}
      >
        {/* Problem — always full underneath */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-[1.75rem] p-6 sm:p-10">
          <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Problem
          </p>
          <p className="mt-4 max-w-xl text-base font-light leading-[1.75] text-muted-foreground sm:text-lg">
            {problem}
          </p>
        </div>

        {/* Solution — grows from the left as you drag right */}
        <div
          className="absolute inset-y-0 left-0 z-[1] overflow-hidden rounded-l-[1.75rem] bg-card"
          style={{ width: `${pct}%` }}
        >
          <div
            className="h-full p-6 sm:p-10"
            style={{ width: boxW > 0 ? boxW : "100%" }}
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-accent">
              Solution
            </p>
            <p className="mt-4 max-w-xl text-base font-light leading-[1.75] text-foreground sm:text-lg">
              {solution}
            </p>
          </div>
        </div>

        {/* Handle — outside overflow clip */}
        <div
          role="slider"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          aria-label="Compare problem and solution"
          className="absolute bottom-0 top-0 z-[3] w-12 -translate-x-1/2 cursor-ew-resize"
          style={{ left: `${pct}%` }}
          onPointerDown={startDrag}
          onMouseDown={startDrag}
        >
          <div className="absolute inset-y-3 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-accent" />
          <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-background shadow-xl shadow-accent/30">
            <span className="font-mono text-[11px] font-bold text-accent">↔</span>
          </div>
        </div>
      </div>

      <p className="mt-3 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground">
        Drag right to reveal the solution · {Math.round(pct)}%
      </p>
    </div>
  );
}

/** Timeline-style flow with connected steps. */
function ArchitectureTape({ steps }: { steps: string[] }) {
  return (
    <ol className="relative mt-12 space-y-0">
      <div
        aria-hidden
        className="absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-accent/50 via-border to-border sm:left-[1.6rem]"
      />
      {steps.map((step, i) => (
        <motion.li
          key={step}
          initial={{ opacity: 0, x: -12 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.05 }}
          className="group relative flex gap-4 pb-4 last:pb-0 sm:gap-6 sm:pb-5"
        >
          <span className="relative z-[1] mt-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-background font-mono text-[11px] text-accent shadow-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground sm:mt-6 sm:h-12 sm:w-12">
            {String(i + 1).padStart(2, "0")}
          </span>
          <article className="min-w-0 flex-1 overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/35 group-hover:shadow-md group-hover:shadow-accent/5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground">
                Step {i + 1} of {steps.length}
              </p>
              {i === steps.length - 1 && (
                <span className="rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-accent">
                  Output
                </span>
              )}
            </div>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]">
              {step}
            </p>
          </article>
        </motion.li>
      ))}
    </ol>
  );
}

/** Code types in when scrolled into view. */
function TypewriterCode({ slug, code }: { slug: string; code: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState("");
  const [done, setDone] = useState(false);
  const [copied, setCopied] = useState(false);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return;
        started.current = true;
        let i = 0;
        const tick = () => {
          i += 2;
          setShown(code.slice(0, i));
          if (i < code.length) requestAnimationFrame(tick);
          else setDone(true);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.35 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [code]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
      /* ignore */
    }
  };

  const lines = (done ? code : shown).split("\n");

  return (
    <div
      ref={ref}
      className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-[#0b0f17] font-mono text-xs text-gray-300 shadow-2xl shadow-foreground/10 sm:text-sm"
    >
      <div className="flex items-center justify-between border-b border-gray-800 bg-[#070a0f] px-4 py-3.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
          <span className="ml-2 text-[11px] text-gray-500">{slug}.core</span>
          {!done && (
            <span className="ml-2 animate-pulse font-mono text-[10px] text-accent">
              streaming…
            </span>
          )}
        </div>
        <button
          type="button"
          onClick={copy}
          className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-400 hover:bg-white/5 hover:text-gray-200"
        >
          <AnimatePresence mode="wait" initial={false}>
            {copied ? (
              <motion.span
                key="ok"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1 text-accent"
              >
                <Check size={12} /> Copied
              </motion.span>
            ) : (
              <motion.span
                key="c"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex items-center gap-1"
              >
                <Copy size={12} /> Copy
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>
      <div className="min-h-[180px] overflow-x-auto p-5 sm:p-7">
        <pre className="leading-[1.7]">
          <code>
            {lines.map((line, i) => (
              <span key={i} className="flex">
                <span className="mr-5 w-5 shrink-0 select-none text-right text-gray-600">
                  {i + 1}
                </span>
                <span>
                  {line || " "}
                  {!done && i === lines.length - 1 && (
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-accent align-middle" />
                  )}
                </span>
              </span>
            ))}
          </code>
        </pre>
      </div>
    </div>
  );
}

function ProjectHop({
  label,
  project,
  align = "left",
}: {
  label: string;
  project: Project;
  align?: "left" | "right";
}) {
  const isNext = align === "right";
  return (
    <Link
      to="/projects/$slug"
      params={{ slug: project.slug }}
      className={`group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/5 sm:p-8 ${
        isNext ? "sm:text-right" : ""
      }`}
    >
      <div
        className={`relative flex items-center gap-2 ${isNext ? "sm:justify-end" : ""}`}
      >
        {!isNext && <ArrowLeft size={12} className="text-muted-foreground" />}
        <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
          {label}
        </p>
        {isNext && <ArrowRight size={12} className="text-muted-foreground" />}
      </div>
      <p className="relative mt-3 font-display text-3xl transition-colors group-hover:text-accent sm:text-4xl">
        {project.name}
      </p>
      <p className="relative mt-2 text-xs text-muted-foreground">{project.tag}</p>
    </Link>
  );
}
