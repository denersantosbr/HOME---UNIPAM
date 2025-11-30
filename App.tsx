import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { Services } from './components/Services';
import { About } from './components/About';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

// Force refresh key
const APP_VERSION = "2.1.0";

function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-brand-blue selection:text-white overflow-x-hidden">
      <Navbar />
      <main className="w-full">
        <Hero />
        {/* Componente Partners importado para limpar cache, mas retorna null (sem visual) */}
        <Partners />
        <Services />
        <About />
        <QuoteForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;