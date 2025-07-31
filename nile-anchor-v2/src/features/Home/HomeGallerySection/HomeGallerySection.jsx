import { useState } from "react";
import Container from "@/components/common/Container";
import GalleryHeader from "./GalleryHeader";
import YachtTabs from "./YachtTabs";
import ImageGrid from "./ImageGrid";
import { galleryData } from "@/data/home/galleryData";

const HomeGallerySection = () => {
  const [activeYacht, setActiveYacht] = useState(galleryData[0]?.id || "bella");

  const activeYachtData = galleryData.find((yacht) => yacht.id === activeYacht);

  return (
    <section className="py-12 md:py-20">
      <Container>
        <div className="space-y-8 md:space-y-12">
          {/* Gallery Header */}
          <GalleryHeader />

          {/* Yacht Selection Tabs */}
          <YachtTabs yachts={galleryData} activeYacht={activeYacht} onYachtChange={setActiveYacht} />

          {/* Image Grid */}
          <ImageGrid images={activeYachtData?.images || []} yachtName={activeYachtData?.name || ""} />
        </div>
      </Container>
    </section>
  );
};

export default HomeGallerySection;
