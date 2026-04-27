import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  return (
    <section className="p-3 sm:p-4 lg:p-6 min-h-[92dvh] flex flex-col relative">
      {/* Video Background Layer */}
      <div className="absolute inset-0 z-0 m-3 sm:m-4 lg:m-6 overflow-hidden rounded-[2rem]">
        <video
          autoPlay muted loop playsInline
          className="w-full h-full object-cover"
        >
          <source src="/src/assets/videos/home-banner-video1.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/10" />
      </div>

      <div className="relative z-10 flex-1 flex items-center w-full max-w-[1800px] mx-auto px-6 sm:px-12 lg:px-20">
        <motion.div
          className="bg-white/95 backdrop-blur-xl p-10 sm:p-14 lg:p-16 rounded-[3.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] max-w-[640px] border border-white/20"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Top Label */}
          <motion.div
            variants={itemVariants}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-[2px] bg-[#023274]" />
            <span className="text-[#023274] text-[10px] sm:text-xs font-black uppercase tracking-[0.4em]">
              Healthcare Excellence
            </span>
          </motion.div>

          {/* Heading with Vertical Bar */}
          <motion.div variants={itemVariants} className="flex gap-6 items-start mb-8">
            <div className="w-1.5 h-24 bg-[#023274] mt-2 flex-shrink-0" />
            <motion.h1
              className="text-6xl sm:text-7xl lg:text-[5.5rem] font-black text-[#023274] leading-[0.95] tracking-tighter"
            >
              For a <br />
              Healthier <br />
              <span className="text-[#3B82F6]">India.</span>
            </motion.h1>
          </motion.div>

          {/* Paragraph */}
          <motion.p
            variants={itemVariants}
            className="text-[#023274]/80 text-lg lg:text-xl mb-12 max-w-lg font-medium leading-relaxed pl-8"
          >
            Transforming lives through medical excellence and relentless innovation.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap items-center gap-4"
          >
            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link
                to="/contact"
                className="px-10 py-4 rounded-2xl font-black transition-all text-white text-sm lg:text-base shadow-xl shadow-[#023274]/20"
                style={{ backgroundColor: "#023274" }}
              >
                Get In Touch
              </Link>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} transition={{ type: "spring", stiffness: 400, damping: 15 }}>
              <Link
                to="/about"
                className="px-10 py-4 rounded-2xl font-black transition-all text-[#023274] bg-[#F1F5F9] border-2 border-transparent hover:border-[#023274]/10 text-sm lg:text-base"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
