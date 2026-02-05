import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { label: 'Inicio', href: '/', isHash: false },
    { label: 'Propuesta Educativa', href: '#propuesta', isHash: true },
    { label: 'Niveles', href: '#programas', isHash: true },
    { label: 'Nosotros', href: '/nosotros', isHash: false },
  ];

  return (
    <>
      <header className="sticky top-0 bg-white shadow-md z-40">
        <nav className="container mx-auto px-6 py-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link to="/">
                <img 
                  src="https://github.com/am3162913-sudo/imagenes/blob/main/logo.png?raw=true"
                  alt="Logo Colegio Excelencia"
                  className="h-16 w-auto object-contain cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-8">
              <ul className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    {item.isHash && location.pathname === '/' ? (
                      <a
                        href={item.href}
                        className="text-[#4E342E] hover:text-[#1565C0] transition-colors font-medium text-base"
                      >
                        {item.label}
                      </a>
                    ) : item.isHash && location.pathname !== '/' ? (
                      <Link
                        to={`/${item.href}`}
                        className="text-[#4E342E] hover:text-[#1565C0] transition-colors font-medium text-base"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        to={item.href}
                        className="text-[#4E342E] hover:text-[#1565C0] transition-colors font-medium text-base"
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Botón destacado Admisión 2026 */}
              {location.pathname === '/' ? (
                <a
                  href="#contacto"
                  className="px-6 py-3 bg-[#FBC02D] hover:bg-[#F9A825] text-[#4E342E] rounded-lg transition-all font-bold text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Admisión 2026
                </a>
              ) : (
                <Link
                  to="/#contacto"
                  className="px-6 py-3 bg-[#FBC02D] hover:bg-[#F9A825] text-[#4E342E] rounded-lg transition-all font-bold text-base shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
                >
                  Admisión 2026
                </Link>
              )}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 hover:bg-[#F9F6F0] rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-[#4E342E]" />
              ) : (
                <Menu className="w-7 h-7 text-[#4E342E]" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-6 space-y-3 pb-6 border-t pt-6">
              <ul className="space-y-3">
                {menuItems.map((item) => (
                  <li key={item.href}>
                    {item.isHash && location.pathname === '/' ? (
                      <a
                        href={item.href}
                        className="block py-3 px-4 text-[#4E342E] hover:bg-[#F9F6F0] hover:text-[#1565C0] transition-colors rounded-lg font-medium text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ) : item.isHash && location.pathname !== '/' ? (
                      <Link
                        to={`/${item.href}`}
                        className="block py-3 px-4 text-[#4E342E] hover:bg-[#F9F6F0] hover:text-[#1565C0] transition-colors rounded-lg font-medium text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <Link
                        to={item.href}
                        className="block py-3 px-4 text-[#4E342E] hover:bg-[#F9F6F0] hover:text-[#1565C0] transition-colors rounded-lg font-medium text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
              
              {/* Botón Admisión en móvil */}
              {location.pathname === '/' ? (
                <a
                  href="#contacto"
                  className="block text-center py-3 px-4 bg-[#FBC02D] hover:bg-[#F9A825] text-[#4E342E] rounded-lg transition-all font-bold text-base shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admisión 2026
                </a>
              ) : (
                <Link
                  to="/#contacto"
                  className="block text-center py-3 px-4 bg-[#FBC02D] hover:bg-[#F9A825] text-[#4E342E] rounded-lg transition-all font-bold text-base shadow-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Admisión 2026
                </Link>
              )}
            </div>
          )}
        </nav>
      </header>
    </>
  );
}