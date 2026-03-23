import logoVertical from "@/assets/logo-vertical.png";

const Footer = () => (
  <footer className="py-12 border-t border-border">
    <div className="container mx-auto px-6 flex flex-col items-center gap-4">
      <img src={logoVertical} alt="M Solution Digital" className="h-20 w-auto opacity-80" />
      <p className="text-sm text-muted-foreground text-center">
        © {new Date().getFullYear()} M Solution Digital. Todos os direitos reservados.
      </p>
    </div>
  </footer>
);

export default Footer;
