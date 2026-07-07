import { useState, useEffect, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Code, Sparkles } from 'lucide-react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: 'Contact', href: '#contact' },
  ];

  const whatsappUrl = "https://wa.me/918668468948?text=Hi%20VS%20Web%20and%20AI%20Solutions!%20I'd%20like%20to%20schedule%20a%20free%20consultation%20for%20my%20website%20project.";

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      id="main-app-header"
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 font-sans ${
        isScrolled 
          ? 'bg-dark-espresso/90 backdrop-blur-md border-b border-warm-border/60 shadow-lg py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo and Brand */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md border border-white/40 group-hover:border-blue-400/50 transition-colors overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-8 h-8 group-hover:scale-110 transition-transform select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="outerRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0b2c5c" />
                  <stop offset="50%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
                <linearGradient id="sGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0284c7" />
                  <stop offset="100%" stopColor="#38bdf8" />
                </linearGradient>
              </defs>

              {/* Outer glowing ring */}
              <circle cx="50" cy="50" r="46" stroke="url(#outerRingGrad)" strokeWidth="3" fill="#ffffff" />
              
              {/* High tech detail ring */}
              <circle cx="50" cy="50" r="42" stroke="#38bdf8" strokeWidth="0.75" strokeDasharray="3 3" opacity="0.5" />
              
              {/* Faint high tech grid background */}
              <g opacity="0.08">
                <line x1="20" y1="50" x2="80" y2="50" stroke="#0284c7" strokeWidth="0.5" />
                <line x1="50" y1="20" x2="50" y2="80" stroke="#0284c7" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="20" stroke="#0284c7" strokeWidth="0.5" />
                <circle cx="50" cy="50" r="30" stroke="#0284c7" strokeWidth="0.5" />
              </g>

              {/* Monogram VS */}
              {/* Letter V */}
              <path d="M 17,34 L 28,34 L 35,56 L 42,34 L 53,34 L 40,62 L 30,62 Z" fill="#0b2c5c" />

              {/* Letter S */}
              <path d="M 68,36 C 52,34 46,42 56,47 C 68,52 74,54 68,62 C 62,70 48,66 48,62" stroke="url(#sGrad)" strokeWidth="8.5" strokeLinecap="round" fill="none" />

              {/* Circuit traces branching from S */}
              <path d="M 58,35 C 64,28 70,28 76,28" stroke="url(#sGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="78" cy="28" r="2" fill="#38bdf8" />

              <path d="M 64,38 C 70,33 74,33 80,33" stroke="url(#sGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
              <circle cx="82" cy="33" r="2" fill="#38bdf8" />

              <path d="M 66,42 C 70,40 73,40 77,40" stroke="url(#sGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />
              <circle cx="79" cy="40" r="1.5" fill="#38bdf8" />

              {/* Web & AI Text */}
              <text x="50" y="77" textAnchor="middle" fill="#0284c7" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">Web & AI</text>
              
              {/* SOLUTIONS Text */}
              <text x="50" y="85" textAnchor="middle" fill="#1e293b" fontSize="5.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.8">SOLUTIONS</text>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-display font-bold text-lg tracking-wider text-zinc-800 group-hover:text-gold transition-colors">
              VS WEB & AI SOLUTIONS
            </span>
            <span className="text-[9px] text-gray-500 font-mono tracking-widest uppercase -mt-0.5 flex items-center gap-1">
              <Sparkles size={8} className="text-gold animate-pulse" /> EST. 2023
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleScrollTo(e, item.href)}
              className="text-xs uppercase tracking-[0.2em] font-semibold text-zinc-600 hover:text-gold transition-colors relative py-2"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:brightness-110 text-black text-xs font-bold uppercase tracking-wider px-5 py-3 rounded-full shadow-[0_0_15px_rgba(37,211,102,0.2)] transition-all cursor-pointer"
          >
            Consult Now
            <ArrowUpRight size={14} />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-zinc-600 hover:text-gold hover:bg-black/5 rounded-xl transition-all cursor-pointer"
        >
          {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-cocoa border-b border-warm-border overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {menuItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleScrollTo(e, item.href)}
                  className="text-sm uppercase tracking-widest font-semibold text-zinc-700 hover:text-gold transition-colors py-1"
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-warm-border/60" />
              <div className="flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => handleScrollTo(e, '#contact')}
                  className="w-full text-center py-3 text-xs uppercase tracking-widest font-bold text-zinc-600 hover:text-zinc-950 bg-white hover:bg-zinc-50 rounded-xl border border-warm-border transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center py-3 bg-[#25D366] text-black text-xs uppercase tracking-widest font-bold rounded-full shadow-md flex items-center justify-center gap-2"
                >
                  WhatsApp Consultation
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
