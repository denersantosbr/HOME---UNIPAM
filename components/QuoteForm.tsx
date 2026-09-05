import React, { useState, useEffect } from 'react';
import { CheckCircle2, Send, ArrowRight, ArrowLeft } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    ages: '',
    isLargeCompany: false,
    hasCnpj: '',
    hasPlan: '',
    lookingFor: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (step < 5) {
      setStep(step + 1);
      return;
    }

    if (typeof window !== 'undefined' && (window as any).fbq) {
      (window as any).fbq('track', 'Lead');
    }

    const agesText = formData.isLargeCompany ? 'Empresa com mais de 10 colaboradores' : formData.ages;

    const text = `Oi, preenchi o formulário no site. Gostaria de fazer uma cotação de plano de saúde.
    
*Nome:* ${formData.name}
*Cidade:* ${formData.city}
*Idades:* ${agesText}
*Possui CNPJ ou MEI:* ${formData.hasCnpj}
*Já possui plano:* ${formData.hasPlan}
*Estou Buscando:* ${formData.lookingFor}`;

    const whatsappNumber = "554195898548";
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
    
    setIsSubmitted(true);
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 100);
  };

  const handleRadioSelect = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setTimeout(() => {
      setStep(prev => prev + 1);
    }, 300);
  };

  return (
    <section id="quote" className="snap-section min-h-screen py-24 relative flex flex-col justify-center overflow-hidden flex-1">
      
      {/* Background glow for form */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] max-w-4xl bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-3xl mx-auto w-full">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Cotação rápida via <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">WhatsApp</span>
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium">
              Descubra o plano ideal em poucos segundos.
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
                onClick={() => {
                  setIsSubmitted(false);
                  setStep(1);
                  setFormData({
                    name: '',
                    city: '',
                    ages: '',
                    isLargeCompany: false,
                    hasCnpj: '',
                    hasPlan: '',
                    lookingFor: '',
                  });
                }}
                className="text-cyan-400 font-medium hover:text-cyan-300 hover:underline transition-colors"
              >
                Fazer nova cotação
              </button>
            </div>
          ) : (
            <div className="bg-[#0f172a]/80 backdrop-blur-3xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_0_80px_rgba(0,0,0,0.5)] border border-white/5 relative overflow-hidden">
              
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-slate-800">
                <div 
                  className="h-full bg-cyan-500 transition-all duration-500 ease-out"
                  style={{ width: `${(step / 5) * 100}%` }}
                />
              </div>

              <form onSubmit={handleSubmit} className="mt-4">
                
                {step > 1 && (
                  <button 
                    type="button"
                    onClick={() => setStep(prev => prev - 1)}
                    className="absolute top-8 left-8 text-slate-400 hover:text-white transition-colors flex items-center gap-2 text-sm font-medium"
                  >
                    <ArrowLeft size={16} />
                    Voltar
                  </button>
                )}

                <div className="min-h-[280px] flex flex-col justify-center pt-8">
                  
                  {step === 1 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Já possui plano de saúde?
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        {['Sim', 'Não'].map(option => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleRadioSelect('hasPlan', option)}
                            className={`flex-1 py-5 px-6 rounded-2xl border-2 transition-all text-lg font-medium ${
                              formData.hasPlan === option 
                                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' 
                                : 'border-slate-700 hover:border-slate-500 text-slate-300 hover:bg-white/5'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Estou Buscando:
                      </h3>
                      <div className="flex flex-col gap-4 max-w-lg mx-auto">
                        {['Mais em conta', 'Custo/benefício', 'Premium'].map(option => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleRadioSelect('lookingFor', option)}
                            className={`w-full py-5 px-6 rounded-2xl border-2 transition-all text-lg font-medium ${
                              formData.lookingFor === option 
                                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' 
                                : 'border-slate-700 hover:border-slate-500 text-slate-300 hover:bg-white/5'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 3 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Possui CNPJ ou MEI ativo?
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                        {['Sim', 'Não'].map(option => (
                          <button
                            key={option}
                            type="button"
                            onClick={() => handleRadioSelect('hasCnpj', option)}
                            className={`flex-1 py-5 px-6 rounded-2xl border-2 transition-all text-lg font-medium ${
                              formData.hasCnpj === option 
                                ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400' 
                                : 'border-slate-700 hover:border-slate-500 text-slate-300 hover:bg-white/5'
                            }`}
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {step === 4 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-lg mx-auto w-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Idades (preencha as idades de quem entrará no plano)
                      </h3>
                      <div className="space-y-6">
                        {!formData.isLargeCompany && (
                          <input 
                            required={!formData.isLargeCompany}
                            type="text" 
                            value={formData.ages}
                            onChange={e => setFormData({...formData, ages: e.target.value})}
                            className="w-full px-5 py-4 rounded-2xl bg-[#030712]/50 backdrop-blur-sm border border-slate-700 focus:bg-[#030712]/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white outline-none transition-all placeholder:text-slate-500 shadow-inner text-lg"
                            placeholder="Ex: 7, 29 e 32"
                          />
                        )}
                        
                        <label className="flex items-center gap-4 cursor-pointer group bg-slate-800/50 p-4 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all">
                          <div className="relative flex items-center justify-center shrink-0">
                            <input 
                              type="checkbox" 
                              checked={formData.isLargeCompany}
                              onChange={e => {
                                setFormData({...formData, isLargeCompany: e.target.checked, ages: ''})
                              }}
                              className="peer appearance-none w-6 h-6 rounded border-2 border-slate-500 checked:border-cyan-500 bg-[#030712] transition-all cursor-pointer"
                            />
                            <CheckCircle2 size={16} className="absolute text-cyan-500 opacity-0 peer-checked:opacity-100 transition-opacity" />
                          </div>
                          <span className="text-slate-300 group-hover:text-white transition-colors">
                            Empresa com mais de 10 colaboradores
                          </span>
                        </label>

                        <button 
                          type="button"
                          onClick={() => {
                            if (formData.isLargeCompany || formData.ages.trim() !== '') {
                              setStep(5);
                            }
                          }}
                          disabled={!formData.isLargeCompany && formData.ages.trim() === ''}
                          className="w-full bg-cyan-500 hover:bg-cyan-400 disabled:bg-slate-700 disabled:text-slate-500 text-slate-950 font-bold py-4 rounded-2xl transition-all flex items-center justify-center gap-2 text-lg disabled:cursor-not-allowed"
                        >
                          Avançar
                          <ArrowRight size={20} />
                        </button>
                      </div>
                    </div>
                  )}

                  {step === 5 && (
                    <div className="animate-in fade-in slide-in-from-right-8 duration-500 max-w-lg mx-auto w-full">
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                        Para finalizar, informe seus dados
                      </h3>
                      <div className="space-y-5 mb-8">
                        <div>
                          <label className="text-sm font-bold text-slate-300 ml-1 mb-2 block">Nome</label>
                          <input 
                            required
                            type="text" 
                            value={formData.name}
                            onChange={e => setFormData({...formData, name: e.target.value})}
                            className="w-full px-5 py-4 rounded-2xl bg-[#030712]/50 backdrop-blur-sm border border-slate-700 focus:bg-[#030712]/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white outline-none transition-all placeholder:text-slate-500 shadow-inner text-lg"
                            placeholder="Seu nome completo"
                          />
                        </div>
                        <div>
                          <label className="text-sm font-bold text-slate-300 ml-1 mb-2 block">Cidade</label>
                          <input 
                            required
                            type="text" 
                            value={formData.city}
                            onChange={e => setFormData({...formData, city: e.target.value})}
                            className="w-full px-5 py-4 rounded-2xl bg-[#030712]/50 backdrop-blur-sm border border-slate-700 focus:bg-[#030712]/80 focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 text-white outline-none transition-all placeholder:text-slate-500 shadow-inner text-lg"
                            placeholder="Sua cidade"
                          />
                        </div>
                      </div>

                      <button 
                        type="submit"
                        className="group w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold py-5 rounded-2xl shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all flex items-center justify-center gap-3 text-lg hover:scale-[1.02] active:scale-[0.98]"
                      >
                        <Send size={22} className="text-slate-900 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                        Receber Cotação
                      </button>
                    </div>
                  )}

                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

