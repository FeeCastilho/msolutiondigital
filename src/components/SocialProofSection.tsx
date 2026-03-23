import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useCountUp } from "@/hooks/useCountUp";
import { TrendingUp, Users, DollarSign, Star } from "lucide-react";

const CountUpStat = ({ end, prefix = "", suffix = "", decimals = false, isActive }: {
  end: number; prefix?: string; suffix?: string; decimals?: boolean; isActive: boolean;
}) => {
  const count = useCountUp(decimals ? end * 10 : end, 2200, 0, isActive);
  const display = decimals ? (count / 10).toFixed(1) : count;
  return <>{prefix}{display}{suffix}</>;
};

const stats = [
  { end: 300, prefix: "+", suffix: "%", label: "Aumento médio em leads", icon: TrendingUp },
  { end: 127, prefix: "", suffix: "+", label: "Lojas atendidas", icon: Users },
  { end: 2.4, prefix: "R$", suffix: "M", label: "Faturamento gerado", icon: DollarSign, decimals: true },
  { end: 4.9, prefix: "", suffix: "★", label: "Avaliação no Google", icon: Star, decimals: true },
];

const SocialProofSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="resultados" className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Resultados Reais</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Números que <span className="text-primary text-glow-gold">falam por si</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`group relative text-center glass-surface rounded-2xl p-8 border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.12)] overflow-hidden ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 120}ms` }}
            >
              {/* Glow background on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-500 group-hover:from-primary/[0.03] group-hover:to-transparent" />

              <div className="relative z-10">
                <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(45_95%_48%/0.15)]">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary tabular-nums">
                  <CountUpStat
                    end={stat.end}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                    isActive={isVisible}
                  />
                </p>
                <p className="text-sm text-muted-foreground mt-3">{stat.label}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-all duration-500 group-hover:via-primary/50" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
