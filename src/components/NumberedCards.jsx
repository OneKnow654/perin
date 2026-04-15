import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

/**
 * Props:
 *  items – [{ num?, Icon?, title, desc }]
 *  cols  – 2 | 3 | 4  (default 4)
 *  bgClass – optional section bg class
 *  heading, subheading – optional section header
 */
export default function NumberedCards({ items = [], cols = 4, bgClass = "bg-[#F2F1ED]", heading, subheading }) {
  const gridCols = {
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  }[cols] ?? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4";

  return (
    <section className={`py-16 lg:py-20 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        {(heading || subheading) && (
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {subheading && (
              <p className="text-xs font-semibold uppercase tracking-widest text-[#58b66a] mb-3">
                {subheading}
              </p>
            )}
            {heading && (
              <h2 className="text-3xl lg:text-4xl font-light text-[#023274]"
                dangerouslySetInnerHTML={{ __html: heading }}
              />
            )}
          </motion.div>
        )}

        <motion.div
          className={`grid ${gridCols} gap-6`}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-white rounded-2xl p-7 border border-[#DFE1DE]"
              whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(2,50,116,0.10)" }}
              transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {item.num && (
                <span className="text-[#58b66a] font-bold text-sm">{item.num}</span>
              )}
              {item.Icon && (
                <div className="w-12 h-12 rounded-full bg-[#58b66a]/10 flex items-center justify-center mb-4">
                  <item.Icon size={20} className="text-[#58b66a]" />
                </div>
              )}
              <h4 className={`font-bold text-[#023274] mb-2 ${item.num ? "mt-2" : ""}`}>
                {item.title}
              </h4>
              <p className="text-[#454040] text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
