import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeLeft, fadeRight, viewport } from "../utils/animations";
import whatWeDoImg from "../assets/Images/WhatWeDo2.png";

export default function ImgText() {
  return (
    <section className="min-h-[100dvh] flex items-center bg-white">
      <div
        className="max-w-[1400px] mx-auto px-4 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2"
      >
        {/* Left Content */}
        <motion.div
          className="p-10 lg:p-16 flex flex-col justify-center"
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <p className="text-[37px] mb-3 text-gray-500 font-medium">What We Do.</p>
          <h2 className="text-[41px] font-light leading-tight mb-6 text-[#023274]">
            Collaborating{" "}
            <span className="font-bold">for Global Health</span>
          </h2>
          <p className="text-[22px] leading-relaxed max-w-xl text-gray-600 mb-8">
            Perin Healthcare partners with global healthcare leaders to deliver trusted,
            high‑quality medicines and medical devices. We are committed to making healthcare
            accessible to everyone, everywhere—providing effective solutions that improve
            patient outcomes worldwide.
          </p>

          <motion.div
            whileHover={{ scale: 1.04, x: 4 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 360, damping: 24 }}
            className="self-start"
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#023274] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#023274]/90 transition-colors"
            >
              Learn more →
            </Link>
          </motion.div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          variants={fadeRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="overflow-hidden"
        >
          <motion.img
            src={whatWeDoImg}
            alt="Healthcare"
            className="h-[400px] lg:h-auto w-full object-cover rounded-xl shadow-lg"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </motion.div>
      </div >
    </section >
  );
}
