import { motion } from "framer-motion";
import { Heart, Lightbulb, Shield, Users } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

const values = [
  { Icon: Heart, title: "Patient First", desc: "Every decision we make starts with the patient in mind." },
  { Icon: Lightbulb, title: "Innovation", desc: "Constantly pushing boundaries to develop better solutions." },
  { Icon: Shield, title: "Integrity", desc: "Operating with transparency and ethical standards globally." },
  { Icon: Users, title: "Collaboration", desc: "Building partnerships that create lasting impact." },
];

export default function OurStory() {
  return (
    <main>
      <PageHeader
        title="Our"
        accent="Story"
        desc="Advancing Medical Solutions"
        breadcrumbs={[{ label: "Our Story" }]}
      />

      <ContentWithImage
        tag="Advancing Medical Solutions"
        title="Our"
        accent="Story"
        paragraphs={[
          "Founded with a vision to redefine healthcare, Perin Healthcare has grown into a global force in biopharmaceuticals. Our journey began with a commitment to tackling some of the most pressing health challenges through innovation and collaboration. Today, we stand at the forefront of medical advancements, driven by a team of passionate experts and a network of global partners who share our dedication to improving lives.",
          "We continue to invest in cutting-edge research and breakthrough therapies that shape the future of medicine.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />

      {/* Values */}
      <section className="py-16 lg:py-24 bg-[#F2F1ED]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#58b66a] mb-3">
              Healthcare That Heals
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#023274]">
              Our <span className="font-bold">Values</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {values.map(({ Icon, title, desc }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-7 border border-[#DFE1DE]"
                whileHover={{ y: -5, boxShadow: "0 12px 32px rgba(2,50,116,0.10)" }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-12 h-12 rounded-full bg-[#58b66a]/10 flex items-center justify-center mb-4">
                  <Icon size={20} className="text-[#58b66a]" />
                </div>
                <h4 className="font-bold text-[#023274] mb-2">{title}</h4>
                <p className="text-[#454040] text-sm leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
