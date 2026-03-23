import { useScrollReveal } from "./useScrollReveal";
import { AlertTriangle } from "lucide-react";

const ScarcitySection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-16 lg:py-24" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="rounded-2xl p-8 sm:p-12 text-center space-y-4 border border-primary/30 bg-card shadow-[0_0_40px_hsl(45_95%_48%/0.08)]">
            <AlertTriangle className="w-10 h-10 text-primary mx-auto" />
            <h3 className="font-display text-2xl sm:text-3xl font-bold">
              Atendemos <span className="text-primary">poucas lojas</span> por região
            </h3>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Para garantir resultados exclusivos, limitamos o número de clientes por segmento e cidade. 
              Verifique se sua região ainda está disponível.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScarcitySection;
