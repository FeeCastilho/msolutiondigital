import { useState, useRef, useCallback, useEffect } from "react";
import { ChevronsLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  initialPosition?: number;
}

const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt = "Sem M Solution",
  afterAlt = "Com M Solution",
  beforeLabel = "Sem M Solution",
  afterLabel = "Com M Solution",
  initialPosition = 50,
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(initialPosition);
  const [transitioning, setTransitioning] = useState(false);
  const isDragging = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);

  /** Clamp and set slider position */
  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(3, Math.min(97, (x / rect.width) * 100));
    setPosition(pct);
  }, []);

  /** Hint animation — wiggles the handle once after 800 ms */
  useEffect(() => {
    setTransitioning(true);
    const t1 = setTimeout(() => setPosition(34), 800);
    const t2 = setTimeout(() => setPosition(66), 1180);
    const t3 = setTimeout(() => {
      setPosition(initialPosition);
      // disable transition after hint settles
      setTimeout(() => setTransitioning(false), 300);
    }, 1560);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /** Mouse / touch drag handlers */
  const startDrag = useCallback(
    (clientX: number) => {
      isDragging.current = true;
      setTransitioning(false);
      document.body.style.userSelect = "none";
      document.body.style.cursor = "ew-resize";
      updatePosition(clientX);
    },
    [updatePosition]
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.preventDefault();
      startDrag(e.clientX);
    },
    [startDrag]
  );

  const handleTouchStart = useCallback(
    (e: React.TouchEvent) => {
      startDrag(e.touches[0].clientX);
    },
    [startDrag]
  );

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.clientX);
    };
    const onMouseUp = () => {
      if (!isDragging.current) return;
      isDragging.current = false;
      document.body.style.userSelect = "";
      document.body.style.cursor = "";
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      updatePosition(e.touches[0].clientX);
    };
    const onTouchEnd = () => {
      isDragging.current = false;
    };

    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("touchmove", onTouchMove, { passive: true });
    document.addEventListener("touchend", onTouchEnd);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("touchmove", onTouchMove);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [updatePosition]);

  const transition = transitioning ? "clip-path 0.35s cubic-bezier(0.16,1,0.3,1)" : "none";
  const dividerTransition = transitioning ? "left 0.35s cubic-bezier(0.16,1,0.3,1)" : "none";

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none cursor-ew-resize shadow-2xl border border-border/40"
      style={{ aspectRatio: "4/3" }}
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      role="slider"
      aria-label="Comparação antes e depois"
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* ── After image (full bleed, background) ── */}
      <img
        src={afterImage}
        alt={afterAlt}
        className="absolute inset-0 w-full h-full object-cover"
        draggable={false}
      />

      {/* ── Before image (clipped via clip-path) ── */}
      <img
        src={beforeImage}
        alt={beforeAlt}
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          clipPath: `inset(0 ${100 - position}% 0 0)`,
          transition,
        }}
        draggable={false}
      />

      {/* ── Overlay gradient on before side (desaturate feel) ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(0,0,0,0.18) 0%, transparent ${position}%, transparent 100%)`,
          transition: dividerTransition,
        }}
      />

      {/* ── Before label ── */}
      <div
        className="absolute top-3 left-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/55 backdrop-blur-md text-white text-xs font-bold shadow-lg pointer-events-none"
        style={{
          opacity: position > 14 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <span aria-hidden>😔</span>
        <span>{beforeLabel}</span>
      </div>

      {/* ── After label ── */}
      <div
        className="absolute top-3 right-3 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full backdrop-blur-md text-white text-xs font-bold shadow-lg pointer-events-none"
        style={{
          backgroundColor: "hsl(45 95% 48% / 0.88)",
          opacity: position < 86 ? 1 : 0,
          transition: "opacity 0.2s ease",
        }}
      >
        <span>{afterLabel}</span>
        <span aria-hidden>🚀</span>
      </div>

      {/* ── Divider line + handle ── */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{
          left: `${position}%`,
          transform: "translateX(-50%)",
          transition: dividerTransition,
        }}
      >
        {/* vertical line */}
        <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-white/90 shadow-[0_0_12px_rgba(0,0,0,0.55)]" />

        {/* handle button */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-[0_4px_24px_rgba(0,0,0,0.35),0_0_0_3px_hsl(45_95%_48%/0.25)] flex items-center justify-center pointer-events-auto hover:scale-110 active:scale-95 transition-transform duration-150">
          <ChevronsLeftRight
            className="w-5 h-5"
            style={{ color: "hsl(215 55% 25%)" }}
            strokeWidth={2.5}
          />
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
