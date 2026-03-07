import React from 'react';
import { Send } from 'lucide-react';

export const QuoteForm: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-t from-slate-100 to-white" id="quote">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto glass-card rounded-2xl p-6 md:p-10 shadow-xl border border-white/50 text-center">
          
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Solicitar Cotação</h2>
            <p className="text-slate-500 mt-2">Fale com um de nossos especialistas pelo WhatsApp e receba uma proposta personalizada.</p>
          </div>

          <a
            href="https://wa.me/554197217117"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full bg-brand-blue text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 flex items-center justify-center gap-2 transition-all active:scale-95 text-lg"
          >
            <Send size={20} />
            Chamar no WhatsApp
          </a>

        </div>
      </div>
    </section>
  );
};