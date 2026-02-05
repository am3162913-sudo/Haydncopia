import { MapPin, Mail, Clock, Navigation, Send, Sparkles } from 'lucide-react';

export function Contact() {
  const contactInfo = [
    {
      icon: Clock,
      title: 'Horario de Atención',
      content: 'Lunes a Viernes: 8am - 3pm',
    },
    {
      icon: Mail,
      title: 'Correo Electrónico',
      content: 'iepjosephhaydn@yahoo.es',
      action: 'Enviar email',
      actionUrl: 'mailto:iepjosephhaydn@yahoo.es',
    },
  ];

  return (
    <section id="contacto" className="relative py-20 overflow-hidden bg-gradient-to-b from-white via-[#F9F6F0] to-white">
      {/* Elementos decorativos de fondo animados */}
      <div className="absolute inset-0 z-0">
        {/* Círculos decorativos con gradiente */}
        <div className="absolute top-20 -left-32 w-96 h-96 bg-gradient-to-br from-[#1565C0]/10 to-[#FBC02D]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 -right-32 w-96 h-96 bg-gradient-to-br from-[#FBC02D]/10 to-[#1565C0]/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        {/* Formas geométricas flotantes */}
        <div className="absolute top-1/4 right-1/3 w-20 h-20 border-2 border-[#1565C0]/10 rounded-lg rotate-12 animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-16 h-16 border-2 border-[#FBC02D]/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-12 h-12 bg-[#1565C0]/5 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header mejorado */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-white border-2 border-[#FBC02D]/30 text-[#FBC02D] rounded-full text-sm tracking-wide mb-6 shadow-lg">
            <Sparkles className="w-4 h-4" />
            <span className="font-bold">CONTÁCTANOS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#4E342E] mb-5">
            Estamos Aquí Para Ti
          </h2>
          <p className="text-lg md:text-xl text-[#4E342E]/70 max-w-3xl mx-auto leading-relaxed">
            ¿Tienes preguntas o deseas más información? Nos encantaría saber de ti y ayudarte en este importante paso.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          {/* Contact Info Cards - Rediseñado */}
          <div className="space-y-6">
            {/* Visítanos - Dirección y Mapa Unificados con animaciones */}
            <div className="group">
              {/* Dirección y Mapa en un solo bloque mejorado */}
              <div className="relative bg-white border-2 border-[#4E342E]/10 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-1">
                {/* Efecto de brillo */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#1565C0]/20 via-[#FBC02D]/20 to-[#1565C0]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
                
                <div className="relative bg-white rounded-2xl">
                  {/* Dirección con fondo decorativo */}
                  <div className="relative p-6 bg-gradient-to-br from-[#F9F6F0] to-white">
                    {/* Decoración de esquina */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-[#1565C0]/5 rounded-bl-full"></div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-[#1565C0] to-[#1976D2] rounded-xl flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                        <MapPin className="w-7 h-7 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#4E342E] mb-2 text-lg">Visítanos</h4>
                        <p className="text-[#4E342E]/70 leading-relaxed">
                          Jr. Los Jazminez 220 222 Urb. Repartición., Comas, Peru, 07
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Mapa con overlay decorativo */}
                  <div className="relative h-64 bg-gray-200">
                    <iframe
                      src="https://maps.google.com/maps?q=Jr.+Los+Jazmines+220+222+Urb.+Repartici%C3%B3n+Comas+Peru&t=&z=17&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      title="Ubicación del colegio"
                      className="grayscale hover:grayscale-0 transition-all duration-500"
                    ></iframe>
                  </div>
                  
                  {/* Footer del mapa mejorado */}
                  <div className="p-5 bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white">
                    <div className="flex items-center justify-center">
                      <a
                        href="https://maps.app.goo.gl/R7mud5CcQLzTQfeG8"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-3 bg-[#FBC02D] text-[#4E342E] rounded-lg font-bold hover:bg-[#F9A825] transition-all text-sm shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Abrir Mapa
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Horario y Email con animaciones */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="group relative bg-white border-2 border-[#4E342E]/10 rounded-xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Borde animado al hover */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#1565C0]/20 to-[#FBC02D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur"></div>
                    
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#1565C0]/10 to-[#1565C0]/20 rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="w-6 h-6 text-[#1565C0]" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#4E342E] mb-1">{item.title}</h4>
                        <p className="text-[#4E342E]/70 mb-3">
                          {item.content}
                        </p>
                        {item.action && (
                          <a
                            href={item.actionUrl || '#'}
                            target={item.actionUrl?.includes('http') ? '_blank' : undefined}
                            rel={item.actionUrl?.includes('http') ? 'noopener noreferrer' : undefined}
                            className="inline-flex items-center gap-2 text-[#1565C0] hover:text-[#0D47A1] font-semibold text-sm group/link"
                          >
                            {item.action}
                            <Navigation className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form - Rediseñado */}
          <div className="relative group">
            {/* Efecto de fondo */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#1565C0]/20 via-[#FBC02D]/20 to-[#1565C0]/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur"></div>
            
            <form className="relative bg-white rounded-2xl p-8 border-2 border-[#4E342E]/10 shadow-xl hover:shadow-2xl transition-all duration-500">
              {/* Decoración de esquina */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#FBC02D]/10 to-transparent rounded-tr-2xl rounded-bl-full"></div>
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-[#4E342E] mb-2 flex items-center gap-2">
                  <Send className="w-6 h-6 text-[#1565C0]" />
                  Solicita Información
                </h3>
                <p className="text-[#4E342E]/60 mb-6">Completa el formulario y nos pondremos en contacto pronto</p>
              
                <div className="mb-4">
                  <label htmlFor="name" className="block text-[#4E342E] font-semibold mb-2">
                    Nombre Completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#4E342E]/20 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent transition-all"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label htmlFor="email" className="block text-[#4E342E] font-semibold mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#4E342E]/20 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent transition-all"
                      placeholder="tu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-[#4E342E] font-semibold mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full px-4 py-3 rounded-lg border-2 border-[#4E342E]/20 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent transition-all"
                      placeholder="300 123 4567"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label htmlFor="interest" className="block text-[#4E342E] font-semibold mb-2">
                    Nivel de Interés *
                  </label>
                  <select
                    id="interest"
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#4E342E]/20 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent transition-all"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="inicial">Inicial</option>
                    <option value="primaria">Primaria</option>
                    <option value="general">Información General</option>
                  </select>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-[#4E342E] font-semibold mb-2">
                    Mensaje
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border-2 border-[#4E342E]/20 focus:outline-none focus:ring-2 focus:ring-[#1565C0] focus:border-transparent transition-all resize-none"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-gradient-to-r from-[#1565C0] to-[#1976D2] text-white rounded-lg hover:from-[#0D47A1] hover:to-[#1565C0] transition-all duration-300 font-bold text-lg shadow-lg hover:shadow-xl transform hover:scale-[1.02] flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  Enviar Solicitud
                </button>

                {/* Nota de confianza */}
                <p className="mt-4 text-xs text-center text-[#4E342E]/50">
                  🔒 Tu información está segura con nosotros
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}