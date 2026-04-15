import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewport } from "../utils/animations";

const timeline = [
  { year: "1975", title: "Eagle Vision Founded", desc: "Pioneers in punctal plug technology for dry eye management." },
  { year: "2020", title: "Corza Medical Acquires", desc: "Corza Medical acquires Eagle Vision portfolio to expand global ophthalmic reach." },
  { year: "2024", title: "Perin Partnership", desc: "Perin Healthcare secures exclusive India marketing rights for Corza's punctal plug portfolio." },
  { year: "2025", title: "India Launch", desc: "Full product portfolio launch across India, empowering ophthalmic care providers." },
];

export default function GlobalAlliance() {
  return (
    <main>
      <PageHeader
        title="Global"
        accent="Alliance"
        desc="Strategic global partnerships advancing healthcare innovation."
        breadcrumbs={[{ label: "Global Alliance" }]}
      />

      {/* Main content */}
      <section id="corza-medical" className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h3 className="text-xl lg:text-2xl font-bold text-[#023274] leading-snug mb-4">
                Perin Healthcare Secures Exclusive India Marketing Rights for Corza Medical Eagle Vision Portfolio:{" "}
                <span style={{ color: "#58b66a" }}>Advancing Dry Eye Care with Global Innovation</span>
              </h3>
              <p className="text-[#454040] leading-relaxed mb-4">
                Perin Healthcare is proud to announce its exclusive marketing partnership with Corza Medical for the India launch of Eagle Vision's renowned Punctal Plug portfolio. This strategic collaboration marks a significant milestone in ophthalmic care, bringing globally trusted solutions to address dry eye management across India.
              </p>
              <p className="text-[#454040] leading-relaxed">
                Built on a legacy of clinical excellence, this partnership reflects our shared commitment to empowering healthcare professionals with advanced, reliable therapies that improve patient outcomes and elevate standards of care.
              </p>
            </motion.div>

            <motion.div
              className="space-y-6"
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <div className="grid grid-cols-2 gap-4">
                {["Perin Logo", "Corza Logo"].map((label, i) => (
                  <div key={i} className="bg-[#F2F1ED] rounded-2xl aspect-square flex items-center justify-center border border-[#DFE1DE]">
                    <span className="text-[#8F8F8F] text-sm">[{label}]</span>
                  </div>
                ))}
              </div>
              <div className="bg-[#F2F1ED] rounded-2xl aspect-video flex items-center justify-center border border-[#DFE1DE]">
                <span className="text-[#8F8F8F] text-sm">[Partnership Video]</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-[#F2F1ED]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-2xl font-bold" style={{ color: "#58b66a" }}>
              From Innovation to India: Perin &amp; Corza Punctum Plug Journey
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-6 border border-[#DFE1DE]"
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(2,50,116,0.10)" }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="font-bold text-2xl" style={{ color: "#58b66a" }}>{item.year}</span>
                <h4 className="font-bold text-[#023274] mt-2 mb-2">{item.title}</h4>
                <p className="text-[#454040] text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
