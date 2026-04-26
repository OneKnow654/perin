import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-white">
      {/* Dynamic Background Shapes */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-[#023274]/5 blur-[120px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[40%] -right-[5%] w-[35%] h-[35%] rounded-full bg-[#023274]/10 blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, 60, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-[10%] left-[20%] w-[30%] h-[30%] rounded-full bg-[#023274]/5 blur-[110px]"
          animate={{
            x: [0, 60, 0],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Main Content Card */}
      <motion.div
        className="relative z-10 text-center max-w-2xl w-full"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="bg-white/40 backdrop-blur-2xl rounded-[48px] border border-white/60 p-12 lg:p-20 shadow-2xl shadow-[#023274]/5 relative overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent pointer-events-none"></div>

          <motion.div
            className="w-24 h-24 bg-[#023274] rounded-[28px] mx-auto mb-12 flex items-center justify-center shadow-2xl shadow-[#023274]/30 relative z-10"
            initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
          >
            {/* Hospital Plus Sign */}
            <div className="relative w-10 h-10">
              <div className="absolute inset-0 m-auto w-full h-2.5 bg-white rounded-sm"></div>
              <div className="absolute inset-0 m-auto h-full w-2.5 bg-white rounded-sm"></div>
            </div>
          </motion.div>

          <motion.h1
            className="text-6xl lg:text-8xl font-black text-[#023274] mb-8 tracking-tighter"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            404 Error
          </motion.h1>

          <motion.div
            className="w-16 h-1 bg-[#023274]/10 mx-auto mb-10 rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          />

          <motion.p
            className="text-gray-500 text-xl lg:text-2xl mb-14 leading-[1.5] max-w-lg mx-auto font-medium"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            The page you are looking for doesn't exist or has been moved.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.45 }}
          >
            <Link
              to="/"
              className="group inline-flex items-center gap-4 bg-[#023274] text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:bg-[#023274]/90 hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-[#023274]/20"
            >
              <ArrowLeft size={22} className="transition-transform group-hover:-translate-x-1" />
              Return to Home
            </Link>
          </motion.div>
        </div>

        {/* Footer detail */}
        <motion.p
          className="mt-12 text-gray-400 font-bold tracking-[0.2em] uppercase text-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Perin Healthcare • Excellence in Motion
        </motion.p>
      </motion.div>
    </main>
  );
}
