import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { fadeLeft, fadeRight, viewport } from "../utils/animations";

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
    <section className={`py-16 lg:py-24 ${bgClass}`}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <motion.div
            className={reverse ? "lg:order-2" : ""}
            variants={reverse ? fadeRight : fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {tag && (
              <p className="text-xs font-semibold uppercase tracking-widest text-[#58b66a] mb-3">
                {tag}
              </p>
            )}
            <h2 className="text-3xl lg:text-4xl font-light text-[#023274] mb-6">
              {title} <span className="font-bold">{accent}</span>
            </h2>
            {paragraphs.map((p, i) => (
              <p key={i} className="text-[#454040] leading-relaxed mb-4">
                {p}
              </p>
            ))}
            {btnText && (
              <motion.div
                className="mt-2 self-start inline-block"
                whileHover={{ scale: 1.04, x: 4 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
              >
                <Link
                  to={btnLink}
                  className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold transition-colors"
                  style={{ backgroundColor: "#58b66a" }}
                >
                  {btnText} <ArrowRight size={15} />
                </Link>
              </motion.div>
            )}
          </motion.div>

          {/* Image / Placeholder */}
          <motion.div
            className={reverse ? "lg:order-1" : ""}
            variants={reverse ? fadeLeft : fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <div className="bg-[#F2F1ED] rounded-2xl aspect-[4/3] overflow-hidden flex items-center justify-center">
              {imageSrc ? (
                <motion.img
                  src={imageSrc}
                  alt={imageAlt}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              ) : (
                <span className="text-[#8F8F8F] text-sm">[Image]</span>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
