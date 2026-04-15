import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { whyPerinTabs } from "../data/config";
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewport } from "../utils/animations";

export default function WhyPerin() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section className="py-16 relative bg-[#F2F1ED]/40" id="why-perin">
      <div className="max-w-6xl mx-auto relative z-10 px-4">
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-[#023274] text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Why Perin Healthcare?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-10 items-stretch">
          {/* LEFT: Quote with background image */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[340px]"
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/images/perin-about-approach.jpg')" }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50" />
            {/* Content */}
            <div className="relative z-10 flex flex-col justify-center h-full p-8 lg:p-16 text-white">
              <span className="text-6xl opacity-20 absolute top-4 left-6">"</span>
              <p className="text-xl lg:text-2xl font-semibold leading-[1.9]">
                Guided by the philosophy of{" "}
                <span style={{ color: "#58b66a" }}>
                  essential medicines and devices for everyone, everywhere
                </span>
                , Perin Healthcare develops, leads, and expands to touch the lives of patients
                across the globe.
              </p>
              <motion.div
                className="w-12 h-[3px] mt-6"
                style={{ backgroundColor: "#58b66a" }}
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={viewport}
                transition={{ duration: 0.6, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                style={{ backgroundColor: "#58b66a", transformOrigin: "left" }}
              />
            </div>
          </motion.div>

          {/* RIGHT: Accordion Tabs */}
          <motion.div
            className="flex flex-col gap-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {whyPerinTabs.map((tab, i) => {
              const isOpen = expanded === i;
              return (
                <motion.div
                  key={i}
                  variants={fadeRight}
                  className="border border-gray-200 rounded-xl overflow-hidden"
                  onHoverStart={() => expanded === null && setExpanded(i)}
                  onHoverEnd={() => expanded === i && setExpanded(null)}
                >
                  <button
                    className="w-full p-5 text-left flex justify-between items-center cursor-pointer bg-white hover:bg-[#F2F1ED]/60 transition-colors"
                    onClick={() => setExpanded(isOpen ? null : i)}
                  >
                    <h3 className="text-lg font-semibold text-[#023274]">{tab.title}</h3>
                    <motion.span
                      className="text-xl leading-none text-[#023274] font-light"
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                      +
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.28, delay: 0.06 },
                          },
                        }}
                        exit={{
                          height: 0,
                          opacity: 0,
                          transition: {
                            height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
                            opacity: { duration: 0.18 },
                          },
                        }}
                        className="overflow-hidden bg-white"
                      >
                        <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                          {tab.content}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
