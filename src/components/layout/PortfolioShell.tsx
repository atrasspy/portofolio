"use client";

import { useState } from "react";
import AIWelcome from "@/components/ui/AIWelcome";
import AIAssistant from "@/components/ui/AIAssistant";
import type { ReactNode } from "react";

interface PortfolioShellProps {
  children: ReactNode;
}

/**
 * Client-side shell that manages:
 * 1. AI Welcome splash screen on first load
 * 2. AI Assistant floating chatbot (always available)
 */
export default function PortfolioShell({ children }: PortfolioShellProps) {
  const [isReady, setIsReady] = useState(false);

  return (
    <>
      {/* AI Welcome Splash */}
      <AIWelcome onComplete={() => setIsReady(true)} />

      {/* Main content - render immediately but hidden until welcome completes */}
      <div
        className={`transition-opacity duration-700 ${
          isReady ? "opacity-100" : "opacity-0"
        }`}
      >
        {children}
      </div>

      {/* AI Assistant - show after welcome */}
      {isReady && <AIAssistant />}
    </>
  );
}
