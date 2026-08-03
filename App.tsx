import React from 'react';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <div className="relative z-10 w-full flex flex-col justify-between min-h-screen">
        <QuoteForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
