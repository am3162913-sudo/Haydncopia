import { Baby, BookOpen, Sparkles, Star } from 'lucide-react';

export function Programs() {
  const programs = [
    {
      icon: Baby,
      title: 'INICIAL',
      subtitle: 'Los primeros pasos hacia el futuro',
      inspirationalPhrase: 'Donde cada descubrimiento es una aventura',
      description: 'Desarrollo temprano integral con enfoque en habilidades motoras, cognitivas y socioemocionales.',
      mainBenefits: ['Cálculo mental', 'Psicomotricidad', 'Lecto escritura', 'Inglés básico'],
      additionalBenefits: ['Acompañamiento psicológico', 'Reforzamiento', 'Círculo de estudios', 'Buen trato y cuidado personal', 'Servicio personalizado'],
      color: 'yellow',
      offset: '',
    },
    {
      icon: BookOpen,
      title: 'PRIMARIA',
      subtitle: 'Construyendo bases sólidas',
      inspirationalPhrase: 'Creciendo con confianza y conocimiento',
      description: 'Formación académica sólida con infraestructura moderna y atención personalizada.',
      mainBenefits: ['Docentes especializados', 'Robótica Lego', 'Música y Danza'],
      additionalBenefits: ['Moderna infraestructura', 'Reforzamiento escolar', 'Simulacros bimestrales', 'Monitoreo psicológico', 'Asesoría escolar'],
      color: 'blue',
      offset: '',
    },
  ];

  const colorVariants: Record<string, { bg: string; gradient: string; icon: string; accent: string; tag: string; border: string }> = {
    yellow: { 
      bg: 'bg-white',
      gradient: 'bg-gradient-to-br from-[#FBC02D] to-[#F9A825]', 
      icon: 'text-[#4E342E]',
      accent: 'bg-[#FBC02D]',
      tag: 'bg-[#FBC02D]/15 text-[#F57F17] border-[#FBC02D]/30',
      border: 'border-t-[#FBC02D]'
    },
    blue: { 
      bg: 'bg-white',
      gradient: 'bg-gradient-to-br from-[#1565C0] to-[#1976D2]', 
      icon: 'text-white',
      accent: 'bg-[#1565C0]',
      tag: 'bg-[#1565C0]/15 text-[#1565C0] border-[#1565C0]/30',
      border: 'border-t-[#1565C0]'
    },
  };

  return (
    <section id="programas" className="relative py-20 overflow-hidden bg-gradient-to-b from-[#F9F6F0] via-white to-[#F9F6F0]/50">
      {/* Elementos decorativos de fondo */}
      <div className="absolute inset-0 z-0">
        {/* Blob amarillo superior izquierdo */}
        <svg className="absolute top-10 -left-20 w-[500px] h-[500px] opacity-[0.04]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FBC02D" d="M47.3,-58.5C59.9,-49.3,67.6,-33.1,70.8,-16.2C74,0.7,72.7,18.3,64.8,32.5C56.9,46.7,42.4,57.5,26.4,63.8C10.4,70.1,-7.1,71.9,-23.5,67.5C-39.9,63.1,-55.2,52.5,-64.2,37.7C-73.2,22.9,-75.9,3.9,-72.8,-13.6C-69.7,-31.1,-60.8,-47.1,-47.6,-56.1C-34.4,-65.1,-17.2,-67.1,-0.3,-66.7C16.6,-66.3,34.7,-67.7,47.3,-58.5Z" transform="translate(100 100)" />
        </svg>
        
        {/* Blob azul inferior derecho */}
        <svg className="absolute bottom-20 -right-20 w-[550px] h-[550px] opacity-[0.04]" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1565C0" d="M39.4,-54.2C51.7,-44.9,62.7,-33.5,68.3,-19.8C73.9,-6.1,74.1,9.9,68.5,24.2C62.9,38.5,51.5,51.1,37.7,58.8C23.9,66.5,7.7,69.3,-8.7,68.2C-25.1,67.1,-41.7,62.1,-53.6,52.4C-65.5,42.7,-72.7,28.3,-74.4,13.1C-76.1,-2.1,-72.3,-18.1,-63.8,-31.2C-55.3,-44.3,-42.1,-54.5,-28.3,-63.2C-14.5,-71.9,0.9,-79.1,15.3,-75.8C29.7,-72.5,27.1,-63.5,39.4,-54.2Z" transform="translate(100 100)" />
        </svg>

        {/* Formas geométricas sutiles */}
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-[#4E342E]/[0.02] rounded-full"></div>
        <div className="absolute bottom-1/3 left-1/4 w-40 h-40 bg-[#FBC02D]/[0.03] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header con badge y título */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-[#1565C0]/30 text-[#1565C0] rounded-full text-sm tracking-wide mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">NUESTROS PROGRAMAS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-5">
            Programas Académicos
          </h2>
          <p className="text-lg md:text-xl text-[#4E342E]/70 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos programas educativos integrales diseñados especialmente para cada etapa del desarrollo de nuestros estudiantes.
          </p>
        </div>

        {/* Tarjetas de programas con desplazamiento */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto items-stretch">
          {programs.map((program, index) => {
            const Icon = program.icon;
            const colors = colorVariants[program.color];
            return (
              <div
                key={index}
                className={`group relative ${program.offset} h-full`}
              >
                {/* Card principal */}
                <div className={`relative ${colors.bg} rounded-[1.75rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border-t-4 ${colors.border} h-full flex flex-col`}>
                  {/* Header del card con gradiente */}
                  <div className={`${colors.gradient} px-8 pt-8 pb-6 relative overflow-hidden`}>
                    {/* Patrón decorativo sutil */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                    
                    <div className="relative z-10">
                      {/* Ícono */}
                      <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className={`w-8 h-8 ${program.color === 'yellow' ? 'text-[#4E342E]' : 'text-white'}`} />
                      </div>
                      
                      {/* Título y subtítulo */}
                      <h3 className={`text-3xl md:text-4xl font-bold mb-2 ${program.color === 'yellow' ? 'text-[#4E342E]' : 'text-white'}`}>
                        {program.title}
                      </h3>
                      <p className={`text-base md:text-lg ${program.color === 'yellow' ? 'text-[#4E342E]/80' : 'text-white/90'}`}>
                        {program.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Contenido del card */}
                  <div className="p-8 flex-1 flex flex-col">
                    {/* Frase inspiradora con ícono */}
                    <div className="flex items-start gap-3 mb-6 p-4 bg-gradient-to-r from-[#F9F6F0] to-transparent rounded-xl border-l-3 border-[#FBC02D]">
                      <Star className="w-5 h-5 text-[#FBC02D] flex-shrink-0 mt-0.5" />
                      <p className="text-[#4E342E] italic font-medium">
                        "{program.inspirationalPhrase}"
                      </p>
                    </div>

                    {/* Descripción */}
                    <p className="text-[#4E342E]/70 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    {/* Beneficios principales con etiquetas visuales */}
                    <div className="mb-6">
                      <h4 className="text-sm font-bold text-[#4E342E] mb-3 uppercase tracking-wide">
                        Beneficios Destacados
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {program.mainBenefits.map((benefit, idx) => (
                          <span
                            key={idx}
                            className={`px-4 py-2 ${colors.tag} rounded-full text-sm font-semibold border transition-transform duration-300 hover:scale-105`}
                          >
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Beneficios adicionales en lista compacta */}
                    <div className="mt-auto">
                      <h4 className="text-sm font-bold text-[#4E342E] mb-3 uppercase tracking-wide">
                        Incluye también
                      </h4>
                      <div className="grid grid-cols-2 gap-2">
                        {program.additionalBenefits.map((benefit, idx) => (
                          <div key={idx} className="flex items-start gap-2">
                            <div className={`w-1.5 h-1.5 ${colors.accent} rounded-full mt-2 flex-shrink-0`}></div>
                            <span className="text-sm text-[#4E342E]/80">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Efecto de brillo al hover */}
                  <div className={`absolute -bottom-2 -right-2 w-32 h-32 ${colors.accent}/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action final */}
        <div className="text-center mt-16">
          <p className="text-[#4E342E]/70 mb-6 text-lg">
            ¿Deseas conocer más sobre nuestros programas?
          </p>
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white rounded-full hover:shadow-xl transition-all duration-300 font-bold shadow-lg hover:scale-105"
          >
            Agendar una Visita
          </a>
        </div>
      </div>
    </section>
  );
}