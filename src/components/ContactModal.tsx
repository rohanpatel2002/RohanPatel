import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Github, Instagram, Send } from "lucide-react";
import { Magnetic } from "./Motion";
import { FormEvent, useState } from "react";
import { toast } from "sonner";
import { site } from "@/lib/site";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const socialIconClass =
  "flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-muted";

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
          className="fixed inset-0 z-[100] flex items-end justify-center bg-background/80 backdrop-blur-xl md:items-center md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ y: "100%", opacity: 1 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "100%", opacity: 0 }}
            transition={{ type: "spring", damping: 28, stiffness: 320 }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex max-h-[min(100dvh,100%)] w-full flex-col overflow-hidden rounded-t-[1.75rem] border border-border bg-card md:max-h-[90vh] md:max-w-6xl md:rounded-[2rem]"
          >
            {/* Phone sheet chrome */}
            <div className="flex shrink-0 flex-col items-center pt-3 md:hidden">
              <div className="h-1 w-10 rounded-full bg-border" aria-hidden />
            </div>

            <button
              type="button"
              onClick={onClose}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted md:right-6 md:top-6 md:h-12 md:w-12"
              aria-label="Close contact form"
            >
              <X size={18} />
            </button>

            <div className="grid min-h-0 flex-1 gap-0 overflow-y-auto overscroll-contain p-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] md:grid-cols-2 md:gap-8 md:p-16">
              {/* Intro */}
              <div className="flex flex-col items-center md:items-stretch md:justify-between md:space-y-12">
                <div className="w-full text-center md:text-left">
                  <p className="text-[10px] font-semibold tracking-[0.3em] text-accent uppercase md:text-xs">
                    [ CONTACT ]
                  </p>

                  {/* Phone title */}
                  <h2 className="mt-3 font-display text-4xl leading-none md:hidden">
                    Let's talk
                    <span className="text-accent">.</span>
                  </h2>
                  {/* Desktop title */}
                  <h2 className="mt-6 hidden font-display text-5xl sm:text-7xl md:block">
                    Let's start a
                    <br />
                    conversation.
                  </h2>

                  <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-relaxed text-muted-foreground sm:max-w-sm md:mx-0 md:mt-6 md:max-w-md md:text-lg">
                    <span className="md:hidden">
                      Team, problem, or research direction — say hello.
                    </span>
                    <span className="hidden md:inline">
                      Say hello if you have a team, problem, or research
                      direction that fits.
                    </span>
                  </p>
                </div>

                {/* Phone: icon row only */}
                <div className="mt-5 flex justify-center gap-3 md:hidden">
                  <a
                    href={`mailto:${site.email}`}
                    aria-label="Email"
                    className={socialIconClass}
                  >
                    <Mail size={18} className="text-accent" />
                  </a>
                  <a
                    href={site.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    className={socialIconClass}
                  >
                    <Linkedin size={18} />
                  </a>
                  <a
                    href={site.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="GitHub"
                    className={socialIconClass}
                  >
                    <Github size={18} />
                  </a>
                  <a
                    href={site.instagram}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Instagram"
                    className={socialIconClass}
                  >
                    <Instagram size={18} />
                  </a>
                </div>

                {/* Desktop: email + icons */}
                <div className="mt-auto hidden space-y-6 md:block">
                  <a
                    href={`mailto:${site.email}`}
                    className="flex items-center gap-4 text-xl transition-colors hover:text-accent break-all"
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
                        className={socialIconClass}
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
                        className={socialIconClass}
                      >
                        <Github size={20} />
                      </a>
                    </Magnetic>
                    <Magnetic>
                      <a
                        href={site.instagram}
                        target="_blank"
                        rel="noreferrer"
                        aria-label="Instagram"
                        className={socialIconClass}
                      >
                        <Instagram size={20} />
                      </a>
                    </Magnetic>
                  </div>
                </div>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="mt-6 flex flex-col gap-3 border-t border-border pt-5 md:mt-0 md:gap-4 md:border-0 md:pt-0"
              >
                <Field
                  id="contact-name"
                  name="name"
                  label="Full Name"
                  type="text"
                  placeholder="Your name"
                />
                <Field
                  id="contact-email"
                  name="email"
                  label="Email Address"
                  type="email"
                  placeholder="you@company.com"
                />
                <div className="space-y-1.5 md:space-y-2">
                  <label
                    htmlFor="contact-message"
                    className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={3}
                    placeholder="Role, team, or problem — whatever you want to talk about."
                    className="w-full resize-none rounded-xl border border-border bg-muted/50 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent md:rounded-2xl md:px-6 md:py-4"
                  />
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="group relative mt-1 flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-primary py-3.5 font-display text-base text-primary-foreground transition-all active:scale-[0.98] disabled:opacity-50 md:mt-2 md:rounded-2xl md:py-5 md:text-xl"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {pending ? "OPENING…" : "SEND MESSAGE"}
                    <Send size={16} className={pending ? "animate-pulse" : ""} />
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-0" />
                </button>
                <p className="text-center text-[10px] leading-relaxed text-muted-foreground md:text-left md:text-xs">
                  Opens your email client with a draft to {site.email}.
                </p>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Field({
  id,
  name,
  label,
  type,
  placeholder,
}: {
  id: string;
  name: string;
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="space-y-1.5 md:space-y-2">
      <label
        htmlFor={id}
        className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground md:text-xs"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        required
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-muted/50 px-4 py-3 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent md:rounded-2xl md:px-6 md:py-4"
      />
    </div>
  );
}
