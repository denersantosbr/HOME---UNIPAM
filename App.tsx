import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Quotes } from './components/Quotes';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      <Hero />
      <Quotes />
      <QuoteForm />
      <Footer />
    </div>
  );
}

export default App;
