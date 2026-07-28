import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { W as WordReveal, s as services, R as Reveal } from "./router-jjw8zR6r.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
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
function Services() {
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
        duration: 0.6
      }, className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground text-center", children: "[ SERVICES ]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(WordReveal, { text: "What I do.", className: "mt-4 font-display text-6xl sm:text-8xl md:text-[9rem] text-center" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:mt-24 md:grid-cols-2", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { whileHover: {
        backgroundColor: "var(--accent)",
        color: "var(--accent-foreground)"
      }, transition: {
        duration: 0.3
      }, className: "h-full bg-card p-8 sm:p-12", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base font-medium opacity-60 sm:text-lg", children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 font-display text-4xl sm:text-5xl", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base opacity-80 sm:text-lg leading-relaxed", children: s.body })
      ] }) }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Services as component
};
