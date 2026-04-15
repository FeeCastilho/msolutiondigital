import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Check, Calendar } from "lucide-react";
import CircuitDecoration from "./CircuitDecoration";
import { WHATSAPP_LINK_GOOGLE, WHATSAPP_LINK_SOCIAL } from "@/lib/constants";

/** "Google" rendered with each letter in its official brand color */
const GoogleColoredText = ({ className = "" }: { className?: string }) => (
  <span className={`font-display font-black tracking-tight ${className}`}>
    <span style={{ color: "#4285F4" }}>G</span>
    <span style={{ color: "#EA4335" }}>o</span>
    <span style={{ color: "#FBBC05" }}>o</span>
    <span style={{ color: "#4285F4" }}>g</span>
    <span style={{ color: "#34A853" }}>l</span>
    <span style={{ color: "#EA4335" }}>e</span>
  </span>
);

const seoPoints = [
  "SEO local — apareça para quem busca perto de você",
  "Posicionamento estratégico por região",
  "Sem pagar por clique — resultado orgânico duradouro",
];

const socialPoints = [
  "Criação e gestão de conteúdo para Instagram e Facebook",
  "Estratégias de engajamento para gerar audiência",
  "Campanhas pagas (Meta Ads + Google Ads) para acelerar resultados",
];

const GoogleSocialSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden" ref={ref}>
      <CircuitDecoration className="absolute top-0 left-10 h-[160px] w-8 opacity-15 hidden lg:block" />
      <CircuitDecoration className="absolute bottom-0 right-10 h-[140px] w-8 opacity-10 hidden lg:block rotate-180" />

      {/* Subtle background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full opacity-[0.035] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(var(--brand-navy)) 0%, transparent 70%)" }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className={`text-center mb-14 space-y-3 ${isVisible ? "animate-reveal-down" : "opacity-0"}`}>
          <p className="text-primary text-sm font-semibold tracking-widest uppercase">
            Nossas Soluções
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
            Duas formas de fazer sua empresa{" "}
            <span className="text-primary text-glow-gold">crescer no digital</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trabalhamos com posicionamento orgânico no Google e gestão de redes sociais — cada um
            com o seu plano, cada um com o seu resultado.
          </p>
        </div>

        {/* Two service cards */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

          {/* ── Google Orgânico ── */}
          <div
            className={`group relative bg-card rounded-3xl border border-border overflow-hidden shadow-[0_2px_20px_hsl(220_20%_50%/0.06)] transition-all duration-700 hover:border-blue-400/40 hover:shadow-[0_8px_40px_hsl(217_91%_60%/0.12)] ${
              isVisible ? "animate-reveal-left" : "opacity-0"
            }`}
          >
            {/* Top accent bar — Google colors */}
            <div className="h-1.5 w-full flex">
              <div className="flex-1 bg-[#4285F4]" />
              <div className="flex-1 bg-[#EA4335]" />
              <div className="flex-1 bg-[#FBBC05]" />
              <div className="flex-1 bg-[#4285F4]" />
              <div className="flex-1 bg-[#34A853]" />
              <div className="flex-1 bg-[#EA4335]" />
            </div>

            <div className="p-8 lg:p-10 flex flex-col h-full">
              {/* Plan badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/25 text-blue-600 text-xs font-bold uppercase tracking-wider mb-8 self-start">
                <Calendar className="w-3 h-3" />
                Plano Anual
              </div>

              {/* Google brand word — large colored letters */}
              <div className="mb-2">
                <GoogleColoredText className="text-6xl lg:text-7xl xl:text-8xl" />
              </div>
              <p className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-6">
                Orgânico · SEO Local
              </p>

              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground leading-snug mb-6">
                Sua empresa na <span className="text-[#4285F4]">primeira página</span> —{" "}
                sem pagar por clique
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Sem anúncios. Sem tráfego pago. Apenas estratégia orgânica baseada na sua
                localização. Resultado que cresce com o tempo.
              </p>

              <ul className="space-y-3 flex-1">
                {seoPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-[#34A853]/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-[#34A853]" />
                    </div>
                    <span className="text-sm text-foreground leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK_GOOGLE}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#4285F4] text-white font-display font-bold text-sm transition-all duration-300 hover:bg-[#3367D6] hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_16px_rgba(66,133,244,0.3)]"
              >
                Quero aparecer no Google
              </a>
            </div>
          </div>

          {/* ── Redes Sociais + Tráfego Pago ── */}
          <div
            className={`group relative bg-card rounded-3xl border border-border overflow-hidden shadow-[0_2px_20px_hsl(220_20%_50%/0.06)] transition-all duration-700 hover:border-primary/30 hover:shadow-[0_8px_40px_hsl(45_95%_48%/0.1)] ${
              isVisible ? "animate-reveal-right" : "opacity-0"
            }`}
            style={{ animationDelay: "150ms" }}
          >
            {/* Top accent bar — Instagram gradient */}
            <div
              className="h-1.5 w-full"
              style={{
                background:
                  "linear-gradient(to right, #833AB4, #FD1D1D, #FCB045, #405DE6, #5851DB)",
              }}
            />

            <div className="p-8 lg:p-10 flex flex-col h-full">
              {/* Plan badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8 self-start">
                <Calendar className="w-3 h-3" />
                Plano Mensal
              </div>

              {/* Platform icons */}
              <div className="flex items-center gap-3 mb-6">
                {/* Instagram */}
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shadow-md shrink-0"
                  style={{ background: "linear-gradient(135deg, #833AB4, #FD1D1D, #FCB045)" }}>
                  <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5" fill="white" fillOpacity="0.15" />
                    <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" />
                    <circle cx="12" cy="12" r="4.5" stroke="white" strokeWidth="1.5" />
                    <circle cx="17.2" cy="6.8" r="1.3" fill="white" />
                  </svg>
                </div>
                {/* Meta */}
                <div className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center shadow-md shrink-0">
                  <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </div>
                <div className="ml-1">
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide">Instagram</p>
                  <p className="text-xs font-bold text-foreground uppercase tracking-wide">& Facebook</p>
                </div>
              </div>

              <h3 className="font-display text-xl lg:text-2xl font-bold text-foreground leading-snug mb-6">
                Gestão de <span className="text-primary">redes sociais</span> e tráfego pago
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Complementar ao Google. Construímos presença, engajamos sua audiência e
                criamos campanhas pagas para acelerar os resultados.
              </p>

              <ul className="space-y-3 flex-1">
                {socialPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/15 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground leading-snug">{point}</span>
                  </li>
                ))}
              </ul>

              <a
                href={WHATSAPP_LINK_SOCIAL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_16px_hsl(45_95%_52%/0.3)]"
              >
                Quero crescer nas redes sociais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleSocialSection;
