import { motion } from "framer-motion";
import { Globe, FlaskConical, Users, Handshake } from "lucide-react";
import PageHeader from "../components/PageHeader";
import StatsBanner from "../components/StatsBanner";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

const stats = [
  { number: "04+", label: "Core Therapy Areas" },
  { number: "06+", label: "Strategic Partners" },
  { number: "22+", label: "Trusted Brands" },
  { number: "50+", label: "Global Reach" },
];

const impacts = [
  { Icon: Globe,        title: "Global Reach",         desc: "Partnering with world leaders to expand access to advanced therapies across India and beyond." },
  { Icon: FlaskConical, title: "Innovation Pipeline",  desc: "Continuously developing and delivering breakthrough pharmaceutical products across multiple therapy areas." },
  { Icon: Users,        title: "Patient-Centric",      desc: "Every product and partnership decision starts with the patient outcome in mind." },
  { Icon: Handshake,    title: "Strategic Alliances",  desc: "Building long-term relationships with global pharma companies to bring world-class care to Indian patients." },
];

export default function OurImpact() {
  return (
    <main>
      <PageHeader
        title="Our"
        accent="Impact"
        desc="Healthcare That Heals"
        breadcrumbs={[{ label: "Our Impact" }]}
      />

      <StatsBanner stats={stats} />

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
              Making{" "}
              <span className="font-bold">Healthcare Accessible</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {impacts.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 border border-[#DFE1DE]"
                whileHover={{ y: -5, boxShadow: "0 12px 40px rgba(2,50,116,0.10)" }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-12 h-12 rounded-full bg-[#58b66a]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#58b66a]" />
                </div>
                <h3 className="text-xl font-bold text-[#023274] mb-3">{title}</h3>
                <p className="text-[#454040] leading-relaxed text-[15px]">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
