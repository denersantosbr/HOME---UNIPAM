import React from 'react';
import { QuoteForm } from './components/QuoteForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#030712] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Fixed Background Image for the entire page */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">
        <img 
          src="https://lh3.googleusercontent.com/d/1U9WT09ZFdnD8Qds8V-Nf_myDY2rHEGb2" 
          alt="Background" 
          className="w-full h-full object-cover opacity-[0.35] blur-[2px] transition-all duration-1000 animate-in fade-in" 
          style={{ objectPosition: 'center 15%' }}
        />
        {/* Dark gradient overlay to blend bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/80 to-transparent" />
      </div>

      <div className="relative z-10 w-full flex flex-col justify-between min-h-screen">
        <QuoteForm />
        <Footer />
      </div>
    </div>
  );
}

export default App;
