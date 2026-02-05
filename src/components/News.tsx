import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar, ArrowRight } from 'lucide-react';

export function News() {
  const news = [
    {
      title: 'Ceremonia de Graduación 2025',
      date: '15 de Diciembre, 2025',
      description: 'Celebramos el éxito de nuestros graduados en una emotiva ceremonia que reconoce su esfuerzo y dedicación.',
      image: 'https://images.unsplash.com/photo-1695263747060-cc445217dc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMHBsYXlpbmclMjBoYXBweXxlbnwxfHx8fDE3NjkwMTI1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Eventos',
    },
    {
      title: 'Torneo Intercolegial de Matemáticas',
      date: '10 de Noviembre, 2025',
      description: 'Nuestros estudiantes obtuvieron el primer lugar en el torneo regional de matemáticas.',
      image: 'https://images.unsplash.com/photo-1565665643598-b888bfb550c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc3Jvb20lMjBsZWFybmluZ3xlbnwxfHx8fDE3Njg5NTA2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Logros',
    },
    {
      title: 'Feria de Ciencias 2026',
      date: '5 de Febrero, 2026',
      description: 'Proyecto anual donde los estudiantes presentan investigaciones científicas innovadoras.',
      image: 'https://images.unsplash.com/photo-1602052577122-f73b9710adba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwbGFib3JhdG9yeXxlbnwxfHx8fDE3Njg5NjQ2NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      category: 'Próximamente',
    },
  ];

  return (
    <section id="noticias" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Noticias y Eventos</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Mantente al día con las últimas noticias, eventos y logros de nuestra comunidad educativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4 mr-2" />
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
