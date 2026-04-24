import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.13, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.68, ease: [0.25, 0.46, 0.45, 0.94] } },
};

/**
 * Props:
 *  type       – "video" | "image" | "gradient"
 *  src        – URL for video/image
 *  overlay    – boolean
 *  overlayOpacity – tailwind class e.g. "bg-black/40"
 *  title, accent, highlight
 *  desc
 *  breadcrumbs – [{ label, link? }]
 *  buttons    – [{ text, link, style: "primary"|"secondary" }]
 */
export default function PageHeader({
  type = "gradient",
  src,
  overlay = true,
  overlayOpacity = "bg-black/40",
  title,
  accent,
  highlight,
  desc,
  breadcrumbs = [],
  buttons = [],
}) {
  return (
    <section className="p-3 sm:p-4 lg:p-6">
      {/* Breadcrumbs */}
      {breadcrumbs.length > 0 && (
        <div className="pl-3 mb-3">
          <nav className="text-sm flex flex-wrap items-center gap-1">
            <Link to="/" className="text-[#023274]/60 hover:text-[#023274] transition-colors">
              Home
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-1">
                <span className="text-[#023274]/30 mx-1">/</span>
                {crumb.link && i !== breadcrumbs.length - 1 ? (
                  <Link to={crumb.link} className="text-[#023274]/60 hover:text-[#023274] transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-[#58b66a] font-medium">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        </div>
      )}

      {/* Banner Box */}
      <div className="relative overflow-hidden rounded-[20px] min-h-[40vh] lg:min-h-[80vh] flex items-center">
        {/* Background */}
        {type === "video" && src ? (
          <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover object-top">
            <source src={src} type="video/mp4" />
          </video>
        ) : type === "image" && src ? (
          <img src={src} alt="Banner" className="absolute inset-0 w-full h-full object-cover object-top" />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-[#023274] via-[#023274]/90 to-[#58b66a]/70">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_20%_30%,white,transparent_40%)]" />
          </div>
        )}

        {/* Overlay */}
        {overlay && <div className={`absolute inset-0 ${overlayOpacity}`} />}

        {/* Content */}
        <div className="relative z-10 w-full max-w-[2000px] mx-auto px-6 sm:px-8 lg:px-12 pt-12 pb-16 lg:pt-16 lg:pb-20">
          <motion.div
            className="max-w-xl text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {title && (
              <motion.h1
                variants={item}
                className="text-3xl sm:text-4xl lg:text-6xl font-light text-white leading-tight mb-4 lg:mb-6 drop-shadow-lg"
              >
                {title}
                {accent && <span className="font-bold block text-white">{accent}</span>}
                {highlight && (
                  <span className="font-bold drop-shadow-md" style={{ color: "#ffffffff" }}>
                    {highlight}
                  </span>
                )}
              </motion.h1>
            )}

            {desc && (
              <motion.p variants={item} className="text-white text-xl lg:text-2xl mb-6 lg:mb-8 max-w-2xl drop-shadow-md">
                {desc}
              </motion.p>
            )}

            {buttons.length > 0 && (
              <motion.div variants={item} className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                {buttons.map((btn, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  >
                    <Link
                      to={btn.link}
                      className={`block px-7 py-3 rounded-full font-semibold transition-colors text-center text-sm lg:text-base ${btn.style === "secondary"
                        ? "bg-white/90 text-[#023274] hover:bg-white"
                        : "text-white hover:opacity-90"
                        }`}
                      style={btn.style !== "secondary" ? { backgroundColor: "#58b66a" } : {}}
                    >
                      {btn.text}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
