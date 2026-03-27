import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Send } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    hasCnpj: '',
    ages: '',
    hasPlan: '',
    operators: [] as string[]
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const operatorsList = [
    'Hapvida', 'Unimed', 'MedSênior', 'Select', 'Amil', 'Paraná Clinicas', 'Todas'
  ];

  const handleOperatorChange = (operator: string) => {
    setFormData(prev => {
      if (operator === 'Todas') {
        if (prev.operators.includes('Todas')) {
          return { ...prev, operators: [] };
        } else {
          return { ...prev, operators: ['Todas'] };
        }
      }

      let newOperators = prev.operators.includes(operator)
        ? prev.operators.filter(op => op !== operator)
        : [...prev.operators.filter(op => op !== 'Todas'), operator];

      return { ...prev, operators: newOperators };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const body = `Nova Cotação Solicitada:
    
Nome: ${formData.name}
E-mail: ${formData.email}
WhatsApp: ${formData.whatsapp}
Possui CNPJ ou MEI: ${formData.hasCnpj}
Idades: ${formData.ages}
Já possui plano: ${formData.hasPlan}
Operadoras: ${formData.operators.join(', ')}`;

    window.location.href = `mailto:contato@unipamsaude.com?subject=Nova Cotação - ${formData.name}&body=${encodeURIComponent(body)}`;
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
              Preencha os dados abaixo e receba as melhores opções para você, sua família ou empresa.
            </p>
          </div>

          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center shadow-lg"
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
            </motion.div>
          ) : (
            <motion.form 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              onSubmit={handleSubmit}
              className="bg-slate-50 rounded-2xl p-6 md:p-10 shadow-xl border border-slate-100"
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
                  <label className="text-sm font-bold text-slate-700">E-mail *</label>
                  <input 
                    required
                    type="email" 
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">WhatsApp *</label>
                  <input 
                    required
                    type="tel" 
                    value={formData.whatsapp}
                    onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-brand-blue focus:border-brand-blue outline-none transition-all"
                    placeholder="(00) 00000-0000"
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

              <div className="mb-8">
                <label className="text-sm font-bold text-slate-700 block mb-3">Cotação para as operadoras: *</label>
                <div className="flex flex-wrap gap-3">
                  {operatorsList.map(op => (
                    <label 
                      key={op} 
                      className={`flex items-center gap-2 px-4 py-2 rounded-full border cursor-pointer transition-all ${
                        formData.operators.includes(op) 
                        ? 'bg-brand-blue text-white border-brand-blue' 
                        : 'bg-white text-slate-600 border-slate-200 hover:border-brand-blue'
                      }`}
                    >
                      <input 
                        type="checkbox" 
                        className="hidden"
                        checked={formData.operators.includes(op)}
                        onChange={() => handleOperatorChange(op)}
                      />
                      <span className="text-sm font-medium">{op}</span>
                    </label>
                  ))}
                </div>
                {formData.operators.length === 0 && (
                  <p className="text-xs text-red-500 mt-2">Selecione pelo menos uma operadora.</p>
                )}
              </div>

              <button 
                type="submit"
                disabled={formData.operators.length === 0}
                className="w-full bg-brand-blue hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={20} />
                Enviar Solicitação
              </button>
            </motion.form>
          )}
        </div>
      </div>
    </section>
  );
};