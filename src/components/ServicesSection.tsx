import { useScrollReveal } from "./useScrollReveal";
import { Target, MapPin, BarChart, Globe, Palette, Store } from "lucide-react";
import CircuitDecoration from "./CircuitDecoration";
import storeConstruction from "@/assets/store-construction.jpg";
import storeFurniture from "@/assets/store-furniture.jpg";

const blocks = [
  {
    title: "Lojas de Material de Construção",
    subtitle: "Atraia quem está construindo ou reformando na sua região",
    image: storeConstruction,
    services: [
      { icon: Target, name: "Google Ads Local", desc: "Apareça no topo quando buscarem na sua cidade" },
      { icon: MapPin, name: "Google Meu Negócio", desc: "Domine o mapa da sua região" },
      { icon: Globe, name: "Landing Page de Conversão", desc: "Página que transforma clique em cliente" },
      { icon: BarChart, name: "Funil de WhatsApp", desc: "Automatize o primeiro contato" },
    ],
  },
  {
    title: "Lojas de Móveis",
    subtitle: "Mostre seus produtos para quem está pronto para mobiliar",
    image: storeFurniture,
    services: [
      { icon: Palette, name: "Produção de Conteúdo", desc: "Fotos e vídeos que vendem" },
      { icon: Target, name: "Tráfego Pago (Meta + Google)", desc: "Anúncios que atraem compradores reais" },
      { icon: Store, name: "Catálogo Digital", desc: "Seu showroom online no WhatsApp" },
      { icon: MapPin, name: "Posicionamento Local", desc: "Seja referência na sua região" },
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="relative py-24 lg:py-36" ref={ref}>
      <CircuitDecoration className="absolute top-0 right-16 h-[200px] w-10 opacity-20 hidden lg:block" />

      <div className="container mx-auto px-6">
        <div className="text-center mb-20 space-y-4">
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Serviços</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Soluções sob medida para <span className="text-primary">seu segmento</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Estratégias específicas para cada tipo de loja — porque vender cimento é diferente de vender sofás.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {blocks.map((block, i) => (
            <div
              key={i}
              className={`relative group bg-card rounded-3xl overflow-hidden border border-border shadow-[0_2px_20px_hsl(220_20%_50%/0.06)] transition-all duration-700 hover:border-primary/30 hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.1)] ${
                isVisible ? "animate-fade-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              {/* Image header */}
              <div className="relative h-56 sm:h-64 overflow-hidden">
                <img
                  src={block.image}
                  alt={block.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(220_25%_12%)] via-[hsl(220_25%_12%/0.5)] to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                  <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight text-white">
                    {block.title}
                  </h3>
                  <p className="text-sm text-white/70 mt-1.5">{block.subtitle}</p>
                </div>
              </div>

              {/* Services list */}
              <div className="px-6 sm:px-8 py-6 space-y-3">
                <p className="text-xs font-semibold text-primary tracking-widest uppercase mb-4">O que fazemos</p>
                {block.services.map((s, j) => (
                  <div
                    key={j}
                    className="flex items-start gap-4 p-3.5 rounded-xl bg-muted/50 border border-transparent transition-all duration-300 hover:bg-primary/[0.06] hover:border-primary/15"
                  >
                    <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                      <s.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground">{s.name}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
