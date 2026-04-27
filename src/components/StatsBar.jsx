import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  whileHover: { scale: 1.025, transition: { duration: 0.2 } },
});

export default function PerinHealthcareBento() {
  return (
    <div className="min-h-[95dvh] flex flex-col items-center py-8 bg-surface-light font-sans">
      <div className="container-fluid flex-1 flex flex-col">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 shrink-0"
        >
          <h1 className="text-step-4 font-extrabold text-primary m-0 tracking-tight">
            Perin Healthcare at a Glance
          </h1>
          <div className="flex gap-2 mt-2">
            <div className="h-1 w-10 rounded-full bg-accent" />
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 min-h-[480px]">
          {/* 1 — Global Partnership */}
          <motion.div {...fadeUp(0)} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-surface-divider shadow-md relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center">
               <div className="w-40 h-40 border-2 border-accent rounded-full" />
            </div>
            <span className="text-step-4 font-black text-accent leading-none">02+</span>
            <span className="text-step-0 font-bold text-text-light text-center uppercase tracking-widest">Global Partnership</span>
          </motion.div>

          {/* 2 — Major Therapy Area */}
          <motion.div {...fadeUp(0)} className="bg-accent rounded-2xl p-4 flex flex-col items-center justify-center gap-2 shadow-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-white/10 opacity-50 pointer-events-none" />
            <span className="text-step-4 font-black text-white leading-none relative z-10">04+</span>
            <span className="text-step-0 font-bold text-white/90 text-center uppercase tracking-widest relative z-10">Major Therapy Area</span>
          </motion.div>

          {/* 3 — Lab Image */}
          <motion.div {...fadeUp(0)} className="sm:col-span-2 rounded-2xl overflow-hidden shadow-md">
            <img
              src="https://media.akums.in/img/pharmaceutical/pbanner.webp"
              alt="Lab researchers"
              className="w-full h-full object-cover object-center block"
            />
          </motion.div>

          {/* 4 — Wide Pharma Partner */}
          <motion.div {...fadeUp(0)} className="sm:col-span-2 bg-white rounded-2xl overflow-hidden flex flex-row border border-surface-divider shadow-md">
            <div className="w-2/5 shrink-0 overflow-hidden">
              <img
                src="https://www.shutterstock.com/image-photo/pharmacy-stock-tablet-indian-pharmacist-260nw-2273374373.jpg"
                alt="Pharmaceutical medicines"
                className="w-full h-full object-cover block"
              />
            </div>
            <div className="flex flex-col justify-center p-4 gap-2">
              <span className="text-step-2 font-extrabold text-primary leading-tight">Global Pharma Partner</span>
              <div className="h-1 w-8 rounded-full bg-accent" />
              <span className="text-step-0 text-text-light font-medium">Pharmaceutical Manufacturer in India</span>
            </div>
          </motion.div>

          {/* 5 — Patented Devices */}
          <motion.div {...fadeUp(0)} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-surface-divider shadow-md">
            <span className="text-step-4 font-black text-accent leading-none">02+</span>
            <span className="text-step-0 font-bold text-text-light text-center uppercase tracking-widest">Patented Devices</span>
          </motion.div>

          {/* 6 — First-in-India Brands */}
          <motion.div {...fadeUp(0)} className="bg-white rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-surface-divider shadow-md">
            <span className="text-step-4 font-black text-accent leading-none">02+</span>
            <span className="text-step-0 font-bold text-text-light text-center uppercase tracking-widest">First-in-India Brands</span>
          </motion.div>

          {/* 7 — First-in-India Brands (blue tint) */}
          <motion.div {...fadeUp(0)} className="bg-surface-light rounded-2xl p-4 flex flex-col items-center justify-center gap-2 border border-surface-divider shadow-md">
            <span className="text-step-4 font-black text-accent leading-none">02+</span>
            <span className="text-step-0 font-bold text-accent text-center uppercase tracking-widest">First-in-India Brands</span>
          </motion.div>

          {/* 8 — Wide Highlight Dry Eye */}
          <motion.div {...fadeUp(0)} className="sm:col-span-2 lg:col-span-3 bg-primary rounded-2xl p-6 flex flex-col sm:flex-row items-center gap-6 shadow-xl relative overflow-hidden">
            <div className="absolute inset-0 bg-white/5 pointer-events-none" />
            <div className="flex-1 relative z-10">
              <p className="text-step-1 font-semibold text-white leading-relaxed mb-4">
                A clinical trial on dry eye management is in the pipeline, conducted in collaboration with SSI-Mumbai.
              </p>
              <button className="bg-white text-primary border-none rounded-full px-6 py-2 text-step-0 font-bold cursor-pointer shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg">
                Learn more about Perin &rarr;
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
