
import React, { useState } from 'react';
import { generatePosterConcept } from '../services/geminiService';
import { Sparkles, Loader2, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const AIGenerator: React.FC = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input.trim()) return;
    
    setLoading(true);
    setResult('');
    
    // Aesthetic delay for "thinking" feel
    await new Promise(r => setTimeout(r, 800));
    
    const concept = await generatePosterConcept(input);
    setResult(concept);
    setLoading(false);
  };

  return (
    <section className="py-24 bg-gray-900/50 relative border-t border-gray-800">
      {/* Background decoration */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-purple-900/10 to-transparent pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Left Side: Input */}
          <div className="flex-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 text-sm font-medium mb-6">
              <Sparkles size={14} />
              AI POWERED CREATIVITY
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Bingung Mau Bikin Apa? <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Tanya AI Aja.</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 leading-relaxed">
              Kasih tau kami bisnis atau project kamu, dan AI kami bakal meracik konsep Smart Poster paling gila yang cocok buat kamu. Gratis, sekarang juga.
            </p>

            <div className="bg-gray-800 p-2 rounded-2xl border border-gray-700 shadow-xl flex flex-col sm:flex-row gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Contoh: Toko Kopi, Band Rock, Jasa Laundry..."
                className="flex-1 bg-transparent text-white px-6 py-4 outline-none placeholder:text-gray-500"
                onKeyDown={(e) => e.key === 'Enter' && handleGenerate()}
              />
              <button 
                onClick={handleGenerate}
                disabled={loading || !input}
                className="bg-purple-600 hover:bg-purple-500 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-4 rounded-xl font-bold transition-colors flex items-center justify-center gap-2 min-w-[160px]"
              >
                {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={18} /> Generate</>}
              </button>
            </div>
          </div>

          {/* Right Side: Output */}
          <div className="flex-1 w-full">
            <div className="bg-black/40 backdrop-blur-xl border border-gray-700/50 rounded-3xl p-8 min-h-[400px] flex flex-col relative overflow-hidden">
              
              {!result && !loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-gray-600 text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mb-4">
                    <Send size={24} className="opacity-50" />
                  </div>
                  <p>Menunggu perintah...</p>
                  <p className="text-sm opacity-50 mt-2">Ketik bisnis kamu di sebelah kiri</p>
                </div>
              )}

              {loading && (
                <div className="flex-1 flex flex-col items-center justify-center text-purple-400">
                  <Loader2 size={40} className="animate-spin mb-4" />
                  <p className="animate-pulse">Sedang meracik ide masa depan...</p>
                </div>
              )}

              <AnimatePresence mode="wait">
                {result && !loading && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="prose prose-invert max-w-none"
                  >
                    <div className="absolute top-0 right-0 p-4 opacity-10">
                      <Sparkles size={100} />
                    </div>
                    
                    <h3 className="text-xl font-bold text-purple-400 mb-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      KONSEP TERGENERASI
                    </h3>
                    
                    <div className="space-y-6 text-gray-200 whitespace-pre-wrap leading-relaxed font-light">
                      {result.split('\n').map((line, i) => {
                        // Simple formatting parser
                        if (line.includes('**')) {
                          const parts = line.split('**');
                          return (
                            <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                              <span className="text-cyan-400 font-bold uppercase tracking-wider text-sm block mb-1">
                                {parts[1]}
                              </span>
                              <span>{parts[2]}</span>
                            </div>
                          );
                        }
                        return <p key={i}>{line}</p>;
                      })}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIGenerator;
