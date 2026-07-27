import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { site } from "@/lib/site";
import { resume, type ResumeRole } from "@/lib/resume";

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

const SECTIONS = [
  { id: "summary", label: "Summary" },
  { id: "experience", label: "Experience" },
  { id: "freelance", label: "Freelance" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "publications", label: "Publications" },
  { id: "education", label: "Education" },
];

function Resume() {
  const [view, setView] = useState<"web" | "pdf">("web");

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            [ RÉSUMÉ ]
          </p>
          <WordReveal
            text="Rohan Patel."
            className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl"
          />

          <Reveal delay={0.15}>
            <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">
              {site.availability}
            </p>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <li>{resume.location}</li>
              <li>
                <a className="hover:text-foreground" href={`tel:${resume.phone.replace(/\s/g, "")}`}>
                  {resume.phone}
                </a>
              </li>
              <li>
                <a className="hover:text-foreground" href={`mailto:${site.email}`}>
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground"
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  className="hover:text-foreground"
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.25}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={site.resume}
                download="Rohan_Patel_Resume.pdf"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                Download PDF
              </a>
              <a
                href={`mailto:${site.email}`}
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
              >
                Email me
              </a>
              <Link
                to="/projects"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
              >
                See the work
              </Link>

              <div className="ml-auto flex rounded-full border border-border bg-card p-1 font-mono text-[10px] uppercase tracking-[0.2em]">
                {(["web", "pdf"] as const).map((v) => (
                  <button
                    key={v}
                    type="button"
                    onClick={() => setView(v)}
                    aria-pressed={view === v}
                    className={`rounded-full px-4 py-2 transition-colors ${
                      view === v
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {view === "pdf" ? (
        <section className="px-4 py-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <div className="overflow-hidden rounded-3xl border border-border bg-muted">
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
                className="font-medium text-accent underline"
              >
                Open the PDF in a new tab
              </a>
              .
            </p>
          </div>
        </section>
      ) : (
        <section className="px-4 pb-8 pt-14 sm:px-6">
          <div className="mx-auto max-w-5xl">
            <nav className="flex flex-wrap gap-x-5 gap-y-2 border-y border-border py-4 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              {SECTIONS.map((s) => (
                <a key={s.id} href={`#${s.id}`} className="hover:text-accent">
                  {s.label}
                </a>
              ))}
            </nav>

            <Section id="summary" title="Summary">
              <p className="text-lg font-light leading-[1.8] text-foreground">
                {resume.summary}
              </p>
            </Section>

            <Section id="experience" title="Experience">
              <div className="space-y-12">
                {resume.experience.map((role) => (
                  <RoleEntry key={role.org} role={role} />
                ))}
              </div>
            </Section>

            <Section id="freelance" title="Freelance">
              <div className="space-y-12">
                {resume.freelance.map((role) => (
                  <RoleEntry key={role.org} role={role} />
                ))}
              </div>
            </Section>

            <Section id="projects" title="Projects">
              <div className="space-y-8">
                {resume.projects.map((project) => (
                  <div key={project.name}>
                    <div className="flex items-baseline gap-3">
                      <h3 className="font-display text-2xl">{project.name}</h3>
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
                    <Points points={project.points} />
                  </div>
                ))}
              </div>
            </Section>

            <Section id="skills" title="Skills">
              <div className="space-y-7">
                {resume.skills.map((group) => (
                  <div key={group.group}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                      {group.group}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

            <Section id="publications" title="Publications">
              <div className="space-y-6">
                {resume.publications.map((pub) => (
                  <div key={pub.title}>
                    <h3 className="text-lg font-medium leading-snug">
                      “{pub.title}”
                    </h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                      {pub.venue}
                    </p>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {pub.detail}
                    </p>
                  </div>
                ))}
                <a
                  href={site.orcid}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block font-mono text-[10px] uppercase tracking-[0.2em] text-accent hover:underline"
                >
                  ORCID record →
                </a>
              </div>
            </Section>

            <Section id="education" title="Education">
              <h3 className="font-display text-2xl">
                {resume.education.degree}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {resume.education.school}
              </p>
            </Section>
          </div>
        </section>
      )}

      <SiteFooter />
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 border-b border-border py-12 sm:py-16"
    >
      <div className="grid gap-6 md:grid-cols-[180px_1fr] md:gap-12">
        <h2 className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:sticky md:top-28 md:self-start">
          {title}
        </h2>
        <Reveal>
          <div>{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

function RoleEntry({ role }: { role: ResumeRole }) {
  return (
    <article>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="font-display text-2xl leading-tight sm:text-3xl">
          {role.org}
        </h3>
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {role.period}
        </span>
      </div>
      <p className="mt-2 text-sm font-medium text-accent">{role.role}</p>
      {role.location ? (
        <p className="mt-1 text-xs text-muted-foreground">{role.location}</p>
      ) : null}

      <div className="mt-6 space-y-6 border-l border-border pl-5 sm:pl-6">
        {role.blocks.map((block, i) => (
          <div key={block.label ?? i}>
            {block.label ? (
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground">
                {block.label}
              </p>
            ) : null}
            <Points points={block.points} tight={!block.label} />
          </div>
        ))}
      </div>
    </article>
  );
}

function Points({ points, tight }: { points: readonly string[]; tight?: boolean }) {
  return (
    <ul className={`${tight ? "mt-0" : "mt-3"} space-y-2.5`}>
      {points.map((point) => (
        <li
          key={point}
          className="flex gap-3 text-sm font-light leading-[1.7] text-muted-foreground"
        >
          <span aria-hidden className="mt-2 h-px w-3 shrink-0 bg-accent" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
}
