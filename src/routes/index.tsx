import { createFileRoute, Link } from "@tanstack/react-router";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
  AnimatePresence,
} from "framer-motion";
import { useRef, useState, useEffect, type MouseEvent } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal, Magnetic, Tilt } from "@/components/Motion";
import { useContactModal } from "@/hooks/use-contact-modal";
import { projects } from "@/lib/data";
import { site } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Rohan Patel — Software Engineer | Full-Stack, DevOps & Applied AI",
      },
      {
        name: "description",
        content:
          "Software Engineer building production systems from interface to infrastructure. Open to SWE/SDE, full-stack, DevOps, forward-deployed, and AI roles. Author of Hired by an Algorithm.",
      },
    ],
  }),
  component: Index,
});

function Hero() {
  const [index, setIndex] = useState(0);
  const words = ["RESILIENT", "SCALABLE", "ROBUST", "ELEGANT"];
  const { open } = useContactModal();

  useEffect(() => {
    const timer = setInterval(
      () => setIndex((prev) => (prev + 1) % words.length),
      2500,
    );
    return () => clearInterval(timer);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 28, stiffness: 120 };
  const rotateY = useSpring(
    useTransform(mouseX, [-0.5, 0.5], [-6, 6]),
    springCfg,
  );
  const rotateX = useSpring(
    useTransform(mouseY, [-0.5, 0.5], [4, -4]),
    springCfg,
  );

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] items-start justify-center overflow-hidden px-4 pt-6 sm:pt-8"
      style={{ perspective: "1200px" }}
    >
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute bottom-[10%] right-[5%] h-[35vw] w-[35vw] rounded-full bg-primary/20 blur-3xl"
          style={{ animation: "blob 30s ease-in-out infinite reverse" }}
        />
      </div>

      <motion.div
        style={{ y, opacity, scale, rotateX, rotateY }}
        className="relative z-10 pb-28 text-center sm:pb-36"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
        >
          [ ROHAN PATEL — SOFTWARE ENGINEER ]
        </motion.p>

        <h1 className="relative mt-6 font-display text-[15vw] leading-[0.9] sm:text-[14vw] md:text-[12vw]">
          <div
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-accent/25 blur-[80px]"
            style={{
              left: "-15%",
              top: "10%",
              width: "130%",
              height: "50%",
              zIndex: 10,
              animation: "blob 22s ease-in-out infinite",
            }}
          />

          <span className="relative block overflow-hidden" style={{ zIndex: 20 }}>
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              I BUILD
            </motion.span>
          </span>

          <span
            className="relative block h-[0.9em] overflow-hidden"
            style={{ zIndex: 5 }}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                  delay: index === 0 ? 0.45 : 0,
                }}
                className="absolute inset-0 block text-accent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

          <span className="relative block overflow-hidden" style={{ zIndex: 20 }}>
            <motion.span
              className="block"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              SOFTWARE
            </motion.span>
          </span>

          <span className="relative block overflow-hidden" style={{ zIndex: 20 }}>
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
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg"
        >
          {site.summary}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Magnetic>
            <a
              href="#projects"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              View selected work
            </a>
          </Magnetic>
          <Magnetic>
            <button
              onClick={open}
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold transition-colors hover:bg-muted"
            >
              Contact me
            </button>
          </Magnetic>
        </motion.div>
      </motion.div>

    </section>
  );
}

const rulesData = [
  {
    id: "01",
    title: "Maximize Context Density",
    subtitle: "Keyword proximity weighting",
    blurb:
      "Modern applicant routing systems weigh semantic proximity over raw string matching. Action verbs coupled with absolute metric clusters score up to 3.4x higher pass indices.",
    code: `package pipeline

// Rule 01: Context Density Weighting
func EvaluateImpact(bullet string) float64 {
    verbs := ExtractActionVerbs(bullet)
    metrics := ParseAbsoluteMetrics(bullet)
    
    if len(verbs) > 0 && len(metrics) > 0 {
        return CalculateProximityScore(verbs[0], metrics[0]) * 1.5
    }
    return 0.2 // Orphaned string weight
}`,
  },
  {
    id: "02",
    title: "Term Vector Proximity",
    subtitle: "Explicit schema taxonomy bindings",
    blurb:
      "Avoid unstructured creative section headers. Parsers map documents into standard taxonomy nodes. Using canonical section identifiers ensures guaranteed parsing extraction.",
    code: `package taxonomy

// Rule 02: Explicit Schema Encodings
var CanonicalHeaders = map[string]TaxonomyNode{
    "EXPERIENCE":   NodeProfessionalHistory,
    "PUBLICATIONS": NodeScholarlyResearch,
    "SKILLS":       NodeTechnicalCapabilities,
}

func ExtractSection(token string) (TaxonomyNode, bool) {
    node, exists := CanonicalHeaders[strings.ToUpper(token)]
    return node, exists
}`,
  },
  {
    id: "03",
    title: "Optical Stream Flattening",
    subtitle: "Deterministic flow formatting",
    blurb:
      "Complex column floats and custom graphical glyphs fail standard optical character recognition streams. Pure, single-column nested flow layouts ensure flawless string normalization.",
    code: `package textstream

// Rule 03: Flatten Structural Floats
func NormalizeDocumentStream(layout Node) string {
    if layout.HasFloat() || layout.IsMultiColumn() {
        return FlattenOpticalStream(layout, StripFormatting)
    }
    return DirectBufferRead(layout)
}`,
  },
];

function BookDeck() {
  const [activeTab, setActiveTab] = useState(0);
  const rule = rulesData[activeTab];

  return (
    <section className="px-4 pt-24 sm:px-6 sm:pt-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
            [ FEATURED PUBLICATION ]
          </p>
        </Reveal>
        <WordReveal
          text="Hired by an Algorithm."
          className="mt-4 font-display text-4xl sm:text-5xl md:text-7xl"
        />
        <Reveal delay={0.2}>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Distilling algorithmic applicant tracking systems into concrete
            document engineering contracts. Explore interactive execution
            modules from the book — or read it on Amazon.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <a
            href={site.book}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
          >
            Get the book on Amazon →
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-12">
          <div className="flex flex-col justify-between border-b border-border p-6 sm:p-8 lg:col-span-5 lg:border-b-0 lg:border-r">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-accent">
                [ ALGORITHMIC CONTRACTS ]
              </span>
              <div className="mt-6 flex flex-col gap-2.5 sm:gap-3">
                {rulesData.map((r, i) => (
                  <button
                    key={r.id}
                    onClick={() => setActiveTab(i)}
                    className={`flex flex-col items-start rounded-2xl border p-4 text-left transition-all ${
                      activeTab === i
                        ? "border-accent bg-accent/10 text-foreground shadow-sm"
                        : "border-border/40 bg-background/50 text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                    }`}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent">
                        RULE {r.id}
                      </span>
                      {activeTab === i && (
                        <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      )}
                    </div>
                    <span className="mt-1 font-display text-base font-semibold sm:text-lg">
                      {r.title}
                    </span>
                    <span className="text-xs opacity-70">{r.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 rounded-xl border border-border/40 bg-muted/40 p-4">
              <p className="text-xs italic text-muted-foreground">
                "{rule.blurb}"
              </p>
            </div>
          </div>

          <div className="flex flex-col bg-[#0b0f17] font-mono text-xs text-gray-300 lg:col-span-7">
            <div className="flex items-center justify-between border-b border-gray-800 bg-[#070a0f] px-4 py-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-[11px] text-gray-500">
                  evaluator_rule_{rule.id}.go
                </span>
              </div>
              <span className="text-[10px] text-gray-500">Go 1.22 runtime</span>
            </div>

            <div className="relative flex-1 overflow-x-auto p-6">
              <AnimatePresence mode="wait">
                <motion.div
                  key={rule.id}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.15 }}
                >
                  <pre className="leading-relaxed">
                    <code>{rule.code}</code>
                  </pre>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Index() {
  const { open } = useContactModal();
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <Hero />

      {/* ABOUT */}
      <section id="about" className="px-4 pt-20 sm:px-6 sm:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
              [ ABOUT ]
            </p>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-12 md:gap-10">
            <WordReveal
              text="Engineer first."
              className="font-display text-4xl sm:text-5xl md:col-span-5 md:text-7xl"
            />
            <div className="md:col-span-7">
              <Reveal delay={0.2}>
                <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
                  Currently building at{" "}
                  <span className="font-medium text-foreground">
                    Praalak Tech Solutions
                  </span>{" "}
                  and interning as a Research Software Engineer at the{" "}
                  <span className="font-medium text-foreground">
                    Physical Research Laboratory
                  </span>
                  . I care about the parts most people skip: data models,
                  failure modes, and the shape of the API — whether the work is
                  full-stack product, DevOps safety, applied AI, or shipping
                  beside the people who use it.
                </p>
                <Link
                  to="/about"
                  className="mt-5 inline-block text-sm font-semibold text-accent hover:underline"
                >
                  More about me →
                </Link>
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
              <p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">
                [ SELECTED WORK ]
              </p>
              <Link
                to="/projects"
                className="hidden text-sm font-medium text-muted-foreground hover:text-accent md:block"
              >
                All projects →
              </Link>
            </div>
          </Reveal>
          <div className="mt-8 grid gap-5 sm:mt-10 sm:gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.1}>
                <Link to="/projects/$slug" params={{ slug: p.slug }} className="block h-full">
                  <Tilt intensity={10}>
                    <motion.article
                      whileHover={{ y: -6 }}
                      transition={{ type: "spring", stiffness: 200, damping: 20 }}
                      className="group relative flex h-full min-w-0 flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-5 sm:p-8"
                    >
                      <span className="absolute inset-0 -z-0 bg-gradient-to-br from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                      <div className="relative min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-accent sm:text-xs">
                          {p.tag}
                        </p>
                        <h3 className="mt-3 break-words font-display text-3xl leading-[0.95] sm:text-5xl md:text-6xl">
                          {p.name}
                        </h3>
                        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:mt-5 sm:text-base">
                          {p.blurb}
                        </p>

                        {p.roles && (
                          <div className="mt-4 flex flex-wrap gap-2">
                            {p.roles.map((role) => (
                              <span
                                key={role}
                                className="rounded-full border border-border/60 bg-muted/40 px-2.5 py-1 text-[10px] font-medium text-muted-foreground"
                              >
                                {role}
                              </span>
                            ))}
                          </div>
                        )}

                        {p.specs && (
                          <div className="mt-6 grid grid-cols-2 gap-x-3 gap-y-3 border-y border-border/50 py-5 sm:mt-8 sm:gap-x-4">
                            {Object.entries(p.specs).map(([key, value]) => (
                              <div key={key} className="flex min-w-0 flex-col">
                                <span className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">
                                  {key}
                                </span>
                                <span className="mt-1 break-words text-[11px] font-medium text-foreground sm:text-xs">
                                  {value}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                      <div className="relative mt-6 flex flex-col gap-2 border-t border-border/50 pt-4 text-xs sm:mt-8 sm:flex-row sm:items-center sm:justify-between sm:gap-3 sm:border-0 sm:pt-2 sm:text-sm">
                        <span className="text-muted-foreground opacity-70">
                          {p.meta}
                        </span>
                        <span className="font-semibold sm:whitespace-nowrap">
                          View details →
                        </span>
                      </div>
                    </motion.article>
                  </Tilt>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <BookDeck />

      {/* CONTACT */}
      <section id="contact" className="px-4 pt-24 sm:px-6 sm:pt-32">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-primary p-6 text-primary-foreground sm:p-10 md:p-20">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/40 blur-3xl"
              style={{ animation: "blob 18s ease-in-out infinite" }}
            />
            <p className="relative text-xs font-semibold tracking-[0.3em] opacity-70">
              [ CONTACT ]
            </p>
            <h2 className="relative mt-4 font-display text-5xl sm:text-7xl md:text-9xl">
              Let's build
              <br />
              something<span className="text-accent">.</span>
            </h2>
            <p className="relative mt-4 max-w-xl text-sm opacity-80 sm:text-base">
              {site.availability}
            </p>
            <div className="relative mt-8 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4">
              <Magnetic>
                <button
                  onClick={open}
                  className="inline-flex items-center justify-center rounded-full border border-transparent bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:px-7 sm:py-3 sm:text-base"
                >
                  Get in touch
                </button>
              </Magnetic>
              <Magnetic>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3 sm:text-base"
                >
                  LinkedIn
                </a>
              </Magnetic>
              <Magnetic>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3 sm:text-base"
                >
                  GitHub
                </a>
              </Magnetic>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
