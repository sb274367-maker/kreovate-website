import React from 'react';
import './McuRh850Symbol.css';

const McuRh850Symbol = () => {
  return (
    <div className="mcu-container">
      <svg viewBox="0 0 400 400" className="mcu-symbol">
        <defs>
          <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="6" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Animated tracing background paths (dimmed) */}
        <g stroke="rgba(255, 102, 0, 0.2)" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round">
          {/* Top */}
          <path d="M 200 140 L 200 70" />
          <path d="M 230 140 L 230 110" />
          {/* Right */}
          <path d="M 260 170 L 280 170 L 300 150 L 320 150" />
          <path d="M 260 200 L 330 200" />
          <path d="M 260 230 L 280 230 L 300 250 L 320 250" />
          {/* Bottom */}
          <path d="M 230 260 L 230 280 L 250 300 L 250 320" />
          <path d="M 200 260 L 200 310" />
          <path d="M 170 260 L 170 280 L 150 300 L 150 320" />
          {/* Left */}
          <path d="M 140 230 L 120 230 L 100 250 L 80 250" />
          <path d="M 140 200 L 90 200" />
          <path d="M 140 170 L 120 170 L 100 150 L 80 150" />
        </g>

        <g stroke="var(--color-accent)" fill="none" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" className="mcu-animated-traces">
          {/* Top */}
          <path d="M 200 140 L 200 70" />
          <path d="M 230 140 L 230 110" />
          {/* Right */}
          <path d="M 260 170 L 280 170 L 300 150 L 320 150" />
          <path d="M 260 200 L 330 200" />
          <path d="M 260 230 L 280 230 L 300 250 L 320 250" />
          {/* Bottom */}
          <path d="M 230 260 L 230 280 L 250 300 L 250 320" />
          <path d="M 200 260 L 200 310" />
          <path d="M 170 260 L 170 280 L 150 300 L 150 320" />
          {/* Left */}
          <path d="M 140 230 L 120 230 L 100 250 L 80 250" />
          <path d="M 140 200 L 90 200" />
          <path d="M 140 170 L 120 170 L 100 150 L 80 150" />
        </g>

        {/* Nodes */}
        <g stroke="var(--color-accent)" fill="var(--color-bg)" strokeWidth="6" className="mcu-nodes">
          {/* Top */}
          <circle cx="200" cy="50" r="18" />
          <circle cx="230" cy="100" r="10" />
          {/* Right */}
          <circle cx="340" cy="150" r="18" />
          <circle cx="340" cy="200" r="10" />
          <circle cx="340" cy="250" r="18" />
          {/* Bottom */}
          <circle cx="250" cy="340" r="18" />
          <circle cx="200" cy="320" r="10" />
          <circle cx="150" cy="340" r="10" />
          {/* Left */}
          <circle cx="60" cy="250" r="18" />
          <circle cx="80" cy="200" r="10" />
          <circle cx="60" cy="150" r="18" />
        </g>

        {/* Central Chip */}
        <g className="mcu-core" stroke="var(--color-accent)" fill="rgba(0, 0, 0, 0.8)">
          <rect x="140" y="140" width="120" height="120" strokeWidth="8" />
          <rect x="165" y="165" width="70" height="70" strokeWidth="6" />
          <text x="200" y="206" fontSize="16" fontWeight="bold" fill="var(--color-secondary)" stroke="none" textAnchor="middle" fontFamily="var(--font-mono)"> </text>
        </g>

      </svg>
      <div className="glow-orb"></div>
    </div>
  );
};

export default McuRh850Symbol;
