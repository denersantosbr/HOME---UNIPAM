import React, { useState } from 'react';
import { Instagram, MapPin, Phone, Mail, ArrowUp, X, Youtube } from 'lucide-react';

type ModalType = 'privacy' | 'terms' | 'lgpd' | null;

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="snap-section-end bg-[#02040a]/80 backdrop-blur-md text-slate-400 pt-16 pb-8 relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-6">
            <div className="text-2xl font-bold text-white flex items-center gap-2">
              <img 
                src="/logo.png" 
                alt="Unipam Logo" 
                className="h-10 w-auto" 
                onError={(e) => {
                  e.currentTarget.src = "https://lh3.googleusercontent.com/d/1D86To9UC0fwGJ-sFCeN50qqoKk3Gc459=w300-rw";
                  e.currentTarget.classList.add("brightness-0", "invert", "opacity-90");
                }}
              />
              UNIPAM
            </div>
            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Assessoria especializada em planos de saúde. Transparência, ética e compromisso com o seu bem-estar há mais de 18 anos.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/unipamsaude/" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all text-slate-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a 
                href="https://www.tiktok.com/@unipamsaude" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all text-slate-300"
                aria-label="TikTok"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="22"
                  height="22"
                  fill="currentColor"
                >
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91.04.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.12-3.44-3.17-3.64-5.46-.22-2.18.66-4.39 2.29-5.75 1.76-1.44 4.2-1.89 6.32-1.22v4.13c-1.1-.38-2.39-.23-3.32.48-.96.69-1.42 1.93-1.18 3.09.24 1.16 1.25 2.1 2.45 2.22 1.53.16 3.03-.83 3.32-2.35.09-.5.06-1.02.06-1.53V.02z" />
                </svg>
              </a>
              <a 
                href="https://www.youtube.com/@unipamsaude" 
                target="_blank" 
                rel="noreferrer"
                className="w-12 h-12 rounded-full border border-slate-800 bg-slate-900/50 flex items-center justify-center hover:bg-cyan-500 hover:border-cyan-500 hover:text-white transition-all text-slate-300"
                aria-label="YouTube"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>

          {/* Address Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Onde Estamos</h3>
            <div className="flex items-start gap-4">
              <MapPin className="text-cyan-500 shrink-0 mt-1" size={24} />
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
                    <Mail className="text-cyan-500 shrink-0" size={24} />
                    <span className="truncate text-base">contato@unipamsaude.com</span>
                </a>
                <a href="tel:4130115389" className="flex items-center gap-4 hover:text-white transition-colors py-2">
                    <Phone className="text-cyan-500 shrink-0" size={24} />
                    <span className="text-lg">(41) 3011-5389</span>
                </a>
                <a href="tel:554195898548" className="flex items-center gap-4 hover:text-white transition-colors py-2">
                    <Phone className="text-cyan-500 shrink-0" size={24} />
                    <span className="text-lg">(41) 9589-8548</span>
                </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-6">
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
            className="w-12 h-12 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 text-slate-400 transition-all shadow-lg shrink-0"
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