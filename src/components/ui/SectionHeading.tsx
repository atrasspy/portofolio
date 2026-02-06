"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  title,
  subtitle,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg text-slate-400 mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-6 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 ${
          align === "center" ? "mx-auto" : ""
        }`}
      />
    </motion.div>
  );
}
