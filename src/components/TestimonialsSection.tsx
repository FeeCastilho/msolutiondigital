import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Star, Quote } from "lucide-react";
import { getRevealClass } from "@/lib/reveal";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: "Ricardo",
    role: "Dono de loja de materiais de construção",
    text: "Em 15 dias, meu WhatsApp não parava de receber pedidos de orçamento. Triplicamos o faturamento no trimestre.",
    initials: "R",
  },
  {
    name: "Andreza",
    role: "Proprietária de loja de móveis e eletro",
    text: "Antes eu não aparecia no Google. Hoje sou a primeira opção quando pesquisam móveis na minha cidade.",
    initials: "A",
  },
  {
    name: "Rafael",
    role: "Dono de loja de materiais de construção",
    text: "A equipe entende nosso segmento de verdade. Resultado real, sem promessas vazias. Recomendo demais.",
    initials: "R",
  },
];

interface TestimonialCardProps {
  t: (typeof testimonials)[0];
  i: number;
  isVisible: boolean;
  animationClass?: string;
}

const TestimonialCard = ({ t, i, isVisible, animationClass = "animate-reveal-scale" }: TestimonialCardProps) => (
  <div
    className={`relative glass-surface rounded-2xl p-7 space-y-5 transition-all duration-500 hover:border-glow hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.1)] h-full flex flex-col ${
      isVisible ? animationClass : "opacity-0"
    }`}
    style={{ animationDelay: `${i * 130}ms` }}
  >
    <Quote className="w-8 h-8 text-primary/20 absolute top-5 right-5" />

    {/* Stars */}
    <div className="flex gap-1">
      {[...Array(5)].map((_, j) => (
        <Star
          key={j}
          className="w-4 h-4 fill-primary text-primary transition-transform duration-300 hover:scale-125"
        />
      ))}
    </div>

    {/* Quote */}
    <p className="text-sm text-muted-foreground leading-relaxed flex-1">"{t.text}"</p>

    {/* Author */}
    <div className="flex items-center gap-3 pt-3 border-t border-border">
      <div className="w-11 h-11 rounded-full bg-accent flex items-center justify-center text-xs font-bold text-accent-foreground shadow-sm shrink-0">
        {t.initials}
      </div>
      <div>
        <p className="font-semibold text-sm">{t.name}</p>
        <p className="text-xs text-muted-foreground">{t.role}</p>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-reveal-down" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Depoimentos</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            O que nossos clientes{" "}
            <span className="text-primary text-glow-gold">dizem</span>
          </h2>
        </div>

        {/* Mobile: swipeable carousel */}
        <div className="md:hidden">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-3">
              {testimonials.map((t, i) => (
                <CarouselItem key={i} className="pl-3">
                  <TestimonialCard
                    t={t}
                    i={i}
                    isVisible={true}
                    animationClass={getRevealClass(i, [
                      "animate-reveal-scale",
                      "animate-reveal-right",
                      "animate-reveal-left",
                    ])}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center items-center gap-4 mt-8">
              <CarouselPrevious className="relative inset-auto translate-x-0 translate-y-0 static" />
              <CarouselNext className="relative inset-auto translate-x-0 translate-y-0 static" />
            </div>
          </Carousel>
        </div>

        {/* Desktop: 3-column grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <TestimonialCard
              key={i}
              t={t}
              i={i}
              isVisible={isVisible}
              animationClass={getRevealClass(i, [
                "animate-reveal-left",
                "animate-reveal-scale",
                "animate-reveal-right",
              ])}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
