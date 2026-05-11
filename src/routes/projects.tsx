import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";

export const Route = createFileRoute("/projects")({
  component: Projects,
});

const projects = [
  { name: "IronClad", tag: "Deployment Safety · Go", blurb: "A deployment gate that evaluates deploy intent using live dependencies, incident history, and semantic risk scoring — preventing risky pushes before they ship.", meta: "Apache 2.0 · Go" },
  { name: "Docentra", tag: "AI Document Assistant · Go", blurb: "AI-powered document assistant with semantic search using Go, pgvector, and fastembed for intelligent retrieval across private document libraries.", meta: "Open Source · Go · pgvector" },
  { name: "Tribunal", tag: "AI Code Review · TypeScript", blurb: "The missing code review layer — AI that reviews what the AI wrote. Detects AI-generated code in PRs, analyzes context blindness, and briefs human reviewers.", meta: "MIT · TypeScript" },
  { name: "Hired by an Algorithm", tag: "Book · 2025", blurb: "A self-published guide on perfecting your resume — covering achievements, experience, and the mechanics of modern algorithmic hiring.", meta: "Self-published · Jun 2025" },
];

function Projects() {
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-muted-foreground text-center"
          >
            [ PROJECTS ]
          </motion.p>
          <WordReveal text="Selected works." className="mt-4 font-display text-6xl sm:text-8xl md:text-[9rem] text-center" />
          
          <div className="mt-16 grid gap-6 sm:mt-24 sm:gap-8 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-3xl border border-border bg-card p-8 sm:p-12"
                >
                  <span className="absolute inset-0 -z-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent sm:text-sm">{p.tag}</p>
                    <h3 className="mt-4 break-words font-display text-5xl sm:text-6xl md:text-7xl">{p.name}</h3>
                    <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:mt-8 sm:text-lg">{p.blurb}</p>
                  </div>
                  <div className="relative mt-10 flex items-center justify-between gap-3 border-t border-border pt-6 text-sm sm:mt-12 sm:text-base">
                    <span className="text-muted-foreground">{p.meta}</span>
                    <motion.span className="font-semibold whitespace-nowrap" whileHover={{ x: 4 }}>View Details →</motion.span>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
