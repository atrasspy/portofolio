"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: number;
  role: "ai" | "user";
  text: string;
}

const suggestions = [
  { label: "Who is Atras?", key: "who" },
  { label: "What skills?", key: "skills" },
  { label: "Experience", key: "experience" },
  { label: "Contact", key: "contact" },
  { label: "AI workflow?", key: "ai" },
];

const responses: Record<string, string> = {
  who: "Atras is an AI-Augmented Software Engineer with 4+ years of experience building enterprise-level applications and fintech systems. He's currently based in Jakarta, working remotely with global teams — including QAWTT in Dubai. He doesn't just write code, he orchestrates AI to build faster and smarter.",
  skills:
    "His arsenal includes Java, Spring Boot, TypeScript, Node.js for languages. PostgreSQL, MongoDB, MySQL for databases. He's a master of Microservices, Hexagonal Architecture, DDD, and Event-Driven patterns. Plus Docker, Kafka, RabbitMQ, and the full ELK Stack. Want to see more? Let me scroll you there!",
  experience:
    "4 companies, 4+ years of impact:\n\n🚀 QAWTT (Dubai) — AI-Augmented Engineer building digital wallet ecosystems with hexagonal architecture.\n🏦 BTPN Bank — Full-stack banking apps with Spring Boot + AngularJS.\n🛡️ Prospero — Enterprise Risk Management systems from scratch.\n💼 Digital Muda — Migrated monolith to microservices.\n\nShall I take you to the experience section?",
  contact:
    "You can reach Atras at:\n\n📧 aspyasa@gmail.com\n📱 081399784268\n📍 Jakarta, Indonesia\n\nHe's always open to new opportunities and collaborations. Want me to scroll you to the contact section?",
  ai: "Atras's AI workflow is a 3-step process:\n\n1️⃣ AI Analyzes — AI scans code, suggests architecture improvements, catches bugs early.\n2️⃣ Human Architects — Atras makes the critical design decisions and defines business logic.\n3️⃣ Synergy Delivers — Together they produce solutions 3x faster with 98% code quality.\n\nThis portfolio itself was built using this exact methodology!",
  default:
    "I'm Atras's AI assistant! I can tell you about his skills, experience, AI workflow, or help you get in touch. Just pick a topic or ask away!",
};

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      role: "ai",
      text: "Hi! I'm Atras's AI assistant. 👋\nHow can I help you explore this portfolio?",
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const msgIdRef = useRef(1);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Show notification bubble after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => setHasNotification(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  function handleSuggestion(key: string, label: string) {
    setHasNotification(false);
    const userMsgId = msgIdRef.current++;
    const aiMsgId = msgIdRef.current++;

    // Add user message
    setMessages((prev) => [...prev, { id: userMsgId, role: "user", text: label }]);
    setIsTyping(true);

    // Simulate AI "thinking"
    setTimeout(() => {
      const response = responses[key] || responses.default;
      setMessages((prev) => [...prev, { id: aiMsgId, role: "ai", text: response }]);
      setIsTyping(false);

      // Auto-scroll to section if relevant
      if (key === "skills" || key === "experience" || key === "contact") {
        setTimeout(() => {
          const sectionId =
            key === "skills" ? "skills" : key === "experience" ? "experience" : "contact";
          const el = document.getElementById(sectionId);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 1500);
      }
      if (key === "ai") {
        setTimeout(() => {
          const el = document.getElementById("ai-synergy");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 1500);
      }
    }, 800 + Math.random() * 600);
  }

  return (
    <>
      {/* Floating Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 200 }}
        onClick={() => {
          setIsOpen(!isOpen);
          setHasNotification(false);
        }}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 text-white shadow-lg shadow-purple-500/25 transition-all duration-300 hover:scale-110 hover:shadow-xl hover:shadow-purple-500/30"
        aria-label="AI Assistant"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <motion.svg
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </motion.svg>
          ) : (
            <motion.svg
              key="ai"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              className="h-6 w-6"
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
            </motion.svg>
          )}
        </AnimatePresence>

        {/* Notification badge */}
        {hasNotification && !isOpen && (
          <motion.span
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white"
          >
            1
          </motion.span>
        )}

        {/* Pulse ring */}
        {!isOpen && (
          <motion.span
            animate={{ scale: [1, 1.5], opacity: [0.4, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600"
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 flex h-[480px] w-[360px] flex-col overflow-hidden rounded-2xl border border-white/10 bg-slate-950/95 shadow-2xl shadow-purple-500/10 backdrop-blur-xl sm:w-[380px]"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-white/5 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 px-4 py-3">
              <div className="relative">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-purple-600">
                  <svg
                    className="h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full border-2 border-slate-950 bg-green-500" />
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">AI Assistant</h3>
                <p className="text-[11px] text-green-400">Online — Ready to help</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4">
              {messages.map((msg) => (
                <motion.div
                  key={msg.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "rounded-br-md bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                        : "rounded-bl-md border border-white/5 bg-white/[0.05] text-slate-300"
                    }`}
                  >
                    {msg.text.split("\n").map((line, i) => (
                      <span key={i}>
                        {line}
                        {i < msg.text.split("\n").length - 1 && <br />}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="rounded-2xl rounded-bl-md border border-white/5 bg-white/[0.05] px-4 py-3">
                    <div className="flex gap-1.5">
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0 }}
                        className="h-2 w-2 rounded-full bg-cyan-400"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.2 }}
                        className="h-2 w-2 rounded-full bg-blue-400"
                      />
                      <motion.span
                        animate={{ opacity: [0.3, 1, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1, delay: 0.4 }}
                        className="h-2 w-2 rounded-full bg-purple-400"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggestion chips */}
            <div className="border-t border-white/5 px-3 py-3">
              <p className="mb-2 text-[11px] text-slate-500 font-mono uppercase tracking-wider">
                Ask me about:
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suggestions.map((s) => (
                  <button
                    key={s.key}
                    onClick={() => handleSuggestion(s.key, s.label)}
                    disabled={isTyping}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-slate-300 transition-all hover:border-cyan-500/30 hover:bg-cyan-500/10 hover:text-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
