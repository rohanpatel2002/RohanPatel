import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useTheme } from "@/hooks/use-theme";
import { useContactModal } from "@/hooks/use-contact-modal";
import { Moon, Sun } from "lucide-react";
import { Marquee } from "@/components/Motion";

const links: { label: string; to: string; hash?: string }[] = [
  { label: "Projects", to: "/projects" },
  { label: "Services", to: "/services" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
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
              <button
                onClick={() => { setOpen(false); openContact(); }}
                className="mt-1 rounded-xl bg-primary px-4 py-3 text-center text-sm font-semibold text-primary-foreground w-full"
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
  
  return (
    <footer className="relative mt-24 overflow-hidden sm:mt-32">
      {/* Main Footer Block with Geometric Cut */}
      <div 
        className="relative z-20 bg-foreground text-background px-6 pt-16 pb-24 md:px-12 md:pt-24 md:pb-40 shadow-2xl" 
        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%)' }}
      >
        <div className="mx-auto max-w-7xl">
          {/* Top Row: Email & Socials */}
          <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
            <a 
              href="mailto:HELLO@ROHAN.DEV" 
              className="group flex flex-col items-start hover:text-accent transition-all duration-700"
            >
              <span className="font-sans text-lg font-light tracking-[0.4em] text-background/40 uppercase sm:text-xl md:text-2xl mb-1 group-hover:text-accent/60 transition-colors">
                CONNECT
              </span>
              <div className="relative overflow-hidden font-display text-5xl sm:text-7xl md:text-9xl tracking-tighter leading-none uppercase">
                <span className="block group-hover:-translate-y-[110%] transition-transform duration-700 ease-[0.22,1,0.36,1]">
                  ROHAN.DEV
                </span>
                <span className="absolute inset-0 block translate-y-[110%] group-hover:translate-y-0 transition-transform duration-700 ease-[0.22,1,0.36,1] text-accent">
                  ROHAN.DEV
                </span>
              </div>
            </a>
            
            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono text-[10px] tracking-[0.2em] text-background/50 uppercase">
              {['Dribbble', 'X(Twitter)', 'LinkedIn', 'Github', 'Instagram'].map(s => (
                <a key={s} href="#" className="hover:text-background transition-colors">{s}</a>
              ))}
            </div>
          </div>
          
          {/* Middle Row: Navigation Links */}
          <div className="mt-20 flex flex-wrap gap-x-12 gap-y-6 font-mono text-xs tracking-[0.2em] text-background/60 uppercase md:mt-32">
            {links.map((l) => (
              <Link key={l.label} to={l.to} className="hover:text-background transition-colors">
                {l.label}
              </Link>
            ))}
            <Link to="/blog" className="hover:text-background transition-colors">Articles</Link>
          </div>
          
          {/* Bottom Row: CTA & Address */}
          <div className="mt-12 flex flex-col items-start justify-between gap-12 md:flex-row md:items-end">
            <button 
              onClick={openContact}
              className="group relative inline-flex items-center justify-center bg-background px-14 py-5 text-[10px] font-bold tracking-[0.3em] text-foreground uppercase transition-all hover:bg-accent hover:text-background"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 88% 100%, 0 100%)' }}
            >
              <span className="relative z-10">Let's talk</span>
              <motion.div 
                className="absolute inset-0 bg-accent"
                initial={{ scaleX: 0 }}
                whileHover={{ scaleX: 1 }}
                style={{ originX: 0 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              />
            </button>
            
            <div className="max-w-[240px] font-mono text-[9px] leading-relaxed tracking-[0.2em] text-background/40 uppercase">
              BASED IN GUJARAT, INDIA — AVAILABLE FOR RESEARCH ROLES & SYSTEMS ARCHITECTURE GLOBALLY.
            </div>
          </div>
        </div>
      </div>
      
      {/* Massive Outlined Brand Bleed - The "Damn" Factor */}
      <div className="relative -mt-16 sm:-mt-32 pointer-events-none select-none bg-background pb-8 pt-32 overflow-hidden z-10">
        {/* Viewport Bleeding Outline Text */}
        <motion.div 
          initial={{ y: 60, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-[35vw] leading-[0.7] tracking-[-0.05em] text-transparent font-black uppercase text-center opacity-80"
          style={{ WebkitTextStroke: '2px var(--color-foreground)' }}
        >
          ROHAN
        </motion.div>
      </div>
    </footer>
  );
}
