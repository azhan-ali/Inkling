"use client";

import { useEffect, useRef, useState } from "react";

interface Trail {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  rotation: number;
}

const INK_COLORS = [
  "#ff6b35", // marker-orange
  "#ffd60a", // marker-yellow
  "#06d6a0", // marker-green
  "#ff4d8d", // marker-pink
  "#118ab2", // marker-blue
  "#7b2d8b", // marker-purple
];

const TRAIL_SHAPES = ["●", "✦", "◆", "★", "✿", "♥"];

export function InkCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [trails, setTrails] = useState<Trail[]>([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const trailIdRef = useRef(0);
  const posRef = useRef({ x: -100, y: -100 });
  const lastTrailPos = useRef({ x: -100, y: -100 });

  useEffect(() => {
    // Hide default cursor
    document.documentElement.style.cursor = "none";

    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      posRef.current = { x, y };

      // Move main cursor
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x - 3}px, ${y - 3}px)`;
      }

      // Add ink trail every 18px of movement
      const dx = x - lastTrailPos.current.x;
      const dy = y - lastTrailPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 18) {
        lastTrailPos.current = { x, y };
        const id = trailIdRef.current++;
        const newTrail: Trail = {
          id,
          x,
          y,
          size: 6 + Math.random() * 8,
          opacity: 0.7 + Math.random() * 0.3,
          color: INK_COLORS[Math.floor(Math.random() * INK_COLORS.length)],
          rotation: Math.random() * 360,
        };
        setTrails((prev) => [...prev.slice(-18), newTrail]);

        // Fade out after 600ms
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id));
        }, 600);
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], input, textarea, select, label") !== null;
      setIsHovering(isInteractive);
    };

    const handleMouseDown = () => {
      setIsClicking(true);
      // Ink splatter on click
      const { x, y } = posRef.current;
      const splatterCount = 5;
      const newTrails: Trail[] = [];
      for (let i = 0; i < splatterCount; i++) {
        const id = trailIdRef.current++;
        newTrails.push({
          id,
          x: x + (Math.random() - 0.5) * 40,
          y: y + (Math.random() - 0.5) * 40,
          size: 8 + Math.random() * 12,
          opacity: 0.8,
          color: INK_COLORS[Math.floor(Math.random() * INK_COLORS.length)],
          rotation: Math.random() * 360,
        });
        setTimeout(() => {
          setTrails((prev) => prev.filter((t) => t.id !== id));
        }, 500);
      }
      setTrails((prev) => [...prev.slice(-20), ...newTrails]);
    };

    const handleMouseUp = () => setIsClicking(false);

    document.addEventListener("mousemove", moveCursor, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.documentElement.style.cursor = "";
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <>
      {/* ── Ink trail drops ── */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="ink-trail-drop"
          style={{
            left: trail.x,
            top: trail.y,
            width: trail.size,
            height: trail.size,
            color: trail.color,
            opacity: trail.opacity,
            transform: `translate(-50%, -50%) rotate(${trail.rotation}deg)`,
            fontSize: trail.size,
            lineHeight: 1,
          }}
        >
          {TRAIL_SHAPES[Math.floor(trail.id % TRAIL_SHAPES.length)]}
        </div>
      ))}

      {/* ── Main cursor — ink pen nib ── */}
      <div
        ref={cursorRef}
        className={`ink-cursor-main ${isHovering ? "ink-cursor-hover" : ""} ${isClicking ? "ink-cursor-click" : ""}`}
        style={{ transform: "translate(-100px, -100px)" }}
      >
        {/* Pen nib SVG */}
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          {/* Outer circle */}
          <circle
            cx="16"
            cy="16"
            r="14"
            fill={isHovering ? "#ffd60a" : "white"}
            stroke="#1a1a2e"
            strokeWidth="2.5"
          />
          {/* Pen nib shape */}
          <path
            d="M16 8 L20 18 L16 22 L12 18 Z"
            fill={isHovering ? "#1a1a2e" : "#ff6b35"}
            stroke="#1a1a2e"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
          {/* Ink drop at bottom */}
          <circle
            cx="16"
            cy="23"
            r="2"
            fill={isHovering ? "#ff6b35" : "#1a1a2e"}
          />
        </svg>
      </div>

      {/* ── Dot follower (lags slightly behind) ── */}
      <div
        ref={dotRef}
        className="ink-cursor-dot"
        style={{ transform: "translate(-100px, -100px)" }}
      />
    </>
  );
}
