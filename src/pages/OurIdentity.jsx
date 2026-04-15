import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";

export default function OurIdentity() {
  return (
    <main>
      <PageHeader
        title="Our"
        accent="Identity"
        desc="Shaping Global Health Solutions"
        breadcrumbs={[{ label: "Our Identity" }]}
      />
      <ContentWithImage
        tag="Shaping Global Health Solutions"
        title="Our"
        accent="Identity"
        paragraphs={[
          "We are more than a pharmaceutical company—we connect global innovation with accessible healthcare. Through strategic collaboration and a commitment to affordability, we ensure patients worldwide receive life-changing treatments.",
          "Through global partnerships, we bring advanced therapies and innovative medical devices to India while helping international companies grow their presence. With innovation, expertise, and compassion at our core, we are shaping the future of healthcare worldwide.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />
    </main>
  );
}
