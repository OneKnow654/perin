import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, PhoneCall, MapPin, MessageCircle, Facebook, Youtube, Linkedin, Instagram, ArrowRight } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { app } from "../data/config";
import { fadeLeft, fadeRight, staggerContainer, fadeUp, viewport } from "../utils/animations";
import { useComingSoon } from "../context/ComingSoonContext";

const socialIconMap = { facebook: Facebook, youtube: Youtube, linkedin: Linkedin, instagram: Instagram };

const infoCards = [
  { Icon: Mail, title: "Email Us", value: app.contact.email, href: `mailto:${app.contact.email}` },
  { Icon: Phone, title: "Call Us", value: app.contact.phone, href: `tel:${app.contact.phone.replace(/\s/g, "")}` },
  { Icon: PhoneCall, title: "Landline", value: "022-46642662", href: "tel:02246642662" },
  { Icon: MapPin, title: "Visit Us", value: "Mumbai, Maharashtra, India", href: "#" },
];

const inputCls =
  "w-full bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl px-5 py-3.5 text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#023274] focus:bg-white focus:ring-4 focus:ring-[#023274]/5 focus:outline-none transition-all duration-300";

export default function Contact() {
  const { openComingSoon } = useComingSoon();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  // ✅ Dock state
  const [hovered, setHovered] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") {
      const cleaned = value.replace(/\D/g, "").slice(0, 10);
      setForm({ ...form, [name]: cleaned });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Basic email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address.");
      return;
    }
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

            {/* Left Column: Contact Form */}
            <motion.div
              className="bg-white rounded-[2rem] border border-[#DFE1DE] p-8 lg:p-10 shadow-xl shadow-[#023274]/5 order-2 lg:order-1 h-fit"
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h3 className="text-2xl font-bold text-[#023274] mb-2">Send us a message</h3>
              <p className="text-[#64748B] text-sm mb-10">
                Fill out the form and we'll get back to you within 24 hours.
              </p>

              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-20">
                  <div className="w-20 h-20 rounded-full bg-[#023274]/5 flex items-center justify-center mx-auto mb-6">
                    <Mail size={32} className="text-[#023274]" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#023274] mb-2">Message Sent!</h4>
                  <p className="text-[#64748B]">We'll get back to you shortly.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#023274] mb-2">Full Name *</label>
                      <input type="text" name="name" required placeholder="Your name" className={inputCls} value={form.name} onChange={handleChange} />
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#023274] mb-2">Email Address *</label>
                      <input type="email" name="email" required placeholder="you@example.com" className={inputCls} value={form.email} onChange={handleChange} />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#023274]">Phone Number</label>
                      <span className="text-[10px] text-[#64748B] font-bold">{form.phone.length}/10</span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      maxLength="10"
                      inputMode="numeric"
                      className={inputCls}
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <label className="block text-xs font-bold uppercase tracking-widest text-[#023274]">Message *</label>
                      <span className={`text-[10px] font-bold ${form.message.length >= 50 ? 'text-red-500' : 'text-[#64748B]'}`}>
                        {form.message.length}/50
                      </span>
                    </div>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      maxLength="50"
                      placeholder="Tell us about your enquiry..."
                      className={`${inputCls} resize-none`}
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>
                  <motion.button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 text-white px-10 py-4 rounded-2xl font-bold transition-all shadow-xl shadow-[#023274]/20"
                    style={{ backgroundColor: "#023274" }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Send Message <ArrowRight size={16} />
                  </motion.button>
                </form>
              )}
            </motion.div>

            {/* Right Column: Info + Map */}
            <div className="space-y-12 order-1 lg:order-2">
              <div>
                <motion.h3
                  className="text-3xl font-bold text-[#023274] mb-6"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                >
                  Get in touch
                </motion.h3>

                <motion.div
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4"
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
                      className="block bg-white rounded-2xl border border-[#DFE1DE] p-5 hover:border-[#023274] hover:shadow-lg transition-all duration-300 group"
                      whileHover={{ y: -3 }}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-[#023274]/5 flex items-center justify-center flex-shrink-0 group-hover:bg-[#023274] transition-colors">
                          <Icon size={16} className="text-[#023274] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#023274] text-xs uppercase tracking-wider mb-0.5">{title}</h4>
                          <p className="text-[#64748B] text-sm font-medium">{value}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </motion.div>
              </div>

              {/* Map Integrated Here */}
              <motion.div
                className="w-full h-[330px] rounded-3xl overflow-hidden border border-[#DFE1DE] shadow-xl relative group"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
              >
                <div className="absolute inset-0 bg-[#023274]/5 pointer-events-none group-hover:bg-transparent transition-colors duration-500" />
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.616327711671!2d72.87690117611001!3d19.036620953205848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cf084f1aa24f%3A0x8b99e5444983ab6d!2sPerin%20Health%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1777282116383!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Perin Healthcare Location"
                  className="grayscale-[0.1] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                />
              </motion.div>

              {/* Social & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="rounded-3xl p-6 border border-[#DFE1DE] bg-[#F8FAFC]"
                >
                  <h4 className="font-bold text-[#023274] text-sm mb-4 uppercase tracking-widest">Follow Us</h4>
                  <div className="flex gap-3">
                    {app.social.map((s, i) => {
                      const Icon = socialIconMap[s.icon];
                      const distance = hovered !== null ? Math.abs(hovered - i) : 0;
                      const scale = hovered === i ? 1.25 : distance === 1 ? 1.12 : distance === 2 ? 1.04 : 1;

                      return Icon ? (
                        s.url === "coming-soon" ? (
                          <motion.button key={i} onClick={openComingSoon} onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="w-9 h-9 rounded-full border border-[#023274]/20 flex items-center justify-center text-[#023274] hover:bg-[#023274] hover:text-white transition-colors duration-200" animate={{ scale, y: hovered === i ? -4 : 0 }} transition={{ type: "spring", stiffness: 550, damping: 18, mass: 0.4 }}>
                            <Icon size={14} />
                          </motion.button>
                        ) : (
                          <motion.a key={i} href={s.url} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setHovered(i)} onMouseLeave={() => setHovered(null)} className="w-9 h-9 rounded-full border border-[#023274]/20 flex items-center justify-center text-[#023274] hover:bg-[#023274] hover:text-white transition-colors duration-200" animate={{ scale, y: hovered === i ? -4 : 0 }} transition={{ type: "spring", stiffness: 550, damping: 18, mass: 0.4 }}>
                            <Icon size={14} />
                          </motion.a>
                        )
                      ) : null;
                    })}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={viewport}
                  className="rounded-3xl p-6 bg-[#023274] text-white"
                >
                  <h4 className="font-bold text-sm mb-6 uppercase tracking-widest opacity-60">Chat with us</h4>
                  <motion.a
                    href="https://wa.me/919819464064" target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-semibold text-sm hover:gap-3 transition-all"
                    whileHover={{ x: 4 }}
                  >
                    <MessageCircle size={16} /> WhatsApp Inquiry
                  </motion.a>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}