"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navItems } from "@/data/resume";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(
    navItems.map((item) => item.href.replace("#", "")),
    150
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed left-0 right-0 top-0 z-50 transition-all duration-300",
          isScrolled
            ? "border-b border-white/10 bg-slate-950/80 backdrop-blur-xl"
            : "bg-transparent"
        )}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick("#home");
            }}
            className="text-xl font-bold text-white transition-colors hover:text-cyan-400"
          >
            A<span className="text-cyan-500">.</span>S
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className={cn(
                      "relative rounded-full px-4 py-2 text-sm font-medium transition-colors",
                      isActive
                        ? "text-cyan-400"
                        : "text-slate-400 hover:text-white"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="activeNav"
                        className="absolute inset-0 rounded-full bg-cyan-500/10"
                        transition={{
                          type: "spring",
                          stiffness: 380,
                          damping: 30,
                        }}
                      />
                    )}
                    <span className="relative z-10">{item.label}</span>
                  </a>
                </li>
              );
            })}
          </ul>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-slate-400 transition-colors hover:text-white md:hidden"
            aria-label="Toggle menu"
          >
            <div className="flex h-5 w-6 flex-col items-center justify-center gap-1.5">
              <span
                className={cn(
                  "h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                  isMobileMenuOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                  isMobileMenuOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "h-0.5 w-6 rounded-full bg-current transition-all duration-300",
                  isMobileMenuOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl md:hidden"
          >
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              className="flex h-full flex-col items-center justify-center gap-6"
            >
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }}
                    className="text-2xl font-medium text-slate-300 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
