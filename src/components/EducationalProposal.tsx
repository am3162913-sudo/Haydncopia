import { Target, Heart, Users, Sparkles } from 'lucide-react';

export function EducationalProposal() {
  const pillars = [
    {
      icon: Heart,
      title: 'Formación integral',
      subtitle: 'Más que aprendizaje académico',
      description: 'Acompañamos el desarrollo académico, emocional y social de nuestros estudiantes, formando personas seguras, responsables y preparadas para la vida.',
      color: 'blue',
      offset: 'mt-0',
    },
    {
      icon: Users,
      title: 'Educación personalizada',
      subtitle: 'Cada niño importa',
      description: 'Respetamos el ritmo de aprendizaje de cada estudiante, brindando una atención cercana, seguimiento constante y un vínculo directo entre docentes, alumnos y familias.',
      color: 'yellow',
      offset: 'mt-6',
    },
    {
      icon: Target,
      title: 'Sin tareas para la casa',
      subtitle: 'Aprender sin sobrecargar',
      description: 'El aprendizaje se realiza dentro del aula, permitiendo que los niños disfruten su tiempo en familia, el descanso y el juego, sin dejar de aprender.',
      color: 'brown',
      offset: 'mt-3',
    },
  ];

  const colorVariants: Record<string, { gradient: string; icon: string; shadow: string; glow: string; border: string }> = {
    blue: { 
      gradient: 'bg-gradient-to-br from-[#1565C0] to-[#1976D2]', 
      icon: 'text-white',
      shadow: 'shadow-[#1565C0]/20',
      glow: 'bg-[#1565C0]/10',
      border: 'border-t-[#1565C0]'
    },
    brown: { 
      gradient: 'bg-gradient-to-br from-[#4E342E] to-[#6D4C41]', 
      icon: 'text-white',
      shadow: 'shadow-[#4E342E]/20',
      glow: 'bg-[#4E342E]/10',
      border: 'border-t-[#4E342E]'
    },
    yellow: { 
      gradient: 'bg-gradient-to-br from-[#FBC02D] to-[#F9A825]', 
      icon: 'text-[#4E342E]',
      shadow: 'shadow-[#FBC02D]/20',
      glow: 'bg-[#FBC02D]/10',
      border: 'border-t-[#FBC02D]'
    },
  };

  return (
    <section id="propuesta" className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#F9F6F0]/30 to-white">
      {/* Forma orgánica suave en el fondo */}
      <div className="absolute inset-0 z-0">
        {/* Blob orgánico superior derecho */}
        <svg className="absolute -top-20 -right-20 w-[700px] h-[700px] opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#FBC02D" d="M47.3,-58.5C59.9,-49.3,67.6,-33.1,70.8,-16.2C74,0.7,72.7,18.3,64.8,32.5C56.9,46.7,42.4,57.5,26.4,63.8C10.4,70.1,-7.1,71.9,-23.5,67.5C-39.9,63.1,-55.2,52.5,-64.2,37.7C-73.2,22.9,-75.9,3.9,-72.8,-13.6C-69.7,-31.1,-60.8,-47.1,-47.6,-56.1C-34.4,-65.1,-17.2,-67.1,-0.3,-66.7C16.6,-66.3,34.7,-67.7,47.3,-58.5Z" transform="translate(100 100)" />
        </svg>
        
        {/* Blob orgánico inferior izquierdo */}
        <svg className="absolute bottom-10 left-10 w-[600px] h-[600px] opacity-5" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <path fill="#1565C0" d="M39.4,-54.2C51.7,-44.9,62.7,-33.5,68.3,-19.8C73.9,-6.1,74.1,9.9,68.5,24.2C62.9,38.5,51.5,51.1,37.7,58.8C23.9,66.5,7.7,69.3,-8.7,68.2C-25.1,67.1,-41.7,62.1,-53.6,52.4C-65.5,42.7,-72.7,28.3,-74.4,13.1C-76.1,-2.1,-72.3,-18.1,-63.8,-31.2C-55.3,-44.3,-42.1,-54.5,-28.3,-63.2C-14.5,-71.9,0.9,-79.1,15.3,-75.8C29.7,-72.5,27.1,-63.5,39.4,-54.2Z" transform="translate(100 100)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header minimalista */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-[#FBC02D]/30 text-[#FBC02D] rounded-full text-sm tracking-wide mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">NUESTRA PROPUESTA EDUCATIVA</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-5">
            ¿Por qué elegir el Colegio Integral Joseph Haydn?
          </h2>
          <p className="text-lg text-[#4E342E]/70 max-w-3xl mx-auto leading-relaxed">
            En el Colegio Integral Joseph Haydn creemos que educar va más allá de enseñar contenidos. Formamos personas íntegras, seguras y preparadas para los desafíos del futuro, acompañando a cada estudiante con cercanía, compromiso y vocación educativa.
          </p>
        </div>

        {/* Sección de dos columnas: texto + imagen */}
        <div className="relative mb-24">
          {/* Contenedor centrado para la imagen */}
          <div className="max-w-4xl mx-auto">
            {/* Columna de imagen - desplazada para romper rigidez */}
            <div className="relative md:translate-y-8">
              {/* Forma decorativa de fondo - más grande */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FBC02D]/10 via-[#1565C0]/10 to-[#4E342E]/5 rounded-[2.5rem] transform rotate-2 scale-110"></div>
              
              {/* Contenedor de imagen */}
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-[#4E342E]/10 transform -rotate-1">
                <img
                  src="https://images.unsplash.com/photo-1758270704925-fa59d93119c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGNsYXNzcm9vbSUyMHRlYWNoZXIlMjBsZWFybmluZ3xlbnwxfHx8fDE3Njk5NzQxMjR8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Estudiantes aprendiendo en el colegio"
                  className="w-full h-[500px] object-cover"
                />
                
                {/* Badge flotante con datos */}
                <div className="absolute top-5 right-5 bg-white/95 backdrop-blur-md rounded-2xl px-5 py-3.5 shadow-xl">
                  <p className="font-bold text-[#1565C0] text-base">+15 años</p>
                  <p className="text-xs text-[#4E342E]/60">Educando con excelencia</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cards de pilares - al mismo nivel */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const colors = colorVariants[pillar.color];
            return (
              <div
                key={index}
                className="group relative"
              >
                {/* Card principal */}
                <div className={`relative bg-white rounded-[1.75rem] p-8 h-full shadow-lg shadow-[#4E342E]/5 hover:shadow-2xl hover:shadow-[#4E342E]/10 transition-all duration-500 hover:-translate-y-1 border-t-4 ${colors.border}`}>
                  {/* Ícono circular con gradiente */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${colors.gradient} rounded-full mb-6 shadow-lg ${colors.shadow} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`w-8 h-8 ${colors.icon}`} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-[#4E342E] mb-2">
                    {pillar.title}
                  </h3>
                  
                  <p className="text-base font-semibold text-[#1565C0] mb-4">
                    {pillar.subtitle}
                  </p>
                  
                  <p className="text-[#4E342E]/70 leading-relaxed">
                    {pillar.description}
                  </p>
                  
                  {/* Efecto de brillo al hover */}
                  <div className={`absolute -bottom-2 -right-2 w-24 h-24 ${colors.glow} rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Banner de compromiso */}
        <div className="relative mt-24 rounded-[2rem] overflow-hidden shadow-2xl">
          {/* Fondo con gradiente suave */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0] via-[#1976D2] to-[#1E88E5]"></div>
          
          {/* Elementos decorativos */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-[#FBC02D]/20 rounded-full blur-3xl"></div>
          
          <div className="relative z-10 px-8 py-16 md:p-16 text-center text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-5">
              Nuestro Compromiso
            </h3>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
              Trabajar de la mano con las familias para ofrecer una educación integral y personalizada, 
              fortaleciendo no solo el aprendizaje académico, sino también la formación humana y 
              emocional de cada estudiante.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#programas"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#FBC02D] text-[#4E342E] rounded-full hover:bg-[#F9A825] transition-all duration-300 font-bold shadow-lg hover:shadow-xl hover:scale-105"
              >
                Ver Programas Académicos
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all duration-300 font-bold border-2 border-white/50 hover:scale-105"
              >
                Agendar Reunión Informativa
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}