import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, MessageCircle, Plus, Minus } from 'lucide-react';

type PlanType = 'empresarial' | 'medsenior' | 'infantil' | 'familiar';

const pricingData = {
  empresarial: {
    title: "Hapvida Clinipam (CNPJ/MEI)",
    subtitle: "Mínimo 2 vidas",
    prices: [
      { range: "00 a 18 anos", price: 95.40 },
      { range: "19 a 23 anos", price: 106.85 },
      { range: "24 a 28 anos", price: 119.67 },
      { range: "29 a 33 anos", price: 137.62 },
      { range: "34 a 38 anos", price: 158.26 },
      { range: "39 a 43 anos", price: 188.33 },
    ]
  },
  medsenior: {
    title: "MedSênior Individual",
    subtitle: "Especializado na 3ª Idade",
    prices: [
      { range: "44 a 48 anos", price: 499.62 },
      { range: "49 a 53 anos", price: 499.62 },
      { range: "54 a 58 anos", price: 599.54 },
      { range: "59 anos ou +", price: 785.40 },
    ]
  },
  infantil: {
    title: "Planos Infantis",
    subtitle: "00 a 18 anos",
    prices: [
      { range: "Hapvida", price: 191.91 },
      { range: "Unimed", price: 327.88 },
    ]
  },
  familiar: {
    title: "Hapvida Clinipam Familiar",
    subtitle: "Sem CNPJ",
    prices: [
      { range: "00 a 18 anos", price: 191.91 },
      { range: "19 a 23 anos", price: 245.48 },
      { range: "24 a 28 anos", price: 278.61 },
      { range: "29 a 33 anos", price: 309.12 },
      { range: "34 a 38 anos", price: 323.35 },
      { range: "39 a 43 anos", price: 362.21 },
    ]
  }
};

export const PriceSimulator: React.FC = () => {
  const [selectedType, setSelectedType] = useState<PlanType>('empresarial');
  const [quantities, setQuantities] = useState<Record<string, number>>({});

  const handleTypeSelect = (type: PlanType) => {
    setSelectedType(type);
    setQuantities({});
  };

  const updateQuantity = (range: string, delta: number) => {
    setQuantities(prev => {
      const current = prev[range] || 0;
      const next = Math.max(0, current + delta);
      if (next === 0) {
        const { [range]: _, ...rest } = prev;
        return rest;
      }
      return { ...prev, [range]: next };
    });
  };

  const currentPlan = pricingData[selectedType];

  const totalValue = currentPlan.prices.reduce((acc, item) => {
    const qty = quantities[item.range] || 0;
    return acc + (item.price * qty);
  }, 0);

  const totalLives = Object.values(quantities).reduce((a, b) => a + b, 0);

  return (
    <section id="valores" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-10">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 text-brand-blue mb-4">
                  <Calculator size={24} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900">Simulador de Valores</h2>
                <p className="text-slate-600 mt-2">Adicione quantas pessoas desejar para calcular o total.</p>
            </div>

            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100">
                {/* Tabs */}
                <div className="flex overflow-x-auto no-scrollbar border-b border-slate-100">
                    {Object.entries(pricingData).map(([key, data]) => (
                        <button
                            key={key}
                            onClick={() => handleTypeSelect(key as PlanType)}
                            className={`flex-1 min-w-[120px] py-4 px-4 text-sm font-bold transition-colors relative whitespace-nowrap ${
                                selectedType === key 
                                ? 'text-brand-blue bg-blue-50/50' 
                                : 'text-slate-500 hover:bg-slate-50'
                            }`}
                        >
                            {key === 'empresarial' && 'Empresarial'}
                            {key === 'medsenior' && 'MedSênior'}
                            {key === 'infantil' && 'Infantil'}
                            {key === 'familiar' && 'Familiar'}
                            
                            {selectedType === key && (
                                <motion.div 
                                    layoutId="activeTab"
                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-blue"
                                />
                            )}
                        </button>
                    ))}
                </div>

                <div className="p-6 md:p-8">
                    <div className="mb-6 flex justify-between items-end">
                        <div>
                            <h3 className="text-xl font-bold text-slate-800">{currentPlan.title}</h3>
                            <p className="text-sm text-slate-500">{currentPlan.subtitle}</p>
                        </div>
                        {totalLives > 0 && (
                            <button 
                                onClick={() => setQuantities({})}
                                className="text-xs text-red-500 hover:text-red-700 font-medium underline"
                            >
                                Limpar tudo
                            </button>
                        )}
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
                        {currentPlan.prices.map((item, index) => {
                            const qty = quantities[item.range] || 0;
                            return (
                                <div
                                    key={index}
                                    className={`p-4 rounded-xl border transition-all ${
                                        qty > 0
                                        ? 'border-brand-blue bg-blue-50 ring-1 ring-brand-blue'
                                        : 'border-slate-200 bg-white'
                                    }`}
                                >
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <span className="block text-xs text-slate-500 font-medium mb-1">
                                                {item.range}
                                            </span>
                                            <span className="block text-lg font-bold text-slate-900">
                                                R$ {item.price.toFixed(2).replace('.', ',')}
                                            </span>
                                        </div>
                                        {qty > 0 && (
                                            <span className="bg-brand-blue text-white text-xs font-bold px-2 py-1 rounded-full">
                                                {qty}x
                                            </span>
                                        )}
                                    </div>
                                    
                                    <div className="flex items-center justify-between bg-slate-100 rounded-lg p-1">
                                        <button
                                            onClick={() => updateQuantity(item.range, -1)}
                                            disabled={qty === 0}
                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-white text-slate-600 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-50 active:scale-95 transition-all"
                                            aria-label="Diminuir quantidade"
                                        >
                                            <Minus size={16} />
                                        </button>
                                        <span className="font-bold text-slate-700 w-8 text-center">
                                            {qty}
                                        </span>
                                        <button
                                            onClick={() => updateQuantity(item.range, 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-md bg-brand-blue text-white shadow-sm hover:bg-blue-600 active:scale-95 transition-all"
                                            aria-label="Aumentar quantidade"
                                        >
                                            <Plus size={16} />
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Result Display */}
                    <div className="bg-slate-900 rounded-xl p-6 text-white text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <p className="text-slate-400 text-sm mb-1">
                                Total Estimado ({totalLives} {totalLives === 1 ? 'vida' : 'vidas'})
                            </p>
                            <div className="text-4xl font-bold mb-2">
                                R$ {totalValue.toFixed(2).replace('.', ',')}
                            </div>
                            <p className="text-xs text-slate-500">
                                *Valores sujeitos a alteração sem aviso prévio.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Footer */}
            <div className="mt-8 text-center">
                <p className="text-slate-600 mb-4">
                    Não encontrou o que procurava? Temos outras opções de operadoras e planos.
                </p>
                <a 
                    href="https://wa.me/554197217117" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-1 w-full md:w-auto"
                >
                    <MessageCircle size={20} />
                    Falar com Consultor
                </a>
            </div>
        </div>
      </div>
    </section>
  );
};
