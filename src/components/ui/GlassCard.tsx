"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={cn(
        "rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm",
        hover &&
          "transition-all duration-300 hover:border-cyan-500/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-cyan-500/5",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
