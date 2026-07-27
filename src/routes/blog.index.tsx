import { useMemo, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";
import { PostCover } from "@/components/PostCover";
import { allTags, formatPostDate, posts, type PostTag } from "@/lib/posts";
import { blogJsonLd, jsonLdScript, pageSeo, personJsonLd } from "@/lib/seo";

const seo = pageSeo({
  title: "Writing — Rohan Patel",
  description:
    "Field notes on systems, AI, backends, and shipping — essays by Software Engineer Rohan Patel.",
  path: "/blog",
});

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: seo.meta,
    links: seo.links,
    scripts: [jsonLdScript([blogJsonLd(), personJsonLd()])],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  const [tag, setTag] = useState<PostTag | "All">("All");
  const filtered = useMemo(
    () => (tag === "All" ? posts : posts.filter((p) => p.tag === tag)),
    [tag],
  );
  const featured = filtered[0];
  const rest = filtered.slice(1);

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
              className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
            >
              [ WRITING ]
            </motion.p>
            <WordReveal
              text="Field notes."
              className="mt-4 text-center font-display text-5xl sm:text-7xl md:text-[8rem]"
            />
          </div>

          {/* Topic filter */}
          <Reveal delay={0.25}>
            <div className="mt-10 flex justify-center">
              <div
                role="tablist"
                aria-label="Filter essays by topic"
                className="inline-flex max-w-full flex-wrap items-center justify-center gap-1 rounded-2xl border border-border/70 bg-card/80 p-1.5 shadow-sm backdrop-blur-sm"
              >
                {(["All", ...allTags] as const).map((t) => {
                  const on = tag === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      role="tab"
                      aria-selected={on}
                      onClick={() => setTag(t)}
                      className={`rounded-xl px-3 py-2 font-mono text-[10px] uppercase tracking-[0.16em] transition-colors duration-200 sm:px-3.5 sm:py-2.5 ${
                        on
                          ? "bg-accent text-accent-foreground"
                          : "text-muted-foreground hover:bg-muted/60 hover:text-foreground"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <AnimatePresence mode="wait">
            {featured ? (
              <motion.div
                key={featured.slug + tag}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
                className="mt-10"
              >
                <Link
                  to="/blog/$slug"
                  params={{ slug: featured.slug }}
                  className="group grid overflow-hidden rounded-[1.75rem] border border-border bg-card lg:grid-cols-[1.15fr_0.85fr]"
                >
                  <PostCover
                    slug={featured.slug}
                    tag={featured.tag}
                    featured
                    className="min-h-[240px] sm:min-h-[300px] lg:min-h-full"
                  />
                  <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
                        Featured · {formatPostDate(featured.date)}
                      </p>
                      <h2 className="mt-4 font-display text-3xl leading-[0.92] transition-colors group-hover:text-accent sm:text-5xl lg:text-6xl">
                        {featured.title}
                      </h2>
                      <p className="mt-4 text-[15px] font-light leading-relaxed text-muted-foreground sm:text-base">
                        {featured.description}
                      </p>
                    </div>
                    <span className="mt-8 inline-flex w-fit items-center text-sm font-semibold transition-colors group-hover:text-accent">
                      Read essay →
                    </span>
                  </div>
                </Link>
              </motion.div>
            ) : (
              <p className="mt-16 text-center text-sm text-muted-foreground">
                No essays in this category.
              </p>
            )}
          </AnimatePresence>

          {rest.length > 0 && (
            <div className="mt-8 grid gap-5 sm:mt-10 sm:grid-cols-2 lg:grid-cols-3">
              {rest.map((p, i) => (
                <Reveal key={p.slug} delay={Math.min(i * 0.04, 0.24)}>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: p.slug }}
                    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border/80 bg-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5"
                  >
                    <PostCover
                      slug={p.slug}
                      tag={p.tag}
                      className="aspect-[16/10] w-full"
                    />
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                        {formatPostDate(p.date)}
                      </p>
                      <h3 className="mt-3 font-display text-2xl leading-[0.95] transition-colors group-hover:text-accent sm:text-3xl">
                        {p.title}
                      </h3>
                      <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted-foreground line-clamp-3">
                        {p.description}
                      </p>
                      <span className="mt-5 text-sm font-semibold text-muted-foreground transition-colors group-hover:text-accent">
                        Read →
                      </span>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <div className="h-16 sm:h-24" />
      <SiteFooter />
    </div>
  );
}
