import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const WhatsAppIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382C17.112 14.382 14.652 13.312 14.192 13.132C13.732 12.952 13.532 13.062 13.362 13.312C13.192 13.562 12.722 14.122 12.532 14.332C12.342 14.542 12.162 14.572 11.662 14.382C10.7495 14.0044 9.87113 13.5385 9.062 13C8.04943 12.3218 7.14925 11.5161 6.382 10.602C6.192 10.382 6.382 10.222 6.632 9.972C6.802 9.792 6.962 9.612 7.142 9.402C7.322 9.192 7.392 9.022 7.512 8.782C7.632 8.542 7.552 8.322 7.482 8.162C7.412 8.002 6.842 6.602 6.602 6.032C6.382 5.482 6.132 5.562 5.952 5.562H5.432C5.232 5.562 4.902 5.642 4.632 5.932C4.362 6.222 3.602 6.942 3.602 8.412C3.602 9.882 4.672 11.302 4.822 11.502C4.972 11.702 6.922 14.702 9.902 15.992C11.962 16.882 12.872 16.822 13.772 16.742C14.772 16.652 16.092 15.952 16.362 15.192C16.632 14.432 16.632 13.782 16.552 13.652C16.472 13.512 16.272 14.472 17.472 14.382Z" />
        <path d="M12.002 0C5.372 0 0.002 5.37 0.002 12C0.002 14.28 0.652 16.39 1.762 18.23L0.422 23.11L5.512 21.84C7.232 22.84 9.142 23.36 11.992 23.36H12.002C18.632 23.36 24.002 17.99 24.002 11.36C24.002 4.73 18.632 0 12.002 0ZM12.002 21.43C9.692 21.43 8.152 20.73 7.152 20.07L6.922 19.93L4.172 20.61L4.892 17.91L4.652 17.53C3.932 16.38 3.512 14.99 3.512 12C3.512 7.32 7.322 3.51 12.002 3.51C16.682 3.51 20.492 7.32 20.492 12C20.492 16.68 16.682 21.43 12.002 21.43Z" />
    </svg>
);

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      setMobileMenuOpen(false);
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Planos', href: '#services' },
    { name: 'Para Empresas', href: '#services' },
    { name: 'Sobre Nós', href: '#about' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform ${
        isScrolled ? 'glass py-2 shadow-sm' : 'bg-white/95 md:bg-transparent py-2 md:py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
           <a 
             href="#home" 
             onClick={(e) => handleScrollTo(e, '#home')} 
             className="block relative"
             aria-label="Ir para o topo"
           >
             <img 
               src="https://lh3.googleusercontent.com/d/1L1TObqXm_SSDzvr-5d3ljRtT0WsqN9r_=w500-rw" 
               alt="Unipam Logo"
               width="300"
               height="120"
               // FIX: h-12 (48px) on mobile prevents overlap. md:h-28 (112px) on desktop.
               className="h-12 md:h-28 w-auto object-contain transition-all"
               // @ts-ignore
               fetchPriority="high"
             />
           </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className="text-slate-600 hover:text-brand-blue font-medium transition-colors text-lg"
            >
              {link.name}
            </a>
          ))}
          <motion.a
            href="https://wa.me/554198919062"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-brand-blue text-white px-6 py-3 rounded-full font-semibold shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center gap-2 transition-all min-w-[48px] min-h-[48px]"
          >
            <WhatsAppIcon className="w-5 h-5 text-white fill-white" />
            Fale no WhatsApp
          </motion.a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-slate-700 p-2 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg active:bg-slate-100"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Abrir menu"
        >
          {mobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-slate-200 overflow-hidden absolute top-full left-0 right-0 shadow-xl"
          >
            <div className="flex flex-col p-6 gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-xl font-medium text-slate-800 py-3 border-b border-slate-100"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="https://wa.me/554198919062"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-blue text-white w-full py-4 rounded-xl font-bold text-lg text-center shadow-md flex justify-center items-center gap-2 mt-2"
              >
                <WhatsAppIcon className="w-6 h-6 text-white" />
                Fale no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};