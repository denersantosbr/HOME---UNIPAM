import React from 'react';
import { ArrowRight, Check, Activity } from 'lucide-react';
import { scrollToTarget } from './Navbar';

const quotes = [
  {
    operator: 'Unimed',
    type: 'PJ (aceita MEI)',
    features: ['Enfermaria', 'Com Coparticipação', 'Com Obstetrícia', 'Cobertura Completa'],
    prices: [
      { age: '00 a 18 anos', value: 'R$ 205,43' },
      { age: '34 a 38 anos', value: 'R$ 331,60' },
      { age: '39 a 43 anos', value: 'R$ 379,84' },
    ],
    total: 'R$ 916,87',
    color: 'emerald',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/163bizJX2hznlW1pTBKmh8HnGhm3ccOrt',
    objectPosition: '20% center',
    bgOpacity: 'opacity-80',
    bgOverlay: 'from-[#030712] via-[#030712]/50 to-transparent'
  },
  {
    operator: 'Hapvida',
    type: 'PJ (aceita MEI)',
    features: ['Enfermaria', 'Com Coparticipação', 'Hospitais Próprios de Referência', 'Cobertura Completa'],
    prices: [
      { age: '00 a 18 anos', value: 'R$ 95,40' },
      { age: '34 a 38 anos', value: 'R$ 158,26' },
      { age: '39 a 43 anos', value: 'R$ 188,33' },
    ],
    total: 'R$ 441,99',
    color: 'orange',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/1bfUwWQtjNFYUfHnGu0jUqKF_KSr400PT',
    objectPosition: 'center 20%',
    bgOpacity: 'opacity-80',
    bgOverlay: 'from-[#030712] via-[#030712]/50 to-transparent'
  },
  {
    operator: 'Select',
    type: 'PJ (aceita MEI)',
    features: ['Enfermaria', 'Com Coparticipação', 'Com Obstetrícia', 'Cobertura Completa'],
    prices: [
      { age: '00 a 18 anos', value: 'R$ 190,70' },
      { age: '34 a 38 anos', value: 'R$ 296,58' },
      { age: '39 a 43 anos', value: 'R$ 346,31' },
    ],
    total: 'R$ 833,59',
    color: 'purple',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/1Wztg_XxXjYOWa9p0LJ3Y8r8UryyKmGG7',
    objectPosition: '40% center'
  },
  {
    operator: 'PR Clínicas',
    type: 'PJ (aceita MEI)',
    features: ['Enfermaria', 'Com Coparticipação', 'Com Obstetrícia', 'Cobertura Completa'],
    prices: [
      { age: '00 a 18 anos', value: 'R$ 148,97' },
      { age: '34 a 38 anos', value: 'R$ 262,56' },
      { age: '39 a 43 anos', value: 'R$ 309,81' },
    ],
    total: 'R$ 721,34',
    color: 'red',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/1-zleF-COJNtlbyt-qbkBBv2O3t8XW4gZ',
    objectPosition: '40% center',
    bgOpacity: 'opacity-80',
    bgOverlay: 'from-[#030712] via-[#030712]/50 to-transparent'
  },
  {
    operator: 'Amil',
    type: 'PJ (não aceita MEI)',
    features: ['Enfermaria', 'Com Coparticipação', 'Com Obstetrícia', 'Cobertura Completa'],
    prices: [
      { age: '00 a 18 anos', value: 'R$ 147,74' },
      { age: '34 a 38 anos', value: 'R$ 235,52' },
      { age: '39 a 43 anos', value: 'R$ 263,08' },
    ],
    total: 'R$ 646,34',
    color: 'slate',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/1Wztg_XxXjYOWa9p0LJ3Y8r8UryyKmGG7',
    objectPosition: '40% center'
  },
  {
    operator: 'Plano de Saúde Infantil',
    type: 'Pessoa Física (CPF)',
    features: [
      'Atendimento Nacional para emergências',
      'Sem Carência: consultas, exames simples e emergências',
      'Consultas, exames, urgência e emergência',
      'Internamentos clínicos e cirúrgicos',
      'Cirurgias e tratamentos em geral',
      'Hospitais de Referência',
      'Fisioterapia e terapias',
      'até 70% de desconto em farmácias'
    ],
    prices: [
      { age: 'Unimed', value: 'R$ 327,88', color: 'text-emerald-400 font-bold' },
      { age: 'Select', value: 'R$ 314,00', color: 'text-purple-400 font-bold' },
      { age: 'Hapvida', value: 'R$ 191,91', color: 'text-orange-400 font-bold' },
      { age: 'Nossa Saúde', value: 'R$ 173,05', color: 'text-cyan-400 font-bold' },
    ],
    total: '',
    color: 'amber',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/1U9WT09ZFdnD8Qds8V-Nf_myDY2rHEGb2',
    bgOpacity: 'opacity-40',
    bgOverlay: 'from-[#030712] via-[#030712]/90 to-[#030712]/40'
  },
  {
    operator: 'MedSênior',
    type: 'Pessoa Física (CPF)',
    features: ['Sem Coparticipação (mensalidade fixa)', 'Hospitais de Referência', 'Cobertura Completa'],
    prices: [
      { age: '44 a 48 anos', value: 'R$ 569,75' },
      { age: '49 a 53 anos', value: 'R$ 569,75' },
      { age: '54 a 58 anos', value: 'R$ 683,70' },
      { age: '59 anos ou +', value: 'R$ 895,65' },
    ],
    total: '',
    color: 'amber',
    icon: <Activity />,
    bgImage: 'https://lh3.googleusercontent.com/d/18_oiMH66lsEA554Uo27B_xczvd3hgKrd',
    objectPosition: '40% center',
    bgOpacity: 'opacity-80',
    bgOverlay: 'from-[#030712] via-[#030712]/50 to-transparent'
  }
];

const colorStyles = {
  emerald: 'border-emerald-500/30 bg-emerald-950/40 shadow-[0_0_80px_rgba(16,185,129,0.15)] text-emerald-400 from-emerald-500/20 to-transparent',
  orange: 'border-orange-500/30 bg-orange-950/40 shadow-[0_0_80px_rgba(249,115,22,0.15)] text-orange-400 from-orange-500/20 to-transparent',
  purple: 'border-purple-500/30 bg-purple-950/40 shadow-[0_0_80px_rgba(168,85,247,0.15)] text-purple-400 from-purple-500/20 to-transparent',
  red: 'border-red-500/30 bg-red-950/40 shadow-[0_0_80px_rgba(239,68,68,0.15)] text-red-400 from-red-500/20 to-transparent',
  slate: 'border-slate-300/30 bg-slate-800/40 shadow-[0_0_80px_rgba(203,213,225,0.15)] text-slate-200 from-slate-300/20 to-transparent',
  cyan: 'border-cyan-500/30 bg-cyan-950/40 shadow-[0_0_80px_rgba(6,182,212,0.15)] text-cyan-400 from-cyan-500/20 to-transparent',
  amber: 'border-amber-500/30 bg-amber-950/40 shadow-[0_0_80px_rgba(245,158,11,0.15)] text-amber-500 from-amber-500/20 to-transparent'
};

const buttonStyles = {
  emerald: 'bg-emerald-500 hover:bg-emerald-600 shadow-[0_0_20px_rgba(16,185,129,0.4)] text-white',
  orange: 'bg-orange-500 hover:bg-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.4)] text-white',
  purple: 'bg-purple-500 hover:bg-purple-600 shadow-[0_0_20px_rgba(168,85,247,0.4)] text-white',
  red: 'bg-red-500 hover:bg-red-600 shadow-[0_0_20px_rgba(239,68,68,0.4)] text-white',
  slate: 'bg-slate-200 hover:bg-slate-300 shadow-[0_0_20px_rgba(203,213,225,0.4)] text-slate-900',
  cyan: 'bg-cyan-500 hover:bg-cyan-600 shadow-[0_0_20px_rgba(6,182,212,0.4)] text-white',
  amber: 'bg-amber-500 hover:bg-amber-600 shadow-[0_0_20px_rgba(245,158,11,0.4)] text-white'
};

export const Quotes: React.FC = () => {
  return (
    <div id="quotes-start" className="w-full relative bg-[#030712] py-24 flex flex-col gap-16 md:gap-32">
      {quotes.map((quote, idx) => {
        const theme = colorStyles[quote.color as keyof typeof colorStyles];
        const btnTheme = buttonStyles[quote.color as keyof typeof buttonStyles];
        const textColor = theme.split(' ').find(cls => cls.startsWith('text-'));

        return (
          <section key={idx} id={`card-${quote.operator.toLowerCase().replace(/\s+/g, '-')}`} className="w-full flex items-center justify-center px-4 md:px-8 relative">
            
            {/* Background Glow specific to the card color */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-lg blur-[100px] opacity-20 rounded-full bg-gradient-to-br ${theme.split('from-')[1]}`} />

            <div className={`relative w-full max-w-md rounded-[2.5rem] p-8 border backdrop-blur-3xl transition-all duration-700 overflow-hidden ${theme.split('from-')[0]}`}>
              
              {quote.bgImage && (
                <>
                  <img 
                    src={quote.bgImage} 
                    alt="" 
                    className={`absolute inset-0 w-full h-full object-cover ${quote.bgOpacity || 'opacity-60'} pointer-events-none z-0`} 
                    style={{ objectPosition: quote.objectPosition || 'center' }}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${quote.bgOverlay || 'from-[#030712] via-[#030712]/60 to-transparent'} pointer-events-none z-0`} />
                </>
              )}
              
              <div className="relative z-10 drop-shadow-md">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <h3 className="text-4xl font-bold text-white mb-2 tracking-tight">{quote.operator}</h3>
                  <span className={`text-sm border border-current rounded-full px-4 py-1.5 font-medium bg-white/5 inline-flex items-center gap-2 ${textColor}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current shadow-[0_0_10px_currentColor] animate-pulse"></span>
                    {quote.type}
                  </span>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {quote.prices.map((p, i) => (
                  <div key={i} className="flex justify-between text-slate-300 items-center">
                    <span className={`text-base font-medium drop-shadow-md ${p.color || 'text-slate-100'}`}>{p.age}</span>
                    <span className={`text-lg font-bold drop-shadow-md ${(p as any).color ? 'text-white' : 'text-white'}`}>{p.value}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-white/10 pt-8 mb-8 relative">
                {quote.total && (
                  <div className="flex flex-col items-center justify-center mb-8 text-center">
                    <span className="text-slate-400 text-sm mb-1">Investimento Total</span>
                    <span className={`text-5xl font-bold tracking-tight ${textColor}`}>{quote.total}</span>
                  </div>
                )}
                
                <ul className="space-y-3 text-sm text-slate-400 px-2">
                  {quote.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check size={18} className={`shrink-0 mt-0.5 ${textColor}`} />
                      <span className="leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button 
                onClick={() => scrollToTarget('quote')}
                className={`relative z-10 w-full py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-[0.98] ${btnTheme}`}
              >
                Fazer a minha cotação
                <ArrowRight size={18} />
              </button>

              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};
