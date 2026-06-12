import React from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { scrollToTarget } from './Navbar';

export const Hero: React.FC = () => {
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

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-10 max-w-5xl text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/70 leading-[1.1] animate-in slide-in-from-bottom-4 duration-1000">
          Cuidando da saúde dos Curitibanos a mais de <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-500 drop-shadow-sm whitespace-nowrap">18 anos</span>
        </h1>

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
