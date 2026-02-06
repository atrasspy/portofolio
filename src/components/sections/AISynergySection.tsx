"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

const workflow = [
  {
    step: "01",
    icon: "brain",
    title: "AI Analyzes",
    description:
      "AI systems scan the codebase, understand patterns, suggest architectural improvements, and identify potential issues before they become problems.",
    color: "from-purple-500 to-violet-600",
    glow: "purple-500",
  },
  {
    step: "02",
    icon: "code",
    title: "Human Architects",
    description:
      "I design the system architecture, make critical decisions, define business logic, and ensure the solution aligns perfectly with real-world requirements.",
    color: "from-cyan-500 to-blue-600",
    glow: "cyan-500",
  },
  {
    step: "03",
    icon: "merge",
    title: "Synergy Delivers",
    description:
      "The fusion of AI precision and human creativity produces enterprise-grade systems that are faster to build, more reliable, and exceed expectations.",
    color: "from-emerald-500 to-cyan-500",
    glow: "emerald-500",
  },
];

const capabilities = [
  { label: "Code Quality", value: 98, icon: "shield" },
  { label: "Dev Speed", value: 3, unit: "x", icon: "zap" },
  { label: "Bug Detection", value: 95, icon: "search" },
  { label: "Architecture Score", value: 97, icon: "layers" },
];

function StepIcon({ icon }: { icon: string }) {
  if (icon === "brain")
    return (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    );
  if (icon === "code")
    return (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    );
  return (
    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
    </svg>
  );
}

function CapabilityIcon({ icon }: { icon: string }) {
  const cls = "h-5 w-5";
  if (icon === "shield")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    );
  if (icon === "zap")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    );
  if (icon === "search")
    return (
      <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    );
  return (
    <svg className={cls} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
    </svg>
  );
}

export default function AISynergySection() {
  return (
    <section id="ai-synergy" className="relative px-4 py-24 sm:py-32">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full bg-purple-600/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <SectionHeading
          title="Human + AI"
          subtitle="Where human creativity meets artificial intelligence"
        />

        {/* Tagline */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16 text-center"
        >
          <p className="mx-auto max-w-3xl text-lg text-slate-300 leading-relaxed">
            I don&apos;t just <em>use</em> AI — I{" "}
            <GradientText className="font-bold">think with it</GradientText>.
            Every line of architecture I design, every microservice I build, is enhanced
            by AI systems that act as my co-pilot. The result? Solutions that are{" "}
            <span className="text-cyan-400 font-semibold">3x faster</span> to build,{" "}
            <span className="text-purple-400 font-semibold">exponentially more reliable</span>,
            and architecturally superior.
          </p>
        </motion.div>

        {/* Workflow Steps */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-3"
        >
          {workflow.map((item, index) => (
            <motion.div key={item.step} variants={fadeInUp} className="relative group">
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-white/[0.06] h-full">
                {/* Step number */}
                <div className="absolute right-4 top-4 font-mono text-5xl font-black text-white/[0.03]">
                  {item.step}
                </div>

                {/* Icon */}
                <div
                  className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-lg shadow-${item.glow}/25`}
                >
                  <StepIcon icon={item.icon} />
                </div>

                {/* Content */}
                <h3 className="mb-2 text-xl font-bold text-white">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>

                {/* Connector line (not on last) */}
                {index < workflow.length - 1 && (
                  <div className="absolute -right-3 top-1/2 hidden h-px w-6 bg-gradient-to-r from-white/20 to-transparent md:block" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Capabilities Bar */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16"
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center justify-center gap-3">
              <div className="relative flex h-3 w-3">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-purple-400 opacity-75" />
                <span className="relative inline-flex h-3 w-3 rounded-full bg-purple-500" />
              </div>
              <span className="font-mono text-sm text-purple-400 uppercase tracking-widest">
                AI-Enhanced Performance Metrics
              </span>
            </div>

            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              {capabilities.map((cap) => (
                <motion.div
                  key={cap.label}
                  variants={fadeInUp}
                  className="text-center"
                >
                  <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-purple-500/10 text-purple-400">
                    <CapabilityIcon icon={cap.icon} />
                  </div>
                  <div className="text-3xl font-bold">
                    <GradientText className="from-purple-400 via-cyan-400 to-blue-400">
                      {cap.value}{cap.unit || "%"}
                    </GradientText>
                  </div>
                  <div className="mt-1 text-xs text-slate-500 uppercase tracking-wider">
                    {cap.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Big Quote */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <blockquote className="relative mx-auto max-w-2xl">
            <div className="absolute -left-4 -top-4 font-serif text-6xl text-cyan-500/20">&ldquo;</div>
            <p className="text-xl text-slate-300 italic leading-relaxed sm:text-2xl">
              The best code isn&apos;t written by humans <em>or</em> AI alone — it&apos;s
              crafted by those who know how to{" "}
              <GradientText className="font-bold not-italic">
                orchestrate both
              </GradientText>
              .
            </p>
            <footer className="mt-4 text-sm text-slate-500">
              — My development philosophy
            </footer>
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
