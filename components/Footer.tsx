import React, { useState } from 'react';
import { Instagram, MapPin, Phone, Mail, ArrowUp, X } from 'lucide-react';

type ModalType = 'privacy' | 'terms' | 'lgpd' | null;

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

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
               src="https://lh3.googleusercontent.com/d/1D86To9UC0fwGJ-sFCeN50qqoKk3Gc459=w300-rw" 
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
                href="https://www.instagram.com/unipamsaude/" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Onde Estamos</h3>
            <div className="flex items-start gap-4">
              <MapPin className="text-brand-blue shrink-0 mt-1" size={24} />
              <p className="text-base leading-relaxed">
                Rua Frei Francisco Sampaio 326<br />
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
                <a href="mailto:contato@unipamsaude.com" className="flex items-center gap-4 hover:text-white transition-colors py-2 overflow-hidden">
                    <Mail className="text-brand-blue shrink-0" size={24} />
                    <span className="truncate text-base">contato@unipamsaude.com</span>
                </a>
                <a href="tel:4130115389" className="flex items-center gap-4 hover:text-white transition-colors py-2">
                    <Phone className="text-brand-blue shrink-0" size={24} />
                    <span className="text-lg">(41) 3011-5389</span>
                </a>
                <a href="tel:4195898548" className="flex items-center gap-4 hover:text-white transition-colors py-2">
                    <Phone className="text-brand-blue shrink-0" size={24} />
                    <span className="text-lg">(41) 9589-8548</span>
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6">
          <div className="text-center md:text-left space-y-1">
            <p>Razão Social: Unipam Assessoria e Vendas LTDA</p>
            <p>CNPJ: 09.571.165/0001-98</p>
          </div>
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-center md:text-left">© {new Date().getFullYear()} Unipam. Todos os direitos reservados.</p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
              <button onClick={() => setActiveModal('privacy')} className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">Política de Privacidade</button>
              <button onClick={() => setActiveModal('terms')} className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">Termos de Uso</button>
              <button onClick={() => setActiveModal('lgpd')} className="hover:text-white transition-colors underline decoration-slate-600 underline-offset-4">LGPD</button>
            </div>
          </div>
          <button 
            onClick={scrollToTop} 
            className="w-12 h-12 rounded-full bg-slate-800 flex items-center justify-center hover:bg-brand-blue text-white transition-colors shadow-lg shrink-0"
            aria-label="Voltar ao topo"
          >
            <ArrowUp size={24} />
          </button>
        </div>
      </div>

      {/* Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm" onClick={() => setActiveModal(null)}>
          <div className="bg-white rounded-2xl p-6 md:p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl text-slate-800" onClick={e => e.stopPropagation()}>
            <button onClick={() => setActiveModal(null)} className="absolute top-4 right-4 p-2 text-slate-400 hover:text-slate-700 bg-slate-100 rounded-full transition-colors">
              <X size={24} />
            </button>
            
            {activeModal === 'lgpd' && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Conformidade com a LGPD</h2>
                <div className="space-y-4 text-slate-700">
                  <p>Em conformidade com a Lei nº 13.709/2018 (LGPD), informamos que:</p>
                  <p><strong>Finalidade:</strong> Os dados coletados (como nome, idade e preferências hospitalares) têm a finalidade exclusiva de elaborar um estudo comparativo de planos de saúde e permitir o contato consultivo via WhatsApp.</p>
                  <p><strong>Controlador de Dados:</strong> O tratamento dos dados é realizado pela Unipam Saúde, sob responsabilidade do proprietário Isael José dos Santos.</p>
                  <p><strong>Segurança:</strong> Implementamos medidas técnicas de segurança para proteger seus dados pessoais contra acessos não autorizados.</p>
                  <p><strong>Acesso e Exclusão:</strong> A qualquer momento, você pode solicitar a confirmação da existência de tratamento, o acesso aos seus dados ou a exclusão definitiva da nossa base de contatos diretamente via WhatsApp.</p>
                </div>
              </>
            )}

            {activeModal === 'privacy' && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Política de Privacidade</h2>
                <div className="space-y-4 text-slate-700">
                  <p>A sua privacidade é importante para nós. É política da Unipam Saúde respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site.</p>
                  <p><strong>Coleta de Dados:</strong> Solicitamos informações pessoais apenas quando realmente precisamos delas para lhe fornecer um serviço (como a geração do seu estudo técnico de plano de saúde). Fazemo-lo por meios justos e legais, com o seu conhecimento e consentimento.</p>
                  <p><strong>Uso das Informações:</strong> Não compartilhamos informações de identificação pessoal publicamente ou com terceiros, exceto quando exigido por lei ou para a finalização da contratação do plano de saúde por sua solicitação expressa.</p>
                  <p><strong>Retenção:</strong> Retemos as informações coletadas apenas pelo tempo necessário para fornecer o serviço solicitado.</p>
                  <p><strong>Seus Direitos:</strong> Você é livre para recusar a nossa solicitação de informações pessoais, entendendo que talvez não possamos fornecer alguns dos serviços desejados (como o envio da cotação personalizada).</p>
                </div>
              </>
            )}

            {activeModal === 'terms' && (
              <>
                <h2 className="text-2xl font-bold mb-4 text-slate-900">Termos e Condições de Uso</h2>
                <div className="space-y-4 text-slate-700">
                  <p>Ao acessar este site e solicitar um estudo técnico, você concorda em cumprir estes termos de serviço:</p>
                  <p><strong>Uso do Serviço:</strong> O relatório gerado por nossa inteligência de dados é de caráter informativo e consultivo. Os valores e redes hospitalares são baseados nas tabelas vigentes das operadoras e podem sofrer alterações sem aviso prévio.</p>
                  <p><strong>Responsabilidade:</strong> A Unipam Saúde atua como assessoria técnica e corretora autorizada. A aceitação do risco e a vigência do plano dependem exclusivamente da aprovação da operadora de saúde escolhida.</p>
                  <p><strong>Propriedade Intelectual:</strong> O layout e a estrutura do estudo técnico fornecido são de propriedade do estrategista responsável, sendo proibida a reprodução para fins comerciais por terceiros.</p>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </footer>
  );
};