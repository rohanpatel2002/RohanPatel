import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Instagram } from "lucide-react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, Magnetic } from "@/components/Motion";
import { site } from "@/lib/site";
import { resume, type ResumeRole } from "@/lib/resume";
import { useContactModal } from "@/hooks/use-contact-modal";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Résumé — Rohan Patel" },
      {
        name: "description",
        content:
          "Résumé of Rohan Patel — Software Engineer focused on full-stack, DevOps, and applied AI systems.",
      },
    ],
  }),
  component: Resume,
});

function Resume() {
  const [view, setView] = useState<"web" | "pdf">("web");
  const { open } = useContactModal();

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      {/* Hero — single integrated box */}
      <section className="relative overflow-hidden px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-16 h-80 w-80 -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        />

        <div className="relative mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden rounded-[1.75rem] border border-border/80 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.25)]"
          >
            <div className="grid md:grid-cols-2">
              {/* Identity */}
              <div className="flex flex-col justify-between bg-card/80 p-7 text-center backdrop-blur-sm sm:p-8 md:text-left">
                <div>
                  <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                    [ RÉSUMÉ ]
                  </p>
                  <h1 className="mt-4 font-display text-[clamp(2.35rem,9.5vw,4rem)] leading-none whitespace-nowrap">
                    Rohan Patel
                    <span className="text-accent">.</span>
                  </h1>
                  <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                    {site.title}
                    <span className="mx-2 text-border">·</span>
                    <span className="text-muted-foreground">
                      {resume.location}
                    </span>
                  </p>
                  <p className="mt-4 text-[14px] font-light leading-relaxed text-muted-foreground sm:text-[15px]">
                    Full-stack systems, resilient backends, and applied AI —
                    built to ship and stay operable.
                  </p>
                </div>

                <div className="mt-8 flex flex-col items-center md:items-start">
                  <div className="h-px w-12 bg-accent" />
                  <a
                    href={`tel:${resume.phone.replace(/\s/g, "")}`}
                    className="mt-4 font-mono text-[10px] uppercase tracking-[0.16em] text-muted-foreground transition-colors hover:text-accent"
                  >
                    {resume.phone}
                  </a>
                  <div className="mt-3 flex items-center gap-2.5">
                    <a
                      href={`mailto:${site.email}`}
                      aria-label="Email"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                    >
                      <Mail size={16} />
                    </a>
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={site.instagram}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-muted hover:text-accent"
                    >
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="relative flex flex-col justify-between gap-8 overflow-hidden bg-primary p-7 text-center text-primary-foreground sm:p-8 md:text-left">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-10 -top-10 h-44 w-44 rounded-full bg-accent/45 blur-3xl"
                  style={{ animation: "blob 18s ease-in-out infinite" }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute -bottom-14 left-0 h-36 w-36 rounded-full bg-accent/20 blur-3xl"
                />

                <div className="relative">
                  <p className="text-xs font-semibold tracking-[0.3em] opacity-70">
                    [ DOWNLOAD ]
                  </p>
                  <h2 className="mt-3 font-display text-[clamp(1.85rem,7.5vw,3.25rem)] leading-none whitespace-nowrap">
                    Get the résumé
                    <span className="text-accent">.</span>
                  </h2>
                  <p className="mx-auto mt-3 max-w-[22rem] text-[13px] font-light leading-relaxed opacity-80 md:mx-0 sm:text-sm">
                    Experience, projects, and stack — ready for roles or client
                    work.
                  </p>
                </div>

                <div className="relative space-y-2.5">
                  <Magnetic strength={0.08}>
                    <a
                      href={site.resume}
                      download="Rohan_Patel_Resume.pdf"
                      className="flex w-full items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                    >
                      Download PDF
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.08}>
                    <button
                      type="button"
                      onClick={open}
                      className="flex w-full items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-3 text-sm font-semibold transition-colors hover:bg-primary-foreground/10"
                    >
                      Get in touch
                    </button>
                  </Magnetic>

                  <div
                    role="tablist"
                    aria-label="Résumé view"
                    className="flex rounded-full border border-primary-foreground/20 bg-primary-foreground/5 p-1 font-mono text-[10px] uppercase tracking-[0.16em]"
                  >
                    {(["web", "pdf"] as const).map((v) => (
                      <button
                        key={v}
                        type="button"
                        role="tab"
                        aria-selected={view === v}
                        onClick={() => setView(v)}
                        className={`flex-1 rounded-full px-3 py-2 transition-colors ${
                          view === v
                            ? "bg-primary-foreground text-primary"
                            : "text-primary-foreground/60 hover:text-primary-foreground"
                        }`}
                      >
                        View {v}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {view === "pdf" ? (
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-border bg-muted">
              <iframe
                title="Rohan Patel résumé"
                src={`${site.resume}#view=FitH`}
                className="h-[80vh] min-h-[560px] w-full"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground">
              Preview not loading?{" "}
              <a
                href={site.resume}
                target="_blank"
                rel="noreferrer"
                className="font-medium text-accent underline underline-offset-4"
              >
                Open the PDF
              </a>
            </p>
          </div>
        </section>
      ) : (
        <>
          {/* Summary */}
          <section className="px-4 pt-16 sm:px-6 sm:pt-20">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ SUMMARY ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Overview
                </h2>
                <p className="mt-8 text-lg font-light leading-[1.8] text-muted-foreground sm:text-xl sm:leading-[1.75]">
                  <span className="text-foreground">{resume.summary}</span>
                </p>
              </Reveal>
            </div>
          </section>

          {/* Experience */}
          <section className="px-4 pt-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ EXPERIENCE ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Where I&apos;ve worked
                </h2>
              </Reveal>
              <div className="mt-12 space-y-16">
                {resume.experience.map((role, i) => (
                  <Reveal key={role.org} delay={Math.min(i * 0.06, 0.18)}>
                    <RoleEntry role={role} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Freelance */}
          <section className="px-4 pt-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ FREELANCE ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Client work
                </h2>
              </Reveal>
              <div className="mt-12 space-y-16">
                {resume.freelance.map((role, i) => (
                  <Reveal key={role.org} delay={Math.min(i * 0.06, 0.18)}>
                    <RoleEntry role={role} />
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="px-4 pt-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ PROJECTS ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Selected builds
                </h2>
              </Reveal>
              <div className="mt-12 divide-y divide-border border-y border-border">
                {resume.projects.map((project, i) => (
                  <Reveal key={project.name} delay={Math.min(i * 0.05, 0.15)}>
                    <div className="py-8">
                      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                        <h3 className="font-display text-2xl sm:text-3xl">
                          {project.name}
                        </h3>
                        {project.slug ? (
                          <Link
                            to="/projects/$slug"
                            params={{ slug: project.slug }}
                            className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:underline"
                          >
                            Case study →
                          </Link>
                        ) : null}
                      </div>
                      <ul className="mt-4 space-y-2.5">
                        {project.points.map((point) => (
                          <li
                            key={point}
                            className="flex gap-3 text-[15px] font-light leading-relaxed text-muted-foreground"
                          >
                            <span
                              aria-hidden
                              className="mt-[0.7em] h-px w-3 shrink-0 bg-accent"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Skills */}
          <section className="px-4 pt-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ SKILLS ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Stack
                </h2>
              </Reveal>
              <div className="mt-12 divide-y divide-border border-y border-border">
                {resume.skills.map((group, i) => (
                  <Reveal key={group.group} delay={Math.min(i * 0.04, 0.16)}>
                    <div className="grid gap-2 py-6 sm:grid-cols-[140px_1fr] sm:gap-10">
                      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent sm:pt-1">
                        {group.group}
                      </p>
                      <p className="text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
                        {group.items.join(" · ")}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Research */}
          <section className="px-4 pt-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ PUBLICATIONS ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Research
                </h2>
              </Reveal>
              <div className="mt-10 space-y-8">
                {resume.publications.map((pub, i) => (
                  <Reveal key={pub.title} delay={i * 0.06}>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                        {pub.venue}
                      </p>
                      <h3 className="mt-2 text-lg font-medium leading-snug sm:text-xl">
                        {pub.title}
                      </h3>
                      <p className="mt-2 text-sm font-light leading-relaxed text-muted-foreground">
                        {pub.detail}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Book */}
          <section className="px-4 pt-20 sm:px-6 sm:pt-28">
            <div className="mx-auto max-w-3xl">
              <Reveal>
                <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                  [ BOOK ]
                </p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  Hired by an Algorithm.
                </h2>
              </Reveal>
              <Reveal delay={0.08}>
                <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                  Self-published · Jun 2025 · Amazon Kindle
                </p>
                <p className="mt-6 max-w-2xl text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
                  A field guide to how ATS and hiring algorithms parse resumes —
                  turning parser behavior into concrete writing rules so
                  applications survive the algorithmic gate without losing
                  clarity.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href={site.book}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-90"
                  >
                    Get the book on Amazon →
                  </a>
                  <Link
                    to="/projects/$slug"
                    params={{ slug: "hired-by-algorithm" }}
                    className="inline-flex rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-muted"
                  >
                    Case study
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Close — contact-style box */}
          <section className="px-4 py-20 sm:px-6 sm:py-28">
            <Reveal>
              <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-10 md:p-14">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-accent/40 blur-3xl"
                  style={{ animation: "blob 18s ease-in-out infinite" }}
                />
                <p className="relative text-xs font-semibold tracking-[0.3em] opacity-70">
                  [ NEXT ]
                </p>
                <h2 className="relative mt-4 font-display text-4xl sm:text-6xl md:text-7xl">
                  Let&apos;s talk
                  <span className="text-accent">.</span>
                </h2>
                <p className="relative mt-4 max-w-md text-sm opacity-80 sm:text-base">
                  Grab the PDF, or write me about a role that fits.
                </p>
                <div className="relative mt-8 flex flex-wrap items-center gap-3">
                  <Magnetic strength={0.08}>
                    <a
                      href={site.resume}
                      download="Rohan_Patel_Resume.pdf"
                      className="inline-flex items-center justify-center rounded-full border border-transparent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:px-7 sm:py-3"
                    >
                      Download PDF
                    </a>
                  </Magnetic>
                  <Magnetic strength={0.08}>
                    <button
                      type="button"
                      onClick={open}
                      className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3"
                    >
                      Write me
                    </button>
                  </Magnetic>
                </div>
              </div>
            </Reveal>
          </section>
        </>
      )}

      <SiteFooter />
    </div>
  );
}

function RoleEntry({ role }: { role: ResumeRole }) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-3xl leading-[0.95] sm:text-4xl">
          {role.org}
        </h3>
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
          {role.period}
        </p>
      </div>
      <p className="mt-2 text-sm font-medium text-accent">
        {role.role}
        {role.location ? (
          <span className="font-normal text-muted-foreground">
            {" "}
            · {role.location}
          </span>
        ) : null}
      </p>

      <div className="mt-6 space-y-5">
        {role.blocks.map((block, i) => (
          <div key={block.label ?? i}>
            {block.label ? (
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                {block.label}
              </p>
            ) : null}
            <ul className="space-y-2.5">
              {block.points.map((point) => (
                <li
                  key={point}
                  className="flex gap-3 text-[15px] font-light leading-relaxed text-muted-foreground"
                >
                  <span
                    aria-hidden
                    className="mt-[0.7em] h-px w-3 shrink-0 bg-accent"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </article>
  );
}
