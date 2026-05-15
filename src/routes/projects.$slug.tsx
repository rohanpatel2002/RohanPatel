import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/data";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { motion } from "framer-motion";

export const Route = createFileRoute("/projects/$slug")({
  loader: ({ params }) => {
    const project = projects.find((p) => p.slug === params.slug);
    if (!project) throw new Error("Project not found");
    return project;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.name} — Rohan Patel` },
      { name: "description", content: loaderData.blurb },
    ],
  }),
  component: Project,
});

function Project() {
  const project = Route.useLoaderData();

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <section className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-5xl">
          <Link to="/projects" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            ← Back to projects
          </Link>
          
          <div className="mt-12 grid gap-10 md:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accent">{project.tag}</p>
              <h1 className="mt-4 font-display text-6xl sm:text-8xl">{project.name}</h1>
              <p className="mt-8 text-xl text-muted-foreground leading-relaxed">{project.blurb}</p>
              
              <div className="mt-10 border-t border-border pt-8">
                <p className="text-sm font-semibold tracking-widest text-muted-foreground uppercase">[ STACK ]</p>
                <p className="mt-2 text-lg">{project.meta}</p>
              </div>
            </motion.div>

            <Reveal delay={0.3}>
              <div className="aspect-[4/5] overflow-hidden rounded-3xl bg-muted">
                {/* Image placeholder or dynamic image if available */}
                <div className="flex h-full items-center justify-center text-muted-foreground opacity-20">
                  <span className="font-display text-4xl uppercase tracking-tighter">PROJECT PREVIEW</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.5}>
            <div className="mt-20 border-t border-border pt-12">
              <h2 className="font-display text-4xl sm:text-5xl uppercase tracking-tight">Overview</h2>
              <div className="mt-8 prose prose-xl dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
                {project.content ? (
                  <p>{project.content}</p>
                ) : (
                  <p>Detailed project overview coming soon...</p>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
