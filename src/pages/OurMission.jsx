import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import StatsBanner from "../components/StatsBanner";

const stats = [
  { number: "50+", label: "Global Healthcare Partners" },
  { number: "120", label: "Life-Changing Therapies" },
  { number: "10",  label: "Million Patients Reached" },
  { number: "04",  label: "Core Therapy Areas" },
];

export default function OurMission() {
  return (
    <main>
      <PageHeader
        title="Our"
        accent="Mission"
        desc="Advancing Medical Solutions"
        breadcrumbs={[{ label: "Our Mission" }]}
      />
      <ContentWithImage
        tag="Advancing Medical Solutions"
        title="Our"
        accent="Mission"
        paragraphs={[
          "We integrate pharmaceutical excellence with social responsibility to deliver world-class healthcare, innovation, and affordability to every individual, everywhere.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />
      <StatsBanner stats={stats} />
    </main>
  );
}
