import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — Rohan Patel" },
      { name: "description", content: "Essays on systems, AI, and software engineering by Rohan Patel." },
    ],
  }),
  component: Blog,
});

const posts = [
  { slug: "deployment-gates", title: "Why Deployment Gates Should Read Incidents", date: "May 2026", tag: "Systems", excerpt: "Most CI gates check syntax. The interesting ones check intent — and the best ones learn from your past outages." },
  { slug: "ai-reviewing-ai", title: "AI Reviewing AI: The Missing Layer", date: "Apr 2026", tag: "AI", excerpt: "When LLMs write your PRs, who reviews the context they couldn't see? A field report from building Tribunal." },
  { slug: "pgvector-in-go", title: "Building Semantic Search in Go with pgvector", date: "Mar 2026", tag: "Backend", excerpt: "Notes from shipping Docentra — embedding pipelines, query design, and where Postgres genuinely shines." },
  { slug: "hired-by-algorithm", title: "Hired by an Algorithm: Lessons from Writing the Book", date: "Feb 2026", tag: "Career", excerpt: "What modern hiring algorithms actually look at — and the small structural choices that move resumes through them." },
];

function Blog() {
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
          >
            [ BLOG ]
          </motion.p>
          <WordReveal text="Notes & essays." className="mt-4 font-display text-6xl sm:text-8xl md:text-[9rem]" />
          <Reveal delay={0.3}>
            <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground sm:mt-8 sm:text-lg">
              Writing about the systems I build — engineering, AI, and the small decisions that compound.
            </p>
          </Reveal>
        </div>

        <div className="mx-auto mt-14 max-w-5xl divide-y divide-border border-y border-border sm:mt-20">
          {posts.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.08}>
              <motion.div whileHover={{ x: 8 }} transition={{ type: "spring", stiffness: 200, damping: 20 }}>
                <Link to="/blog" className="group flex flex-col gap-3 py-6 sm:py-8 md:flex-row md:items-baseline md:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-muted-foreground sm:gap-3 sm:text-xs">
                      <span>{p.date}</span>·<span className="text-accent">{p.tag}</span>
                    </div>
                    <h2 className="mt-2 font-display text-2xl transition-colors group-hover:text-accent sm:text-3xl md:text-5xl">{p.title}</h2>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground sm:mt-3 sm:text-base">{p.excerpt}</p>
                  </div>
                  <span className="text-sm font-semibold transition-colors group-hover:text-accent">Read →</span>
                </Link>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
