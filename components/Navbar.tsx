import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    { name: 'Cotação', href: '#quote' },
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
               src="https://lh3.googleusercontent.com/d/1D86To9UC0fwGJ-sFCeN50qqoKk3Gc459=w500-rw" 
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};