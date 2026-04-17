import { useScrollReveal } from "@/hooks/useScrollReveal";
import CircuitDecoration from "./CircuitDecoration";
import { Eye, Heart, MessageCircle } from "lucide-react";
import { getRevealClass } from "@/lib/reveal";

const pillars = [
  {
    word: "VISIBILIDADE",
    icon: Eye,
    description: "Sua empresa aparece para quem está buscando agora",
  },
  {
    word: "DESEJO",
    icon: Heart,
    description: "Criamos conteúdo que faz o cliente querer comprar",
  },
  {
    word: "CLIENTES",
    icon: MessageCircle,
    description: "Convertemos atenção em mensagens no seu WhatsApp",
  },
];

const SolutionSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <CircuitDecoration className="absolute top-0 right-16 h-[200px] w-10 opacity-20 hidden lg:block" />

      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-navy)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center space-y-6 mb-16 ${isVisible ? "animate-reveal-scale" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">A Solução</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight max-w-4xl mx-auto">
            Nós criamos visibilidade, geramos desejo e convertemos em{" "}
            <span className="text-primary text-glow-gold">clientes reais</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Sua loja de material de construção ou loja de móveis e eletro merece aparecer no Google antes dos concorrentes
            — e gerar clientes todos os dias.
          </p>
        </div>

        {/* 3 Pillar Cards — scale reveal with stagger */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-8 lg:p-10 glass-surface border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.12)] overflow-hidden ${
                isVisible
                  ? getRevealClass(i, ["animate-reveal-scale", "animate-fade-up", "animate-reveal-rotate"])
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 150}ms` }}
            >
              {/* Large background number */}
              <span className="absolute -top-4 -right-2 font-display text-[7rem] font-bold text-foreground/[0.03] leading-none select-none transition-colors duration-500 group-hover:text-primary/[0.06]">
                0{i + 1}
              </span>

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_20px_hsl(45_95%_48%/0.2)]">
                <pillar.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>

              {/* Word */}
              <h3 className="relative z-10 font-display text-2xl lg:text-3xl font-bold text-primary text-glow-gold mb-3">
                {pillar.word}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-muted-foreground leading-relaxed">
                {pillar.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-all duration-500 group-hover:via-primary/60" />
            </div>
          ))}
        </div>

        {/* Connecting dots (desktop only) */}
        <div className="hidden md:flex items-center justify-center gap-4 mt-10">
          {pillars.map((_, i) => (
            <div key={i} className="flex items-center gap-4">
              <div
                className={`w-3 h-3 rounded-full bg-primary/40 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${800 + i * 200}ms` }}
              />
              {i < pillars.length - 1 && (
                <div
                  className={`w-20 lg:w-32 h-[2px] bg-gradient-to-r from-primary/30 to-primary/10 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                  style={{ animationDelay: `${900 + i * 200}ms` }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
