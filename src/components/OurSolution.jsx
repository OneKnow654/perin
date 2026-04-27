import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { solutions } from "../data/config";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";
import { useComingSoon } from "../context/ComingSoonContext";

export default function OurSolution() {
  const { openComingSoon } = useComingSoon();

  return (
    <section className="relative py-20 lg:py-28 bg-[#F8FAFC] overflow-hidden" aria-labelledby="our-solutions-heading">
      {/* Background Texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.4]"
        style={{ backgroundImage: 'radial-gradient(#CBD5E0 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="relative z-10 w-full max-w-[1300px] mx-auto px-6 lg:px-12">
        {/* Editorial Header */}
        <div className="mb-10 lg:mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex items-center gap-4 mb-6"
          >
            <div className="w-12 h-[2px] bg-[#3B82F6]" />
            <span className="text-[#3B82F6] text-sm lg:text-base font-black uppercase tracking-[0.5em]">Our Solutions</span>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex gap-8 items-start"
          >
            <div className="w-2.5 h-24 bg-[#023274] mt-3 flex-shrink-0" />
            <h2 id="our-solutions-heading" className="text-6xl lg:text-6xl font-black text-[#023274] tracking-tighter leading-[0.95]">
              Empowering Healthcare <br />
              <span className="text-[#3B82F6]">through Innovation.</span>
            </h2>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {solutions.map((item, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="group relative flex flex-col sm:flex-row items-stretch bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 transition-all duration-500"
              whileHover={{
                y: -6,
                borderColor: "rgba(59, 130, 246, 0.2)",
                boxShadow: "0 30px 60px -12px rgba(2, 50, 116, 0.08)"
              }}
            >
              {/* Subtle Card Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 to-[#3B82F6]/0 group-hover:from-blue-50/50 group-hover:to-transparent transition-all duration-500" />

              <div className="relative z-10 flex flex-col justify-center p-8 lg:p-10 flex-1 min-w-0">
                <h3 className="text-xl lg:text-2xl font-black text-[#023274] mb-4 tracking-tight group-hover:text-[#3B82F6] transition-colors">
                  {item.title}
                </h3>

                <motion.div
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  className="self-start"
                >
                  {item.href === "coming-soon" ? (
                    <button
                      onClick={openComingSoon}
                      className="inline-flex items-center gap-3 text-sm font-black text-[#3B82F6] group/btn"
                    >
                      Learn more
                      <div className="w-6 h-[1px] bg-[#3B82F6]/30 group-hover/btn:w-10 transition-all" />
                    </button>
                  ) : (
                    <Link
                      to={item.href}
                      className="inline-flex items-center gap-3 text-sm font-black text-[#3B82F6] group/btn"
                    >
                      Learn more
                      <div className="w-6 h-[1px] bg-[#3B82F6]/30 group-hover/btn:w-10 transition-all" />
                    </Link>
                  )}
                </motion.div>
              </div>

              <div className="relative flex sm:w-[40%] min-h-[180px] sm:min-h-0 items-center justify-center p-6 overflow-hidden">
                {/* Glow behind image on hover */}
                <div className="absolute inset-0 bg-[#3B82F6]/0 group-hover:bg-[#3B82F6]/5 blur-3xl transition-all duration-500 rounded-full scale-50" />

                <motion.img
                  src={item.image}
                  alt={item.alt}
                  className="relative z-10 max-h-[200px] w-full object-contain select-none pointer-events-none"
                  loading="lazy"
                  initial={{ scale: item.scale || 1 }}
                  animate={{ scale: item.scale || 1 }}
                  whileHover={{ scale: (item.scale || 1) * 1.08 }}
                  transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
