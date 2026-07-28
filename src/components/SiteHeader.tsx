import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useContactModal } from "@/hooks/use-contact-modal";
import { Moon, Sun, Github, Linkedin, Instagram } from "lucide-react";
import { site } from "@/lib/site";

const links: { label: string; to: string }[] = [
  { label: "Studio", to: "/" },
  { label: "Work", to: "/projects" },
  { label: "About", to: "/about" },
  { label: "Writing", to: "/blog" },
];

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
      aria-label="Toggle theme"
    >
      {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
    </button>
  );
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { open: openContact } = useContactModal();

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="relative sticky top-3 z-50 mx-3 sm:top-4 sm:mx-6 md:mx-8"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-border bg-card/80 px-4 py-1.5 shadow-sm backdrop-blur-md sm:px-5 sm:py-2">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="font-display text-xl tracking-tight sm:text-2xl"
        >
          ROHAN<span className="text-accent">.</span>
        </Link>

        <nav className="hidden gap-7 text-sm font-medium md:flex">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              className="relative inline-block transition-colors hover:text-accent after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/resume"
            className="relative inline-block transition-colors hover:text-accent after:absolute after:left-0 after:bottom-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-accent after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100"
          >
            Résumé
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            onClick={openContact}
            className="group relative hidden overflow-hidden rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground sm:inline-block sm:px-5 sm:text-sm"
          >
            <span className="relative z-10">CONTACT</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-0" />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border md:hidden"
          >
            <span className="relative block h-3 w-4">
              <span
                className={`absolute left-0 top-0 h-0.5 w-full bg-foreground transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-full bg-foreground transition-transform ${open ? "-translate-y-1 -rotate-45" : ""}`}
              />
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
            className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-2xl border border-border bg-card/95 p-3 shadow-lg backdrop-blur-md md:hidden"
          >
            <nav className="flex flex-col">
              {links.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-base font-medium hover:bg-muted"
                >
                  {l.label}
                </Link>
              ))}
              <Link
                to="/resume"
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium hover:bg-muted"
              >
                Résumé
              </Link>
              <button
                onClick={() => {
                  setOpen(false);
                  openContact();
                }}
                className="mt-1 w-full rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground"
              >
                CONTACT
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export function SiteFooter() {
  const { open: openContact } = useContactModal();
  const socials = [
    { label: "GitHub", href: site.github, Icon: Github },
    { label: "LinkedIn", href: site.linkedin, Icon: Linkedin },
    { label: "Instagram", href: site.instagram, Icon: Instagram },
  ];

  return (
    <footer className="relative mt-24 overflow-hidden sm:mt-32">
      <div className="footer-dark-clip relative z-20 bg-foreground px-6 pb-24 pt-16 text-background shadow-2xl md:px-12 md:pb-40 md:pt-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-between md:text-left">
            <a
              href={`mailto:${site.email}`}
              className="group flex flex-col items-center transition-all duration-700 hover:text-accent md:items-start"
            >
              <span className="mb-1 font-sans text-lg font-light uppercase tracking-[0.4em] text-background/40 transition-colors group-hover:text-accent/60 sm:text-xl md:text-2xl">
                CONNECT
              </span>
              <div className="relative overflow-hidden font-display text-5xl uppercase leading-none tracking-tighter sm:text-7xl md:text-9xl">
                <span className="block transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:-translate-y-[110%]">
                  WRITE ME
                </span>
                <span className="absolute inset-0 block translate-y-[110%] text-accent transition-transform duration-700 ease-[0.22,1,0.36,1] group-hover:translate-y-0">
                  WRITE ME
                </span>
              </div>
              <span className="mt-3 font-mono text-xs tracking-wide text-background/50 transition-colors group-hover:text-accent/80 sm:text-sm">
                {site.email}
              </span>
            </a>

            <div className="flex items-center justify-center gap-3">
              {socials.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-background/20 text-background/60 transition-colors hover:border-background/50 hover:text-background"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-20 flex flex-wrap justify-center gap-x-12 gap-y-6 font-mono text-xs uppercase tracking-[0.2em] text-background/60 md:mt-32 md:justify-start">
            {links.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                className="transition-colors hover:text-background"
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-between gap-12 md:flex-row md:items-end">
            <button
              onClick={openContact}
              className="group relative inline-flex items-center justify-center bg-background px-14 py-5 text-[10px] font-bold uppercase tracking-[0.3em] text-foreground transition-all hover:bg-accent hover:text-background"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 75%, 88% 100%, 0 100%)",
              }}
            >
              <span className="relative z-10">Let's talk</span>
            </button>

            <div className="hidden max-w-[280px] font-mono text-[9px] uppercase leading-relaxed tracking-[0.2em] text-background/40 sm:block">
              Based in {site.location}
            </div>
          </div>

          <p className="mt-14 text-center font-mono text-[10px] uppercase tracking-[0.22em] text-background/40 md:mt-20 md:text-left">
            @{new Date().getFullYear()} Rohan Builds
          </p>
        </div>
      </div>

      {/* Wordmark — cream + outline; cropped like desktop on both */}
      <div className="pointer-events-none relative z-10 select-none overflow-hidden bg-background py-3 sm:-mt-32 sm:py-0 sm:pb-8 sm:pt-32">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="footer-rohan text-center font-display text-[38vw] font-black uppercase leading-[0.62] tracking-[-0.05em] opacity-80 sm:-my-[0.12em] sm:text-[35vw] sm:leading-[0.7]"
          aria-hidden
        >
          ROHAN
        </motion.div>
      </div>
    </footer>
  );
}
