import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';

const heroImages = [
  "https://lh3.googleusercontent.com/d/1LU_nAXemRm2EPGzW_zgj6KzAU90hPSaQ",
  "https://lh3.googleusercontent.com/d/1OwImm1z7r_o9iXMblliHqoy_eWD6S3DU",
  "https://lh3.googleusercontent.com/d/1gthjQG5Cct5Shk4yDRICfgOURf_n6SVe",
  "https://lh3.googleusercontent.com/d/1qIJ3jbe90lDR6qxkogBxYijtDsV0AqTH",
  "https://lh3.googleusercontent.com/d/1ltCJEg3BLZXhvNj_g-XeErAUachecHes",
  "https://lh3.googleusercontent.com/d/1u-VC7d1tvyvsrLjNe9mmn3fuxEQukn-l"
];

export const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const handleScrollToQuote = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.getElementById('quote');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-light/30 to-white">
      {/* Decorative Blur Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-white/60 border border-blue-100 rounded-full px-4 py-1.5 mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-blue tracking-wide">17 ANOS DE EXPERIÊNCIA</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-slate-900 mb-6">
              Sua Saúde em <span className="text-brand-blue">Boas Mãos</span>. Encontre o Plano Ideal.
            </h1>
            
            <p className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Trabalhamos com Unimed, Hapvida, Nossa Saúde e as principais operadoras. Compare preços, coberturas e carências em um só lugar com quem entende do assunto.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#quote"
                onClick={handleScrollToQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{ boxShadow: ["0 0 0 0 rgba(0, 86, 179, 0)", "0 0 0 10px rgba(0, 86, 179, 0.1)", "0 0 0 0 rgba(0, 86, 179, 0)"] }}
                transition={{ boxShadow: { repeat: Infinity, duration: 2 } }}
                className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2"
              >
                Cotar Agora
                <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex items-center gap-4 px-4 py-2 text-sm text-slate-500 font-medium">
                <div className="flex -space-x-3">
                    {[1,2,3].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                             <img src={`https://picsum.photos/100/100?random=${i}`} alt="Cliente" />
                        </div>
                    ))}
                </div>
                <div className="animate-pulse">
                    <div className="flex text-yellow-500 text-xs">★★★★★</div>
                    <span>50 Mil Vidas Seguradas</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-500">
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-brand-blue"/> Atendimento Humanizado</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={16} className="text-brand-blue"/> Consultoria Gratuita</span>
            </div>
          </motion.div>

          {/* Image Content (Carousel) */}
          <div className="relative h-[400px] md:h-[500px] w-full">
            <div className="absolute inset-0 bg-brand-blue/5 rounded-[2rem] transform rotate-3 scale-105 z-0"></div>
            <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-blue/20 bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Unipam Destaques" 
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeInOut" }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 right-6 backdrop-blur-md bg-white/85 p-6 rounded-2xl flex items-center gap-4 animate-bounce-slow shadow-lg border border-white/40 z-20">
                <div className="bg-blue-100 p-3 rounded-full text-brand-blue shrink-0">
                    <Heart size={28} fill="currentColor" className="text-brand-blue" />
                </div>
                <div className="flex-1">
                    <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider mb-1">Unipam</p>
                    <p className="text-sm font-bold text-slate-900 leading-tight">Mais Saúde Para Você, Sua Família ou Empresa</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};