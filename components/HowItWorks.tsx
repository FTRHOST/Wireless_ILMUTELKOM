
import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Radio, Smartphone, Zap, Server } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const steps = [
    {
      icon: <Radio size={32} className="text-white" />,
      title: "1. Passive State",
      desc: "Poster memiliki 'Inlay NFC' yang terdiri dari chip mikro dan antena koil aluminium. Dalam keadaan diam, komponen ini benar-benar pasif (tidak memiliki sumber daya/baterai).",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: <Smartphone size={32} className="text-white" />,
      title: "2. Active Initiation",
      desc: "Smartphone bertindak sebagai 'Initiator'. Ketika didekatkan (< 10cm), smartphone memancarkan medan magnet melalui frekuensi radio 13.56 MHz.",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: <Zap size={32} className="text-white" />,
      title: "3. Electromagnetic Induction",
      desc: "Hukum Faraday bekerja. Medan magnet dari HP menginduksi arus listrik pada antena poster. Arus ini 'membangunkan' chip NFC untuk mengirim data balik.",
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Server size={32} className="text-white" />,
      title: "4. Data Handshake",
      desc: "Terjadi pertukaran data format NDEF. HP membaca payload (misalnya URL) dan OS menerjemahkannya menjadi aksi (membuka browser).",
      color: "from-green-400 to-emerald-600"
    }
  ];

  return (
    <section ref={targetRef} className="py-32 relative bg-gray-950 overflow-hidden">
      {/* Background Element */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-900 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-mono">Alur Kerja Sistem</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Bagaimana komunikasi *contactless* terjadi secara teknis antara Reader (HP) dan Tag (Poster).
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-900 -translate-x-1/2 hidden md:block rounded-full">
            <motion.div 
              style={{ scaleY: scrollYProgress, transformOrigin: "top" }}
              className="w-full h-full bg-gradient-to-b from-cyan-900 via-blue-800 to-cyan-900"
            />
          </div>

          <div className="space-y-12 md:space-y-32">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Visual Card */}
                <div className="flex-1 w-full flex justify-center group perspective-500">
                   <div className={`relative w-full max-w-sm h-64 bg-gray-900 border border-gray-800 rounded-xl p-8 flex flex-col items-center justify-center transition-all duration-500 hover:border-gray-600`}>
                      
                      {/* Inner Glow */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-5 rounded-xl transition-opacity duration-500`}></div>
                      
                      {/* Icon Circle */}
                      <div className={`relative z-10 w-20 h-20 rounded-full bg-gradient-to-br ${step.color} shadow-lg flex items-center justify-center mb-6`}>
                        {step.icon}
                      </div>
                      
                      <div className="font-mono text-xs text-gray-500 uppercase tracking-widest">Step 0{index + 1}</div>
                   </div>
                </div>

                {/* Text Side */}
                <div className={`flex-1 text-center md:text-left ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10'}`}>
                  <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white font-mono">{step.title}</h3>
                  <p className="text-gray-400 text-base leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
