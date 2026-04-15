import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Users, Megaphone, Palette } from "lucide-react";
import CircuitDecoration from "./CircuitDecoration";
import GoogleIcon from "./GoogleIcon";
import { getRevealClass } from "@/lib/reveal";

const services = [
  {
    id: "google",
    icon: null, // uses GoogleIcon
    accent: "#4285F4",
    accentBg: "bg-blue-500/10",
    accentBorder: "border-blue-400/25",
    title: "Posicionamento no Google",
    subtitle: "Orgânico · SEO Local · Anual",
    desc: "Apareça na primeira página quando seus clientes buscarem o que você vende — sem pagar por clique.",
    points: [
      "SEO local por cidade e região",
      "Google Meu Negócio otimizado",
      "Resultado duradouro e crescente",
    ],
  },
  {
    id: "social",
    icon: Users,
    accent: "#E1306C",
    accentBg: "bg-pink-500/10",
    accentBorder: "border-pink-400/25",
    title: "Gestão de Redes Sociais",
    subtitle: "Instagram · Facebook · Mensal",
    desc: "Presença ativa, conteúdo estratégico e audiência engajada nas redes sociais que seus clientes usam.",
    points: [
      "Planejamento e calendário editorial",
      "Criação de posts e reels",
      "Configuração personalizada da rede social",
    ],
  },
  {
    id: "ads",
    icon: Megaphone,
    accent: "#FBBC05",
    accentBg: "bg-yellow-500/10",
    accentBorder: "border-yellow-400/25",
    title: "Tráfego Pago",
    subtitle: "Meta Ads · Google Ads · Mensal",
    desc: "Campanhas pagas para acelerar resultados e trazer clientes prontos para comprar agora.",
    points: [
      "Campanhas no Meta (Instagram + Facebook)",
      "Google Ads local e de pesquisa",
      "Otimização contínua por performance",
    ],
  },
  {
    id: "content",
    icon: Palette,
    accent: "#34A853",
    accentBg: "bg-emerald-500/10",
    accentBorder: "border-emerald-400/25",
    title: "Produção de Conteúdo",
    subtitle: "Fotos · Vídeos · Textos",
    desc: "Conteúdo profissional que mostra o que você tem e convence o cliente a escolher sua empresa.",
    points: [
      "Fotos e vídeos dos produtos",
      "Textos para posts e anúncios",
      "Identidade visual consistente",
    ],
  },
];

const ServicesSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="servicos" className="relative py-24 lg:py-36" ref={ref}>
      <CircuitDecoration className="absolute top-0 right-16 h-[200px] w-10 opacity-20 hidden lg:block" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 space-y-4 ${isVisible ? "animate-reveal-down" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">Serviços</p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold">
            Uma solução completa para{" "}
            <span className="text-primary text-glow-gold">crescer no digital</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Tudo o que sua empresa precisa para aparecer, engajar e gerar clientes — em um único método.
          </p>
        </div>

        {/* 2×2 service cards */}
        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto mb-10">
          {services.map((s, i) => (
            <div
              key={s.id}
              className={`group relative bg-card rounded-3xl border border-border p-7 lg:p-8 overflow-hidden shadow-[0_2px_20px_hsl(220_20%_50%/0.06)] transition-all duration-500 hover:border-primary/25 hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.1)] ${
                isVisible
                  ? getRevealClass(i, [
                      "animate-reveal-left",
                      "animate-reveal-right",
                      "animate-reveal-left",
                      "animate-reveal-right",
                    ])
                  : "opacity-0"
              }`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Colored top border */}
              <div
                className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl transition-all duration-500"
                style={{ backgroundColor: s.accent }}
              />

              {/* Icon */}
              <div
                className={`w-12 h-12 rounded-2xl ${s.accentBg} border ${s.accentBorder} flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110`}
              >
                {s.id === "google" ? (
                  <GoogleIcon className="w-6 h-6" />
                ) : (
                  s.icon && <s.icon className="w-6 h-6" style={{ color: s.accent }} strokeWidth={1.5} />
                )}
              </div>

              {/* Title + subtitle */}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{s.title}</h3>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                {s.subtitle}
              </p>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{s.desc}</p>

              {/* Points */}
              <ul className="space-y-2">
                {s.points.map((point, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <span
                      className="w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: s.accent }}
                    />
                    {point}
                  </li>
                ))}
              </ul>

              {/* Bottom accent line on hover */}
              <div className="absolute bottom-0 left-4 right-4 h-0.5 rounded-full overflow-hidden">
                <div
                  className="h-full w-0 group-hover:w-full transition-all duration-700 ease-out"
                  style={{ background: `linear-gradient(to right, ${s.accent}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Closing statement — redesigned */}
        <div
          className={`max-w-5xl mx-auto mt-10 ${isVisible ? "animate-fade-up" : "opacity-0"}`}
          style={{ animationDelay: "450ms" }}
        >
          <div className="relative rounded-3xl overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/90 via-brand-navy/80 to-brand-navy/90" />
            {/* Subtle grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg,transparent,transparent 24px,hsl(45 95% 52%) 25px), repeating-linear-gradient(90deg,transparent,transparent 24px,hsl(45 95% 52%) 25px)",
              }}
            />
            {/* Gold glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[120px] rounded-full opacity-20"
              style={{ background: "radial-gradient(ellipse, hsl(45 95% 52%) 0%, transparent 70%)" }}
            />

            <div className="relative z-10 px-8 py-10 text-center space-y-4">
              {/* Colored service dots */}
              <div className="flex items-center justify-center gap-2 mb-2">
                {["#4285F4", "#E1306C", "#FBBC05", "#34A853"].map((color, i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>

              <p className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-white leading-snug">
                Tudo isso com o{" "}
                <span className="text-primary">MÉTODO da M Solution Digital</span>
              </p>
              <p className="text-white/60 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
                Uma solução integrada de ponta a ponta — sem precisar contratar várias agências
                ou gerenciar múltiplos fornecedores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
