import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    hasCnpj: '',
    ages: '',
    hasPlan: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    const text = `*Nova Cotação Solicitada do Site unipamsaude.com:*
    
*Nome:* ${formData.name}
*Possui CNPJ ou MEI:* ${formData.hasCnpj}
*Idades:* ${formData.ages}
*Já possui plano:* ${formData.hasPlan}`;

    const whatsappNumber = "554195898548";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="quote" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Solicite sua <span className="text-brand-blue">Cotação</span>
            </h2>
            <p className="text-slate-600 text-lg">
              Insira as informações abaixo
            </p>
          </div>

          {isSubmitted ? (
            <div 
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg animate-in fade-in zoom-in duration-300"
            >
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 size={32} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Obrigado!</h3>
              <p className="text-slate-600 text-lg">
                Recebemos suas informações e em breve um consultor entrará em contato.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="mt-8 text-brand-blue font-medium hover:underline"
              >
                Fazer nova cotação
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100 animate-in slide-in-from-bottom-4 duration-500"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Nome Completo *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Idades das pessoas (Ex: 7, 29 e 32) *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.ages}
                    onChange={e => setFormData({...formData, ages: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="Idades separadas por vírgula"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Possui CNPJ ou MEI? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        required
                        type="radio" 
                        name="cnpj" 
                        value="Sim"
                        checked={formData.hasCnpj === 'Sim'}
                        onChange={e => setFormData({...formData, hasCnpj: e.target.value})}
                        className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <span>Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        required
                        type="radio" 
                        name="cnpj" 
                        value="Não"
                        checked={formData.hasCnpj === 'Não'}
                        onChange={e => setFormData({...formData, hasCnpj: e.target.value})}
                        className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Já possui plano de saúde? *</label>
                  <div className="flex gap-4">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        required
                        type="radio" 
                        name="hasPlan" 
                        value="Sim"
                        checked={formData.hasPlan === 'Sim'}
                        onChange={e => setFormData({...formData, hasPlan: e.target.value})}
                        className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <span>Sim</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input 
                        required
                        type="radio" 
                        name="hasPlan" 
                        value="Não"
                        checked={formData.hasPlan === 'Não'}
                        onChange={e => setFormData({...formData, hasPlan: e.target.value})}
                        className="w-4 h-4 text-brand-blue focus:ring-brand-blue"
                      />
                      <span>Não</span>
                    </label>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Receber Cotação
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};