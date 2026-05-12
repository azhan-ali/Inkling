"use client";

import { useEffect, useState } from "react";

const messages = [
  "Reading your project inputs...",
  "Assigning your narrative archetype...",
  "Mapping the Solana ecosystem...",
  "Detecting rival positioning...",
  "Drafting your Week Zero Kit...",
  "Writing your origin stories...",
  "Building your Insertion Points Map...",
  "Forging your Rivalry Radar...",
  "Crafting viral thread pack...",
  "Finding your ecosystem allies...",
  "Assembling your war room...",
  "Almost ready...",
];

export function LoadingOverlay() {
  const [msgIndex, setMsgIndex] = useState(0);
  const [dots, setDots] = useState(".");

  useEffect(() => {
    const msgTimer = setInterval(() => {
      setMsgIndex((i) => (i + 1) % messages.length);
    }, 2800);
    const dotTimer = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "." : d + "."));
    }, 500);
    return () => {
      clearInterval(msgTimer);
      clearInterval(dotTimer);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-paper/90 backdrop-blur-sm">
      <div className="sketch-card bg-card-yellow p-10 sm:p-14 text-center max-w-md mx-4 relative">
        {/* Spinning doodle */}
        <div className="text-6xl mb-6 inline-block doodle-spin">✦</div>

        <h2 className="font-comic text-3xl sm:text-4xl text-ink mb-4">
          Forging Your Signal{dots}
        </h2>

        <p className="font-hand text-lg text-pencil min-h-[2rem] transition-all duration-500">
          {messages[msgIndex]}
        </p>

        {/* Progress dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2.5 h-2.5 rounded-full bg-marker-orange"
              style={{
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`,
              }}
            />
          ))}
        </div>

        <p className="font-hand text-xs text-pencil mt-4">
          This takes 30–60 seconds. Don&apos;t close this tab.
        </p>

        <style>{`
          @keyframes bounce {
            0%, 80%, 100% { transform: translateY(0); }
            40% { transform: translateY(-10px); }
          }
        `}</style>
      </div>
    </div>
  );
}
