import PageHeader from "../components/PageHeader";
import ContentWithImage from "../components/ContentWithImage";

export default function WhatWeDo() {
  return (
    <main>
      <PageHeader
        title="What"
        accent="We Do"
        desc="Advancing Medical Solutions"
        breadcrumbs={[{ label: "What We Do" }]}
      />
      <ContentWithImage
        tag="Advancing Medical Solutions"
        title="What"
        accent="We Do"
        paragraphs={[
          "Perin Healthcare is a global biopharmaceutical company specializing in oncology, ophthalmology, biosurgery, and rare disease solutions. As a pioneering company, we collaborate with world leaders in specialty segments to deliver high-quality medicines & medical devices trusted by healthcare professionals and patients worldwide.",
        ]}
        btnText="Get Started"
        btnLink="/contact"
      />
      <ContentWithImage
        tag="Innovating Global Healthcare"
        title="We Build, We Grow,"
        accent="We Lead"
        paragraphs={[
          "With a global presence and specialized expertise, Perin Healthcare drives innovation in oncology and rare diseases. Our forward-thinking pipeline of 20 brands keeps us at the forefront of medical advancements, while three strategic partnerships extend our reach.",
          "Globally trusted, our portfolio delivers quality, reliability, and innovative healthcare solutions.",
        ]}
        reverse
        bgClass="bg-[#F2F1ED]/50"
      />
    </main>
  );
}
