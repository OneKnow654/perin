import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";

const tabs = [
  {
    label: "Temporary Plugs",
    content: {
      title: "DuraPlug",
      subtitle: "Reliable solution for extended short-term Dry Eye relief",
      body: "Ideal for short-term use, allowing providers to offer immediate relief for patients, whether due to environmental factors, post-surgery recovery, seasonal dry eye, or ocular retention. Duraplug extended temporary plugs are effective between 60–180 days.",
      note: "Supplied: 2 sterile inserts per package; 10 packages per box. Total of 20 inserts.",
    },
  },
  { label: "Flowable Plugs",   content: { title: "Flowable Plugs",   subtitle: "Coming soon", body: "Flowable plug products — content coming soon.", note: "" } },
  { label: "Long-Term Plugs",  content: { title: "Long-Term Plugs",  subtitle: "Coming soon", body: "Long-term plug products — content coming soon.", note: "" } },
  { label: "Gauge System",     content: { title: "Gauge System",     subtitle: "Coming soon", body: "Gauge system products — content coming soon.", note: "" } },
];

export default function Ophthalmology() {
  const [active, setActive] = useState(0);
  const current = tabs[active];

  return (
    <main>
      <PageHeader
        accent="Ophthalmology"
        desc="Vision care and dry eye management solutions."
        breadcrumbs={[{ label: "Products", link: "#" }, { label: "Ophthalmology" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#023274]">
              Featured <span className="font-bold">Products</span>
            </h2>
          </motion.div>

          {/* Tab Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-10"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {tabs.map((tab, i) => (
              <motion.button
                key={i}
                onClick={() => setActive(i)}
                className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
                  active === i
                    ? "text-white shadow-md"
                    : "bg-[#F2F1ED] text-[#023274] hover:bg-[#023274]/10"
                }`}
                style={active === i ? { backgroundColor: "#023274" } : {}}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 380, damping: 24 }}
              >
                {tab.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Tab Panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div>
                  <div className="bg-[#F2F1ED] rounded-2xl aspect-[4/3] flex items-center justify-center">
                    <span className="text-[#8F8F8F] text-sm">[{current.content.title} Image]</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#023274] mb-3">
                    {current.content.title}
                  </h3>
                  <p className="text-[#58b66a] font-semibold text-sm mb-3">
                    {current.content.subtitle}
                  </p>
                  <p className="text-[#454040] leading-relaxed mb-4">
                    {current.content.body}
                  </p>
                  {current.content.note && (
                    <p className="text-[#8F8F8F] text-sm">{current.content.note}</p>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </main>
  );
}
