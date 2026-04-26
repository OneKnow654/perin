import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { menu, app } from "../data/config";
import { useComingSoon } from "../context/ComingSoonContext";
import {
  Users,
  Globe,
  Box,
  Heart,
  Film,
  UserPlus,
  ChevronDown,
  ArrowRight,
  X,
  Menu,
} from "lucide-react";

const iconMap = {
  users: Users,
  globe: Globe,
  box: Box,
  heart: Heart,
  film: Film,
  "user-plus": UserPlus,
};

const megaVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.22, ease: [0.25, 0.46, 0.45, 0.94] },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.18, ease: "easeIn" } },
};

const drawerVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 320, damping: 32 },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.28, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 18 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.055,
      duration: 0.35,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

export default function Navbar() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const { openComingSoon } = useComingSoon();
  const timeoutRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const openMenu = (i) => {
    clearTimeout(timeoutRef.current);
    setActiveMenu(i);
  };
  const closeMenu = () => {
    timeoutRef.current = setTimeout(() => setActiveMenu(null), 90);
  };

  return (
    <>
      <motion.header
        className="sticky top-0 z-50 bg-white"
        animate={{
          boxShadow: scrolled
            ? "0 1px 20px rgba(2,50,116,0.10)"
            : "0 1px 0 rgba(0,0,0,0.06)",
        }}
        transition={{ duration: 0.3 }}
      >
        <nav className="max-w-[1400px] mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <motion.img
                src={app.logo}
                alt={app.site_name}
                className="h-10 lg:h-12"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "block";
                }}
              />
              <span className="hidden font-bold text-primary text-lg">
                Perin Healthcare
              </span>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-1 xl:gap-2">
              {menu.map((item, i) => {
                const Icon = iconMap[item.icon];
                return (
                  <li
                    key={i}
                    className="relative"
                    onMouseEnter={() => item.type === "mega" && openMenu(i)}
                    onMouseLeave={closeMenu}
                  >
                    {item.link === "coming-soon" ? (
                      <button
                        onClick={openComingSoon}
                        className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors rounded-lg hover:bg-[#F2F1ED]/60 group"
                      >
                        {Icon && <Icon size={13} className="opacity-60" />}
                        {item.title}
                      </button>
                    ) : (
                      <Link
                        to={item.link ?? "#"}
                        className="flex items-center gap-1.5 px-3 xl:px-4 py-2 text-sm font-medium text-primary hover:text-accent transition-colors rounded-lg hover:bg-[#F2F1ED]/60 group"
                      >
                        {Icon && <Icon size={13} className="opacity-60" />}
                        {item.title}
                        {item.type === "mega" && (
                          <motion.span
                            animate={{ rotate: activeMenu === i ? 180 : 0 }}
                            transition={{ duration: 0.22, ease: "easeInOut" }}
                          >
                            <ChevronDown size={11} className="opacity-50" />
                          </motion.span>
                        )}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* CTA */}
            <div className="hidden lg:block">
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Get In Touch <ArrowRight size={13} />
                </Link>
              </motion.div>
            </div>

            {/* Mobile Toggle */}
            <motion.button
              className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white"
              onClick={() => setMobileOpen(true)}
              whileTap={{ scale: 0.92 }}
            >
              <Menu size={20} />
            </motion.button>
          </div>
        </nav>

        {/* Mega Panels */}
        <div className="relative">
          {menu.map((item, i) =>
            item.type === "mega" ? (
              <AnimatePresence key={i}>
                {activeMenu === i && (
                  <motion.div
                    className="absolute left-0 w-full bg-[#0F3D3E] shadow-2xl z-40"
                    variants={megaVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    onMouseEnter={() => openMenu(i)}
                    onMouseLeave={closeMenu}
                  >
                    <div className="max-w-[1400px] mx-auto px-8 py-8">
                      <div className="w-full flex justify-center">
                        <div
                          className="grid gap-x-12 gap-y-8 px-6 max-w-5xl"
                          style={{
                            gridTemplateColumns: `repeat(${item.columns.length}, minmax(180px, 1fr))`,
                          }}
                        >
                          {item.columns.map((col, ci) => (
                            <div key={ci}>
                              <h4 className="text-white/50 text-xs font-semibold uppercase tracking-widest mb-4">
                                {col.heading}
                              </h4>
                              <ul className="space-y-3">
                                {col.items.map((sub, si) => (
                                  <motion.li
                                    key={si}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay:
                                        (ci * col.items.length + si) * 0.04,
                                      duration: 0.25,
                                    }}
                                  >
                                    {sub.link === "coming-soon" ? (
                                      <button
                                        onClick={() => {
                                          setActiveMenu(null);
                                          openComingSoon();
                                        }}
                                        className="text-white hover:text-[#58b66a] transition-colors text-[15px] font-medium block w-full text-left"
                                      >
                                        {sub.name}
                                      </button>
                                    ) : (
                                      <Link
                                        to={sub.link}
                                        className="text-white hover:text-[#58b66a] transition-colors text-[15px] font-medium"
                                      >
                                        {sub.name}
                                      </Link>
                                    )}
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            ) : null,
          )}
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[998] bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed inset-0 z-[999] bg-primary lg:hidden overflow-y-auto"
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <img
                    src={app.logo_footer}
                    alt={app.site_name}
                    className="h-12"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                  <motion.button
                    className="text-white"
                    onClick={() => setMobileOpen(false)}
                    whileTap={{ scale: 0.88 }}
                  >
                    <X size={28} />
                  </motion.button>
                </div>

                <ul className="space-y-0">
                  {menu.map((item, i) => {
                    const Icon = iconMap[item.icon];
                    const isOpen = mobileExpanded === i;
                    return (
                      <motion.li
                        key={i}
                        custom={i}
                        variants={itemVariants}
                        initial="hidden"
                        animate="visible"
                        className="border-b border-white/20"
                      >
                        {item.type === "mega" ? (
                          <>
                            <button
                              className="w-full flex items-center justify-between py-4 text-white font-medium text-lg"
                              onClick={() =>
                                setMobileExpanded(isOpen ? null : i)
                              }
                            >
                              <span className="flex items-center gap-3">
                                {Icon && <Icon size={18} />}
                                {item.title}
                              </span>
                              <motion.span
                                animate={{ rotate: isOpen ? 45 : 0 }}
                                transition={{ duration: 0.22 }}
                                className="text-xl leading-none"
                              >
                                +
                              </motion.span>
                            </button>
                            <AnimatePresence>
                              {isOpen && (
                                <motion.div
                                  initial={{ height: 0, opacity: 0 }}
                                  animate={{ height: "auto", opacity: 1 }}
                                  exit={{ height: 0, opacity: 0 }}
                                  transition={{
                                    duration: 0.32,
                                    ease: [0.25, 0.46, 0.45, 0.94],
                                  }}
                                  className="overflow-hidden pl-10 pb-4 space-y-3"
                                >
                                  {item.columns.flatMap((col) =>
                                    col.items.map((sub, si) => (
                                      sub.link === "coming-soon" ? (
                                        <button
                                          key={si}
                                          onClick={() => {
                                            setMobileOpen(false);
                                            openComingSoon();
                                          }}
                                          className="block text-white/80 hover:text-white transition-colors text-left w-full"
                                        >
                                          {sub.name}
                                        </button>
                                      ) : (
                                        <Link
                                          key={si}
                                          to={sub.link}
                                          className="block text-white/80 hover:text-white transition-colors"
                                          onClick={() => setMobileOpen(false)}
                                        >
                                          {sub.name}
                                        </Link>
                                      )
                                    )),
                                  )}
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </>
                        ) : (
                          item.link === "coming-soon" ? (
                            <button
                              onClick={() => {
                                setMobileOpen(false);
                                openComingSoon();
                              }}
                              className="flex items-center gap-3 w-full py-4 text-white font-medium text-lg"
                            >
                              {Icon && <Icon size={18} />}
                              {item.title}
                            </button>
                          ) : (
                            <Link
                              to={item.link}
                              className="flex items-center gap-3 py-4 text-white font-medium text-lg"
                              onClick={() => setMobileOpen(false)}
                            >
                              {Icon && <Icon size={18} />}
                              {item.title}
                            </Link>
                          )
                        )}
                      </motion.li>
                    );
                  })}
                </ul>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.4 }}
                >
                  <Link
                    to="/contact"
                    className="inline-block mt-8 bg-white text-primary px-6 py-3 rounded-full font-semibold"
                    onClick={() => setMobileOpen(false)}
                  >
                    Get In Touch
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

