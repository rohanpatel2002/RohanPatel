import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { u as useContactModal, a as site } from "./router-jjw8zR6r.mjs";
import { m as motion, A as AnimatePresence } from "../_libs/framer-motion.mjs";
import { G as Github, L as Linkedin, I as Instagram, a as Moon, b as Sun } from "../_libs/lucide-react.mjs";
function useTheme() {
  const [theme, setTheme] = reactExports.useState(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("theme");
      if (saved) return saved;
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });
  reactExports.useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const toggleTheme = () => {
    setTheme((prev) => prev === "light" ? "dark" : "light");
  };
  return { theme, toggleTheme, setTheme };
}
const links = [
  { label: "Studio", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Writing", to: "/blog" }
];
function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "button",
    {
      onClick: toggleTheme,
      className: "flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted",
      "aria-label": "Toggle theme",
      children: theme === "light" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { size: 16 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { size: 16 })
    }
  );
}
function SiteHeader() {
  const [open, setOpen] = reactExports.useState(false);
  const { open: openContact } = useContactModal();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.header,
    {
      initial: { y: -40, opacity: 0 },
      animate: { y: 0, opacity: 1 },
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
      className: "relative sticky top-3 z-50 mx-3 sm:top-4 sm:mx-6 md:mx-8",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-card/80 px-4 py-1.5 shadow-sm backdrop-blur-md sm:px-5 sm:py-2", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            Link,
            {
              to: "/",
              onClick: () => setOpen(false),
              className: "font-display text-xl tracking-tight sm:text-2xl",
              children: [
                "ROHAN",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden gap-7 text-sm font-medium md:flex", children: [
            links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: l.to,
                className: "relative inline-block transition-colors hover:text-accent after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                children: l.label
              },
              l.label
            )),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Link,
              {
                to: "/resume",
                className: "relative inline-block transition-colors hover:text-accent after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100",
                children: "Résumé"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeToggle, {}),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: openContact,
                className: "group relative hidden overflow-hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground sm:inline-block sm:px-5 sm:text-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "CONTACT" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-0" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                "aria-label": "Menu",
                onClick: () => setOpen((v) => !v),
                className: "flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative block h-3 w-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`
                    }
                  )
                ] })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: -8 },
            animate: { opacity: 1, y: 0 },
            exit: { opacity: 0, y: -8 },
            transition: { duration: 0.2 },
            className: "absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur-md md:hidden",
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col", children: [
              links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: l.to,
                  onClick: () => setOpen(false),
                  className: "rounded-xl px-4 py-3 text-base font-medium hover:bg-muted",
                  children: l.label
                },
                l.label
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                Link,
                {
                  to: "/resume",
                  onClick: () => setOpen(false),
                  className: "rounded-xl px-4 py-3 text-base font-medium hover:bg-muted",
                  children: "Résumé"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => {
                    setOpen(false);
                    openContact();
                  },
                  className: "mt-1 w-full rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground",
                  children: "CONTACT"
                }
              )
            ] })
          }
        ) })
      ]
    }
  );
}
function SiteFooter() {
  const { open: openContact } = useContactModal();
  const socials = [
    { label: "GitHub", href: site.github, Icon: Github },
    { label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
    { label: "Instagram", href: site.instagram, Icon: Instagram }
  ];
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-24 overflow-hidden sm:mt-32", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "footer-dark-clip relative z-20 bg-foreground px-6 pb-24 pt-16 text-background shadow-2xl md:px-12 md:pb-40 md:pt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: `mailto:${site.email}`,
            className: "group flex flex-col items-center transition-all duration-700 hover:text-accent md:items-start",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mb-1 font-sans text-lg font-light uppercase tracking-[0.4em] text-background/40 transition-colors group-hover:text-accent/60 sm:text-xl md:text-2xl", children: "CONNECT" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden font-display text-5xl uppercase leading-none tracking-tighter sm:text-7xl md:text-9xl", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-[110%]", children: "WRITE ME" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 block translate-y-[110%] text-accent transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:translate-y-0", children: "WRITE ME" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 font-mono text-xs tracking-wide text-background/50 transition-colors group-hover:text-accent/80 sm:text-sm", children: site.email })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center justify-center gap-3", children: socials.map(({ label, href, Icon }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noreferrer",
            "aria-label": label,
            className: "flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/60 transition-colors hover:border-background/50 hover:text-background",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { size: 18 })
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 font-mono text-xs uppercase tracking-[0.2em] text-background/60 md:mt-32 md:justify-start", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        Link,
        {
          to: l.to,
          className: "transition-colors hover:text-background",
          children: l.label
        },
        l.label
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-12 flex flex-col items-center justify-between gap-12 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: openContact,
            className: "group relative inline-flex items-center justify-center bg-background px-14 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground transition-all hover:bg-accent hover:text-background",
            style: {
              clipPath: "polygon(0 0, 100% 0, 100% 75%, 88% 100%, 0 100%)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative z-10", children: "Let's talk" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden max-w-[280px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-background/40 sm:block", children: [
          "Based in ",
          site.location
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "mt-14 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-background/40 md:mt-20 md:text-left", children: [
        "@",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Rohan Builds"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none relative z-10 select-none overflow-hidden bg-background py-3 sm:-mt-32 sm:py-0 sm:pb-8 sm:pt-32", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { y: 40, opacity: 0 },
        whileInView: { y: 0, opacity: 1 },
        viewport: { once: true },
        transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
        className: "footer-rohan text-center font-display text-[38vw] font-black uppercase leading-[0.62] tracking-[-0.05em] opacity-80 sm:-my-[0.12em] sm:text-[35vw] sm:leading-[0.7]",
        "aria-hidden": true,
        children: "ROHAN"
      }
    ) })
  ] });
}
export {
  SiteHeader as S,
  SiteFooter as a
};
