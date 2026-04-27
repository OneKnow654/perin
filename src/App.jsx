import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ComingSoonProvider } from "./context/ComingSoonContext";

import Home from "./pages/Home";
import About from "./pages/About";
import WhoAreWe from "./pages/WhoAreWe";
import WhatWeDo from "./pages/WhatWeDo";
import OurStory from "./pages/OurStory";
import OurMission from "./pages/OurMission";
import OurVision from "./pages/OurVision";
import OurIdentity from "./pages/OurIdentity";
import OurImpact from "./pages/OurImpact";
import CorzaMedical from "./pages/CorzaMedical";
import Oncology from "./pages/Oncology";
import Oncology2 from "./pages/Oncology2";
import Ophthalmology from "./pages/Ophthalmology";
import Career from "./pages/Career";
import Contact from "./pages/Contact";
import Distributor from "./pages/Distributor";
import NotFound from "./pages/NotFound";

const pageVariants = {
  initial: { opacity: 0, y: 18 },
  enter: {
    opacity: 1, y: 0,
    transition: { duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: {
    opacity: 0, y: -10,
    transition: { duration: 0.28, ease: "easeIn" },
  },
};

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
      <motion.div
        key={location.pathname}
        variants={pageVariants}
        initial="initial"
        animate="enter"
        exit="exit"
      >
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/who-are-we" element={<WhoAreWe />} />
          <Route path="/what-we-do" element={<WhatWeDo />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/our-mission" element={<OurMission />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/our-identity" element={<OurIdentity />} />
          <Route path="/our-impact" element={<OurImpact />} />
          <Route path="/corza-medical" element={<CorzaMedical />} />
          <Route path="/oncology" element={<Oncology />} />
          <Route path="/oncology2" element={<Oncology2 />} />
          <Route path="/ophthalmology" element={<Ophthalmology />} />
          <Route path="/rare-diseases" element={<Oncology />} />
          <Route path="/product-page" element={<Oncology />} />
          <Route path="/nanonext" element={<Oncology />} />
          <Route path="/letrolive" element={<Oncology />} />
          <Route path="/palody" element={<Oncology />} />
          <Route path="/anaview" element={<Oncology />} />
          <Route path="/embopag" element={<Oncology />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
          <Route path="/distributor" element={<Distributor />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ComingSoonProvider>
        <ScrollToTop />
        <div className="flex flex-col min-h-[100dvh]">
          <Navbar />
          <main className="flex-1">
            <AnimatedRoutes />
          </main>
          <Footer />
        </div>
      </ComingSoonProvider>
    </BrowserRouter>
  );
}
