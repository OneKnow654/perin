import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

// Import your solution images here
import oncologyImg from "../assets/Images/Wound Closure.png";
import anaesthesiologyImg from "../assets/Images/Anaesthesiology.png";
import ophthalmologyImg from "../assets/Images/Ophthalmology.png";
import biosurgeryImg from "../assets/Images/Biosurgery.png";

const solutions = [
  {
    title: "Oncology",
    href: "/oncology",
    image: oncologyImg,
    alt: "Oncology solutions",
    scale: 3.2
  },
  {
    title: "Anaesthesiology",
    href: "/anaesthesiology",
    image: anaesthesiologyImg,
    alt: "Anaesthesiology solutions",
    scale: 2.2
  },
  {
    title: "Ophthalmology",
    href: "/ophthalmology",
    image: ophthalmologyImg,
    alt: "Ophthalmology solutions",
    scale: 3.1
  },
  {
    title: "Biosurgery",
    href: "/biosurgery",
    image: biosurgeryImg,
    alt: "Biosurgery solutions",
    scale: 1.8
  }
];

export default function OurSolution() {
  return (
    <section className="py-20 lg:py-32 bg-white" aria-labelledby="our-solutions-heading">
      <div className="w-full max-w-[1400px] mx-auto px-4 lg:px-8">

        {/* Section Header - Exactly like image */}
        <div className="mb-16 lg:mb-24">
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <div className="w-8 h-[2px] bg-primary" />
            <span className="text-primary text-[10px] sm:text-xs font-black uppercase tracking-[0.4em]">
              Our Solutions
            </span>
          </motion.div>

          <motion.div
            className="flex gap-6 items-start"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <div className="w-1.5 h-16 lg:h-20 bg-primary flex-shrink-0" />
            <h2
              id="our-solutions-heading"
              className="text-4xl lg:text-6xl font-bold leading-[1.1] tracking-tight"
            >
              <span className="text-primary block">Empowering Healthcare</span>
              <span className="text-accent">through Innovation.</span>
            </h2>
          </motion.div>
        </div>

        {/* Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          {solutions.map((item, i) => (
            <motion.article
              key={i}
              variants={fadeUp}
              className="group relative flex flex-row items-center bg-gray-50/50 hover:bg-white border border-gray-100 hover:border-accent/20 rounded-[1.5rem] overflow-hidden min-h-[180px] lg:min-h-[220px] transition-all duration-500"
              whileHover={{
                boxShadow: "0 32px 80px -20px rgba(0,45,114,0.12)",
                y: -6,
              }}
            >
              <div className="flex flex-col justify-center p-6 lg:p-10 flex-1 z-10">
                <h3 className="text-xl lg:text-2xl font-bold text-primary mb-4">{item.title}</h3>

                <Link
                  to={item.href}
                  className="inline-flex items-center gap-2 group/link"
                >
                  <span className="text-sm font-bold text-accent uppercase tracking-widest">Learn more</span>
                  <div className="w-8 h-[1px] bg-accent/30 group-hover/link:w-12 transition-all duration-300" />
                </Link>
              </div>

              {/* Product Image */}
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-1/2 h-full flex items-center justify-center p-0 overflow-visible pointer-events-none">
                <motion.img
                  src={item.image}
                  alt={item.alt}
                  className="max-h-none h-[120%] w-auto object-contain drop-shadow-2xl"
                  loading="lazy"
                  initial={{ scale: item.scale }}
                  animate={{ scale: item.scale }}
                  whileHover={{ scale: item.scale * 1.1, rotate: -3 }}
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
