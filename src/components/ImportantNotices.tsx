import { AlertCircle, X } from 'lucide-react';
import { useState } from 'react';

export function ImportantNotices() {
  const [isVisible, setIsVisible] = useState(true);

  const notices = [
    {
      id: 1,
      text: 'Inscripciones abiertas para el año 2026 - Cupos limitados',
      urgent: true,
    },
  ];

  if (!isVisible) return null;

  return (
    <div className="bg-[#1565C0] text-white py-3 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 flex-1 overflow-hidden">
            <AlertCircle className="w-5 h-5 flex-shrink-0 animate-pulse" />
            <div className="overflow-x-auto flex gap-6 scrollbar-hide">
              {notices.map((notice, index) => (
                <p key={notice.id} className="text-sm whitespace-nowrap">
                  {notice.urgent && (
                    <span className="bg-[#FBC02D] text-[#4E342E] text-xs px-2 py-0.5 rounded mr-2 font-bold">
                      URGENTE
                    </span>
                  )}
                  {notice.text}
                  {index < notices.length - 1 && (
                    <span className="mx-3 text-white/50">•</span>
                  )}
                </p>
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="flex-shrink-0 p-1 hover:bg-[#0D47A1] rounded transition-colors"
            aria-label="Cerrar avisos"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}