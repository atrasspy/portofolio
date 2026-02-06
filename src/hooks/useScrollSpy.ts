"use client";

import { useState, useEffect, useCallback } from "react";

/**
 * Custom hook that tracks which section is currently in view
 * Used for highlighting active navigation items
 */
export function useScrollSpy(sectionIds: string[], offset = 100): string {
  const [activeSection, setActiveSection] = useState<string>(sectionIds[0] || "");

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY + offset;

    for (let i = sectionIds.length - 1; i >= 0; i--) {
      const section = document.getElementById(sectionIds[i]);
      if (section && section.offsetTop <= scrollPosition) {
        setActiveSection(sectionIds[i]);
        return;
      }
    }

    setActiveSection(sectionIds[0] || "");
  }, [sectionIds, offset]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return activeSection;
}
