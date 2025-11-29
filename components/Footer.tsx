import React from 'react';
import { Instagram, Linkedin, MapPin, Phone, Mail, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-slate-900 text-slate-300 pt-20 pb-8 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <img 
               src="https://lh3.googleusercontent.com/d/1L1TObqXm_SSDzvr-5d3ljRtT0WsqN9r_" 
               alt="Unipam Logo" 
               className="h-24 w-auto object-contain brightness-0 invert"
            />
            <p className="text-slate-400 leading-relaxed">
              Assessoria especializada em planos de saúde. Transparência, ética e compromisso com o seu bem-estar há mais de 17 anos.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/unipam.planos/" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://br.linkedin.com/company/unipam-planos-de-saude" 
                target="_blank" 
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Onde Estamos</h3>
            <div className="flex items-start gap-3">
              <MapPin className="text-brand-blue shrink-0 mt-1" size={20} />
              <p>
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
                <a href="tel:4130115389" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="text-brand-blue" size={20} />
                    (41) 3011-5389
                </a>
                <a href="tel:4198919062" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Phone className="text-brand-blue" size={20} />
                    (41) 9891-9062
                </a>
                <a href="mailto:vendas@clinipamplanos.com.br" className="flex items-center gap-3 hover:text-white transition-colors">
                    <Mail className="text-brand-blue" size={20} />
                    vendas@clinipamplanos.com.br
                </a>
            </div>
            <a 
                href="https://wa.me/554198919062" 
                target="_blank" 
                rel="noreferrer"
                className="block w-full bg-green-600 hover:bg-green-700 text-white text-center py-3 rounded-lg font-bold transition-colors mt-6"
            >
                Chamar no WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-4">
          <div className="text-center md:text-left">
            <p>Razão Social: Unipam Assessoria e Vendas LTDA</p>
            <p>CNPJ: 09.571.165/0001-98</p>
          </div>
          <p>© {new Date().getFullYear()} Unipam. Todos os direitos reservados.</p>
          <button 
            onClick={scrollToTop} 
            className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue text-white transition-colors"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};