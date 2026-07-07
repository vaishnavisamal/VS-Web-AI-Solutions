import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Clock, MessageSquare, Check, Sparkles, Send, Linkedin } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [projectStyle, setProjectStyle] = useState('landing');
  const [details, setDetails] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Prefilled WhatsApp consultation trigger
  const handleWhatsAppConsultation = () => {
    const text = `Hi VS Web and AI Solutions! I am looking to initiate a consultation for a website. Here are my project details:

• Name: ${name || 'Interested Client'}
• Email: ${email || 'Not provided'}
• Phone: ${phone || 'Not provided'}
• Project Category: ${projectStyle.toUpperCase()}
• Custom Details: ${details || 'Looking forward to discussing layouts!'}`;

    window.open(`https://wa.me/918668468948?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleLocalSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;
    
    // Simulate successful form submission
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-dark-espresso font-sans relative overflow-hidden">
      
      {/* Background Decorator Orbs */}
      <div className="absolute bottom-[-100px] left-[-100px] w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[-100px] right-[-100px] w-96 h-96 bg-bronze/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Block Column */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-xs font-mono font-bold text-gold tracking-widest uppercase mb-3 block">
                GET IN TOUCH
              </span>
              <h2 className="font-display font-semibold text-3xl sm:text-4xl text-zinc-950 tracking-tight leading-tight">
                Let's discuss your next project
              </h2>
              <p className="text-zinc-300 mt-4 font-normal text-sm leading-relaxed">
                Founded in 2023, we have designed over 200+ high-quality websites. We'd love to help you design your next platform. Choose to fill out our interactive inquiry form or ping us on WhatsApp instantly!
              </p>
            </div>

            {/* Quick stats / contacts lists */}
            <div className="space-y-4">
              <div className="flex gap-4 p-4 rounded-xl bg-dark-cocoa border border-warm-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-500/10 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare size={18} className="fill-current" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-850">Direct WhatsApp Line</h4>
                  <p className="text-xs text-zinc-600 font-normal mt-0.5">Quick consultation: +91 86684 68948</p>
                  <p className="text-[10px] text-[#25D366] font-semibold mt-1">Available 24/7 • Instant Response</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-dark-cocoa border border-warm-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-dark-mocha text-gold border border-warm-border/60 flex items-center justify-center shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-850">Email Inquiry</h4>
                  <p className="text-xs text-zinc-600 font-normal mt-0.5">vswebsolutions3@gmail.com</p>
                  <p className="text-[10px] text-zinc-500 font-normal mt-1">We typically reply within 2 hours</p>
                </div>
              </div>

              <div className="flex gap-4 p-4 rounded-xl bg-dark-cocoa border border-warm-border shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-dark-mocha text-gold-light border border-warm-border/60 flex items-center justify-center shrink-0">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-850">Average Build Turnaround</h4>
                  <p className="text-xs text-zinc-600 font-normal mt-0.5">Standard site delivered in 5 to 14 days</p>
                  <p className="text-[10px] text-gold font-semibold mt-1">Free support for first 30 days after launch</p>
                </div>
              </div>

              <a 
                href="https://www.linkedin.com/in/vs-web-and-ai-solutions" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex gap-4 p-4 rounded-xl bg-dark-cocoa border border-warm-border hover:border-gold/40 shadow-sm transition-all group block"
              >
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 text-gold border border-[#d4af37]/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-850 group-hover:text-gold transition-colors">Official Company LinkedIn</h4>
                  <p className="text-xs text-zinc-600 font-normal mt-0.5">Follow VS Web & AI Solutions</p>
                  <p className="text-[10px] text-gold font-semibold mt-1">Visit Official Company Page & News →</p>
                </div>
              </a>

              <a 
                href="https://www.linkedin.com/in/vaishnavisamal/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex gap-4 p-4 rounded-xl bg-dark-cocoa border border-warm-border hover:border-gold/40 shadow-sm transition-all group block"
              >
                <div className="w-10 h-10 rounded-lg bg-[#d4af37]/10 text-gold border border-[#d4af37]/20 flex items-center justify-center shrink-0 group-hover:bg-gold/20 transition-all">
                  <Linkedin size={18} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-850 group-hover:text-gold transition-colors">Founder's LinkedIn Profile</h4>
                  <p className="text-xs text-zinc-600 font-normal mt-0.5">Connect with Vaishnavi Samal</p>
                  <p className="text-[10px] text-gold font-semibold mt-1">View Professional Network & Reviews →</p>
                </div>
              </a>
            </div>
          </div>

          {/* Form Block Column */}
          <div className="lg:col-span-7">
            <div className="bg-dark-cocoa rounded-3xl p-6 sm:p-8 border border-warm-border shadow-xl relative">
              
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleLocalSubmit} 
                    className="space-y-5"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="text-[11px] font-mono font-bold text-bronze uppercase tracking-wider block mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="e.g. Samuel Alvaish"
                          className="w-full bg-white border border-warm-border/60 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:bg-white transition-all font-normal"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="text-[11px] font-mono font-bold text-bronze uppercase tracking-wider block mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="e.g. sam@example.com"
                          className="w-full bg-white border border-warm-border/60 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:bg-white transition-all font-normal"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Phone */}
                      <div>
                        <label className="text-[11px] font-mono font-bold text-bronze uppercase tracking-wider block mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="e.g. +91 90000 00000"
                          className="w-full bg-white border border-warm-border/60 rounded-xl px-4 py-3 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:bg-white transition-all font-normal"
                        />
                      </div>

                      {/* Project Category */}
                      <div>
                        <label className="text-[11px] font-mono font-bold text-bronze uppercase tracking-wider block mb-2">
                          Project Category
                        </label>
                        <select
                          value={projectStyle}
                          onChange={(e) => setProjectStyle(e.target.value)}
                          className="w-full bg-white border border-warm-border/60 rounded-xl px-4 py-3 text-sm text-zinc-800 focus:outline-none focus:border-gold focus:bg-white transition-all font-normal appearance-none cursor-pointer"
                        >
                          <option value="landing" className="bg-white text-zinc-800">Landing Page</option>
                          <option value="corporate" className="bg-white text-zinc-800">Corporate Website</option>
                          <option value="ecommerce" className="bg-white text-zinc-800">E-Commerce Shop</option>
                          <option value="custom" className="bg-white text-zinc-800">Custom Web Application</option>
                        </select>
                      </div>
                    </div>

                    {/* Description Details */}
                    <div>
                      <label className="text-[11px] font-mono font-bold text-bronze uppercase tracking-wider block mb-2">
                        Tell us about your custom needs
                      </label>
                      <textarea
                        rows={4}
                        value={details}
                        onChange={(e) => setDetails(e.target.value)}
                        placeholder="Briefly describe what your business does and any design layouts, colors, or page tabs you have in mind..."
                        className="w-full bg-white border border-warm-border/60 rounded-xl p-4 text-sm text-zinc-800 placeholder-zinc-400 focus:outline-none focus:border-gold focus:bg-white transition-all font-normal resize-none"
                      />
                    </div>

                    {/* Action Triggers */}
                    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-3 font-mono">
                      <button
                        type="submit"
                        className="flex-1 inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-dark text-black font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-full shadow-md transition-all cursor-pointer"
                      >
                        <Send size={15} />
                        <span>Send Project Inquiry</span>
                      </button>

                      <button
                        type="button"
                        onClick={handleWhatsAppConsultation}
                        className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-110 text-black font-bold uppercase tracking-wider text-xs py-3.5 px-6 rounded-full shadow-md transition-all cursor-pointer"
                      >
                        <MessageSquare size={15} className="fill-current" />
                        <span>Ping on WhatsApp</span>
                      </button>
                    </div>

                    <p className="text-[10px] text-zinc-400 text-center leading-normal mt-2">
                      Submit the form to receive a detailed proposal or ping WhatsApp instantly to chat directly with our consultants!
                    </p>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success-prompt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-10 space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/20 flex items-center justify-center mx-auto text-gold shadow-md">
                      <Check size={32} />
                    </div>
                    
                    <div className="space-y-2">
                      <h3 className="font-display font-semibold text-xl text-zinc-850 flex items-center justify-center gap-2">
                        <Sparkles size={16} className="text-gold animate-spin" />
                        Inquiry Submitted!
                      </h3>
                      <p className="text-sm text-zinc-650 max-w-md mx-auto leading-relaxed">
                        Thank you, <span className="font-bold text-gold">{name}</span>! We have successfully registered your project profile. Our consultant will email you at <span className="font-medium text-gold">{email}</span> in under 2 hours.
                      </p>
                    </div>

                    <div className="bg-emerald-500/5 border border-emerald-500/10 rounded-2xl p-5 max-w-md mx-auto space-y-3">
                      <p className="text-xs font-semibold text-emerald-400">
                        Want an instant response instead?
                      </p>
                      <p className="text-xs text-emerald-500 font-normal leading-relaxed">
                        Click the button below to forward these exact profile details straight to our active business WhatsApp chat for a direct consultation.
                      </p>
                      <button
                        onClick={handleWhatsAppConsultation}
                        className="inline-flex items-center gap-2 bg-[#25D366] hover:brightness-110 text-black font-bold text-xs py-2.5 px-5 rounded-full shadow-sm transition-all hover:shadow cursor-pointer uppercase tracking-wider font-mono"
                      >
                        <MessageSquare size={13} className="fill-current" />
                        Forward Profile to WhatsApp
                      </button>
                    </div>

                    <button
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setPhone('');
                        setDetails('');
                      }}
                      className="text-xs font-semibold text-zinc-400 hover:text-gold hover:underline cursor-pointer"
                    >
                      Fill out another form
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
