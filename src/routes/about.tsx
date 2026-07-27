import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { site } from "@/lib/site";
import { resume } from "@/lib/resume";
import { useContactModal } from "@/hooks/use-contact-modal";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rohan Patel" },
      {
        name: "description",
        content:
          "Software Engineer building production-grade systems across full-stack product engineering, backend architecture, DevOps reliability, and applied AI delivery.",
      },
    ],
  }),
  component: About,
});

const FOCUS = [
  {
    title: "Full-stack product systems",
    body: "Interfaces, APIs, and data models designed as one coherent product — not bolted-together layers.",
  },
  {
    title: "Backend & infrastructure",
    body: "Go and Node services with clean contracts, multi-tenant data boundaries, and operational observability.",
  },
  {
    title: "Applied AI in production",
    body: "RAG pipelines, semantic search, and review tooling with measurable quality and reversible risk.",
  },
  {
    title: "Forward-deployed delivery",
    body: "Sitting with ambiguous briefs, narrowing the problem, and shipping something the team can own.",
  },
] as const;

function About() {
  const { open } = useContactModal();

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-36">
        <div className="mx-auto max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
          >
            [ ABOUT ]
          </motion.p>

          <WordReveal
            text="Rohan Patel."
            className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl"
          />

          <Reveal delay={0.12}>
            <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              Software Engineer · {resume.location}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-10 text-xl font-light leading-[1.65] text-muted-foreground sm:text-2xl sm:leading-[1.6]">
              I build and ship{" "}
              <span className="font-medium text-foreground">
                production systems that stay reliable under pressure
              </span>
              . Full-stack products, resilient backend APIs, and AI-assisted
              workflows — with explicit guarantees for safety, rollback, and
              operational clarity.
            </p>
          </Reveal>

          <Reveal delay={0.28}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              Currently engineering at{" "}
              <span className="font-medium text-foreground">
                Praalak Tech Solutions
              </span>{" "}
              and contributing research software at the{" "}
              <span className="font-medium text-foreground">
                Physical Research Laboratory
              </span>
              . Author of two peer-reviewed ML papers and{" "}
              <a
                href={site.book}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-foreground underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
              >
                Hired by an Algorithm
              </a>
              .
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-8">
              <button
                type="button"
                onClick={open}
                className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Get in touch
              </button>
              <Link
                to="/resume"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                View résumé →
              </Link>
              <Link
                to="/projects"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                Selected work →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Focus */}
      <section className="px-4 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              [ FOCUS ]
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              What I do
            </h2>
          </Reveal>

          <div className="mt-12 divide-y divide-border border-y border-border">
            {FOCUS.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="grid gap-3 py-8 sm:grid-cols-[160px_1fr] sm:gap-10">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight sm:text-xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                      {item.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="px-4 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              [ EXPERIENCE ]
            </p>
            <h2 className="mt-3 font-display text-4xl uppercase sm:text-5xl">
              Where I've worked
            </h2>
          </Reveal>

          <div className="mt-12 space-y-14">
            {resume.experience.map((job, i) => {
              const highlight =
                job.blocks[0]?.points[0] ??
                site.experience.find((e) => e.org === job.org)?.detail ??
                "";
              return (
                <Reveal key={job.org} delay={i * 0.08}>
                  <article>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="font-display text-3xl leading-[0.95] sm:text-4xl">
                        {job.org}
                      </h3>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {job.period}
                      </p>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent">
                      {job.role}
                      {job.location ? (
                        <span className="font-normal text-muted-foreground">
                          {" "}
                          · {job.location}
                        </span>
                      ) : null}
                    </p>
                    <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                      {highlight}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Education + writing */}
      <section className="px-4 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              [ BACKGROUND ]
            </p>
          </Reveal>

          <div className="mt-10 grid gap-12 sm:grid-cols-2 sm:gap-16">
            <Reveal>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">Education</h3>
                <p className="mt-4 text-base font-medium">{resume.education.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {resume.education.degree}
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div>
                <h3 className="font-display text-2xl sm:text-3xl">Writing</h3>
                <ul className="mt-4 space-y-5">
                  {resume.publications.map((pub) => (
                    <li key={pub.title}>
                      <p className="text-sm font-medium leading-snug">
                        {pub.title}
                      </p>
                      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {pub.venue}
                      </p>
                    </li>
                  ))}
                  <li>
                    <a
                      href={site.book}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-medium leading-snug transition-colors hover:text-accent"
                    >
                      Hired by an Algorithm →
                    </a>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                      Book · 2025
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-20 sm:px-6 sm:py-28">
        <div className="mx-auto max-w-3xl border-t border-border pt-14">
          <Reveal>
            <h2 className="font-display text-4xl uppercase sm:text-5xl md:text-6xl">
              Open to the right role.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {site.availability} Prefer async? Email works just as well.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <button
                type="button"
                onClick={open}
                className="rounded-full bg-foreground px-5 py-2.5 text-sm font-semibold text-background transition-opacity hover:opacity-90"
              >
                Contact me
              </button>
              <a
                href={`mailto:${site.email}`}
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                {site.email}
              </a>
              <a
                href={site.github}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
              >
                GitHub →
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
