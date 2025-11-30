import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, Heart } from 'lucide-react';

const heroImages = [
  "https://lh3.googleusercontent.com/d/1LU_nAXemRm2EPGzW_zgj6KzAU90hPSaQ=w1000-rw",
  "https://lh3.googleusercontent.com/d/1OwImm1z7r_o9iXMblliHqoy_eWD6S3DU=w1000-rw",
  "https://lh3.googleusercontent.com/d/1gthjQG5Cct5Shk4yDRICfgOURf_n6SVe=w1000-rw",
  "https://lh3.googleusercontent.com/d/1qIJ3jbe90lDR6qxkogBxYijtDsV0AqTH=w1000-rw",
  "https://lh3.googleusercontent.com/d/1ltCJEg3BLZXhvNj_g-XeErAUachecHes=w1000-rw",
  "https://lh3.googleusercontent.com/d/1u-VC7d1tvyvsrLjNe9mmn3fuxEQukn-l=w1000-rw"
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
    // FIX: pt-28 (112px) mobile aligns with the smaller h-12 navbar. md:pt-48 desktop.
    <section id="home" className="relative pt-28 pb-16 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-brand-light/30 to-white">
      
      <div className="hidden md:block absolute top-0 right-0 w-[500px] h-[500px] bg-blue-200/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 -z-10 will-change-transform" />
      <div className="hidden md:block absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-light rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 -z-10 will-change-transform" />

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          
          {/* Text Content */}
          {/* Explicit order-1 ensures Text/CTA is always First (Top/Left) */}
          <div className="z-10 order-1">
            <div className="inline-flex items-center gap-2 bg-white/80 border border-blue-100 rounded-full px-4 py-1.5 mb-6 shadow-sm backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-sm font-semibold text-brand-blue tracking-wide">17 ANOS DE EXPERIÊNCIA</span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-[1.15] text-slate-900 mb-6 tracking-tight">
              Sua Saúde em <span className="text-brand-blue">Boas Mãos</span>. Encontre o Plano Ideal.
            </h1>
            
            <p className="text-base sm:text-lg text-slate-600 mb-8 leading-relaxed max-w-lg">
              Trabalhamos com Unimed, Hapvida, Nossa Saúde e as principais operadoras. Compare preços, coberturas e carências em um só lugar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <motion.a
                href="#quote"
                onClick={handleScrollToQuote}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brand-blue text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-600/20 flex items-center justify-center gap-2 min-h-[56px]"
              >
                Cotar Agora
                <ArrowRight size={20} />
              </motion.a>
              
              <div className="flex items-center gap-3 px-2 py-2 text-sm text-slate-600 font-medium bg-white/50 rounded-lg">
                <div className="flex -space-x-3">
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src="https://picsum.photos/100/100?random=1" alt="Cliente" loading="lazy" width="40" height="40" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src="https://picsum.photos/100/100?random=2" alt="Cliente" loading="lazy" width="40" height="40" />
                    </div>
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                       <img src="https://picsum.photos/100/100?random=3" alt="Cliente" loading="lazy" width="40" height="40" />
                    </div>
                </div>
                <div>
                    <div className="flex text-yellow-500 text-xs mb-0.5">★★★★★</div>
                    <span className="whitespace-nowrap">50 Mil Vidas</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-600 font-medium">
                <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-brand-blue shrink-0"/> Atendimento Humanizado</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 size={18} className="text-brand-blue shrink-0"/> Consultoria Gratuita</span>
            </div>
          </div>

          {/* Image Content (Carousel) */}
          {/* Explicit order-2 ensures Images are always Second (Bottom/Right) */}
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] w-full order-2">
            <div className="relative z-10 w-full h-full rounded-[2rem] overflow-hidden shadow-2xl shadow-brand-blue/20 bg-slate-100">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={currentImageIndex}
                  src={heroImages[currentImageIndex]}
                  alt="Unipam Destaques"
                  width="800"
                  height="600"
                  loading={currentImageIndex === 0 ? "eager" : "lazy"}
                  // @ts-ignore
                  fetchPriority={currentImageIndex === 0 ? "high" : "auto"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </AnimatePresence>
              
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 backdrop-blur-lg bg-white/90 p-4 md:p-6 rounded-2xl flex items-center gap-4 shadow-lg border border-white/40 z-20">
                <div className="bg-blue-100 p-2.5 md:p-3 rounded-full text-brand-blue shrink-0">
                    <Heart size={24} fill="currentColor" className="text-brand-blue md:w-7 md:h-7" />
                </div>
                <div className="flex-1 min-w-0">
                    <p className="text-[10px] md:text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Unipam</p>
                    <p className="text-sm md:text-base font-bold text-slate-900 leading-tight truncate">Mais Saúde Para Você</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};