import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Latihan Pidato Bahasa Arab',
    description: 'Kumpulan latihan dan penampilan pidato Bahasa Arab yang melatih kepercayaan diri dan kemampuan berbicara di depan umum.',
    tags: ['Public Speaking', 'Arabic', 'Confidence'],
    image: '🗣️',
    color: 'from-green-200 to-green-400',
  },
  {
    title: 'Konten Nyanyi',
    description: 'Berbagai cover lagu dan latihan vokal yang saya bagikan sebagai bentuk ekspresi diri dan pengembangan skill bernyanyi.',
    tags: ['Singing', 'Vocal', 'Music'],
    image: '🎤',
    color: 'from-green-300 to-green-500',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Dance Performance',
    description: 'Penampilan dan latihan menari yang menggabungkan kreativitas, ekspresi, dan kepercayaan diri di atas panggung.',
    tags: ['Dance', 'Performance', 'Creative'],
    image: '💃',
    color: 'from-green-400 to-green-600',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Konten Kreatif',
    description: 'Membuat berbagai konten kreatif di media sosial untuk berbagi pengalaman, ide, dan aktivitas sehari-hari.',
    tags: ['Content Creator', 'Creative', 'Social Media'],
    image: '📱',
    color: 'from-green-300 to-emerald-500',
    isContent: true,
    youtube: '#',
  },
  {
    title: 'Prestasi & Pengalaman',
    description: 'Berbagai pengalaman lomba dan kegiatan yang membantu saya berkembang dalam skill dan kepercayaan diri.',
    tags: ['Achievement', 'Experience', 'Growth'],
    image: '🏆',
    color: 'from-green-400 to-lime-500',
  },
  {
    title: 'Belajar & Eksplorasi',
    description: 'Perjalanan saya dalam mencoba hal-hal baru, belajar, dan terus berkembang menjadi lebih baik setiap harinya.',
    tags: ['Learning', 'Exploration', 'Self Growth'],
    image: '🌱',
    color: 'from-green-200 to-emerald-400',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 bg-green-50">
      <div className="container mx-auto px-4">
        
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-green-600 font-medium mb-2 block">Portfolio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4 text-green-900">
            Karya & Aktivitas Saya
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                
                <div className={`aspect-video rounded-xl mb-4 flex items-center justify-center bg-gradient-to-br ${project.color}`}>
                  <span className="text-6xl">{project.image}</span>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    {project.isContent && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                        Content
                      </span>
                    )}
                    <h3 className="font-display text-lg font-bold text-green-900 group-hover:text-green-600 transition">
                      {project.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm text-green-800 line-clamp-2">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-md bg-green-100 text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {(project.youtube) && (
                    <div className="pt-2">
                      <Button
                        size="sm"
                        className="rounded-full bg-green-500 hover:bg-green-600 text-white"
                        asChild
                      >
                        <a href={project.youtube}>
                          <Play className="h-4 w-4 mr-1" />
                          Lihat
                        </a>
                      </Button>
                    </div>
                  )}

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}