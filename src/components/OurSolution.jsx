import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { solutions } from "../data/config";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

export default function OurSolution() {
  return (
    <section className="py-16 lg:py-24 bg-white min-h-[100dvh] flex flex-col justify-center" aria-labelledby="our-solutions-heading">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.h2
          id="our-solutions-heading"
          className="text-3xl lg:text-4xl font-bold text-[#023274] mb-10 text-left"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Our solutions
        </motion.h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {solutions.map((item, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="group flex flex-col sm:flex-row items-stretch bg-[#F5F5F5] rounded-2xl overflow-hidden min-h-[200px] shadow-sm"
              whileHover={{
                boxShadow: "0 8px 40px rgba(2,50,116,0.13)",
                y: -3,
              }}
              transition={{ duration: 0.32, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="flex flex-col justify-center p-8 lg:p-10 flex-1 min-w-0">
                <h3 className="text-xl font-bold text-[#023274] mb-4">{item.title}</h3>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  className="self-start"
                >
                  <Link
                    to={item.href}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#4e9695] hover:opacity-80 transition-opacity"
                  >
                    Learn more
                    <span className="text-base leading-none" aria-hidden="true">→</span>
                  </Link>
                </motion.div>
              </div>

              <div className="relative flex sm:w-[46%] min-h-[160px] sm:min-h-0 items-end justify-end sm:justify-center p-4 sm:pl-0 overflow-hidden">
                <motion.img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-[220px] w-full max-w-[280px] sm:max-w-none object-contain object-right sm:object-center translate-x-1 sm:translate-x-3 md:translate-x-4 select-none pointer-events-none"
                  loading="lazy"
                  whileHover={{ scale: 1.06, x: -4 }}
                  transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
