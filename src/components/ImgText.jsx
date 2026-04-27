import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import whatWeDoImg from "../assets/Images/WhatWeDo2.png";
import { fadeLeft, fadeRight, viewport, fadeUp } from "../utils/animations";

export default function ImgText() {
  return (
    <section className="py-20 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Top Tagline */}
            <motion.div 
              className="flex items-center gap-3 mb-6"
              variants={fadeUp}
            >
              <div className="w-8 h-[2px] bg-primary" />
              <span className="text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.4em]">
                What We Do
              </span>
            </motion.div>

            {/* Headline with Vertical Bar */}
            <div className="flex gap-6 items-start mb-8">
              <div className="w-1.5 h-16 lg:h-20 bg-primary flex-shrink-0" />
              <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-primary block">Collaborating</span>
                <span className="text-accent">for Global Health</span>
              </h2>
            </div>

            {/* Paragraph */}
            <div className="space-y-6 mb-10 pl-8 lg:pl-10">
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                Building bridges between global medical innovation and local patient care. 
                We deliver trusted, high-quality solutions that transform healthcare outcomes.
              </p>
            </div>

            {/* Button */}
            <motion.div
              className="pl-8 lg:pl-10"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-4 bg-primary text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-primary/20 group"
              >
                Get In Touch
                <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all duration-300" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Content */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="relative group">
              {/* Decorative Glow */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative aspect-square sm:aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
                <motion.img
                  src={whatWeDoImg}
                  alt="Collaborating for Global Health"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
