"use client";

import { motion } from "framer-motion";
import { personalInfo, stats, education } from "@/data/resume";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import GradientText from "@/components/ui/GradientText";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";

export default function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          title="About Me"
          subtitle="Passionate about building enterprise-grade solutions"
        />

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left - About Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-slate-300">
              {personalInfo.summary}
            </p>

            <p className="text-base leading-relaxed text-slate-400">
              Passionate about leveraging cutting-edge technologies to solve
              complex business challenges and drive innovation in financial
              technology. Currently based in{" "}
              <GradientText>{personalInfo.location}</GradientText>, working
              remotely with teams across the globe.
            </p>

            {/* Education */}
            <div className="space-y-3 pt-4">
              <h3 className="text-lg font-semibold text-white">Education</h3>
              {education.map((edu) => (
                <div
                  key={edu.institution}
                  className="flex items-center gap-3 text-slate-400"
                >
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-cyan-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.26 10.147a60.438 60.438 0 00-.491 6.347A48.62 48.62 0 0112 20.904a48.62 48.62 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.636 50.636 0 00-2.658-.813A59.906 59.906 0 0112 3.493a59.903 59.903 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0112 13.489a50.702 50.702 0 017.74-3.342"
                    />
                  </svg>
                  <span>{edu.institution}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={fadeInRight}>
                <GlassCard className="text-center">
                  <div className="text-4xl font-bold">
                    <GradientText>{stat.value}</GradientText>
                  </div>
                  <div className="mt-2 text-sm text-slate-400">
                    {stat.label}
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
