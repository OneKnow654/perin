import { motion } from "framer-motion";
import { Target, Eye, Gem, Handshake } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import { staggerContainer, fadeUp, scaleIn, viewport } from "../utils/animations";

const impactBlocks = [
  {
    Icon: Target,
    title: "Our Mission",
    text: "We integrate pharmaceutical excellence with social responsibility to deliver world-class healthcare, innovation, and affordability to every individual, everywhere.",
  },
  {
    Icon: Eye,
    title: "Our Vision",
    text: "Creating a future where no one is denied lifesaving medications due to location or economic barriers—ensuring every individual has the opportunity for a healthier life.",
  },
  {
    Icon: Gem,
    title: "Our Values",
    text: "Integrity, innovation, and impact guide everything we do. We believe in transparency with partners, empathy for patients, and excellence in execution.",
  },
  {
    Icon: Handshake,
    title: "Our Identity",
    text: "We are more than a pharmaceutical company—we connect global innovation with accessible healthcare. Through strategic collaboration and a commitment to affordability, we ensure patients worldwide receive life-changing treatments.",
  },
];

const team = [
  { name: "Dr. Daxa Thakkar", role: "Medical Director", image: "/images/perin-team1.jpg" },
  { name: "Mr. Shiva Prasad", role: "Sales Director", image: "/images/Shiva Prasad.jpeg" },
  { name: "Miss Saili Gaikwad", role: "Head, HR", image: "/images/perin-Miss-Saili-Gaikwad.jpg" },
];

export default function About() {
  return (
    <main>
      <PageHeader
        type="video"
        src="/images/perin-about-video.mp4"
        overlay
        overlayOpacity="bg-black/40"
        title="We Collaborate,"
        accent="We Develop"
        desc="Perin Healthcare partners with global leaders to provide trusted, high-quality medicines and medical devices. We are committed to making healthcare accessible to Everyone, Everywhere."
        breadcrumbs={[{ label: "About Us" }]}
      />

      <ContentWithImage
        tag="Our Story"
        title="Advancing Medical"
        accent="Solutions"
        paragraphs={[
          "Founded with a vision to redefine healthcare, Perin Healthcare has grown into a global force in biopharmaceuticals. Our journey began with a commitment to tackling some of the most pressing health challenges through innovation and collaboration.",
          "Through strategic global alliances and a commitment to quality, we bring world-class therapeutic solutions to patients who need them most. Today, we stand at the forefront of medical advancements, driven by a team of passionate experts.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
        reverse
      />

      {/* Mission & Vision */}
      <section id="our-impact" className="py-16 lg:py-24 bg-[#F2F1ED]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#58b66a] mb-3">
              Our Impact
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#023274]">
              Mission & <span className="font-bold">Vision</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {impactBlocks.map(({ Icon, title, text }, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white rounded-2xl p-8 lg:p-10 border border-[#DFE1DE]"
                whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(2,50,116,0.10)" }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-12 h-12 rounded-full bg-[#58b66a]/10 flex items-center justify-center mb-5">
                  <Icon size={20} className="text-[#58b66a]" />
                </div>
                <h3 className="text-xl font-bold text-[#023274] mb-3">{title}</h3>
                <p className="text-[#454040] leading-relaxed text-[15px]">{text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team */}
      <section id="our-team" className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-14"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-[#58b66a] mb-3">
              Leadership
            </p>
            <h2 className="text-3xl lg:text-4xl font-light text-[#023274]">
              Our <span className="font-bold">Team</span>
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {team.map((member, i) => (
              <motion.div
                key={i}
                variants={scaleIn}
                className="text-center"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="bg-[#F2F1ED] rounded-2xl aspect-[3/4] mb-4 overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
                    onError={(e) => (e.target.style.display = "none")}
                  />
                </div>
                <h4 className="text-lg font-bold text-[#023274]">{member.name}</h4>
                <p className="text-[#8F8F8F] text-sm">{member.role}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
