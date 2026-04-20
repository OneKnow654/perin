import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whyPerinTabs } from "../data/config";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { slideBlur } from "../utils/animations";

export default function WhyPerin() {
  const [index, setIndex] = useState(0);

  const current = whyPerinTabs[index] ?? whyPerinTabs[0];

  const next = useCallback(() => {
    setIndex(prev => (prev + 1) % whyPerinTabs.length);
  }, []);

  const prev = useCallback(() => {
    setIndex(prev =>
      prev === 0 ? whyPerinTabs.length - 1 : prev - 1
    );
  }, []);

  const handleDotClick = useCallback((i) => {
    setIndex(i);
  }, []);

  // ✅ Auto slide every 10s
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % whyPerinTabs.length);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-24 bg-[#F2F1ED]/40 text-center">
      <div className="max-w-3xl mx-auto px-4">

        <div className="mt-10 flex flex-col items-center">

          {/* ✅ FIXED HEADING SPACING */}
          <div className="text-3xl md:text-5xl font-bold text-[#023274] leading-tight text-center">
            <span className="inline">We </span>

            <span className="inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.title}
                  variants={slideBlur}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={slideBlur.transition}
                  className="inline-block"
                >
                  {current.title}
                </motion.span>
              </AnimatePresence>
            </span>
          </div>

          {/* CONTENT */}
          <div className="mt-6 relative h-[120px]">
            <AnimatePresence mode="wait">
              <motion.p
                key={current.content}
                variants={slideBlur}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={slideBlur.transition}
                className="text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto"
              >
                {current.content}
              </motion.p>
            </AnimatePresence>
          </div>

          {/* CONTROLS */}
          {/* SINGLE TRACK WITH MOVING ACTIVE SEGMENT */}
          <div className="flex items-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="p-2 rounded-full border hover:bg-white transition"
            >
              <ChevronLeft size={22} />
            </button>

            {/* Track */}
            <div className="relative w-40 md:w-56 h-1 bg-gray-300 rounded-full">

              {/* Moving Active Segment */}
              <motion.div
                className="absolute top-0 left-0 h-full w-1/3 bg-[#023274] rounded-full"
                animate={{
                  x: `${index * 100}%`
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeInOut"
                }}
                style={{
                  width: `${100 / whyPerinTabs.length}%`
                }}
              />
            </div>

            <button
              onClick={next}
              aria-label="Next slide"
              className="p-2 rounded-full border hover:bg-white transition"
            >
              <ChevronRight size={22} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}