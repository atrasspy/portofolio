"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/resume";
import GradientText from "@/components/ui/GradientText";
import Button from "@/components/ui/Button";
import CodeRain from "@/components/ui/CodeRain";
import AITerminal from "@/components/ui/AITerminal";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-4"
    >
      {/* Code Rain Background */}
      <CodeRain />

      {/* Background Effects */}
      <div className="pointer-events-none absolute inset-0 z-[1]">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-600/10 blur-[120px]" />
        <div className="absolute right-1/3 top-1/3 h-[300px] w-[300px] rounded-full bg-purple-600/8 blur-[100px]" />

        {/* Radial fade overlay to keep center readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(3,7,18,0.7)_0%,rgba(3,7,18,0.3)_70%,transparent_100%)]" />
      </div>

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-5xl text-center"
      >
        {/* AI-Powered Badge */}
        <motion.div variants={fadeInUp} className="mb-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-sm">
            <svg className="h-4 w-4 text-purple-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
            </svg>
            AI-Augmented Engineer
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-purple-500" />
            </span>
          </span>
        </motion.div>

        {/* Name with enhanced gradient */}
        <motion.h1
          variants={fadeInUp}
          className="text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Hi, I&apos;m{" "}
          <GradientText>{personalInfo.firstName}</GradientText>
        </motion.h1>

        {/* Title with AI emphasis */}
        <motion.p
          variants={fadeInUp}
          className="mt-4 text-xl text-slate-300 sm:text-2xl lg:text-3xl"
        >
          <span className="text-slate-400">I write code.</span>{" "}
          <span className="text-purple-400">AI amplifies it.</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          variants={fadeInUp}
          className="mx-auto mt-6 max-w-2xl text-base text-slate-400 leading-relaxed sm:text-lg"
        >
          Building scalable enterprise systems and fintech solutions where{" "}
          <span className="text-cyan-400 font-medium">human architecture decisions</span>{" "}
          meet{" "}
          <span className="text-purple-400 font-medium">AI-powered precision</span>
          . 4+ years crafting the future of software engineering.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          <Button href="#contact" variant="primary" size="lg">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
            Get In Touch
          </Button>
          <Button href="#ai-synergy" variant="outline" size="lg">
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            See AI in Action
          </Button>
        </motion.div>

        {/* AI Terminal */}
        <AITerminal />
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-slate-500">Scroll Down</span>
          <svg
            className="h-5 w-5 text-slate-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
