import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { fadeUp, viewport } from "../utils/animations";

const inputCls =
  "w-full border-b border-[#DFE1DE] bg-transparent py-3 text-[#023274] placeholder:text-[#8F8F8F] focus:border-[#58b66a] focus:outline-none transition-colors text-sm";

export default function Distributor() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", product: "", company: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => { e.preventDefault(); setSent(true); };

  return (
    <main>
      <PageHeader
        title="Become a"
        accent="Distributor"
        desc="Partner with us to bring world-class pharmaceutical products to your region."
        breadcrumbs={[{ label: "Distributor" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 lg:px-8">
          <motion.div
            className="bg-white rounded-2xl border border-[#DFE1DE] p-8 lg:p-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {sent ? (
              <motion.div
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="w-16 h-16 rounded-full bg-[#58b66a]/15 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle size={32} className="text-[#58b66a]" />
                </div>
                <h4 className="text-xl font-bold text-[#023274] mb-2">Application Submitted!</h4>
                <p className="text-[#8F8F8F]">Our team will reach out to you within 2–3 business days.</p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-[#023274] mb-2">Distributor Application</h3>
                <p className="text-[#8F8F8F] text-sm mb-8">
                  Have questions or need assistance? Reach out to our team.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#023274] mb-2">Your Name *</label>
                      <input type="text" name="name" required placeholder="Full name"
                        className={inputCls} value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#023274] mb-2">Email *</label>
                      <input type="email" name="email" required placeholder="your@email.com"
                        className={inputCls} value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#023274] mb-2">Phone *</label>
                      <input type="tel" name="phone" required placeholder="+91 XXXXX XXXXX"
                        className={inputCls} value={form.phone} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#023274] mb-2">Product Interest *</label>
                      <select name="product" required
                        className={inputCls} value={form.product} onChange={handleChange}>
                        <option value="" disabled>Select a product</option>
                        <option value="nanonext">Nanonext™ 100</option>
                        <option value="palody">Palody™ 125</option>
                        <option value="anaview">Anaview™ 1MG</option>
                        <option value="letrolive">Letrolive™ 2.5MG</option>
                        <option value="embopag">Embopag</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#023274] mb-2">Company Name</label>
                    <input type="text" name="company" placeholder="Your company"
                      className={inputCls} value={form.company} onChange={handleChange} />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#023274] mb-2">Message</label>
                    <textarea name="message" rows={3} placeholder="Tell us about your distribution network..."
                      className={`${inputCls} resize-none`} value={form.message} onChange={handleChange} />
                  </div>

                  <motion.button
                    type="submit"
                    className="w-full text-white py-3 rounded-full font-semibold transition-colors"
                    style={{ backgroundColor: "#58b66a" }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.97 }}
                    transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  >
                    Submit Application
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
