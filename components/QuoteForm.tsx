import React, { useState } from 'react';
import { CheckCircle2, Send } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    ages: '',
    hasCnpj: '',
    hasPlan: '',
    lookingFor: '',
    priority: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    const text = `Oi, preenchi o formulário no site. Gostaria de fazer uma cotação de plano de saúde.
    
*Nome:* ${formData.name}
*Cidade:* ${formData.city}
*Idades:* ${formData.ages}
*Possui CNPJ ou MEI:* ${formData.hasCnpj}
*Já possui plano:* ${formData.hasPlan}
*Estou Buscando:* ${formData.lookingFor}
*Prioridade na contratação:* ${formData.priority}`;

    const whatsappNumber = "554197217117";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="quote" className="snap-section min-h-screen py-24 relative flex flex-col justify-center overflow-hidden flex-1">
      
      {/* Background glow for form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-4xl bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-4xl mx-auto w-full">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
              Preencha as informações abaixo para receber uma <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">cotação completa</span> no seu whatsapp.
            </h2>
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
                  <label className="text-sm font-bold text-slate-300 ml-1">Nome *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-[#030712]/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 focus:bg-[#030712]/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    placeholder="Seu nome completo"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-sm font-bold text-slate-300 ml-1">Cidade *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.city}
                    onChange={e => setFormData({...formData, city: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-[#030712]/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 focus:bg-[#030712]/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    placeholder="Sua cidade"
                  />
                </div>
                <div className="space-y-3 md:col-span-2">
                  <label className="text-sm font-bold text-slate-300 ml-1">Idades (preencha as idades de quem entrará no plano) *</label>
                  <input 
                    required
                    type="text" 
                    value={formData.ages}
                    onChange={e => setFormData({...formData, ages: e.target.value})}
                    className="w-full px-5 py-4 rounded-2xl bg-[#030712]/50 backdrop-blur-sm border border-slate-800 hover:border-slate-700 focus:bg-[#030712]/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white outline-none transition-all placeholder:text-slate-600 shadow-inner"
                    placeholder="Ex: 7, 29 e 32"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-300 ml-1">Possui CNPJ ou MEI ativo? *</label>
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
                          className="peer appearance-none w-6 h-6 rounded-full border border-slate-600 hover:border-slate-400 checked:border-cyan-500 bg-[#030712]/50 backdrop-blur-sm transition-all cursor-pointer shadow-inner"
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
                          className="peer appearance-none w-6 h-6 rounded-full border border-slate-600 hover:border-slate-400 checked:border-cyan-500 bg-[#030712]/50 backdrop-blur-sm transition-all cursor-pointer shadow-inner"
                        />
                        <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                      </div>
                      <span className="text-slate-300 group-hover:text-white transition-colors text-lg">Não</span>
                    </label>
                  </div>
                </div>
                
                <div className="space-y-4">
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
                            className="peer appearance-none w-6 h-6 rounded-full border border-slate-600 hover:border-slate-400 checked:border-cyan-500 bg-[#030712]/50 backdrop-blur-sm transition-all cursor-pointer shadow-inner"
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
                            className="peer appearance-none w-6 h-6 rounded-full border border-slate-600 hover:border-slate-400 checked:border-cyan-500 bg-[#030712]/50 backdrop-blur-sm transition-all cursor-pointer shadow-inner"
                          />
                          <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors text-lg">Não</span>
                      </label>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-10">
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-300 ml-1">Estou Buscando: *</label>
                  <div className="flex flex-col gap-4 px-1">
                    {['Mais em conta', 'Custo/benefício', 'Premium'].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input 
                            required
                            type="radio" 
                            name="lookingFor" 
                            value={option}
                            checked={formData.lookingFor === option}
                            onChange={e => setFormData({...formData, lookingFor: e.target.value})}
                            className="peer appearance-none w-6 h-6 rounded-full border border-slate-600 hover:border-slate-400 checked:border-cyan-500 bg-[#030712]/50 backdrop-blur-sm transition-all cursor-pointer shadow-inner shrink-0"
                          />
                          <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors text-base md:text-lg">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-300 ml-1">Prioridade na contratação: *</label>
                  <div className="flex flex-col gap-4 px-1">
                    {['Máxima', 'Estou Pesquisando', 'Só Curiosidade'].map((option) => (
                      <label key={option} className="flex items-center gap-3 cursor-pointer group">
                        <div className="relative flex items-center justify-center">
                          <input 
                            required
                            type="radio" 
                            name="priority" 
                            value={option}
                            checked={formData.priority === option}
                            onChange={e => setFormData({...formData, priority: e.target.value})}
                            className="peer appearance-none w-6 h-6 rounded-full border border-slate-600 hover:border-slate-400 checked:border-cyan-500 bg-[#030712]/50 backdrop-blur-sm transition-all cursor-pointer shadow-inner shrink-0"
                          />
                          <div className="absolute w-3 h-3 rounded-full bg-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-slate-300 group-hover:text-white transition-colors text-base md:text-lg">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>

              <button 
                type="submit"
                className="group w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-3 text-lg mt-6 hover:scale-[1.02] active:scale-[0.98]"
              >
                <Send size={22} className="text-slate-900 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                Receber Cotação
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
