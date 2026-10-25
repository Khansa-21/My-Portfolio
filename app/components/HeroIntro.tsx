"use client";

import { useEffect, useState } from "react";

const nameLetters = "Khansa Ehsan".split("");

export default function HeroIntro() {
  const [hasStarted, setHasStarted] = useState(false);
  const [isLeaving, setIsLeaving] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setHasStarted(true);
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reduceMotion) {
      const frame = window.requestAnimationFrame(() => setIsVisible(false));
      return () => window.cancelAnimationFrame(frame);
    }

    const leaveTimer = window.setTimeout(() => {
      setIsLeaving(true);
    }, 4300);

    const removeTimer = window.setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    return () => {
      window.clearTimeout(leaveTimer);
      window.clearTimeout(removeTimer);
    };
  }, [hasStarted]);

  if (!isVisible) return null;

  return (
    <div
      aria-hidden="true"
      className={`intro-screen fixed inset-0 z-[100] flex items-center justify-center ${
        isLeaving ? "intro-screen-leaving" : ""
      }`}
    >
      <div className="px-6 text-center">
        <p className="mb-7 text-[0.65rem] font-semibold uppercase tracking-[0.3em] text-[#C1B4B0]">
          Portfolio / 2026
        </p>

        <h1
          aria-label="Khansa Ehsan"
          className={`font-display text-6xl leading-none tracking-tight text-[#F6EEDF] sm:text-8xl lg:text-9xl ${
            hasStarted ? "intro-name-glow" : ""
          }`}
        >
          {nameLetters.map((letter, index) => {
            if (letter === " ") {
              return <span key={`space-${index}`}>&nbsp;</span>;
            }

            const direction =
              index % 2 === 0
                ? "intro-letter-from-bottom"
                : "intro-letter-from-top";

            return (
              <span
                key={`${letter}-${index}`}
                className={
                  hasStarted ? `intro-letter ${direction}` : "intro-letter"
                }
                style={
                  hasStarted
                    ? { animationDelay: `${index * 0.075}s` }
                    : undefined
                }
              >
                {letter}
              </span>
            );
          })}
        </h1>

        <div className="relative mx-auto mt-9 h-px w-full max-w-md bg-[#D9AE5A]/20">
          <span
            className={`absolute left-0 top-1/2 ${
              hasStarted ? "intro-comet" : ""
            }`}
          />
        </div>

        <p
          className={`mt-6 text-xs font-semibold uppercase tracking-[0.34em] text-[#F0CE86] sm:text-sm ${
            hasStarted ? "intro-tagline" : "opacity-0"
          }`}
        >
          Full-Stack Developer
        </p>
      </div>
    </div>
  );
}
