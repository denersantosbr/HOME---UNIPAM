import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { scrollToTarget } from './Navbar';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="w-full min-h-screen relative flex flex-col justify-center overflow-hidden bg-[#030712] pt-24 pb-20">
      
      {/* Top Navbar */}
      <header className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl p-6 flex justify-between items-center z-50">
        <div className="text-xl md:text-2xl font-bold text-white tracking-tight">
          Unipam Saúde
        </div>
        <button 
          onClick={() => scrollToTarget('quote')} 
          className="bg-white text-slate-900 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-cyan-50 transition-colors shadow-lg"
        >
          Fazer Cotação
        </button>
      </header>
      
      {/* Background Image from user */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img 
          src="https://lh3.googleusercontent.com/d/1U9WT09ZFdnD8Qds8V-Nf_myDY2rHEGb2" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-50" 
          style={{ objectPosition: 'center 15%' }}
        />
        {/* Dark gradient overlay to blend bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/50 to-transparent" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10 text-center flex flex-col items-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-950/40 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
          <ShieldCheck size={16} />
          Corretora Autorizada
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-10 max-w-5xl text-white leading-[1.1]">
          Cuidando da saúde dos Curitibanos a mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-sm whitespace-nowrap">18 anos</span>
        </h1>

        <button 
          onClick={() => scrollToTarget('quotes-start')}
          className="bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-all flex items-center justify-center gap-3 border border-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:shadow-[0_0_25px_rgba(34,211,238,0.6)]"
        >
          Ver Últimas Cotações
          <ArrowRight size={20} />
        </button>

      </div>
    </section>
  );
};
