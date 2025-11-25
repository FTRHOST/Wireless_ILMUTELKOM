
import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Zap, BookOpen, Settings } from 'lucide-react';

const Hero: React.FC = () => {
  const controls = useAnimation();

  useEffect(() => {
    // Simulate the infinite tapping loop
    const sequence = async () => {
      while (true) {
        // Move phone to poster
        await controls.start({
          y: 0,
          scale: 1,
          rotate: 0,
          opacity: 1,
          transition: { duration: 1.2, type: "spring", stiffness: 50 }
        });
        // Tap effect (Flash)
        await new Promise(r => setTimeout(r, 800));
        
        // Move away
        await controls.start({
          y: 80,
          opacity: 0,
          transition: { duration: 0.8, ease: "easeInOut" }
        });
        
        await new Promise(r => setTimeout(r, 200));
      }
    };
    sequence();
  }, [controls]);

  const scrollToContent = () => {
    const element = document.getElementById('how-it-works');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Dynamic Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-900/20 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-6 text-center z-10 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <div className="inline-block mb-6">
            <span className="py-2 px-4 rounded-full border border-cyan-500/30 bg-cyan-950/30 text-cyan-300 text-xs md:text-sm font-bold tracking-[0.2em] uppercase backdrop-blur-md font-mono">
              Wireless Communication Technology
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight tracking-tight">
            Memahami Teknologi <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-blue-500 animate-gradient-x">
              NFC & Smart Poster
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Near Field Communication (NFC) adalah protokol komunikasi jarak pendek yang memungkinkan pertukaran data antara dua perangkat elektronik. Mari pelajari bagaimana gelombang radio 13.56 MHz bekerja.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center w-full">
             <button 
               onClick={scrollToContent}
               className="w-full md:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2"
             >
               <BookOpen size={20} />
               Mulai Belajar
             </button>
             <button 
               onClick={() => document.getElementById('tech-specs')?.scrollIntoView({behavior: 'smooth'})}
               className="w-full md:w-auto px-8 py-4 border border-gray-700 bg-gray-900/50 backdrop-blur-sm rounded-full text-white hover:bg-gray-800 hover:border-gray-500 transition-all duration-200 flex items-center justify-center gap-2"
             >
               <Settings size={20} className="text-cyan-400" />
               Lihat Spesifikasi Teknis
             </button>
          </div>
        </motion.div>

        {/* Visual Simulation Area */}
        <div className="mt-20 relative h-[450px] w-full max-w-[500px] mx-auto perspective-1000">
          
          {/* The Poster */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-[420px] bg-gray-900 border border-gray-800 rounded-xl shadow-2xl flex flex-col p-2 transform rotate-x-10 shadow-cyan-900/50">
             {/* Poster Content */}
             <div className="w-full h-full bg-gradient-to-br from-gray-800 to-black rounded-lg overflow-hidden relative group">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] bg-[position:-100%_0,0_0] repeat-no-repeat transition-[background-position_0s_ease]"></div>
                
                <div className="relative z-10 h-full flex flex-col justify-between p-6 border border-white/5 m-2 rounded">
                   <div className="flex justify-between items-start">
                     <div className="text-[10px] font-mono text-cyan-500 border border-cyan-500/50 px-2 py-1 rounded">NFC TAG INSIDE</div>
                   </div>
                   
                   <div className="text-center space-y-2">
                     <div className="text-4xl font-bold text-white tracking-widest">TECH<br/>DEMO</div>
                     <div className="text-xs text-gray-500 font-mono">13.56 MHz FREQUENCY</div>
                   </div>
                   
                   <div className="flex justify-center">
                     <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 backdrop-blur-sm animate-pulse">
                        <Zap className="text-cyan-400" size={24} />
                     </div>
                   </div>
                </div>
             </div>
          </div>

          {/* The Phone */}
          <motion.div 
            animate={controls}
            className="absolute left-1/2 top-[60%] -translate-x-1/2 w-44 h-80 bg-black border-[6px] border-gray-800 rounded-[2.5rem] shadow-2xl z-20 flex flex-col items-center overflow-hidden"
            style={{ boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}
          >
             {/* Notch */}
             <div className="w-24 h-6 bg-black rounded-b-xl absolute top-0 z-30"></div>
             
             {/* Screen Content */}
             <div className="w-full h-full bg-gray-900 relative">
                {/* Idle Screen */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-50">
                   <div className="text-4xl text-gray-800 font-bold mb-2 font-mono">SCAN</div>
                   <div className="text-[10px] text-gray-600 font-mono text-center px-4">Ready to read NDEF message</div>
                </div>

                {/* Active Screen (Triggered) */}
                <motion.div 
                  className="absolute inset-0 bg-white flex flex-col items-center justify-center p-4 text-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 0, 1, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, times: [0, 0.45, 0.5, 0.9, 1] }}
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-blue-200">
                    <Zap className="text-white" size={24} fill="white" />
                  </div>
                  <h3 className="text-black font-bold text-lg leading-tight mb-1">Tag Detected</h3>
                  <p className="text-gray-500 text-[10px] font-mono border bg-gray-100 px-2 py-1 rounded">Payload: 24 bytes</p>
                  
                  {/* Browser simulation */}
                  <div className="mt-4 w-full h-24 bg-gray-100 rounded-lg overflow-hidden border border-gray-200 shadow-sm p-2 flex flex-col justify-center items-center gap-2">
                     <div className="text-xs text-blue-600 underline">https://edu.nfc-lab.com</div>
                     <div className="text-[10px] text-gray-400">Opening browser...</div>
                  </div>
                </motion.div>
             </div>
          </motion.div>
        </div>
        
        <div id="how-it-works" className="absolute bottom-10"></div>
      </div>
    </section>
  );
};

export default Hero;
