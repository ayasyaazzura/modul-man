import { motion } from 'framer-motion';
import { ArrowDown, Github, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-100 via-green-200 to-green-300">
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="text-center md:text-left">
            <motion.span
              className="inline-block px-4 py-2 rounded-full bg-green-200 text-green-800 text-sm font-medium mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              👋 Selamat datang di portfolio saya
            </motion.span>

            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 text-green-900"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Ayasya Azzura
              <br />
              <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
                MAN 1 Banda Aceh
              </span>
            </motion.h1>

            <motion.p
              className="text-lg text-green-800 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              Saya adalah pelajar yang tertarik pada dunia teknologi,
              desain, dan pembuatan konten kreatif.
            </motion.p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <Button
                className="bg-green-500 hover:bg-green-600 text-white"
                onClick={() => scrollTo('#projects')}
              >
                Lihat Karya Saya
              </Button>

              <Button
                variant="outline"
                className="border-green-500 text-green-700"
                onClick={() => scrollTo('#contact')}
              >
                Hubungi Saya
              </Button>
            </div>

            {/* Social */}
            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/ayasyaazzura">
                <Github className="text-green-700" />
              </a>
              <a href="https://www.instagram.com/_ayasyazzura_/">
                <Instagram className="text-green-700" />
              </a>
            </div>
          </div>

          {/* FOTO BESAR */}
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <img
              src="/profile.jpg"
              alt="Ayasya"
              className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-full border-4 border-green-300 shadow-[0_0_40px_rgba(34,197,94,0.5)]"
            />
          </motion.div>

        </div>
      </div>

      {/* Scroll */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 bg-green-200 rounded-full animate-bounce"
      >
        <ArrowDown className="text-green-800" />
      </motion.button>
    </section>
  );
}