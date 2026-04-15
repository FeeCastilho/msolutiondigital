import { WHATSAPP_LINK } from "@/lib/constants";

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
    className={className}
  >
    <path d="M20.52 3.48A11.9 11.9 0 0 0 12.04 0C5.45 0 .08 5.36.08 11.95c0 2.1.55 4.16 1.59 5.98L0 24l6.24-1.63a11.9 11.9 0 0 0 5.8 1.48h.01c6.59 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.18-3.48-8.42ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.02-1.37l-.36-.22-3.7.97.99-3.6-.24-.37a9.86 9.86 0 0 1-1.52-5.27c0-5.44 4.42-9.86 9.87-9.86 2.63 0 5.1 1.02 6.96 2.89a9.8 9.8 0 0 1 2.9 6.97c0 5.44-4.43 9.86-9.87 9.86Zm5.41-7.39c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.28-.47-2.43-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.47 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.48.71.3 1.26.48 1.7.62.71.22 1.36.19 1.88.11.57-.08 1.77-.72 2.02-1.42.25-.69.25-1.29.17-1.42-.08-.13-.27-.2-.57-.35Z" />
  </svg>
);

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
        <WhatsAppIcon className="w-7 h-7 text-white transition-transform duration-300 group-hover:rotate-12" />
      </div>
    </a>
  );
};

export default WhatsAppButton;
