
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useAnimation } from 'framer-motion';
import { Cpu, Radio, Code2, Database, Wifi, Bluetooth, Zap, Info, ArrowRightLeft, Globe, Lock, Smartphone, ArrowRight } from 'lucide-react';

const TechSpecs: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'physics' | 'protocol' | 'comparison'>('physics');

  // --- Physics Simulation Logic ---
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [isConnected, setIsConnected] = useState(false);
  const x = useMotionValue(0);
  const controls = useAnimation();
  
  // Transform x value to opacity/intensity of the field
  const fieldOpacity = useTransform(x, [0, 150, 250], [0, 0.2, 1]);
  const fieldScale = useTransform(x, [0, 250], [0.8, 1.5]);

  const handleDrag = (event: any, info: any) => {
    // Assuming the poster is to the right. 
    // Container width is approx 600-800px.
    // Let's say connection happens > 200px drag distance
    if (info.point.x > 0 && info.offset.x > 180) {
      if (!isConnected) {
        setIsConnected(true);
      }
    } else {
      if (isConnected) {
        setIsConnected(false);
      }
    }
  };

  const handleDragEnd = (event: any, info: any) => {
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
                      <p className="text-sm text-gray-400">Coba sendiri: Geser HP ke Poster.</p>
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

             {/* Tech Specs Stats & History */}
             <div className="bg-black/50 border border-gray-800 p-6 rounded-xl font-mono text-xs space-y-4 text-gray-400 mt-8">
                <div>
                  <h4 className="text-white font-bold mb-2 flex items-center gap-2"><Info size={14}/> HISTORY FACT</h4>
                  <p className="leading-relaxed">
                    NFC dikembangkan oleh kolaborasi <span className="text-cyan-400">Sony</span> & <span className="text-cyan-400">Philips Semiconductors</span> pada tahun 2002.
                  </p>
                </div>
                <div className="w-full h-px bg-gray-800"></div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Standard</span>
                    <span className="text-cyan-400">ISO/IEC 14443-A</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Op. Mode</span>
                    <span className="text-cyan-400">Passive / Active</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Range</span>
                    <span className="text-cyan-400">&lt; 10 cm (Touch)</span>
                  </div>
                </div>
             </div>
          </div>

          {/* Interactive Display Area */}
          <div className="w-full lg:w-2/3 h-[600px] bg-gray-950 rounded-2xl border border-gray-800 relative overflow-hidden shadow-2xl select-none" ref={constraintsRef}>
            
            {/* PHYSICS VISUALIZATION (SIMULATOR) */}
            {activeTab === 'physics' && (
              <motion.div 
                key="physics"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 flex items-center justify-start pl-10 md:pl-20"
              >
                 <div className="absolute top-4 left-4 text-xs font-mono text-cyan-500 bg-cyan-950/30 px-3 py-2 rounded border border-cyan-900 z-50 pointer-events-none">
                    <span className="animate-pulse">●</span> INTERACTIVE LAB: DRAG PHONE TO POSTER
                 </div>
                 
                 {/* 1. THE TARGET (POSTER) - Fixed Position Right */}
                 <div className="absolute right-10 md:right-20 top-1/2 -translate-y-1/2 w-48 h-72 z-10 transition-all duration-300">
                    {/* Poster Visual */}
                    <div className={`w-full h-full bg-gray-200 rounded-lg shadow-xl relative overflow-hidden transition-all duration-500 ${isConnected ? 'shadow-[0_0_50px_rgba(34,211,238,0.3)]' : ''}`}>
                       {/* Poster Art */}
                       <div className="absolute inset-0 p-4 flex flex-col items-center justify-between opacity-80">
                          <div className="w-full h-32 bg-gray-800 rounded mb-2"></div>
                          <div className="space-y-2 w-full">
                             <div className="h-4 bg-gray-800 rounded w-3/4"></div>
                             <div className="h-4 bg-gray-800 rounded w-1/2"></div>
                          </div>
                          <div className="text-[10px] font-mono text-gray-500">SMART POSTER V1</div>
                       </div>
                       
                       {/* X-Ray Chip View (Shows when connected/close) */}
                       <div className={`absolute inset-0 bg-black/90 flex flex-col items-center justify-center transition-opacity duration-300 ${isConnected ? 'opacity-80' : 'opacity-0'}`}>
                          <div className={`w-16 h-16 border-2 border-orange-500 rounded-lg flex items-center justify-center relative ${isConnected ? 'animate-pulse' : ''}`}>
                             <Cpu className="text-orange-500" size={32} />
                             {isConnected && (
                               <motion.div 
                                 className="absolute inset-0 bg-orange-500 blur-xl rounded-full"
                                 initial={{ opacity: 0 }} animate={{ opacity: 0.5 }} exit={{ opacity: 0 }}
                               />
                             )}
                          </div>
                          <div className="mt-4 text-orange-400 font-mono text-xs font-bold text-center">
                            CHIP INDUCED<br/>DATA SENT
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* 2. THE INITIATOR (PHONE) - Draggable */}
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
                   className="relative z-20 cursor-grab active:cursor-grabbing"
                 >
                    {/* Magnetic Field Visual */}
                    <motion.div 
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                      style={{ opacity: fieldOpacity, scale: fieldScale }}
                    >
                       <div className="w-[400px] h-[400px] rounded-full border border-cyan-500/30 flex items-center justify-center">
                          <div className="w-[300px] h-[300px] rounded-full border border-cyan-500/40 flex items-center justify-center">
                             <div className="w-[200px] h-[200px] rounded-full border border-cyan-500/50 bg-cyan-500/5"></div>
                          </div>
                       </div>
                    </motion.div>

                    {/* Phone Body */}
                    <div className={`w-40 h-80 bg-gray-900 border-4 ${isConnected ? 'border-cyan-500 shadow-[0_0_30px_rgba(34,211,238,0.2)]' : 'border-gray-700'} rounded-[2rem] shadow-2xl relative overflow-hidden transition-all duration-300`}>
                       {/* Notch */}
                       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-black rounded-b-xl z-20"></div>
                       
                       {/* Screen */}
                       <div className="w-full h-full bg-black flex flex-col relative font-sans">
                          
                          {/* State 1: Default / Dragging */}
                          <div className={`absolute inset-0 flex flex-col items-center justify-center p-5 transition-opacity duration-300 ${isConnected ? 'opacity-0' : 'opacity-100'}`}>
                             <div className="relative mb-6">
                                <div className="absolute inset-0 bg-cyan-500/20 rounded-full animate-ping"></div>
                                <div className="relative bg-gray-800 p-3 rounded-full border border-gray-700">
                                    <Radio className="text-cyan-500" size={20} />
                                </div>
                             </div>
                             
                             <div className="space-y-1 text-center mb-6">
                                <h4 className="text-white font-bold text-sm tracking-wide">NFC ACTIVE</h4>
                                <p className="text-gray-500 text-[10px] font-mono leading-tight">
                                    Bring device close<br/>to poster tag
                                </p>
                             </div>

                             <div className="flex items-center gap-2 text-[9px] text-gray-400 bg-gray-900 border border-gray-800 px-3 py-1.5 rounded-full">
                                <span>Slide to Scan</span>
                                <ArrowRight size={10} className="animate-pulse" />
                             </div>
                          </div>

                          {/* State 2: Connected / Success */}
                          <div className={`absolute inset-0 bg-white flex flex-col transition-opacity duration-300 ${isConnected ? 'opacity-100' : 'opacity-0'}`}>
                             {/* Browser Bar */}
                             <div className="h-8 bg-gray-50 border-b flex items-center px-3 gap-2 shrink-0 pt-1">
                                <div className="w-full h-5 bg-gray-200/50 rounded-full flex items-center px-2 gap-1.5">
                                   <Lock size={8} className="text-green-600" />
                                   <span className="text-[8px] text-gray-500 font-medium">uin-salatiga.ac.id/promo</span>
                                </div>
                             </div>
                             
                             {/* Web Content */}
                             <div className="flex-1 overflow-hidden relative bg-gray-50">
                                {/* Hero Section */}
                                <div className="bg-gradient-to-br from-blue-600 to-blue-800 p-4 pb-6 rounded-b-[1.5rem] shadow-sm relative z-10">
                                    <div className="flex justify-between items-center mb-3 opacity-50">
                                        <div className="w-3 h-3 bg-white rounded-full"></div>
                                        <div className="w-3 h-1.5 bg-white rounded-full"></div>
                                    </div>
                                    <h5 className="text-white text-lg font-bold leading-tight mb-1">UIN<br/>SALATIGA</h5>
                                    <p className="text-blue-200 text-[8px]">Smart Campus Future</p>
                                </div>
                                
                                {/* Body Content */}
                                <div className="p-3 space-y-2 relative z-0 -mt-2 pt-4">
                                    <div className="flex gap-2">
                                        <div className="flex-1 h-10 bg-white rounded-lg shadow-sm"></div>
                                        <div className="flex-1 h-10 bg-white rounded-lg shadow-sm"></div>
                                    </div>
                                    <div className="h-16 bg-white rounded-lg shadow-sm w-full p-2 flex gap-2 items-center">
                                       <div className="w-8 h-8 bg-gray-100 rounded-full"></div>
                                       <div className="flex-1 space-y-1">
                                          <div className="h-1.5 bg-gray-100 rounded w-full"></div>
                                          <div className="h-1.5 bg-gray-100 rounded w-2/3"></div>
                                       </div>
                                    </div>
                                </div>
                             </div>
                          </div>
                          
                       </div>
                    </div>
                 </motion.div>

                 {/* Instructions Helper */}
                 {!isConnected && (
                   <div className="absolute bottom-10 left-10 md:left-20 text-gray-500 text-xs font-mono animate-bounce opacity-50">
                     &larr; Drag Phone &rarr;
                   </div>
                 )}
              </motion.div>
            )}

            {/* PROTOCOL VISUALIZATION */}
            {activeTab === 'protocol' && (
              <motion.div 
                key="protocol"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-[#1e1e1e] font-mono text-xs p-6 overflow-hidden flex flex-col"
              >
                 <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-2">
                    <div className="flex gap-2">
                       <div className="w-3 h-3 rounded-full bg-red-500"></div>
                       <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                       <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <span className="text-gray-500">terminal@nfc-reader:~</span>
                 </div>

                 <div className="space-y-2 text-green-400 flex-1 overflow-y-auto custom-scrollbar">
                    <p><span className="text-blue-400">root@android</span>:~$ nfc-poll</p>
                    <p className="opacity-70">ISO/IEC 14443A (106 kbps) target:</p>
                    <p className="pl-4">UID (NFCID1): <span className="text-yellow-400">04:85:2A:E3:44:11:90</span></p>
                    <p className="pl-4">ATQA: 00 04</p>
                    <p className="pl-4">SAK: 08</p>
                    
                    <div className="my-4 border-t border-dashed border-gray-700"></div>
                    
                    <p><span className="text-blue-400">root@android</span>:~$ read-ndef</p>
                    <p className="text-purple-400">{'>'} Connecting to Tag...</p>
                    <p className="text-purple-400">{'>'} Selecting Application (NDEF Tag Application)... OK</p>
                    <p className="text-purple-400">{'>'} Reading Capability Container... OK</p>
                    <p className="text-purple-400">{'>'} Reading NDEF Message...</p>
                    
                    <div className="bg-black/50 p-4 rounded border border-gray-700 mt-2">
                       <p className="text-gray-500 mb-2">RAW HEX DUMP:</p>
                       <p className="tracking-widest text-gray-300">D1 01 15 55 04 67 6F 6F 67 6C 65 2E 63 6F 6D ...</p>
                       
                       <p className="text-gray-500 mt-4 mb-2">PARSED NDEF RECORD:</p>
                       <p><span className="text-pink-500">TNF:</span> 0x01 (Well-Known)</p>
                       <p><span className="text-pink-500">Type:</span> "U" (NFC Forum URI Record)</p>
                       <p><span className="text-pink-500">Payload:</span> "https://uin-salatiga.ac.id"</p>
                    </div>

                    <p className="animate-pulse mt-4 cursor-block">_</p>
                 </div>
                 
                 <div className="mt-4 bg-gray-800 p-3 rounded text-gray-300 text-center text-xs">
                    Format data menggunakan <strong>NDEF (NFC Data Exchange Format)</strong>. Ini adalah bahasa universal biar HP Android & iOS ngerti kalau poster ini isinya URL, bukan Text biasa atau VCard.
                 </div>
              </motion.div>
            )}

            {/* COMPARISON VISUALIZATION */}
            {activeTab === 'comparison' && (
              <motion.div 
                key="comparison"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gray-900 p-8 overflow-y-auto custom-scrollbar"
              >
                 <div className="mb-8 p-4 bg-gray-800/50 rounded-xl border border-gray-700">
                    <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                      <span className="text-xl">📐</span> Rumus Gelombang
                    </h3>
                    <div className="flex items-center gap-4 text-sm md:text-base font-mono bg-black/40 p-3 rounded-lg border border-gray-800">
                       <span className="text-cyan-400 font-bold">f = c / λ</span>
                       <span className="text-gray-500">|</span>
                       <div className="flex flex-col text-xs text-gray-400">
                          <span>f = Frekuensi</span>
                          <span>c = Kecepatan Cahaya</span>
                          <span>λ = Panjang Gelombang</span>
                       </div>
                    </div>
                    <p className="text-xs text-gray-400 mt-2 leading-relaxed">
                       Karena NFC menggunakan frekuensi rendah (13.56 MHz), panjang gelombangnya sangat panjang (sekitar 22 meter). Namun, karena kita beroperasi di "Near Field" (&lt; 10cm), kita bermain dengan induksi magnetik, bukan gelombang radio yang merambat jauh seperti WiFi (2.4 GHz).
                    </p>
                 </div>

                 <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* NFC Card */}
                    <div className="bg-gray-800 border-2 border-cyan-500/50 rounded-xl p-5 relative overflow-hidden group">
                       <div className="absolute top-0 right-0 p-2 bg-cyan-500 text-black font-bold text-xs rounded-bl-xl">THE STAR</div>
                       <div className="mb-4 bg-cyan-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                          <Zap className="text-cyan-400" />
                       </div>
                       <h4 className="text-xl font-bold text-white mb-1">NFC</h4>
                       <p className="text-xs text-cyan-400 mb-4 font-mono">13.56 MHz</p>
                       <ul className="text-sm text-gray-300 space-y-2">
                          <li className="flex gap-2 items-start"><span className="text-cyan-500">✓</span> Jarak: &lt; 10 cm</li>
                          <li className="flex gap-2 items-start"><span className="text-cyan-500">✓</span> No Pairing (Instant)</li>
                          <li className="flex gap-2 items-start"><span className="text-cyan-500">✓</span> Passive (No Battery needed on tag)</li>
                       </ul>
                    </div>

                    {/* Bluetooth Card */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                       <div className="mb-4 bg-blue-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                          <Bluetooth className="text-blue-400" />
                       </div>
                       <h4 className="text-xl font-bold text-white mb-1">Bluetooth</h4>
                       <p className="text-xs text-blue-400 mb-4 font-mono">2.4 GHz</p>
                       <ul className="text-sm text-gray-300 space-y-2">
                          <li className="flex gap-2 items-start"><span className="text-gray-500">•</span> Jarak: ~10 Meter</li>
                          <li className="flex gap-2 items-start"><span className="text-gray-500">•</span> Butuh Pairing</li>
                          <li className="flex gap-2 items-start"><span className="text-gray-500">•</span> Active (Butuh Baterai)</li>
                       </ul>
                    </div>

                    {/* WiFi Card */}
                    <div className="bg-gray-800 border border-gray-700 rounded-xl p-5 relative overflow-hidden opacity-80 hover:opacity-100 transition-opacity">
                       <div className="mb-4 bg-purple-900/30 w-12 h-12 rounded-full flex items-center justify-center">
                          <Wifi className="text-purple-400" />
                       </div>
                       <h4 className="text-xl font-bold text-white mb-1">WiFi</h4>
                       <p className="text-xs text-purple-400 mb-4 font-mono">2.4 / 5 GHz</p>
                       <ul className="text-sm text-gray-300 space-y-2">
                          <li className="flex gap-2 items-start"><span className="text-gray-500">•</span> Jarak: ~100 Meter</li>
                          <li className="flex gap-2 items-start"><span className="text-gray-500">•</span> Butuh Access Point</li>
                          <li className="flex gap-2 items-start"><span className="text-gray-500">•</span> High Power Consumption</li>
                       </ul>
                    </div>
                 </div>

                 <div className="mt-8 p-4 bg-gray-800/30 rounded-lg border border-gray-700/50">
                    <h5 className="text-white font-bold mb-2 text-sm uppercase tracking-wider">Common Use Cases (Selain Poster)</h5>
                    <div className="flex flex-wrap gap-2">
                      {['e-money/e-toll', 'Access Control', 'Bluetooth Pairing', 'Inventory Tracking'].map((tag, i) => (
                        <span key={i} className="px-3 py-1 bg-gray-900 border border-gray-600 rounded-full text-xs text-gray-300">
                          {tag}
                        </span>
                      ))}
                    </div>
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
