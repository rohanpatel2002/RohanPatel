import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Linkedin, Github, Send } from "lucide-react";
import { Magnetic } from "./Motion";
import { useState } from "react";
import { toast } from "sonner";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [pending, setPending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    // Simulate API call
    setTimeout(() => {
      setPending(false);
      toast.success("Message sent! I'll get back to you soon.");
      onClose();
    }, 1500);
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
            {/* Close button */}
            <div className="absolute right-6 top-6 z-10">
              <Magnetic>
                <button
                  onClick={onClose}
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-card transition-colors hover:bg-muted"
                >
                  <X size={20} />
                </button>
              </Magnetic>
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between space-y-12">
              <div>
                <p className="text-xs font-semibold tracking-[0.3em] text-accent uppercase">[ CONTACT ]</p>
                <h2 className="mt-6 font-display text-5xl sm:text-7xl">Let's start a<br />conversation.</h2>
                <p className="mt-6 max-w-md text-lg text-muted-foreground leading-relaxed">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                </p>
              </div>

              <div className="space-y-6">
                <a href="mailto:rohan@example.com" className="flex items-center gap-4 text-xl hover:text-accent transition-colors">
                  <Mail className="text-accent" /> rohan@example.com
                </a>
                <div className="flex gap-4">
                  <Magnetic>
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors">
                      <Linkedin size={20} />
                    </a>
                  </Magnetic>
                  <Magnetic>
                    <a href="#" className="flex h-12 w-12 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors">
                      <Github size={20} />
                    </a>
                  </Magnetic>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Full Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-2xl border border-border bg-muted/50 px-6 py-4 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Email Address</label>
                <input
                  required
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-2xl border border-border bg-muted/50 px-6 py-4 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Message</label>
                <textarea
                  required
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full rounded-2xl border border-border bg-muted/50 px-6 py-4 outline-none transition-all focus:border-accent focus:ring-1 focus:ring-accent resize-none"
                />
              </div>
              <button
                disabled={pending}
                className="group relative mt-2 flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-primary py-5 font-display text-xl text-primary-foreground transition-all active:scale-[0.98] disabled:opacity-50"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {pending ? "SENDING..." : "SEND MESSAGE"}
                  <Send size={18} className={pending ? "animate-pulse" : ""} />
                </span>
                <span className="absolute inset-0 -translate-x-full bg-accent transition-transform duration-500 ease-[0.22,1,0.36,1] group-hover:translate-x-0" />
              </button>
            </form>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
