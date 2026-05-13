import { createFileRoute, Link } from "@tanstack/react-router";
import { posts } from "@/lib/data";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
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
          <Link to="/blog" className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors">
            ← Back to blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8"
          >
            <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              <span>{post.date}</span>·<span className="text-accent">{post.tag}</span>
            </div>
            <h1 className="mt-4 font-display text-5xl sm:text-7xl md:text-8xl">{post.title}</h1>
            <p className="mt-6 text-xl text-muted-foreground italic">{post.excerpt}</p>
          </motion.div>

          <Reveal delay={0.4}>
            <div className="mt-12 prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
              {post.content ? (
                <p>{post.content}</p>
              ) : (
                <p>Content coming soon...</p>
              )}
            </div>
          </Reveal>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
