import { Heart, Users, BookOpen, Target, Award, Lightbulb, Sparkles } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="nosotros" className="relative overflow-hidden bg-white">
      {/* BANNER PRINCIPAL - Hero */}
      <div className="relative w-full overflow-hidden">
        <img
          src="https://github.com/am3162913-sudo/imagenes/blob/main/hero%20nosotros.png?raw=true"
          alt="Banner Nosotros"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* QUIÉNES SOMOS - Hero alternado */}
      <div className="relative py-20 bg-gradient-to-br from-[#F9F6F0] via-white to-[#F9F6F0]/50 overflow-hidden">
        {/* Elementos decorativos mejorados */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#FBC02D]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#1565C0]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-[#4E342E]/5 rounded-full blur-3xl"></div>
        
        {/* Patrón de puntos decorativo */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #4E342E 1px, transparent 1px)',
          backgroundSize: '30px 30px'
        }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Badge centrado mejorado */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#4E342E]/20 text-[#4E342E] rounded-full text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Sparkles className="w-4 h-4 text-[#FBC02D]" />
              <span className="font-bold">QUIÉNES SOMOS</span>
            </div>
          </div>

          {/* Título centrado arriba de todo */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] leading-tight">
              Una Historia de Corazón
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#FBC02D] to-[#1565C0] rounded-full mt-4 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Imagen mejorada */}
            <div className="order-1 relative">
              {/* Elemento decorativo detrás de la imagen */}
              <div className="absolute -inset-4 bg-gradient-to-br from-[#FBC02D]/20 to-[#1565C0]/20 rounded-[2.5rem] blur-xl"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl group hover:shadow-[0_20px_60px_rgba(78,52,46,0.3)] transition-all duration-500">
                {/* Borde decorativo */}
                <div className="absolute inset-0 border-4 border-white/50 rounded-3xl z-10"></div>
                
                {/* Overlay sutil con gradiente */}
                <div className="absolute inset-0 bg-gradient-to-tr from-[#4E342E]/10 via-transparent to-[#1565C0]/10 z-10 group-hover:opacity-75 transition-opacity duration-500"></div>
                
                <img
                  src="https://github.com/am3162913-sudo/imagenes/blob/main/director.png?raw=true"
                  alt="Miguel Ángel Monge Arana - Promotor Educativo"
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Elemento decorativo lateral */}
              <div className="hidden lg:block absolute -right-8 top-1/3 w-16 h-32 bg-gradient-to-b from-[#FBC02D] to-[#F9A825] rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Texto mejorado */}
            <div className="order-2">
              <div className="space-y-5 text-lg text-[#4E342E]/80 leading-relaxed">
                <p className="relative pl-6 border-l-4 border-[#FBC02D]/30 hover:border-[#FBC02D] transition-colors duration-300">
                  El Colegio Integral Joseph Haydn nace de una necesidad muy personal de su promotor educativo, <span className="font-semibold text-[#4E342E]">Miguel Ángel Monge Arana</span>, quien buscaba para su hijo una educación integral, cercana y personalizada.
                </p>
                <p className="relative pl-6 border-l-4 border-[#1565C0]/30 hover:border-[#1565C0] transition-colors duration-300">
                  Al no encontrar en la zona un colegio que respondiera a ese enfoque, uno que atendiera no solo lo académico, sino también lo emocional y humano, decidió crear un espacio educativo diferente, donde cada estudiante sea acompañado de manera individual y respetuosa de su propio ritmo de aprendizaje.
                </p>
                <p className="relative pl-6 border-l-4 border-[#4E342E]/30 hover:border-[#4E342E] transition-colors duration-300">
                  El nombre <span className="font-semibold text-[#4E342E]">Joseph Haydn</span> surge como un homenaje al compositor, cuya música marcó profundamente su infancia. El padre de Miguel Ángel, gran admirador de Haydn, solía compartir con él sus composiciones, muchas de ellas creadas especialmente para niños. Esa sensibilidad artística, ligada a la infancia y al aprendizaje, se convirtió en una fuente de inspiración para dar identidad a nuestro colegio.
                </p>
              </div>

              {/* Elemento decorativo de cita */}
              <div className="mt-8 relative bg-gradient-to-r from-[#F9F6F0] to-white rounded-2xl p-6 border-l-4 border-[#FBC02D] shadow-lg">
                <div className="absolute -top-3 -left-3 w-8 h-8 bg-[#FBC02D] rounded-full flex items-center justify-center shadow-md">
                  <BookOpen className="w-4 h-4 text-white" />
                </div>
                <p className="text-[#4E342E] italic text-base">
                  "Una educación que respeta el ritmo de cada niño, con el corazón de una familia"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* NUESTRA HISTORIA - Timeline */}
      <div className="relative py-20 bg-white overflow-hidden">
        {/* Elementos decorativos de fondo */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#FBC02D]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-96 h-96 bg-[#1565C0]/5 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#4E342E]/20 text-[#4E342E] rounded-full text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Target className="w-4 h-4 text-[#FBC02D]" />
              <span className="font-bold">NUESTRA HISTORIA</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mt-8 mb-4">
              Nuestro Camino
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#FBC02D] to-[#1565C0] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#4E342E]/70 max-w-2xl mx-auto">
              Cada paso construido con dedicación, amor y compromiso por la educación
            </p>
          </div>

          {/* Timeline con imágenes y línea conectora */}
          <div className="relative max-w-6xl mx-auto space-y-20">
            {/* Línea vertical central conectora - solo visible en desktop */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-[#FBC02D] via-[#1565C0] to-[#4E342E] transform -translate-x-1/2"></div>

            {/* Hito 1: ORIGEN – VISIÓN */}
            <div className="relative group">
              {/* Círculo en la línea */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-[#FBC02D] rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FBC02D]/30 to-[#1565C0]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://github.com/am3162913-sudo/imagenes/blob/main/inicio.png?raw=true"
                    alt="Una visión educativa"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#FBC02D] text-[#4E342E] px-5 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    ORIGEN – VISIÓN
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="space-y-4 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBC02D]/10 border-2 border-[#FBC02D]/30 rounded-full">
                    <Heart className="w-4 h-4 text-[#FBC02D]" />
                    <span className="text-sm font-bold text-[#4E342E]">Los Inicios</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#4E342E]">
                    Una visión educativa
                  </h3>
                  <p className="text-lg text-[#4E342E]/70 leading-relaxed">
                    El Colegio Integral Joseph Haydn nace de la convicción de brindar una educación integral y personalizada desde la infancia.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FBC02D] to-[#F9A825] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Hito 2: FAMILIA Y APRENDIZAJE */}
            <div className="relative group">
              {/* Círculo en la línea */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-[#1565C0] rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Contenido - orden inverso */}
                <div className="space-y-4 lg:pr-8 order-2 lg:order-1 lg:text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1565C0]/10 border-2 border-[#1565C0]/30 rounded-full lg:float-right">
                    <Users className="w-4 h-4 text-[#1565C0]" />
                    <span className="text-sm font-bold text-[#4E342E]">Conexión Familiar</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#4E342E] clear-both">
                    La familia como parte del aprendizaje
                  </h3>
                  <p className="text-lg text-[#4E342E]/70 leading-relaxed">
                    Creemos que educar es un trabajo compartido. Las familias forman parte activa del proceso educativo de sus hijos.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#1565C0] to-[#1976D2] rounded-full lg:ml-auto"></div>
                </div>
                
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0]/30 to-[#FBC02D]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://github.com/am3162913-sudo/imagenes/blob/main/en%20familia.png?raw=true"
                    alt="La familia como parte del aprendizaje"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-[#1565C0] text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    FAMILIA Y APRENDIZAJE
                  </div>
                </div>
              </div>
            </div>

            {/* Hito 3: EXPERIENCIAS QUE FORMAN */}
            <div className="relative group">
              {/* Círculo en la línea */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-[#4E342E] rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E]/30 to-[#FBC02D]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://github.com/am3162913-sudo/imagenes/blob/main/paseo.png?raw=true"
                    alt="Aprender más allá del aula"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#4E342E] text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    EXPERIENCIAS QUE FORMAN
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="space-y-4 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4E342E]/10 border-2 border-[#4E342E]/30 rounded-full">
                    <Lightbulb className="w-4 h-4 text-[#4E342E]" />
                    <span className="text-sm font-bold text-[#4E342E]">Vivencias</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#4E342E]">
                    Aprender más allá del aula
                  </h3>
                  <p className="text-lg text-[#4E342E]/70 leading-relaxed">
                    Promovemos experiencias que fortalecen la convivencia, la autonomía y el aprendizaje vivencial.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Hito 4: ADAPTACIÓN Y COMPROMISO */}
            <div className="relative group">
              {/* Círculo en la línea */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-[#FBC02D] rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Contenido - orden inverso */}
                <div className="space-y-4 lg:pr-8 order-2 lg:order-1 lg:text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FBC02D]/10 border-2 border-[#FBC02D]/30 rounded-full lg:float-right">
                    <Award className="w-4 h-4 text-[#FBC02D]" />
                    <span className="text-sm font-bold text-[#4E342E]">Resiliencia</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#4E342E] clear-both">
                    Siempre adelante, incluso en los retos
                  </h3>
                  <p className="text-lg text-[#4E342E]/70 leading-relaxed">
                    Durante la pandemia, el colegio se adaptó para seguir acompañando a sus estudiantes sin perder el vínculo humano.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#FBC02D] to-[#F9A825] rounded-full lg:ml-auto"></div>
                </div>
                
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FBC02D]/30 to-[#1565C0]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://github.com/am3162913-sudo/imagenes/blob/main/pandemia.png?raw=true"
                    alt="Siempre adelante, incluso en los retos"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-[#FBC02D] text-[#4E342E] px-5 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    ADAPTACIÓN Y COMPROMISO
                  </div>
                </div>
              </div>
            </div>

            {/* Hito 5: REGRESO Y RESILIENCIA */}
            <div className="relative group">
              {/* Círculo en la línea */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-[#1565C0] rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1565C0]/30 to-[#4E342E]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://github.com/am3162913-sudo/imagenes/blob/main/regreso%20a%20clses.png?raw=true"
                    alt="Volver a encontrarnos"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 left-6 bg-[#1565C0] text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    REGRESO Y RESILIENCIA
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="space-y-4 lg:pl-8">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1565C0]/10 border-2 border-[#1565C0]/30 rounded-full">
                    <Heart className="w-4 h-4 text-[#1565C0]" />
                    <span className="text-sm font-bold text-[#4E342E]">Reencuentro</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#4E342E]">
                    Volver a encontrarnos
                  </h3>
                  <p className="text-lg text-[#4E342E]/70 leading-relaxed">
                    El regreso a clases marcó un momento de reencuentro, cuidado y resiliencia como comunidad educativa.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#1565C0] to-[#42A5F5] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Hito 6: COMUNIDAD QUE COMPARTE */}
            <div className="relative group">
              {/* Círculo en la línea */}
              <div className="hidden lg:block absolute left-1/2 top-1/2 w-8 h-8 bg-[#4E342E] rounded-full border-4 border-white shadow-xl transform -translate-x-1/2 -translate-y-1/2 z-10 group-hover:scale-125 transition-transform duration-300"></div>
              
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                {/* Contenido - orden inverso */}
                <div className="space-y-4 lg:pr-8 order-2 lg:order-1 lg:text-right">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#4E342E]/10 border-2 border-[#4E342E]/30 rounded-full lg:float-right">
                    <Users className="w-4 h-4 text-[#4E342E]" />
                    <span className="text-sm font-bold text-[#4E342E]">Solidaridad</span>
                  </div>
                  <h3 className="text-3xl font-bold text-[#4E342E] clear-both">
                    Crecemos ayudándonos
                  </h3>
                  <p className="text-lg text-[#4E342E]/70 leading-relaxed">
                    Fomentamos la solidaridad, el liderazgo y el respeto entre estudiantes de todas las edades.
                  </p>
                  <div className="w-16 h-1 bg-gradient-to-r from-[#4E342E] to-[#6D4C41] rounded-full lg:ml-auto"></div>
                </div>
                
                {/* Imagen */}
                <div className="relative overflow-hidden rounded-3xl shadow-2xl transform group-hover:scale-[1.02] transition-all duration-500 order-1 lg:order-2">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#4E342E]/30 to-[#FBC02D]/30 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src="https://github.com/am3162913-sudo/imagenes/blob/main/comunidad.png?raw=true"
                    alt="Crecemos ayudándonos"
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute top-6 right-6 bg-[#4E342E] text-white px-5 py-2 rounded-full font-bold text-sm shadow-lg z-20">
                    COMUNIDAD QUE COMPARTE
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cierre emocional sin imagen */}
          <div className="relative mt-24 text-center max-w-4xl mx-auto">
            {/* Elementos decorativos */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#FBC02D] to-transparent"></div>
            
            <div className="relative bg-gradient-to-br from-[#F9F6F0] via-white to-[#F9F6F0] rounded-3xl p-12 md:p-16 shadow-2xl border-2 border-[#4E342E]/5">
              {/* Decoración de esquinas */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-[#FBC02D]/30 rounded-tl-3xl"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-[#1565C0]/30 rounded-br-3xl"></div>
              
              {/* Icono central */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#FBC02D] to-[#F9A825] rounded-full shadow-xl mb-8">
                <Heart className="w-10 h-10 text-white animate-pulse" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-[#4E342E] mb-6 leading-tight">
                Seguimos Construyendo el Futuro, Juntos
              </h3>
              
              <p className="text-xl text-[#4E342E]/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                Cada día trabajamos con dedicación, amor y compromiso para ofrecer a nuestros estudiantes lo mejor. 
                Porque educar no es solo enseñar, es acompañar, inspirar y construir sueños.
              </p>
              
              <div className="flex flex-wrap justify-center gap-4 items-center">
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
                  <Sparkles className="w-5 h-5 text-[#FBC02D]" />
                  <span className="font-bold text-[#4E342E]">Con pasión</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
                  <Heart className="w-5 h-5 text-[#1565C0]" />
                  <span className="font-bold text-[#4E342E]">Con corazón</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-full shadow-lg">
                  <Target className="w-5 h-5 text-[#4E342E]" />
                  <span className="font-bold text-[#4E342E]">Con propósito</span>
                </div>
              </div>
            </div>

            {/* Línea decorativa inferior */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#1565C0] to-transparent"></div>
          </div>
        </div>
      </div>

      {/* NUESTRO EQUIPO - Imagen única */}
      <div className="relative py-20 bg-gradient-to-b from-[#F9F6F0] to-white overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-[#1565C0]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FBC02D]/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white border-2 border-[#4E342E]/20 text-[#4E342E] rounded-full text-sm tracking-wide shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
              <Users className="w-4 h-4 text-[#1565C0]" />
              <span className="font-bold">NUESTRO EQUIPO</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mt-8 mb-4">
              El Corazón de Nuestra Institución
            </h2>
            <div className="w-20 h-1.5 bg-gradient-to-r from-[#FBC02D] to-[#1565C0] rounded-full mx-auto mb-6"></div>
            <p className="text-lg text-[#4E342E]/70 max-w-3xl mx-auto">
              Profesionales apasionados por la educación, comprometidos con el desarrollo integral de cada estudiante.
            </p>
          </div>

          {/* Imagen única del equipo */}
          <div className="max-w-5xl mx-auto">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              {/* Borde decorativo */}
              <div className="absolute inset-0 border-4 border-white/50 rounded-3xl z-10"></div>
              
              <img
                src="https://github.com/am3162913-sudo/imagenes/blob/main/docentes.jpg?raw=true"
                alt="Equipo del colegio"
                className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Contenido debajo de la imagen */}
            <div className="mt-8">
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border-2 border-[#4E342E]/10">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#FBC02D] to-[#F9A825] rounded-xl mb-3 mx-auto">
                      <BookOpen className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-[#4E342E] text-lg">Equipo Docente</h3>
                    <p className="text-sm text-[#4E342E]/70">Maestros con vocación y experiencia</p>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#1565C0] to-[#1976D2] rounded-xl mb-3 mx-auto">
                      <Heart className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-[#4E342E] text-lg">Apoyo Psicopedagógico</h3>
                    <p className="text-sm text-[#4E342E]/70">Acompañamiento integral</p>
                  </div>
                  <div className="space-y-2">
                    <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-[#4E342E] to-[#6D4C41] rounded-xl mb-3 mx-auto">
                      <Award className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-[#4E342E] text-lg">Dirección</h3>
                    <p className="text-sm text-[#4E342E]/70">Liderazgo educativo comprometido</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cierre de la sección con estadísticas o valores */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#FBC02D]/20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#FBC02D] to-[#F9A825] rounded-2xl mb-4">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#4E342E] mb-2">Experiencia</h4>
              <p className="text-[#4E342E]/70">Más de 15 años formando estudiantes con excelencia</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#1565C0]/20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#1565C0] to-[#1976D2] rounded-2xl mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#4E342E] mb-2">Comunidad</h4>
              <p className="text-[#4E342E]/70">Una familia educativa unida por la pasión de enseñar</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-[#4E342E]/20 text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#4E342E] to-[#6D4C41] rounded-2xl mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-[#4E342E] mb-2">Compromiso</h4>
              <p className="text-[#4E342E]/70">Dedicación total al desarrollo de cada estudiante</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}