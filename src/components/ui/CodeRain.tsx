"use client";

import { useEffect, useRef } from "react";

/**
 * Matrix-style code rain background with AI/code symbols
 * Renders on a canvas for maximum performance
 */
export default function CodeRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let columns: number;
    let drops: number[];

    const chars =
      "01アイウエオカキクケコAI{}()=>;</>;const fn async await import return class interface type def λ ∑ ∫ ∂ ∇ ∞ π";
    const charArray = chars.split("");
    const fontSize = 14;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
      columns = Math.floor(canvas!.width / fontSize);
      drops = Array(columns).fill(1).map(() => Math.random() * -100);
    }

    function draw() {
      ctx!.fillStyle = "rgba(3, 7, 18, 0.06)";
      ctx!.fillRect(0, 0, canvas!.width, canvas!.height);

      for (let i = 0; i < drops.length; i++) {
        const char = charArray[Math.floor(Math.random() * charArray.length)];
        const x = i * fontSize;
        const y = drops[i] * fontSize;

        // Gradient effect: brighter at the head
        const brightness = Math.random();
        if (brightness > 0.98) {
          ctx!.fillStyle = "rgba(6, 182, 212, 0.9)"; // cyan head
        } else if (brightness > 0.95) {
          ctx!.fillStyle = "rgba(59, 130, 246, 0.6)"; // blue
        } else {
          ctx!.fillStyle = "rgba(6, 182, 212, 0.15)"; // dim cyan trail
        }

        ctx!.font = `${fontSize}px monospace`;
        ctx!.fillText(char, x, y);

        if (y > canvas!.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i] += 0.5;
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-40"
      aria-hidden="true"
    />
  );
}
