import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Github, Send } from "lucide-react";
import { Magnetic } from "./Motion";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { site } from "@/lib/site";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Please fill in all fields.");
      return;
    }

    setPending(true);
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    toast.success("Opening your email client…");
    setPending(false);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background/80 backdrop-blur-xl p-4 md:p-8"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative grid w-full max-w-6xl gap-8 overflow-hidden rounded-[2rem] border border-border bg-card p-8 md:grid-cols-2 md:p-16"
          >
            <div className="absolute right-6 top-6 z-10">
              <Magnetic>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
                  aria-label="Close contact form"
                >
                  <X size={20} />
                </button>
              </Magnetic>
            </div>

            <div className="flex flex-col justify-between space-y-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">
                  [ CONTACT ]
                </p>
                <h2 className="mt-6 font-display text-5xl sm:text-7xl">
                  Let's start a<br />
                  conversation.
                </h2>
                <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                  Open to SWE / SDE, full-stack, DevOps, forward-deployed, and AI
                  engineering roles. Say hello if you have a team, problem, or
                  research direction that fits.
                </p>
              </div>

              <div className="space-y-6">
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-4 text-xl hover:text-accent transition-colors break-all"
                >
                  <Mail className="shrink-0 text-accent" /> {site.email}
                </a>
                <div className="flex gap-4">
                  <Magnetic>
                    <a
                      href={site.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="LinkedIn"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
                    >
                      <Linkedin size={20} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a
                      href={site.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub"
                      className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Full Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  required
                  type="text"
                  placeholder="Your name"
                  className="w-full rounded-2xl border border-border bg-muted/50 px-6 py-4 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  required
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-2xl border border-border bg-muted/50 px-6 py-4 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="contact-message"
                  className="text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Role, team, or problem — whatever you want to talk about."
                  className="w-full rounded-2xl border border-border bg-muted/50 px-6 py-4 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={pending}
                className="group relative mt-2 flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-primary py-5 font-display text-xl text-primary-foreground transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {pending ? "OPENING…" : "SEND MESSAGE"}
                  <Send size={18} className={pending ? "animate-pulse" : ""} />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-0" />
              </button>
              <p className="text-xs text-muted-foreground">
                Opens your email client with a draft to {site.email}.
              </p>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
