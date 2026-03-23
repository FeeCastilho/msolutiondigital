import React from "react";

const CircuitDecoration = ({ className = "", style }: { className?: string; style?: React.CSSProperties }) => (
  <svg className={className} style={style} viewBox="0 0 40 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <line x1="20" y1="0" x2="20" y2="60" stroke="hsl(215 55% 35%)" strokeWidth="1.5" opacity="0.35" />
    <circle cx="20" cy="0" r="4" fill="hsl(45 95% 48%)" opacity="0.6" />
    <line x1="20" y1="60" x2="10" y2="100" stroke="hsl(215 55% 40%)" strokeWidth="1" opacity="0.25" />
    <line x1="20" y1="60" x2="30" y2="120" stroke="hsl(215 55% 40%)" strokeWidth="1" opacity="0.2" />
    <circle cx="10" cy="100" r="3" fill="hsl(45 95% 48%)" opacity="0.45" />
    <circle cx="30" cy="120" r="3" fill="hsl(45 95% 48%)" opacity="0.35" />
    <line x1="10" y1="100" x2="10" y2="200" stroke="hsl(215 55% 45%)" strokeWidth="0.5" opacity="0.15" />
    <line x1="30" y1="120" x2="30" y2="200" stroke="hsl(215 55% 45%)" strokeWidth="0.5" opacity="0.1" />
  </svg>
);

export default CircuitDecoration;
