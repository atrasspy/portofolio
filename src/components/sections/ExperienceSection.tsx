"use client";

import { motion } from "framer-motion";
import { experiences } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative px-4 py-24 sm:py-32">
      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-1/2 h-[600px] w-[400px] -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-4xl">
        <SectionHeading
          title="Experience"
          subtitle="My professional journey in software engineering"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-0 top-0 hidden h-full w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent md:left-8 md:block" />

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                variants={fadeInUp}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-8 hidden md:block">
                  <div className="relative flex h-[17px] w-[17px] -translate-x-2 items-center justify-center">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-20" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-cyan-500 bg-slate-900" />
                  </div>
                </div>

                <GlassCard>
                  {/* Header */}
                  <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.role}
                      </h3>
                      <p className="mt-1 text-cyan-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col items-start gap-1 sm:items-end">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                        <svg
                          className="h-3 w-3"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        {exp.period}
                      </span>
                      <span className="text-xs text-slate-500">
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 text-sm text-slate-400 leading-relaxed"
                      >
                        <svg
                          className="mt-1 h-4 w-4 flex-shrink-0 text-cyan-500/70"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Index badge */}
                  <div className="mt-4 flex items-center gap-2">
                    <span className="text-xs text-slate-600">
                      {String(index + 1).padStart(2, "0")} / {String(experiences.length).padStart(2, "0")}
                    </span>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
