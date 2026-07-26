import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/data";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal } from "@/components/Motion";
import { motion } from "framer-motion";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = posts.find((p) => p.slug === params.slug);
    if (!post) throw new Error("Post not found");
    return post;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.title} — Rohan Patel` },
      { name: "description", content: loaderData.excerpt },
    ],
  }),
  component: Post,
});

function Post() {
  const post = Route.useLoaderData();

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <section className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-3xl">
          <Link
            to="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
          >
            ← Back to writing
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <span>{post.date}</span>·
              <span className="text-accent">{post.tag}</span>
              {post.draft && (
                <>
                  ·<span>Notes</span>
                </>
              )}
            </div>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl">
              {post.title}
            </h1>
            <p className="mt-6 text-xl italic text-muted-foreground">
              {post.excerpt}
            </p>
          </motion.div>

          <Reveal delay={0.4}>
            <div className="prose prose-lg mt-12 max-w-none leading-relaxed text-muted-foreground dark:prose-invert">
              {post.content ? <p>{post.content}</p> : null}
              {post.draft && (
                <p className="mt-8 rounded-2xl border border-border bg-card p-5 text-sm not-italic text-muted-foreground">
                  Full essay forthcoming. This page holds the thesis and
                  excerpt until the long-form version ships.
                </p>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
