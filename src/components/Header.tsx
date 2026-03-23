import { useState, useEffect } from "react";
import { MessageCircle, Menu, X } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import logoVertical from "@/assets/logo-vertical.png";

const WHATSAPP_LINK = "https://wa.me/5511930093582?text=Olá! Quero falar com um especialista da M Solution Digital";

const NAV_ITEMS = [
  { label: "Método", href: "#metodo" },
  { label: "Serviços", href: "#servicos" },
  { label: "Resultados", href: "#resultados" },
  { label: "FAQ", href: "#faq" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-2.5 lg:py-3 bg-background/90 backdrop-blur-2xl border-b border-border shadow-[0_4px_30px_hsl(220_20%_50%/0.08)]"
          : "py-4 lg:py-5 bg-background/60 backdrop-blur-md"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between gap-4">
        {/* Logo — large and proud */}
        <a href="#" className="relative group flex-shrink-0 flex items-center gap-3">
          <img
            src={logoVertical}
            alt="M Solution Digital"
            className={`transition-all duration-500 ${
              scrolled ? "h-14 sm:h-16 lg:h-16" : "h-16 sm:h-20 lg:h-24"
            }`}
          />
          {/* Subtle gold glow on hover */}
          <div className="absolute -inset-4 rounded-2xl bg-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm" />
        </a>

        {/* Desktop nav — centered */}
        <nav className="hidden lg:flex items-center gap-0.5 px-2 py-1.5 rounded-full glass-navy">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative px-5 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-full hover:bg-white/[0.04] group"
            >
              {item.label}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-primary transition-all duration-300 group-hover:w-5" />
            </a>
          ))}
        </nav>

        {/* Right side — CTA + mobile toggle */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-display font-bold text-sm transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] shadow-[0_2px_20px_hsl(45_95%_52%/0.3)] hover:shadow-[0_4px_30px_hsl(45_95%_52%/0.5)]"
          >
            <MessageCircle className="w-4 h-4" />
            FALE CONOSCO
          </a>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl border border-border hover:border-primary/30 text-foreground hover:text-primary transition-all duration-300 active:scale-95"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile fullscreen overlay */}
      <div
        className={`lg:hidden fixed inset-0 top-0 bg-background/98 backdrop-blur-2xl transition-all duration-500 ${
          mobileOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        style={{ zIndex: 60 }}
      >
        <div className="flex flex-col h-full">
          {/* Mobile header with logo + close */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border/50">
            <img src={logoHorizontal} alt="M Solution Digital" className="h-10" />
            <button
              onClick={() => setMobileOpen(false)}
              className="w-10 h-10 flex items-center justify-center rounded-xl border border-border text-foreground hover:text-primary transition-colors"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile nav links */}
          <nav className="flex-1 flex flex-col justify-center px-8 gap-2">
            {NAV_ITEMS.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="group flex items-center gap-4 px-6 py-5 rounded-2xl text-lg font-display font-semibold text-muted-foreground hover:text-foreground hover:bg-brand-navy/10 transition-all duration-300"
                style={{ animationDelay: `${i * 60}ms` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                {item.label}
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="px-8 pb-10">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-center gap-3 w-full px-6 py-4 rounded-2xl bg-primary text-primary-foreground font-display font-bold text-base transition-all duration-300 active:scale-[0.97] shadow-[0_4px_30px_hsl(45_95%_52%/0.35)]"
            >
              <MessageCircle className="w-5 h-5" />
              FALAR COM ESPECIALISTA
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
