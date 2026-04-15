interface SectionDividerProps {
  from?: string;
  to?: string;
  flip?: boolean;
}

const SectionDivider = ({ from = "hsl(220 20% 97%)", to = "hsl(220 18% 94%)", flip = false }: SectionDividerProps) => {
  return (
    <div className={`relative w-full overflow-hidden ${flip ? "rotate-180" : ""}`} style={{ height: 1, marginTop: -1 }}>
      <div className="absolute inset-x-0 top-0 h-px" style={{ background: `linear-gradient(90deg, transparent 0%, hsl(215 55% 70% / 0.2) 30%, hsl(45 95% 48% / 0.25) 50%, hsl(215 55% 70% / 0.2) 70%, transparent 100%)` }} />
    </div>
  );
};

export default SectionDivider;
