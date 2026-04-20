'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import DotGrid from "./DotGrid";

export default function AnimatedSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

  const opacity2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [0, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.3, 0.45, 0.6], [80, 0, -80]);

  const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.8], [80, 0]);

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative h-[300vh]">

      {/* 🔵 DotGrid Background */}
      <div className="absolute inset-0 z-0">
        <DotGrid />
      </div>

      {/* 🟡 Soft overlay for readability */}
      <div className="absolute inset-0 bg-white/60 z-10" />

      {/* 🔴 Content */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center z-20">

        <h1 className="text-4xl md:text-6xl font-bold text-[#023274] mb-10">
          Why Perin?
        </h1>

        <motion.div
          style={{ scale }}
          className="relative text-center max-w-3xl px-4"
        >

          <motion.h2 style={{ opacity: opacity1, y: y1 }} className="text-3xl md:text-5xl font-bold text-[#023274]">
            We believe healthcare should be simple.
          </motion.h2>

          <motion.h2 style={{ opacity: opacity2, y: y2 }} className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-[#023274]">
            We bring innovation and precision together.
          </motion.h2>

          <motion.h2 style={{ opacity: opacity3, y: y3 }} className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-[#023274]">
            Delivering care that truly matters.
          </motion.h2>

        </motion.div>
      </div>
    </section>
  );
}