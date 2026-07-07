import { motion } from 'motion/react';
import { ArrowUpRight, CheckCircle2, MessageCircle, Layers } from 'lucide-react';

export default function Hero() {
  const whatsappUrl = "https://wa.me/918668468948?text=Hi%20VS%20Web%20and%20AI%20Solutions!%20I'd%20love%20to%20discuss%20a%20website%20design%20project.%20I'm%20available%20for%20a%20consultation.";

  const industries = [
    "Startups",
    "Small Businesses",
    "Corporate Companies",
    "Manufacturers",
    "Interior Designers",
    "Architects",
    "Construction Companies",
    "Restaurants & Cafés",
    "Hotels",
    "Real Estate",
    "Healthcare Clinics",
    "Educational Institutes",
    "Law Firms",
    "Financial Services",
    "Retail Businesses",
    "NGOs",
    "Travel Agencies",
    "Event Companies",
    "Professional Consultants",
    "And many more..."
  ];

  return (
    <section 
      id="hero-section" 
      className="relative pt-32 pb-20 md:pt-40 md:pb-32 bg-dark-espresso overflow-hidden font-sans"
    >
      {/* Decorative Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-80 z-0" />
 
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 left-1/10 w-96 h-96 bg-gold/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 right-1/10 w-80 h-80 bg-bronze/10 rounded-full blur-3xl -z-10" />
 
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Tag / Establishment Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-gold/10 border border-gold/20 px-3.5 py-1.5 rounded-full text-gold text-xs font-semibold mb-6 shadow-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse" />
              <span>Founded in 2023 • Premium Web Craftsmanship</span>
            </motion.div>
 
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-medium text-4xl sm:text-5xl lg:text-6xl tracking-tight text-zinc-950 leading-[1.1] mb-6"
            >
              We Build Websites That{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-dark to-gold font-extrabold">
                Grow Your Business
              </span>
            </motion.h1>
 
            {/* Sub-Headline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed mb-8 max-w-2xl text-left"
            >
              At VS Web and AI Solutions, we create professional websites for businesses of all sizes—from startups and small businesses to large enterprises. We design and develop custom static and dynamic websites tailored to each company's goals, helping them build a strong online presence, attract more customers, and grow their business.
            </motion.p>
 
            {/* Interactive CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10"
            >
              {/* WhatsApp direct ping button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#25D366] hover:brightness-110 active:scale-98 text-black font-semibold px-8 py-4 rounded-full shadow-lg shadow-[#25D366]/10 hover:shadow-[#25D366]/20 transition-all cursor-pointer text-base"
              >
                <MessageCircle size={20} className="fill-current" />
                Ping on WhatsApp
              </a>
 
              {/* Services showcase anchor */}
              <a
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector('#services');
                  if (element) {
                    const offset = 80;
                    const bodyRect = document.body.getBoundingClientRect().top;
                    const elementRect = element.getBoundingClientRect().top;
                    const elementPosition = elementRect - bodyRect;
                    const offsetPosition = elementPosition - offset;
                    window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                  }
                }}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-zinc-100 border border-warm-border text-zinc-800 font-semibold px-8 py-4 rounded-full shadow-sm hover:shadow-md transition-all cursor-pointer text-base"
              >
                <span>Our Services</span>
                <ArrowUpRight size={18} className="text-zinc-400 group-hover:text-white" />
              </a>
            </motion.div>
 
            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-x-6 gap-y-3 border-t border-warm-border/60 pt-8 w-full"
            >
              <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Responsive Design</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Google Lighthouse 90+ Score</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-600 font-medium">
                <CheckCircle2 size={16} className="text-gold" />
                <span>Custom SEO Ready</span>
              </div>
            </motion.div>
          </div>

          {/* Interactive Bento Card/Illustration Column */}
          <div className="lg:col-span-5 relative mt-8 lg:mt-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative rounded-3xl bg-dark-cocoa border border-warm-border shadow-2xl p-6 sm:p-8"
            >
              {/* Window Bar */}
              <div className="flex items-center gap-1.5 mb-6 border-b border-warm-border/60 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-400/80" />
                <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                <div className="w-3 h-3 rounded-full bg-green-400/80" />
                <div className="h-4 w-32 bg-white rounded border border-warm-border ml-4 flex items-center justify-center">
                  <span className="text-[9px] text-bronze font-mono tracking-wider">vswebsolutions.com</span>
                </div>
              </div>

              {/* Graphic Wireframe Card */}
              <div className="space-y-4">
                <div className="h-32 rounded-2xl bg-gradient-to-br from-gold to-bronze p-5 flex flex-col justify-between text-black shadow-md relative overflow-hidden">
                  <div className="absolute right-[-20px] bottom-[-20px] w-40 h-40 bg-white/10 rounded-full" />
                  <Layers className="w-8 h-8 opacity-90" />
                  <div>
                    <span className="text-[10px] font-mono tracking-widest uppercase text-black/60 font-semibold">Our Output Goal</span>
                    <h3 className="font-extrabold text-xl leading-tight text-black">Fast. Clean. Interactive.</h3>
                  </div>
                </div>

                {/* Grid stats cards */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white border border-warm-border rounded-2xl p-4 flex flex-col justify-center shadow-sm">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Websites Built</span>
                    <span className="text-3xl font-bold font-display text-gold mt-1">200+</span>
                    <span className="text-[11px] text-zinc-600 mt-0.5">Custom websites delivered</span>
                  </div>
                  <div className="bg-white border border-warm-border rounded-2xl p-4 flex flex-col justify-center shadow-sm">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-mono">Happy Clients</span>
                    <span className="text-3xl font-bold font-display text-gold-light mt-1">500+</span>
                    <span className="text-[11px] text-zinc-600 mt-0.5">Direct global reviews</span>
                  </div>
                </div>

                {/* Sample project progress list */}
                <div className="bg-white rounded-2xl p-4 border border-warm-border space-y-2 shadow-sm">
                  <div className="flex items-center justify-between text-xs font-semibold text-zinc-700">
                    <span>Performance Optimization</span>
                    <span className="text-gold font-mono">99/100</span>
                  </div>
                  <div className="h-2 w-full bg-zinc-100 rounded-full overflow-hidden">
                    <div className="h-full bg-gold rounded-full w-[99%]" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Float badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white text-zinc-800 rounded-2xl p-3.5 shadow-2xl hidden sm:flex items-center gap-3 border border-warm-border"
            >
              <div className="w-9 h-9 rounded-xl bg-gold text-white flex items-center justify-center font-bold font-mono text-xs shrink-0">
                VS
              </div>
              <div>
                <p className="text-xs font-bold leading-tight text-zinc-800">Vaishnavi Samal</p>
                <a 
                  href="https://www.linkedin.com/in/vaishnavisamal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[10px] text-gold hover:underline flex items-center gap-0.5 font-semibold"
                >
                  Founder & CEO <ArrowUpRight size={10} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Industries We Serve */}
        <div className="mt-20 md:mt-28 border-t border-warm-border/60 pt-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            <span className="text-xs font-mono font-bold text-gold tracking-widest uppercase mb-3 block">
              INDUSTRIES WE PROUDLY SERVE
            </span>
            <h2 className="font-display font-medium text-2xl sm:text-3xl text-zinc-850 tracking-tight">
              We proudly develop websites for:
            </h2>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3"
          >
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white hover:bg-zinc-50 border border-warm-border hover:border-gold/50 px-4 py-3.5 rounded-xl flex items-center gap-2.5 transition-all duration-350 text-xs sm:text-sm text-zinc-600 hover:text-zinc-900 group shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-gold/70 shrink-0 group-hover:bg-gold transition-colors" />
                <span className="font-medium truncate">{industry}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
