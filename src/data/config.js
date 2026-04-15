// ─── Site Config ───────────────────────────────────────────────────────────
export const app = {
  site_name: "Perin Healthcare",
  site_tagline: "Building Better Tomorrow",
  site_url: "https://perinhealthcare.com",
  logo: "/images/perin-logo.png",
  logo_footer: "/images/perin-logo-footer.png",
  meta: {
    description:
      "Delivering advanced healthcare solutions with global partnerships and patient-first innovation.",
  },
  contact: {
    email: "info@perinhealthcare.com",
    phone: "+91 9819464064",
  },
  social: [
    { icon: "facebook", url: "#" },
    { icon: "youtube", url: "#" },
    { icon: "linkedin", url: "https://www.linkedin.com/company/perin-heathcare/" },
    { icon: "instagram", url: "https://www.instagram.com/perinhealthcare" },
  ],
  footer_tagline:
    "Delivering advanced healthcare solutions with global partnerships and patient-first innovation.",
  copyright: `© ${new Date().getFullYear()} Perin Healthcare. All Rights Reserved.`,
  cta: {
    heading: "Need help?",
    subheading: "Let's start a conversation.",
    button_text: "Get in touch",
    button_link: "/contact",
  },
};

// ─── Navigation Menu ────────────────────────────────────────────────────────
export const menu = [
  {
    title: "Company",
    icon: "users",
    type: "mega",
    columns: [
      {
        heading: "Company",
        items: [
          { name: "About Us", link: "/about" },
          { name: "Who Are We", link: "/who-are-we" },
          { name: "What We Do", link: "/what-we-do" },
          { name: "Our Story", link: "/our-story" },
        ],
      },
      {
        heading: "More",
        items: [
          { name: "Our Mission", link: "/our-mission" },
          { name: "Our Vision", link: "/our-vision" },
          { name: "Our Identity", link: "/our-identity" },
          { name: "Our Impact", link: "/our-impact" },
        ],
      },
    ],
  },
  {
    title: "Global Alliance",
    icon: "globe",
    type: "mega",
    columns: [
      {
        heading: "Partners",
        items: [
          { name: "Corza Medical", link: "/global-alliance#corza-medical" },
          { name: "Eagle Pharmaceuticals", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Solution",
    icon: "box",
    type: "mega",
    columns: [
      {
        heading: "Therapies",
        items: [
          { name: "Oncology", link: "/oncology" },
          { name: "Ophthalmology", link: "/ophthalmology" },
        ],
      },
      {
        heading: "Specialties",
        items: [
          { name: "Anaesthesiology", link: "/rare-diseases" },
          { name: "Biosurgery", link: "#" },
        ],
      },
    ],
  },
  {
    title: "We Care",
    icon: "heart",
    type: "mega",
    columns: [
      {
        heading: "Initiatives",
        items: [{ name: "Perin Foundation", link: "#" }],
      },
    ],
  },
  {
    title: "Resource",
    icon: "film",
    type: "mega",
    columns: [
      {
        heading: "Resources",
        items: [
          { name: "News", link: "#" },
          { name: "Conference", link: "#" },
          { name: "Webinar", link: "#" },
          { name: "Podcast", link: "#" },
        ],
      },
    ],
  },
  {
    title: "Join Perin",
    icon: "user-plus",
    link: "/career",
  },
];

// ─── Footer Config ──────────────────────────────────────────────────────────
export const footerConfig = {
  columns: {
    Solutions: [
      { name: "Oncology", link: "/oncology" },
      { name: "Ophthalmology", link: "/ophthalmology" },
      { name: "Biosurgery", link: "#" },
      { name: "Rare Diseases", link: "/rare-diseases" },
    ],
    Company: [
      { name: "We Are Perin", link: "/about" },
      { name: "Global Alliance", link: "/global-alliance" },
      { name: "Product Portfolio", link: "/oncology" },
      { name: "We Care", link: "#" },
      { name: "Media", link: "#" },
      { name: "Join Perin", link: "/career" },
    ],
  },
  legal: [
    { name: "Privacy Policy", link: "#" },
    { name: "Ethics & Compliance", link: "#" },
    { name: "Terms & Conditions", link: "#" },
  ],
};

// ─── Stats ───────────────────────────────────────────────────────────────────
export const stats = [
  { value: 2, label: "Global Partnership", theme: "light" },
  { value: 4, label: "Major Therapy Area", theme: "dark" },
  { value: 2, label: "First‑in‑India Brands", theme: "dark" },
  { value: 2, label: "Patented Devices", theme: "light" },
  { value: 10, label: "Trusted Global Brands", theme: "dark" },
];

// ─── Solutions ───────────────────────────────────────────────────────────────
export const solutions = [
  { title: "Biosurgery", href: "/oncology", image: "/images/Biosurgery.png", alt: "Biosurgery product" },
  { title: "Biomedical Textiles", href: "/oncology", image: "/images/Biosurgery.png", alt: "Biomedical textiles" },
  { title: "Ophthalmology", href: "/oncology", image: "/images/Biosurgery.png", alt: "Ophthalmology instruments" },
  { title: "Wound Closure", href: "/oncology", image: "/images/Biosurgery.png", alt: "Wound closure suture" },
];

// ─── Why Perin Tabs ───────────────────────────────────────────────────────────
export const whyPerinTabs = [
  {
    title: "We Build",
    content:
      "We partner with healthcare innovators to expand access, elevate brands, and drive growth—reviving and relaunching pharma and medtech solutions across India's evolving market.",
  },
  {
    title: "We Lead",
    content:
      "Focused on high-growth therapies and niche specialties, we deliver customized solutions that drive access, impact, and better patient outcomes.",
  },
  {
    title: "We Expand",
    content:
      "We scale reach and impact by unlocking new markets, deepening access, and amplifying brand value—accelerating growth across high-potential therapies and specialized care.",
  },
];
