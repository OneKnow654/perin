import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";
import NumberedCards from "../components/NumberedCards";

const items = [
  { num: "01", title: "Innovative Therapies",  desc: "Delivering cutting-edge biopharmaceutical treatments in oncology, ophthalmology, biosurgery, and rare diseases." },
  { num: "02", title: "Global Network",         desc: "Collaborating with world-renowned specialists and pharmaceutical leaders across continents." },
  { num: "03", title: "Quality Assurance",      desc: "Maintaining the highest standards of quality and reliability in every product we deliver." },
  { num: "04", title: "Patient Impact",         desc: "Dedicated to improving patient outcomes and making healthcare accessible to everyone, everywhere." },
];

export default function WhoAreWe() {
  return (
    <main>
      <PageHeader
        title="Who"
        accent="Are We"
        desc="Advancing Medical Solutions"
        breadcrumbs={[{ label: "Who Are We" }]}
      />
      <ContentWithImage
        tag="Advancing Medical Solutions"
        title="Who"
        accent="Are We"
        paragraphs={[
          "At Perin Healthcare, we are a global biopharmaceutical leader dedicated to transforming lives through innovative solutions in oncology, ophthalmology, biosurgery, and rare disease treatments. With a steadfast commitment to advancing healthcare, we collaborate with world-renowned leaders in specialty segments to deliver high-quality medicines and cutting-edge medical devices trusted by healthcare professionals and patients across the globe.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />
      <NumberedCards items={items} cols={4} />
    </main>
  );
}
