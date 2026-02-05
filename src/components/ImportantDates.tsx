import { Calendar, Clock, MapPin, Users } from 'lucide-react';

export function ImportantDates() {
  const events = [
    {
      date: '24',
      month: 'ENE',
      year: '2026',
      title: 'Reunión General de Padres',
      time: '6:00 PM - 8:00 PM',
      location: 'Auditorio Principal',
      type: 'Reunión',
      color: 'blue',
      urgent: true,
    },
    {
      date: '05',
      month: 'FEB',
      year: '2026',
      title: 'Inicio de Clases Primer Semestre',
      time: '7:00 AM',
      location: 'Todas las instalaciones',
      type: 'Académico',
      color: 'green',
      urgent: false,
    },
    {
      date: '14',
      month: 'FEB',
      year: '2026',
      title: 'Día del Amor y la Amistad - Actividad Especial',
      time: '9:00 AM - 3:00 PM',
      location: 'Patio Central',
      type: 'Evento',
      color: 'red',
      urgent: false,
    },
    {
      date: '28',
      month: 'FEB',
      year: '2026',
      title: 'Cierre de Inscripciones 2026',
      time: 'Todo el día',
      location: 'Oficina de Admisiones',
      type: 'Administrativo',
      color: 'yellow',
      urgent: true,
    },
    {
      date: '15',
      month: 'MAR',
      year: '2026',
      title: 'Feria de Ciencias 2026',
      time: '8:00 AM - 4:00 PM',
      location: 'Laboratorios y Salones',
      type: 'Evento',
      color: 'purple',
      urgent: false,
    },
    {
      date: '20',
      month: 'MAR',
      year: '2026',
      title: 'Entrega de Reportes Primer Período',
      time: '2:00 PM - 6:00 PM',
      location: 'Salones de Clase',
      type: 'Académico',
      color: 'blue',
      urgent: false,
    },
  ];

  const colorVariants: Record<string, { bg: string; text: string; badge: string }> = {
    blue: { bg: 'bg-[#1565C0]', text: 'text-[#1565C0]', badge: 'bg-[#1565C0]/10' },
    green: { bg: 'bg-green-500', text: 'text-green-600', badge: 'bg-green-100' },
    red: { bg: 'bg-red-500', text: 'text-red-600', badge: 'bg-red-100' },
    yellow: { bg: 'bg-[#FBC02D]', text: 'text-[#FBC02D]', badge: 'bg-[#FBC02D]/10' },
    purple: { bg: 'bg-purple-500', text: 'text-purple-600', badge: 'bg-purple-100' },
  };

  return (
    <section id="calendario" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-[#1565C0]/10 text-[#1565C0] rounded-full font-bold text-sm mb-4">
            CALENDARIO
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-4">
            Fechas Importantes
          </h2>
          <p className="text-xl text-[#4E342E]/70 max-w-3xl mx-auto">
            Mantente informado sobre los eventos y fechas clave del año escolar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {events.map((event, index) => {
            const colors = colorVariants[event.color];
            return (
              <div
                key={index}
                className="group bg-white border-2 border-[#4E342E]/10 rounded-xl overflow-hidden hover:shadow-xl transition-all hover:border-[#1565C0]"
              >
                <div className="flex">
                  <div className={`${colors.bg} text-white p-6 flex flex-col items-center justify-center min-w-[100px]`}>
                    <span className="text-4xl font-bold">{event.date}</span>
                    <span className="text-sm font-semibold">{event.month}</span>
                    <span className="text-xs opacity-90">{event.year}</span>
                  </div>
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <span className={`${colors.badge} ${colors.text} px-3 py-1 rounded-full text-xs font-bold`}>
                        {event.type}
                      </span>
                      {event.urgent && (
                        <span className="bg-[#FBC02D] text-[#4E342E] px-2 py-1 rounded text-xs font-bold animate-pulse">
                          PRÓXIMO
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg font-bold text-[#4E342E] mb-3 group-hover:text-[#1565C0] transition-colors">
                      {event.title}
                    </h3>
                    <div className="space-y-2 text-sm text-[#4E342E]/70">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[#1565C0] text-white rounded-lg hover:bg-[#0D47A1] transition-colors font-bold"
          >
            <Calendar className="w-5 h-5" />
            Ver Calendario Completo
          </a>
        </div>
      </div>
    </section>
  );
}