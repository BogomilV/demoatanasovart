import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Начало', href: '#' },
    { name: 'За нас', href: '#about' },
    { name: 'Услуги', href: '#services' },
    { name: 'Галерия', href: '#gallery' },
    { name: 'Контакти', href: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-charcoal/95 backdrop-blur-sm border-b border-white/5 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
             {/* Logo image with invert filter to make black ink white on dark background. 
                 Added drop-shadow for depth. */}
            <img 
              src="/logo.png" 
              alt="Atanasov Art Logo" 
              className="h-12 md:h-14 w-auto object-contain filter invert opacity-90 group-hover:opacity-100 transition-all duration-300 drop-shadow-[0_0_2px_rgba(255,255,255,0.3)]" 
            />
            <span className="font-display font-bold text-xl md:text-2xl text-white tracking-wider group-hover:text-red-500 transition-colors">
              ATANASOV<span className="text-red-500 group-hover:text-white transition-colors">ART</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest cursor-pointer relative group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-red-600 transition-all"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Отвори меню</span>
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
        id="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-charcoal border-t border-gray-800 shadow-xl">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-gray-300 hover:text-red-500 hover:bg-gray-800 block px-3 py-2 rounded-md text-base font-medium text-center uppercase tracking-wider cursor-pointer border-l-4 border-transparent hover:border-red-500 transition-all"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;