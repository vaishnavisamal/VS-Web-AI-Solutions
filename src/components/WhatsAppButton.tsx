import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappNumber = "918668468948"; // Placeholder business number, easy to configure
  const defaultText = "Hi VS Web and AI Solutions! I am looking to build a professional website. I'd love to get a direct consultation.";
  const encodedText = encodeURIComponent(defaultText);
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedText}`;

  return (
    <div id="whatsapp-floating-widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-sans">
      {/* Floating Button */}
      <div className="flex items-center gap-3">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.8, x: 20 }}
              className="bg-zinc-950 border border-zinc-900 shadow-2xl rounded-3xl p-5 w-80 mb-2 overflow-hidden"
            >
              <div className="bg-[#d4af37] text-black p-4 -mx-5 -mt-5 mb-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-black/10 flex items-center justify-center font-bold text-sm text-black">
                      VS
                    </div>
                    <span className="absolute bottom-0 right-0 w-3 h-3 bg-[#25D366] border-2 border-[#d4af37] rounded-full" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm tracking-tight text-black">VS Web and AI Solutions</h4>
                    <p className="text-[11px] text-black/70 flex items-center gap-1 font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-black/40 animate-ping" />
                      Typically replies instantly
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-black/80 hover:text-black hover:bg-black/10 p-1.5 rounded-full transition-colors cursor-pointer"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="bg-zinc-900 rounded-2xl p-3.5 border border-zinc-800">
                  <p className="text-[11px] text-zinc-500 font-medium uppercase tracking-wider mb-1">Our Team</p>
                  <p className="text-xs text-zinc-300 leading-relaxed font-normal">
                    "We turn your ideas into functional, beautifully designed websites. Founded in 2023, we've delivered 200+ projects!"
                  </p>
                </div>
                
                <div className="text-xs text-zinc-400 font-medium flex items-center gap-2 px-1">
                  <span className="text-[#d4af37]">✓</span> 100% Free initial consultation
                </div>
                
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:brightness-110 text-black font-bold text-xs py-3.5 px-4 rounded-full shadow-md transition-all hover:shadow-lg hover:-translate-y-0.5 cursor-pointer font-mono tracking-wider uppercase"
                >
                  {/* WhatsApp SVG Icon */}
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.625 1.451 5.403.002 9.803-4.386 9.807-9.786.002-2.618-1.01-5.074-2.854-6.915-1.841-1.84-4.29-2.85-6.903-2.85-5.411 0-9.815 4.393-9.819 9.795-.002 1.706.444 3.376 1.293 4.821l-.991 3.619 3.738-.976-.104-.153zm9.646-6.626c-.282-.141-1.664-.822-1.921-.916-.257-.094-.443-.141-.63.141-.186.282-.72.916-.882 1.103-.162.187-.324.211-.606.07-.282-.141-1.191-.439-2.27-1.402-.839-.748-1.406-1.672-1.571-1.953-.165-.282-.018-.434.123-.574.127-.127.282-.329.423-.493.141-.165.188-.282.282-.47.094-.188.047-.353-.023-.494-.071-.141-.63-1.517-.864-2.079-.227-.547-.457-.472-.63-.481-.162-.008-.349-.01-.536-.01-.187 0-.491.07-.748.353-.257.282-.982.96-1.011 2.347-.028 1.388.986 2.727 1.127 2.916.141.188 1.942 2.965 4.704 4.157.657.284 1.17.453 1.57.581.659.21 1.258.18 1.731.11.528-.079 1.664-.68 1.898-1.338.234-.658.234-1.22.165-1.338-.07-.11-.257-.187-.539-.328z" />
                  </svg>
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Pulse Button Trigger */}
        <motion.button
          id="whatsapp-trigger-btn"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:brightness-110 text-black rounded-full shadow-2xl transition-colors relative cursor-pointer group"
        >
          {/* Active indicator dot */}
          <span className="absolute top-0 right-0 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
            <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
          </span>

          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 45, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={24} />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 45, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -45, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex items-center justify-center"
              >
                {/* SVG WhatsApp logo instead of generic message icon */}
                <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                  <path d="M12.004 2C6.48 2 2 6.48 2 12.004c0 1.763.46 3.42 1.26 4.878L2 22l5.244-1.378a9.932 9.932 0 004.76 1.204c5.524 0 10.004-4.48 10.004-10.004C22.008 6.48 17.528 2 12.004 2zm0 1.8c4.524 0 8.204 3.68 8.204 8.204c0 4.524-3.68 8.204-8.204 8.204c-1.575 0-3.04-.45-4.284-1.224l-.3-.18l-2.98.784.8-2.906l-.2-.324a8.136 8.136 0 01-1.24-4.354C3.8 7.48 7.48 3.8 12.004 3.8z" />
                </svg>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
    </div>
  );
}
