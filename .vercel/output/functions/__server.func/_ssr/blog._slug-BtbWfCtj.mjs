import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { e as Route, f as formatPostDate, a as site, R as Reveal } from "./router-jjw8zR6r.mjs";
import { P as PostCover } from "./PostCover-78oFzFuY.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { e as useScroll, c as useTransform, m as motion } from "../_libs/framer-motion.mjs";
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
function Post() {
  const {
    post,
    prev,
    next,
    relatedProject
  } = Route.useLoaderData();
  const articleRef = reactExports.useRef(null);
  const {
    scrollYProgress
  } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"]
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [showBar, setShowBar] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setShowBar(v > 0.02 && v < 0.98));
    return () => unsub();
  }, [scrollYProgress]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { "aria-hidden": true, className: "fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-accent", style: {
      width: progressWidth,
      opacity: showBar ? 1 : 0,
      transition: "opacity 0.25s ease"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { ref: articleRef, className: "relative", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-20 sm:px-6 sm:pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 10
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.45
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog", className: "inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "←" }),
          " Writing"
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
          opacity: 0,
          y: 18
        }, animate: {
          opacity: 1,
          y: 0
        }, transition: {
          duration: 0.55,
          delay: 0.08
        }, className: "mt-6 overflow-hidden rounded-[1.5rem] border border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(PostCover, { slug: post.slug, tag: post.tag, featured: true, className: "aspect-[21/9] min-h-[180px] w-full sm:min-h-[240px]" }) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("header", { className: "px-4 pt-10 sm:px-6 sm:pt-12", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { initial: {
        opacity: 0,
        y: 22
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6,
        delay: 0.12
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: post.tag }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, children: "·" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: formatPostDate(post.date) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-5 font-display text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.92]", children: post.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-lg font-light leading-[1.7] text-muted-foreground sm:text-xl sm:leading-[1.7]", children: post.description }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 flex flex-wrap items-center gap-5 border-y border-border py-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card font-display text-sm text-accent", children: "RP" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium", children: site.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: site.title })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ml-auto flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.18em]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.linkedin, target: "_blank", rel: "noreferrer", className: "text-muted-foreground transition-colors hover:text-accent", children: "LinkedIn" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.github, target: "_blank", rel: "noreferrer", className: "text-muted-foreground transition-colors hover:text-accent", children: "GitHub" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.email}`, className: "text-muted-foreground transition-colors hover:text-accent", children: "Email" })
          ] })
        ] })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 0.15, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "article-prose mt-12 sm:mt-14", dangerouslySetInnerHTML: {
          __html: post.html
        } }) }),
        relatedProject && /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/projects/$slug", params: {
          slug: relatedProject.slug
        }, className: "group mt-14 block border-y border-border py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.22em] text-accent", children: "Related project" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-3xl transition-colors group-hover:text-accent sm:text-4xl", children: relatedProject.name }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 max-w-md text-sm font-light text-muted-foreground", children: relatedProject.blurb }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-4 inline-block text-sm font-medium group-hover:text-accent", children: "Case study →" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-12 grid gap-px border-y border-border bg-border sm:grid-cols-2", children: [
          prev ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
            slug: prev.slug
          }, className: "group bg-background p-6 transition-colors hover:bg-muted/40 sm:p-7", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "← Older" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl leading-tight transition-colors group-hover:text-accent sm:text-2xl", children: prev.title })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden bg-background sm:block" }),
          next ? /* @__PURE__ */ jsxRuntimeExports.jsxs(Link, { to: "/blog/$slug", params: {
            slug: next.slug
          }, className: "group bg-background p-6 text-left transition-colors hover:bg-muted/40 sm:p-7 sm:text-right", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground", children: "Newer →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-display text-xl leading-tight transition-colors group-hover:text-accent sm:text-2xl", children: next.title })
          ] }) : null
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
export {
  Post as component
};
