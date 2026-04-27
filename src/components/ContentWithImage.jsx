import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeLeft, fadeRight, viewport, fadeUp } from "../utils/animations";

/**
 * Props:
 *  tag, title, accent, paragraphs (array of strings), btnText, btnLink, reverse, bgClass
 */
export default function ContentWithImage({
  tag,
  title,
  accent,
  paragraphs = [],
  btnText,
  btnLink = "/contact",
  reverse = false,
  bgClass = "",
  imageSrc,
  imageAlt = "Section image",
}) {
  return (
    <section className={`py-20 lg:py-32 ${bgClass} overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Text Content */}
          <motion.div
            className={reverse ? "lg:order-2" : ""}
            variants={reverse ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {tag && (
              <motion.div 
                className="flex items-center gap-3 mb-6"
                variants={fadeUp}
              >
                <div className="w-8 h-[2px] bg-primary" />
                <span className="text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.4em]">
                  {tag}
                </span>
              </motion.div>
            )}

            <div className="flex gap-6 items-start mb-8">
              <div className="w-1.5 h-16 lg:h-20 bg-primary flex-shrink-0" />
              <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight">
                <span className="text-primary block">{title}</span>
                <span className="text-accent">{accent}</span>
              </h2>
            </div>

            <div className="space-y-6 mb-10 pl-8 lg:pl-10">
              {paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-gray-600 leading-relaxed max-w-xl font-medium">
                  {p}
                </p>
              ))}
            </div>

            {btnText && (
              <motion.div
                className="pl-8 lg:pl-10"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Link
                  to={btnLink}
                  className="inline-flex items-center gap-4 bg-primary text-white px-10 py-4 rounded-2xl font-black transition-all shadow-xl shadow-primary/20 group"
                >
                  {btnText}
                  <div className="w-8 h-[1px] bg-white/30 group-hover:w-12 transition-all duration-300" />
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Image Content */}
          <motion.div
            className={reverse ? "lg:order-1" : ""}
            variants={reverse ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="relative group">
              {/* Decorative Background Blob */}
              <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />
              
              <div className="relative aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl border border-white/20">
                {imageSrc ? (
                  <motion.img
                    src={imageSrc}
                    alt={imageAlt}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                  />
                ) : (
                  <div className="w-full h-full bg-gray-50 flex items-center justify-center">
                    <span className="text-gray-300 text-sm font-mono tracking-widest uppercase">Visual Asset Placeholder</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
