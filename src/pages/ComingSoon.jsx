import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ComingSoon() {
  return (
    <main className="min-h-[80vh] flex items-center justify-center px-4 bg-[#F2F1ED]">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        {/* Animated ring */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <motion.div
            className="absolute inset-0 rounded-full border-4 border-[#58b66a]/30"
            animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-4 rounded-full border-4 border-[#58b66a]/60"
            animate={{ scale: [1, 1.1, 1], opacity: [0.7, 0.3, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <div className="absolute inset-8 rounded-full bg-[#58b66a] flex items-center justify-center">
            <span className="text-white font-bold text-xs tracking-widest">P</span>
          </div>
        </div>

        <motion.h1
          className="text-4xl lg:text-5xl font-bold text-[#023274] mb-4"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.55 }}
        >
          Coming Soon
        </motion.h1>
        <motion.p
          className="text-[#8F8F8F] text-lg mb-8 leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
        >
          We're working hard on something amazing. Stay tuned!
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.45 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="inline-block"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold"
            style={{ backgroundColor: "#58b66a" }}
          >
            Back to Home <ArrowRight size={15} />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
