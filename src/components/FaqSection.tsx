import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useScrollReveal } from "./useScrollReveal";

const faqs = [
  { q: "Quanto tempo leva para ver resultados?", a: "A maioria dos clientes começa a receber leads qualificados nos primeiros 7 a 14 dias após a ativação das campanhas. Resultados consistentes e escaláveis geralmente aparecem a partir do segundo mês." },
  { q: "Funciona para lojas de material de construção e de móveis?", a: "Sim! Nosso trabalho é 100% focado nesses dois segmentos. Conhecemos o comportamento do consumidor que busca materiais de obra, acabamentos, móveis planejados e decoração — e sabemos como atraí-los via Google e WhatsApp." },
  { q: "Preciso ter experiência com marketing digital?", a: "Não. Cuidamos de toda a estratégia, criação e gestão. Você só precisa atender os clientes que chegam no seu WhatsApp." },
  { q: "E se eu já tentei anunciar e não deu certo?", a: "A maioria dos lojistas que nos procura já tentou por conta própria ou com agências genéricas. Nosso diferencial é a especialização no segmento de construção e móveis, com estratégias testadas e focadas em conversão via WhatsApp." },
  { q: "Qual o investimento necessário?", a: "Apresentamos os valores e planos na consultoria gratuita, pois o investimento varia conforme o segmento, região e objetivos. Chame no WhatsApp para uma proposta personalizada." },
  { q: "Vocês atendem lojas de qualquer cidade?", a: "Sim, atendemos lojas de material de construção e móveis em todo o Brasil. Nossa estratégia digital é adaptada para cada região, focando no público local da sua cidade." },
];

const FaqSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="faq" className="relative py-24 lg:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`max-w-3xl mx-auto ${isVisible ? "animate-fade-up" : "opacity-0"}`}>
          <div className="text-center mb-12 space-y-4">
            <p className="text-primary text-sm font-semibold tracking-widest uppercase">Dúvidas</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold">
              Perguntas <span className="text-primary text-glow-gold">frequentes</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-surface rounded-xl px-6 border-none data-[state=open]:border-glow"
              >
                <AccordionTrigger className="text-left font-medium hover:text-primary hover:no-underline py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
