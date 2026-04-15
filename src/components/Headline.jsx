import { motion } from "framer-motion";
import { fadeUp, viewport } from "../utils/animations";

export default function Headline() {
  return (
    <motion.div
      className="py-12 lg:py-16 text-center max-w-4xl mx-auto px-4"
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
    >
      <p className="text-lg lg:text-2xl font-light text-[#023274] leading-relaxed">
        <span className="font-semibold">"</span>
        A clinical trial on{" "}
        <span
          className="font-semibold"
          style={{
            background: "linear-gradient(135deg, #58b66a, #023274)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          dry eye management
        </span>{" "}
        is in the pipeline, conducted in collaboration with{" "}
        <span className="font-semibold">SSI-Mumbai</span>.
        <span className="font-semibold">"</span>
      </p>
      <motion.div
        className="w-16 h-[2px] bg-[#58b66a] mx-auto mt-6"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={viewport}
        transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        style={{ transformOrigin: "left" }}
      />
    </motion.div>
  );
}
