// src/pages/CorzaMedical.jsx
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewport } from "../utils/animations";
import globalVideo from "../assets/Videos/perin-global-video.mp4";
import clinicalEyeCare from "../assets/Images/clinical-eye-care.png";
import perinLogo from "../assets/Images/LogoTrans.png";
import corzaLogo from "../assets/Images/CorzaLogoTrans.png";

/* ─── Brand config — for Alliance Header ─────────────────── */
const brands = [
  {
    id: "perin",
    label: "Perin Healthcare",
    logo: perinLogo,
    alt: "Perin Healthcare",
    title: "Advancing India's",
    accent: "Healthcare Landscape",
    desc: "Global partnerships, Indian innovation. Better healthcare outcomes through exclusive solutions.",
    accentFrom: "rgba(34,139,87,0.18)",
    accentTo:   "rgba(2,50,116,0.22)",
    glowColor:  "rgba(34,139,87,0.25)",
    tagline: "India Exclusive Distributor",
    bgTint: "linear-gradient(135deg, rgba(34,139,87,0.08) 0%, rgba(2,50,116,0.12) 100%)",
    scale: 1.0,
  },
  {
    id: "corza",
    label: "Corza Medical",
    logo: corzaLogo,
    alt: "Corza Medical",
    title: "Precision Global",
    accent: "Ophthalmic Excellence",
    desc: "Trusted globally for over 40 years, Corza Medical delivers the gold standard in punctal occlusion.",
    accentFrom: "rgba(234,88,12,0.18)",
    accentTo:   "rgba(120,40,10,0.15)",
    glowColor:  "rgba(234,88,12,0.28)",
    tagline: "Global Technology Partner",
    bgTint: "linear-gradient(135deg, rgba(234,88,12,0.08) 0%, rgba(120,40,10,0.10) 100%)",
    scale: 1.3,
  },
];

/* ─── Alliance Header Component ──────────────────────────── */
function AllianceHeader({ breadcrumbs = [] }) {
  const [active, setActive] = useState(0); // 0 = Perin, 1 = Corza
  const brand = brands[active];

  useEffect(() => {
    const t = setTimeout(() => setActive(a => (a + 1) % 2), 6000);
    return () => clearTimeout(t);
  }, [active]);

  return (
    <header className="relative w-full overflow-hidden flex flex-col" style={{ minHeight: "100vh" }}>
      <AnimatePresence mode="sync">
        <motion.div
          key={brand.id + "-bg"}
          className="absolute inset-0 z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeInOut" }}
          style={{ background: brand.bgTint }}
        />
      </AnimatePresence>

      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(160deg, #0a1628 0%, #0d2150 45%, #112866 100%)",
        }}
      />

      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
        }}
      />

      <AnimatePresence mode="sync">
        <motion.div
          key={brand.id + "-glow"}
          className="absolute z-0 rounded-full blur-[120px]"
          style={{
            width: "500px",
            height: "500px",
            right: "10%",
            top: "50%",
            translateY: "-50%",
            background: brand.glowColor,
          }}
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.7 }}
          transition={{ duration: 1.1, ease: "easeInOut" }}
        />
      </AnimatePresence>

      <div className="absolute right-[12%] top-1/2 -translate-y-1/2 z-0 pointer-events-none">
        <div className="w-80 h-80 rounded-full border border-white/5" />
        <div className="absolute inset-6 rounded-full border border-white/4" />
        <div className="absolute inset-12 rounded-full border border-white/3" />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-10 flex-1 flex flex-col justify-center" style={{ minHeight: "100vh" }}>
        {breadcrumbs.length > 0 && (
          <nav className="pt-7 pb-0">
            <ol className="flex items-center gap-2">
              <li>
                <Link
                  to="/"
                  className="text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors font-mono"
                >
                  Home
                </Link>
              </li>
              {breadcrumbs.map((crumb, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-white/20 text-xs">/</span>
                  {crumb.link && i < breadcrumbs.length - 1 ? (
                    <Link
                      to={crumb.link}
                      className="text-white/40 text-xs tracking-widest uppercase hover:text-white/70 transition-colors font-mono"
                    >
                      {crumb.label}
                    </Link>
                  ) : (
                    <span className="text-white/70 text-xs tracking-widest uppercase font-mono">
                      {crumb.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div className="flex-1 flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full py-12">
            <div className="flex flex-col justify-center lg:pr-16 lg:-translate-x-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <span className="inline-block text-[14px] font-mono tracking-[0.3em] uppercase text-white/70 border border-white/20 px-4 py-1.5 rounded-sm mb-6">
                  Global Alliance · {new Date().getFullYear()}
                </span>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={brand.id + "-text"}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                  >
                    <h1
                      className="font-bold text-white leading-[1.05] mb-5"
                      style={{
                        fontFamily: "'Georgia', 'Times New Roman', serif",
                        fontSize: "clamp(2.2rem, 4.5vw, 3.8rem)",
                      }}
                    >
                      {brand.title}{" "}
                      <span
                        className="block italic font-normal"
                        style={{ color: "rgba(255,255,255,0.85)" }}
                      >
                        {brand.accent}
                      </span>
                    </h1>
                    <p
                      className="text-white/85 leading-relaxed max-w-md"
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "clamp(0.9rem, 1.5vw, 1.05rem)",
                      }}
                    >
                      {brand.desc}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </motion.div>
            </div>

            <div className="flex flex-col items-center justify-center gap-8">
              <div className="relative w-full max-w-md">
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    border: "1px solid rgba(255,255,255,0.22)",
                    backdropFilter: "blur(20px)",
                    boxShadow: "0 24px 64px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
                    padding: "16px 12px",
                  }}
                >
                  <AnimatePresence mode="sync">
                    <motion.div
                      key={brand.id + "-card-glow"}
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background: `radial-gradient(ellipse at 50% 50%, ${brand.accentFrom} 0%, transparent 70%)`,
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.8 }}
                    />
                  </AnimatePresence>

                  <div className="relative flex items-center justify-center" style={{ height: "260px" }}>
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={brand.id + "-logo"}
                        className="absolute inset-0 flex items-center justify-center"
                        initial={{ opacity: 0, scale: 0.88, filter: "blur(6px)" }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                        exit={{ opacity: 0, scale: 1.08, filter: "blur(6px)" }}
                        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
                      >
                        <motion.img
                          src={brand.logo}
                          alt={brand.alt}
                          className="drop-shadow-2xl"
                          initial={{ scale: brand.scale * 0.88 }}
                          animate={{ scale: brand.scale }}
                          transition={{ duration: 0.55 }}
                          style={{
                            height: "auto",
                            maxHeight: "240px",
                            width: "auto",
                            maxWidth: "100%",
                            objectFit: "contain",
                            display: "block",
                          }}
                        />
                      </motion.div>
                    </AnimatePresence>
                  </div>

                  <AnimatePresence mode="wait">
                    <motion.p
                      key={brand.id + "-tagline"}
                      className="text-center mt-5 relative z-10"
                      style={{
                        fontFamily: "system-ui, sans-serif",
                        fontSize: "11px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(255,255,255,0.45)",
                      }}
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.4, delay: 0.15 }}
                    >
                      {brand.tagline}
                    </motion.p>
                  </AnimatePresence>
                </div>
              </div>

              <div
                className="relative flex rounded-full p-1"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.14)",
                  backdropFilter: "blur(12px)",
                  gap: "2px",
                }}
              >
                <motion.div
                  className="absolute top-1 bottom-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                    width: "calc(50% - 4px)",
                  }}
                  animate={{ x: active === 0 ? 0 : "calc(100% + 4px)" }}
                  transition={{ type: "spring", stiffness: 380, damping: 34 }}
                />

                {brands.map((b, i) => (
                  <button
                    key={b.id}
                    onClick={() => setActive(i)}
                    className="relative z-10 rounded-full transition-colors duration-300"
                    style={{
                      fontFamily: "system-ui, sans-serif",
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      padding: "9px 22px",
                      color: active === i ? "#0a1628" : "rgba(255,255,255,0.45)",
                      border: "none",
                      background: "transparent",
                      cursor: "pointer",
                      whiteSpace: "nowrap",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {b.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="relative h-px w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          <AnimatePresence mode="sync">
            <motion.div
              key={brand.id + "-line"}
              className="absolute inset-0"
              style={{
                background: `linear-gradient(90deg, transparent 0%, ${brand.glowColor} 50%, transparent 100%)`,
              }}
              initial={{ opacity: 0, scaleX: 0.4 }}
              animate={{ opacity: 1, scaleX: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </header>
  );
}

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
      <span className="font-mono text-[10px] tracking-[0.25em] text-primary/40 border border-primary/15 px-2 py-1 rounded-sm">
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
      <AllianceHeader 
        breadcrumbs={[
          { label: "Global Alliance", link: "/corza-medical" },
          { label: "Corza Medical" }
        ]}
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
                className="text-3xl lg:text-5xl font-bold text-primary leading-[1.1] tracking-tight max-w-2xl"
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
                    <span className="text-xs font-semibold text-primary font-mono">{row.value}</span>
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
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span className="text-[10px] font-mono tracking-widest text-primary uppercase">Global Operations Overview</span>
                </div>
              </div>

              {/* Context strip — descriptive labels only, no invented numbers */}
              <div className="mt-4 grid grid-cols-3 gap-4">
                {[
                  { label: "Punctal Plug", sub: "Pioneer Since 1975" },
                  { label: "Eagle Vision", sub: "Globally Trusted Portfolio" },
                  { label: "India Launch", sub: "2025 · Pan-India" },
                ].map((item, i) => (
                  <div key={i} className="bg-primary rounded-2xl px-4 py-5 text-center">
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
              className="text-3xl lg:text-5xl font-bold text-primary leading-[1.1] max-w-3xl"
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
                    className="text-4xl lg:text-5xl font-bold text-gray-200 group-hover:text-primary/20 transition-colors leading-none"
                    style={{ fontFamily: "'Georgia', serif" }}
                  >
                    {item.year}
                  </div>
                </div>

                {/* Connector dot */}
                <div className="col-span-1 flex flex-col items-center pt-2">
                  <div className="w-3 h-3 rounded-full border-2 border-primary bg-white group-hover:bg-primary transition-colors flex-shrink-0" />
                  {i < timeline.length - 1 && <div className="flex-1 w-px bg-gray-200 mt-2" />}
                </div>

                {/* Content */}
                <div className="col-span-8 lg:col-span-9">
                  <div className="mb-3">
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest text-white bg-primary px-2 py-0.5 rounded-sm"
                      style={{ fontFamily: "system-ui, sans-serif" }}
                    >
                      {item.tag}
                    </span>
                  </div>
                  <h3
                    className="text-lg lg:text-xl font-bold text-primary mb-2"
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
                className="text-3xl lg:text-5xl font-bold text-primary leading-[1.1] mb-6"
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
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/80 to-transparent p-6">
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
                className="group relative bg-gray-50 hover:bg-white border border-gray-100 hover:border-primary/20 hover:shadow-lg rounded-2xl p-8 transition-all duration-300"
              >
                <div
                  className="text-6xl font-bold text-gray-100 group-hover:text-primary/10 transition-colors leading-none mb-5 select-none"
                  style={{ fontFamily: "'Georgia', serif" }}
                >
                  {b.id}
                </div>
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4
                    className="font-bold text-primary text-lg leading-snug"
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


    </main>
  );
}
