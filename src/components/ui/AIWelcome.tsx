"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const bootSequence = [
  { text: "> Initializing AI System...", delay: 0 },
  { text: "> Loading neural networks... ██████████ 100%", delay: 600 },
  { text: "> Scanning visitor profile...", delay: 1200 },
  { text: "> Visitor identified: Potential Collaborator", delay: 2000 },
  { text: "> Preparing portfolio experience...", delay: 2800 },
  { text: "> AI Assistant: Online ✓", delay: 3400 },
];

const greetings = [
  "Welcome, I'm Atras's AI.",
  "I'll be your guide through this portfolio.",
  "Let me show you what Human + AI can build.",
];

interface AIWelcomeProps {
  onComplete: () => void;
}

export default function AIWelcome({ onComplete }: AIWelcomeProps) {
  const [phase, setPhase] = useState<"boot" | "greet" | "done">("boot");
  const [visibleLines, setVisibleLines] = useState(0);
  const [greetIndex, setGreetIndex] = useState(0);
  const [greetText, setGreetText] = useState("");
  const [showSkip, setShowSkip] = useState(false);

  // Boot sequence
  useEffect(() => {
    if (phase !== "boot") return;

    const timers: NodeJS.Timeout[] = [];

    bootSequence.forEach((_, i) => {
      timers.push(
        setTimeout(() => {
          setVisibleLines(i + 1);
        }, bootSequence[i].delay)
      );
    });

    // Transition to greet phase
    timers.push(
      setTimeout(() => {
        setPhase("greet");
      }, 4200)
    );

    // Show skip button
    timers.push(
      setTimeout(() => {
        setShowSkip(true);
      }, 800)
    );

    return () => timers.forEach(clearTimeout);
  }, [phase]);

  // Greeting typewriter
  useEffect(() => {
    if (phase !== "greet") return;

    const currentGreeting = greetings[greetIndex];
    if (!currentGreeting) {
      // All greetings done
      setTimeout(() => {
        setPhase("done");
        setTimeout(onComplete, 600);
      }, 800);
      return;
    }

    let charIndex = 0;
    setGreetText("");

    const interval = setInterval(() => {
      charIndex++;
      setGreetText(currentGreeting.slice(0, charIndex));

      if (charIndex >= currentGreeting.length) {
        clearInterval(interval);
        setTimeout(() => {
          setGreetIndex((prev) => prev + 1);
        }, 700);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [phase, greetIndex, onComplete]);

  const handleSkip = useCallback(() => {
    setPhase("done");
    onComplete();
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#030712]"
        >
          {/* Background effects */}
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />
            <div className="absolute left-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-500/5 blur-[100px]" />

            {/* Scan lines */}
            <div
              className="absolute inset-0 opacity-[0.015]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(6,182,212,0.3) 2px, rgba(6,182,212,0.3) 4px)",
              }}
            />
          </div>

          <div className="relative z-10 mx-auto w-full max-w-2xl px-6">
            {/* AI Logo / Avatar */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="mb-8 flex justify-center"
            >
              <div className="relative">
                {/* Pulsing rings */}
                <motion.div
                  animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "easeOut" }}
                  className="absolute -inset-4 rounded-full border border-cyan-500/30"
                />
                <motion.div
                  animate={{ scale: [1, 1.8, 1], opacity: [0.2, 0, 0.2] }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: "easeOut",
                    delay: 0.3,
                  }}
                  className="absolute -inset-4 rounded-full border border-purple-500/20"
                />
                {/* Core icon */}
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 backdrop-blur-sm">
                  <svg
                    className="h-8 w-8 text-cyan-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>

            {/* Boot Phase */}
            {phase === "boot" && (
              <motion.div className="space-y-2">
                {bootSequence.slice(0, visibleLines).map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-xs text-cyan-400/70 sm:text-sm"
                  >
                    {line.text}
                  </motion.div>
                ))}
                {/* Blinking cursor */}
                <span className="inline-block h-4 w-1.5 animate-pulse bg-cyan-400/80" />
              </motion.div>
            )}

            {/* Greet Phase */}
            {phase === "greet" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Previous greetings */}
                <div className="space-y-3 mb-2">
                  {greetings.slice(0, greetIndex).map((g, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 1 }}
                      animate={{ opacity: 0.4 }}
                      className={`font-mono ${
                        i === 0
                          ? "text-xl sm:text-2xl font-bold text-white"
                          : "text-base sm:text-lg text-slate-400"
                      }`}
                    >
                      {g}
                    </motion.p>
                  ))}
                </div>

                {/* Current greeting being typed */}
                {greetIndex < greetings.length && (
                  <p
                    className={`font-mono ${
                      greetIndex === 0
                        ? "text-xl sm:text-2xl font-bold text-white"
                        : greetIndex === 2
                        ? "text-base sm:text-lg bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold"
                        : "text-base sm:text-lg text-slate-300"
                    }`}
                  >
                    {greetText}
                    <span className="inline-block h-5 w-1.5 ml-0.5 animate-pulse bg-cyan-400/80 align-middle" />
                  </p>
                )}
              </motion.div>
            )}

            {/* Progress bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-10"
            >
              <div className="h-0.5 w-full overflow-hidden rounded-full bg-white/5">
                <motion.div
                  initial={{ width: "0%" }}
                  animate={{
                    width: phase === "boot" ? `${(visibleLines / bootSequence.length) * 60}%` : "100%",
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
                />
              </div>
            </motion.div>

            {/* Skip button */}
            {showSkip && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-6 text-center"
              >
                <button
                  onClick={handleSkip}
                  className="font-mono text-xs text-slate-600 transition-colors hover:text-slate-400 underline underline-offset-4"
                >
                  skip intro
                </button>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
