import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    // FIX: pt-28 (112px) mobile aligns with the smaller h-12 navbar. md:pt-48 desktop.
    <section id="home" className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-light/30 to-white">
      
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10 will-change-transform" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10 will-change-transform" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Text Content */}
          <div className="z-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-slate-900 mb-6 tracking-tight">
              Cuidando da saúde dos Curitibanos a mais de <span className="text-brand-blue">17 anos</span>
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
              Plano de saúde individual, familiar e empresarial. Compare preços, coberturas e carências de todas as operadoras em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <motion.a
                href="https://wa.me/554197217117"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 min-h-[56px]"
              >
                Cotar Agora
                <ArrowRight size={20} />
              </motion.a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium justify-center">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-brand-blue shrink-0"/> Atendimento Humanizado</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-brand-blue shrink-0"/> Consultoria Gratuita</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};