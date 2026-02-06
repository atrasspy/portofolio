"use client";

import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const codeLines = [
  { type: "comment", text: "// AI is analyzing your codebase..." },
  { type: "keyword", text: "const ", suffix: "architecture", suffixColor: "text-blue-400", rest: " = AI.design({" },
  { type: "prop", text: '  pattern: ', value: '"hexagonal",' },
  { type: "prop", text: '  style: ', value: '"microservices",' },
  { type: "prop", text: '  database: ', value: '"PostgreSQL",' },
  { type: "close", text: "});" },
  { type: "blank", text: "" },
  { type: "keyword", text: "await ", suffix: "AI", suffixColor: "text-purple-400", rest: ".optimize(architecture);" },
  { type: "comment", text: "// ✓ Performance improved by 340%" },
  { type: "comment", text: "// ✓ Code quality score: 98/100" },
  { type: "blank", text: "" },
  { type: "keyword", text: "Human", suffix: " + ", suffixColor: "text-slate-400", rest: "" },
  { type: "ai-highlight", text: "AI", rest: " = Unstoppable;" },
];

interface TerminalLine {
  type: string;
  text: string;
  suffix?: string;
  suffixColor?: string;
  rest?: string;
  value?: string;
}

function TerminalLineRenderer({ line }: { line: TerminalLine }) {
  if (line.type === "blank") return <div className="h-5" />;

  if (line.type === "comment") {
    return (
      <div className="text-emerald-400/70 font-mono text-xs sm:text-sm">
        {line.text}
      </div>
    );
  }

  if (line.type === "prop") {
    return (
      <div className="font-mono text-xs sm:text-sm">
        <span className="text-slate-400">{line.text}</span>
        <span className="text-amber-400">{line.value}</span>
      </div>
    );
  }

  if (line.type === "close") {
    return (
      <div className="text-slate-300 font-mono text-xs sm:text-sm">{line.text}</div>
    );
  }

  if (line.type === "ai-highlight") {
    return (
      <div className="font-mono text-xs sm:text-sm">
        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent font-bold text-base sm:text-lg">
          {line.text}
        </span>
        <span className="text-cyan-400 font-bold text-base sm:text-lg">{line.rest}</span>
      </div>
    );
  }

  return (
    <div className="font-mono text-xs sm:text-sm">
      <span className="text-purple-400">{line.text}</span>
      {line.suffix && (
        <span className={line.suffixColor || "text-blue-400"}>
          {line.suffix}
        </span>
      )}
      <span className="text-slate-300">{line.rest}</span>
    </div>
  );
}

export default function AITerminal() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [isTypingDone, setIsTypingDone] = useState(false);

  const startTyping = useCallback(() => {
    setVisibleLines(0);
    setIsTypingDone(false);

    let current = 0;
    const interval = setInterval(() => {
      current++;
      setVisibleLines(current);
      if (current >= codeLines.length) {
        clearInterval(interval);
        setIsTypingDone(true);

        // Restart after a pause
        setTimeout(() => {
          startTyping();
        }, 4000);
      }
    }, 400);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(startTyping, 1500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.8 }}
      className="relative mx-auto mt-10 w-full max-w-lg"
    >
      {/* Terminal window */}
      <div className="overflow-hidden rounded-xl border border-white/10 bg-slate-950/80 shadow-2xl shadow-cyan-500/10 backdrop-blur-sm">
        {/* Title bar */}
        <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500/80" />
            <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
            <div className="h-3 w-3 rounded-full bg-green-500/80" />
          </div>
          <div className="flex-1 text-center">
            <span className="font-mono text-xs text-slate-500">
              ai-engineer.ts
            </span>
          </div>
          <div className="flex items-center gap-1">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
            </span>
            <span className="font-mono text-[10px] text-green-400">
              AI Active
            </span>
          </div>
        </div>

        {/* Code content */}
        <div className="p-4 sm:p-5 min-h-[280px]">
          <div className="space-y-1">
            {codeLines.slice(0, visibleLines).map((line, i) => (
              <motion.div
                key={`${i}-${visibleLines}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="flex items-start gap-3">
                  <span className="w-5 flex-shrink-0 text-right font-mono text-xs text-slate-600 select-none">
                    {i + 1}
                  </span>
                  <TerminalLineRenderer line={line} />
                </div>
              </motion.div>
            ))}

            {/* Blinking cursor */}
            {!isTypingDone && (
              <div className="flex items-center gap-3">
                <span className="w-5 flex-shrink-0 text-right font-mono text-xs text-slate-600 select-none">
                  {visibleLines + 1}
                </span>
                <span className="inline-block h-4 w-2 animate-pulse bg-cyan-400" />
              </div>
            )}
          </div>
        </div>

        {/* Status bar */}
        <div className="flex items-center justify-between border-t border-white/5 px-4 py-1.5">
          <div className="flex items-center gap-3">
            <span className="font-mono text-[10px] text-slate-500">
              TypeScript
            </span>
            <span className="font-mono text-[10px] text-slate-500">
              UTF-8
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <svg className="h-3 w-3 text-purple-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a2 2 0 012 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 017 7h1a1 1 0 011 1v3a1 1 0 01-1 1h-1.07A7.001 7.001 0 0113 23h-2a7.001 7.001 0 01-6.93-6H3a1 1 0 01-1-1v-3a1 1 0 011-1h1a7 7 0 017-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 012-2zm-1 9a5 5 0 00-5 5 5 5 0 005 5h2a5 5 0 005-5 5 5 0 00-5-5h-2zm-1 4a1 1 0 110 2 1 1 0 010-2zm4 0a1 1 0 110 2 1 1 0 010-2z"/>
            </svg>
            <span className="font-mono text-[10px] text-purple-400">
              Copilot++
            </span>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute -inset-1 -z-10 rounded-xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 blur-xl" />
    </motion.div>
  );
}
