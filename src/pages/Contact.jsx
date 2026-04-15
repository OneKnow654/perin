import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, PhoneCall, MapPin, MessageCircle, Facebook, Youtube, Linkedin, Instagram } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { app } from "../data/config";
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewport } from "../utils/animations";

const socialIconMap = { facebook: Facebook, youtube: Youtube, linkedin: Linkedin, instagram: Instagram };

const infoCards = [
  { Icon: Mail,      title: "Email Us",  value: app.contact.email,        href: `mailto:${app.contact.email}` },
  { Icon: Phone,     title: "Call Us",   value: app.contact.phone,        href: `tel:${app.contact.phone.replace(/\s/g, "")}` },
  { Icon: PhoneCall, title: "Landline",  value: "022-46642662",           href: "tel:02246642662" },
  { Icon: MapPin,    title: "Visit Us",  value: "Mumbai, Maharashtra, India", href: "#" },
];

const inputCls =
  "w-full border-b border-[#DFE1DE] bg-transparent py-3 text-[#023274] placeholder:text-[#8F8F8F] focus:border-[#58b66a] focus:outline-none transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <main>
      <PageHeader
        title="Contact"
        accent="Us"
        desc="For Every Patient, Every Partner — Empowering India starts here."
        breadcrumbs={[{ label: "Contact" }]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-2 bg-white rounded-2xl border border-[#DFE1DE] p-8 lg:p-10"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h3 className="text-xl font-bold text-[#023274] mb-2">Send us a message</h3>
              <p className="text-[#8F8F8F] text-sm mb-8">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-16 h-16 rounded-full bg-[#58b66a]/15 flex items-center justify-center mx-auto mb-4">
                    <Mail size={28} className="text-[#58b66a]" />
                  </div>
                  <h4 className="text-xl font-bold text-[#023274] mb-2">Message Sent!</h4>
                  <p className="text-[#8F8F8F]">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#023274] mb-2">Full Name</label>
                      <input type="text" name="name" required placeholder="Your name"
                        className={inputCls} value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#023274] mb-2">Email</label>
                      <input type="email" name="email" required placeholder="your@email.com"
                        className={inputCls} value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023274] mb-2">Phone</label>
                    <input type="tel" name="phone" placeholder="+91 XXXXX XXXXX"
                      className={inputCls} value={form.phone} onChange={handleChange} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#023274] mb-2">Message</label>
                    <textarea name="message" rows={4} required placeholder="Write your message..."
                      className={`${inputCls} resize-none`} value={form.message} onChange={handleChange} />
                  </div>
                  <motion.button
                    type="submit"
                    className="inline-flex items-center gap-2 text-white px-8 py-3 rounded-full font-semibold transition-colors"
                    style={{ backgroundColor: "#58b66a" }}
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 380, damping: 24 }}
                  >
                    Send Message
                    <Mail size={15} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Side Cards */}
            <motion.div
              className="space-y-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {infoCards.map(({ Icon, title, value, href }, i) => (
                <motion.a
                  key={i}
                  href={href}
                  variants={fadeUp}
                  className="block bg-white rounded-2xl border border-[#DFE1DE] p-6 hover:border-[#58b66a] hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ y: -3 }}
                  transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-[#58b66a]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#58b66a] transition-colors">
                      <Icon size={16} className="text-[#58b66a] group-hover:text-white transition-colors" />
                    </div>
                    <div>
                      <h4 className="font-bold text-[#023274] text-sm mb-1">{title}</h4>
                      <p className="text-[#8F8F8F] text-sm">{value}</p>
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* WhatsApp */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#0F3D3E" }}
              >
                <h4 className="font-bold text-white text-sm mb-3">Chat with us</h4>
                <p className="text-white/60 text-sm mb-4">
                  Chat with our sales and support teams to get a quick response.
                </p>
                <motion.a
                  href="https://wa.me/919819464064"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#58b66a] font-semibold text-sm hover:gap-3 transition-all"
                  whileHover={{ x: 4 }}
                  transition={{ type: "spring", stiffness: 380, damping: 24 }}
                >
                  <MessageCircle size={15} /> Start a conversation
                </motion.a>
              </motion.div>

              {/* Social */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl p-6"
                style={{ backgroundColor: "#0F3D3E" }}
              >
                <h4 className="font-bold text-white text-sm mb-4">Follow Us</h4>
                <div className="flex gap-3">
                  {app.social.map((s, i) => {
                    const Icon = socialIconMap[s.icon];
                    return Icon ? (
                      <motion.a
                        key={i}
                        href={s.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white/70 hover:border-[#58b66a] hover:text-[#58b66a] transition-all"
                        whileHover={{ scale: 1.12, y: -2 }}
                        whileTap={{ scale: 0.92 }}
                        transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      >
                        <Icon size={14} />
                      </motion.a>
                    ) : null;
                  })}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
