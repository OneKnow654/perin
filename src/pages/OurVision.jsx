import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import NumberedCards from "../components/NumberedCards";

const steps = [
  { num: "01", title: "Needs Assessment",    desc: "Identifying critical healthcare gaps in underserved communities worldwide." },
  { num: "02", title: "Strategic Alliances",  desc: "Forming partnerships with leading pharmaceutical innovators." },
  { num: "03", title: "Product Development", desc: "Creating accessible, high-quality treatments for diverse markets." },
  { num: "04", title: "Delivery & Impact",   desc: "Ensuring life-saving medications reach the patients who need them most." },
];

export default function OurVision() {
  return (
    <main>
      <PageHeader
        title="Our"
        accent="Vision"
        desc="Advancing Medical Solutions"
        breadcrumbs={[{ label: "Our Vision" }]}
      />
      <ContentWithImage
        tag="Advancing Medical Solutions"
        title="Our"
        accent="Vision"
        paragraphs={[
          "Creating a future where no one is denied lifesaving medications due to location or economic barriers—ensuring every individual has the opportunity for a healthier life.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />
      <NumberedCards items={steps} cols={4} bgClass="bg-[#F2F1ED]" />
    </main>
  );
}
