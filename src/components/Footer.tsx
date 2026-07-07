import { MouseEvent } from 'react';
import { Code, MessageSquare, ArrowUp, Sparkles, Linkedin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTop = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScrollTo = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer id="app-footer" className="bg-dark-cocoa text-zinc-700 font-sans border-t border-warm-border pt-16 pb-8 relative overflow-hidden">
      
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-warm-border/60 pb-12 mb-12">
          
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/95 backdrop-blur-xs flex items-center justify-center shadow-md border border-white/40 overflow-hidden">
                <svg viewBox="0 0 100 100" className="w-7 h-7 select-none" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="footerOuterRingGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0b2c5c" />
                      <stop offset="50%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                    <linearGradient id="footerSGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>

                  {/* Outer glowing ring */}
                  <circle cx="50" cy="50" r="46" stroke="url(#footerOuterRingGrad)" strokeWidth="3" fill="#ffffff" />
                  
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
                  <path d="M 68,36 C 52,34 46,42 56,47 C 68,52 74,54 68,62 C 62,70 48,66 48,62" stroke="url(#footerSGrad)" strokeWidth="8.5" strokeLinecap="round" fill="none" />

                  {/* Circuit traces branching from S */}
                  <path d="M 58,35 C 64,28 70,28 76,28" stroke="url(#footerSGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="78" cy="28" r="2" fill="#38bdf8" />

                  <path d="M 64,38 C 70,33 74,33 80,33" stroke="url(#footerSGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none" />
                  <circle cx="82" cy="33" r="2" fill="#38bdf8" />

                  <path d="M 66,42 C 70,40 73,40 77,40" stroke="url(#footerSGrad)" strokeWidth="2" strokeLinecap="round" fill="none" />
                  <circle cx="79" cy="40" r="1.5" fill="#38bdf8" />

                  {/* Web & AI Text */}
                  <text x="50" y="77" textAnchor="middle" fill="#0284c7" fontSize="8.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="0.2">Web & AI</text>
                  
                  {/* SOLUTIONS Text */}
                  <text x="50" y="85" textAnchor="middle" fill="#1e293b" fontSize="5.5" fontWeight="800" fontFamily="system-ui, -apple-system, sans-serif" letterSpacing="1.8">SOLUTIONS</text>
                </svg>
              </div>
              <span className="font-display font-medium text-md tracking-tight text-zinc-800">
                VS Web and AI Solutions
              </span>
            </div>
            
            <p className="text-xs text-zinc-600 leading-relaxed font-normal max-w-sm">
              Founded by <a href="https://www.linkedin.com/in/vaishnavisamal/" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline font-semibold">Vaishnavi Samal</a> in 2023, we tailor custom, high-speed, SEO-optimized web products to help modern business models grow. Since our founding, we have designed over 200+ responsive solutions with 500+ happy reviews.
            </p>

            <div className="flex items-center gap-2 text-[10px] font-mono text-gold font-semibold">
              <Sparkles size={10} /> Founded By Vaishnavi Samal • Premium Quality Standards
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="text-xs font-mono font-bold text-bronze uppercase tracking-wider">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-zinc-500">
              <li>
                <a href="#contact" onClick={(e) => handleScrollTo(e, '#contact')} className="hover:text-gold transition-colors">
                  Get In Touch
                </a>
              </li>
            </ul>
          </div>

          {/* Active Contact Col */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-mono font-bold text-bronze uppercase tracking-wider">
              Direct Contact Channels
            </h4>
            <ul className="space-y-3 text-xs text-zinc-600">
              <li className="flex items-center gap-2.5">
                <span className="text-gold font-bold">✓</span>
                <span>WhatsApp: +91 86684 68948</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold font-bold">✓</span>
                <span>Email: vswebsolutions3@gmail.com</span>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold font-bold">✓</span>
                <a 
                  href="https://www.linkedin.com/in/vs-web-and-ai-solutions" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold flex items-center gap-1 transition-colors font-semibold text-zinc-850"
                >
                  <Linkedin size={12} className="text-gold fill-current" />
                  <span>Official LinkedIn Company Page</span>
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <span className="text-gold font-bold">✓</span>
                <a 
                  href="https://www.linkedin.com/in/vaishnavisamal/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-gold flex items-center gap-1 transition-colors text-zinc-500"
                >
                  <Linkedin size={11} className="text-gold/80 fill-current" />
                  <span>Founder's LinkedIn (Vaishnavi Samal)</span>
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="https://wa.me/918668468948?text=Hi%20VS%20Web%20and%20AI%20Solutions!%20I'd%20love%20to%20do%20a%20free%20consultation%20on%20my%20website%20desires."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#25D366] hover:brightness-110 text-black font-bold text-xs py-2.5 px-4 rounded-full shadow-md transition-all cursor-pointer font-mono uppercase tracking-wider"
                >
                  <MessageSquare size={13} className="fill-current" />
                  WhatsApp Consultation
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-zinc-500">
          <div>
            &copy; {currentYear} VS Web and AI Solutions. All rights reserved. Registered since 2023.
          </div>
          <div className="flex items-center gap-6">
            <span>200+ Websites Delivered</span>
            <span>500+ Happy Clients</span>
            <button
              onClick={handleScrollTop}
              className="flex items-center gap-1.5 hover:text-gold transition-colors cursor-pointer text-zinc-400 font-bold uppercase"
            >
              <span>Back To Top</span>
              <ArrowUp size={12} />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
