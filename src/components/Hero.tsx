import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight, Award, BookOpen } from 'lucide-react';

export function Hero() {
  const highlights = [
    { icon: Award, text: '25 años de excelencia' },
    { icon: BookOpen, text: 'Educación integral' },
  ];

  return (
    <section id="inicio" className="relative pt-20 min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://github.com/am3162913-sudo/imagenes/blob/main/hero.png?raw=true"
          alt="Colegio"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#4E342E]/75 via-[#4E342E]/30 via-50% to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 z-10 relative">
        <div className="max-w-3xl">
          <div className="inline-block mb-4 px-4 py-2 bg-[#FBC02D] text-[#4E342E] rounded-full font-bold text-sm">
            Siempre adelante
          </div>
          <h1 
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
            style={{ textShadow: '2px 2px 8px rgba(78, 52, 46, 0.8), 0 0 20px rgba(78, 52, 46, 0.6)' }}
          >
            Educamos con <span className="text-[#FBC02D]">cercanía</span>,<br />
            formamos con <span className="text-[#FBC02D]">confianza</span>
          </h1>
          <p 
            className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl"
            style={{ textShadow: '2px 2px 10px rgba(78, 52, 46, 0.9), 0 0 25px rgba(78, 52, 46, 0.7)' }}
          >
            25 años formando campeones con educación integral y valores sólidos.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#FBC02D] text-[#4E342E] rounded-lg hover:bg-[#F9A825] transition-all font-bold shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Agendar Visita
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex items-center gap-3 bg-[#6D4C41]/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                  <Icon className="w-8 h-8 text-[#FBC02D]" />
                  <span className="text-white font-semibold">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}