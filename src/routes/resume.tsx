import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { site } from "@/lib/site";

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
          <Reveal delay={0.2}>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href={site.resume}
                download="Rohan_Patel_Resume.pdf"
                className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
              >
                Download PDF
              </a>
              <Link
                to="/about"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
              >
                About
              </Link>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold hover:bg-muted"
              >
                LinkedIn
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="mt-10 overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
              <iframe
                title="Rohan Patel résumé"
                src={`${site.resume}#view=FitH`}
                className="h-[75vh] w-full min-h-[560px] bg-muted"
              />
            </div>
            <p className="mt-4 text-center text-sm text-muted-foreground sm:hidden">
              If the preview doesn’t load on mobile,{" "}
              <a
                href={site.resume}
                className="font-medium text-accent underline"
              >
                open the PDF
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
