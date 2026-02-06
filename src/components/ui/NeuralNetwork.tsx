"use client";

import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  pulsePhase: number;
}

/**
 * Neural Network particle animation
 * Shows interconnected nodes pulsing with data, representing AI
 */
export default function NeuralNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let nodes: Node[] = [];
    const nodeCount = 50;
    const connectionDistance = 150;

    function resize() {
      canvas!.width = window.innerWidth;
      canvas!.height = window.innerHeight;
    }

    function initNodes() {
      nodes = [];
      for (let i = 0; i < nodeCount; i++) {
        nodes.push({
          x: Math.random() * canvas!.width,
          y: Math.random() * canvas!.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
          pulsePhase: Math.random() * Math.PI * 2,
        });
      }
    }

    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const time = Date.now() * 0.001;

      // Update and draw nodes
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];

        // Move
        node.x += node.vx;
        node.y += node.vy;

        // Bounce
        if (node.x < 0 || node.x > canvas!.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas!.height) node.vy *= -1;

        // Pulse
        const pulse = Math.sin(time * 2 + node.pulsePhase) * 0.5 + 0.5;
        const alpha = 0.3 + pulse * 0.4;

        // Draw connections
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDistance) {
            const lineAlpha = (1 - dist / connectionDistance) * 0.15;
            const gradient = ctx!.createLinearGradient(
              node.x, node.y, other.x, other.y
            );
            gradient.addColorStop(0, `rgba(6, 182, 212, ${lineAlpha})`);
            gradient.addColorStop(1, `rgba(147, 51, 234, ${lineAlpha})`);
            ctx!.beginPath();
            ctx!.strokeStyle = gradient;
            ctx!.lineWidth = 0.5;
            ctx!.moveTo(node.x, node.y);
            ctx!.lineTo(other.x, other.y);
            ctx!.stroke();

            // Occasional data pulse along the line
            if (Math.sin(time * 3 + i + j) > 0.97) {
              const t = (Math.sin(time * 5 + i) + 1) / 2;
              const px = node.x + (other.x - node.x) * t;
              const py = node.y + (other.y - node.y) * t;
              ctx!.beginPath();
              ctx!.arc(px, py, 2, 0, Math.PI * 2);
              ctx!.fillStyle = `rgba(6, 182, 212, 0.8)`;
              ctx!.fill();
            }
          }
        }

        // Draw node
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius + pulse, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(6, 182, 212, ${alpha})`;
        ctx!.fill();

        // Glow
        ctx!.beginPath();
        ctx!.arc(node.x, node.y, node.radius * 3 + pulse * 2, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(6, 182, 212, ${alpha * 0.1})`;
        ctx!.fill();
      }

      animationId = requestAnimationFrame(draw);
    }

    resize();
    initNodes();
    draw();
    window.addEventListener("resize", () => {
      resize();
      initNodes();
    });

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 opacity-60"
      aria-hidden="true"
    />
  );
}
