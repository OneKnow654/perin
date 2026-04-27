import { motion } from "framer-motion";
import { useCounter } from "../hooks/useCounter";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

function StatItem({ raw, label, delay = 0 }) {
  // Extract numeric part from strings like "50+", "10M+", "04"
  const numeric = parseInt(raw.replace(/\D/g, ""), 10) || 0;
  const suffix = raw.replace(/[0-9]/g, ""); // "+", "M+", etc.
  const { value, ref } = useCounter(numeric, 800, delay);

  return (
    <motion.div
      ref={ref}
      variants={fadeUp}
      className="text-center px-6 py-8"
    >
      <div className="text-4xl lg:text-5xl font-bold text-[#58b66a] leading-none mb-2">
        {value}
        <span>{suffix}</span>
      </div>
      <p className="text-sm font-medium text-[#023274]/70">{label}</p>
    </motion.div>
  );
}

/**
 * Props:
 *  stats – [{ number: "50+", label: "..." }]
 *  bgClass
 */
export default function StatsBanner({ stats = [], bgClass = "bg-[#023274]" }) {
  return (
    <section className={bgClass}>
      <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {stats.map((s, i) => (
            <StatItem key={i} raw={s.number} label={s.label} delay={i * 80} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
