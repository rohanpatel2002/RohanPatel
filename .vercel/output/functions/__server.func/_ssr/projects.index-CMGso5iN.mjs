import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { W as WordReveal, R as Reveal, p as projects } from "./router-jjw8zR6r.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function ProjectsIndex() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
        opacity: 0,
        y: 10
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.5
      }, className: "text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ PROJECTS ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "Selected works.", className: "mt-4 text-center font-display text-5xl sm:text-7xl md:text-[8rem]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.2, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-xl text-center text-sm font-light leading-relaxed text-muted-foreground sm:text-base", children: "Systems built from interface to infrastructure." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2", children: projects.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.08, 0.24), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
        slug: p.slug
      }, className: "block h-full", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.article, { whileHover: {
        y: -4
      }, transition: {
        type: "spring",
        stiffness: 260,
        damping: 24
      }, className: "group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-6 backdrop-blur-sm sm:p-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative min-w-0", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.25em] text-accent", children: p.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 break-words font-display text-3xl leading-[0.95] sm:text-5xl md:text-6xl", children: p.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base", children: p.blurb }),
          p.roles && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 flex flex-wrap gap-2", children: p.roles.map((role) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border/70 bg-muted/25 px-2.5 py-1 text-[10px] font-medium text-muted-foreground", children: role }, role)) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex items-center justify-between gap-3 border-t border-border/60 pt-5", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "truncate font-mono text-[10px] text-muted-foreground sm:text-[11px]", children: p.meta }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 text-sm font-semibold transition-colors group-hover:text-accent", children: "View details →" })
        ] })
      ] }) }) }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 sm:h-24" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  ProjectsIndex as component
};
