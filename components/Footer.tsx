import React from 'react';
import { Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-16 pb-8 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
               // WebP + Lazy Loading
               src="https://lh3.googleusercontent.com/d/1L1TObqXm_SSDzvr-5d3ljRtT0WsqN9r_=w300-rw" 
               alt="Unipam Logo"
               loading="lazy"
               width="200"
               height="100"
               className="h-20 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Assessoria especializada em planos de saúde. Transparência, ética e compromisso com o seu bem-estar há mais de 17 anos.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/unipam.planos/" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://br.linkedin.com/company/unipam-planos-de-saude" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Onde Estamos</h3>
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-blue shrink-0 mt-1" size={24} />
              <p className="text-base leading-relaxed">
                Rua Frei Francisco Sampaio 326, Sala<br />
                Jardim das Américas<br />
                Curitiba PR<br />
                CEP: 81530-380
              </p>
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Fale Conosco</h3>
            <div className="space-y-4">
                <a href="tel:4130115389" className="flex items-center gap-4 hover:text-white transition-colors py-2">
                    <Phone className="text-brand-blue shrink-0" size={24} />
                    <span className="text-lg">(41) 3011-5389</span>
                </a>
                <a href="tel:4198919062" className="flex items-center gap-4 hover:text-white transition-colors py-2">
                    <Phone className="text-brand-blue shrink-0" size={24} />
                    <span className="text-lg">(41) 9891-9062</span>
                </a>
                <a href="mailto:vendas@clinipamplanos.com.br" className="flex items-center gap-4 hover:text-white transition-colors py-2 overflow-hidden">
                    <Mail className="text-brand-blue shrink-0" size={24} />
                    <span className="truncate text-base">vendas@clinipamplanos.com.br</span>
                </a>
            </div>
            <a 
                href="https://wa.me/554198919062" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-4 rounded-xl font-bold transition-colors mt-6 shadow-lg text-lg"
            >
                Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6">
          <div className="text-center md:text-left space-y-1">
            <p>Razão Social: Unipam Assessoria e Vendas LTDA</p>
            <p>CNPJ: 09.571.165/0001-98</p>
          </div>
          <p className="text-center">© {new Date().getFullYear()} Unipam. Todos os direitos reservados.</p>
          <button 
            onClick={scrollToTop} 
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue text-white transition-colors shadow-lg"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>
    </footer>
  );
};