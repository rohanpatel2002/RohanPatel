import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal } from "@/components/Motion";
import { PostCover } from "@/components/PostCover";
import {
  formatPostDate,
  getAdjacentPosts,
  getPost,
} from "@/lib/posts";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";
import {
  blogPostingJsonLd,
  breadcrumbJsonLd,
  jsonLdScript,
  pageSeo,
} from "@/lib/seo";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) throw notFound();
    const { prev, next } = getAdjacentPosts(params.slug);
    const relatedProject = post.relatedProject
      ? projects.find((p) => p.slug === post.relatedProject)
      : undefined;
    return { post, prev, next, relatedProject };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Not found — Rohan Patel" }] };
    }
    const { post } = loaderData;
    const seo = pageSeo({
      title: `${post.title} — Rohan Patel`,
      description: post.description,
      path: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      tags: [post.tag, ...post.keywords],
    });
    return {
      meta: seo.meta,
      links: seo.links,
      scripts: [
        jsonLdScript([
          blogPostingJsonLd(post),
          breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Writing", path: "/blog" },
            { name: post.title, path: `/blog/${post.slug}` },
          ]),
        ]),
      ],
    };
  },
  component: Post,
});

function Post() {
  const { post, prev, next, relatedProject } = Route.useLoaderData();
  const articleRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: articleRef,
    offset: ["start start", "end end"],
  });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [showBar, setShowBar] = useState(false);

  useEffect(() => {
    const unsub = scrollYProgress.on("change", (v) => setShowBar(v > 0.02 && v < 0.98));
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      <motion.div
        aria-hidden
        className="fixed left-0 right-0 top-0 z-[60] h-[2px] origin-left bg-accent"
        style={{
          width: progressWidth,
          opacity: showBar ? 1 : 0,
          transition: "opacity 0.25s ease",
        }}
      />

      <article ref={articleRef} className="relative">
        <div className="px-4 pt-20 sm:px-6 sm:pt-24">
          <div className="mx-auto max-w-5xl">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-accent"
              >
                <span aria-hidden>←</span> Writing
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
              className="mt-6 overflow-hidden rounded-[1.5rem] border border-border"
            >
              <PostCover
                slug={post.slug}
                tag={post.tag}
                featured
                className="aspect-[21/9] min-h-[180px] w-full sm:min-h-[240px]"
              />
            </motion.div>
          </div>
        </div>

        <header className="px-4 pt-10 sm:px-6 sm:pt-12">
          <div className="mx-auto max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
            >
              <div className="flex flex-wrap items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:gap-3">
                <span className="text-accent">{post.tag}</span>
                <span aria-hidden>·</span>
                <span>{formatPostDate(post.date)}</span>
              </div>

              <h1 className="mt-5 font-display text-[clamp(2.4rem,8vw,5.5rem)] leading-[0.92]">
                {post.title}
              </h1>

              <p className="mt-6 max-w-2xl text-lg font-light leading-[1.7] text-muted-foreground sm:text-xl sm:leading-[1.7]">
                {post.description}
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-5 border-y border-border py-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card font-display text-sm text-accent">
                    RP
                  </div>
                  <div>
                    <p className="text-sm font-medium">{site.name}</p>
                    <p className="text-xs text-muted-foreground">{site.title}</p>
                  </div>
                </div>
                <div className="ml-auto flex flex-wrap gap-4 font-mono text-[10px] uppercase tracking-[0.18em]">
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    GitHub
                  </a>
                  <a
                    href={`mailto:${site.email}`}
                    className="text-muted-foreground transition-colors hover:text-accent"
                  >
                    Email
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Body */}
        <div className="px-4 sm:px-6">
          <div className="mx-auto max-w-3xl">
            <Reveal delay={0.15}>
              <div
                className="article-prose mt-12 sm:mt-14"
                dangerouslySetInnerHTML={{ __html: post.html }}
              />
            </Reveal>

            {relatedProject && (
              <Reveal>
                <Link
                  to="/projects/$slug"
                  params={{ slug: relatedProject.slug }}
                  className="group mt-14 block border-y border-border py-8"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                    Related project
                  </p>
                  <p className="mt-2 font-display text-3xl transition-colors group-hover:text-accent sm:text-4xl">
                    {relatedProject.name}
                  </p>
                  <p className="mt-2 max-w-md text-sm font-light text-muted-foreground">
                    {relatedProject.blurb}
                  </p>
                  <span className="mt-4 inline-block text-sm font-medium group-hover:text-accent">
                    Case study →
                  </span>
                </Link>
              </Reveal>
            )}

            <nav className="mt-12 grid gap-px border-y border-border bg-border sm:grid-cols-2">
              {prev ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: prev.slug }}
                  className="group bg-background p-6 transition-colors hover:bg-muted/40 sm:p-7"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    ← Older
                  </p>
                  <p className="mt-2 font-display text-xl leading-tight transition-colors group-hover:text-accent sm:text-2xl">
                    {prev.title}
                  </p>
                </Link>
              ) : (
                <div className="hidden bg-background sm:block" />
              )}
              {next ? (
                <Link
                  to="/blog/$slug"
                  params={{ slug: next.slug }}
                  className="group bg-background p-6 text-left transition-colors hover:bg-muted/40 sm:p-7 sm:text-right"
                >
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    Newer →
                  </p>
                  <p className="mt-2 font-display text-xl leading-tight transition-colors group-hover:text-accent sm:text-2xl">
                    {next.title}
                  </p>
                </Link>
              ) : null}
            </nav>
          </div>
        </div>
      </article>

      <SiteFooter />
    </div>
  );
}
