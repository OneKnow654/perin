import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { app, footerConfig } from "../data/config";
import { fadeUp, staggerContainer, viewport } from "../utils/animations";
import { Facebook, Youtube, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import { useComingSoon } from "../context/ComingSoonContext";

const socialIconMap = {
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  instagram: Instagram,
};


export default function Footer() {
  const { openComingSoon } = useComingSoon();

  return (
    <div className="min-h-[92dvh] flex flex-col">
      {/* CTA Section */}
      <motion.section
        className="py-16 lg:py-20 text-center flex-1 flex flex-col justify-center"
        style={{ backgroundColor: "#4e9695" }}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <div className="max-w-[1400px] mx-auto px-4">
          <motion.h2
            className="text-3xl lg:text-4xl font-bold text-white mb-4"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {app.cta.heading}
          </motion.h2>
          <motion.p
            className="text-white/80 text-lg mb-8"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {app.cta.subheading}
          </motion.p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 380, damping: 24 }}
            className="inline-block"
          >
            <Link
              to={app.cta.button_link}
              className="inline-block bg-white text-[#0F3D3E] px-8 py-3 rounded-full font-semibold hover:bg-[#0F3D3E] hover:text-white transition-all duration-300"
            >
              {app.cta.button_text}
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="text-white pt-12 lg:pt-16 pb-6" style={{ backgroundColor: "#123134" }}>
        <div className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {/* Brand Column */}
            <motion.div variants={fadeUp} className="lg:col-span-1">
              <img
                src={app.logo_footer}
                alt="Perin Healthcare"
                className="h-10 lg:h-12 w-auto object-contain scale-[2.4] origin-left mb-8 brightness-0 invert"
              />
              <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xs">
                {app.footer_tagline}
              </p>
              <div className="flex gap-3">
                {app.social.map((s, i) => {
                  const Icon = socialIconMap[s.icon];
                  if (!Icon) return null;
                  
                  return s.url === "coming-soon" ? (
                    <motion.button
                      key={i}
                      onClick={openComingSoon}
                      className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-[#58b66a] hover:text-[#58b66a] transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                      <Icon size={14} />
                    </motion.button>
                  ) : (
                    <motion.a
                      key={i}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/80 hover:border-[#58b66a] hover:text-[#58b66a] transition-all duration-300 text-sm"
                      whileHover={{ scale: 1.12, y: -2 }}
                      whileTap={{ scale: 0.92 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                    >
                      <Icon size={14} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Dynamic Link Columns */}
            {Object.entries(footerConfig.columns).map(([heading, links], ci) => (
              <motion.div key={ci} variants={fadeUp}>
                <h5 className="font-semibold text-white mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-white/40">
                  {heading}
                </h5>
                <ul className="space-y-3">
                  {links.map((link, li) => (
                    <li key={li}>
                      <motion.div whileHover={{ x: 4 }} transition={{ type: "spring", stiffness: 380, damping: 24 }}>
                        {link.link === "coming-soon" ? (
                          <button
                            onClick={openComingSoon}
                            className="text-white/70 text-sm hover:text-[#58b66a] transition-all duration-200 block w-full text-left"
                          >
                            {link.name}
                          </button>
                        ) : (
                          <Link
                            to={link.link}
                            className="text-white/70 text-sm hover:text-[#58b66a] transition-all duration-200"
                          >
                            {link.name}
                          </Link>
                        )}
                      </motion.div>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Contact Column */}
            <motion.div variants={fadeUp}>
              <h5 className="font-semibold text-white mb-5 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-10 after:h-0.5 after:bg-white/40">
                Customer Service
              </h5>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Mail size={15} className="text-[##002953] mt-0.5 shrink-0" />
                  <a
                    href={`mailto:${app.contact.email}`}
                    className="text-white/70 text-sm hover:text-[#58b66a] transition-colors"
                  >
                    {app.contact.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone size={15} className="text-[#58b66a] mt-0.5 shrink-0" />
                  <a
                    href={`tel:${app.contact.phone.replace(/\s/g, "")}`}
                    className="text-white/70 text-sm hover:text-[#58b66a] transition-colors"
                  >
                    {app.contact.phone}
                  </a>
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Divider + Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
              <p>{app.copyright}</p>
              <div className="flex flex-wrap gap-4 lg:gap-6">
                {footerConfig.legal.map((link, i) => (
                  <motion.div key={i} whileHover={{ color: "#58b66a" }}>
                    {link.link === "coming-soon" ? (
                      <button
                        onClick={openComingSoon}
                        className="hover:text-[#58b66a] transition-colors"
                      >
                        {link.name}
                      </button>
                    ) : (
                      <Link
                        to={link.link}
                        className="hover:text-[#58b66a] transition-colors"
                      >
                        {link.name}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
