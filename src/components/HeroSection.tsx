import { motion } from 'framer-motion';
import { Github, Instagram, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ayasyaazzura-lang', label: 'GitHub' },
    { icon: Instagram, href: 'https://www.instagram.com/_ayasyazzura_', label: 'Instagram' },
  ];

  return (
    <footer className="py-8 border-t border-emerald-100 dark:border-emerald-900/50 bg-white/50 dark:bg-slate-950/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Section Kiri: Foto & Copyright */}
          <div className="flex items-center gap-4">
            {/* Foto Profil */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <img 
                src="https://github.com/ayasyaazzura-lang.png" // Mengambil otomatis dari foto GitHub atau ganti path lokal
                alt="Ayasya Profile" 
                className="relative w-12 h-12 rounded-full border-2 border-white dark:border-slate-900 object-cover"
              />
            </motion.div>

            {/* Copyright Text */}
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2 text-muted-foreground font-medium text-sm md:text-base"
            >
              <span>© {currentYear} Made with</span>
              <div className="flex items-center gap-1">
                <Heart className="h-4 w-4 text-rose-400 fill-rose-400 animate-pulse" />
                <span>by 
                  <span className="ml-1 bg-gradient-to-r from-emerald-500 to-blue-500 bg-clip-text text-transparent font-bold">
                    ayasya
                  </span>
                </span>
              </div>
            </motion.div>
          </div>

          {/* Section Kanan: Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full transition-all text-muted-foreground hover:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-transparent hover:border-emerald-100 dark:hover:border-emerald-900/50"
                aria-label={social.label}
              >
                <social.icon className="h-5 w-5" />
              </a>
            ))}
          </motion.div>
          
        </div>
      </div>
    </footer>
  );
}