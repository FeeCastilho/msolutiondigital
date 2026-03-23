import { MessageCircle } from "lucide-react";
import logoVertical from "@/assets/logo-vertical.png";
import CircuitDecoration from "./CircuitDecoration";
import { useParallax } from "@/hooks/useParallax";

const WHATSAPP_LINK = "https://wa.me/5511930093582?text=Olá! Quero falar com um especialista da M Solution Digital";

const HeroSection = () => {
  const slowY = useParallax(0.04);
  const medY = useParallax(0.08);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-32 lg:pt-32">
      {/* Circuit decorations with parallax */}
      <CircuitDecoration
        className="absolute top-20 left-8 h-[300px] w-10 opacity-40 hidden lg:block"
        style={{ transform: `translateY(${slowY}px)` }}
      />
      <CircuitDecoration
        className="absolute top-32 right-12 h-[250px] w-10 opacity-25 hidden lg:block"
        style={{ transform: `translateY(${-medY}px)` }}
      />
      <CircuitDecoration
        className="absolute bottom-20 left-[20%] h-[200px] w-10 opacity-15 hidden lg:block"
        style={{ transform: `translateY(${slowY * 0.5}px)` }}
      />

      {/* Energy lines SVG */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="energyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(215 55% 30%)" stopOpacity="0" />
              <stop offset="50%" stopColor="hsl(45 95% 52%)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="hsl(45 95% 52%)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M 0 200 Q 200 180 400 300 Q 600 420 800 350 Q 1000 280 1200 500"
            fill="none" stroke="url(#energyGrad)" strokeWidth="1"
            className="animate-circuit-dash" strokeDasharray="1000" />
          <path d="M 0 600 Q 300 550 500 650 Q 700 750 900 600 Q 1100 450 1400 700"
            fill="none" stroke="url(#energyGrad)" strokeWidth="0.5"
            className="animate-circuit-dash" strokeDasharray="1000" style={{ animationDelay: "0.5s" }} />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto px-6 py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Text */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border-glow-navy glass-navy">
              <div className="circuit-dot" style={{ width: 6, height: 6 }} />
              <span className="text-sm text-muted-foreground tracking-wider uppercase">
                Especialistas em Lojas de Construção e Móveis
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[0.95] tracking-tight">
              Transformamos sua{" "}
              <span className="text-primary text-glow-gold">loja</span>{" "}
              em uma máquina de clientes no WhatsApp
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed" style={{ textWrap: "pretty" as any }}>
              Estratégia, tecnologia e posicionamento digital para lojas de{" "}
              <span className="text-foreground font-medium">material de construção</span> e{" "}
              <span className="text-foreground font-medium">móveis</span> que querem vender mais todos os dias.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] animate-glow-pulse"
            >
              <MessageCircle className="w-6 h-6 transition-transform duration-300 group-hover:rotate-12" />
              FALAR COM ESPECIALISTA NO WHATSAPP
            </a>

            <div className="flex items-center gap-4 pt-2">
              <div className="flex -space-x-2">
                {["M.R", "A.S", "C.L", "P.F"].map((initials, i) => (
                  <div key={i} className="w-9 h-9 rounded-full bg-accent border-2 border-background flex items-center justify-center text-xs font-medium text-accent-foreground">
                    {initials}
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                <span className="text-foreground font-semibold">+127 lojas</span> já confiam no nosso trabalho
              </p>
            </div>
          </div>

          {/* Right - Brand visual with logo and parallax */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="relative w-[420px] h-[420px] xl:w-[480px] xl:h-[480px]" style={{ transform: `translateY(${-slowY}px)` }}>
              {/* Orbiting ring 1 — clockwise with 2 dots */}
              <div className="absolute inset-0 rounded-full border border-brand-navy/30 animate-[spin_20s_linear_infinite]">
                <div className="circuit-dot absolute -top-1 left-1/2 -translate-x-1/2" />
                <div className="circuit-dot absolute -bottom-1 left-1/2 -translate-x-1/2" />
              </div>

              {/* Orbiting ring 2 — counter-clockwise with 2 dots */}
              <div className="absolute inset-6 rounded-full border border-brand-gold/15 animate-[spin_15s_linear_infinite_reverse]">
                <div className="circuit-dot absolute top-1/2 -left-1 -translate-y-1/2" />
                <div className="circuit-dot absolute top-1/2 -right-1 -translate-y-1/2" />
              </div>

              {/* Orbiting ring 3 — clockwise slow with 1 dot */}
              <div className="absolute inset-12 rounded-full border border-brand-navy/10 animate-[spin_25s_linear_infinite]">
                <div className="circuit-dot absolute -top-1 left-1/2 -translate-x-1/2" />
              </div>

              {/* Center logo (static) */}
              <div className="absolute inset-16 rounded-full bg-brand-navy/10 flex items-center justify-center border border-brand-navy/20 overflow-hidden">
                <div className="absolute inset-0 rounded-full animate-glow-pulse opacity-20" />
                <img
                  src={logoVertical}
                  alt="M Solution Digital"
                  className="w-3/4 h-auto relative z-10 drop-shadow-[0_0_30px_hsl(45_95%_52%/0.3)]"
                />
              </div>

              <CircuitDecoration className="absolute -top-8 -right-6 h-[120px] w-8 opacity-30 rotate-[30deg]" />
              <CircuitDecoration className="absolute -bottom-8 -left-6 h-[120px] w-8 opacity-20 rotate-[-20deg]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
