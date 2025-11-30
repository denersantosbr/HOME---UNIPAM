import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Award, Users } from 'lucide-react';

const aboutImages = [
  "https://lh3.googleusercontent.com/d/1cS8TQNAblE_-0odL5lyLr9xqpmTtwKnB=w800-rw", 
  "https://lh3.googleusercontent.com/d/1b3cpHdTsMOMg_eKU5U2hlvVjCWhqXzEm=w500-rw", 
  "https://lh3.googleusercontent.com/d/1aBsATgieeUuzooN3ysbzyj9xv_UJOQb9=w500-rw" 
];

export const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Images Grid */}
          <div className="relative order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4 max-w-[500px] mx-auto lg:mx-0">
                <div className="flex flex-col gap-4">
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[4/3]">
                        <img 
                            src={aboutImages[1]} 
                            alt="Consultores Unipam" 
                            className="w-full h-full object-cover object-top"
                            loading="lazy"
                            width="240"
                            height="180"
                        />
                    </div>
                    <div className="rounded-2xl overflow-hidden shadow-lg bg-slate-100 aspect-[4/3]">
                        <img 
                            src={aboutImages[2]} 
                            alt="Atendimento Unipam" 
                            className="w-full h-full object-cover object-top" 
                            loading="lazy"
                            width="240"
                            height="180"
                        />
                    </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl bg-slate-100 h-full aspect-[3/4]">
                    <img 
                        src={aboutImages[0]} 
                        alt="Equipe Unipam" 
                        // FIX: Added object-top to ensure heads are not cut off
                        className="w-full h-full object-cover object-top" 
                        loading="lazy"
                        width="240"
                        height="320"
                    />
                </div>
            </div>
               
             <div className="absolute -bottom-6 -left-4 glass p-4 rounded-xl shadow-lg hidden md:flex items-center gap-3 animate-bounce-slow max-w-xs border border-white/50 bg-white/80 backdrop-blur-sm">
                  <div className="bg-blue-100 p-2 rounded-full text-brand-blue">
                      <Award size={24} />
                  </div>
                  <div>
                      <p className="font-bold text-slate-800 text-sm">Sede Própria</p>
                      <p className="text-xs text-slate-500">Jardim das Américas</p>
                  </div>
             </div>
          </div>

          {/* Text Content */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-brand-accent uppercase tracking-wider mb-2">Sobre a Unipam</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Confiança que atravessa gerações
            </h3>
            <p className="text-slate-600 text-lg mb-6 leading-relaxed">
              Desde 2008, a Unipam Assessoria e Vendas simplifica o acesso à saúde no Paraná. Não somos apenas vendedores de planos; somos consultores dedicados a entender a sua necessidade real.
            </p>
            <p className="text-slate-600 mb-8">
              Nossa sede própria no Jardim das Américas e nossa equipe especializada garantem um suporte pós-venda humanizado.
            </p>

            <ul className="space-y-6">
              <li className="flex items-start gap-4">
                <div className="bg-blue-100 p-2.5 rounded-full text-brand-blue mt-0.5 shrink-0">
                    <MapPin size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-lg">Sede Física em Curitiba</h4>
                    <p className="text-base text-slate-500 mt-1">Rua Frei Francisco Sampaio 326, Jardim das Américas</p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <div className="bg-blue-100 p-2.5 rounded-full text-brand-blue mt-0.5 shrink-0">
                    <Users size={20} />
                </div>
                <div>
                    <h4 className="font-bold text-slate-900 text-lg">Atendimento Humanizado</h4>
                    <p className="text-base text-slate-500 mt-1">Fale diretamente com nossa equipe, sem filas intermináveis.</p>
                </div>
              </li>
            </ul>

            <a 
              href="https://wa.me/554198919062" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-colors inline-block shadow-lg w-full md:w-auto text-center"
            >
              Conheça Nossa Sede
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};