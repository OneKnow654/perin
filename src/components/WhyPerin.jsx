import { useState, useCallback } from "react";
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

  return (
    <section className="py-24 bg-[#F2F1ED]/40 text-center">
      <div className="max-w-3xl mx-auto px-4">
        <div className="mt-10 flex flex-col items-center">

          <div className="text-3xl md:text-5xl font-bold text-[#023274]">
            <span className="mr-2">We</span>
            <span className="inline-block min-w-[160px] text-center">
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

        <div className="mt-6 relative h-[120px]">
          <AnimatePresence mode="wait">
            <motion.p
              key={current.content}
              variants={slideBlur}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={slideBlur.transition}
              className="mt-6 text-gray-600 text-base md:text-lg leading-relaxed max-w-2xl"
            >
              {current.content}
            </motion.p>
          </AnimatePresence>
          </div>

          <div className="mt-10 flex items-center gap-6">

            <button
              onClick={prev}
              aria-label="Previous slide"
              className="p-2 rounded-full border hover:bg-white transition"
            >
              <ChevronLeft size={22} />
            </button>

            <div className="flex gap-2">
              {whyPerinTabs.map((_, i) => (
                <button
                  key={i}
                  onClick={() => handleDotClick(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i === index
                      ? "bg-[#023274] scale-125"
                      : "bg-gray-300"
                  }`}
                />
              ))}
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