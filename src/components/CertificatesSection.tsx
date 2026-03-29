import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const certificates = [
  {
    title: 'juara 3 badminton',
    issuer: 'lomba antar kampung',
    date: '2022',
    credentialId: 'VCD-001',
    image: '🏸',
    color: 'from-green-200 to-green-400',
    link: '#',
  },
  {
    title: 'Juara 2 tenis meja',
    issuer: 'event sekolah',
    date: '2023',
    credentialId: 'VCD-002',
    image: '🏓',
    color: 'from-green-300 to-green-500',
    link: '#',
  },
  {
    title: 'Harapan 1 Lomba Vokal Duet',
    issuer: 'almanar extalent',
    date: '2023',
    credentialId: 'VCD-003',
    image: '🏆',
    color: 'from-green-400 to-green-600',
    link: '#',
  },
];

export default function CertificatesSection() {
  return (
    <section id="certificates" className="py-20 md:py-32 bg-green-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-medium mb-2 block">Prestasi</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-green-900">
            Sertifikat &amp; Penghargaan
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                <div
                  className={`w-16 h-16 rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${cert.color}`}
                >
                  <span className="text-3xl">{cert.image}</span>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Award className="h-5 w-5 text-green-600 mt-0.5 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-green-900 group-hover:text-green-600 transition-colors">
                      {cert.title}
                    </h3>
                  </div>

                  <p className="text-sm text-green-700">{cert.issuer}</p>

                  <div className="flex items-center gap-2 text-sm text-green-700">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-xs text-green-600 font-mono">
                    ID: {cert.credentialId}
                  </p>

                  <Button
                    variant="outline"
                    size="sm"
                    className="rounded-full mt-2 border-green-500 text-green-700 hover:bg-green-100"
                    asChild
                  >
                    <a href={cert.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-1" />
                      Verifikasi
                    </a>
                  </Button>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}