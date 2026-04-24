import HeroSection from "../components/HeroSection";
import ImgText from "../components/ImgText";
import StatsBar from "../components/StatsBar";

import OurSolution from "../components/OurSolution";
import WhyPerin from "../components/WhyPerin";
import AnimatedSection from "../components/ScrollerText";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImgText />
      <StatsBar />

      <OurSolution />
      <AnimatedSection />
      <WhyPerin />
    </main>
  );
}
