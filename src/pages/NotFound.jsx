import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4">
      <motion.div
        className="text-center max-w-md"
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="text-[120px] font-bold leading-none mb-4"
          style={{
            background: "linear-gradient(135deg, #58b66a, #023274)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          404
        </motion.div>
        <h1 className="text-2xl font-bold text-[#023274] mb-3">Page Not Found</h1>
        <p className="text-[#8F8F8F] mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <motion.div
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          transition={{ type: "spring", stiffness: 380, damping: 24 }}
          className="inline-block"
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white px-6 py-3 rounded-full font-semibold"
            style={{ backgroundColor: "#58b66a" }}
          >
            Back to Home <ArrowRight size={15} />
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
