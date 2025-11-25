
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { Cpu, Radio, Code2, Database, Zap, Info, ArrowRightLeft } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'physics' | 'protocol' | 'comparison'>('physics');

  // --- Physics Simulation Logic ---
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  // Connection Steps: 0: Idle, 1: Induction (Chip Glow), 2: Load Modulation (Data Sent), 3: Success (Browser)
  const [connectionStep, setConnectionStep] = useState(0); 
  
  const x = useMotionValue(0);
  const controls = useAnimation();
  
  // Transform x value to opacity/intensity of the field
  const fieldOpacity = useTransform(x, [0, 50, 150], [0, 0.5, 1]);
  const fieldScale = useTransform(x, [0, 150], [0.8, 1.2]);

  // Manage Sequence
  useEffect(() => {
    let t1: ReturnType<typeof setTimeout>;
    let t2: ReturnType<typeof setTimeout>;
    
    if (isConnected) {
      // Step 1: Induction (Immediate)
      setConnectionStep(1);
      
      // Step 2: Load Modulation (Data travels back to phone after 400ms)
      t1 = setTimeout(() => setConnectionStep(2), 400);
      
      // Step 3: Processing & Browser Open (after 1500ms total)
      t2 = setTimeout(() => setConnectionStep(3), 1500);
    } else {
      setConnectionStep(0);
    }
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [isConnected]);

  const handleDrag = (_event: any, info: any) => {
    const threshold = 120; // px
    if (info.point.x > 0 && info.offset.x > threshold) {
      if (!isConnected) setIsConnected(true);
    } else {
      if (isConnected) setIsConnected(false);
    }
  };

  const handleDragEnd = (_event: any, _info: any) => {
    setIsConnected(false);
    controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } });
  };
  // --------------------------------

  return (
    <section id="tech-specs" className="py-24 bg-[#0a0a0a] relative border-t border-gray-900 overflow-hidden">
      {/* Background Grid for "Technical" feel */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/20 border border-cyan-500/30 text-cyan-400 text-xs font-mono mb-4">
            <Code2 size={12} />
            <span>FOR IT STUDENTS & DEVS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-mono tracking-tight">
            Under The <span className="text-cyan-500">&lt;Hood /&gt;</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Bedah teknologi di balik "Magic". Dari Induksi Elektromagnetik hingga perbandingan dengan protokol nirkabel lainnya.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Controls / Menu */}
          <div className="w-full lg:w-1/3 space-y-4">
             <button 
               onClick={() => setActiveTab('physics')}
               className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${activeTab === 'physics' ? 'bg-cyan-950/30 border-cyan-500/50' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}
             >
                <div className="flex items-start gap-4 relative z-10">
                   <div className={`p-3 rounded-lg ${activeTab === 'physics' ? 'bg-cyan-500 text-black' : 'bg-gray-800 text-gray-400'}`}>
                      <Zap size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-1">Layer 1: Physics Simulator</h3>
                      <p className="text-sm text-gray-400">Induction & Load Modulation.</p>
                   </div>
                </div>
                {activeTab === 'physics' && <motion.div layoutId="highlight" className="absolute inset-0 bg-cyan-500/5" />}
             </button>

             <button 
               onClick={() => setActiveTab('protocol')}
               className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${activeTab === 'protocol' ? 'bg-purple-950/30 border-purple-500/50' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}
             >
                <div className="flex items-start gap-4 relative z-10">
                   <div className={`p-3 rounded-lg ${activeTab === 'protocol' ? 'bg-purple-500 text-white' : 'bg-gray-800 text-gray-400'}`}>
                      <Database size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-1">Layer 2: Protocol</h3>
                      <p className="text-sm text-gray-400">NDEF Payload & Handshake.</p>
                   </div>
                </div>
                {activeTab === 'protocol' && <motion.div layoutId="highlight" className="absolute inset-0 bg-purple-500/5" />}
             </button>

             <button 
               onClick={() => setActiveTab('comparison')}
               className={`w-full text-left p-6 rounded-xl border transition-all duration-300 relative overflow-hidden group ${activeTab === 'comparison' ? 'bg-green-950/30 border-green-500/50' : 'bg-gray-900 border-gray-800 hover:border-gray-700'}`}
             >
                <div className="flex items-start gap-4 relative z-10">
                   <div className={`p-3 rounded-lg ${activeTab === 'comparison' ? 'bg-green-500 text-black' : 'bg-gray-800 text-gray-400'}`}>
                      <ArrowRightLeft size={24} />
                   </div>
                   <div>
                      <h3 className="text-xl font-bold text-white mb-1">Layer 3: Comparison</h3>
                      <p className="text-sm text-gray-400">NFC vs Bluetooth vs WiFi.</p>
                   </div>
                </div>
                {activeTab === 'comparison' && <motion.div layoutId="highlight" className="absolute inset-0 bg-green-500/5" />}
             </button>

             {/* Tech Specs Stats */}
             <div className="bg-black/50 border border-gray-800 p-6 rounded-xl font-mono text-xs space-y-4 text-gray-400 mt-8">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Info size={14}/> HISTORY FACT</h4>
                  <p className="leading-relaxed">
                    NFC dikembangkan oleh <span className="text-cyan-400">Sony</span> & <span className="text-cyan-400">Philips</span> (2002).
                  </p>
                </div>
                <div className="w-full h-px bg-gray-800"></div>
                <div className="space-y-2">
                   <div className="flex justify-between"><span>Freq</span> <span className="text-cyan-400">13.56 MHz</span></div>
                   <div className="flex justify-between"><span>Standard</span> <span className="text-cyan-400">ISO 14443-A</span></div>
                </div>
             </div>
          </div>

          {/* Interactive Display Area */}
          <div className="w-full lg:w-2/3 h-[500px] md:h-[600px] bg-gray-900 rounded-2xl border border-gray-800 relative overflow-hidden shadow-2xl select-none" ref={constraintsRef}>
            
            {/* PHYSICS VISUALIZATION (SIMULATOR) */}
            {activeTab === 'physics' && (
              <motion.div 
                key="physics"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-start pl-4 md:pl-20"
              >
                 <div className="absolute top-4 left-4 text-xs font-mono text-cyan-500 bg-cyan-950/30 px-3 py-2 rounded border border-cyan-900 z-50 pointer-events-none">
                    <span className="animate-pulse">●</span> LAB: DRAG PHONE TO POSTER
                 </div>
                 
                 {/* 1. THE TARGET (POSTER) */}
                 <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 w-32 md:w-48 h-56 md:h-72 z-10">
                    <div className={`w-full h-full bg-gray-200 rounded-lg shadow-xl relative overflow-hidden transition-all duration-500 ${connectionStep >= 1 ? 'shadow-[0_0_60px_rgba(255,165,0,0.4)]' : ''}`}>
                       {/* Poster Art */}
                       <div className="absolute inset-0 p-3 flex flex-col items-center justify-between opacity-80">
                          <div className="w-full h-1/2 bg-gray-800 rounded"></div>
                          <div className="text-[10px] font-mono text-gray-500">SMART POSTER</div>
                       </div>
                       
                       {/* Chip & Loop Visual */}
                       <div className={`absolute inset-0 bg-black/90 flex flex-col items-center justify-center transition-opacity duration-300 ${connectionStep >= 1 ? 'opacity-90' : 'opacity-0'}`}>
                          <div className={`relative w-16 h-16 border-2 border-orange-500 rounded-lg flex items-center justify-center ${connectionStep >= 1 ? 'animate-pulse' : ''}`}>
                             <Cpu className="text-orange-500" size={24} />
                             {connectionStep >= 1 && (
                               <div className="absolute inset-0 bg-orange-500 blur-xl rounded-full opacity-40"></div>
                             )}
                          </div>
                          <div className="mt-4 text-orange-400 font-mono text-[10px] font-bold text-center">
                            {connectionStep === 1 && "POWERING UP..."}
                            {connectionStep === 2 && "SENDING DATA..."}
                            {connectionStep === 3 && "DATA SENT"}
                          </div>
                       </div>
                       
                       {/* DATA PARTICLES (Load Modulation) - Moving Left */}
                       <AnimatePresence>
                         {connectionStep === 2 && (
                           <div className="absolute inset-0 overflow-visible pointer-events-none">
                              {[...Array(5)].map((_, i) => (
                                <motion.div
                                  key={i}
                                  initial={{ x: 0, opacity: 1 }}
                                  animate={{ x: -200, opacity: 0 }}
                                  transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1, ease: "linear" }}
                                  className="absolute top-1/2 left-0 w-2 h-1 bg-white rounded-full shadow-[0_0_10px_white]"
                                />
                              ))}
                           </div>
                         )}
                       </AnimatePresence>
                    </div>
                 </div>

                 {/* 2. THE INITIATOR (PHONE) */}
                 <motion.div 
                   drag="x"
                   dragConstraints={constraintsRef}
                   dragElastic={0.1}
                   dragMomentum={false}
                   onDrag={handleDrag}
                   onDragEnd={handleDragEnd}
                   animate={controls}
                   style={{ x }}
                   whileHover={{ scale: 1.05 }}
                   whileTap={{ scale: 0.95, cursor: "grabbing" }}
                   className="relative z-20 cursor-grab active:cursor-grabbing flex items-center justify-center"
                 >
                    {/* Magnetic Field (Emitting from TOP of phone) */}
                    <motion.div 
                      className="absolute left-1/2 top-[20%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex items-center justify-center"
                      style={{ opacity: fieldOpacity, scale: fieldScale }}
                    >
                       {/* Concentric Circles radiating OUTWARDS */}
                       <div className="w-[300px] h-[300px] rounded-full border border-cyan-500/20 flex items-center justify-center animate-pulse">
                          <div className="w-[200px] h-[200px] rounded-full border border-cyan-500/30 flex items-center justify-center">
                             <div className="w-[100px] h-[100px] rounded-full border border-cyan-500/50 bg-cyan-500/5"></div>
                          </div>
                       </div>
                    </motion.div>

                    {/* Phone Body */}
                    <div className={`w-28 md:w-40 h-56 md:h-80 bg-gray-900 border-4 ${connectionStep === 3 ? 'border-green-500 shadow-[0_0_30px_rgba(34,211,238,0.2)]' : 'border-gray-700'} rounded-[1.5rem] md:rounded-[2rem] shadow-2xl relative overflow-hidden transition-all duration-300`}>
                       {/* Notch */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-4 bg-black rounded-b-lg z-20"></div>
                       
                       {/* Screen UI */}
                       <div className="w-full h-full bg-black flex flex-col relative font-sans">
                          
                          {/* Idle State */}
                          <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${connectionStep > 0 ? 'opacity-0' : 'opacity-100'}`}>
                             <div className="bg-gray-800 p-3 rounded-full mb-4 animate-pulse">
                                <Radio className="text-cyan-500" size={20} />
                             </div>
                             <div className="text-center">
                                <h4 className="text-white font-bold text-xs mb-1">SCANNING...</h4>
                                <p className="text-[9px] text-gray-500 leading-tight">Bring close to NFC Tag to read NDEF.</p>
                             </div>
                             
                             {/* Slide hint */}
                             <div className="absolute bottom-6 flex items-center gap-2 text-[9px] text-gray-600 border border-gray-800 rounded-full px-3 py-1 bg-gray-900">
                                <span className="animate-pulse">→</span> Slide to Scan
                             </div>
                          </div>

                          {/* Process State (Decoding) */}
                          <div className={`absolute inset-0 bg-gray-900 flex flex-col items-center justify-center p-4 transition-opacity duration-300 ${connectionStep > 0 && connectionStep < 3 ? 'opacity-100' : 'opacity-0'}`}>
                             <div className="font-mono text-[10px] text-green-400 space-y-1 w-full text-left font-bold opacity-80">
                                <div>&gt; DETECTING FIELD...</div>
                                {connectionStep >= 1 && <div>&gt; TAG_FOUND (ISO 14443-A)</div>}
                                {connectionStep >= 2 && <div>&gt; READING NDEF...</div>}
                             </div>
                          </div>

                          {/* Success State (Browser) */}
                          <div className={`absolute inset-0 bg-white transition-opacity duration-500 ${connectionStep === 3 ? 'opacity-100' : 'opacity-0'}`}>
                             {/* Fake Browser Header */}
                             <div className="h-8 bg-gray-100 border-b border-gray-300 flex items-center px-2 gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-400"></div>
                                <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                                <div className="w-2 h-2 rounded-full bg-green-400"></div>
                                <div className="flex-1 h-5 bg-white border border-gray-300 rounded ml-2 flex items-center px-2 text-[8px] text-gray-500">
                                   uin-salatiga.ac.id
                                </div>
                             </div>
                             {/* Content */}
                             <div className="p-4 flex flex-col items-center justify-center h-full text-black">
                                <div className="text-3xl font-bold text-cyan-600 mb-1">UIN</div>
                                <div className="text-[10px] tracking-widest text-gray-500 font-bold mb-4">SALATIGA</div>
                                <button className="px-3 py-1 bg-cyan-600 text-white text-[8px] rounded font-bold">
                                   VISIT WEBSITE
                                </button>
                             </div>
                          </div>
                       </div>
                    </div>
                 </motion.div>
              </motion.div>
            )}

            {/* PROTOCOL VISUALIZATION */}
            {activeTab === 'protocol' && (
              <motion.div 
                key="protocol"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 p-8 flex flex-col items-center justify-center font-mono text-xs overflow-y-auto"
              >
                 <div className="w-full max-w-lg space-y-4">
                    <div className="border border-gray-800 bg-black p-4 rounded-lg">
                       <h4 className="text-purple-400 mb-2 font-bold flex items-center gap-2"><Database size={14}/> NDEF Structure</h4>
                       <div className="space-y-2 text-gray-400">
                          <div className="flex"><span className="w-24 text-gray-600">Header:</span> <span>D1 (MB=1, ME=1, TNF=1)</span></div>
                          <div className="flex"><span className="w-24 text-gray-600">Type Len:</span> <span>01 (1 byte)</span></div>
                          <div className="flex"><span className="w-24 text-gray-600">Payload Len:</span> <span>16 (22 bytes)</span></div>
                          <div className="flex"><span className="w-24 text-gray-600">Type:</span> <span>U (URI)</span></div>
                          <div className="flex"><span className="w-24 text-gray-600">Payload:</span> <span className="text-green-500">uin-salatiga.ac.id</span></div>
                       </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                       <div className="border border-gray-800 bg-gray-900/50 p-4 rounded-lg">
                          <h4 className="text-white mb-2 font-bold">Active Mode</h4>
                          <p className="text-gray-500">Reader generates RF field. Target uses Load Modulation to reply.</p>
                       </div>
                       <div className="border border-gray-800 bg-gray-900/50 p-4 rounded-lg">
                          <h4 className="text-white mb-2 font-bold">Passive Mode</h4>
                          <p className="text-gray-500">Only Initiator generates RF field. Target is powered by field.</p>
                       </div>
                    </div>
                 </div>
              </motion.div>
            )}

            {/* COMPARISON TABLE */}
            {activeTab === 'comparison' && (
              <motion.div 
                 key="comparison"
                 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                 className="absolute inset-0 p-4 md:p-8 flex items-center justify-center"
              >
                 <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse font-mono text-xs md:text-sm">
                       <thead>
                          <tr className="border-b border-gray-800 text-gray-400">
                             <th className="py-4 px-2">Feature</th>
                             <th className="py-4 px-2 text-green-400">NFC</th>
                             <th className="py-4 px-2 text-blue-400">Bluetooth</th>
                             <th className="py-4 px-2 text-orange-400">Wi-Fi</th>
                          </tr>
                       </thead>
                       <tbody className="text-gray-300">
                          <tr className="border-b border-gray-800/50">
                             <td className="py-4 px-2 text-gray-500">Setup</td>
                             <td className="py-4 px-2 font-bold text-white">&lt; 0.1s (Instant)</td>
                             <td className="py-4 px-2">~6s (Pairing)</td>
                             <td className="py-4 px-2">Manual</td>
                          </tr>
                          <tr className="border-b border-gray-800/50">
                             <td className="py-4 px-2 text-gray-500">Range</td>
                             <td className="py-4 px-2 font-bold text-white">&lt; 10 cm</td>
                             <td className="py-4 px-2">~10 m</td>
                             <td className="py-4 px-2">~100 m</td>
                          </tr>
                          <tr className="border-b border-gray-800/50">
                             <td className="py-4 px-2 text-gray-500">Frequency</td>
                             <td className="py-4 px-2">13.56 MHz</td>
                             <td className="py-4 px-2">2.4 GHz</td>
                             <td className="py-4 px-2">2.4 / 5 GHz</td>
                          </tr>
                          <tr className="border-b border-gray-800/50">
                             <td className="py-4 px-2 text-gray-500">Use Case</td>
                             <td className="py-4 px-2">Payment, Access</td>
                             <td className="py-4 px-2">Audio, Peripherals</td>
                             <td className="py-4 px-2">Internet, Network</td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </motion.div>
            )}

          </div>
        </div>
      </div>
    </section>
  );
};

export default TechSpecs;
