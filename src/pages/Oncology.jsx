import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight, Package, Thermometer, Clipboard, Building } from "lucide-react";
import PageHeader from "../components/PageHeader";
import { staggerContainer, fadeUp, scaleIn, viewport } from "../utils/animations";

// ─── Product Data ────────────────────────────────────────────────────────────
const products = [
  {
    brand: "Nanonext®", name: "Nanonext® 100",
    generic: "Paclitaxel (protein bound particles) for Injectable Suspension 100 mg/vial",
    category: "oncology", label: "Oncology", slug: "nanonext",
    tags: ["Injectable", "Hospital Use"],
    desc: "Nanoparticle albumin-bound paclitaxel for injectable suspension. Advanced cancer treatment solution.",
    indications: "Metastatic breast cancer, non-small cell lung cancer (NSCLC), and metastatic adenocarcinoma of the pancreas.",
    mechanism: "Nanoparticle albumin-bound (nab) technology delivers paclitaxel directly to tumor cells, exploiting albumin receptors for enhanced uptake with reduced toxicity.",
    dosage: "260 mg/m² IV over 30 minutes every 3 weeks. Dose adjustments based on toxicity.",
    route: "Intravenous (IV) Infusion",
    specs: [{ label: "Packaging", value: "100 mg / vial" }, { label: "Manufacturer", value: "Perin Healthcare Pvt Ltd" }, { label: "Storage", value: "2°C – 8°C (Refrigerate)" }, { label: "Mfg. Lic. No.", value: "MB/09/749" }],
  },
  {
    brand: "Letrolive®", name: "Letrolive® 2.5",
    generic: "Letrozole 2.5mg tablets",
    category: "oncology", label: "Oncology", slug: "letrolive",
    tags: ["Oral", "Tablet"],
    desc: "Aromatase inhibitor for hormone receptor-positive breast cancer in postmenopausal women.",
    indications: "First-line treatment of hormone receptor-positive, locally advanced or metastatic breast cancer in postmenopausal women.",
    mechanism: "Selectively inhibits aromatase enzyme, blocking conversion of androgens to estrogens, thereby reducing estrogen levels that fuel hormone-sensitive tumors.",
    dosage: "2.5 mg orally once daily. Continue until tumor progression is evident.",
    route: "Oral",
    specs: [{ label: "Packaging", value: "30 tablets / strip" }, { label: "Manufacturer", value: "Perin Healthcare Pvt Ltd" }, { label: "Storage", value: "Below 25°C, dry place" }, { label: "Mfg. Lic. No.", value: "MB/09/750" }],
  },
  {
    brand: "Palody®", name: "Palody® 125",
    generic: "Palbociclib 125mg capsules",
    category: "oncology", label: "Oncology", slug: "palody",
    tags: ["Oral", "Capsule"],
    desc: "CDK 4/6 inhibitor for HR-positive, HER2-negative advanced or metastatic breast cancer.",
    indications: "HR-positive, HER2-negative advanced or metastatic breast cancer in combination with an aromatase inhibitor or fulvestrant.",
    mechanism: "Inhibits cyclin-dependent kinases 4 and 6 (CDK4/6), blocking cell cycle progression from G1 to S phase, preventing cancer cell proliferation.",
    dosage: "125 mg once daily for 21 consecutive days followed by 7 days off. Taken with food.",
    route: "Oral",
    specs: [{ label: "Packaging", value: "21 capsules / pack" }, { label: "Manufacturer", value: "Perin Healthcare Pvt Ltd" }, { label: "Storage", value: "Below 30°C" }, { label: "Mfg. Lic. No.", value: "MB/09/751" }],
  },
  {
    brand: "Anaview®", name: "Anaview®",
    generic: "Ranibizumab 10mg/mL solution for injection",
    category: "ophthalmology", label: "Ophthalmology", slug: "anaview",
    tags: ["Injectable", "Intravitreal"],
    desc: "Anti-VEGF therapy for neovascular age-related macular degeneration and diabetic macular edema.",
    indications: "Neovascular (wet) age-related macular degeneration (AMD), diabetic macular edema (DME), and macular edema following retinal vein occlusion.",
    mechanism: "Recombinant humanized monoclonal antibody fragment that binds and inhibits VEGF-A, preventing abnormal blood vessel growth in the retina.",
    dosage: "0.5 mg (0.05 mL) by intravitreal injection once monthly for the first 3 months, then as needed.",
    route: "Intravitreal Injection",
    specs: [{ label: "Packaging", value: "0.23 mL / vial" }, { label: "Manufacturer", value: "Perin Healthcare Pvt Ltd" }, { label: "Storage", value: "2°C – 8°C (Refrigerate)" }, { label: "Mfg. Lic. No.", value: "MB/09/752" }],
  },
  {
    brand: "Embopag®", name: "Embopag® 25",
    generic: "Eltrombopag 25mg tablets",
    category: "rare-diseases", label: "Rare Diseases", slug: "embopag",
    tags: ["Oral", "Tablet"],
    desc: "Thrombopoietin receptor agonist for chronic immune thrombocytopenia and aplastic anemia.",
    indications: "Chronic immune thrombocytopenia (ITP), severe aplastic anemia, and thrombocytopenia in patients with chronic hepatitis C.",
    mechanism: "Binds to the transmembrane domain of the thrombopoietin receptor (c-Mpl), stimulating platelet production from bone marrow progenitor cells.",
    dosage: "25–75 mg once daily depending on indication. Take on empty stomach (1 hour before or 2 hours after food).",
    route: "Oral",
    specs: [{ label: "Packaging", value: "28 tablets / pack" }, { label: "Manufacturer", value: "Perin Healthcare Pvt Ltd" }, { label: "Storage", value: "Below 30°C, protect from moisture" }, { label: "Mfg. Lic. No.", value: "MB/09/753" }],
  },
];

const filterTabs = [
  { key: "all", label: "All Products" },
  { key: "oncology", label: "Oncology" },
  { key: "ophthalmology", label: "Ophthalmology" },
  { key: "rare-diseases", label: "Rare Diseases" },
];

const processSteps = [
  { num: "01", title: "Browse & Select", desc: "Explore our product catalog and choose the products that meet your therapeutic needs." },
  { num: "02", title: "Request Information", desc: "Download product leaflets, specifications, and regulatory documentation." },
  { num: "03", title: "Contact Our Team", desc: "Reach out to our sales team for pricing, availability, and distribution inquiries." },
  { num: "04", title: "Delivery & Support", desc: "Cold-chain logistics delivery with ongoing product support and pharmacovigilance." },
];

// Mini product card icon
function ProductIcon({ brand }) {
  return (
    <div className="bg-white rounded-xl shadow-lg w-24 h-32 flex flex-col items-center justify-center gap-2 text-center px-2">
      <span className="text-xs font-bold tracking-widest uppercase text-gray-300">PERIN</span>
      <Package size={32} className="text-[#023274]" />
      <span className="text-xs font-bold text-[#023274] leading-tight">{brand}</span>
    </div>
  );
}

// Expand panel content
function ExpandPanel({ product, onClose }) {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-[#023274]/20 shadow-2xl overflow-hidden"
      initial={{ opacity: 0, scale: 0.97 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Header */}
      <div
        className="px-6 py-5 flex items-center gap-4 relative"
        style={{ background: "linear-gradient(135deg, #0F3D3E 0%, #023274 100%)" }}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
        >
          <X size={14} />
        </button>
        <div className="bg-white/10 rounded-xl w-12 h-16 flex flex-col items-center justify-center gap-1 flex-shrink-0">
          <Package size={20} className="text-white" />
          <span className="text-white/60 font-bold tracking-widest" style={{ fontSize: 9 }}>PERIN</span>
        </div>
        <div>
          <span className="text-xs font-bold tracking-widest uppercase text-[#58b66a]">{product.label}</span>
          <h3 className="text-lg font-bold text-white leading-tight">{product.name}</h3>
          <p className="text-white/55 text-xs italic">{product.generic}</p>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 overflow-y-auto max-h-[420px]">
        <p className="text-xs font-bold tracking-widest uppercase text-[#023274] mb-2">About</p>
        <p className="text-gray-600 text-sm leading-relaxed mb-5">{product.desc}</p>

        {[
          { label: "Indications", value: product.indications },
          { label: "Mechanism of Action", value: product.mechanism },
        ].map(({ label, value }) => (
          <div key={label} className="mb-4">
            <p className="text-xs font-bold tracking-widest uppercase text-[#023274] mb-2">{label}</p>
            <p className="text-sm text-gray-600 leading-relaxed bg-gray-50 rounded-xl p-3">{value}</p>
          </div>
        ))}

        <div className="grid grid-cols-1 gap-2 mb-4">
          {[{ label: "Route of Administration", value: product.route }, { label: "Dosage", value: product.dosage }].map(({ label, value }) => (
            <div key={label} className="bg-gray-50 rounded-xl p-3">
              <p className="text-xs text-gray-400 mb-1">{label}</p>
              <p className="text-sm font-semibold text-gray-800">{value}</p>
            </div>
          ))}
        </div>

        <p className="text-xs font-bold tracking-widest uppercase text-[#023274] mb-2">Specifications</p>
        <div className="grid grid-cols-2 gap-2 mb-5">
          {product.specs.map((spec, i) => (
            <div key={i} className="bg-gray-50 rounded-xl p-3 flex items-start gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#023274]/10 flex items-center justify-center flex-shrink-0">
                <Package size={12} className="text-[#023274]" />
              </div>
              <div>
                <p className="text-xs text-gray-400">{spec.label}</p>
                <p className="text-xs font-bold text-gray-800">{spec.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.map((tag, i) => (
            <span key={i} className="text-xs font-semibold px-2.5 py-1 rounded-full bg-[#023274]/5 text-[#023274] border border-[#023274]/10">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
          <Link
            to={`/${product.slug}`}
            className="flex items-center justify-center gap-2 w-full bg-[#023274] text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-[#023274]/90 transition-colors"
          >
            <ArrowRight size={13} /> Full Product Page
          </Link>
          <Link to="/contact" className="text-center text-xs text-[#023274] font-semibold hover:underline underline-offset-2 pt-1">
            Contact our sales team →
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Oncology() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [query, setQuery] = useState("");
  const [expanded, setExpanded] = useState(null);
  const featured = products[0];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const catMatch = activeFilter === "all" || p.category === activeFilter;
      const textMatch = query === "" || (p.name + p.generic + p.brand).toLowerCase().includes(query.toLowerCase());
      return catMatch && textMatch;
    });
  }, [activeFilter, query]);

  return (
    <main>
      <PageHeader
        type="image"
        src="/images/perin-career-img1.jpg"
        overlay
        overlayOpacity="bg-black/50"
        title="Product"
        accent="Healthcare"
        highlight="Portfolio"
        desc="Committed to improving patient outcomes through innovation and global collaboration."
        breadcrumbs={[{ label: "Products", link: "#" }, { label: "Oncology", link: "/oncology" }]}
      />

      {/* Featured Product */}
      <section className="py-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#023274] mb-2">Featured Product</p>
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white border border-gray-100 rounded-2xl p-8 lg:p-10"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            whileHover={{ boxShadow: "0 8px 40px rgba(2,50,116,0.12)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="bg-[#023274]/5 rounded-2xl h-72 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#023274] to-[#58b66a]" />
              <ProductIcon brand={featured.brand} />
            </div>
            <div>
              <p className="text-xs font-bold tracking-widest uppercase text-[#58b66a] mb-1">{featured.category}</p>
              <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">{featured.name}</h2>
              <p className="text-sm italic text-gray-400 mb-4">{featured.generic}</p>
              <p className="text-gray-600 leading-relaxed mb-6">{featured.desc}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {featured.specs.map((s, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-3 flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-[#023274]/10 flex items-center justify-center flex-shrink-0">
                      <Package size={13} className="text-[#023274]" />
                    </div>
                    <div>
                      <strong className="block text-xs font-semibold text-gray-800">{s.label}</strong>
                      <span className="text-xs text-gray-400">{s.value}</span>
                    </div>
                  </div>
                ))}
              </div>
              <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.96 }} transition={{ type: "spring", stiffness: 380, damping: 24 }} className="inline-block">
                <Link to={`/${featured.slug}`} className="inline-block bg-[#023274] text-white text-sm font-bold px-7 py-3 rounded-xl hover:bg-[#023274]/90 transition-colors">
                  View Full Details
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Catalog */}
      <section className="py-0 pb-16 px-6 lg:px-16 xl:px-24">
        <div className="max-w-screen-2xl mx-auto">
          <p className="text-xs font-bold tracking-widest uppercase text-[#023274] mb-1">Browse Products</p>
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-1">Product Catalog</h2>
          <p className="text-gray-500 text-sm mb-8">Filter by therapeutic area or search by product name.</p>

          {/* Filter bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
            <div className="flex flex-wrap gap-2">
              {filterTabs.map((tab) => (
                <motion.button
                  key={tab.key}
                  onClick={() => { setActiveFilter(tab.key); setExpanded(null); }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-200 ${
                    activeFilter === tab.key
                      ? "bg-[#023274] text-white border-[#023274]"
                      : "border-gray-200 bg-white text-gray-500 hover:border-[#023274] hover:text-[#023274]"
                  }`}
                  whileTap={{ scale: 0.95 }}
                >
                  {tab.label}
                </motion.button>
              ))}
            </div>
            <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-4 py-2 focus-within:border-[#023274] transition-colors">
              <Search size={16} className="text-gray-400 flex-shrink-0" />
              <input
                type="text"
                placeholder="Search products…"
                className="border-none outline-none bg-transparent text-sm text-gray-700 placeholder-gray-400 w-40"
                value={query}
                onChange={(e) => { setQuery(e.target.value); setExpanded(null); }}
              />
            </div>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <Search size={40} className="text-gray-200 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">No products match your search.</p>
              <button onClick={() => { setQuery(""); setActiveFilter("all"); }} className="mt-4 text-sm text-[#023274] font-semibold underline underline-offset-2">
                Clear filters
              </button>
            </div>
          ) : (
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              {filtered.map((product, i) => (
                <motion.div key={product.slug} variants={scaleIn} layout>
                  <motion.div
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col cursor-pointer"
                    whileHover={{ boxShadow: "0 8px 40px rgba(2,50,116,0.12)", y: -4 }}
                    transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
                    <div className="relative">
                      <span className="absolute top-3 right-3 z-10 text-xs font-bold px-3 py-1 rounded-full text-white bg-[#023274]">
                        {product.label}
                      </span>
                      <div className="h-44 bg-[#023274]/5 flex items-center justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-5 bg-gradient-to-br from-[#023274] to-[#58b66a]" />
                        <ProductIcon brand={product.brand} />
                      </div>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <p className="text-xs font-semibold text-[#023274] uppercase tracking-wide mb-1">{product.label}</p>
                      <h3 className="text-base font-bold text-gray-900 mb-0.5">{product.name}</h3>
                      <p className="text-xs italic text-gray-400 mb-3">{product.generic}</p>
                      <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{product.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {product.tags.map((tag, ti) => (
                          <span key={ti} className="text-xs font-semibold text-gray-500 bg-gray-50 px-2.5 py-1 rounded-md">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <motion.button
                        onClick={() => setExpanded(expanded === product.slug ? null : product.slug)}
                        className={`flex-1 text-center text-sm font-semibold py-2.5 rounded-lg transition-colors duration-200 ${
                          expanded === product.slug
                            ? "bg-gray-200 text-gray-700"
                            : "bg-[#023274] text-white hover:bg-[#023274]/90"
                        }`}
                        whileTap={{ scale: 0.97 }}
                      >
                        {expanded === product.slug ? "Close ✕" : "View Details"}
                      </motion.button>
                    </div>
                  </motion.div>

                  {/* Expand panel below the card */}
                  <AnimatePresence>
                    {expanded === product.slug && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.38, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="overflow-hidden mt-3"
                      >
                        <ExpandPanel product={product} onClose={() => setExpanded(null)} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-6 lg:px-16 xl:px-24 border-t border-gray-100">
        <div className="max-w-screen-2xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-xs font-bold tracking-widest uppercase text-[#023274] mb-2">How It Works</p>
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Product Information &amp; Order Process</h2>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
          >
            {processSteps.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white border border-gray-100 rounded-2xl p-7 text-center relative"
                whileHover={{ y: -6, boxShadow: "0 12px 40px rgba(2,50,116,0.10)" }}
                transition={{ duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <div className="text-5xl font-extrabold text-[#023274]/10 leading-none mb-3">{step.num}</div>
                <div className="w-12 h-12 rounded-xl bg-[#023274]/10 flex items-center justify-center mx-auto mb-4">
                  <Package size={20} className="text-[#023274]" />
                </div>
                <h3 className="font-bold text-gray-800 text-sm mb-2">{step.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <div className="mx-6 lg:mx-16 xl:mx-24 rounded-2xl p-14 text-center relative overflow-hidden mb-20"
        style={{ background: "linear-gradient(135deg, #0F3D3E 0%, #023274 60%, #58b66a 100%)" }}>
        <div className="relative z-10">
          <h2 className="text-3xl font-bold text-white mb-3">Need a Product Not Listed Here?</h2>
          <p className="text-white/75 text-base max-w-md mx-auto mb-8">
            Our team can help with custom formulations, bulk orders, and partnership inquiries.
          </p>
          <motion.div whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 380, damping: 24 }} className="inline-block">
            <Link to="/contact" className="inline-block bg-white font-bold text-sm px-10 py-4 rounded-xl hover:shadow-2xl transition-all duration-200" style={{ color: "#023274" }}>
              Contact Our Sales Team
            </Link>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
