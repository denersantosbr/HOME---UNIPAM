import React from 'react';
import { motion } from 'framer-motion';
import { User, Building2, HeartHandshake, ArrowRight } from 'lucide-react';

const cards = [
  {
    title: "Para Você e Família",
    icon: <User size={40} />,
    desc: "Proteja quem você ama com planos que cabem no seu bolso. Cobertura completa para consultas e exames.",
    color: "from-blue-400 to-blue-600",
    linkText: "Simular Individual"
  },
  {
    title: "Para Empresas (PJ)",
    icon: <Building2 size={40} />,
    desc: "Reduza custos com saúde na sua empresa. Planos corporativos com tabela diferenciada a partir de 2 vidas.",
    color: "from-indigo-500 to-brand-blue",
    linkText: "Simular Empresarial"
  },
  {
    title: "Melhor Idade",
    icon: <HeartHandshake size={40} />,
    desc: "Atenção especial para quem já cuidou de muita gente. Planos sênior focados em medicina preventiva.",
    color: "from-teal-400 to-teal-600",
    linkText: "Simular Sênior",
    pulse: true
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative organic shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-[100px] -z-10 opacity-60 pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            O Plano Ideal para <span className="text-brand-blue">Cada Momento</span>
          </h2>
          <p className="text-slate-600 text-lg">
            Não importa se é para você, sua família ou seus colaboradores. Temos a solução certa com o melhor custo-benefício.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card p-8 rounded-2xl relative overflow-hidden group border border-white/60 shadow-xl"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${card.color} opacity-10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700`}></div>
              
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center text-white shadow-lg mb-6 ${card.pulse ? 'animate-pulse' : ''}`}>
                {card.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-slate-800 mb-4">{card.title}</h3>
              <p className="text-slate-600 mb-8 leading-relaxed min-h-[80px]">
                {card.desc}
              </p>
              
              <a 
                href="https://wa.me/554198919062" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-between w-full px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold transition-all group-hover:shadow-md"
              >
                {card.linkText} <ArrowRight size={18} className="text-brand-blue" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};