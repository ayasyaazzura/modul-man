import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const navbarBg = isDark
    ? 'bg-green-950/90 backdrop-blur-md shadow-lg'
    : isScrolled
    ? 'bg-white/80 backdrop-blur-md shadow-md'
    : 'bg-transparent';

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-14 md:h-16">

          {/* LOGO */}
          <a
            href="#home"
            onClick={(e) => { e.preventDefault(); scrollToSection('#home'); }}
            className={`font-bold text-xl md:text-2xl cursor-pointer ${
              isDark
                ? 'text-green-300 drop-shadow-[0_0_6px_rgba(34,197,94,0.7)]'
                : 'bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent'
            }`}
          >
            ayasya's portfolio
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                className={`transition font-medium ${
                  isDark
                    ? 'text-green-300 hover:text-green-100'
                    : 'text-green-800 hover:text-green-500'
                }`}
              >
                {item.label}
              </a>
            ))}

            {/* THEME TOGGLE */}
            <button
              className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900 transition"
              onClick={toggleTheme}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-green-700" />
              )}
            </button>
          </div>

          {/* MOBILE */}
          <div className="md:hidden flex items-center gap-2">
            <button
              className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900"
              onClick={toggleTheme}
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-green-700" />
              )}
            </button>

            <button
              className="p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-900"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-green-600" />
              ) : (
                <Menu className="w-5 h-5 text-green-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`md:hidden ${
              isDark
                ? 'bg-green-950/95 backdrop-blur-md shadow-lg'
                : 'bg-white/90 backdrop-blur-md shadow-md'
            }`}
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.href); }}
                  className={`transition ${
                    isDark
                      ? 'text-green-300 hover:text-green-100'
                      : 'text-green-800 hover:text-green-500'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}