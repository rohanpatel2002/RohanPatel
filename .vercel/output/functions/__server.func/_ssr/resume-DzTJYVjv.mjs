import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { S as SiteHeader, a as SiteFooter } from "./SiteHeader-tfsI0dxn.mjs";
import { u as useContactModal, a as site, M as Magnetic, R as Reveal } from "./router-jjw8zR6r.mjs";
import { r as resume } from "./resume-B5JuwJYX.mjs";
import "../_libs/sonner.mjs";
import "../_libs/marked.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { M as Mail, L as Linkedin, G as Github, I as Instagram } from "../_libs/lucide-react.mjs";
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
function Resume() {
  const [view, setView] = reactExports.useState("web");
  const {
    open
  } = useContactModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grain min-h-screen bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteHeader, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative overflow-hidden px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { initial: {
        opacity: 0,
        y: 18
      }, animate: {
        opacity: 1,
        y: 0
      }, transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1]
      }, className: "overflow-hidden rounded-[1.75rem] border border-border/80 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col justify-between bg-card/80 p-7 text-center backdrop-blur-sm sm:p-8 md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ RÉSUMÉ ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h1", { className: "mt-4 font-display text-[clamp(2.35rem,9.5vw,4rem)] leading-none whitespace-nowrap", children: [
              "Rohan Patel",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent", children: [
              site.title,
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mx-2 text-border", children: "·" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground", children: resume.location })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[14px] font-light leading-relaxed text-muted-foreground sm:text-[15px]", children: "Full-stack systems, resilient backends, and applied AI — built to ship and stay operable." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-col items-center md:items-start", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px w-12 bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `tel:${resume.phone.replace(/\s/g, "")}`, className: "mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent", children: resume.phone }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: `mailto:${site.email}`, "aria-label": "Email", className: "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 16 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.linkedin, target: "_blank", rel: "noreferrer", "aria-label": "LinkedIn", className: "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 16 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.github, target: "_blank", rel: "noreferrer", "aria-label": "GitHub", className: "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 16 }) }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.instagram, target: "_blank", rel: "noreferrer", "aria-label": "Instagram", className: "flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 16 }) })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex flex-col justify-between gap-8 overflow-hidden bg-primary p-7 text-center text-primary-foreground sm:p-8 md:text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/45 blur-3xl", style: {
            animation: "blob 18s ease-in-out infinite"
          } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -bottom-14 left-0 h-36 w-36 rounded-full bg-accent/20 blur-3xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] opacity-70", children: "[ DOWNLOAD ]" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-[clamp(1.85rem,7.5vw,3.25rem)] leading-none whitespace-nowrap", children: [
              "Get the résumé",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-3 max-w-[22rem] text-[13px] font-light leading-relaxed opacity-80 md:mx-0 sm:text-sm", children: "Experience, projects, and stack — ready for roles or client work." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative space-y-2.5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.resume, download: "Rohan_Patel_Resume.pdf", className: "flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90", children: "Download PDF" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: open, className: "flex w-full items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10", children: "Get in touch" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { role: "tablist", "aria-label": "Résumé view", className: "flex rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-1 font-mono text-[10px] uppercase tracking-[0.16em]", children: ["web", "pdf"].map((v) => /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { type: "button", role: "tab", "aria-selected": view === v, onClick: () => setView(v), className: `flex-1 rounded-full px-3 py-2 transition-colors ${view === v ? "bg-primary-foreground text-primary" : "text-primary-foreground/60 hover:text-primary-foreground"}`, children: [
              "View ",
              v
            ] }, v)) })
          ] })
        ] })
      ] }) }) })
    ] }),
    view === "pdf" ? /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 py-16 sm:px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden rounded-2xl border border-border bg-muted", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Rohan Patel résumé", src: `${site.resume}#view=FitH`, className: "h-[80vh] min-h-[560px] w-full" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-4 text-center text-sm text-muted-foreground", children: [
        "Preview not loading?",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.resume, target: "_blank", rel: "noreferrer", className: "font-medium text-accent underline underline-offset-4", children: "Open the PDF" })
      ] })
    ] }) }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-16 sm:px-6 sm:pt-20", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto max-w-3xl", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ SUMMARY ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Overview" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-8 text-lg font-light leading-[1.8] text-muted-foreground sm:text-xl sm:leading-[1.75]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground", children: resume.summary }) })
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ EXPERIENCE ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Where I've worked" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-16", children: resume.experience.map((role, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.06, 0.18), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleEntry, { role }) }, role.org)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ FREELANCE ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Client work" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 space-y-16", children: resume.freelance.map((role, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.06, 0.18), children: /* @__PURE__ */ jsxRuntimeExports.jsx(RoleEntry, { role }) }, role.org)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ PROJECTS ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Selected builds" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 divide-y divide-border border-y border-border", children: resume.projects.map((project, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.05, 0.15), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "py-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline gap-x-4 gap-y-1", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl sm:text-3xl", children: project.name }),
            project.slug ? /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
              slug: project.slug
            }, className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:underline", children: "Case study →" }) : null
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5", children: project.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[15px] font-light leading-relaxed text-muted-foreground", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "mt-[0.7em] h-px w-3 shrink-0 bg-accent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
          ] }, point)) })
        ] }) }, project.name)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ SKILLS ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Stack" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 divide-y divide-border border-y border-border", children: resume.skills.map((group, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: Math.min(i * 0.04, 0.16), children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:pt-1", children: group.group }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base", children: group.items.join(" · ") })
        ] }) }, group.group)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ PUBLICATIONS ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Research" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 space-y-8", children: resume.publications.map((pub, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: i * 0.06, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-accent", children: pub.venue }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-lg font-medium leading-snug sm:text-xl", children: pub.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm font-light leading-relaxed text-muted-foreground", children: pub.detail })
        ] }) }, pub.title)) })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 pt-20 sm:px-6 sm:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-3xl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold tracking-[0.3em] text-muted-foreground", children: "[ BOOK ]" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-3 font-display text-4xl sm:text-5xl", children: "Hired by an Algorithm." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal, { delay: 0.08, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent", children: "Self-published · Jun 2025 · Amazon Kindle" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base", children: "A field guide to how ATS and hiring algorithms parse resumes — turning parser behavior into concrete writing rules so applications survive the algorithmic gate without losing clarity." }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.book, target: "_blank", rel: "noreferrer", className: "inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90", children: "Get the book on Amazon →" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/projects/$slug", params: {
              slug: "hired-by-algorithm"
            }, className: "inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted", children: "Case study" })
          ] })
        ] })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "px-4 py-20 sm:px-6 sm:py-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-10 md:p-14", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/40 blur-3xl", style: {
          animation: "blob 18s ease-in-out infinite"
        } }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-xs font-semibold tracking-[0.3em] opacity-70", children: "[ NEXT ]" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "relative mt-4 font-display text-4xl sm:text-6xl md:text-7xl", children: [
          "Let's talk",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-4 max-w-md text-sm opacity-80 sm:text-base", children: "Grab the PDF, or write me about a role that fits." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-8 flex flex-wrap items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: site.resume, download: "Rohan_Patel_Resume.pdf", className: "inline-flex items-center justify-center rounded-full border border-transparent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:px-7 sm:py-3", children: "Download PDF" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { strength: 0.08, children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", { type: "button", onClick: open, className: "inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3", children: "Write me" }) })
        ] })
      ] }) }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(SiteFooter, {})
  ] });
}
function RoleEntry({
  role
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("article", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-3xl leading-[0.95] sm:text-4xl", children: role.org }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground", children: role.period })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-2 text-sm font-medium text-accent", children: [
      role.role,
      role.location ? /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-normal text-muted-foreground", children: [
        " ",
        "· ",
        role.location
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 space-y-5", children: role.blocks.map((block, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      block.label ? /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground", children: block.label }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-2.5", children: block.points.map((point) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 text-[15px] font-light leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { "aria-hidden": true, className: "mt-[0.7em] h-px w-3 shrink-0 bg-accent" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: point })
      ] }, point)) })
    ] }, block.label ?? i)) })
  ] });
}
export {
  Resume as component
};
