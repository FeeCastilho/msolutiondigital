import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Shield, Target, Cpu, Award } from "lucide-react";

const highlights = [
  { icon: Target, title: "Foco absoluto", desc: "Só atendemos lojas de construção , lojas de móveis e eletro" },
  { icon: Cpu, title: "Tecnologia + dados", desc: "Decisões baseadas em métricas reais" },
  { icon: Shield, title: "Método validado", desc: "Resultados comprovados em 900+ lojas" },
  { icon: Award, title: "Time especialista", desc: "Profissionais que vivem o segmento" },
];

const AuthoritySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden" ref={ref}>
      <div
        className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-[0.04]"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-gold)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* Left — slides in from left */}
            <div className={`space-y-6 ${isVisible ? "animate-reveal-left" : "opacity-0"}`}>
              <p className="text-primary text-sm font-semibold tracking-widest uppercase">Sobre nós</p>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Somos especialistas em transformar{" "}
                <span className="text-primary text-glow-gold">empresas em referência digital</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
                A M Solution Digital se especializou no segmento de lojas de material para
                construção , lojas de móveis e eletro. Conhecemos os desafios, o público e as oportunidades
                desse mercado como ninguém.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Nosso time combina tecnologia, dados e criatividade para entregar o que importa —
                clientes reais no seu WhatsApp, prontos para comprar.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Atuamos no mercado digital desde 2018, ajudando empresas a vender mais todos os
                dias com estratégia, posicionamento e foco em resultado.
              </p>
            </div>

            {/* Right — slides in from right */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, i) => (
                <div
                  key={i}
                  className={`group relative glass-surface rounded-2xl p-6 border border-border/60 transition-all duration-500 hover:border-primary/30 hover:shadow-[0_8px_30px_hsl(45_95%_48%/0.1)] overflow-hidden ${
                    isVisible ? "animate-reveal-right" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${250 + i * 120}ms` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 transition-all duration-500 group-hover:from-primary/[0.04] group-hover:to-transparent" />
                  <div className="relative z-10">
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_15px_hsl(45_95%_48%/0.15)]">
                      <item.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display font-bold text-foreground mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary/20 to-transparent transition-all duration-500 group-hover:via-primary/50" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
