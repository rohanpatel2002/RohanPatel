import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="sticky top-3 z-50 mx-3 sm:top-4 sm:mx-6 md:mx-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-card/80 px-4 py-1.5 shadow-sm backdrop-blur-md sm:px-5 sm:py-2">
        <Link to="/" onClick={() => setOpen(false)} className="font-display text-xl tracking-tight sm:text-2xl">
          ROHAN<span className="text-accent">.</span>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={l.hash}
              className="relative inline-block transition-colors hover:text-accent after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            to="/"
            hash="contact"
            className="group relative hidden overflow-hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground sm:inline-block sm:px-5 sm:text-sm"
          >
            <span className="relative z-10">CONTACT</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span className={`absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-2 overflow-hidden rounded-2xl border border-border bg-card/95 p-3 backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  hash={l.hash}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/"
                hash="contact"
                onClick={() => setOpen(false)}
                className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                CONTACT
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function SiteFooter() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border bg-card sm:mt-32">
      <div className="pointer-events-none select-none px-4">
        <div className="font-display text-[22vw] leading-none text-foreground/[0.06]">ROHAN</div>
      </div>
      <div className="mx-auto -mt-4 flex max-w-7xl flex-col gap-4 px-6 pb-10 sm:-mt-8 sm:gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-2xl">Let's talk<span className="text-accent">.</span></p>
          <a href="mailto:rohan@example.com" className="text-sm text-muted-foreground hover:text-accent sm:text-base">rohan@example.com</a>
        </div>
        <p className="text-xs text-muted-foreground sm:text-sm">© {new Date().getFullYear()} Rohan Patel — Built with intent.</p>
      </div>
    </footer>
  );
}
