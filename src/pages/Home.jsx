import HeroSection from "../components/HeroSection";
import ImgText from "../components/ImgText";
import StatsBar from "../components/StatsBar";
import Headline from "../components/Headline";
import OurSolution from "../components/OurSolution";
import WhyPerin from "../components/WhyPerin";
import AnimatedSection from "../components/ScrollerText";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ImgText />
      <StatsBar />
      <Headline />
      <OurSolution />
      <AnimatedSection />
      <WhyPerin />
    </main>
  );
}
