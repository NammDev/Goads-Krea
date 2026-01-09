"use client";

import { useEffect, useState } from "react";

interface ClockProps {
  size?: number;
}

// Pre-computed tick marks (60 total, every 5th is skipped for numbers)
// Using fixed precision to avoid hydration mismatches
const TICK_MARKS = (() => {
  const ticks: Array<{ x1: string; y1: string; x2: string; y2: string }> = [];
  for (let i = 0; i < 60; i++) {
    if (i % 5 === 0) continue;
    const angle = (i * 6 - 90) * (Math.PI / 180);
    const outerR = 93;
    const innerR = 87;
    ticks.push({
      x1: (100 + outerR * Math.cos(angle)).toFixed(2),
      y1: (100 + outerR * Math.sin(angle)).toFixed(2),
      x2: (100 + innerR * Math.cos(angle)).toFixed(2),
      y2: (100 + innerR * Math.sin(angle)).toFixed(2),
    });
  }
  return ticks;
})();

// Pre-computed hour number positions
const HOUR_NUMBERS = (() => {
  const hourLabels = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  return hourLabels.map((label, i) => {
    const angle = (i * 30 - 90) * (Math.PI / 180);
    const r = 83;
    return {
      label,
      x: (100 + r * Math.cos(angle)).toFixed(2),
      y: (100 + r * Math.sin(angle)).toFixed(2),
    };
  });
})();

/** Analog clock SVG component for Bleeding Edge bento card */
export function BleedingEdgeClock({ size = 140 }: ClockProps) {
  // Start with null to indicate not mounted yet (avoids SSR/client time mismatch)
  const [time, setTime] = useState<Date | null>(null);

  useEffect(() => {
    // Set initial time on client mount
    setTime(new Date());
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Default rotation angles for SSR (12:00:00)
  const hours = time ? time.getHours() % 12 : 0;
  const minutes = time ? time.getMinutes() : 0;
  const seconds = time ? time.getSeconds() : 0;

  // Calculate rotation angles
  const hourRotation = hours * 30 + minutes * 0.5;
  const minuteRotation = minutes * 6 + seconds * 0.1;
  const secondRotation = seconds * 6;

  return (
    <svg viewBox="0 0 200 200" className="block select-none" width={size} height={size}>
      <defs>
        <filter id="shadow-blur" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="2" />
        </filter>
        <filter id="clock-shadow" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="1" />
        </filter>
        <radialGradient id="center-highlight" cx="60%" cy="60%" r="70%">
          <stop offset="70%" style={{ stopColor: "#FFC32F", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#ffffff", stopOpacity: 1 }} />
        </radialGradient>
        <filter id="counterweight-shadow" x="-50%" y="-50%" width="200%" height="200%" filterUnits="objectBoundingBox">
          <feGaussianBlur stdDeviation="0.5" />
        </filter>
      </defs>

      {/* Clock face shadow */}
      <circle cx="101" cy="102" r="97" fill="#000" filter="url(#clock-shadow)" opacity="0.1" />

      {/* Clock face */}
      <circle cx="100" cy="100" r="95" className="fill-primary-50 border-white stroke-white" strokeWidth="1" />

      {/* Hour numbers */}
      {HOUR_NUMBERS.map((num, i) => (
        <text
          key={i}
          textAnchor="middle"
          dominantBaseline="middle"
          className="fill-black"
          fontSize="11"
          fontWeight="500"
          x={num.x}
          y={num.y}
        >
          {num.label}
        </text>
      ))}

      {/* Tick marks */}
      {TICK_MARKS.map((tick, i) => (
        <line
          key={i}
          className="stroke-primary-300"
          strokeWidth="0.75"
          x1={tick.x1}
          y1={tick.y1}
          x2={tick.x2}
          y2={tick.y2}
        />
      ))}

      {/* Hour hand shadow */}
      <g filter="url(#shadow-blur)" opacity="0.3" transform={`rotate(${hourRotation}, 101, 101)`}>
        <line x1="101" y1="101" x2="101" y2="51" stroke="#000" strokeWidth="6" strokeLinecap="round" />
        <line x1="101" y1="51" x2="101" y2="66" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Hour hand */}
      <g transform={`rotate(${hourRotation}, 100, 100)`}>
        <line x1="100" y1="100" x2="100" y2="50" className="stroke-primary-800" strokeWidth="6" strokeLinecap="round" />
        <line x1="100" y1="50" x2="100" y2="65" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Minute hand shadow */}
      <g filter="url(#shadow-blur)" opacity="0.3" transform={`rotate(${minuteRotation}, 102, 102)`}>
        <line x1="102" y1="102" x2="102" y2="37" stroke="#000" strokeWidth="5" strokeLinecap="round" />
        <line x1="102" y1="37" x2="102" y2="52" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Minute hand */}
      <g transform={`rotate(${minuteRotation}, 100, 100)`}>
        <line x1="100" y1="100" x2="100" y2="35" className="stroke-primary-800" strokeWidth="5" strokeLinecap="round" />
        <line x1="100" y1="35" x2="100" y2="50" className="stroke-white" strokeWidth="1.5" strokeLinecap="round" />
      </g>

      {/* Second hand shadow */}
      <g
        className="transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        filter="url(#shadow-blur)"
        opacity="0.2"
        transform={`rotate(${secondRotation}, 103, 103)`}
      >
        <line x1="103" y1="103" x2="103" y2="38" stroke="#000" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="103" y1="103" x2="103" y2="113" stroke="#000" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Second hand */}
      <g
        className="transition-transform duration-200 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
        transform={`rotate(${secondRotation}, 100, 100)`}
      >
        <line x1="100" y1="100" x2="100" y2="35" stroke="#FFC32F" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="100" y1="100" x2="100" y2="110" stroke="#FFC32F" strokeWidth="6" strokeLinecap="round" />
      </g>

      {/* Center cap */}
      <circle cx="100" cy="100" r="5" fill="#FFC32F" />
      <circle cx="100" cy="100" r="3" fill="#000" filter="url(#counterweight-shadow)" opacity="0.3" />
      <circle cx="100" cy="100" r="3" fill="url(#center-highlight)" stroke="none" opacity="1" />
    </svg>
  );
}
