import { motion } from 'framer-motion';
import { Code2, Video, Coffee, Rocket } from 'lucide-react';

export default function AboutSection() {
  const stats = [
    { icon: Code2, value: '10+', label: 'Karya Dibuat' },
    { icon: Video, value: '50+', label: 'Konten Kreatif' },
    { icon: Coffee, value: '∞', label: 'Semangat Belajar' },
    { icon: Rocket, value: '3+', label: 'Tahun Berkembang' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-green-50">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-medium mb-2 block">Tentang Saya</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-green-900">
            Mengenal Lebih Dekat
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          
          {/* FOTO / ICON */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <div className="w-full h-full bg-gradient-to-br from-green-200 to-green-400 flex items-center justify-center">
                  <span className="text-8xl">👩‍🎓</span>
                </div>
              </div>

              <div className="absolute -bottom-6 -right-6 p-4 bg-white rounded-xl shadow-lg">
                <p className="font-display font-bold text-2xl text-green-700">3+ Tahun</p>
                <p className="text-sm text-green-600">Belajar & Berkembang</p>
              </div>
            </div>
          </motion.div>

          {/* TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="font-display text-2xl md:text-3xl font-bold text-green-900">
              Pelajar & Creative Enthusiast
            </h3>

            <p className="text-green-800 leading-relaxed">
              Saya adalah seorang pelajar yang memiliki ketertarikan besar di bidang teknologi, 
              seni, dan kreativitas. Saya suka mengeksplor hal baru, mulai dari public speaking, 
              membuat konten, hingga mencoba berbagai aktivitas kreatif lainnya.
            </p>

            <p className="text-green-800 leading-relaxed">
              Bagi saya, belajar bukan hanya tentang teori, tapi juga tentang pengalaman. 
              Saya percaya bahwa dengan terus mencoba dan berkembang, saya bisa menjadi versi 
              terbaik dari diri saya.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-4 bg-white rounded-xl text-center shadow-md hover:shadow-xl transition"
                >
                  <stat.icon className="h-6 w-6 text-green-600 mx-auto mb-2" />
                  <p className="font-display text-2xl font-bold text-green-900">{stat.value}</p>
                  <p className="text-sm text-green-700">{stat.label}</p>
                </motion.div>
              ))}
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}