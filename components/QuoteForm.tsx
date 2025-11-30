import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Plus, Trash2 } from 'lucide-react';

interface Dependent {
  id: number;
  age: string;
}

export const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    plan: '',
    type: '',
    titularAge: ''
  });

  const [dependents, setDependents] = useState<Dependent[]>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const addDependent = () => {
    setDependents([...dependents, { id: Date.now(), age: '' }]);
  };

  const removeDependent = (id: number) => {
    setDependents(dependents.filter(dep => dep.id !== id));
  };

  const handleDependentAgeChange = (id: number, age: string) => {
    setDependents(dependents.map(dep => dep.id === id ? { ...dep, age } : dep));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let dependentsText = "Nenhum dependente";
    if (dependents.length > 0) {
      dependentsText = dependents.map((dep, index) => `Dependente ${index + 1}: ${dep.age} anos`).join('\n');
    }

    const subject = `Nova Solicitação de Cotação - ${formData.name}`;
    const body = `
Nome: ${formData.name}
E-mail: ${formData.email}
Telefone: ${formData.phone}
Idade do Titular: ${formData.titularAge} anos
Plano de Interesse: ${formData.plan}
Tipo de Plano: ${formData.type}

Dependentes:
${dependentsText}

Enviado via site Unipam.
    `.trim();

    window.location.href = `mailto:gabrielacapra@unipamplanosdesaude.com.br?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-slate-100 to-white" id="quote">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-10 shadow-xl border border-white/50">
          
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-brand-blue mb-4">
              <Mail size={24} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Solicitar Cotação</h2>
            <p className="text-slate-500 mt-2">Preencha os dados abaixo e receba uma proposta.</p>
          </div>

          <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-5">
            {/* Input Class Note: 'text-base' is crucial for iOS to prevent auto-zoom on focus */}
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Nome Completo</label>
              <input 
                required 
                type="text" 
                name="name" 
                value={formData.name} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white/80 text-base"
                placeholder="Seu nome"
              />
            </div>
            
            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">E-mail</label>
              <input 
                required 
                type="email" 
                name="email" 
                value={formData.email} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white/80 text-base"
                placeholder="seu@email.com"
                inputMode="email"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Telefone / WhatsApp</label>
              <input 
                required 
                type="tel" 
                name="phone" 
                value={formData.phone} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white/80 text-base"
                placeholder="(41) 99999-9999"
                inputMode="tel"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Idade do Titular</label>
              <input 
                required 
                type="number" 
                name="titularAge" 
                value={formData.titularAge} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white/80 text-base"
                placeholder="Ex: 35"
                inputMode="numeric"
              />
            </div>

            <div className="col-span-2 md:col-span-1">
              <label className="block text-sm font-medium text-slate-700 mb-1.5">Plano de Saúde</label>
              <select 
                name="plan" 
                value={formData.plan} 
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white/80 text-base appearance-none"
              >
                <option value="">Selecione...</option>
                <option value="Unimed">Unimed</option>
                <option value="Hapvida">Hapvida</option>
                <option value="Nossa Saúde">Nossa Saúde</option>
                <option value="Paraná Clínicas">Paraná Clínicas</option>
                <option value="MedSênior">MedSênior</option>
                <option value="MedSul">MedSul</option>
              </select>
            </div>

            <div className="col-span-2 md:col-span-1">
                <label className="block text-sm font-medium text-slate-700 mb-1.5">Tipo</label>
                <select 
                    name="type" 
                    value={formData.type} 
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none transition-all bg-white/80 text-base appearance-none"
                >
                    <option value="">Selecione...</option>
                    <option value="Individual">Individual (PF)</option>
                    <option value="Familiar">Familiar</option>
                    <option value="Empresarial">Empresarial (PJ)</option>
                </select>
            </div>

            {/* Dependents Section */}
            <div className="col-span-2 mt-4 pt-4 border-t border-slate-200">
                <div className="flex items-center justify-between mb-3">
                    <label className="text-sm font-medium text-slate-700">Dependentes</label>
                    <button 
                        type="button" 
                        onClick={addDependent}
                        className="text-sm flex items-center gap-1 text-brand-blue font-bold p-2 hover:bg-blue-50 rounded-lg transition-colors"
                    >
                        <Plus size={18} /> Adicionar
                    </button>
                </div>
                
                <div className="space-y-3">
                    {dependents.length === 0 && (
                        <p className="text-sm text-slate-400 italic">Nenhum dependente adicionado.</p>
                    )}
                    {dependents.map((dep, index) => (
                        <div 
                            key={dep.id}
                            className="flex items-end gap-3"
                        >
                            <div className="flex-1">
                                <label className="block text-xs text-slate-500 mb-1">Idade Dependente {index + 1}</label>
                                <input 
                                    type="number" 
                                    value={dep.age}
                                    onChange={(e) => handleDependentAgeChange(dep.id, e.target.value)}
                                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 focus:border-brand-blue focus:ring-2 focus:ring-blue-100 outline-none bg-white/80 text-base"
                                    placeholder="Ex: 10"
                                    required
                                    inputMode="numeric"
                                />
                            </div>
                            <button 
                                type="button"
                                onClick={() => removeDependent(dep.id)}
                                className="mb-1 p-3 text-red-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors min-w-[48px] min-h-[48px] flex items-center justify-center"
                                title="Remover"
                            >
                                <Trash2 size={20} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <div className="col-span-2 mt-6">
              <button
                type="submit"
                className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all active:scale-95 text-lg"
              >
                <Send size={20} />
                Enviar Solicitação
              </button>
            </div>

          </form>
        </div>
      </div>
    </section>
  );
};