import { createContext, useContext, useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { DotLottie } from '@lottiefiles/dotlottie-web';
import loadingAnimation from "../assets/Lottie/loading.json";

const ComingSoonContext = createContext();

/**
 * LottieAnimation Component
 * Handles the initialization and cleanup of the DotLottie player.
 */
function LottieAnimation() {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    if (canvasRef.current) {
      const dotLottie = new DotLottie({
        autoplay: true,
        loop: true,
        canvas: canvasRef.current,
        data: loadingAnimation,
      });

      return () => dotLottie.destroy();
    }
  }, []);

  return (
    <div className="flex justify-center mb-0">
      <canvas 
        ref={canvasRef} 
        id="dotlottie-canvas" 
        width={180}
        height={180}
        className="bg-transparent scale-125"
        style={{ width: '180px', height: '180px' }}
      />
    </div>
  );
}

/**
 * ComingSoonModal
 * The visual popup component, now featuring a Lottie animation.
 */
function ComingSoonModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-[#023274]/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-2xl bg-white/80 backdrop-blur-2xl rounded-[48px] border border-white/60 p-12 lg:p-16 shadow-2xl shadow-[#023274]/10 pointer-events-auto overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Decorative shapes inside modal */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#023274]/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#023274]/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-[#023274] hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <X size={20} />
              </button>

              <div className="text-center relative z-10">
                <LottieAnimation />

                <h2 className="text-5xl lg:text-6xl font-black text-[#023274] mb-6 tracking-tighter">
                  Coming Soon
                </h2>

                <div className="w-12 h-1 bg-[#023274]/10 mx-auto mb-8 rounded-full" />

                <p className="text-gray-500 text-lg lg:text-xl mb-12 leading-[1.6] max-w-md mx-auto font-medium">
                  We are currently engineering a new standard of healthcare innovation. This therapeutic area will be available shortly.
                </p>

                <button
                  onClick={onClose}
                  className="bg-[#023274] text-white px-10 py-4 rounded-full font-bold transition-all hover:bg-[#023274]/90 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#023274]/20"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

/**
 * ComingSoonProvider
 * Provides the global state for the Coming Soon modal.
 */
export function ComingSoonProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openComingSoon = () => setIsOpen(true);
  const closeComingSoon = () => setIsOpen(false);

  return (
    <ComingSoonContext.Provider value={{ openComingSoon }}>
      {children}
      <ComingSoonModal isOpen={isOpen} onClose={closeComingSoon} />
    </ComingSoonContext.Provider>
  );
}

/**
 * useComingSoon Hook
 * Allows any component to trigger the Coming Soon modal.
 */
export function useComingSoon() {
  const context = useContext(ComingSoonContext);
  if (!context) {
    throw new Error("useComingSoon must be used within a ComingSoonProvider");
  }
  return context;
}
