import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { d as Route$1, g as getPostsByProject, M as Magnetic, R as Reveal } from "./router-jjw8zR6r.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { u as useMotionValue, f as useMotionTemplate, e as useScroll, c as useTransform, m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { A as ArrowLeft, c as ArrowUpRight, C as Check, d as Copy, e as ArrowRight } from "../_libs/lucide-react.mjs";
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
import "../_libs/tanstack__query-core.mjs";
import "../_libs/tanstack__react-query.mjs";
import "../_libs/lenis.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const CHAPTERS = [{
  id: "brief",
  label: "BRIEF"
}, {
  id: "lens",
  label: "LENS"
}, {
  id: "tape",
  label: "TAPE"
}, {
  id: "matrix",
  label: "MATRIX"
}, {
  id: "signal",
  label: "SIGNAL"
}];
function ProjectPage() {
  const {
    project,
    prev,
    next,
    index,
    total
  } = Route$1.useLoaderData();
  const relatedWriting = getPostsByProject(project.slug);
  const outbound = project.repoUrl || project.productUrl;
  const outboundLabel = project.repoUrl ? "View on GitHub" : project.productUrl ? "Get the book" : null;
  const pageRef = reactExports.useRef(null);
  const [chapter, setChapter] = reactExports.useState("BRIEF");
  const [pinnedLayer, setPinnedLayer] = reactExports.useState(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlight = useMotionTemplate`radial-gradient(640px circle at ${mouseX}px ${mouseY}px, oklch(0.7 0.22 35 / 0.09), transparent 55%)`;
  const {
    scrollYProgress
  } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"]
  });
  const progressPct = useTransform(scrollYProgress, (v) => `${Math.round(v * 100)}%`);
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const onMove = reactExports.useCallback((e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);
  reactExports.useEffect(() => {
    const ids = CHAPTERS.map((c) => c.id);
    const observers = [];
    ids.forEach((id, i) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) setChapter(CHAPTERS[i].label);
      }, {
        rootMargin: "-40% 0px -45% 0px"
      });
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [project.slug]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain relative min-h-screen bg-background", ref: pageRef, onMouseMove: onMove, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-[1] hidden mix-blend-multiply md:block dark:mix-blend-soft-light", style: {
      background: spotlight
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { className: "fixed left-0 right-0 top-0 z-[60] h-[2px] bg-accent", style: {
      width: progressWidth
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "brief", className: "relative z-[2] overflow-hidden px-4 pb-16 pt-20 sm:px-6 sm:pb-24 sm:pt-28 md:pt-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-x-0 top-[20%] select-none overflow-hidden text-center font-display text-[20vw] leading-none tracking-tighter text-foreground/[0.03]", children: String(index).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-6xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects", className: "group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-accent", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 14, className: "transition-transform group-hover:-translate-x-0.5" }),
            "All work"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
              "Case ",
              String(index).padStart(2, "0"),
              " /",
              " ",
              String(total).padStart(2, "0")
            ] }),
            project.status && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-border", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
                project.status
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 8
        }, animate: {
          opacity: 1,
          y: 0
        }, className: "mt-14 text-xs font-semibold uppercase tracking-[0.35em] text-accent", children: project.tag }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 overflow-hidden font-display text-[15vw] leading-[0.84] sm:text-[10vw] md:text-[7.5vw] lg:text-[6.75rem]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { className: "block", initial: {
          y: "115%"
        }, animate: {
          y: 0
        }, transition: {
          duration: 0.95,
          ease: [0.22, 1, 0.36, 1]
        }, children: [
          project.name.toUpperCase(),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-col gap-8 border-t border-border/80 pt-8 md:mt-12 md:flex-row md:items-end md:justify-between md:gap-16 md:pt-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
            opacity: 0,
            y: 12
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.2
          }, className: "max-w-2xl text-lg font-light leading-[1.7] text-muted-foreground sm:text-xl md:text-[1.35rem]", children: project.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
            opacity: 0,
            y: 12
          }, animate: {
            opacity: 1,
            y: 0
          }, transition: {
            delay: 0.3
          }, className: "flex shrink-0 flex-col gap-4 md:items-end", children: [
            project.roles && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2 md:justify-end", children: project.roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/60 bg-background/70 px-3.5 py-1.5 text-[11px] text-muted-foreground backdrop-blur-sm", children: role }, role)) }),
            outbound && outboundLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: outbound, target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-2.5 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground", children: [
              outboundLabel,
              /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16, className: "transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" })
            ] }) })
          ] })
        ] }),
        project.specs && /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 20
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 0.4
        }, className: "mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-[1.5rem] border border-border bg-border md:mt-16 md:grid-cols-4", children: Object.entries(project.specs).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card p-5 transition-colors hover:bg-accent/[0.06] sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[9px] uppercase tracking-[0.28em] text-muted-foreground", children: key }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 font-display text-xl leading-none sm:text-2xl md:text-3xl", children: value })
        ] }, key)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-[2] mx-auto max-w-6xl space-y-28 px-4 pb-36 sm:space-y-36 sm:px-6 sm:pb-44", children: [
      (project.problem || project.solution) && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "lens", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Interactive lens" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl", children: "PROBLEM → SOLUTION" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-lg text-sm text-muted-foreground", children: "Drag the handle right to reveal the solution over the problem." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(CompareLens, { problem: project.problem ?? "", solution: project.solution ?? "" }) }),
        project.outcomes && project.outcomes.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-4 sm:grid-cols-3 sm:gap-5", children: project.outcomes.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.07, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/5 sm:p-7", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 via-transparent to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-start justify-between gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-5xl leading-none text-accent/20 transition-colors group-hover:text-accent/40", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-accent/20 bg-accent/[0.06] px-2.5 py-1 font-mono text-[9px] uppercase tracking-[0.18em] text-accent", children: "Result" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]", children: item })
        ] }) }, item)) })
      ] }),
      project.architecture && project.architecture.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "tape", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Execution flow" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl", children: "HOW IT RUNS" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm text-muted-foreground", children: "End-to-end flow from trigger to decision output." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ArchitectureTape, { steps: project.architecture })
      ] }),
      project.highlights && project.highlights.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Capabilities" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl", children: "WHAT IT CATCHES" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-2 sm:gap-5", children: project.highlights.map((item, i) => {
          const [title, ...rest] = item.split(":");
          const body = rest.length ? rest.join(":").trim() : null;
          return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.05, 0.2), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "group relative h-full overflow-hidden rounded-3xl border border-border/80 bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-lg hover:shadow-accent/5 sm:p-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "pointer-events-none absolute right-5 top-4 font-display text-5xl leading-none text-foreground/[0.06] transition-colors group-hover:text-accent/15 sm:right-6 sm:top-5 sm:text-6xl", children: String(i + 1).padStart(2, "0") }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-x-0 top-0 h-[2px] origin-left scale-x-0 bg-accent transition-transform duration-500 group-hover:scale-x-100" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative font-mono text-[10px] uppercase tracking-[0.22em] text-accent", children: [
              "Signal ",
              String(i + 1).padStart(2, "0")
            ] }),
            body ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-3 max-w-[85%] font-display text-2xl leading-[0.95] sm:text-3xl", children: title.trim() }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]", children: body })
            ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 max-w-[90%] text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]", children: item })
          ] }) }, item);
        }) })
      ] }),
      project.stackLayers && project.stackLayers.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "matrix", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Pin a layer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl", children: "STACK MATRIX" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
            "Click a layer to isolate it — ",
            project.meta
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3", children: project.stackLayers.map((row, i) => {
          const active = pinnedLayer === row.layer;
          const dimmed = pinnedLayer && !active;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.button, { type: "button", onClick: () => setPinnedLayer(active ? null : row.layer), initial: {
            opacity: 0,
            y: 12
          }, whileInView: {
            opacity: 1,
            y: 0
          }, viewport: {
            once: true
          }, transition: {
            delay: i * 0.05
          }, className: `rounded-2xl border p-5 text-left transition-all duration-300 sm:p-6 ${active ? "border-accent bg-accent/10 shadow-lg shadow-accent/10" : dimmed ? "border-border/40 bg-card/40 opacity-40" : "border-border bg-card hover:border-accent/40 hover:bg-accent/[0.04]"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-[10px] text-accent", children: [
              "L",
              String(i + 1).padStart(2, "0")
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-2xl uppercase leading-none sm:text-3xl", children: row.layer }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 font-mono text-xs text-muted-foreground", children: row.tech })
          ] }, row.layer);
        }) })
      ] }),
      project.codeSnippet && /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "signal", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Live signal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl uppercase sm:text-5xl md:text-6xl", children: "CORE LOGIC" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(TypewriterCode, { slug: project.slug, code: project.codeSnippet }),
        project.content && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-10 max-w-3xl text-base font-light leading-[1.8] text-muted-foreground sm:text-lg", children: project.content })
      ] }),
      outbound && outboundLabel && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] bg-primary px-7 py-14 text-primary-foreground sm:px-14 sm:py-20", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "pointer-events-none absolute -right-16 -top-10 h-80 w-80 rounded-full bg-accent/45 blur-3xl", animate: {
          scale: [1, 1.1, 1],
          x: [0, 20, 0]
        }, transition: {
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col gap-10 md:flex-row md:items-end md:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] opacity-55", children: "[ VERIFY ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-5 font-display text-5xl leading-[0.9] sm:text-7xl md:text-8xl", children: [
              "Open the",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "source",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 max-w-md text-sm leading-relaxed opacity-70 sm:text-base", children: "Claims should survive a read of the repo." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: outbound, target: "_blank", rel: "noreferrer", className: "group inline-flex items-center gap-2.5 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-accent-foreground", children: [
            outboundLabel,
            /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 16 })
          ] }) })
        ] })
      ] }) }),
      relatedWriting.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-14 border-t border-border pt-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Related writing" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 divide-y divide-border border-y border-border", children: relatedWriting.map((p) => /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
          slug: p.slug
        }, className: "group flex flex-col gap-2 py-5 sm:flex-row sm:items-baseline sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent", children: p.tag }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 font-display text-2xl transition-colors group-hover:text-accent sm:text-3xl", children: p.title })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold", children: "Read →" })
        ] }, p.slug)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "grid gap-4 border-t border-border pt-14 sm:grid-cols-2 sm:gap-5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectHop, { label: "Previous", project: prev }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(ProjectHop, { label: "Next", project: next, align: "right" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-auto flex max-w-full items-center gap-3 overflow-x-auto rounded-full border border-border/80 bg-card/90 px-4 py-2.5 shadow-2xl shadow-foreground/10 backdrop-blur-xl sm:gap-5 sm:px-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden font-display text-sm sm:inline", children: project.name }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden h-3 w-px bg-border sm:block" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[10px] tracking-[0.2em] text-accent", children: chapter }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "font-mono text-[10px] tabular-nums tracking-wider text-muted-foreground", children: progressPct }),
      outbound && /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-3 w-px bg-border" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: outbound, target: "_blank", rel: "noreferrer", className: "inline-flex items-center gap-1 rounded-full bg-primary px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary-foreground", children: [
          "Source ",
          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { size: 10 })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function CompareLens({
  problem,
  solution
}) {
  const ref = reactExports.useRef(null);
  const [pct, setPct] = reactExports.useState(12);
  const [boxW, setBoxW] = reactExports.useState(0);
  const dragging = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const measure = () => setBoxW(el.clientWidth);
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  const setFromClientX = reactExports.useCallback((clientX) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    if (r.width <= 0) return;
    const next = (clientX - r.left) / r.width * 100;
    setPct(Math.min(100, Math.max(0, next)));
  }, []);
  reactExports.useEffect(() => {
    const onMove = (e) => {
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
    window.addEventListener("pointermove", onMove, {
      passive: false
    });
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
  const startDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    dragging.current = true;
    document.body.style.cursor = "ew-resize";
    document.body.style.userSelect = "none";
    setFromClientX(e.clientX);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.25em]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: "← Problem" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "Solution →" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "relative min-h-[300px] touch-none rounded-[1.75rem] border border-border bg-background sm:min-h-[340px]", style: {
      touchAction: "none"
    }, onPointerDown: startDrag, onMouseDown: startDrag, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute inset-0 z-0 overflow-hidden rounded-[1.75rem] p-6 sm:p-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground", children: "Problem" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-base font-light leading-[1.75] text-muted-foreground sm:text-lg", children: problem })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-0 left-0 z-[1] overflow-hidden rounded-l-[1.75rem] bg-card", style: {
        width: `${pct}%`
      }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full p-6 sm:p-10", style: {
        width: boxW > 0 ? boxW : "100%"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.3em] text-accent", children: "Solution" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-base font-light leading-[1.75] text-foreground sm:text-lg", children: solution })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { role: "slider", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": Math.round(pct), "aria-label": "Compare problem and solution", className: "absolute bottom-0 top-0 z-[3] w-12 -translate-x-1/2 cursor-ew-resize", style: {
        left: `${pct}%`
      }, onPointerDown: startDrag, onMouseDown: startDrag, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-y-3 left-1/2 w-0.5 -translate-x-1/2 rounded-full bg-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-accent bg-background shadow-xl shadow-accent/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[11px] font-bold text-accent", children: "↔" }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-3 text-center font-mono text-[9px] uppercase tracking-[0.25em] text-muted-foreground", children: [
      "Drag right to reveal the solution · ",
      Math.round(pct),
      "%"
    ] })
  ] });
}
function ArchitectureTape({
  steps
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("ol", { className: "relative mt-12 space-y-0", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute bottom-6 left-[1.35rem] top-6 w-px bg-gradient-to-b from-accent/50 via-border to-border sm:left-[1.6rem]" }),
    steps.map((step, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.li, { initial: {
      opacity: 0,
      x: -12
    }, whileInView: {
      opacity: 1,
      x: 0
    }, viewport: {
      once: true
    }, transition: {
      delay: i * 0.05
    }, className: "group relative flex gap-4 pb-4 last:pb-0 sm:gap-6 sm:pb-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-[1] mt-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-accent/30 bg-background font-mono text-[11px] text-accent shadow-sm transition-all duration-300 group-hover:border-accent group-hover:bg-accent group-hover:text-accent-foreground sm:mt-6 sm:h-12 sm:w-12", children: String(i + 1).padStart(2, "0") }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { className: "min-w-0 flex-1 overflow-hidden rounded-2xl border border-border/80 bg-card p-5 shadow-sm transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-accent/35 group-hover:shadow-md group-hover:shadow-accent/5 sm:p-6", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[9px] uppercase tracking-[0.22em] text-muted-foreground", children: [
            "Step ",
            i + 1,
            " of ",
            steps.length
          ] }),
          i === steps.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-accent", children: "Output" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2.5 text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-foreground sm:text-[15px]", children: step })
      ] })
    ] }, step))
  ] });
}
function TypewriterCode({
  slug,
  code
}) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState("");
  const [done, setDone] = reactExports.useState(false);
  const [copied, setCopied] = reactExports.useState(false);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
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
    }, {
      threshold: 0.35
    });
    io.observe(el);
    return () => io.disconnect();
  }, [code]);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1600);
    } catch {
    }
  };
  const lines = (done ? code : shown).split("\n");
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref, className: "mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-[#0b0f17] font-mono text-xs text-gray-300 shadow-2xl shadow-foreground/10 sm:text-sm", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-gray-800 bg-[#070a0f] px-4 py-3.5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 text-[11px] text-gray-500", children: [
          slug,
          ".core"
        ] }),
        !done && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2 animate-pulse font-mono text-[10px] text-accent", children: "streaming…" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: copy, className: "flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] text-gray-400 hover:bg-white/5 hover:text-gray-200", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: copied ? /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "flex items-center gap-1 text-accent", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 12 }),
        " Copied"
      ] }, "ok") : /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { initial: {
        opacity: 0
      }, animate: {
        opacity: 1
      }, exit: {
        opacity: 0
      }, className: "flex items-center gap-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Copy, { size: 12 }),
        " Copy"
      ] }, "c") }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "min-h-[180px] overflow-x-auto p-5 sm:p-7", children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "leading-[1.7]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: lines.map((line, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mr-5 w-5 shrink-0 select-none text-right text-gray-600", children: i + 1 }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        line || " ",
        !done && i === lines.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-accent align-middle" })
      ] })
    ] }, i)) }) }) })
  ] });
}
function ProjectHop({
  label,
  project,
  align = "left"
}) {
  const isNext = align === "right";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
    slug: project.slug
  }, className: `group relative overflow-hidden rounded-[1.75rem] border border-border bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/35 hover:shadow-xl hover:shadow-accent/5 sm:p-8 ${isNext ? "sm:text-right" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: `relative flex items-center gap-2 ${isNext ? "sm:justify-end" : ""}`, children: [
      !isNext && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowLeft, { size: 12, className: "text-muted-foreground" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground", children: label }),
      isNext && /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { size: 12, className: "text-muted-foreground" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 font-display text-3xl transition-colors group-hover:text-accent sm:text-4xl", children: project.name }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-xs text-muted-foreground", children: project.tag })
  ] });
}
export {
  ProjectPage as component
};
