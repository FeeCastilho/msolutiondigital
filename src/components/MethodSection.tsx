import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Crosshair, Layers, Zap, BarChart3, TrendingUp } from "lucide-react";
import CircuitDecoration from "./CircuitDecoration";
import { getRevealClass } from "@/lib/reveal";

const steps = [
  {
    icon: Crosshair,
    num: "01",
    title: "Diagnóstico",
    desc: "Analisamos sua empresa, concorrência local e oportunidades reais na região.",
    color: "from-blue-500/20 to-blue-600/10",
  },
  {
    icon: Layers,
    num: "02",
    title: "Estratégia",
    desc: "Criamos o plano de ataque personalizado para seu segmento.",
    color: "from-violet-500/20 to-violet-600/10",
  },
  {
    icon: Zap,
    num: "03",
    title: "Ativação",
    desc: "Colocamos em prática a estratégia personalizada que criamos para sua empresa.",
    color: "from-amber-500/20 to-amber-600/10",
  },
  {
    icon: BarChart3,
    num: "04",
    title: "Escala",
    desc: "Otimizamos resultados e escalamos o que gera mais clientes.",
    color: "from-emerald-500/20 to-emerald-600/10",
  },
  {
    icon: TrendingUp,
    num: "05",
    title: "Resultado",
    desc: "Agora é hora de colher os resultados: mais visibilidade, mais clientes e crescimento constante da sua empresa.",
    color: "from-teal-500/20 to-teal-600/10",
  },
];

const MethodSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="metodo" className="relative py-24 lg:py-32" ref={ref}>
      <CircuitDecoration className="absolute top-0 left-10 h-[180px] w-10 opacity-15 hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-reveal-right" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Como Funciona</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Nossa <span className="text-primary text-glow-gold">metodologia</span> em 5 etapas
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um processo estruturado que transforma empresas em referência digital na região.
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* Connection line with energy flow */}
          <div className="hidden lg:block absolute top-[3.5rem] left-[4%] right-[4%] z-0">
            <div className="w-full h-[2px] bg-gradient-to-r from-primary/10 via-primary/40 to-primary/10 rounded-full" />
            <div
              className="absolute inset-0 h-[2px] bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-energy-flow rounded-full"
              style={{ backgroundSize: "200% 100%" }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-3 relative z-10">
            {steps.map((step, i) => (
              <div
                key={i}
                className={`group relative ${
                  isVisible
                    ? getRevealClass(i, [
                        "animate-fade-up",
                        "animate-reveal-down",
                        "animate-reveal-scale",
                        "animate-reveal-rotate",
                        "animate-fade-up",
                      ])
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${i * 120}ms` }}
              >
                {/* Card */}
                <div className="relative h-full rounded-2xl bg-card border border-border/60 p-5 text-center transition-all duration-500 group-hover:border-primary/30 group-hover:shadow-[0_12px_40px_hsl(45_95%_48%/0.12),0_4px_16px_hsl(215_55%_25%/0.06)]">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                  />

                  <div className="relative z-10 space-y-4">
                    {/* Step number badge */}
                    <div className="flex justify-center">
                      <div className="relative">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 border border-accent/20 flex items-center justify-center transition-all duration-500 group-hover:from-primary/20 group-hover:to-primary/10 group-hover:border-primary/30 group-hover:shadow-[0_0_30px_hsl(45_95%_48%/0.2)]">
                          <step.icon className="w-7 h-7 text-accent transition-all duration-500 group-hover:text-primary group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(45_95%_48%/0.5)]" />
                        </div>
                        {/* Floating number */}
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-primary-foreground text-[10px] font-bold font-display flex items-center justify-center shadow-[0_2px_10px_hsl(45_95%_48%/0.4)]">
                          {step.num}
                        </span>
                      </div>
                    </div>

                    <h3 className="font-display text-base lg:text-lg font-bold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{step.desc}</p>
                  </div>

                  {/* Bottom accent */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary via-primary/80 to-primary/40 transition-all duration-700 ease-out" />
                  </div>
                </div>

                {/* Arrow connector (between cards on desktop) */}
                {i < 4 && (
                  <div className="hidden lg:flex absolute -right-2 top-9 -translate-y-1/2 z-20">
                    <div className="w-2.5 h-2.5 border-r-2 border-t-2 border-primary/40 rotate-45" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
