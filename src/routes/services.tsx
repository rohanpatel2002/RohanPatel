import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";

export const Route = createFileRoute("/services")({
  component: Services,
});

const services = [
  { n: "01", title: "Full-Stack Systems", body: "End-to-end web applications built with React, TypeScript, Node, and Go — engineered for scale and clarity." },
  { n: "02", title: "AI Integration", body: "LLMs, RAG, vector search, and LangChain in real products — with guardrails that actually hold." },
  { n: "03", title: "Backend & APIs", body: "Django, REST, gRPC, PostgreSQL, MongoDB. Clean contracts, predictable performance, observable systems." },
  { n: "04", title: "DevOps & CI/CD", body: "Pipelines, infrastructure, and deployment safety nets so teams ship faster without breaking things." },
];

function Services() {
  return (
    <div className="grain min-h-screen bg-background">
      <SiteHeader />
      <section className="px-4 pt-20 sm:px-6 sm:pt-28 md:pt-32">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs font-semibold tracking-[0.3em] text-muted-foreground text-center"
          >
            [ SERVICES ]
          </motion.p>
          <WordReveal text="What I do." className="mt-4 font-display text-6xl sm:text-8xl md:text-[9rem] text-center" />
          
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:mt-24 md:grid-cols-2">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <motion.div
                  whileHover={{ backgroundColor: "var(--accent)", color: "var(--accent-foreground)" }}
                  transition={{ duration: 0.3 }}
                  className="h-full bg-card p-8 sm:p-12"
                >
                  <span className="text-base font-medium opacity-60 sm:text-lg">{s.n}</span>
                  <h3 className="mt-4 font-display text-4xl sm:text-5xl">{s.title}</h3>
                  <p className="mt-4 text-base opacity-80 sm:text-lg leading-relaxed">{s.body}</p>
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
