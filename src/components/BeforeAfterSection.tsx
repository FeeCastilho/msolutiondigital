import { MoveHorizontal } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import beforeStore from "@/assets/before-store.svg";
import afterStore from "@/assets/after-store.svg";
import beforeWhatsApp from "@/assets/before-whatsapp.svg";
import afterWhatsApp from "@/assets/after-whatsapp.svg";
import BeforeAfterSlider from "./BeforeAfterSlider";
import CircuitDecoration from "./CircuitDecoration";

const sliders = [
  {
    icon: "🏗️",
    title: "Sua Loja",
    subtitle: "Antes sem movimento. Depois com fluxo e clientes.",
    beforeImage: beforeStore,
    afterImage: afterStore,
    beforeAlt: "Loja vazia sem clientes",
    afterAlt: "Loja cheia de clientes e movimento",
    beforeLabel: "Sem a M Solution Digital",
    afterLabel: "Com a M Solution Digital",
    initialPosition: 50,
  },
  {
    icon: "💬",
    title: "Seu WhatsApp",
    subtitle: "Antes parado. Depois cheio de contatos e pedidos.",
    beforeImage: beforeWhatsApp,
    afterImage: afterWhatsApp,
    beforeAlt: "WhatsApp sem mensagens",
    afterAlt: "WhatsApp lotado de mensagens",
    beforeLabel: "Sem a M Solution Digital",
    afterLabel: "Com a M Solution Digital",
    initialPosition: 50,
  },
] as const;

const BeforeAfterSection = () => {
  const { ref, isVisible } = useScrollReveal(0.12);

  return (
    <section id="transformacao" className="relative overflow-hidden py-24 lg:py-32" ref={ref}>
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div
          className="absolute top-1/2 left-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, hsl(var(--brand-gold)) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute top-1/2 right-0 h-[600px] w-[600px] translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.05]"
          style={{
            background: "radial-gradient(circle, hsl(var(--brand-navy)) 0%, transparent 70%)",
          }}
        />
      </div>

      <CircuitDecoration className="absolute top-12 right-10 hidden h-[160px] w-8 opacity-[0.13] lg:block" />
      <CircuitDecoration className="absolute bottom-12 left-10 hidden h-[120px] w-8 rotate-180 opacity-[0.08] lg:block" />

      <div className="container relative z-10 mx-auto px-6">
        <div className={`mb-16 space-y-4 text-center ${isVisible ? "animate-reveal-scale" : "opacity-0"}`}>
          <p className="text-sm font-semibold uppercase tracking-widest text-primary">A Transformacao</p>
          <h2 className="mx-auto max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Veja a diferenca que <span className="text-primary text-glow-gold">fazemos</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Arraste o controle e compare a realidade sem a M Solution Digital com o resultado de uma
            operacao que gera movimento na loja e conversas no WhatsApp.
          </p>
          <div className="flex items-center justify-center gap-2 pt-1">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/5 px-4 py-2 text-sm font-medium text-muted-foreground">
              <MoveHorizontal
                className="h-4 w-4 animate-[bounce_1.8s_ease-in-out_infinite] text-primary"
                style={{ animationDirection: "alternate" }}
              />
              Arraste para comparar
            </div>
          </div>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-14">
          {sliders.map((slider, i) => (
            <div
              key={slider.title}
              className={`space-y-5 ${
                isVisible ? (i === 0 ? "animate-reveal-left" : "animate-reveal-right") : "opacity-0"
              }`}
              style={{ animationDelay: `${180 + i * 140}ms` }}
            >
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="text-3xl" role="img" aria-label={slider.title}>
                  {slider.icon}
                </span>
                <h3 className="font-display text-xl font-bold text-foreground">{slider.title}</h3>
                <p className="text-sm text-muted-foreground">{slider.subtitle}</p>
              </div>

              <BeforeAfterSlider
                beforeImage={slider.beforeImage}
                afterImage={slider.afterImage}
                beforeAlt={slider.beforeAlt}
                afterAlt={slider.afterAlt}
                beforeLabel={slider.beforeLabel}
                afterLabel={slider.afterLabel}
                initialPosition={slider.initialPosition}
              />

              <p className="text-center text-xs italic text-muted-foreground/55">
                &larr; arraste o botao para ver a transformacao &rarr;
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
