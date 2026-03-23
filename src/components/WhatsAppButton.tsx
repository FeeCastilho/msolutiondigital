import { MessageCircle } from "lucide-react";

const WHATSAPP_LINK = "https://wa.me/5511930093582?text=Olá! Quero falar com um especialista da M Solution Digital";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-whatsapp-pulse"
      style={{ background: "hsl(142 70% 45%)" }}
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
};

export default WhatsAppButton;
