import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { site } from "@/lib/site";
import { projects } from "@/lib/data";
import { useContactModal } from "@/hooks/use-contact-modal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rohan Patel" },
      {
        name: "description",
        content:
          "Software Engineer focused on full-stack products, backend systems, DevOps safety, applied AI, and customer-facing delivery.",
      },
    ],
  }),
  component: About,
});

function About() {
  const { open } = useContactModal();

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
            [ ABOUT ]
          </motion.p>
          <WordReveal
            text="Engineer first."
            className="mt-4 text-center font-display text-6xl sm:text-8xl md:text-[9rem]"
          />

          <div className="mx-auto mt-14 max-w-4xl sm:mt-24">
            <Reveal delay={0.3}>
              <div className="relative">
                <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-[80px]" />

                <p className="text-xl font-light leading-[1.7] text-muted-foreground sm:text-3xl sm:leading-[1.7]">
                  I'm a{" "}
                  <span className="font-medium text-foreground">
                    Software Engineer
                  </span>{" "}
                  who builds systems that behave under{" "}
                  <span className="font-medium text-foreground">load</span>,{" "}
                  <span className="font-medium text-foreground">intent</span>,
                  and{" "}
                  <span className="font-medium text-foreground">time</span> —
                  from full-stack products and APIs to deployment gates, RAG
                  pipelines, and AI review tooling. When the brief is still
                  fuzzy, I sit with the problem and ship anyway.
                </p>

                <div className="mt-10 flex flex-wrap gap-2">
                  {site.capabilities.map((cap) => (
                    <span
                      key={cap}
                      className="rounded-full border border-accent/30 bg-accent/5 px-4 py-2 text-sm font-medium text-accent"
                    >
                      {cap}
                    </span>
                  ))}
                </div>

                <div className="mt-16 space-y-6 border-t border-border pt-12">
                  <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                    [ EXPERIENCE ]
                  </p>
                  {site.experience.map((job) => (
                    <div
                      key={job.org}
                      className="grid gap-1 sm:grid-cols-[1fr_auto] sm:items-baseline"
                    >
                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl">
                          {job.org}
                        </h3>
                        <p className="mt-1 text-sm text-accent">{job.role}</p>
                        <p className="mt-2 text-muted-foreground">
                          {job.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                  >
                    <div className="font-display text-6xl text-foreground">
                      {projects.filter((p) => p.repoUrl).length}
                      <span className="text-accent">+</span>
                    </div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                      PUBLIC SYSTEMS
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    <div className="font-display text-6xl text-foreground">
                      2
                    </div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                      CURRENT ROLES
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="hidden sm:block"
                  >
                    <div className="font-display text-6xl text-foreground">
                      1
                    </div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                      BOOK PUBLISHED
                    </div>
                  </motion.div>
                </div>

                <p className="mt-16 text-lg text-muted-foreground sm:text-xl">
                  {site.availability}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    to="/resume"
                    className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    View résumé
                  </Link>
                  <a
                    href={site.resume}
                    download="Rohan_Patel_Resume.pdf"
                    className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
                  >
                    Download PDF
                  </a>
                  <button
                    onClick={open}
                    className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
                  >
                    Contact me
                  </button>
                  <Link
                    to="/projects"
                    className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
                  >
                    View work
                  </Link>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
