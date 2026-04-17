import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AnimatedSection() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

// TEXT 1
const opacity1 = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
const y1 = useTransform(scrollYProgress, [0, 0.3], [0, -80]);

// TEXT 2
// TEXT 2 (fade in + fade out)
const opacity2 = useTransform(
  scrollYProgress,
  [0.3, 0.45, 0.6],
  [0, 1, 0]
);

const y2 = useTransform(
  scrollYProgress,
  [0.3, 0.45, 0.6],
  [80, 0, -80]
);

// TEXT 3
const opacity3 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
const y3 = useTransform(scrollYProgress, [0.6, 0.8], [80, 0]);

  // BACKGROUND TRANSITION
  const background = useTransform(
    scrollYProgress,
    [0, 1],
    ["#ffffff", "#F2F1ED"]
  );

  // SCALE EFFECT
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <motion.section
      ref={ref}
      style={{ background }}
      className="h-[300vh]"
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">

        <motion.div
          style={{ scale }}
          className="relative text-center max-w-3xl px-4"
        >

          {/* TEXT 1 */}
          <motion.h2
            style={{ opacity: opacity1, y: y1 }}
            className="text-3xl md:text-5xl font-bold text-[#023274]"
          >
            We believe healthcare should be simple.
          </motion.h2>

          {/* TEXT 2 */}
          <motion.h2
            style={{ opacity: opacity2, y: y2 }}
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-[#023274]"
          >
            We bring innovation and precision together.
          </motion.h2>

          {/* TEXT 3 */}
          <motion.h2
            style={{ opacity: opacity3, y: y3 }}
            className="absolute inset-0 flex items-center justify-center text-3xl md:text-5xl font-bold text-[#023274]"
          >
            Delivering care that truly matters.
          </motion.h2>

        </motion.div>
      </div>
    </motion.section>
  );
}