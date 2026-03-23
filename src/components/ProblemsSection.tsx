import { useScrollReveal } from "./useScrollReveal";
import { TrendingDown, Users, Clock, DollarSign, Search, ShieldOff } from "lucide-react";
import storeConstruction from "@/assets/store-construction.jpg";
import storeFurniture from "@/assets/store-furniture.jpg";

const problems = [
  { icon: TrendingDown, text: "Poucas vendas e clientes que só pesquisam preço", highlight: "Poucas vendas" },
  { icon: Users, text: "Clientes não encontram sua loja no Google", highlight: "não encontram" },
  { icon: Clock, text: "Investimento em panfleto e rádio sem retorno", highlight: "sem retorno" },
  { icon: DollarSign, text: "Concorrentes grandes dominando a região", highlight: "dominando" },
  { icon: Search, text: "WhatsApp parado — sem mensagens de clientes novos", highlight: "WhatsApp parado" },
  { icon: ShieldOff, text: "Presença digital fraca ou inexistente", highlight: "fraca ou inexistente" },
];

const ProblemsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Você se identifica?</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Sua loja de construção ou móveis{" "}
            <span className="text-primary text-glow-gold">enfrenta isso?</span>
          </h2>
        </div>

        {/* Store images showcase */}
        <div className={`grid md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16 ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="relative group rounded-2xl overflow-hidden shadow-lg">
            <img
              src={storeConstruction}
              alt="Loja de material de construção"
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">
                🧱 Material de Construção
              </span>
              <p className="text-white/90 text-sm mt-2 font-medium">
                Ajudamos lojas de construção a dominar a região digitalmente
              </p>
            </div>
          </div>
          <div className="relative group rounded-2xl overflow-hidden shadow-lg" style={{ animationDelay: "150ms" }}>
            <img
              src={storeFurniture}
              alt="Loja de móveis"
              className="w-full h-56 sm:h-64 object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-accent/80 via-accent/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/90 text-primary-foreground text-xs font-bold uppercase tracking-wider">
                🛋️ Lojas de Móveis
              </span>
              <p className="text-white/90 text-sm mt-2 font-medium">
                Conectamos lojas de móveis com clientes prontos para comprar
              </p>
            </div>
          </div>
        </div>

        {/* Problem cards — redesigned */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {problems.map((p, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl p-px cursor-default transition-all duration-500 ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${200 + i * 100}ms` }}
            >
              {/* Gradient border on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/30 group-hover:via-primary/10 group-hover:to-accent/20 transition-all duration-500" />
              
              <div className="relative h-full rounded-2xl bg-card p-6 flex flex-col gap-4 border border-border/60 group-hover:border-primary/20 group-hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.1),0_2px_12px_hsl(215_55%_25%/0.06)] transition-all duration-500">
                {/* Icon + number */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center transition-all duration-500 group-hover:from-primary/25 group-hover:to-primary/10 group-hover:shadow-[0_0_24px_hsl(45_95%_48%/0.2)]">
                    <p.icon className="w-7 h-7 text-primary transition-all duration-500 group-hover:scale-110 group-hover:drop-shadow-[0_0_8px_hsl(45_95%_48%/0.4)]" />
                  </div>
                  <span className="text-3xl font-display font-bold text-border/80 group-hover:text-primary/20 transition-colors duration-500">
                    0{i + 1}
                  </span>
                </div>

                {/* Text */}
                <p className="text-foreground font-semibold leading-snug text-[15px]">
                  {p.text}
                </p>

                {/* Bottom accent line */}
                <div className="mt-auto pt-4">
                  <div className="h-0.5 rounded-full bg-border/50 overflow-hidden">
                    <div className="h-full w-0 group-hover:w-full bg-gradient-to-r from-primary to-primary/50 transition-all duration-700 ease-out rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemsSection;
