import { MessageCircle } from "lucide-react";
import { WHATSAPP_LINK } from "@/lib/constants";

const WhatsAppButton = () => {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex items-center justify-end"
      aria-label="Falar no WhatsApp"
    >
      {/* Tooltip — slides in from right on hover */}
      <span className="absolute right-full mr-3 whitespace-nowrap text-xs font-semibold font-display bg-[hsl(142_70%_35%)] text-white px-3 py-1.5 rounded-lg pointer-events-none opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 ease-out shadow-lg">
        Falar no WhatsApp
        {/* Arrow pointing right */}
        <span className="absolute top-1/2 -translate-y-1/2 -right-[7px] border-[5px] border-transparent border-l-[hsl(142_70%_35%)]" />
      </span>

      {/* Button circle */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 animate-whatsapp-pulse shadow-[0_4px_24px_hsl(142_70%_45%/0.45)]"
        style={{ background: "hsl(142 70% 45%)" }}
      >
        <MessageCircle className="w-7 h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
