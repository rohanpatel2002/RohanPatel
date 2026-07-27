import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { projects } from "@/lib/data";

export const Route = createFileRoute("/projects/")({
  head: () => ({
    meta: [
      { title: "Projects — Rohan Patel" },
      {
        name: "description",
        content:
          "Selected works by Rohan Patel — production systems spanning deployment safety, AI document retrieval, code review automation, and published research.",
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
            transition={{ duration: 0.5 }}
            className="text-center text-xs font-semibold tracking-[0.3em] text-muted-foreground"
          >
            [ PROJECTS ]
          </motion.p>

          <WordReveal
            text="Selected works."
            className="mt-4 text-center font-display text-5xl sm:text-7xl md:text-[8rem]"
          />

          <Reveal delay={0.2}>
            <p className="mx-auto mt-5 max-w-xl text-center text-sm font-light leading-relaxed text-muted-foreground sm:text-base">
              Systems built from interface to infrastructure.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:mt-16 sm:gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.slug} delay={Math.min(i * 0.08, 0.24)}>
                <Link
                  to="/projects/$slug"
                  params={{ slug: p.slug }}
                  className="block h-full"
                >
                  <motion.article
                    whileHover={{ y: -4 }}
                    transition={{ type: "spring", stiffness: 260, damping: 24 }}
                    className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-3xl border border-border/80 bg-card/80 p-6 backdrop-blur-sm sm:p-8"
                  >
                    <div
                      aria-hidden
                      className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />

                    <div className="relative min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent">
                        {p.tag}
                      </p>
                      <h2 className="mt-3 break-words font-display text-3xl leading-[0.95] sm:text-5xl md:text-6xl">
                        {p.name}
                      </h2>
                      <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
                        {p.blurb}
                      </p>

                      {p.roles && (
                        <div className="mt-5 flex flex-wrap gap-2">
                          {p.roles.map((role) => (
                            <span
                              key={role}
                              className="rounded-full border border-border/70 bg-muted/25 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                            >
                              {role}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="relative mt-8 flex items-center justify-between gap-3 border-t border-border/60 pt-5">
                      <span className="truncate font-mono text-[10px] text-muted-foreground sm:text-[11px]">
                        {p.meta}
                      </span>
                      <span className="shrink-0 text-sm font-semibold transition-colors group-hover:text-accent">
                        View details →
                      </span>
                    </div>
                  </motion.article>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="h-16 sm:h-24" />
      <SiteFooter />
    </div>
  );
}
