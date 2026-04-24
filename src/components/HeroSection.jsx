import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.14, delayChildren: 0.3 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.72, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function HeroSection() {
  return (
    <section className="p-3 sm:p-4 lg:p-6 min-h-[92dvh] flex flex-col">
      <div className="relative overflow-hidden rounded-[20px] flex-1 flex items-center w-full">

        {/* Video Background */}
        <video
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover object-top"
        >
          <source src="/src/assets/videos/home-banner-video1.mp4" type="video/mp4" />
        </video>

        {/* Subtle gradient overlay for text legibility */}
        <div className="absolute inset-0 bg-black/25" />

        {/* Content */}
        <div className="relative z-10 w-full max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12 py-16 lg:py-24">
          <motion.div
            className="max-w-4xl"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight mb-4 lg:mb-6 drop-shadow-lg"
            >
              A medicine company working
              <span className="font-bold block text-white">today for a</span>
              <span className="font-bold drop-shadow-md">
                healthier nation tomorrow
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-white text-xly lg:text-2xl mb-6 lg:mb-8 max-w-2xl drop-shadow-md"
            >
              Empowering healthcare, Transforming lives
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                <Link
                  to="/contact"
                  className="block bg-accent text-white px-7 py-3 rounded-full font-semibold hover:bg-accent/90 transition-colors text-center text-sm lg:text-base"
                  style={{ backgroundColor: "var(--color-accent)" }}
                >
                  Get In Touch
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                <Link
                  to="/about"
                  className="block bg-white/90 text-primary px-7 py-3 rounded-full font-semibold hover:bg-white transition-colors text-center text-sm lg:text-base"
                  style={{ color: "var(--color-primary)" }}
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
