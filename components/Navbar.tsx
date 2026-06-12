import React, { useState, useEffect } from 'react';

export const scrollToTarget = (id: string) => {
  const element = document.getElementById(id);
  if (!element) return;
  
  const targetPosition = element.getBoundingClientRect().top + window.scrollY;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 1200; // ms
  let start: number | null = null;
  
  const easeInOutCubic = (time: number, start: number, change: number, duration: number) => {
    time /= duration / 2;
    if (time < 1) return change / 2 * time * time * time + start;
    time -= 2;
    return change / 2 * (time * time * time + 2) + start;
  };

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const run = easeInOutCubic(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };
  
  requestAnimationFrame(animation);
};

export const Navbar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past roughly 60% of window height
      if (window.scrollY > window.innerHeight * 0.6) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div 
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-700 transform flex justify-center mt-6 ${
        isVisible ? 'translate-y-0 opacity-100' : '-translate-y-[150%] opacity-0'
      }`}
    >
      <nav className="flex items-center gap-1 sm:gap-2 p-1.5 rounded-full bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <button 
          onClick={() => scrollToTarget('card-unimed')}
          className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          Empresarial
        </button>
        <button 
          onClick={() => scrollToTarget('card-plano-de-saúde-infantil')}
          className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          Infantil
        </button>
        <button 
          onClick={() => scrollToTarget('card-medsênior')}
          className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all"
        >
          MedSênior
        </button>
        <button 
          onClick={() => scrollToTarget('quote')}
          className="px-5 py-2 text-sm font-bold text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-full transition-all shadow-[0_0_15px_rgba(34,211,238,0.3)] hover:shadow-[0_0_20px_rgba(34,211,238,0.5)]"
        >
          Contato
        </button>
      </nav>
    </div>
  );
};
