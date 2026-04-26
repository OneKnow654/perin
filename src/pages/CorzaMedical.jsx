// src/pages/CorzaMedical.jsx
import { motion, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewport } from "../utils/animations";
import globalVideo from "../assets/Videos/perin-global-video.mp4";
import clinicalEyeCare from "../assets/Images/clinical-eye-care.png";
import perinLogo from "../assets/Images/PerinLogo.jpeg";
import corzaLogo from "../assets/Images/CorzaLogo.jpeg";

/* ─── Data — only facts from the original brief ─────────── */
const timeline = [
  {
    year: "1975",
    title: "Eagle Vision Founded",
    tag: "Origin",
    desc: "Eagle Vision is established, pioneering punctal plug technology and becoming a trusted name in dry eye management for ophthalmologists worldwide.",
  },
  {
    year: "2020",
    title: "Corza Medical Acquires Eagle Vision",
    tag: "Acquisition",
    desc: "Corza Medical acquires the Eagle Vision portfolio, integrating its punctal plug expertise into a broader global ophthalmic platform.",
  },
  {
    year: "2024",
    title: "Perin Partnership",
    tag: "Partnership",
    desc: "Perin Healthcare secures exclusive India marketing rights for Corza Medical's Eagle Vision punctal plug portfolio.",
  },
  {
    year: "2025",
    title: "India Market Launch",
    tag: "Launch",
    desc: "Full product portfolio launch across India, enabling ophthalmic care providers with internationally proven punctal occlusion therapies.",
  },
];

const clinicalBenefits = [
  {
    id: "01",
    title: "Immediate Tear Retention",
    desc: "Keeps natural tears on the ocular surface longer, providing prompt relief from dry eye symptoms.",
  },
  {
    id: "02",
    title: "Reduced Pharmaceutical Reliance",
    desc: "Minimises the need for frequent artificial tear application by physically retaining the eye's natural moisture.",
  },
  {
    id: "03",
    title: "Non-Invasive, In-Office Procedure",
    desc: "Simple insertion performed in-office with no incision, no sutures, and minimal patient discomfort.",
  },
  {
    id: "04",
    title: "Reversible & Safe",
    desc: "Plugs can be easily removed or replaced at any time, allowing continuous clinical control over treatment.",
  },
];

/* ─── Helpers ───────────────────────────────────────────── */
function GridBg({ className = "" }) {
  return (
    <div
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{
        backgroundImage: `
          linear-gradient(rgba(2,50,116,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(2,50,116,0.04) 1px, transparent 1px)
        `,
        backgroundSize: "48px 48px",
      }}
    />
  );
}

function SectionLabel({ code, label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-[10px] tracking-[0.25em] text-[#023274]/40 border border-[#023274]/15 px-2 py-1 rounded-sm">
        {code}
      </span>
      <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-gray-400" style={{ fontFamily: "system-ui, sans-serif" }}>
        {label}
      </span>
    </div>
  );
}

/* ─── Component ─────────────────────────────────────────── */
export default function CorzaMedical() {
  const videoRef = useRef(null);
  const isInView = useInView(videoRef, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch(err => {
        console.warn("Video play failed or interrupted:", err);
      });
    }
  }, [isInView]);

  return (
    <main className="overflow-x-hidden" style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}>
      <PageHeader
        title="Advancing Healthcare"
        accent="Together"
        desc="Global partnerships, Indian innovation, Better healthcare."
        breadcrumbs={[{ label: "Global Alliance", link: "#" }, { label: "Corza Medical" }]}
      />

      {/* ── § 1 · Partnership Overview ───────────────────── */}
      <section className="relative py-20 lg:py-32 bg-white">
        <GridBg />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">

          {/* Header */}
          <motion.div
            className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 pb-8 border-b border-gray-100"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <div>
              <SectionLabel code="§ 001" label="Strategic Partnership" />
              <h2
                className="text-3xl lg:text-5xl font-bold text-[#023274] leading-[1.1] tracking-tight max-w-2xl"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Exclusive India Marketing Rights
                <span className="block text-gray-400 font-normal italic text-2xl lg:text-3xl mt-2">
                  Corza Medical × Perin Healthcare
                </span>
              </h2>
            </div>
            <div className="mt-6 lg:mt-0 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs font-mono tracking-widest text-gray-400 uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>
                Active Partnership · 2024–Present
              </span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Left: editorial copy + logos */}
            <motion.div
              className="lg:col-span-5 flex flex-col"
              variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}
            >
              <div className="space-y-5">
                <p className="text-lg text-gray-600 leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Perin Healthcare is proud to announce its exclusive marketing partnership with Corza Medical for the India launch of Eagle Vision's renowned Punctal Plug portfolio.
                </p>
                <p className="text-base text-gray-500 leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
                  This strategic collaboration marks a significant milestone in ophthalmic care, bringing globally trusted solutions for dry eye management to India for the first time.
                </p>
                <p className="text-base text-gray-500 leading-relaxed" style={{ fontFamily: "system-ui, sans-serif" }}>
                  Built on a legacy of clinical excellence, this partnership reflects our shared commitment to empowering healthcare professionals with advanced, reliable therapies that improve patient outcomes and elevate standards of care.
                </p>
              </div>

              {/* Partner logos */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {[
                  { src: perinLogo, alt: "Perin Healthcare", role: "India Exclusive Distributor" },
                  { src: corzaLogo, alt: "Corza Medical", role: "Global Technology Partner" },
                ].map((logo, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 border border-gray-100 rounded-2xl p-6 flex flex-col items-center gap-4 hover:shadow-md transition-shadow duration-300"
                  >
                    <img src={logo.src} alt={logo.alt} className="h-20 w-auto object-contain scale-110" />
                    <span
                      className="text-[10px] text-center text-gray-400 tracking-widest uppercase leading-tight"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {logo.role}
                    </span>
                  </div>
                ))}
              </div>

              {/* Partnership reference table — only confirmed facts */}
              <div className="mt-8 border border-gray-100 rounded-2xl overflow-hidden">
                {[
                  { label: "Partnership Type", value: "Exclusive India Marketing Rights" },
                  { label: "Portfolio", value: "Eagle Vision Punctal Plug Range" },
                  { label: "Technology Partner", value: "Corza Medical, USA" },
                  { label: "India Partner", value: "Perin Healthcare Pvt. Ltd." },
                  { label: "Eagle Vision Est.", value: "1975" },
                ].map((row, i) => (
                  <div
                    key={i}
                    className={`flex items-center justify-between px-5 py-3 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/60"} border-b border-gray-100 last:border-0`}
                  >
                    <span className="text-xs text-gray-400 tracking-wide uppercase" style={{ fontFamily: "system-ui, sans-serif" }}>{row.label}</span>
                    <span className="text-xs font-semibold text-[#023274] font-mono">{row.value}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: video */}
            <motion.div
              className="lg:col-span-7"
              variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-xl aspect-video bg-gray-900">
                <video
                  ref={videoRef}
                  src={globalVideo}
                  loop muted playsInline controls
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-3 py-1.5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#023274]" />
                  <span className="text-[10px] font-mono tracking-widest text-[#023274] uppercase">Global Operations Overview</span>
                </div>
              </div>

              {/* Context strip — descriptive labels only, no invented numbers */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { label: "Punctal Plug", sub: "Pioneer Since 1975" },
                  { label: "Eagle Vision", sub: "Globally Trusted Portfolio" },
                  { label: "India Launch", sub: "2025 · Pan-India" },
                ].map((item, i) => (
                  <div key={i} className="bg-[#023274] rounded-2xl px-4 py-5 text-center">
                    <div
                      className="text-sm font-bold text-white leading-snug mb-1"
                      style={{ fontFamily: "'Georgia', serif" }}
                    >
                      {item.label}
                    </div>
                    <div
                      className="text-[10px] text-white/50 uppercase tracking-widest leading-tight"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {item.sub}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── § 2 · Timeline ───────────────────────────────── */}
      <section className="relative py-20 lg:py-32 bg-[#F8F9FA]">
        <GridBg className="opacity-60" />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">

          <motion.div
            className="mb-16 pb-8 border-b border-gray-200"
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <SectionLabel code="§ 002" label="Milestones" />
            <h2
              className="text-3xl lg:text-5xl font-bold text-[#023274] leading-[1.1] max-w-3xl"
              style={{ fontFamily: "'Georgia', serif" }}
            >
              From Innovation to India
              <span className="block text-gray-400 font-normal italic text-2xl lg:text-3xl mt-2">
                The Punctal Plug Journey, 1975–2025
              </span>
            </h2>
          </motion.div>

          <motion.div
            className="space-y-0"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group grid grid-cols-12 gap-4 lg:gap-8 border-b border-gray-200 last:border-0 py-8 hover:bg-white/70 -mx-4 px-4 lg:-mx-8 lg:px-8 transition-colors duration-200 rounded-xl"
              >
                {/* Year */}
                <div className="col-span-3 lg:col-span-2">
                  <div
                    className="text-4xl lg:text-5xl font-bold text-gray-200 group-hover:text-[#023274]/20 transition-colors leading-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.year}
                  </div>
                </div>

                {/* Connector dot */}
                <div className="col-span-1 flex flex-col items-center pt-2">
                  <div className="w-3 h-3 rounded-full border-2 border-[#023274] bg-white group-hover:bg-[#023274] transition-colors flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="flex-1 w-px bg-gray-200 mt-2" />}
                </div>

                {/* Content */}
                <div className="col-span-8 lg:col-span-9">
                  <div className="mb-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest text-white bg-[#023274] px-2 py-0.5 rounded-sm"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg lg:text-xl font-bold text-[#023274] mb-2"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm lg:text-base text-gray-500 leading-relaxed max-w-2xl" style={{ fontFamily: "system-ui, sans-serif" }}>
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── § 3 · Clinical Advantages ────────────────────── */}
      <section className="relative py-20 lg:py-32 bg-white">
        <GridBg />
        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">

          {/* Header + image */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            <motion.div
              className="lg:col-span-7"
              variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}
            >
              <SectionLabel code="§ 003" label="For Professionals · Punctal Occlusion" />
              <h2
                className="text-3xl lg:text-5xl font-bold text-[#023274] leading-[1.1] mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Clinical Advantages of
                <span className="block italic font-normal text-gray-400">Punctal Occlusion Therapy</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed max-w-xl" style={{ fontFamily: "system-ui, sans-serif" }}>
                Punctal occlusion is a well-established, minimally invasive approach to managing dry eye disease. The following advantages reflect the established therapeutic rationale for punctal plug use as recognised across ophthalmic clinical practice.
              </p>
            </motion.div>

            <motion.div
              className="lg:col-span-5"
              variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport}
            >
              <div className="relative rounded-3xl overflow-hidden border border-gray-100 shadow-2xl aspect-[4/3]">
                <img
                  src={clinicalEyeCare}
                  alt="Clinical Eye Care"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#023274]/80 to-transparent p-6">
                  <span className="text-white text-xs font-mono tracking-widest uppercase opacity-80">
                    Clinical Ophthalmic Care
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Benefits grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            {clinicalBenefits.map((b, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-[#023274]/20 hover:shadow-lg rounded-2xl p-8 transition-all duration-300"
              >
                <div
                  className="text-6xl font-bold text-gray-100 group-hover:text-[#023274]/10 transition-colors leading-none mb-5 select-none"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {b.id}
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-[#023274]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-[#023274]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4
                    className="font-bold text-[#023274] text-lg leading-snug"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {b.title}
                  </h4>
                </div>
                <p className="text-base text-gray-500 leading-relaxed pl-8" style={{ fontFamily: "system-ui, sans-serif" }}>
                  {b.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── § 4 · CTA ────────────────────────────────────── */}
      <section className="relative py-20 lg:py-28 bg-[#023274] overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute -right-32 -top-32 w-96 h-96 rounded-full border border-white/5" />
        <div className="absolute -right-16 -top-16 w-64 h-64 rounded-full border border-white/5" />

        <div className="relative max-w-[1400px] mx-auto px-4 lg:px-8">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={viewport}
          >
            <motion.div variants={fadeLeft}>
              <SectionLabel code="§ 004" label="For Ophthalmic Professionals" />
              <h2
                className="text-3xl lg:text-5xl font-bold text-white leading-[1.1] mb-6"
                style={{ fontFamily: "'Georgia', serif" }}
              >
                Get in Touch
                <span className="block italic font-normal text-white/50">Clinical Support & Product Enquiries</span>
              </h2>
              <p className="text-base text-white/60 leading-relaxed mb-8 max-w-xl" style={{ fontFamily: "system-ui, sans-serif" }}>
                Our representatives are available to provide product information, arrange demonstrations, and support ophthalmic professionals across India with the Corza Medical Eagle Vision portfolio.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-[#023274] text-sm font-bold px-8 py-4 rounded-xl hover:bg-gray-100 transition-colors shadow-lg shadow-black/10"
                  style={{ fontFamily: "system-ui, sans-serif" }}
                >
                  Contact a Representative
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            </motion.div>

            {/* Partnership reference card — only confirmed facts */}
            <motion.div variants={fadeRight}>
              <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-sm">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div className="text-white font-bold text-sm" style={{ fontFamily: "system-ui, sans-serif" }}>
                    Partnership at a Glance
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { label: "Partnership Type", value: "Exclusive India Marketing Rights" },
                    { label: "Portfolio", value: "Eagle Vision Punctal Plug Range" },
                    { label: "Technology Partner", value: "Corza Medical, USA" },
                    { label: "India Partner", value: "Perin Healthcare Pvt. Ltd." },
                    { label: "Coverage", value: "Pan-India" },
                    { label: "Eagle Vision Est.", value: "1975" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-start justify-between gap-4 py-2 border-b border-white/5 last:border-0">
                      <span className="text-xs text-white/40 tracking-wide" style={{ fontFamily: "system-ui, sans-serif" }}>{row.label}</span>
                      <span className="text-xs text-white font-semibold text-right" style={{ fontFamily: "system-ui, sans-serif" }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
