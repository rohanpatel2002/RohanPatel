import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { u as useContactModal, R as Reveal, W as WordReveal, p as projects, T as Tilt, b as posts, f as formatPostDate, a as site, M as Magnetic } from "./router-jjw8zR6r.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { m as motion, e as useScroll, c as useTransform, u as useMotionValue, a as useSpring, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
function Hero() {
  const [index, setIndex] = reactExports.useState(0);
  const [tilt, setTilt] = reactExports.useState(false);
  const words = ["RESILIENT", "SCALABLE", "ROBUST", "ELEGANT"];
  const {
    open
  } = useContactModal();
  reactExports.useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 2500);
    return () => clearInterval(timer);
  }, []);
  reactExports.useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const sync = () => setTilt(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);
  const ref = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const opacity = useTransform(scrollYProgress, [0, 0.85], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.97]);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = {
    damping: 28,
    stiffness: 120
  };
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springCfg);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springCfg);
  const handleMouseMove = (e) => {
    if (!tilt) return;
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { ref, onMouseMove: tilt ? handleMouseMove : void 0, onMouseLeave: tilt ? handleMouseLeave : void 0, className: "relative flex min-h-[calc(100svh-4.75rem)] flex-col overflow-hidden px-3 pb-6 pt-8 sm:min-h-[100svh] sm:px-4 sm:pb-0 sm:pt-8", style: tilt ? {
    perspective: "1200px"
  } : void 0, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-[10%] right-[5%] h-[35vw] w-[35vw] rounded-full bg-primary/20 blur-3xl", style: {
      animation: "blob 30s ease-in-out infinite reverse"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { style: tilt ? {
      y,
      opacity,
      scale,
      rotateX,
      rotateY
    } : {
      opacity
    }, className: "relative z-10 flex flex-1 flex-col justify-between text-center sm:block sm:flex-none sm:justify-start sm:pb-36", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 20
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        delay: 0.2,
        duration: 0.6
      }, className: "text-[10px] font-semibold tracking-[0.18em] text-muted-foreground sm:text-xs sm:tracking-[0.3em]", children: "[ ROHAN PATEL — SOFTWARE ENGINEER ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "relative flex w-full flex-col gap-1 font-display text-[min(24vw,11vh)] !leading-none tracking-[-0.03em] sm:mt-6 sm:gap-0 sm:text-[14vw] sm:!leading-[0.9] sm:tracking-normal md:text-[12vw]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute rounded-full bg-accent/25 blur-[80px]", style: {
          left: "-15%",
          top: "10%",
          width: "130%",
          height: "50%",
          zIndex: 10,
          animation: "blob 22s ease-in-out infinite"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative block overflow-hidden", style: {
          zIndex: 20
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "block", initial: {
          y: "110%"
        }, animate: {
          y: 0
        }, transition: {
          delay: 0.3,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }, children: "I BUILD" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative block h-[1em] overflow-hidden sm:h-[0.9em]", style: {
          zIndex: 5
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { initial: {
          y: "100%"
        }, animate: {
          y: 0
        }, exit: {
          y: "-100%"
        }, transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
          delay: index === 0 ? 0.45 : 0
        }, className: "absolute inset-0 block text-accent", children: words[index] }, words[index]) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative block overflow-hidden", style: {
          zIndex: 20
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { className: "block", initial: {
          y: "110%"
        }, animate: {
          y: 0
        }, transition: {
          delay: 0.6,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }, children: "SOFTWARE" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative block overflow-hidden", style: {
          zIndex: 20
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.span, { className: "block", initial: {
          y: "110%"
        }, animate: {
          y: 0
        }, transition: {
          delay: 0.75,
          duration: 0.9,
          ease: [0.22, 1, 0.36, 1]
        }, children: [
          "SYSTEMS",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:contents", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.1,
          duration: 0.6
        }, className: "mx-auto max-w-[22rem] text-[15px] leading-snug text-muted-foreground sm:mt-8 sm:max-w-2xl sm:text-lg sm:leading-relaxed", children: site.summary }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
          opacity: 0,
          y: 16
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          delay: 1.25,
          duration: 0.6
        }, className: "mt-4 flex flex-col items-stretch gap-2.5 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/about", className: "inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground sm:w-auto sm:py-3", children: "About me" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: open, className: "inline-flex w-full items-center justify-center rounded-full border border-border bg-card px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-muted sm:w-auto sm:py-3", children: "Contact me" }) })
        ] })
      ] })
    ] })
  ] });
}
const rulesData = [{
  id: "01",
  title: "Maximize Context Density",
  subtitle: "Keyword proximity weighting",
  blurb: "Modern applicant routing systems weigh semantic proximity over raw string matching. Action verbs coupled with absolute metric clusters score up to 3.4x higher pass indices.",
  code: `package pipeline

// Rule 01: Context Density Weighting
func EvaluateImpact(bullet string) float64 {
    verbs := ExtractActionVerbs(bullet)
    metrics := ParseAbsoluteMetrics(bullet)
    
    if len(verbs) > 0 && len(metrics) > 0 {
        return CalculateProximityScore(verbs[0], metrics[0]) * 1.5
    }
    return 0.2 // Orphaned string weight
}`
}, {
  id: "02",
  title: "Term Vector Proximity",
  subtitle: "Explicit schema taxonomy bindings",
  blurb: "Avoid unstructured creative section headers. Parsers map documents into standard taxonomy nodes. Using canonical section identifiers ensures guaranteed parsing extraction.",
  code: `package taxonomy

// Rule 02: Explicit Schema Encodings
var CanonicalHeaders = map[string]TaxonomyNode{
    "EXPERIENCE":   NodeProfessionalHistory,
    "PUBLICATIONS": NodeScholarlyResearch,
    "SKILLS":       NodeTechnicalCapabilities,
}

func ExtractSection(token string) (TaxonomyNode, bool) {
    node, exists := CanonicalHeaders[strings.ToUpper(token)]
    return node, exists
}`
}, {
  id: "03",
  title: "Optical Stream Flattening",
  subtitle: "Deterministic flow formatting",
  blurb: "Complex column floats and custom graphical glyphs fail standard optical character recognition streams. Pure, single-column nested flow layouts ensure flawless string normalization.",
  code: `package textstream

// Rule 03: Flatten Structural Floats
func NormalizeDocumentStream(layout Node) string {
    if layout.HasFloat() || layout.IsMultiColumn() {
        return FlattenOpticalStream(layout, StripFormatting)
    }
    return DirectBufferRead(layout)
}`
}];
function BookDeck() {
  const [activeTab, setActiveTab] = reactExports.useState(0);
  const rule = rulesData[activeTab];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-24 sm:px-6 sm:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ FEATURED PUBLICATION ]" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "Hired by an Algorithm.", className: "mt-4 font-display text-4xl sm:text-5xl md:text-7xl" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg", children: "Distilling algorithmic applicant tracking systems into concrete document engineering contracts. Explore interactive execution modules from the book — or read it on Amazon." }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.book, target: "_blank", rel: "noreferrer", className: "mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground", children: "Get the book on Amazon →" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between border-b border-border p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-xs uppercase tracking-widest text-accent", children: "[ ALGORITHMIC CONTRACTS ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex flex-col gap-2.5 sm:gap-3", children: rulesData.map((r, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setActiveTab(i), className: `flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${activeTab === i ? "border-accent bg-accent/10 text-foreground shadow-sm" : "border-border/40 bg-background/50 text-muted-foreground hover:bg-muted/50 hover:text-foreground"}`, children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full items-center justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-mono text-xs font-bold text-accent", children: [
                "RULE ",
                r.id
              ] }),
              activeTab === i && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 font-display text-base font-semibold sm:text-lg", children: r.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs opacity-70", children: r.subtitle })
          ] }, r.id)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 rounded-xl border border-border/40 bg-muted/40 p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs italic text-muted-foreground", children: [
          '"',
          rule.blurb,
          '"'
        ] }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col bg-[#0b0f17] font-mono text-xs text-gray-300 lg:col-span-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between border-b border-gray-800 bg-[#070a0f] px-4 py-2.5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-red-500/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-yellow-500/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-green-500/80" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "ml-2 font-mono text-[11px] text-gray-500", children: [
              "evaluator_rule_",
              rule.id,
              ".go"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-gray-500", children: "Go 1.22 runtime" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex-1 overflow-x-auto p-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 5
        }, animate: {
          opacity: 1,
          y: 0
        }, exit: {
          opacity: 0,
          y: -5
        }, transition: {
          duration: 0.15
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: "leading-relaxed", children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { children: rule.code }) }) }, rule.id) }) })
      ] })
    ] })
  ] }) });
}
function Index() {
  const {
    open
  } = useContactModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "px-4 pt-12 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ ABOUT ]" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "Systems that hold.", className: "mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.12, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-xl text-sm font-light leading-relaxed text-muted-foreground sm:text-base", children: "Building systems that stay reliable under pressure — from interface to infrastructure." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 grid gap-10 border-t border-border pt-10 md:grid-cols-12 md:gap-12 md:pt-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-7", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.18, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-base font-light leading-[1.75] text-muted-foreground sm:text-lg sm:leading-[1.7]", children: [
            "Built at",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Praalak Tech Solutions" }),
            " ",
            "and contributed research software at the",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-medium text-foreground", children: "Physical Research Laboratory [PRL, ISRO]" }),
            ". I care about the parts most people skip — data models, failure modes, and the shape of the API — whether the work is full-stack product, DevOps safety, applied AI, or shipping beside the people who use it."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/about", className: "mt-8 inline-flex items-center gap-2 text-sm font-semibold text-accent transition-colors hover:text-foreground", children: [
            "More about me",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "→" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:col-span-5", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.24, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-8 md:border-l md:border-border md:pl-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-foreground", children: "Software Engineer · Praalak" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Research Software Engineer Intern · PRL" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Open source · Grafana · Supabase · Ollama" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent", children: "Focus" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "Full-stack · Backend · DevOps · Applied AI · Forward-deployed delivery" })
          ] })
        ] }) }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "projects", className: "relative px-4 pt-24 sm:px-6 sm:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ SELECTED WORK ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects", className: "hidden text-sm font-medium text-muted-foreground hover:text-accent md:block", children: "All projects →" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-9 grid gap-6 sm:mt-10 sm:gap-7 md:grid-cols-2", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.1, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "block h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Tilt, { intensity: 10, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { whileHover: {
        y: -6
      }, transition: {
        type: "spring",
        stiffness: 200,
        damping: 20
      }, className: "group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/75 backdrop-blur-sm p-5 sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -z-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100 blur-[22px]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 break-words font-display text-3xl leading-[0.95] sm:text-5xl md:text-6xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base", children: p.blurb }),
          p.roles && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: p.roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/70 bg-muted/25 px-2.5 py-1 text-[10px] font-medium text-muted-foreground", children: role }, role)) }),
          p.specs && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 grid grid-cols-2 gap-x-3 gap-y-3 border-y border-border/50 py-5 sm:mt-8 sm:gap-x-4", children: Object.entries(p.specs).map(([key, value]) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex min-w-0 flex-col", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-mono text-[9px] uppercase tracking-widest text-muted-foreground", children: key }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1 break-words text-[11px] font-medium text-foreground sm:text-xs", children: value })
          ] }, key)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-6 flex flex-col gap-2 border-t border-border/50 pt-4 text-xs sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:border-0 sm:pt-2 sm:text-sm", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground opacity-70 transition-colors transition-opacity group-hover:opacity-100 group-hover:text-accent", children: p.meta }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold sm:whitespace-nowrap", children: "View details →" })
        ] })
      ] }) }) }) }, p.name)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-24 sm:px-6 sm:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-end justify-between gap-4", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ WRITING ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/blog", className: "text-sm font-medium text-muted-foreground hover:text-accent", children: "All essays →" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-4xl sm:text-6xl md:text-7xl", children: "Field notes." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 divide-y divide-border border-y border-border", children: posts.slice(0, 3).map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: p.slug
      }, className: "group flex flex-col gap-2 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:py-7", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: [
            formatPostDate(p.date),
            " · ",
            p.tag
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 font-display text-2xl transition-colors group-hover:text-accent sm:text-3xl", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-2xl text-sm font-light text-muted-foreground", children: p.description })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-sm font-semibold group-hover:text-accent", children: "Read →" })
      ] }) }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(BookDeck, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "px-4 pt-24 sm:px-6 sm:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-10 md:p-20", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl", style: {
        animation: "blob 18s ease-in-out infinite"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-xs font-semibold tracking-[0.3em] opacity-70", children: "[ CONTACT ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "relative mt-4 font-display text-5xl sm:text-7xl md:text-9xl", children: [
        "Let's build",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "something",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-4 max-w-xl text-sm opacity-80 sm:text-base", children: site.tagline }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: open, className: "inline-flex items-center justify-center rounded-full border border-transparent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:px-7 sm:py-3 sm:text-base", children: "Get in touch" }) }) })
    ] }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Index as component
};
