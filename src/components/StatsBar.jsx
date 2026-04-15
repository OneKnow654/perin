import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useCounter } from "../hooks/useCounter";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

// Individual stat card with its own counter animation
function StatCard({ value, label, theme, delay = 0 }) {
  const { value: count, ref } = useCounter(value, 900, delay);
  const isDark = theme === "dark";

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className={`rounded-2xl p-6 lg:p-8 flex flex-col justify-center min-h-[160px] lg:min-h-[220px] ${
        isDark ? "bg-[#0F3D3E]" : "bg-white"
      }`}
    >
      <motion.h3
        className={`text-4xl lg:text-6xl font-bold leading-none ${
          isDark ? "text-[#58b66a]" : "text-[#58b66a]"
        }`}
      >
        {String(count).padStart(2, "0")}
      </motion.h3>
      <p className={`font-medium text-sm lg:text-base mt-2 ${isDark ? "text-white/70" : "text-[#023274]"}`}>
        {label}
      </p>
    </motion.div>
  );
}

function ImageCard({ src, alt, className = "" }) {
  return (
    <motion.div
      variants={fadeUp}
      className={`rounded-2xl overflow-hidden bg-[#023274]/10 ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        onError={(e) => (e.target.style.display = "none")}
      />
    </motion.div>
  );
}

export default function StatsBar() {
  return (
    <section className="py-16 lg:py-24 bg-[#F2F1ED]">
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.h2
          className="text-2xl lg:text-3xl font-bold text-[#023274] mb-8 lg:mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          Perin Healthcare at a Glance
        </motion.h2>

        {/* Grid Row 1 */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="col-span-1 lg:col-span-2">
            <StatCard value={2} label="Global Partnership" theme="light" delay={0} />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <StatCard value={4} label="Major Therapy Area" theme="dark" delay={100} />
          </div>
          <ImageCard
            src="/images/perin-glance-1.jpg"
            alt="Healthcare professional"
            className="col-span-2 min-h-[160px] lg:min-h-[220px]"
          />
        </motion.div>

        {/* Grid Row 2 */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4 mt-3 lg:mt-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <ImageCard
            src="/images/perin-glance-2.jpg"
            alt="Manufacturing facility"
            className="col-span-2 lg:col-span-3 min-h-[160px] lg:min-h-[220px]"
          />
          <div className="col-span-1">
            <StatCard value={2} label="First‑in‑India Brands" theme="dark" delay={100} />
          </div>
          <div className="col-span-1 lg:col-span-2">
            <StatCard value={2} label="Patented Devices" theme="light" delay={200} />
          </div>
        </motion.div>

        {/* Grid Row 3 */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-6 gap-3 lg:gap-4 mt-3 lg:mt-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <div className="col-span-2 lg:col-span-2">
            <StatCard value={10} label="Trusted Global Brands" theme="dark" delay={0} />
          </div>

          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl overflow-hidden col-span-2 lg:col-span-4 min-h-[220px] bg-[#023274]/10"
          >
            <motion.img
              src="/images/perin-glance-3.jpg"
              alt="Healthcare overview"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
              onError={(e) => (e.target.style.display = "none")}
            />
            <div className="absolute bottom-4 right-4 lg:bottom-6 lg:right-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
              >
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 bg-[#023274] text-white px-6 py-3 rounded-full font-semibold text-sm hover:bg-[#023274]/90 transition-colors"
                >
                  Learn more about Perin →
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
