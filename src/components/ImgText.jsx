import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeLeft, fadeRight, viewport } from "../utils/animations";
import whatWeDoImg from "../assets/Images/WhatWeDo2.png";

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function ImgText() {
  return (
    <section className="relative min-h-[100dvh] flex items-center bg-[#F8FAFC] overflow-hidden py-20 lg:py-32">
      {/* Editorial Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3B82F6_1px,transparent_1px)] [background-size:48px_48px] opacity-[0.1]" />
      </div>

      <div
        className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        {/* Left Content */}
        <motion.div
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-4 mb-8"
          >
            <div className="w-12 h-[2px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-xs lg:text-sm font-black uppercase tracking-[0.5em]">What We Do</span>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-6 items-start mb-10">
            <div className="w-2 h-24 bg-[#023274] mt-2 flex-shrink-0" />
            <motion.h2 className="text-5xl lg:text-7xl font-black leading-[1] text-[#023274] tracking-tighter">
              Collaborating <br />
              <span className="text-[#3B82F6]">for Global Health</span>
            </motion.h2>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg lg:text-2xl leading-relaxed max-w-xl text-slate-600 mb-12 font-medium"
          >
            Building bridges between global medical innovation and local patient care. We deliver trusted, high-quality solutions that transform healthcare outcomes.
          </motion.p>

          <motion.div
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 10 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-[#023274] text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-[#023274]/20 hover:bg-[#023274]/90 transition-all text-base lg:text-lg"
            >
              Get In Touch
              <div className="w-8 h-[1px] bg-white/40" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative group"
        >
          <div className="absolute -inset-4 bg-gradient-to-br from-[#3B82F6]/20 to-transparent rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative overflow-hidden rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-white">
            <motion.img
              src={whatWeDoImg}
              alt="Healthcare Excellence"
              className="w-full h-full object-cover aspect-[4/5] lg:aspect-auto lg:h-[600px]"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8 }}
            />
          </div>
          {/* Accent decoration */}
          <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-[#3B82F6]/10 rounded-full blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
