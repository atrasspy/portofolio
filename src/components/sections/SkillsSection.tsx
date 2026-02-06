"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import NeuralNetwork from "@/components/ui/NeuralNetwork";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function SkillsSection() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:py-32">
      {/* Neural Network Background */}
      <NeuralNetwork />

      {/* Background accent */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute right-0 top-1/3 h-[500px] w-[500px] rounded-full bg-purple-600/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <SectionHeading
          title="Technical Arsenal"
          subtitle="Technologies and tools enhanced by AI-augmented workflows"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {skillCategories.map((category) => {
            const isAI = category.id === "ai";
            return (
              <motion.div key={category.id} variants={fadeInUp}>
                <div className={isAI ? "relative" : ""}>
                  {/* Special glow for AI category */}
                  {isAI && (
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500/30 via-cyan-500/30 to-blue-500/30 blur-sm" />
                  )}
                  <GlassCard
                    className={`h-full relative ${
                      isAI
                        ? "border-purple-500/30 bg-purple-500/[0.05]"
                        : ""
                    }`}
                  >
                    {/* Category Header */}
                    <div className="mb-4 flex items-center gap-3">
                      <span className="text-2xl" role="img" aria-label={category.name}>
                        {category.icon}
                      </span>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
                        {category.name}
                      </h3>
                      {isAI && (
                        <span className="ml-auto inline-flex items-center rounded-full bg-purple-500/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-purple-300">
                          Core
                        </span>
                      )}
                    </div>

                    {/* Skills list */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => (
                        <div key={skill.name} className="group">
                          <div className="flex items-center gap-2">
                            <div
                              className={`h-1.5 w-1.5 rounded-full ${
                                isAI ? "bg-purple-500" : "bg-cyan-500"
                              }`}
                            />
                            <span className="text-sm font-medium text-slate-200 group-hover:text-cyan-400 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          <p className="ml-3.5 mt-0.5 text-xs text-slate-500">
                            {skill.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </GlassCard>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
