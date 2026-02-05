import { Facebook, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    'Enlaces Rápidos': [
      { label: 'Inicio', href: '/#inicio', isExternal: false },
      { label: 'Nosotros', href: '/nosotros', isExternal: false },
      { label: 'Niveles', href: '/#programas', isExternal: false },
      { label: 'Contacto', href: '/#contacto', isExternal: false },
    ],
    'Recursos': [
      { label: 'Admisión 2026', href: '/#contacto', isExternal: false },
      { label: 'Propuesta Educativa', href: '/#propuesta', isExternal: false },
      { label: 'Programas', href: '/#programas', isExternal: false },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/COLEGIO-INTEGRAL-JOSEPH-HAYDN-100063706562672/?locale=es_LA', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/colegiojosephhaydn?igsh=MXdkY3U0bGxzamJ3Ng%3D%3D', label: 'Instagram' },
    { icon: 'TikTok', href: 'https://www.tiktok.com/@colegiojosephhaydn?is_from_webapp=1&sender_device=pc', label: 'TikTok' },
    { icon: Youtube, href: 'https://youtube.com/@colegiointegraljosephhaydn?si=mfkQQLiMwPzYwxf9', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#6D4C41] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://github.com/am3162913-sudo/imagenes/blob/main/footer.png?raw=true"
                alt="Logo Colegio Joseph Haydn"
                className="h-16 w-auto object-contain"
              />
            </div>
            <p className="text-white/80 mb-4">
              Formando líderes del mañana con educación de calidad, valores sólidos y
              compromiso con la excelencia académica.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                if (social.icon === 'TikTok') {
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="w-10 h-10 bg-[#6D4C41]/50 border border-[#FBC02D]/20 rounded-full flex items-center justify-center hover:bg-[#FBC02D] hover:text-[#6D4C41] transition-colors"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                    </a>
                  );
                }
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 bg-[#6D4C41]/50 border border-[#FBC02D]/20 rounded-full flex items-center justify-center hover:bg-[#FBC02D] hover:text-[#6D4C41] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-bold text-lg mb-4 text-[#FBC02D]">{title}</h4>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    {link.href.startsWith('/') && !link.href.includes('#') ? (
                      <Link
                        to={link.href}
                        className="text-white/80 hover:text-[#FBC02D] transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/80 hover:text-[#FBC02D] transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70 text-sm mb-4 md:mb-0">
              &copy; {currentYear} Colegio Integral Joseph Haydn. Todos los derechos reservados.
            </p>
            <p className="text-white/70 text-sm">
              Diseñado con ❤️ para educar el futuro
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}