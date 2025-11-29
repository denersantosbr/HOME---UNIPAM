import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-blue selection:text-white">
      <Navbar />
      <main>
        <Hero />
        {/* Seção de Parceiros removida conforme solicitado */}
        <Services />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;