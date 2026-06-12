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

    const text = `Olá, gostaria de fazer uma cotação de plano de saúde.
    
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
    <section id="quote" className="snap-section min-h-screen py-24 bg-[#030712] relative flex flex-col justify-center overflow-hidden">
      
      {/* Background glow for form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-4xl bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Solicite sua <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Cotação</span>
            </h2>
            <p className="text-slate-400 text-lg">
              Insira as informações abaixo
            </p>
          </div>

          {isSubmitted ? (
            <div 
              className="bg-[#0f172a] border border-cyan-500/30 rounded-3xl p-8 text-center shadow-[0_0_60px_rgba(34,211,238,0.1)] animate-in fade-in zoom-in duration-300"
            >
              <div className="w-20 h-20 bg-cyan-500/10 text-cyan-400 rounded-full flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                <CheckCircle2 size={40} />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">Tudo Certo!</h3>
              <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
                Recebemos suas informações. Você será redirecionado para o WhatsApp para falar com um especialista.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="text-cyan-400 font-medium hover:text-cyan-300 hover:underline transition-colors"
              >
                Fazer nova cotação
              </button>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit}
              className="bg-[#0f172a]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 animate-in slide-in-from-bottom-8 duration-700"
            >
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Nome Completo *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-[#030712] border border-slate-800 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="Seu nome"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Idades das pessoas *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.ages}
                    onChange={e => setFormData({...formData, ages: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-[#030712] border border-slate-800 focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 text-white outline-none transition-all placeholder:text-slate-600"
                    placeholder="Ex: 7, 29 e 32"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Possui CNPJ ou MEI? *</label>
                  <div className="flex gap-6 px-1">
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          required
                          type="radio" 
                          name="cnpj" 
                          value="Sim"
                          checked={formData.hasCnpj === 'Sim'}
                          onChange={e => setFormData({...formData, hasCnpj: e.target.value})}
                          className="peer appearance-none w-6 h-6 rounded-full border-2 border-slate-700 checked:border-cyan-500 bg-[#030712] transition-all cursor-pointer"
                        />
                        <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors text-lg">Sim</span>
                    </label>
                    <label className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input 
                          required
                          type="radio" 
                          name="cnpj" 
                          value="Não"
                          checked={formData.hasCnpj === 'Não'}
                          onChange={e => setFormData({...formData, hasCnpj: e.target.value})}
                          className="peer appearance-none w-6 h-6 rounded-full border-2 border-slate-700 checked:border-cyan-500 bg-[#030712] transition-all cursor-pointer"
                        />
                        <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors text-lg">Não</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Já possui plano de saúde? *</label>
                  <div className="flex gap-6 px-1">
                    <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input 
                            required
                            type="radio" 
                            name="hasPlan" 
                            value="Sim"
                            checked={formData.hasPlan === 'Sim'}
                            onChange={e => setFormData({...formData, hasPlan: e.target.value})}
                            className="peer appearance-none w-6 h-6 rounded-full border-2 border-slate-700 checked:border-cyan-500 bg-[#030712] transition-all cursor-pointer"
                          />
                          <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors text-lg">Sim</span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input 
                            required
                            type="radio" 
                            name="hasPlan" 
                            value="Não"
                            checked={formData.hasPlan === 'Não'}
                            onChange={e => setFormData({...formData, hasPlan: e.target.value})}
                            className="peer appearance-none w-6 h-6 rounded-full border-2 border-slate-700 checked:border-cyan-500 bg-[#030712] transition-all cursor-pointer"
                          />
                          <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors text-lg">Não</span>
                      </label>
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-3 text-lg mt-4 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={22} className="text-slate-900" />
                Receber Cotação
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
