import { motion } from "framer-motion";
import { Check, Phone, Mail } from "lucide-react";
import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import { staggerContainer, fadeUp, viewport } from "../utils/animations";

const jobs = [
  "Key Account Manager (Oncology)",
  "Key Account Manager (Ophthalmology)",
  "Product Manager",
  "BD Manager",
];

export default function Career() {
  return (
    <main>
      <PageHeader
        title="Join"
        accent="Perin"
        desc="At Perin, we don't just offer jobs—we shape futures."
        breadcrumbs={[{ label: "Careers" }]}
      />

      <ContentWithImage
        tag="Careers"
        title="Join"
        accent="Perin Healthcare"
        paragraphs={[
          "At Perin, we don't just offer jobs—we shape futures. Our culture is built on growth, purpose, and performance. Every team member is supported through structured training, continuous learning, and personalized career pathways designed to unlock potential and drive impact.",
          "We invest in people who aspire to lead, innovate, and transform healthcare—empowering them to rise with confidence and contribute meaningfully to patient-centric progress. Join us, and be part of a mission-driven organization where your growth fuels our collective success.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />

      {/* Hiring Section */}
      <section className="py-16 lg:py-24 bg-[#F2F1ED]">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="text-center mb-12"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            <h2 className="text-3xl lg:text-4xl font-light text-[#023274]">
              We Are{" "}
              <span
                className="font-bold"
                style={{
                  background: "linear-gradient(135deg, #58b66a, #023274)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Hiring!
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="bg-white rounded-2xl border border-[#DFE1DE] p-8 lg:p-10 max-w-3xl mx-auto"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ boxShadow: "0 12px 40px rgba(2,50,116,0.10)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="font-bold text-[#023274] text-lg">Perin Healthcare</span>
              <span
                className="text-white text-xs font-bold uppercase px-3 py-1 rounded-full"
                style={{ backgroundColor: "#58b66a" }}
              >
                New!
              </span>
            </div>

            <h4 className="font-bold text-[#023274] mb-4">Open Positions</h4>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {jobs.map((job, i) => (
                <motion.p
                  key={i}
                  variants={fadeUp}
                  className="text-[#454040] text-sm flex items-center gap-2"
                >
                  <Check size={13} className="text-[#58b66a] flex-shrink-0" />
                  {job}
                </motion.p>
              ))}
            </motion.div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-[#8F8F8F] mb-6">
              <span className="flex items-center gap-2">
                <Phone size={13} className="text-[#023274]" />
                +91-98487 75042
              </span>
              <span className="flex items-center gap-2">
                <Mail size={13} className="text-[#023274]" />
                hr@perinhealthcare.com
              </span>
            </div>

            <motion.a
              href="mailto:hr@perinhealthcare.com?subject=Job Application"
              className="inline-block text-white px-6 py-3 rounded-full font-semibold transition-colors"
              style={{ backgroundColor: "#58b66a" }}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 380, damping: 24 }}
            >
              Apply Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
