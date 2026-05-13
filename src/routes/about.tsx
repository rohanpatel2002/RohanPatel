import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import { Reveal, WordReveal } from "@/components/Motion";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Rohan Patel" },
      { name: "description", content: "Learn about Rohan Patel's approach to building resilient software systems and AI integration." },
    ],
  }),
  component: About,
});

function About() {
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
            [ ABOUT ]
          </motion.p>
          <WordReveal text="A bit about my work." className="mt-4 font-display text-6xl sm:text-8xl md:text-[9rem] text-center" />
          
          <div className="mx-auto mt-14 max-w-4xl sm:mt-24">
            <Reveal delay={0.3}>
              <div className="relative">
                {/* Subtle glow behind the text */}
                <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-accent/5 blur-[80px]" />
                
                <p className="text-xl font-light leading-[1.7] text-muted-foreground sm:text-3xl sm:leading-[1.7]">
                  I'm fascinated by building systems that behave well under <span className="font-medium text-foreground">load</span>, <span className="font-medium text-foreground">intent</span>, and <span className="font-medium text-foreground">time</span>. 
                  Whether it's a deployment gate that catches bad pushes, a semantic document engine, 
                  or an AI code reviewer — I care about the parts most people skip: 
                  <br /><br />
                  <span className="mt-2 inline-flex flex-wrap gap-4">
                    <motion.span whileHover={{ y: -2 }} className="cursor-default rounded-full border border-accent/30 bg-accent/5 px-6 py-2 text-base font-medium text-accent backdrop-blur-sm transition-colors hover:bg-accent/10">the data model</motion.span>
                    <motion.span whileHover={{ y: -2 }} className="cursor-default rounded-full border border-accent/30 bg-accent/5 px-6 py-2 text-base font-medium text-accent backdrop-blur-sm transition-colors hover:bg-accent/10">the failure modes</motion.span>
                    <motion.span whileHover={{ y: -2 }} className="cursor-default rounded-full border border-accent/30 bg-accent/5 px-6 py-2 text-base font-medium text-accent backdrop-blur-sm transition-colors hover:bg-accent/10">the API shape</motion.span>
                  </span>
                </p>

                <div className="mt-16 grid grid-cols-2 gap-8 border-t border-border pt-12 sm:grid-cols-3">
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3, duration: 0.6 }}>
                    <div className="font-display text-6xl text-foreground">3<span className="text-accent">+</span></div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">YEARS EXP.</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4, duration: 0.6 }}>
                    <div className="font-display text-6xl text-foreground">12</div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">SYSTEMS SHIPPED</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5, duration: 0.6 }} className="hidden sm:block">
                    <div className="font-display text-6xl text-foreground">99<span className="text-accent">%</span></div>
                    <div className="mt-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">UPTIME FOCUS</div>
                  </motion.div>
                </div>

                <p className="mt-16 text-lg sm:text-xl text-muted-foreground">
                  Currently building at <span className="text-foreground font-medium">Praalak Tech Solutions</span> and interning as a Research Software Engineer at the <span className="text-foreground font-medium">Physical Research Laboratory</span>.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
