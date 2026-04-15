const WA_BASE = "https://wa.me/5511930093582";

export const WHATSAPP_LINK =
  `${WA_BASE}?text=${encodeURIComponent("Olá! Quero falar com um especialista da M Solution Digital")}`;

export const WHATSAPP_LINK_GOOGLE =
  `${WA_BASE}?text=${encodeURIComponent("Quero melhorar meu posicionamento no Google")}`;

export const WHATSAPP_LINK_SOCIAL =
  `${WA_BASE}?text=${encodeURIComponent("Olá! Quero crescer nas redes sociais")}`;

export const WHATSAPP_NUMBER = "+55 (11) 93009-3582";
export const COMPANY_EMAIL = "msolutiondigital@gmail.com";

export const NAV_ITEMS = [
  { label: "Método", href: "#metodo", id: "metodo" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Resultados", href: "#resultados", id: "resultados" },
  { label: "FAQ", href: "#faq", id: "faq" },
] as const;

export const SECTION_IDS = NAV_ITEMS.map((item) => item.id);
