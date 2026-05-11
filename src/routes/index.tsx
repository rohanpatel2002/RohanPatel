import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal, Marquee, Parallax } from "@/components/Motion";

export const Route = createFileRoute("/")({
  component: Index,
});

const projects = [
  { name: "IronClad", tag: "Deployment Safety · Go", blurb: "A deployment gate that evaluates deploy intent using live dependencies, incident history, and semantic risk scoring — preventing risky pushes before they ship.", meta: "Apache 2.0 · Go" },
  { name: "Docentra", tag: "AI Document Assistant · Go", blurb: "AI-powered document assistant with semantic search using Go, pgvector, and fastembed for intelligent retrieval across private document libraries.", meta: "Open Source · Go · pgvector" },
  { name: "Tribunal", tag: "AI Code Review · TypeScript", blurb: "The missing code review layer — AI that reviews what the AI wrote. Detects AI-generated code in PRs, analyzes context blindness, and briefs human reviewers.", meta: "MIT · TypeScript" },
  { name: "Hired by an Algorithm", tag: "Book · 2025", blurb: "A self-published guide on perfecting your resume — covering achievements, experience, and the mechanics of modern algorithmic hiring.", meta: "Self-published · Jun 2025" },
];

const services = [
  { n: "01", title: "Full-Stack Systems", body: "End-to-end web applications built with React, TypeScript, Node, and Go — engineered for scale and clarity." },
  { n: "02", title: "AI Integration", body: "LLMs, RAG, vector search, and LangChain in real products — with guardrails that actually hold." },
  { n: "03", title: "Backend & APIs", body: "Django, REST, gRPC, PostgreSQL, MongoDB. Clean contracts, predictable performance, observable systems." },
  { n: "04", title: "DevOps & CI/CD", body: "Pipelines, infrastructure, and deployment safety nets so teams ship faster without breaking things." },
];

const process = [
  { n: "01.", title: "DISCOVER", body: "Understand the problem, the users, and the constraints before writing a single line of code." },
  { n: "02.", title: "DESIGN", body: "Map the architecture, data model, and edge cases. Decide what to build — and what not to." },
  { n: "03.", title: "BUILD", body: "Ship in tight iterations with tests, types, and observability built in from day one." },
  { n: "04.", title: "REFINE", body: "Measure, profile, harden. Polish the rough edges until the product feels inevitable." },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const words = ["RESILIENT", "SCALABLE", "ROBUST", "ELEGANT"];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(timer);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const buttonOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4 pt-24 sm:px-6">
      {/* animated blobs */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-[40vw] w-[40vw] rounded-full bg-accent/30 blur-3xl" style={{ animation: "blob 22s ease-in-out infinite" }} />
        <div className="absolute right-[5%] bottom-[10%] h-[35vw] w-[35vw] rounded-full bg-primary/20 blur-3xl" style={{ animation: "blob 30s ease-in-out infinite reverse" }} />
      </div>

      <motion.div style={{ y, opacity, scale }} className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
        >
          [ ROHAN PATEL — SOFTWARE ENGINEER ]
        </motion.p>

        <h1 className="mt-6 font-display text-[15vw] leading-[0.9] sm:text-[14vw] md:text-[12vw]">
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              I BUILD
            </motion.span>
          </span>
          <span className="relative block h-[0.9em] overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ 
                  duration: 0.6, 
                  ease: [0.22, 1, 0.36, 1],
                  delay: index === 0 ? 0.45 : 0 // Slight delay only for the first word on mount
                }}
                className="absolute inset-0 block text-accent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              SOFTWARE
            </motion.span>
          </span>
          <span className="block overflow-hidden">
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.75, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              SYSTEMS<span className="text-accent">.</span>
            </motion.span>
          </span>
        </h1>

        <motion.p
          style={{ opacity: buttonOpacity }}
          className="mx-auto mt-10 max-w-xl text-base text-muted-foreground md:text-lg"
        >
          Full-stack & AI systems. Tools that are sharp, fast, and built to last.
        </motion.p>

        <motion.div
          style={{ opacity: buttonOpacity }}
          className="mt-10 flex justify-center gap-3"
        >
          <Link to="/" hash="projects" className="group relative overflow-hidden rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground">
            <span className="relative z-10">View work →</span>
            <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 group-hover:translate-x-0" />
          </Link>
          <Link to="/blog" className="rounded-full border border-foreground/20 px-7 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent">
            Read blog
          </Link>
        </motion.div>
      </motion.div>

      {/* scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-xs tracking-[0.3em] text-muted-foreground"
      >
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          SCROLL ↓
        </motion.div>
      </motion.div>
    </section>
  );
}

function Index() {
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <Hero />

      {/* ABOUT */}
      <section id="about" className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">[ ABOUT ]</p>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-10">
            <WordReveal text="A bit about my work." className="font-display text-4xl sm:text-5xl md:col-span-5 md:text-7xl" />
            <div className="md:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  I'm fascinated by building systems that behave well under load, intent, and time.
                  Whether it's a deployment gate that catches bad pushes, a semantic document engine,
                  or an AI code reviewer — I care about the parts most people skip: the data model,
                  the failure modes, and the shape of the API. Currently building at Praalak Tech Solutions
                  and interning as a Research Software Engineer at the Physical Research Laboratory.
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="relative px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-end justify-between">
              <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">[ RECENT PROJECTS ]</p>
              <span className="hidden text-sm text-muted-foreground md:block">{projects.length} selected</span>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-6 sm:p-8"
                >
                  <span className="absolute inset-0 -z-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="relative">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">{p.tag}</p>
                    <h3 className="mt-3 break-words font-display text-4xl sm:text-5xl md:text-6xl">{p.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">{p.blurb}</p>
                  </div>
                  <div className="relative mt-6 flex items-center justify-between gap-3 border-t border-border pt-5 text-xs sm:mt-8 sm:text-sm">
                    <span className="text-muted-foreground">{p.meta}</span>
                    <motion.span className="font-semibold whitespace-nowrap" whileHover={{ x: 4 }}>View →</motion.span>
                  </div>
                </motion.article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">[ SERVICES ]</p></Reveal>
          <WordReveal text="What I do." className="mt-4 font-display text-5xl sm:text-6xl md:text-8xl" />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:mt-12 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-card p-6 sm:p-8"
                >
                  <span className="text-sm opacity-60">{s.n}</span>
                  <h3 className="mt-2 font-display text-2xl sm:text-3xl">{s.title}</h3>
                  <p className="mt-3 text-sm opacity-80 sm:text-base">{s.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS with parallax */}
      <section className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">[ PROCESS ]</p></Reveal>
          <WordReveal text="How I work." className="mt-4 font-display text-5xl sm:text-6xl md:text-8xl" />
          <div className="mt-10 grid gap-6 sm:mt-12 sm:gap-8 sm:grid-cols-2 md:grid-cols-4">
            {process.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <Parallax offset={20}>
                  <div className="border-t-2 border-foreground pt-5">
                    <span className="text-sm text-muted-foreground">{p.n}</span>
                    <h3 className="mt-2 font-display text-2xl sm:text-3xl">{p.title}</h3>
                    <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
                  </div>
                </Parallax>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* STACK */}
      <section className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">[ STACK ]</p></Reveal>
          <WordReveal text="Tools of trade." className="mt-4 font-display text-5xl sm:text-6xl md:text-8xl" />
          <div className="mt-8 flex flex-wrap gap-2 sm:mt-10 sm:gap-3">
            {[
              "TypeScript","React.js","Node.js","React Native","Python","Go","SQL","PostgreSQL",
              "MongoDB","Django REST","Supabase","LangChain","RAG","Vector Databases",
              "AI Integration","Systems Design","CI/CD","REST APIs","Postman","Git",
            ].map((s, i) => (
              <motion.span
                key={s}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.02, duration: 0.4 }}
                whileHover={{ scale: 1.08, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                className="cursor-default rounded-full border border-border bg-card px-3 py-1 text-xs sm:px-4 sm:py-1.5 sm:text-sm"
              >
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      {/* CONTACT */}
      <section id="contact" className="px-4 pt-24 sm:px-6 sm:pt-32">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-10 md:p-20">
            <div aria-hidden className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl" style={{ animation: "blob 18s ease-in-out infinite" }} />
            <p className="relative text-xs font-semibold tracking-[0.3em] opacity-70">[ CONTACT ]</p>
            <h2 className="relative mt-4 font-display text-5xl sm:text-7xl md:text-9xl">Let's build<br />something<span className="text-accent">.</span></h2>
            <div className="relative mt-8 flex flex-wrap gap-3 sm:mt-10 sm:gap-4">
              <a href="mailto:rohan@example.com" className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:px-7 sm:py-3 sm:text-base">Email me</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3 sm:text-base">LinkedIn</a>
              <Link to="/blog" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3 sm:text-base">Read the blog →</Link>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
