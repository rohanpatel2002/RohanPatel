import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal, ScrambleText } from "@/components/Motion";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Rohan Patel" },
      {
        name: "description",
        content:
          "Selected works by Rohan Patel, including IronClad, Docentra, and Tribunal.",
      },
    ],
  }),
  component: ProjectsIndex,
});

function ProjectsIndex() {
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground"
          >
            [ PROJECTS ]
          </motion.p>
          <WordReveal
            text="Selected works."
            className="mt-4 text-center font-display text-5xl sm:text-7xl md:text-[9rem]"
          />

          <div className="mt-12 grid gap-5 sm:mt-20 sm:gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="block h-full"
                >
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-5 sm:p-10 md:p-12"
                  >
                    <span className="absolute inset-0 -z-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="relative min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">
                        {p.tag}
                      </p>
                      <h3 className="mt-3 break-words font-display text-3xl leading-[0.95] sm:mt-4 sm:text-5xl md:text-6xl lg:text-7xl">
                        <ScrambleText text={p.name} />
                      </h3>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-6 sm:text-base md:text-lg">
                        {p.blurb}
                      </p>
                      {p.roles && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {p.roles.map((role) => (
                            <span
                              key={role}
                              className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="relative mt-8 flex flex-col gap-2 border-t border-border pt-5 text-sm sm:mt-10 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:pt-6 sm:text-base">
                      <span className="text-muted-foreground">{p.meta}</span>
                      <motion.span
                        className="font-semibold sm:whitespace-nowrap"
                        whileHover={{ x: 4 }}
                      >
                        View details →
                      </motion.span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
