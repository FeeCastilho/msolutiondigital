import { useParallax } from "@/hooks/useParallax";

const CircuitBackground = () => {
  const slowY = useParallax(0.03);
  const medY = useParallax(0.06);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      <svg className="absolute inset-0 w-full h-full opacity-[0.08]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
            <line x1="30" y1="0" x2="30" y2="50" stroke="hsl(215 55% 45%)" strokeWidth="1" />
            <circle cx="30" cy="0" r="3" fill="hsl(45 95% 48%)" />
            <line x1="30" y1="50" x2="20" y2="80" stroke="hsl(215 55% 45%)" strokeWidth="0.7" />
            <circle cx="20" cy="80" r="2" fill="hsl(45 95% 48%)" />
            <line x1="20" y1="80" x2="20" y2="120" stroke="hsl(215 55% 50%)" strokeWidth="0.5" />
            <line x1="60" y1="40" x2="100" y2="40" stroke="hsl(215 55% 55%)" strokeWidth="0.5" />
            <line x1="100" y1="40" x2="100" y2="90" stroke="hsl(215 55% 55%)" strokeWidth="0.5" />
            <circle cx="100" cy="90" r="2" fill="hsl(215 55% 55%)" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.05]"
        style={{
          background: "radial-gradient(circle, hsl(215 55% 60%) 0%, transparent 70%)",
          transform: `translate(-50%, ${slowY}px)`,
        }}
      />
      <div
        className="absolute top-[70%] right-0 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{
          background: "radial-gradient(circle, hsl(45 95% 55%) 0%, transparent 70%)",
          transform: `translateY(${-medY}px)`,
        }}
      />
    </div>
  );
};

export default CircuitBackground;
