import { Instagram, Facebook, Linkedin, MessageCircle, Mail, MapPin } from "lucide-react";
import logoVertical from "@/assets/logo-vertical.png";
import { WHATSAPP_LINK, WHATSAPP_NUMBER, COMPANY_EMAIL, NAV_ITEMS } from "@/lib/constants";
import CircuitDecoration from "./CircuitDecoration";

const SOCIAL_LINKS = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
] as const;

const SERVICE_LINKS = [
  { label: "Google Ads Local", href: "#servicos" },
  { label: "Google Meu Negócio", href: "#servicos" },
  { label: "Tráfego Pago (Meta + Google)", href: "#servicos" },
  { label: "Produção de Conteúdo", href: "#servicos" },
  { label: "Funil de WhatsApp", href: "#servicos" },
];

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a
    href={href}
    className="group flex items-center gap-2 text-sm text-accent-foreground/55 hover:text-primary transition-all duration-300"
  >
    <span className="w-1 h-1 rounded-full bg-primary/30 group-hover:bg-primary group-hover:scale-125 transition-all duration-300 shrink-0" />
    {children}
  </a>
);

const Footer = () => (
  <footer className="relative bg-accent overflow-hidden">
    {/* Top shimmer line */}
    <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

    {/* Decorative circuit elements */}
    <CircuitDecoration className="absolute top-8 right-16 h-[140px] w-8 opacity-[0.07] hidden lg:block" />
    <CircuitDecoration className="absolute bottom-8 left-16 h-[100px] w-8 opacity-[0.05] hidden lg:block rotate-180" />

    <div className="container mx-auto px-6 py-16">
      {/* Main grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-accent-foreground/10">

        {/* Brand column */}
        <div className="sm:col-span-2 lg:col-span-1 space-y-5">
          <img
            src={logoVertical}
            alt="M Solution Digital"
            className="h-20 w-auto opacity-90"
            loading="lazy"
          />
          <p className="text-accent-foreground/60 text-sm leading-relaxed max-w-[260px]">
            Especialistas em marketing digital para lojas de material de construção e móveis.
            Resultados reais. WhatsApp cheio de clientes.
          </p>

          {/* Social links */}
          <div className="flex gap-3">
            {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-9 h-9 rounded-xl border border-accent-foreground/15 flex items-center justify-center text-accent-foreground/50 hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-all duration-300 hover:scale-110 active:scale-95"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-accent-foreground text-xs tracking-widest uppercase">
            Navegação
          </h3>
          <ul className="space-y-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <FooterLink href={item.href}>{item.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-accent-foreground text-xs tracking-widest uppercase">
            Serviços
          </h3>
          <ul className="space-y-2.5">
            {SERVICE_LINKS.map((s) => (
              <li key={s.label}>
                <FooterLink href={s.href}>{s.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-4">
          <h3 className="font-display font-bold text-accent-foreground text-xs tracking-widest uppercase">
            Contato
          </h3>
          <div className="space-y-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-sm text-accent-foreground/55 hover:text-primary transition-all duration-300 group"
            >
              <MessageCircle className="w-4 h-4 shrink-0 text-primary/50 group-hover:text-primary transition-colors" />
              {WHATSAPP_NUMBER}
            </a>
            <a
              href={`mailto:${COMPANY_EMAIL}`}
              className="flex items-center gap-3 text-sm text-accent-foreground/55 hover:text-primary transition-all duration-300 group"
            >
              <Mail className="w-4 h-4 shrink-0 text-primary/50 group-hover:text-primary transition-colors" />
              {COMPANY_EMAIL}
            </a>
            <div className="flex items-start gap-3 text-sm text-accent-foreground/50">
              <MapPin className="w-4 h-4 shrink-0 text-primary/40 mt-0.5" />
              <span>São Paulo, SP — Brasil</span>
            </div>
          </div>

          {/* Mini CTA */}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] shadow-[0_2px_16px_hsl(45_95%_52%/0.3)] hover:shadow-[0_4px_24px_hsl(45_95%_52%/0.45)]"
          >
            <MessageCircle className="w-4 h-4" />
            Falar Conosco
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-accent-foreground/35">
          © {new Date().getFullYear()} M Solution Digital. Todos os direitos reservados.
        </p>
        <p className="flex items-center gap-1 text-xs text-accent-foreground/25">
          <span>Feito com</span>
          <span className="text-primary/60">♥</span>
          <span>em São Paulo, Brasil</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
