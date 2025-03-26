"use client";

import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  //const [showMore, onShowMore] = useState(false);

  return (
    <>
      <Hero></Hero>
      <Projects
        describe1={[
          "first we dip it first we dip it first we dip it first we dip it first we dip it first we dip it first we dip it ",
          "then we lick it",
        ]}
        describe2={["then we kiss it", "then we miss it"]}
        imgUrls={[
          "/images/pexels-joshsorenson-1714208 (2).jpg",
          "/images/pexels-kevin-ku-92347-577585.jpg",
          "/images/pexels-luis-gomes-166706-546819 (1).jpg",
          "/images/sssss2025-03-12 122348.jpg",
        ]}
        flexFlip="flex-row"
        title="Task Manager App"
        imgSrc="/images/sssss2025-03-12 122348.jpg"
        imgAlt="ai audio Mastering project image"
      ></Projects>
      <Projects
        flexFlip="flex-row-reverse"
        title="AI Audio Mastering App"
        imgAlt="ai audio Mastering project image"
        imgSrc="/images/sssss2025-03-12 122348.jpg"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci, at! Assumenda vitae placeat aliquam alias atque laboriosam saepe fugit pariatur tempora, quod corrupti qui doloremque maiores. Blanditiis explicabo sint suscipit"
      ></Projects>
    </>
  );
}
