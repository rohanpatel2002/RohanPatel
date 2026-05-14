import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal, Marquee, Parallax, Magnetic, ScrambleText, Tilt } from "@/components/Motion";
import { useContactModal } from "@/hooks/use-contact-modal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rohan Patel — Software Engineer & Full-Stack / AI Systems" },
      { name: "description", content: "Portfolio of Rohan Patel — specializing in resilient full-stack systems and AI integration. Author of Hired by an Algorithm." },
    ],
  }),
  component: Index,
});

import { projects, services, processSteps, stack } from "@/lib/data";


function Hero() {
  const [index, setIndex] = useState(0);
  const words = ["RESILIENT", "SCALABLE", "ROBUST", "ELEGANT"];

  useEffect(() => {
    const timer = setInterval(() => setIndex((prev) => (prev + 1) % words.length), 2500);
    return () => clearInterval(timer);
  }, []);

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const buttonOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5, 0.8], [0, 1, 1, 0]);

  // 3D mouse tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springCfg = { damping: 28, stiffness: 120 };
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springCfg);
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4, -4]), springCfg);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - r.left) / r.width - 0.5);
    mouseY.set((e.clientY - r.top) / r.height - 0.5);
  };
  const handleMouseLeave = () => { mouseX.set(0); mouseY.set(0); };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex min-h-[100svh] items-start justify-center overflow-hidden px-4 pt-6 sm:pt-8"
      style={{ perspective: "1200px" }}
    >
      {/* Far background blob — stays behind everything */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute right-[5%] bottom-[10%] h-[35vw] w-[35vw] rounded-full bg-primary/20 blur-3xl" style={{ animation: "blob 30s ease-in-out infinite reverse" }} />
      </div>

      <motion.div
        style={{ y, opacity, scale, rotateX, rotateY }}
        className="relative z-10 text-center pb-24 sm:pb-32"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xs font-semibold tracking-[0.3em] text-muted-foreground"
        >
          [ ROHAN PATEL — SOFTWARE ENGINEER ]
        </motion.p>

        {/* H1 with internal depth layering */}
        <h1 className="relative mt-6 font-display text-[15vw] leading-[0.9] sm:text-[14vw] md:text-[12vw]">

          {/* Mid-ground blob — sits at z-10, between the word layers */}
          <div
            aria-hidden
            className="pointer-events-none absolute rounded-full bg-accent/25 blur-[80px]"
            style={{
              left: "-15%", top: "10%",
              width: "130%", height: "50%",
              zIndex: 10,
              animation: "blob 22s ease-in-out infinite",
            }}
          />

          {/* I BUILD — z-20, in front of blob */}
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

          {/* Animated word — z-5, BEHIND the blob (glow engulfs it) */}
          <span className="relative block h-[0.9em] overflow-hidden" style={{ zIndex: 5 }}>
            <AnimatePresence mode="wait">
              <motion.span
                key={words[index]}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index === 0 ? 0.45 : 0 }}
                className="absolute inset-0 block text-accent"
              >
                {words[index]}
              </motion.span>
            </AnimatePresence>
          </span>

          {/* SOFTWARE — z-20, in front */}
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

          {/* SYSTEMS. — z-20, in front */}
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
  const { open } = useContactModal();
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
                <Link to="/projects/$slug" params={{ slug: p.slug }}>
                  <Tilt intensity={10}>
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
                </Tilt>
              </Link>
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
            {processSteps.map((p, i) => (
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

      {/* STACK (Bento Grid) */}
      <section className="px-4 pt-24 sm:px-6 sm:pt-32">
        <div className="mx-auto max-w-7xl">
          <Reveal><p className="text-xs font-semibold tracking-[0.3em] text-muted-foreground">[ STACK ]</p></Reveal>
          <WordReveal text="Tools of trade." className="mt-4 font-display text-5xl sm:text-6xl md:text-8xl" />
          
          <div className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 sm:grid-cols-4 sm:gap-4 md:grid-cols-6 lg:grid-cols-12 lg:grid-rows-2">
            {/* Featured: Go */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 row-span-1 flex flex-col justify-between rounded-3xl border border-border bg-card p-6 sm:row-span-2 lg:col-span-4"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                <span className="font-display text-2xl">Go</span>
              </div>
              <div>
                <h4 className="font-display text-2xl sm:text-3xl">Go / Backend</h4>
                <p className="mt-2 text-sm text-muted-foreground">Building high-performance, concurrent systems and APIs.</p>
              </div>
            </motion.div>

            {/* Featured: React */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 row-span-1 flex flex-col justify-between rounded-3xl border border-border bg-primary p-6 text-primary-foreground lg:col-span-5"
            >
              <h4 className="font-display text-3xl sm:text-4xl">React & TypeScript</h4>
              <p className="mt-2 text-sm opacity-80">Type-safe, component-driven frontend architecture.</p>
            </motion.div>

            {/* AI/ML */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-3xl border border-border bg-card p-6 lg:col-span-3"
            >
              <span className="text-3xl">🤖</span>
              <span className="mt-2 text-xs font-semibold tracking-widest opacity-60">AI / LLM</span>
            </motion.div>

            {/* Python */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-1 row-span-1 flex flex-col items-center justify-center rounded-3xl border border-border bg-accent p-6 text-accent-foreground lg:col-span-3"
            >
              <span className="font-display text-2xl">PY</span>
            </motion.div>

            {/* Database */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="col-span-2 row-span-1 flex items-center justify-between rounded-3xl border border-border bg-card p-6 lg:col-span-5"
            >
              <div>
                <h4 className="font-display text-xl sm:text-2xl">Databases</h4>
                <p className="text-xs text-muted-foreground">Postgres, MongoDB, Redis</p>
              </div>
              <span className="text-2xl">🗄️</span>
            </motion.div>

            {/* Others - mini cards */}
            {["Node.js", "Django", "Supabase", "Git", "Docker"].map((item) => (
              <motion.div
                key={item}
                whileHover={{ y: -4, backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                className="col-span-1 flex items-center justify-center rounded-2xl border border-border bg-card p-4 text-xs font-medium transition-colors lg:col-span-2"
              >
                {item}
              </motion.div>
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
              <Magnetic><button onClick={open} className="rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground sm:px-7 sm:py-3 sm:text-base">Get in touch</button></Magnetic>
              <Magnetic><a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3 sm:text-base">LinkedIn</a></Magnetic>
              <Magnetic><Link to="/blog" className="rounded-full border border-primary-foreground/30 px-5 py-2.5 text-sm font-semibold transition-colors hover:bg-primary-foreground/10 sm:px-7 sm:py-3 sm:text-base">Read the blog →</Link></Magnetic>
            </div>
          </div>
        </Reveal>
      </section>

      <SiteFooter />
    </div>
  );
}
