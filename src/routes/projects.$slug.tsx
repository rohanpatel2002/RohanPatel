import { createFileRoute, Link } from "@tanstack/react-router";
import { projects } from "@/lib/data";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal } from "@/components/Motion";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

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

const tabs = ["OVERVIEW", "SYSTEM SPECS", "CODE"] as const;
type Tab = typeof tabs[number];

function Project() {
  const project = Route.useLoaderData();
  const [activeTab, setActiveTab] = useState<Tab>("OVERVIEW");

  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-muted-foreground uppercase transition-colors hover:text-accent"
          >
            ← Back
          </Link>

          <div className="mt-10 grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Left: Title block */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                {project.tag}
              </p>
              <h1 className="mt-4 font-display text-6xl leading-none sm:text-7xl md:text-8xl">
                {project.name}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
                {project.blurb}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                <span className="font-mono text-xs text-muted-foreground">{project.meta}</span>
              </div>
            </motion.div>

            {/* Right: Specs panel */}
            {project.specs && (
              <Reveal delay={0.2}>
                <div className="rounded-3xl border border-border bg-card p-8">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    [ SYSTEM SPECIFICATIONS ]
                  </p>
                  <div className="mt-6 grid grid-cols-2 gap-6">
                    {Object.entries(project.specs).map(([key, value], i) => (
                      <motion.div
                        key={key}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 + i * 0.08, duration: 0.5 }}
                        className="flex flex-col border-l-2 border-accent/30 pl-4"
                      >
                        <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                          {key}
                        </span>
                        <span className="mt-1.5 text-sm font-semibold text-foreground">
                          {value}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="mt-16 px-4 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Tab bar */}
          <div className="flex gap-1 rounded-full border border-border bg-card p-1 w-fit">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative rounded-full px-5 py-2 font-mono text-xs font-semibold tracking-widest uppercase transition-all ${
                  activeTab === tab
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="mt-10 pb-24">
            <AnimatePresence mode="wait">
              {activeTab === "OVERVIEW" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-3xl"
                >
                  <h2 className="font-display text-4xl sm:text-5xl">The Problem.</h2>
                  <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                    {project.content ?? "Detailed project overview coming soon."}
                  </p>

                  {/* Architecture approach */}
                  <div className="mt-12 grid gap-4 sm:grid-cols-3">
                    {[
                      { label: "Design Goal", value: "Production Resilience" },
                      { label: "Approach", value: "Systems-First Engineering" },
                      { label: "Outcome", value: "Observable, Testable, Deployable" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="rounded-2xl border border-border bg-card p-5"
                      >
                        <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                          {item.label}
                        </p>
                        <p className="mt-2 text-sm font-semibold">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === "SYSTEM SPECS" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                >
                  {project.specs ? (
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {Object.entries(project.specs).map(([key, value], i) => (
                        <motion.div
                          key={key}
                          initial={{ opacity: 0, y: 16 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.06 }}
                          className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
                        >
                          <span className="absolute right-4 top-4 font-mono text-[40px] font-bold text-foreground/[0.03]">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                            {key}
                          </p>
                          <p className="mt-3 text-lg font-semibold text-foreground">{value}</p>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No specs available for this project.</p>
                  )}
                </motion.div>
              )}

              {activeTab === "CODE" && (
                <motion.div
                  key="code"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="max-w-4xl"
                >
                  {project.codeSnippet ? (
                    <div className="overflow-hidden rounded-3xl border border-border">
                      {/* IDE chrome */}
                      <div className="flex items-center justify-between border-b border-border bg-[#070a0f] px-5 py-3">
                        <div className="flex items-center gap-2">
                          <span className="h-3 w-3 rounded-full bg-red-500/80" />
                          <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                          <span className="h-3 w-3 rounded-full bg-green-500/80" />
                          <span className="ml-3 font-mono text-xs text-gray-500">
                            {project.slug}.go
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                          <span className="font-mono text-[10px] text-gray-500">
                            Core Implementation
                          </span>
                        </div>
                      </div>

                      {/* Code body */}
                      <div className="bg-[#0b0f17] p-8">
                        <pre className="overflow-x-auto font-mono text-sm leading-7 text-gray-300">
                          <code>{project.codeSnippet}</code>
                        </pre>
                      </div>
                    </div>
                  ) : (
                    <p className="text-muted-foreground">No code preview available.</p>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
