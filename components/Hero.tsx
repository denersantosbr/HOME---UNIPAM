import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { scrollToTarget } from './Navbar';

export const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ['Empresarial', 'Familiar', 'Individual'];

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length - 1));
        if (text.length === 1) { // change to 1 so the empty string triggers next state quickly
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }, 50);
    } else {
      timeout = setTimeout(() => {
        setText(currentWord.substring(0, text.length + 1));
        if (text.length === currentWord.length) {
          timeout = setTimeout(() => setIsDeleting(true), 2000);
        }
      }, 100);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <section id="home" className="w-full min-h-screen relative flex flex-col justify-center pt-24 pb-20">
      
      {/* Top Navbar */}
      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl p-6 flex justify-between items-center z-50">
        <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent tracking-tight">
          Unipam Saúde
        </div>
        <button 
          onClick={() => scrollToTarget('quote')} 
          className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-white hover:text-slate-900 transition-all shadow-lg active:scale-95"
        >
          Fazer Cotação
        </button>
      </header>
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <ShieldCheck size={16} />
          Corretora Autorizada
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 leading-[1.1] animate-in slide-in-from-bottom-4 duration-1000">
          Plano de Saúde <br className="md:hidden" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-sm whitespace-nowrap min-w-[280px] inline-block text-left">
            {text}
            <span className="animate-pulse text-cyan-300">|</span>
          </span>
        </h1>

        <p className="text-lg md:text-xl text-slate-300 max-w-2xl mb-10 mx-auto animate-in fade-in duration-1000 delay-300 font-medium tracking-wide">
          Unipam. Cuidando da saúde dos Curitibanos a mais de 18 anos
        </p>

        <button 
          onClick={() => scrollToTarget('quotes-start')}
          className="group bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 border border-cyan-300/50 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
        >
          Ver Últimas Cotações
          <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </button>

      </div>
    </section>
  );
};
