import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { b as posts, W as WordReveal, R as Reveal, c as allTags, f as formatPostDate } from "./router-jjw8zR6r.mjs";
import { P as PostCover } from "./PostCover-78oFzFuY.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
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
function shortTag(t) {
  if (t === "Product / Delivery") return "Product";
  if (t === "Systems / DevOps") return "Systems";
  return t;
}
function BlogIndex() {
  const [tag, setTag] = reactExports.useState("All");
  const filtered = reactExports.useMemo(() => tag === "All" ? posts : posts.filter((p) => p.tag === tag), [tag]);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-6xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { initial: {
          opacity: 0,
          y: 8
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.45
        }, className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ WRITING ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "Field notes.", className: "mt-4 text-center font-display text-5xl sm:text-7xl md:text-[8rem]" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.25, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "tablist", "aria-label": "Filter essays by topic", className: "grid w-full max-w-sm grid-cols-2 gap-1.5 rounded-2xl border border-border/70 bg-card/80 p-2 shadow-sm backdrop-blur-sm sm:inline-flex sm:w-auto sm:max-w-full sm:flex-wrap sm:items-center sm:justify-center sm:gap-1 sm:p-1.5", children: ["All", ...allTags].map((t) => {
        const on = tag === t;
        return /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-label": t, "aria-selected": on, onClick: () => setTag(t), className: `rounded-xl px-2.5 py-2.5 text-center font-mono text-[10px] uppercase tracking-[0.14em] transition-colors duration-200 sm:px-3.5 sm:py-2.5 sm:tracking-[0.16em] ${t === "All" ? "col-span-2 sm:col-span-1" : ""} ${on ? "bg-accent text-accent-foreground" : "bg-muted/40 text-muted-foreground hover:bg-muted/60 hover:text-foreground sm:bg-transparent"}`, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "sm:hidden", children: shortTag(t) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden sm:inline", children: t })
        ] }, t);
      }) }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: featured ? /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 14
      }, animate: {
        opacity: 1,
        y: 0
      }, exit: {
        opacity: 0
      }, transition: {
        duration: 0.35
      }, className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: featured.slug
      }, className: "group grid overflow-hidden rounded-[1.75rem] border border-border bg-card lg:grid-cols-[1.15fr_0.85fr]", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PostCover, { slug: featured.slug, tag: featured.tag, featured: true, className: "min-h-[240px] sm:min-h-[300px] lg:min-h-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between p-6 sm:p-8 lg:p-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-accent", children: [
              "Featured · ",
              formatPostDate(featured.date)
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 font-display text-3xl leading-[0.92] transition-colors group-hover:text-accent sm:text-5xl lg:text-6xl", children: featured.title }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base", children: featured.description })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-8 inline-flex w-fit items-center text-sm font-semibold transition-colors group-hover:text-accent", children: "Read essay →" })
        ] })
      ] }) }, featured.slug + tag) : /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-16 text-center text-sm text-muted-foreground", children: "No essays in this category." }) }),
      rest.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3", children: rest.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.04, 0.24), children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
        slug: p.slug
      }, className: "group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(PostCover, { slug: p.slug, tag: p.tag, className: "aspect-[16/10] w-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-1 flex-col p-5 sm:p-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: formatPostDate(p.date) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-3 font-display text-2xl leading-[0.95] transition-colors group-hover:text-accent sm:text-3xl", children: p.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground line-clamp-3", children: p.description }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-5 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-accent", children: "Read →" })
        ] })
      ] }) }, p.slug)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-16 sm:h-24" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  BlogIndex as component
};
