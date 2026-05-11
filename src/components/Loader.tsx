import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const TARGET = ["R", "O", "H", "A", "N", "."];
const SCRAMBLE_DURATION = 900;
const LOCK_STAGGER = 150;
const EXIT_DELAY = 350;

function randomTarget() {
  return TARGET[Math.floor(Math.random() * TARGET.length)];
}

// Shared text renderer used by both panels
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
          className="inline-block font-display leading-none text-[18vw] sm:text-[13vw]"
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
    TARGET.map(randomTarget)
  );
  const [locked, setLocked] = useState<boolean[]>(TARGET.map(() => false));
  const [exit, setExit] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lockedRef = useRef<boolean[]>(TARGET.map(() => false));

  useEffect(() => {
    const scramble = () => {
      setDisplayed((prev) =>
        prev.map((_, i) =>
          lockedRef.current[i] ? TARGET[i] : randomTarget()
        )
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

  // Panel exit: top slides up, bottom slides down with slight stagger
  const panel = {
    initial: { y: "0%" },
    exit: (dir: number) => ({
      y: `${dir * 105}%`,
      transition: {
        duration: 1.1,
        delay: dir === 1 ? 0.08 : 0, // bottom panel exits slightly after top
        ease: [0.65, 0, 0.35, 1],
      },
    }),
  };

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!exit && (
        <>
          {/* TOP PANEL — clips top half of the centered text */}
          <motion.div
            key="top"
            custom={-1}
            variants={panel}
            initial="initial"
            exit="exit"
            className="fixed inset-x-0 top-0 z-[9999] overflow-hidden bg-[oklch(0.1_0.005_270)]"
            style={{ height: "50vh" }}
          >
            {/* A full-viewport-height container anchored to the top of this panel,
                so the text sits centered in the full screen — panel clips the top half */}
            <div
              className="absolute inset-x-0 flex items-center justify-center"
              style={{ top: 0, height: "100vh" }}
            >
              <GlitchText displayed={displayed} locked={locked} />
            </div>
          </motion.div>

          {/* BOTTOM PANEL — clips bottom half of the centered text */}
          <motion.div
            key="bottom"
            custom={1}
            variants={panel}
            initial="initial"
            exit="exit"
            className="fixed inset-x-0 bottom-0 z-[9999] overflow-hidden bg-[oklch(0.1_0.005_270)]"
            style={{ height: "50vh" }}
          >
            {/* Same container but offset upward by 50vh so the same centered
                text aligns perfectly — panel clips the bottom half */}
            <div
              className="absolute inset-x-0 flex items-center justify-center"
              style={{ top: "-50vh", height: "100vh" }}
            >
              <GlitchText displayed={displayed} locked={locked} />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
