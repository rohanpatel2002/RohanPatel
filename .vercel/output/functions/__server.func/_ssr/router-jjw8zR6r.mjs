import { Q as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { Q as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { c as createRouter, a as createRootRouteWithContext, u as useRouter, L as Link, b as useRouterState, O as Outlet, H as HeadContent, S as Scripts, d as createFileRoute, l as lazyRouteComponent } from "../_libs/tanstack__react-router.mjs";
import { J as notFound } from "../_libs/tanstack__router-core.mjs";
import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { L as Lenis } from "../_libs/lenis.mjs";
import { T as Toaster, t as toast } from "../_libs/sonner.mjs";
import { g } from "../_libs/marked.mjs";
import { m as motion, A as AnimatePresence, u as useMotionValue, a as useSpring, b as useInView, c as useTransform } from "../_libs/framer-motion.mjs";
import { X, M as Mail, L as Linkedin, G as Github, I as Instagram, S as Send } from "../_libs/lucide-react.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const appCss = "/assets/styles-QP_gj2GQ.css";
const TARGET = ["R", "O", "H", "A", "N", "."];
const SCRAMBLE_DURATION = 900;
const LOCK_STAGGER = 150;
const EXIT_DELAY = 350;
function randomTarget() {
  return TARGET[Math.floor(Math.random() * TARGET.length)];
}
function GlitchText({
  displayed,
  locked
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col items-center gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-[0.01em]", children: displayed.map((ch, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    "span",
    {
      className: "inline-block font-display leading-none text-[18vw] sm:text-[13vw]",
      style: {
        fontFamily: "Anton, Impact, system-ui, sans-serif",
        textTransform: "uppercase",
        color: i === TARGET.length - 1 ? "var(--accent)" : locked[i] ? "oklch(0.97 0.005 90)" : "oklch(0.35 0.01 270)",
        transition: "color 80ms"
      },
      children: ch
    },
    i
  )) }) });
}
function Loader({ onComplete }) {
  const [displayed, setDisplayed] = reactExports.useState(
    () => TARGET.map(randomTarget)
  );
  const [locked, setLocked] = reactExports.useState(TARGET.map(() => false));
  const [exit, setExit] = reactExports.useState(false);
  const timerRef = reactExports.useRef(null);
  const lockedRef = reactExports.useRef(TARGET.map(() => false));
  reactExports.useEffect(() => {
    const scramble = () => {
      setDisplayed(
        (prev) => prev.map((_, i) => lockedRef.current[i] ? TARGET[i] : randomTarget())
      );
      timerRef.current = setTimeout(scramble, 50);
    };
    timerRef.current = setTimeout(scramble, 50);
    TARGET.forEach((_, i) => {
      setTimeout(() => {
        lockedRef.current[i] = true;
        setLocked((prev) => {
          const n = [...prev];
          n[i] = true;
          return n;
        });
        setDisplayed((prev) => {
          const n = [...prev];
          n[i] = TARGET[i];
          return n;
        });
        if (i === TARGET.length - 1) {
          setTimeout(() => setExit(true), EXIT_DELAY);
        }
      }, SCRAMBLE_DURATION + i * LOCK_STAGGER);
    });
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);
  const panel = {
    initial: { y: "0%" },
    exit: (dir) => ({
      y: `${dir * 105}%`,
      transition: {
        duration: 1.1,
        delay: dir === 1 ? 0.08 : 0,
        ease: [0.65, 0, 0.35, 1]
      }
    })
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { onExitComplete: onComplete, children: !exit && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "pointer-events-none fixed inset-0 z-[9999] bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        custom: -1,
        variants: panel,
        initial: "initial",
        exit: "exit",
        className: "fixed inset-x-0 top-0 z-[9999] overflow-hidden bg-[oklch(0.1_0.005_270)]",
        style: { height: "50vh" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 flex items-center justify-center",
            style: { top: 0, height: "100vh" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { displayed, locked })
          }
        )
      },
      "top"
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        custom: 1,
        variants: panel,
        initial: "initial",
        exit: "exit",
        className: "fixed inset-x-0 bottom-0 z-[9999] overflow-hidden bg-[oklch(0.1_0.005_270)]",
        style: { height: "50vh" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute inset-x-0 flex items-center justify-center",
            style: { top: "-50vh", height: "100vh" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(GlitchText, { displayed, locked })
          }
        )
      },
      "bottom"
    )
  ] }) });
}
function Reveal({ children, delay = 0, y = 16 }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      initial: { y, opacity: 0 },
      animate: inView ? { y: 0, opacity: 1 } : {},
      transition: { duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] },
      children
    }
  );
}
function WordReveal({ text, className = "" }) {
  const ref = reactExports.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const words = text.split(" ");
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className, children: words.map((w, i) => /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-block overflow-hidden align-bottom", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.span,
    {
      className: "inline-block",
      initial: { y: "100%" },
      animate: inView ? { y: 0 } : {},
      transition: { duration: 0.45, delay: Math.min(i * 0.04, 0.3), ease: [0.22, 1, 0.36, 1] },
      children: [
        w,
        i < words.length - 1 ? " " : null
      ]
    }
  ) }, i)) });
}
function Magnetic({ children, strength = 0.3 }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    x.set((clientX - centerX) * strength);
    y.set((clientY - centerY) * strength);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: { x: springX, y: springY },
      children
    }
  );
}
function Tilt({ children, intensity = 15 }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), { stiffness: 150, damping: 15 });
  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    x.set((e.clientX - left) / width - 0.5);
    y.set((e.clientY - top) / height - 0.5);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      ref,
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      style: { rotateX, rotateY, perspective: 1e3 },
      className: "h-full w-full",
      children
    }
  );
}
function PageTransition({
  children,
  routeKey
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 0.18, ease: [0.22, 1, 0.36, 1] },
      children
    },
    routeKey
  );
}
const site = {
  name: "Rohan Patel",
  title: "Software Engineer",
  /** Swap to your live domain — used for canonicals, OG, and sitemap. */
  url: "https://rohanpatel.dev",
  email: "rohanpatel.swe@gmail.com",
  github: "https://github.com/rohanpatel2002",
  linkedin: "https://www.linkedin.com/in/rohanpatel-eng/",
  instagram: "https://www.instagram.com/rohann.patel21/",
  book: "https://www.amazon.in/Hired-Algorithm-Rohan-Patel-ebook/dp/B0FG3DSQ7W",
  resume: "/Rohan_Patel_Resume.pdf",
  orcid: "https://orcid.org/0009-0007-8018-7870",
  location: "Gujarat, India",
  ogImage: "/og-default.svg",
  tagline: "Software Engineer building production systems from interface to infrastructure.",
  summary: "I ship end-to-end products, resilient backends, deployment safety nets, and applied AI — including customer-facing delivery when the problem is still ambiguous."
};
function absoluteUrl(path = "/") {
  const base = site.url.replace(/\/$/, "");
  if (!path || path === "/") return base;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}
function absoluteOgImage(path) {
  return absoluteUrl(site.ogImage);
}
function personJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location
    },
    sameAs: [site.github, site.linkedin, site.instagram, site.orcid, site.book]
  };
}
function blogJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: `Writing — ${site.name}`,
    description: "Field notes on systems, AI, backends, and shipping from Rohan Patel.",
    url: absoluteUrl("/blog"),
    author: { "@type": "Person", name: site.name, url: site.url }
  };
}
function blogPostingJsonLd(post) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    author: {
      "@type": "Person",
      name: site.name,
      url: site.url
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    image: absoluteOgImage(),
    keywords: post.keywords.join(", "),
    articleSection: post.tag
  };
}
function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path)
    }))
  };
}
function pageSeo({
  title,
  description,
  path,
  type = "website",
  publishedTime,
  tags
}) {
  const url = absoluteUrl(path);
  const image = absoluteOgImage();
  const meta = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: type },
    { property: "og:url", content: url },
    { property: "og:image", content: image },
    { property: "og:site_name", content: site.name },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: image }
  ];
  if (type === "article") {
    meta.push({
      property: "article:author",
      content: site.name
    });
    if (publishedTime) {
      meta.push({
        property: "article:published_time",
        content: publishedTime
      });
    }
    for (const tag of tags ?? []) {
      meta.push({ property: "article:tag", content: tag });
    }
  }
  return {
    meta,
    links: [{ rel: "canonical", href: url }]
  };
}
function jsonLdScript(data) {
  return {
    type: "application/ld+json",
    children: JSON.stringify(data)
  };
}
const socialIconClass = "flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted";
function ContactModal({ isOpen, onClose }) {
  const [pending, setPending] = reactExports.useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();
    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }
    setPending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}

${message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    setPending(false);
    onClose();
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isOpen && /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      className: "fixed inset-0 z-[100] flex items-end justify-center bg-background/80 backdrop-blur-xl md:items-center md:p-8",
      onClick: onClose,
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: { y: "100%", opacity: 1 },
          animate: { y: 0, opacity: 1 },
          exit: { y: "100%", opacity: 0 },
          transition: { type: "spring", damping: 28, stiffness: 320 },
          onClick: (e) => e.stopPropagation(),
          className: "relative flex max-h-[min(100dvh,100%)] w-full flex-col overflow-hidden rounded-t-[1.75rem] border border-border bg-card md:max-h-[90vh] md:max-w-6xl md:rounded-[2rem]",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex shrink-0 flex-col items-center pt-3 md:hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1 w-10 rounded-full bg-border", "aria-hidden": true }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: onClose,
                className: "absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted md:right-6 md:top-6 md:h-12 md:w-12",
                "aria-label": "Close contact form",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { size: 18 })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid min-h-0 flex-1 gap-0 overflow-y-auto overscroll-contain p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:grid-cols-2 md:gap-8 md:p-16", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center md:items-stretch md:justify-between md:space-y-12", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "w-full text-center md:text-left", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-semibold tracking-[0.3em] text-accent uppercase md:text-xs", children: "[ CONTACT ]" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 font-display text-4xl leading-none md:hidden", children: [
                    "Let's talk",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-6 hidden font-display text-5xl sm:text-7xl md:block", children: [
                    "Let's start a",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "conversation."
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground sm:max-w-sm md:mx-0 md:mt-6 md:max-w-md md:text-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "md:hidden", children: "Team, problem, or research direction — say hello." }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "hidden md:inline", children: "Say hello if you have a team, problem, or research direction that fits." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-5 flex justify-center gap-3 md:hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: `mailto:${site.email}`,
                      "aria-label": "Email",
                      className: socialIconClass,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { size: 18, className: "text-accent" })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: site.linkedin,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "LinkedIn",
                      className: socialIconClass,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: site.github,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "GitHub",
                      className: socialIconClass,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 18 })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: site.instagram,
                      target: "_blank",
                      rel: "noreferrer",
                      "aria-label": "Instagram",
                      className: socialIconClass,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 18 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-auto hidden space-y-6 md:block", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: `mailto:${site.email}`,
                      className: "flex items-center gap-4 text-xl transition-colors hover:text-accent break-all",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "shrink-0 text-accent" }),
                        " ",
                        site.email
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: site.linkedin,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "LinkedIn",
                        className: socialIconClass,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Linkedin, { size: 20 })
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: site.github,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "GitHub",
                        className: socialIconClass,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Github, { size: 20 })
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Magnetic, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "a",
                      {
                        href: site.instagram,
                        target: "_blank",
                        rel: "noreferrer",
                        "aria-label": "Instagram",
                        className: socialIconClass,
                        children: /* @__PURE__ */ jsxRuntimeExports.jsx(Instagram, { size: 20 })
                      }
                    ) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "form",
                {
                  onSubmit: handleSubmit,
                  className: "mt-6 flex flex-col gap-3 border-t border-border pt-5 md:mt-0 md:gap-4 md:border-0 md:pt-0",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Field,
                      {
                        id: "contact-name",
                        name: "name",
                        label: "Full Name",
                        type: "text",
                        placeholder: "Your name"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Field,
                      {
                        id: "contact-email",
                        name: "email",
                        label: "Email Address",
                        type: "email",
                        placeholder: "you@company.com"
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 md:space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "label",
                        {
                          htmlFor: "contact-message",
                          className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs",
                          children: "Message"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "textarea",
                        {
                          id: "contact-message",
                          name: "message",
                          required: true,
                          rows: 3,
                          placeholder: "Role, team, or problem — whatever you want to talk about.",
                          className: "w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent md:rounded-2xl md:px-6 md:py-4"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs(
                      "button",
                      {
                        type: "submit",
                        disabled: pending,
                        className: "group relative mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary py-3.5 font-display text-base text-primary-foreground transition-all active:scale-[0.98] disabled:opacity-50 md:mt-2 md:rounded-2xl md:py-5 md:text-xl",
                        children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-2", children: [
                            pending ? "OPENING…" : "SEND MESSAGE",
                            /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { size: 16, className: pending ? "animate-pulse" : "" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-0" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-center text-[10px] leading-relaxed text-muted-foreground md:text-left md:text-xs", children: [
                      "Opens your email client with a draft to ",
                      site.email,
                      "."
                    ] })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  ) });
}
function Field({
  id,
  name,
  label,
  type,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5 md:space-y-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "label",
      {
        htmlFor: id,
        className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs",
        children: label
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        id,
        name,
        required: true,
        type,
        placeholder,
        className: "w-full rounded-xl border border-border bg-muted/50 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent md:rounded-2xl md:px-6 md:py-4"
      }
    )
  ] });
}
const EVENT_NAME = "toggle-contact-modal";
function useContactModal() {
  const [isOpen, setIsOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const handleToggle = (e) => {
      const customEvent = e;
      setIsOpen(customEvent.detail.isOpen);
    };
    window.addEventListener(EVENT_NAME, handleToggle);
    return () => window.removeEventListener(EVENT_NAME, handleToggle);
  }, []);
  const open = () => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { isOpen: true } }));
  };
  const close = () => {
    window.dispatchEvent(new CustomEvent(EVENT_NAME, { detail: { isOpen: false } }));
  };
  return { isOpen, open, close };
}
const rootSeo = pageSeo({
  title: "Rohan Patel — Software Engineer | Full-Stack, DevOps & Applied AI",
  description: "Software Engineer building production systems from interface to infrastructure. Author of Hired by an Algorithm.",
  path: "/"
});
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "font-display text-8xl", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "This page doesn't exist." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "mt-6 inline-block rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground",
        children: "Go home"
      }
    )
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => {
          router2.invalidate();
          reset();
        },
        className: "mt-4 rounded-md bg-primary px-4 py-2 text-sm text-primary-foreground",
        children: "Try again"
      }
    )
  ] }) });
}
const Route$a = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      ...rootSeo.meta
    ],
    links: [
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700&display=swap"
      },
      ...rootSeo.links
    ],
    scripts: [jsonLdScript(personJsonLd())]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$a.useRouteContext();
  const [loaded, setLoaded] = reactExports.useState(false);
  const { isOpen, close } = useContactModal();
  const router2 = useRouter();
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;
  const lenisRef = reactExports.useRef(null);
  const jumpTop = () => {
    lenisRef.current?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  };
  reactExports.useEffect(() => {
    if (!loaded) return;
    const lenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
      infinite: false
    });
    lenisRef.current = lenis;
    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, [loaded]);
  reactExports.useEffect(() => {
    if (!loaded) return;
    const unsub = router2.subscribe("onBeforeNavigate", ({ pathChanged }) => {
      if (pathChanged) jumpTop();
    });
    return unsub;
  }, [router2, loaded]);
  reactExports.useLayoutEffect(() => {
    if (!loaded) return;
    jumpTop();
  }, [currentPath, loaded]);
  const handleLoaderComplete = () => setLoaded(true);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(QueryClientProvider, { client: queryClient, children: [
    !loaded && /* @__PURE__ */ jsxRuntimeExports.jsx(Loader, { onComplete: handleLoaderComplete }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        animate: { opacity: loaded ? 1 : 0 },
        transition: { duration: 0.6, ease: "easeOut" },
        style: { pointerEvents: loaded ? "auto" : "none" },
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(PageTransition, { routeKey: currentPath, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {}) })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ContactModal, { isOpen, onClose: close }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, { position: "bottom-right" })
  ] });
}
const $$splitComponentImporter$9 = () => import("./services-AFy9xIAC.mjs");
const Route$9 = createFileRoute("/services")({
  head: () => ({
    meta: [{
      title: "Services — Rohan Patel"
    }, {
      name: "description",
      content: "Expertise in Full-Stack Systems, AI Integration, Backend APIs, and DevOps."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./resume-DzTJYVjv.mjs");
const Route$8 = createFileRoute("/resume")({
  head: () => ({
    meta: [{
      title: "Résumé — Rohan Patel"
    }, {
      name: "description",
      content: "Résumé of Rohan Patel — Software Engineer focused on full-stack, DevOps, and applied AI systems."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./projects-IJ6xWIfp.mjs");
const Route$7 = createFileRoute("/projects")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./blog-9Hd3AP52.mjs");
const Route$6 = createFileRoute("/blog")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./about-DqdzAON9.mjs");
const Route$5 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About — Rohan Patel"
    }, {
      name: "description",
      content: "Software Engineer building production-grade systems across full-stack product engineering, backend architecture, DevOps reliability, and applied AI delivery."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./index-DVIOxtSG.mjs");
const Route$4 = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Rohan Patel — Software Engineer | Full-Stack, DevOps & Applied AI"
    }, {
      name: "description",
      content: "Software Engineer building production systems from interface to infrastructure. Author of Hired by an Algorithm."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./projects.index-CMGso5iN.mjs");
const Route$3 = createFileRoute("/projects/")({
  head: () => ({
    meta: [{
      title: "Projects — Rohan Patel"
    }, {
      name: "description",
      content: "Selected works by Rohan Patel — production systems spanning deployment safety, AI document retrieval, code review automation, and published research."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./blog.index-D8q_iQc_.mjs");
const seo = pageSeo({
  title: "Writing — Rohan Patel",
  description: "Field notes on systems, AI, backends, and shipping — essays by Software Engineer Rohan Patel.",
  path: "/blog"
});
const Route$2 = createFileRoute("/blog/")({
  head: () => ({
    meta: seo.meta,
    links: seo.links,
    scripts: [jsonLdScript([blogJsonLd(), personJsonLd()])]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const projects = [
  {
    slug: "ironclad",
    name: "IronClad",
    tag: "Deployment Safety · Go",
    blurb: "A deployment gate that evaluates deploy intent using live dependencies, incident history, and semantic risk scoring — preventing risky pushes before they ship.",
    meta: "Apache 2.0 · Go · Python · TypeScript",
    repoUrl: "https://github.com/rohanpatel2002/IronClad",
    roles: ["SWE / SDE", "DevOps", "Systems"],
    status: "Open source · monorepo in active build",
    problem: "Modern CI pipelines answer whether code compiles, tests pass, and lint is clean. They rarely ask whether a change is semantically dangerous for current production conditions — blast radius, reversibility, or historically bad deploy windows.",
    solution: "IRONCLAD sits in front of CI/CD promotion as a semantic deployment risk engine. For each candidate it maps affected services, correlates incident/deploy history, scores risk across blast radius, reversibility, and timing, then returns ALLOW, WARN, or BLOCK with a plain-English explanation and mitigation.",
    outcomes: [
      "Validates safety of deployment intent — not just correctness of code",
      "Scores blast radius, reversibility, and timing risk as first-class axes",
      "Emits ALLOW / WARN / BLOCK with actionable explanations for operators"
    ],
    highlights: [
      "Blast radius: how many downstream services and journeys are exposed if the change fails",
      "Reversibility: can the deploy be rolled back within an org-defined SLO (e.g. under 60 seconds)",
      "Timing risk: peak traffic, post-migration windows, thin on-call coverage",
      "Immutable decision explanations for audit and post-mortems"
    ],
    architecture: [
      "Ingest deploy request + diff metadata from CI/CD",
      "Classify change intent (functional, infra, migration, rollout)",
      "Resolve impact graph from changed components",
      "Score risk axes and consult historical failure grammar / incidents",
      "Emit decision + explanation; log outcome for learning"
    ],
    stackLayers: [
      { layer: "Gate + interceptors", tech: "Go" },
      { layer: "Topology / blast radius", tech: "Go" },
      { layer: "Semantic + scoring", tech: "Python" },
      { layer: "Dashboard", tech: "TypeScript + React" },
      { layer: "Data store", tech: "PostgreSQL" }
    ],
    specs: {
      License: "Apache 2.0",
      Decision: "ALLOW / WARN / BLOCK",
      Latency: "P95 goal < 2s",
      Layout: "Monorepo services + dashboard"
    },
    codeSnippet: `func (g *Gate) Evaluate(intent DeploymentIntent) (RiskScore, error) {
	// Fan-out check across incident history and live dependencies
	g.mu.RLock()
	defer g.mu.RUnlock()

	score := g.RiskModel.Calculate(intent)
	if score > g.Threshold {
		return score, ErrHighRiskDeployment
	}
	return score, nil
}`,
    content: "IRONCLAD is a semantic production risk gate: it asks whether what the code is trying to do matches what the system can safely absorb right now. Traditional pipelines validate correctness; IRONCLAD validates deploy intent against dependency topology, incident history, and timing intelligence."
  },
  {
    slug: "docentra",
    name: "Docentra",
    tag: "AI Document Assistant · Go",
    blurb: "AI-powered document assistant with semantic search using Go, pgvector, and fastembed for intelligent retrieval across private document libraries.",
    meta: "Open Source · Go · pgvector · Docker",
    repoUrl: "https://github.com/rohanpatel2002/Docentra",
    roles: ["AI Engineer", "Backend", "Full-Stack"],
    status: "Open source · Docker Compose ready",
    problem: "Teams need meaning-based search over private TXT/PDF libraries without shipping documents into a third-party black box. Keyword search misses intent; managed RAG often means data leaving your boundary.",
    solution: "Docentra is a secure Go API for JWT-authenticated document upload, parsing, background embedding, and semantic search/query over Postgres with pgvector. A Python FastEmbed CLI produces embeddings; Docker Compose runs the full stack locally.",
    outcomes: [
      "JWT-authenticated APIs for document management and vector search",
      "Upload → extract → chunk → embed → store pipeline for TXT/PDF",
      "Similarity search via pgvector without outsourcing the corpus"
    ],
    highlights: [
      "POST /api/documents uploads a file and triggers async processing",
      "Python FastEmbed CLI with model BAAI/bge-small-en-v1.5",
      "POST /api/search and POST /api/query embed the query and rank chunks",
      "Health endpoint and Compose-first local development"
    ],
    architecture: [
      "Client hits Go API (Chi + GORM)",
      "API stores uploads and document metadata in Postgres",
      "Background processing extracts text, chunks it, and calls FastEmbed CLI",
      "Chunk embeddings land in document_chunks via pgvector",
      "Search/query embeds the question and runs similarity (`<=>`)"
    ],
    stackLayers: [
      { layer: "API", tech: "Go · Chi · GORM" },
      { layer: "Embeddings", tech: "Python · fastembed · bge-small-en-v1.5" },
      { layer: "Database", tech: "Postgres + pgvector" },
      { layer: "Runtime", tech: "Docker + Docker Compose" }
    ],
    specs: {
      Auth: "JWT",
      Search: "pgvector similarity",
      Formats: "TXT / PDF",
      Runtime: "Docker Compose"
    },
    codeSnippet: `func (s *Search) Query(text string) ([]Document, error) {
	vector, err := s.Embedder.Generate(text)
	if err != nil {
		return nil, err
	}

	// Cosine similarity search via pgvector
	return s.DB.SearchVectors("embeddings", vector, 10)
}`,
    content: "Docentra is a private-document semantic search stack: Go for auth and orchestration, FastEmbed for vectors, and Postgres/pgvector for retrieval. Built for RAG-style workflows where the library stays under your control."
  },
  {
    slug: "tribunal",
    name: "Tribunal",
    tag: "AI Code Review · Go · Python · TS",
    blurb: "The missing code review layer — AI that reviews what the AI wrote. Detects AI-generated code in PRs, analyzes context blindness, and briefs human reviewers.",
    meta: "MIT · Go · Python · TypeScript",
    repoUrl: "https://github.com/rohanpatel2002/Tribunal",
    roles: ["AI Engineer", "Full-Stack", "Forward Deployed"],
    status: "Early development · beta targeted Q2 2026",
    problem: "AI tools write syntactically impressive code that is often semantically dangerous — migrations that ignore table scale, retries against non-idempotent APIs, config flips with wide blast radius. Linters catch syntax; they miss operational context. Human senior review does not scale with Copilot volume.",
    solution: "TRIBUNAL acts as an automated senior engineer in CI: DETECT AI authorship, ANALYZE context blindness against topology/incidents/runbooks, BRIEF the human reviewer so review time drops from roughly 30 minutes to about 30 seconds per change with full operational context.",
    outcomes: [
      "Three-phase pipeline: detect → analyze → brief",
      "Flags scale, idempotency, cascade, incident-pattern, and race-condition blindness",
      "Posts human-readable briefings into the PR review flow"
    ],
    highlights: [
      "Scale blindness — e.g. migrations on multi-billion-row tables with zero-downtime constraints",
      "Idempotency blindness — retries against non-idempotent payment/API calls",
      "Cascade blindness — config/flag changes spanning dozens of services",
      "Incident pattern blindness — repeating known failure modes",
      "Dependency and race-condition blindness in shared libraries and concurrent code"
    ],
    architecture: [
      "PR event from GitHub / GitLab / Gitea",
      "Go interceptor: webhook, changed files, 3-signal AI authorship detection",
      "Go context graph: topology, incidents, dependencies",
      "PostgreSQL context layer for persistent correlations",
      "Python semantic analyzer (Claude) + briefing generator",
      "TypeScript PR overlay: check runs, annotations, risk heatmap"
    ],
    stackLayers: [
      { layer: "PR interceptor / detector", tech: "Go 1.21+" },
      { layer: "Context graph", tech: "Go" },
      { layer: "Semantic analyzer", tech: "Python 3.11+ · Claude API" },
      { layer: "PR UI overlay", tech: "TypeScript + React" },
      { layer: "Data layer", tech: "PostgreSQL 15+" }
    ],
    specs: {
      License: "MIT",
      Detect: "~2ms / file (Go)",
      Analyze: "~5s high-risk section",
      Runtime: "Docker Compose"
    },
    codeSnippet: `async function analyzePR(diff: string) {
	const analysis = await tribunal.analyze(diff);
	
	if (analysis.isAiGenerated && analysis.riskFactor > 0.7) {
		await github.postComment(analysis.brief);
	}
}`,
    content: "TRIBUNAL fills the gap between perfect syntax and catastrophic semantics. It specializes in what AI-generated diffs did not know — service scale, incident history, dependency blast radius — and briefs humans so review capacity can keep up with AI authorship."
  },
  {
    slug: "hired-by-algorithm",
    name: "Hired by an Algorithm",
    tag: "Book · 2025",
    blurb: "A self-published guide on perfecting your resume — covering achievements, experience, and the mechanics of modern algorithmic hiring.",
    meta: "Self-published · Jun 2025",
    productUrl: "https://www.amazon.in/Hired-Algorithm-Rohan-Patel-ebook/dp/B0FG3DSQ7W",
    roles: ["Systems Thinking", "Research", "Writing"],
    status: "Published",
    problem: "Applicants write for humans. Hiring funnels first parse resumes with ATS and ranking systems that flatten layout, map section headers to taxonomies, and weigh proximity of verbs to metrics.",
    solution: "Hired by an Algorithm turns parser behavior into concrete document contracts: context density, canonical section schemas, and optical stream flattening — so resumes survive the algorithmic gate without sacrificing clarity.",
    outcomes: [
      "Distills ATS and hiring-algorithm behavior into actionable writing rules",
      "Informed by research across 60+ document parsers",
      "Published as a system-centric guide for modern job search"
    ],
    highlights: [
      "Context density — action verbs coupled with absolute metrics",
      "Canonical headers that map to standard taxonomy nodes",
      "Single-column flow that survives OCR / stream flattening"
    ],
    architecture: [
      "Study how parsers extract and score resume text",
      "Encode rules as document engineering contracts",
      "Publish actionable guidance for applicants and builders"
    ],
    stackLayers: [
      { layer: "Research", tech: "60+ document parsers" },
      { layer: "Format", tech: "System-centric writing" },
      { layer: "Distribution", tech: "Amazon Kindle" }
    ],
    specs: {
      Topic: "ATS Optimization",
      Research: "60+ Document Parsers",
      Format: "Ebook",
      Status: "Published"
    },
    codeSnippet: `// Rule: Optical Stream Flattening
func Normalize(layout Node) string {
	if layout.IsMultiColumn() {
		return Flatten(layout)
	}
	return layout.Text()
}`,
    content: "Hired by an Algorithm is a field guide to how applicant tracking systems and hiring algorithms actually parse resumes. It turns parser quirks into engineering-style contracts."
  }
];
const services = [
  {
    n: "01",
    title: "Full-Stack Systems",
    body: "End-to-end web applications built with React, TypeScript, Node, and Go — engineered for scale and clarity."
  },
  {
    n: "02",
    title: "AI Integration",
    body: "LLMs, RAG, vector search, and LangChain in real products — with guardrails that actually hold."
  },
  {
    n: "03",
    title: "Backend & APIs",
    body: "Django, REST, gRPC, PostgreSQL, MongoDB. Clean contracts, predictable performance, observable systems."
  },
  {
    n: "04",
    title: "DevOps & CI/CD",
    body: "Pipelines, infrastructure, and deployment safety nets so teams ship faster without breaking things."
  }
];
const $$splitComponentImporter$1 = () => import("./projects._slug-B8uFySlC.mjs");
const Route$1 = createFileRoute("/projects/$slug")({
  loader: ({
    params
  }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw new Error("Project not found");
    const idx = projects.findIndex((p) => p.slug === params.slug);
    return {
      project,
      prev: projects[(idx - 1 + projects.length) % projects.length],
      next: projects[(idx + 1) % projects.length],
      index: idx + 1,
      total: projects.length
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [{
      title: `${loaderData?.project.name ?? "Project"} — Rohan Patel`
    }, {
      name: "description",
      content: loaderData?.project.blurb ?? "Project by Rohan Patel"
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const __vite_glob_0_0 = '---\ntitle: "AI Reviewing AI: The Missing Layer"\ndescription: When models write the PR, classic review still misses context the model never saw. A field report from building Tribunal.\ndate: 2026-04-12\ntag: AI\nkeywords: AI code review, LLM, pull requests, Tribunal, software engineering\nrelatedProject: tribunal\ndraft: false\n---\n\nWe already live in a world where a non-trivial share of diffs are model-authored. The review ritual barely changed. That mismatch is the bug.\n\nHumans reviewing humans assume shared context: the incident last week, the migration still rolling out, the service that must not take a schema lock on Fridays. Models do not inherit that context unless you put it in the prompt — and even then, they optimize for local coherence, not organizational memory.\n\n## What classic review still catches\n\nStyle, obvious logic errors, missing tests, API smell. Good reviewers still earn their keep.\n\n## What classic review systematically misses on AI diffs\n\n- **Confident wrongness** — fluent code that violates an unstated invariant\n- **Cross-service blindness** — a “clean” change that breaks a contract two repos away\n- **Generated patterns at scale** — the same unsafe abstraction pasted across services\n- **Missing negative space** — what the model did *not* update (callers, dashboards, runbooks)\n\nWhen the author is an LLM, the probability of locally pretty, globally dangerous code goes up. Review volume goes up too. You cannot hire your way out of that curve forever.\n\n## The missing layer\n\nTribunal’s premise: semantic pull-request analysis aimed at AI-shaped risk — not another linter that nags about import order.\n\nUseful signals:\n\n- Likelihood the change is primarily model-generated (and therefore needs different scrutiny)\n- Semantic drift against stated architecture constraints\n- Topology-aware risk: which services sit downstream of the touched surface\n- Explanations a human can dispute in review comments\n\nThe output should feel like a sharp reviewer leaving notes, not a scoreboard.\n\n## Guardrails for AI reviewing AI\n\nRecursive nonsense is a real failure mode. If the reviewer model hallucinates policy, you have automated false confidence.\n\nMitigations I care about:\n\n- Ground claims in repo facts (ownership files, service catalogs, recent incidents) where possible\n- Prefer *questions and flags* over absolute verdicts\n- Keep a human as the merge authority\n- Log model rationale for audit when the call is close\n\n## Tradeoffs\n\n**Latency vs depth.** Full-repo agents are slow and expensive. Targeted analysis on the diff + neighborhood graph is the practical path.\n\n**False accusation.** Labeling a human PR as “AI-generated” is a social grenade. Treat provenance as a *scrutiny hint*, not a moral judgment.\n\n**Policy encoding.** Architecture rules must be machine-readable enough to check, or the tool becomes a chatty summarizer.\n\n## Takeaway\n\nAI authorship changes the prior on what a PR is likely to get wrong. The missing layer is review that understands that prior — semantic, topology-aware, and humble enough to ask humans the questions models skip.\n\nThat is the layer Tribunal is built to occupy.\n';
const __vite_glob_0_1 = "---\ntitle: Ambiguous Briefs and Forward-Deployed Habits\ndescription: When the client cannot specify the system yet, shipping still has a method. Habits from freelance and customer-facing delivery.\ndate: 2026-01-08\ntag: Product / Delivery\nkeywords: forward deployed engineer, freelance, client delivery, product engineering, shipping\ndraft: false\n---\n\nSome roles hand you a ticket. Others hand you a vague pain and a calendar. I have worked both. The second mode — closer to forward-deployed / freelance delivery — is where careers accelerate if you have habits, and stall if you only have frameworks.\n\nClimaGrowth and Florida Olive Oil were independent client builds. Coach Sophia and ROA work at Praalak demanded sitting with messy domain reality. The common thread: ambiguity is not a blocker; it is the job description.\n\n## Habits that beat “wait for requirements”\n\n**Ship a thin vertical slice in week one.** Not a slide. A path a user can touch. Ambiguity shrinks when something real exists.\n\n**Write the decision log.** Every choice you make without a stakeholder present needs a sentence in a shared place. Future-you will need it when priorities flip.\n\n**Name the unknowns out loud.** “We do not know peak concurrent field users yet, so we are capping X and measuring.” Silence reads as confidence you do not have.\n\n**Prefer reversible decisions.** Feature flags, soft launches, dual-writes with a kill switch. Ambiguous domains punish irreversible architecture.\n\n**Bring constraints early.** Budget, language, offline needs, compliance — surface them before the beautiful mock hardens wrong assumptions.\n\n## What forward-deployed is not\n\nIt is not “skip engineering rigor.” It is relocating rigor next to the problem. You still test. You still design authz. You still refuse to store secrets in the client. You just do it while the brief is still moving.\n\n## Client delivery specifics\n\nFreelance work taught me to:\n\n- Define done in demos, not adjectives (“fast”, “nice”)\n- Own deployment — a repo the client cannot run is unfinished\n- Document how to operate the thing after you leave\n- Price scope changes without drama by tying them to the decision log\n\nFlorida Olive Oil was a Shopify storefront — catalog, checkout, theme. Different stack, same habit: clarify merchandising constraints early, ship the purchase path, iterate presentation.\n\n## Tradeoffs\n\n**Speed vs debt.** Thin slices accrue debt; unmanaged debt becomes the next ambiguous crisis. Schedule repayments explicitly.\n\n**Proximity bias.** Sitting with one customer can overfit. Keep a second voice — data, another user, a domain expert.\n\n**Emotional labor.** Ambiguity work includes facilitation. That is real engineering time; track it.\n\n## Takeaway\n\nForward-deployed habits are how you create clarity instead of waiting for it: slice, decide aloud, reverse easily, measure, repeat. Recruiters call it ownership. I call it the only way ambiguous products ship.\n";
const __vite_glob_0_2 = "---\ntitle: A BFF Keeps Full-Stack Honest\ndescription: When the UI talks to five microservices directly, “full-stack” becomes glue debt. A backend-for-frontend is how product shape stays intentional.\ndate: 2026-06-14\ntag: Product / Delivery\nkeywords: BFF, full-stack, API design, frontend architecture, product delivery\ndraft: false\n---\n\nFull-stack used to mean one person could ship a feature. Too often it now means the browser is the integration layer.\n\nThat is not velocity. That is coupling with a CSS file.\n\n## What a BFF is for\n\nA backend-for-frontend is a thin server that speaks **product language** to the UI and **service language** to the domain:\n\n- Aggregate the three calls the screen needs into one\n- Shape DTOs for the view, not for storage\n- Enforce session auth once\n- Hide internal IDs, pagination quirks, and partial-failure modes\n\nThe React tree should not know that billing lives in service A and entitlements in service B.\n\n## Without a BFF, the frontend becomes the org chart\n\nEvery new microservice adds:\n\n- Another client SDK in the browser\n- Another loading / error state\n- Another CORS and versioning story\n- Another place to forget a header\n\nYou can “move fast” for one quarter. Then every feature is a distributed systems problem in `useEffect`.\n\n## Keep it thin on purpose\n\nA BFF that grows a second domain model is a new monolith with extra hops. Rules of thumb:\n\n- No long-lived business workflows that belong in a domain service\n- Mapping and aggregation yes; inventing policy no — call the service that owns the rule\n- Version the BFF with the app release when you can; do not forever-support three UI shapes\n\n## Full-stack ownership still matters\n\nThe win is not “frontend people never touch servers.” The win is **one place** where the product’s read/write story is coherent — owned by people who care about the screen *and* the failure modes behind it.\n\nThat is full-stack as a delivery model, not as a browser that speaks gRPC-Web to everything.\n";
const __vite_glob_0_3 = "---\ntitle: Blast Radius Is a Product Feature\ndescription: Dependency graphs are not only for architects. Making blast radius visible at deploy time changes who can say no — and why.\ndate: 2026-05-04\ntag: Systems / DevOps\nkeywords: blast radius, service topology, deployment risk, IronClad, distributed systems\nrelatedProject: ironclad\ndraft: false\n---\n\nEngineers talk about blast radius in war rooms. Product managers feel it as “everything’s down.” The gap between those two sentences is usually a missing visualization at the moment of change — not a missing postmortem template.\n\nBlast radius should be a first-class input to shipping, not a forensic detail afterward.\n\n## Why topology stays tribal knowledge\n\nIn most orgs, the dependency graph lives in someone’s head, a half-maintained wiki, or a dashboard nobody opens before merging. That works until the graph outgrows tribal memory.\n\nThen you get familiar failure modes:\n\n- A “small” config change fans out through a shared library\n- A migration locks a table that five services quietly share\n- A feature flag default flips a path that only weekend traffic exercises\n\nThe people closest to the change often have the least complete map of who else will feel it.\n\n## Making radius operable\n\nIn IronClad, blast radius is not a metaphor. It is a scored axis: how many downstream services and journeys are exposed if the change fails.\n\nThat requires three boring, valuable pieces:\n\n1. **Component identity** — what actually changed (service, package, schema, infra)\n2. **Edges that mean something** — sync calls, async topics, shared databases, deploy coupling\n3. **Journey labels** — not just service names, but user-visible flows you care about when paging\n\nYou do not need a perfect CMDB. You need a graph honest enough to say “this touches checkout and notifications” before promotion, not after Twitter.\n\n## Product thinking for a systems feature\n\nTreating blast radius as a product feature means designing for the operator, not the graph theorist:\n\n- Show the top impacted journeys in plain language\n- Distinguish hard edges (shared DB) from soft ones (best-effort webhook)\n- Surface uncertainty when the graph is incomplete\n- Tie radius to mitigation — “rollback path exists” vs “manual restore only”\n\nA number without a story is noise. A story without a decision path is theater.\n\n## What I got wrong early\n\nI over-indexed on completeness. Early drafts wanted every edge. Reality: partial graphs with explicit “unknown fan-out” beat fake precision.\n\nI also under-indexed on *journey* language. Service names impress architects. “Payments authorization” impresses the person who owns the customer impact.\n\n## Tradeoffs\n\n**Freshness cost.** Graphs rot. Prefer automated edges from deploy manifests and traffic over heroic quarterly audits.\n\n**Privacy of topology.** Some orgs treat service maps as sensitive. Gate UIs need the same access control as the systems they describe.\n\n**Alert fatigue.** High radius should not always mean BLOCK. Peak traffic plus high radius is different from a Sunday morning canary with a one-click rollback.\n\n## Takeaway\n\nBlast radius is how production risk becomes discussable before it becomes an incident channel. If your deploy UX cannot name who else is in the blast cone, you are shipping on hope.\n\nIronClad exists to make that cone visible — and to score it before the merge becomes irreversible.\n";
const __vite_glob_0_4 = "---\ntitle: CI That Asks “Should We?” Not Just “Can We?”\ndescription: ALLOW, WARN, and BLOCK are a culture, not a badge color. How to design promotion decisions humans will respect.\ndate: 2026-04-22\ntag: Systems / DevOps\nkeywords: CI/CD, deployment culture, ALLOW WARN BLOCK, release engineering, IronClad\nrelatedProject: ironclad\ndraft: false\n---\n\n“Can we deploy?” is a compiler question. “Should we deploy?” is an organizational one. Most pipelines only answer the first, then act surprised when the second bites them at 2 a.m.\n\nI care about the second question enough to encode it.\n\n## Three outcomes, not two\n\nBinary pass/fail trains binary behavior: green means ship, red means fight the tool. Reality has a middle.\n\n**ALLOW** — risk is within policy; proceed.  \n**WARN** — risk is elevated; a human should acknowledge ownership and mitigation.  \n**BLOCK** — risk exceeds policy; do not promote until conditions change.\n\nWARN is the cultural load-bearing wall. Without it, every uncomfortable case becomes either ignored green or contested red. With it, you create a deliberate pause that still respects urgency.\n\n## Designing decisions people won’t bypass\n\nA gate people route around is worse than no gate — it teaches contempt for controls.\n\nRules I use:\n\n- **Explain in English.** “Blocked because checkout + payments share a migration window with thin on-call” beats `ERR_RISK_THRESHOLD`.\n- **Name the mitigation.** Rollback SLO, canary plan, feature flag, hold until Monday.\n- **Log immutably.** Postmortems need the decision, not folklore.\n- **Keep latency human.** If evaluation takes longer than the deploy ritual, people will skip the ritual.\n\nIronClad’s contract is ALLOW / WARN / BLOCK with an actionable explanation. That is the product surface — not a dashboard full of unexplained scores.\n\n## Where “should we” gets its signal\n\n- Change classification (functional vs migration vs infra)\n- Dependency impact and blast radius\n- Reversibility estimate\n- Timing risk (traffic, ops coverage, recent incidents)\n- Historical failure grammar for similar intents\n\nNone of that replaces tests. It sits *in front of promotion* as a semantic layer.\n\n## Culture failure modes\n\n**WARN inflation.** If everything warns, nothing does. Calibrate with real incidents; retire noisy rules.\n\n**Hero overrides.** Overrides should exist and be audited. Silent overrides are how you get the same SEV twice.\n\n**Policy as code nobody owns.** Thresholds need a named steward — platform, SRE, or a guild — not a magic constant in a PR from 2024.\n\n## Takeaway\n\nCI that only asks “can we?” optimizes for merge velocity. CI that also asks “should we?” optimizes for surviving the merge. The useful vocabulary is three words — ALLOW, WARN, BLOCK — backed by explanations operators can argue with and learn from.\n\nThat vocabulary is what IronClad ships toward.\n";
const __vite_glob_0_5 = "---\ntitle: Compliance Engines in Go\ndescription: Certificate windows, multi-site shipments, and why business rules belong in a testable Go engine — not a spreadsheet and a prayer.\ndate: 2026-02-02\ntag: Backend\nkeywords: Go, compliance, GraphQL, Hasura, validation engine, domain logic\ndraft: false\n---\n\nCompliance is where product language and database rows refuse to match. “Is this shipment allowed under this certificate for this site in this date window?” sounds like a sentence. It behaves like a state machine with lawyers.\n\nAt Praalak, on the Regenerative Organic Alliance (ROA) traceability work, I designed a Go backend compliance engine that enforces certificate business rules — validating shipment dates against scope-certificate windows across multi-certificate, multi-site cases — and surfaced failures through GraphQL/Hasura into a React UI.\n\n## Why a dedicated engine\n\nScattered `if` statements in resolvers rot. Spreadsheets drift. The useful shape is a pure-ish domain engine:\n\n- Inputs: certificates, sites, shipment events, effective dates\n- Outputs: pass / fail with machine-readable reasons\n- Side effects: none in the core — persistence and GraphQL sit outside\n\nThat boundary makes unit tests possible. Compliance without tests is folklore.\n\n## Multi-certificate, multi-site reality\n\nReal orgs do not have one certificate and one warehouse. They have overlapping scopes, partial site coverage, and shipments that cross boundaries the PDF never explained clearly.\n\nThe engine has to:\n\n- Resolve which certificates could apply\n- Intersect date windows with shipment timestamps\n- Respect site scope, not just org-level paperwork\n- Emit errors a human can fix (which cert, which window, which site)\n\nAmbiguous failures (“invalid”) train users to ignore the system. Specific failures train users to correct data.\n\n## GraphQL as a delivery truck, not the brain\n\nHasura/GraphQL extensions were how we fed the UI and kept queries aligned with the validation surface. The brain stayed in Go. Putting rule logic in GraphQL schema directives alone would have made versioning and testing painful.\n\nFrontend (React + Ant Design) showed real-time validation errors so operators were not waiting for a nightly batch to learn they shipped wrong.\n\n## Tests are the product\n\nWe added Go tests for the engine and Vitest coverage on the UI paths that render failures. The valuable tests are tables of cases:\n\n- Shipment on the last valid day\n- Shipment one day after expiry\n- Site not on the certificate\n- Two certificates, only one covering the SKU/site combo\n\nIf you cannot express the rule as a table, you do not understand the rule yet.\n\n## Tradeoffs\n\n**Flexibility vs correctness.** Configurable rules sound nice until nobody can explain the config. Prefer code-reviewed rule modules for high-stakes constraints.\n\n**Performance.** Validating on write paths beats bulk “hope” jobs — but you must keep the engine fast enough for interactive forms.\n\n**Partial automation.** Some edge cases still need human override with audit. Encode the override; do not pretend the world is fully decidable.\n\n## Takeaway\n\nCompliance engines earn their keep when business rules are testable, explanations are specific, and the API surface cannot silently drift from the PDF. Go is a strong fit: clear types, fast tests, boring deploy story.\n\nShip the engine. Keep the spreadsheet as a museum exhibit.\n";
const __vite_glob_0_6 = "---\ntitle: Why Deployment Gates Should Read Incidents\ndescription: Green CI is not safety. The useful gate scores deploy intent against dependency topology, timing, and what already broke you once.\ndate: 2026-05-18\ntag: Systems / DevOps\nkeywords: deployment gates, CI/CD, incident history, IronClad, DevOps\nrelatedProject: ironclad\ndraft: false\n---\n\nMost deployment pipelines answer three questions: does it compile, do the tests pass, and is lint clean. Those are necessary. They are also the wrong ceiling for production risk.\n\nA change can be perfectly green and still be the wrong thing to ship *right now* — into a brittle dependency graph, during a thin on-call window, or against a service that failed for the same class of change three months ago. Syntax does not know your last outage. Intent does.\n\n## The gap CI leaves open\n\nTraditional gates optimize for *correctness of code*. Operators care about *survivability of change*. Those overlap, but they diverge exactly where incidents live:\n\n- Blast radius: how many downstream journeys light up if this fails\n- Reversibility: can you undo it inside the SLO that your users actually feel\n- Timing: peak traffic, post-migration fatigue, half the pager roster on leave\n\nNone of those show up as a red Jest suite. They show up in postmortems as “we knew this was risky, but the pipeline said go.”\n\n## What “reading incidents” actually means\n\nWhen I started IronClad, the thesis was simple: sit in front of promotion and evaluate *deploy intent*, not just artifacts.\n\nFor a candidate change the gate should:\n\n1. Ingest the deploy request and diff metadata from CI\n2. Classify intent — functional, infra, migration, rollout\n3. Resolve an impact graph from changed components\n4. Score risk axes and consult historical failure patterns\n5. Emit ALLOW, WARN, or BLOCK with a plain-English explanation\n\nThe explanation matters as much as the decision. A binary block without mitigation teaching is just another opaque flaky check people will learn to bypass. An immutable decision log is what turns the gate into an audit surface and a learning loop.\n\n## Learning from your own failure grammar\n\nIncident history is not a sentiment feed. It is a grammar of what already hurt you: which services fail together, which change types cluster before SEVs, which windows correlate with bad rollbacks.\n\nThat does not require a mystical model on day one. Start with structured correlations — service + change class + time-of-day + rollback outcome. Score conservatively. Prefer WARN with a clear owner path over BLOCK theater.\n\nThe P95 latency goal I set for IronClad is under two seconds. If the gate is slower than the human’s willingness to wait, they will route around it. Safety that people skip is not safety.\n\n## Tradeoffs I keep revisiting\n\n**False positives vs trust.** Over-blocking trains workarounds. Under-blocking trains complacency. WARN with ownership is the middle that preserves culture.\n\n**Topology freshness.** A stale service graph is worse than no graph — it lies with confidence. Prefer partial graphs with explicit uncertainty over fake completeness.\n\n**Who owns the threshold.** Org-level SLOs for reversibility (for example, rollback under 60 seconds) should be config, not buried constants. Engineers will argue thresholds; that argument is healthy if it is visible.\n\n## Takeaway\n\nIf your pipeline only certifies that code is correct, you are still guessing about whether production can absorb the intent. The next useful layer of CI asks whether this change matches what the system can safely take *today* — and it should be able to point at the last time a similar intent went wrong.\n\nThat is the work behind IronClad: a semantic deployment risk engine, not another green checkmark.\n";
const __vite_glob_0_7 = "---\ntitle: Eval Harnesses Before Prompt Tweaks\ndescription: Prompt tinkering feels like progress. A fixed eval set is what tells you whether the model got better or you got lucky.\ndate: 2026-07-18\ntag: AI\nkeywords: LLM evals, AI quality, prompt engineering, regression testing, production AI\ndraft: false\n---\n\nThe fastest way to waste a week on an AI feature is to chase “better answers” by editing the system prompt until a demo looks good.\n\nI still write prompts. I just refuse to trust them without a harness.\n\n## What an eval harness actually is\n\nNot a research paper. A boring folder of cases:\n\n- Input the product will really see\n- The expected *behavior* (not one golden paragraph)\n- Tags for failure modes you care about — refusal, citation, tool choice, latency budget\n\nRun the candidate prompt / model / retrieval config against that set. Score. Diff. Ship or don’t.\n\nIf you cannot re-run last week’s set tonight, you do not have quality control. You have folklore.\n\n## Prompt edits without evals are untracked migrations\n\nChanging a prompt in production is a behavior change with no schema and no typechecker. Teams that would never merge an untested SQL migration will happily rewrite the system message because one stakeholder disliked a tone.\n\nTreat prompt and tool-policy changes like code:\n\n- PR with the text diff\n- Eval score before / after\n- Rollback path (previous prompt version pinned)\n\n## Design the score for the product, not the model\n\nAccuracy against a single reference answer is a trap for generative UX. Prefer checks that map to user harm:\n\n- Did it cite only retrieved docs?\n- Did it call the right tool with valid args?\n- Did it refuse when the user asked for another tenant’s data?\n- Did it stay under the token / latency budget?\n\nA model that “writes beautifully” while leaking scope is a failed eval, not a win.\n\n## Start small, stay fixed\n\nTwenty hard cases beat two hundred soft ones. Freeze the set when you ship. Add cases when production surprises you — the same way you add regression tests after bugs.\n\nPrompt tweaks are cheap. Knowing whether they helped is the scarce resource.\n";
const __vite_glob_0_8 = '---\ntitle: "Hired by an Algorithm: Lessons from Writing the Book"\ndescription: What resume parsers actually reward — context density, canonical sections, and why structure is a product decision.\ndate: 2025-12-18\ntag: Career\nkeywords: hiring, ATS, resume parsing, Hired by an Algorithm, career\nrelatedProject: hired-by-algorithm\ndraft: false\n---\n\nI wrote *Hired by an Algorithm* because hiring had quietly become a pipeline problem. Candidates still write for humans. Systems still parse for structure. The mismatch wastes people.\n\nThe book is not a cheat code for lying to machines. It is a field guide to how parsers and ranking systems behave — and how to make a resume survive contact with both algorithms and reviewers.\n\n## Parsers are not recruiters\n\nApplicant tracking systems flatten documents into fields. Creative section headers that look clever to humans often map to “unknown” for extractors. Canonical section names — Experience, Education, Skills — are boring on purpose. Boring is parseable.\n\nOptical and layout tricks (text boxes, multi-column puzzles, icons as headings) create extraction errors that no amount of adjective energy can fix later.\n\n## Context density beats keyword stuffing\n\nModern routing weighs proximity and structure, not raw keyword counts. Action verbs next to absolute metrics outperform orphaned buzzword clouds. “Reduced p99 latency 40% on checkout API” carries more signal than a comma-separated soup of every tool you once touched.\n\nThat idea shows up in my own portfolio writing and in the book’s framing: maximize context density; keep sections machine-canonical; do not fight the optical stream.\n\n## What writing the book changed in my engineering\n\nI started treating resumes and portfolio case studies like APIs:\n\n- Stable schema (sections, dates, roles)\n- Explicit contracts (what a bullet claims)\n- Testability (would a stranger extract the right employer and dates?)\n\nIronically, the same discipline helps technical design docs.\n\n## What the book is not\n\nIt is not permission to game identity or fabricate impact. Algorithms amplify whatever you feed them — including nonsense. The durable strategy is truthful structure: real metrics, clear ownership, parseable layout.\n\n## For recruiters reading this\n\nIf you evaluate engineers partly through portfolio writing, look for the same traits: concrete systems thinking, honest tradeoffs, and structure that respects the reader’s time. That is the through-line between the book and how I ship software.\n\n## Takeaway\n\nHiring pipelines reward clarity that machines can extract and humans can trust. *Hired by an Algorithm* exists to make that dual audience explicit. Structure is not cosmetic — it is how your work enters the system at all.\n';
const __vite_glob_0_9 = "---\ntitle: Idempotency Keys Are a Product Feature\ndescription: Retries are inevitable. Double charges and duplicate rows are optional — if the API treats idempotency as part of the user promise.\ndate: 2026-06-28\ntag: Backend\nkeywords: idempotency, API design, retries, distributed systems, backend\ndraft: false\n---\n\nClients retry. Mobile networks flap. Users double-click. Load balancers time out while the write succeeds. Pretending any of that is rare is how you get duplicate invoices.\n\nIdempotency is not an infrastructure footnote. It is what the product *means* when someone says “submit.”\n\n## The minimum viable contract\n\nFor mutating endpoints that matter:\n\n1. Client sends an `Idempotency-Key` (UUID) per logical user action\n2. Server records key → response (or in-flight lock) scoped to the auth principal\n3. Replays with the same key return the same outcome\n4. Keys expire on a documented TTL — long enough for retries, short enough not to be forever storage\n\nIf two different bodies share a key, that is a client bug: reject it loudly.\n\n## Where people cut corners\n\n**Only at the payment provider.** Your app still creates two local orders that both “failed” to charge once. Local state needs the same key discipline.\n\n**Only in the UI.** Disable the button. Good. Insufficient. Network retries and webhook redelivery do not care about your disabled button.\n\n**Keys without scope.** A key reused across users or tenants is a confusion bomb. Scope by principal + route intent.\n\n## Design the key with the UX\n\nThe key should bind to the user’s intent, not the HTTP attempt:\n\n- “Pay invoice #442” → one key for that click / confirm\n- “Save draft” can be last-write-wins without keys if you accept it\n- “Create resource” almost always wants a key\n\nDocument it in the API the way you document auth. Frontend and mobile will get it wrong otherwise — and they will retry anyway.\n\n## Test the boring path\n\nIntegration tests that fire the same key twice under concurrency are worth more than another OpenAPI example. The bug you want to catch is “two rows, one user action.”\n\nRetries are free. Duplicate side effects are product debt. Idempotency keys are how you keep the promise.\n";
const __vite_glob_0_10 = "---\ntitle: Multi-Tenant Postgres with RLS Without Shooting Yourself\ndescription: Row-Level Security is a seatbelt. Application filters are a sticky note. Lessons from shipping tenant isolation on Supabase and Postgres.\ndate: 2026-02-16\ntag: Backend\nkeywords: PostgreSQL, Row-Level Security, multi-tenant, Supabase, backend security\ndraft: false\n---\n\nIf tenancy lives only in application `WHERE tenant_id = ?` clauses, you are one forgotten filter away from a breach. Row-Level Security moves the boundary into the database — where a tired engineer cannot casually bypass it with a new endpoint.\n\nI have leaned on Postgres RLS and Supabase patterns while building multi-tenant backends for production AI and platform work. The feature is powerful. Misused, it creates a false sense of safety that is worse than honesty.\n\n## What RLS is for\n\nRLS policies attach to tables and constrain which rows a role can see or mutate. Combined with a session variable or JWT claim that identifies the tenant, the database refuses cross-tenant reads even if the query text is wrong.\n\nThat is the point: defense in depth when application code inevitably drifts.\n\n## Patterns that work\n\n**Set the tenant context per request.** Middleware extracts tenant from the JWT and sets `request.jwt.claim.sub` / custom claims or `SET LOCAL app.tenant_id = ...` inside the transaction. Policies read that context.\n\n**Prefer `SET LOCAL` in transactions.** Connection pooling will ruin your week if tenant context leaks across requests on a shared connection.\n\n**Keep service-role access rare.** Admin paths that bypass RLS should be explicit, audited, and tiny.\n\n**Test negative paths.** Automated tests that only check happy-path reads will not catch isolation bugs. Insert two tenants’ rows and assert emptiness across the boundary on every sensitive table.\n\n## Failure modes I watch for\n\n- Policies that use `OR true` “temporarily”\n- Views that bypass intended policies\n- ORM query builders that switch to a privileged role for convenience\n- Background jobs using a global service key over user-scoped data\n- Caching layers that key on document id but not tenant id\n\nRLS does not fix a CDN that caches private JSON under a public URL.\n\n## Supabase specifics\n\nSupabase makes JWT claims easy to reference in policies. Edge Functions tempt you into service-role usage for speed. Default to the user-scoped client. Reach for service role only when the operation is truly system-level — and still constrain by tenant in SQL.\n\nMulti-tenant AI stacks amplify the risk: retrieval queries, file storage objects, and chat transcripts all need the same story. One table left unprotected becomes the exfiltration path.\n\n## Tradeoffs\n\n**Complexity.** Policies are another language in your stack. Document them next to the schema; treat policy PRs as security PRs.\n\n**Performance.** Poorly written policies can hurt plans. Index the columns your policies filter on. Measure.\n\n**Migration discipline.** Adding RLS to a live table without a rollout plan will lock out legitimate traffic. Pair enablement with monitoring.\n\n## Takeaway\n\nMulti-tenant Postgres without RLS is an application pinky-promise. With RLS, you still need careful session context, scarce privileged paths, and adversarial tests — but a whole class of “oops” endpoints stop being fatal.\n\nSeatbelts are not optional after the first passenger.\n";
const __vite_glob_0_11 = "---\ntitle: Offline-First Field Apps That Still Sync\ndescription: Crop advice in Gujarati and Hindi does not care about your café Wi‑Fi assumptions. Building ClimaGrowth for real fields.\ndate: 2026-01-20\ntag: Product / Delivery\nkeywords: React Native, offline-first, multilingual, ClimaGrowth, mobile engineering\ndraft: false\n---\n\nField software fails in parking lots, not in staging. If your mobile app assumes continuous connectivity and a single language, you are building for yourself.\n\nClimaGrowth is an AgTech advisory platform I architected end-to-end: Go/Fiber API gateway with Redis and Postgres/Supabase, React Native for offline-first multilingual access (Gujarati/Hindi), and a Gemini-powered RAG voice assistant — shipped to production with a marketing site on TanStack Start.\n\n## What “offline-first” actually commits you to\n\nOffline-first is not a cache plugin. It is a product contract:\n\n- Core reads work without a network\n- Writes queue and reconcile without corrupting truth\n- Conflict policy is explicit (last-write, server-wins, merge — pick one and document it)\n- Users understand when data is stale\n\nIf the app simply spins on a failed fetch, you shipped online-only with worse error messages.\n\n## Language is a reliability feature\n\nMultilingual UI (Gujarati/Hindi) is not decoration for this audience. It is whether the product is usable under stress. That means:\n\n- String catalogs from day one, not bolted on\n- Layout that survives longer translated strings\n- Voice / RAG paths that respect language choice end-to-end\n\nAn English-only advisory tool in a Gujarati-speaking field is a demo, not a product.\n\n## Backend choices that support the field\n\nThe API gateway in Go/Fiber sits in front of weather and agricultural data sources (Open-Meteo, NASA FIRMS, Agmarknet) with Redis caching. Caching is not only a latency play — it is a resilience play when upstreams wobble.\n\nMobile should degrade to last-known advisory payloads rather than blank screens when a third party times out.\n\n## Voice RAG without breaking trust\n\nClimaVOICE (Gemini-powered) is compelling and dangerous. Voice answers must respect the same data scope as the screen. A confident spoken wrong number is worse than a slow screen.\n\nKeep retrieval grounded, log answers, and prefer “I don’t have a fresh reading” over improvisation when caches are empty.\n\n## Tradeoffs\n\n**Sync complexity.** Queued writes need idempotency keys and clear UX for “pending.”\n**Device storage.** Offline corpora grow; eviction policies matter.\n**Test reality.** Emulators lie. Test on mid-tier Android with flaky network profiles.\n\n## Takeaway\n\nOffline-first, multilingual field apps force you to invent less and listen more. Connectivity is intermittent; language is local; upstreams fail. ClimaGrowth’s stack — Go gateway, RN client, cached data, careful AI — is shaped by those constraints, not by what looks good in a launch tweet.\n";
const __vite_glob_0_12 = "---\ntitle: RAG in Multi-Tenant Production\ndescription: Embeddings are easy. Isolating tenant context under Row-Level Security while the model answers in real time is the real exam.\ndate: 2026-03-14\ntag: AI\nkeywords: RAG, LangChain, LangGraph, multi-tenant, Row-Level Security, pgvector\nrelatedProject: docentra\ndraft: false\n---\n\nDemo RAG is a weekend. Production RAG in a multi-tenant product is a trust boundary problem wearing a chatbot costume.\n\nI learned that the hard way shipping AI chat on a multi-tenant stack — Node, PostgreSQL, Supabase, Edge Functions — where a wrong retrieval is not a cute hallucination. It is a data leak.\n\n## The easy part everyone ships first\n\n- Chunk documents\n- Embed with a hosted or local model\n- Store vectors\n- Retrieve top-k\n- Stuff into a prompt\n\nThat pipeline can look great on a single-tenant corpus. It teaches almost nothing about tenancy.\n\n## The hard part: isolation under load\n\nIn a multi-tenant AI platform, every retrieval and every tool call must inherit the same authorization story as the rest of the API:\n\n- Authentication that establishes tenant + user\n- Authorization that scopes resources\n- Row-Level Security so the database enforces isolation even when application code forgets\n- Serverless functions that cannot “accidentally” query across tenants with a service role\n\nIf the embedding index is global and filters are optional query params, you do not have RAG. You have a future incident report.\n\n## Patterns that held up\n\n**Tenant-qualified vectors.** Partition or heavily filter by `tenant_id` at write and read. Prefer database enforcement over app-only `WHERE` clauses.\n\n**Prompt context as a least-privilege view.** Only retrieve documents the user could download in the product UI. If they cannot open the PDF, the model should not quote it.\n\n**LangGraph / LangChain for control flow, not for auth.** Orchestration libraries are great for retrieval → tool → answer loops. They are not your security model. Keep auth outside the graph.\n\n**Eval with tenancy adversarial cases.** Test suites that only check answer quality will miss cross-tenant retrieval. Add fixtures that *must* return empty across the boundary.\n\n## Where Docentra fits the same lesson\n\nDocentra’s document search API uses JWT auth and role-based access over private libraries, with a FastEmbed + pgvector path for semantic search. Same principle: semantic power is worthless if authorization is decorative.\n\n## Tradeoffs\n\n**Shared index vs per-tenant indexes.** Shared is cheaper and operationally simpler; per-tenant is cleaner isolation and noisier ops. Start shared with strict filters and a kill switch; split when a tenant’s corpus or compliance demands it.\n\n**Edge functions and service keys.** Convenience keys bypass RLS. Treat them as break-glass, not default.\n\n**Latency.** Authz checks + retrieval + generation stacks up. Cache carefully without caching across tenants.\n\n## Takeaway\n\nRAG quality is a product feature. RAG isolation is a security feature. In multi-tenant production, ship the second before you celebrate the first.\n\nIf your chatbot can see another customer’s documents, you did not ship AI — you shipped a liability.\n";
const __vite_glob_0_13 = "---\ntitle: Scientific Software That Keeps Up With the Instrument\ndescription: Polarization camera telemetry, Stokes maps, and cutting frame-update latency with NumPy and QThreads at PRL.\ndate: 2025-12-02\ntag: Research\nkeywords: scientific computing, NumPy, PyQt6, polarization, Physical Research Laboratory, telemetry\ndraft: false\n---\n\nResearch software is judged twice: once by whether the science is right, and once by whether a scientist can use it before the observing window closes. At the Physical Research Laboratory I worked on a Python data pipeline and PyQt6/Matplotlib desktop analysis platform for astronomical polarization camera telemetry — aiming for visualization comparable to SAOImage DS9, with near-real-time frame updates.\n\n## The problem shape\n\nInstruments do not wait for elegant architectures. Telemetry arrives; calibration must turn raw frames into Stokes parameter maps; someone sitting at the desk needs to see structure, not spinner UI.\n\nBottlenecks showed up where they always do in scientific stacks:\n\n- Python loops where vectorized NumPy belonged\n- UI thread work that belonged on worker threads\n- Recalculation of unchanged intermediates\n- Visualization paths that redrew more than they needed\n\n## What we optimized\n\nThe calibration engine computes full Stokes parameter maps with a vectorized NumPy path. That is the scientific core — correctness first, then throughput.\n\nRendering latency fell when parallel QThread computation moved heavy work off the UI thread. The goal was not “async fashion.” It was keeping frame updates close to real time so the tool could participate in observing workflows instead of post-hoc batch only.\n\nDS9 comparisons matter because astronomers already have muscle memory. Parity is a product requirement in research tooling, even when the stack is Python and Qt rather than heritage C++.\n\n## Engineering under research constraints\n\n- **Reproducibility:** calibration versions and parameters must be recorded with outputs\n- **Explainability:** a wrong map with no provenance wastes telescope time twice\n- **Hardware variability:** what flies on one workstation may crawl on another — measure on target machines\n- **Scientist UX:** keyboard paths and clear color mappings beat clever custom widgets\n\n## Tradeoffs\n\n**Accuracy vs speed.** Never silent-approximate calibration to hit a FPS target. Expose quality modes if needed.\n\n**Dependency weight.** Scientific Python stacks are heavy. Pin versions; scientific results depend on them.\n\n**Generalization.** A tool tuned to one camera’s telemetry format should not pretend to be universal on day one. Earn generality with adapters.\n\n## Takeaway\n\nScientific software is production software with stricter truth requirements and stranger latency budgets. Vectorize the math, isolate the UI thread, and respect the instrument’s clock. That is how analysis platforms become part of observation — not just paperwork after the run.\n";
const __vite_glob_0_14 = "---\ntitle: Building Semantic Search in Go with pgvector\ndescription: Notes from shipping Docentra — JWT-guarded libraries, FastEmbed pipelines, and where Postgres earns its keep for embeddings.\ndate: 2026-02-28\ntag: Backend\nkeywords: Go, pgvector, semantic search, FastEmbed, Docentra, PostgreSQL\nrelatedProject: docentra\ndraft: false\n---\n\nVector databases are having a moment. Postgres with pgvector is having a quieter, more useful one: keep your relational truth and your embeddings in one operational story.\n\nDocentra is a document search API in Go (Chi, GORM) with JWT auth over private libraries and a containerized Python FastEmbed pipeline for embeddings. The lesson is less “vectors are magic” and more “boring infrastructure with a clear boundary wins.”\n\n## Why Postgres first\n\nFor many products, documents already live next to users, ACLs, and audit tables. Duplicating that world into a separate vector store means dual writes, dual backups, and dual failure modes.\n\npgvector lets you:\n\n- Keep `document_id` foreign keys honest\n- Filter by tenant / role in the same query as similarity\n- Operate one primary datastore until scale forces a split\n\nWhen you outgrow it, you will know — latency, index size, or recall needs will tell you. Until then, avoid architecture cosplay.\n\n## The Go side of the boundary\n\nThe API’s job:\n\n1. Authenticate (JWT)\n2. Authorize (role over library)\n3. Accept upload / index requests\n4. Query similar chunks with ACL filters applied\n5. Return citations the caller is allowed to see\n\nChi + GORM is intentionally unspectacular. Semantic search fails more often from authz bugs than from cosine distance choice.\n\n## The embedding pipeline\n\nI containerized a Python FastEmbed path so embedding stays reproducible across machines. Go does not need to own model runtimes on day one. A clean handoff beats a heroic single binary.\n\nPractical details that mattered:\n\n- Stable chunking rules (size, overlap, heading awareness)\n- Idempotent re-index for document updates\n- Version the embedding model id next to vectors so you can migrate deliberately\n- Health checks that fail closed if the embed worker is down\n\n## Query design that does not lie\n\nSimilarity without filters is a demo. Production queries look like:\n\n```sql\nSELECT id, content, 1 - (embedding <=> $1) AS score\nFROM chunks\nWHERE library_id = $2\nORDER BY embedding <=> $1\nLIMIT $3;\n```\n\nThe `WHERE` is the product. The operator is the math.\n\nTune indexes (`ivfflat` / `hnsw`) only after you have realistic data volumes. Premature index worship is a great way to feel busy.\n\n## Tradeoffs\n\n**Recall vs latency.** Higher probes / efSearch help recall and hurt p99. Measure with your corpus, not a blog benchmark.\n\n**Python worker ops.** Another container is another pager. Soften with clear queues and backpressure.\n\n**Hybrid search.** Keyword + vector often beats either alone for internal docs. Add it when users show you the miss cases.\n\n## Takeaway\n\nSemantic search in Go with pgvector is mostly systems design: authn/authz, reproducible embeds, and queries that never forget who is asking. Docentra is that shape — private libraries first, vectors second.\n";
const __vite_glob_0_15 = "---\ntitle: SLOs Before More Dashboards\ndescription: Another Grafana board will not tell you when to page. Service level objectives turn metrics into decisions people can defend.\ndate: 2026-06-02\ntag: Systems / DevOps\nkeywords: SLO, observability, SRE, on-call, DevOps, reliability\nrelatedProject: ironclad\ndraft: false\n---\n\nTeams in pain often ask for more graphs. What they usually need is a sentence: *this is how good we promised to be, and this is how we are doing.*\n\nThat sentence is an SLO.\n\n## Dashboards without SLOs are museums\n\nPretty panels show that something moved. They do not answer:\n\n- Should we page?\n- Should we freeze deploys?\n- Did this week’s “improvement” help users?\n\nIf on-call is driven by intuition over a wall of charts, you will either burn people out or miss real pain.\n\n## Write the promise in user words\n\nGood SLOs sound like product:\n\n- “99.9% of checkout starts complete within 2s”\n- “99% of deploy gate evaluations finish within 5s”\n- “Search returns success for 99.5% of authenticated queries”\n\nBad SLOs sound like infrastructure vanity: CPU under 70%, pod restarts low. Those can be *indicators*. They are not the promise.\n\n## Error budgets are the culture hack\n\nAn error budget converts reliability into a shared currency with product and eng:\n\n- Budget healthy → ship\n- Budget burning → slow down, fix, or explicitly spend\n\nWithout a budget, every reliability debate is a vibe fight. With one, you can still choose speed — you just choose it with eyes open.\n\n## Instrument for the SLO, not for completeness\n\nYou do not need every span forever. You need:\n\n- The golden signals that feed the SLO\n- Traces for the paths that burn budget\n- Logs that explain *why* when the burn spikes\n\nAdd cardinality only when a question keeps recurring. Observability spend without an SLO is how you buy a second full-time job for your metrics bill.\n\nShip the promise first. Then build the smallest dashboard that proves it.\n";
const __vite_glob_0_16 = "---\ntitle: Tool Calls Need Contracts\ndescription: Agents that can call anything will eventually call the wrong thing. Production tool use is an API design problem with a model in the loop.\ndate: 2026-07-08\ntag: AI\nkeywords: tool calling, agents, LLM tools, API contracts, production AI\nrelatedProject: tribunal\ndraft: false\n---\n\nGiving a model tools is how demos become products. It is also how products become incident tickets.\n\nA tool call is a network request with weaker intent than a human click. Treat it like an untrusted client.\n\n## The contract is the product\n\nFor every tool I expose:\n\n- **Name and description** that match what the backend actually does — no marketing copy\n- **Strict JSON schema** for arguments; reject extras\n- **Auth context inherited from the session**, never from the model’s “user_id” field\n- **Side-effect class**: read, write, irreversible\n- **Idempotency** for writes the model may retry when the stream dies\n\nIf the schema is loose, the model will invent fields. If auth is a parameter, the model will invent tenants.\n\n## Narrow beats clever\n\nOne fat `run_sql` tool is a liability. Prefer small tools that encode product verbs:\n\n- `search_documents`\n- `create_review_comment`\n- `get_deployment_status`\n\nNarrow tools are easier to authorize, log, and eval. Clever mega-tools are harder to sandbag when the model gets creative.\n\n## Make failure visible to the model — carefully\n\nReturn structured errors the model can recover from (`NOT_FOUND`, `FORBIDDEN`, `VALIDATION`) without dumping stack traces or internal IDs into the transcript. The model should retry intelligently; the user should not see your VPC topology.\n\n## Log the decision, not just the outcome\n\nStore: tool name, args (redacted), auth subject, latency, result class. When an agent does something weird at 11 p.m., you need the transcript of *choices*, not only the final message.\n\nTool calling without contracts is just RPC with vibes. Contracts turn it into software.\n";
const __vite_glob_0_17 = "---\ntitle: Topology-Aware Code Review\ndescription: A green unit test cannot see the service next door. Architecture risk belongs in the pull request, not the outage channel.\ndate: 2026-03-30\ntag: AI\nkeywords: service topology, code review, microservices, Tribunal, architecture risk\nrelatedProject: tribunal\ndraft: false\n---\n\nUnit tests are loyal to the package under change. Production is loyal to the graph. Most review tools inherit the unit-test worldview: they stare at the diff and hope the rest of the system will be fine.\n\nTopology-aware review starts from the opposite assumption: the interesting risk is often *outside* the lines that changed.\n\n## The PR that looks safe\n\nClassic example: rename a field, tighten a validation, bump a shared client. Diff is small. Tests pass. Two services later, a consumer still deserializes the old shape, or a batch job reads the column at 3 a.m.\n\nThe reviewer who only reads the PR file list will bless it. The reviewer who knows the graph will pause.\n\n## What “topology-aware” means in practice\n\nIn Tribunal, architecture-risk detection uses service-topology awareness to surface cross-service risk before merge. Concretely:\n\n1. Map changed modules to owning services\n2. Walk outbound and inbound edges that matter (APIs, events, shared stores)\n3. Flag high-coupling blast patterns and contract-sensitive touches\n4. Attach the finding to the PR as review context\n\nYou are not trying to prove safety. You are trying to force the right conversation while the branch still exists.\n\n## Humans still win at judgment\n\nGraphs do not know that a deprecation is intentional, or that a dual-write is mid-flight. The tool should present *who else is in the room*, not pretend to own the merge button.\n\nBest UX: “This touches the billing event schema — consumers: X, Y. Last related incident: Z.” Then a human decides.\n\n## Building the graph without boiling the ocean\n\nStart with high-signal edges:\n\n- Declared service dependencies in deploy configs\n- OpenAPI / protobuf consumers\n- Shared database ownership documents\n- Message topics with known subscribers\n\nIgnore vanity edges until they earn their keep. A dense wrong graph is how you train people to ignore the tool.\n\n## Tradeoffs\n\n**Stale topology** creates false calm. Prefer freshness SLOs over decorative completeness.\n\n**Monorepo vs polyrepo** changes how you resolve “what changed.” Path → service maps become critical infrastructure.\n\n**Noise.** Not every edge deserves a comment. Threshold on contract surfaces and high-pager services first.\n\n## Takeaway\n\nCode review that cannot see the graph is reviewing a fiction of isolation. Topology-aware review pulls the next outage’s supporting cast into the PR while change is still cheap.\n\nTribunal’s architecture-risk path exists for that moment — before merge, not after the channel lights up.\n";
const modules = /* @__PURE__ */ Object.assign({
  "../content/posts/ai-reviewing-ai.md": __vite_glob_0_0,
  "../content/posts/ambiguous-briefs-forward-deployed.md": __vite_glob_0_1,
  "../content/posts/bff-keeps-fullstack-honest.md": __vite_glob_0_2,
  "../content/posts/blast-radius-as-a-product-feature.md": __vite_glob_0_3,
  "../content/posts/ci-that-asks-should-we.md": __vite_glob_0_4,
  "../content/posts/compliance-engines-in-go.md": __vite_glob_0_5,
  "../content/posts/deployment-gates-read-incidents.md": __vite_glob_0_6,
  "../content/posts/eval-harnesses-before-prompt-tweaks.md": __vite_glob_0_7,
  "../content/posts/hired-by-an-algorithm-lessons.md": __vite_glob_0_8,
  "../content/posts/idempotency-keys-are-product.md": __vite_glob_0_9,
  "../content/posts/multi-tenant-postgres-rls.md": __vite_glob_0_10,
  "../content/posts/offline-first-field-apps.md": __vite_glob_0_11,
  "../content/posts/rag-in-multi-tenant-production.md": __vite_glob_0_12,
  "../content/posts/scientific-software-stokes-maps.md": __vite_glob_0_13,
  "../content/posts/semantic-search-go-pgvector.md": __vite_glob_0_14,
  "../content/posts/slos-before-more-dashboards.md": __vite_glob_0_15,
  "../content/posts/tool-calls-need-contracts.md": __vite_glob_0_16,
  "../content/posts/topology-aware-code-review.md": __vite_glob_0_17
});
g.setOptions({ gfm: true, breaks: false });
function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw.trim() };
  const data = {};
  for (const line of match[1].split("\n")) {
    const i = line.indexOf(":");
    if (i === -1) continue;
    const key = line.slice(0, i).trim();
    let value = line.slice(i + 1).trim();
    if (value.startsWith('"') && value.endsWith('"') || value.startsWith("'") && value.endsWith("'")) {
      value = value.slice(1, -1);
    }
    data[key] = value;
  }
  return { data, body: match[2].trim() };
}
function readingMinutes(body) {
  const words = body.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 220));
}
function slugFromPath(path) {
  const base = path.split("/").pop() ?? path;
  return base.replace(/\.md$/, "");
}
function loadPosts() {
  const posts2 = [];
  for (const [path, raw] of Object.entries(modules)) {
    const { data, body } = parseFrontmatter(raw);
    const slug = data.slug || slugFromPath(path);
    if (!data.title || !data.description || !data.date || !data.tag) {
      throw new Error(`Post ${slug} is missing required frontmatter`);
    }
    const draft = data.draft === true || data.draft === "true" || String(data.draft).toLowerCase() === "true";
    const keywords = (data.keywords ?? "").split(",").map((k) => k.trim()).filter(Boolean);
    posts2.push({
      slug,
      title: data.title,
      description: data.description,
      date: data.date,
      updated: data.updated,
      tag: data.tag,
      keywords,
      relatedProject: data.relatedProject,
      draft,
      body,
      readingMinutes: readingMinutes(body),
      html: g.parse(body, { async: false })
    });
  }
  return posts2.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
const allPosts = loadPosts();
const posts = allPosts.filter((p) => !p.draft);
const allTags = [
  ...new Set(posts.map((p) => p.tag))
].sort();
function getPost(slug) {
  return posts.find((p) => p.slug === slug);
}
function getAdjacentPosts(slug) {
  const i = posts.findIndex((p) => p.slug === slug);
  if (i === -1) return {};
  return {
    next: posts[i - 1],
    // newer
    prev: posts[i + 1]
    // older
  };
}
function getPostsByProject(projectSlug) {
  return posts.filter((p) => p.relatedProject === projectSlug);
}
function formatPostDate(iso) {
  return (/* @__PURE__ */ new Date(iso + "T00:00:00")).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}
const $$splitComponentImporter = () => import("./blog._slug-BtbWfCtj.mjs");
const Route = createFileRoute("/blog/$slug")({
  loader: ({
    params
  }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    const {
      prev,
      next
    } = getAdjacentPosts(params.slug);
    const relatedProject = post.relatedProject ? projects.find((p) => p.slug === post.relatedProject) : void 0;
    return {
      post,
      prev,
      next,
      relatedProject
    };
  },
  head: ({
    loaderData
  }) => {
    if (!loaderData) {
      return {
        meta: [{
          title: "Not found — Rohan Patel"
        }]
      };
    }
    const {
      post
    } = loaderData;
    const seo2 = pageSeo({
      title: `${post.title} — Rohan Patel`,
      description: post.description,
      path: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: [post.tag, ...post.keywords]
    });
    return {
      meta: seo2.meta,
      links: seo2.links,
      scripts: [jsonLdScript([blogPostingJsonLd(post), breadcrumbJsonLd([{
        name: "Home",
        path: "/"
      }, {
        name: "Writing",
        path: "/blog"
      }, {
        name: post.title,
        path: `/blog/${post.slug}`
      }])])]
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const ServicesRoute = Route$9.update({
  id: "/services",
  path: "/services",
  getParentRoute: () => Route$a
});
const ResumeRoute = Route$8.update({
  id: "/resume",
  path: "/resume",
  getParentRoute: () => Route$a
});
const ProjectsRoute = Route$7.update({
  id: "/projects",
  path: "/projects",
  getParentRoute: () => Route$a
});
const BlogRoute = Route$6.update({
  id: "/blog",
  path: "/blog",
  getParentRoute: () => Route$a
});
const AboutRoute = Route$5.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$a
});
const IndexRoute = Route$4.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$a
});
const ProjectsIndexRoute = Route$3.update({
  id: "/",
  path: "/",
  getParentRoute: () => ProjectsRoute
});
const BlogIndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => BlogRoute
});
const ProjectsSlugRoute = Route$1.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => ProjectsRoute
});
const BlogSlugRoute = Route.update({
  id: "/$slug",
  path: "/$slug",
  getParentRoute: () => BlogRoute
});
const BlogRouteChildren = {
  BlogSlugRoute,
  BlogIndexRoute
};
const BlogRouteWithChildren = BlogRoute._addFileChildren(BlogRouteChildren);
const ProjectsRouteChildren = {
  ProjectsSlugRoute,
  ProjectsIndexRoute
};
const ProjectsRouteWithChildren = ProjectsRoute._addFileChildren(
  ProjectsRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BlogRoute: BlogRouteWithChildren,
  ProjectsRoute: ProjectsRouteWithChildren,
  ResumeRoute,
  ServicesRoute
};
const routeTree = Route$a._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    // We reset scroll via Lenis on navigate — browser restoration fights it.
    scrollRestoration: false,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Magnetic as M,
  Reveal as R,
  Tilt as T,
  WordReveal as W,
  site as a,
  posts as b,
  allTags as c,
  Route$1 as d,
  Route as e,
  formatPostDate as f,
  getPostsByProject as g,
  projects as p,
  router as r,
  services as s,
  useContactModal as u
};
