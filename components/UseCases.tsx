
import React from 'react';
import { Music, ShoppingBag, Clapperboard, Smartphone } from 'lucide-react';
import { motion } from 'framer-motion';

const cases = [
  {
    icon: <Music className="text-green-400" size={28} />,
    title: "Smart Advertising",
    subtitle: "Trigger: URL URI",
    desc: "Contoh pada poster konser. Tag NFC berisi link URI scheme (spotify://...) yang memaksa smartphone membuka aplikasi spesifik secara deeplink.",
    img: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=800&auto=format&fit=crop",
    gradient: "from-green-900/40 to-transparent"
  },
  {
    icon: <ShoppingBag className="text-orange-400" size={28} />,
    title: "Contactless Menu",
    subtitle: "Trigger: Web Link",
    desc: "Mengurangi kontak fisik. Tag NFC menyimpan URL HTTPS yang mengarah ke menu digital (PDF/Web). Payload sangat ringan (< 1KB).",
    img: "https://images.unsplash.com/photo-1552566626-52f8b828add9?q=80&w=800&auto=format&fit=crop",
    gradient: "from-orange-900/40 to-transparent"
  },
  {
    icon: <Clapperboard className="text-red-400" size={28} />,
    title: "Interactive Media",
    subtitle: "Trigger: App Clip / AR",
    desc: "Poster film yang memicu AR Experience. NFC mentrigger download aset sementara (Instant App) untuk menampilkan objek 3D di layar.",
    img: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=800&auto=format&fit=crop",
    gradient: "from-red-900/40 to-transparent"
  }
];

const UseCases: React.FC = () => {
  return (
    <section className="py-24 bg-gray-950 relative border-t border-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="inline-block px-4 py-1 rounded-full border border-gray-700 bg-gray-900 text-gray-400 text-xs font-mono mb-4"
          >
            REAL WORLD IMPLEMENTATION
          </motion.div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white font-mono">Contoh Penerapan</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Studi kasus penggunaan protokol NFC dalam skenario interaksi sehari-hari.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-500">
                 <img src={item.img} alt={item.title} className="w-full h-full object-cover" />
                 <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-90"></div>
                 <div className={`absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t ${item.gradient}`}></div>
                 
                 <div className="absolute top-4 right-4 bg-gray-950/80 backdrop-blur-md p-2 rounded-lg border border-white/10">
                    {item.icon}
                 </div>
              </div>
              
              <div className="p-6 relative">
                <div className="mb-4">
                   <p className="text-xs font-mono text-cyan-500 mb-1">{item.subtitle}</p>
                   <h3 className="text-xl font-bold text-white">{item.title}</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
