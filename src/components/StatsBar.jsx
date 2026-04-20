import { motion } from "framer-motion";

const fadeUp = (i = 0) => ({
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] },
  whileHover: { scale: 1.025, transition: { duration: 0.2 } },
});

const ClayIcon = ({ children, color = "#3B82F6", size = 44 }) => (
  <div
    style={{
      width: size,
      height: size,
      borderRadius: "35%",
      background: `linear-gradient(145deg, ${color}22 0%, ${color}44 100%)`,
      boxShadow: `0 4px 12px ${color}33, inset 0 1px 0 ${color}55, inset 0 -2px 4px ${color}22`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    }}
  >
    {children}
  </div>
);

export default function PerinHealthcareBento() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #EFF6FF 0%, #F0F9FF 60%, #EFF6FF 100%)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "18px 0",
        boxSizing: "border-box",
        fontFamily: "'DM Sans', 'Segoe UI', sans-serif",
      }}
    >
      {/* ── Centered content wrapper ── */}
      <div
        style={{
          width: "100%",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 40px",
          boxSizing: "border-box",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: -14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: 14, flexShrink: 0 }}
        >
          <h1 style={{ fontSize: 34, fontWeight: 800, color: "#0F172A", margin: 0, letterSpacing: "-0.4px" }}>
            Perin Healthcare at a Glance
          </h1>
          <div style={{ display: "flex", gap: 5, marginTop: 5 }}>
            <div style={{ height: 3, width: 34, borderRadius: 99, background: "#2563EB" }} />
            <div style={{ height: 3, width: 10, borderRadius: 99, background: "#93C5FD" }} />
          </div>
        </motion.div>

        {/* ── Grid ── */}
        <div
          style={{
            flex: 1,
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 10,
            minHeight: 480,
          }}
        >
          {/* 1 — Global Partnership */}
          <motion.div {...fadeUp(0)} style={{
            gridColumn: "1/2", gridRow: "1/2",
            background: "#fff", borderRadius: 18,
            padding: "14px 10px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7,
            border: "1px solid #EFF6FF",
            boxShadow: "0 2px 10px rgba(37,99,235,0.07)",
            position: "relative", overflow: "hidden",
          }}>
            <svg style={{ position:"absolute", inset:0, width:"100%", height:"100%", opacity:0.04, pointerEvents:"none" }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <circle cx="100" cy="100" r="85" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
              <ellipse cx="100" cy="100" rx="42" ry="85" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
              <ellipse cx="100" cy="100" rx="85" ry="32" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
              <ellipse cx="100" cy="100" rx="85" ry="60" fill="none" stroke="#2563EB" strokeWidth="1.2"/>
              <line x1="15" y1="100" x2="185" y2="100" stroke="#2563EB" strokeWidth="1.2"/>
            </svg>
            <span style={{ fontSize: 36, fontWeight: 900, color: "#2563EB", lineHeight: 1 }}>02+</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#64748B", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em" }}>Global Partnership</span>
          </motion.div>

          {/* 2 — Major Therapy Area */}
          <motion.div {...fadeUp(1)} style={{
            gridColumn: "2/3", gridRow: "1/2",
            background: "linear-gradient(145deg, #2563EB 0%, #1D4ED8 100%)",
            borderRadius: 18,
            padding: "14px 10px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7,
            boxShadow: "0 6px 22px rgba(37,99,235,0.32)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 70% 15%, rgba(255,255,255,0.13) 0%, transparent 60%)", pointerEvents:"none" }}/>
            <span style={{ fontSize: 36, fontWeight: 900, color: "#fff", lineHeight: 1 }}>04+</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#BFDBFE", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em" }}>Major Therapy Area</span>
          </motion.div>

          {/* 3 — Lab Image */}
          <motion.div {...fadeUp(2)} style={{
            gridColumn: "3/5", gridRow: "1/2",
            borderRadius: 18, overflow: "hidden",
            boxShadow: "0 2px 10px rgba(37,99,235,0.08)",
          }}>
            <img
              src="https://media.akums.in/img/pharmaceutical/pbanner.webp"
              alt="Lab researchers"
              style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
            />
          </motion.div>

          {/* 4 — Wide Pharma Partner */}
          <motion.div {...fadeUp(3)} style={{
            gridColumn: "1/3", gridRow: "2/3",
            background: "#fff", borderRadius: 18,
            overflow: "hidden",
            display: "flex", flexDirection: "row",
            border: "1px solid #EFF6FF",
            boxShadow: "0 2px 10px rgba(37,99,235,0.07)",
          }}>
            <div style={{ width:"42%", flexShrink:0, overflow:"hidden", borderRadius: "18px 0 0 18px" }}>
              <img
                src="https://www.shutterstock.com/image-photo/pharmacy-stock-tablet-indian-pharmacist-260nw-2273374373.jpg"
                alt="Pharmaceutical medicines"
                style={{ width:"100%", height:"100%", objectFit:"cover", display:"block" }}
              />
            </div>
            <div style={{ display:"flex", flexDirection:"column", justifyContent:"center", padding:"14px 18px", gap:5 }}>
              <span style={{ fontSize: 18, fontWeight: 800, color: "#0F172A", lineHeight: 1.2 }}>Global Pharma Partner</span>
              <div style={{ height: 2, width: 26, borderRadius: 99, background: "#2563EB" }}/>
              <span style={{ fontSize: 14, color: "#64748B", fontWeight: 500 }}>Pharmaceutical Manufacturer in India</span>
            </div>
          </motion.div>

          {/* 5 — Patented Devices */}
          <motion.div {...fadeUp(4)} style={{
            gridColumn: "3/4", gridRow: "2/3",
            background: "#fff", borderRadius: 18,
            padding: "14px 10px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7,
            border: "1px solid #EFF6FF",
            boxShadow: "0 2px 10px rgba(37,99,235,0.07)",
          }}>
            <span style={{ fontSize: 45, fontWeight: 900, color: "#2563EB", lineHeight: 1 }}>02+</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#64748B", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em" }}>Patented Devices</span>
          </motion.div>

          {/* 6 — First-in-India Brands */}
          <motion.div {...fadeUp(5)} style={{
            gridColumn: "4/5", gridRow: "2/3",
            background: "#fff", borderRadius: 18,
            padding: "14px 10px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7,
            border: "1px solid #EFF6FF",
            boxShadow: "0 2px 10px rgba(37,99,235,0.07)",
          }}>
            <span style={{ fontSize: 45, fontWeight: 900, color: "#2563EB", lineHeight: 1 }}>02+</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#64748B", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em" }}>First-in-India Brands</span>
          </motion.div>

          {/* 7 — First-in-India Brands (blue tint) */}
          <motion.div {...fadeUp(6)} style={{
            gridColumn: "1/2", gridRow: "3/4",
            background: "linear-gradient(145deg, #EFF6FF 0%, #DBEAFE 100%)",
            borderRadius: 18,
            padding: "14px 10px",
            display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 7,
            border: "1px solid #BFDBFE",
            boxShadow: "0 2px 10px rgba(37,99,235,0.06)",
          }}>
            <span style={{ fontSize: 45, fontWeight: 900, color: "#2563EB", lineHeight: 1 }}>02+</span>
            <span style={{ fontSize: 16, fontWeight: 700, color: "#3B82F6", textAlign: "center", textTransform: "uppercase", letterSpacing: "0.05em" }}>First-in-India Brands</span>
          </motion.div>

          {/* 8 — Wide Highlight Dry Eye */}
          <motion.div {...fadeUp(7)} style={{
            gridColumn: "2/5", gridRow: "3/4",
            background: "linear-gradient(135deg, #1E40AF 0%, #2563EB 55%, #1D4ED8 100%)",
            borderRadius: 18,
            padding: "18px 26px",
            display: "flex", flexDirection: "row", alignItems: "center", gap: 18,
            boxShadow: "0 8px 30px rgba(37,99,235,0.35)",
            position: "relative", overflow: "hidden",
          }}>
            <div style={{ position:"absolute", inset:0, background:"radial-gradient(ellipse at 88% 0%, rgba(255,255,255,0.1) 0%, transparent 55%)", pointerEvents:"none" }}/>
            <div style={{ position:"absolute", bottom:-20, left:-20, width:90, height:90, borderRadius:"50%", background:"rgba(255,255,255,0.04)", pointerEvents:"none" }}/>
            <div style={{ flex: 1, zIndex: 1 }}>
              <p style={{ fontSize: 16, fontWeight: 600, color: "#fff", lineHeight: 1.6, margin: "0 0 10px 0" }}>
                A clinical trial on dry eye management is in the pipeline, conducted in collaboration with SSI-Mumbai.
              </p>
              <button
                style={{
                  background: "#fff", color: "#1E40AF",
                  border: "none", borderRadius: 999,
                  padding: "7px 18px",
                  fontSize: 13, fontWeight: 700,
                  cursor: "pointer", letterSpacing: "0.01em",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  transition: "transform 0.15s, box-shadow 0.15s",
                }}
                onMouseEnter={e => { e.target.style.transform = "scale(1.04)"; e.target.style.boxShadow = "0 4px 14px rgba(0,0,0,0.2)"; }}
                onMouseLeave={e => { e.target.style.transform = "scale(1)"; e.target.style.boxShadow = "0 2px 8px rgba(0,0,0,0.15)"; }}
              >
                Learn more about Perin →
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}