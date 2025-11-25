import React from 'react';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import UseCases from './components/UseCases';
import TechSpecs from './components/TechSpecs';
import { Radio } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="bg-gray-950 text-white min-h-screen font-sans selection:bg-cyan-500 selection:text-black">
      <nav className="fixed top-0 w-full z-50 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2 font-mono">
            <Radio className="text-cyan-500 animate-pulse" size={24} />
            <div className="flex flex-col leading-none">
              <span>ILMU TELEKOMUNIKASI</span>
              <span className="text-[10px] text-cyan-500 tracking-widest">UIN SALATIGA</span>
            </div>
          </div>
          <div className="hidden md:block text-xs font-mono text-gray-500">
            Materi Pembelajaran: Wireless Communication
          </div>
        </div>
      </nav>

      <main>
        <Hero />
        <HowItWorks />
        <TechSpecs />
        <UseCases />
      </main>

      <footer className="py-12 border-t border-gray-800 relative overflow-hidden bg-black">
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 font-mono">
            UIN SALATIGA
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-sm">
            Website ini dibuat sebagai media presentasi interaktif untuk memahami cara kerja Near Field Communication (NFC) dalam mata kuliah Ilmu Telekomunikasi.
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-800 bg-gray-900 text-gray-500 text-xs font-mono">
            <span>Created for Educational Purpose</span>
            <span className="w-1 h-1 rounded-full bg-gray-600"></span>
            <span>2024</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;