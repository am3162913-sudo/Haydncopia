import { MessageCircle } from 'lucide-react';

export function WhatsAppButton() {
  // Número de WhatsApp del colegio en Perú
  const whatsappNumber = '51993573492'; // Formato: código país (51 para Perú) + número sin espacios
  const message = '¡Hola! Me gustaría obtener más información sobre el colegio.';
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-full shadow-2xl transition-all hover:scale-105 group"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="w-6 h-6 animate-pulse" />
      <span className="hidden md:inline font-semibold">Contáctanos</span>
      <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
    </a>
  );
}