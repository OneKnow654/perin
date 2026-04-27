import { createContext, useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Lottie from "lottie-react";
import loadingAnim from "../assets/Lottie/loading.json";

const ComingSoonContext = createContext();

/**
 * ComingSoonModal
 * The visual popup component, now managed within the context file for simplicity.
 */
function ComingSoonModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 z-[100] bg-primary/20 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 pointer-events-none">
            <motion.div
              className="relative w-full max-w-2xl bg-white/80 backdrop-blur-2xl rounded-[48px] border border-white/60 p-12 lg:p-16 shadow-2xl shadow-primary/10 pointer-events-auto overflow-hidden"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              {/* Decorative shapes inside modal */}
              <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-8 right-8 w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 text-primary hover:bg-gray-100 transition-colors border border-gray-100"
              >
                <X size={20} />
              </button>

              <div className="text-center relative z-10">
                <motion.div
                  className="relative w-24 h-24 mx-auto mb-10 flex items-center justify-center"
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
                >
                  <div className="absolute inset-0 flex items-center justify-center scale-[2.2]">
                    <Lottie 
                      animationData={loadingAnim} 
                      loop={true} 
                      className="w-full h-full"
                    />
                  </div>
                </motion.div>

                <h2 className="text-5xl lg:text-6xl font-black text-primary mb-6 tracking-tighter">
                  Coming Soon
                </h2>

                <div className="w-12 h-1 bg-primary/10 mx-auto mb-8 rounded-full" />

                <p className="text-gray-500 text-lg lg:text-xl mb-12 leading-[1.6] max-w-md mx-auto font-medium">
                  We are currently engineering a new standard of healthcare innovation. This therapeutic area will be available shortly.
                </p>

                <button
                  onClick={onClose}
                  className="btn-primary"
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
