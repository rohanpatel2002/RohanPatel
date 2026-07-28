import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TARGET = ["R", "O", "H", "A", "N", "."];
const SCRAMBLE_DURATION = 900;
const LOCK_STAGGER = 150;
const EXIT_DELAY = 350;

function randomTarget() {
  return TARGET[Math.floor(Math.random() * TARGET.length)];
}

function GlitchText({
  displayed,
  locked,
}: {
  displayed: string[];
  locked: boolean[];
}) {
  return (
    <div className="flex items-center gap-[0.01em]">
      {displayed.map((ch, i) => (
        <span
          key={i}
          className="inline-block font-display text-[18vw] leading-none sm:text-[13vw]"
          style={{
            fontFamily: "Anton, Impact, system-ui, sans-serif",
            textTransform: "uppercase",
            color:
              i === TARGET.length - 1
                ? "var(--accent)"
                : locked[i]
                  ? "oklch(0.97 0.005 90)"
                  : "oklch(0.35 0.01 270)",
            transition: "color 80ms",
          }}
        >
          {ch}
        </span>
      ))}
    </div>
  );
}

export function Loader({ onComplete }: { onComplete: () => void }) {
  const [displayed, setDisplayed] = useState<string[]>(() =>
    TARGET.map(randomTarget),
  );
  const [locked, setLocked] = useState<boolean[]>(TARGET.map(() => false));
  const [exit, setExit] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockedRef = useRef<boolean[]>(TARGET.map(() => false));

  useEffect(() => {
    const scramble = () => {
      setDisplayed((prev) =>
        prev.map((_, i) => (lockedRef.current[i] ? TARGET[i] : randomTarget())),
      );
      timerRef.current = setTimeout(scramble, 50);
    };
    timerRef.current = setTimeout(scramble, 50);

    TARGET.forEach((_, i) => {
      setTimeout(() => {
        lockedRef.current[i] = true;
        setLocked((prev) => {
          const n = [...prev];
          n[i] = true;
          return n;
        });
        setDisplayed((prev) => {
          const n = [...prev];
          n[i] = TARGET[i];
          return n;
        });
        if (i === TARGET.length - 1) {
          setTimeout(() => setExit(true), EXIT_DELAY);
        }
      }, SCRAMBLE_DURATION + i * LOCK_STAGGER);
    });

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const panel = {
    initial: { y: "0%" },
    exit: (dir: number) => ({
      y: `${dir * 105}%`,
      transition: {
        duration: 1.1,
        delay: dir === 1 ? 0.08 : 0,
        ease: [0.65, 0, 0.35, 1] as const,
      },
    }),
  };

  // Full-viewport layers + clip-path (not 50vh overflow boxes) so both
  // halves share the same text center — avoids mobile vh seam clipping.
  const layer =
    "pointer-events-none fixed inset-0 z-[9999] flex items-center justify-center bg-[oklch(0.1_0.005_270)]";

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!exit && (
        <>
          <motion.div
            key="top"
            custom={-1}
            variants={panel}
            initial="initial"
            exit="exit"
            className={layer}
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
            <GlitchText displayed={displayed} locked={locked} />
          </motion.div>

          <motion.div
            key="bottom"
            custom={1}
            variants={panel}
            initial="initial"
            exit="exit"
            className={layer}
            style={{ clipPath: "inset(50% 0 0 0)" }}
          >
            <GlitchText displayed={displayed} locked={locked} />
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
