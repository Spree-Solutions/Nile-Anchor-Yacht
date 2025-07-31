import { useState } from "react";
import ImageModal from "./ImageModal";
import ImageCard from "./ImageCard";

const ImageGrid = ({ images = [], yachtName = "Yacht Gallery" }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleImageClick = (image, index) => {
    setSelectedImage({ ...image, index });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleNavigate = (direction) => {
    if (!selectedImage) return;

    const currentIndex = selectedImage.index;
    const newIndex =
      direction === "next" 
        ? (currentIndex + 1) % images.length 
        : (currentIndex - 1 + images.length) % images.length;

    setSelectedImage({ ...images[newIndex], index: newIndex });
  };

  // Handle empty or insufficient images
  if (!images || images.length === 0) {
    return (
      <div className="flex items-center justify-center h-64 bg-gray-100 rounded-lg">
        <p className="text-gray-500">No images available</p>
      </div>
    );
  }

  // Single image
  if (images.length === 1) {
    return (
      <>
        <div className="w-full">
          <ImageCard
            image={images[0]}
            index={0}
            onClick={handleImageClick}
            className="h-64 md:h-96 w-full"
            featured
          />
        </div>
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
          onNavigate={handleNavigate}
          totalImages={images.length}
          yachtName={yachtName}
        />
      </>
    );
  }

  // Two images
  if (images.length === 2) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {images.map((image, index) => (
            <ImageCard
              key={index}
              image={image}
              index={index}
              onClick={handleImageClick}
              className="h-64 md:h-80"
              featured={index === 0}
            />
          ))}
        </div>
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
          onNavigate={handleNavigate}
          totalImages={images.length}
          yachtName={yachtName}
        />
      </>
    );
  }

  // Three images
  if (images.length === 3) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* First image - featured */}
          <div className="md:row-span-2">
            <ImageCard
              image={images[0]}
              index={0}
              onClick={handleImageClick}
              className="h-64 md:h-full md:min-h-[400px]"
              featured
            />
          </div>
          
          {/* Second and third images */}
          <div className="grid grid-cols-1 gap-4 md:gap-6 row-span-2">
            <ImageCard
              image={images[1]}
              index={1}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
            <ImageCard
              image={images[2]}
              index={2}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
          </div>
        </div>
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
          onNavigate={handleNavigate}
          totalImages={images.length}
          yachtName={yachtName}
        />
      </>
    );
  }

  // Four images
  if (images.length === 4) {
    return (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {/* First two images */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <ImageCard
              image={images[0]}
              index={0}
              onClick={handleImageClick}
              className="h-48 md:h-48"
              featured
            />
            <ImageCard
              image={images[1]}
              index={1}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
          </div>
          
          {/* Last two images */}
          <div className="grid grid-cols-1 gap-4 md:gap-6">
            <ImageCard
              image={images[2]}
              index={2}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
            <ImageCard
              image={images[3]}
              index={3}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
          </div>
        </div>
        <ImageModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          image={selectedImage}
          onNavigate={handleNavigate}
          totalImages={images.length}
          yachtName={yachtName}
        />
      </>
    );
  }

  // Five or more images - the layout you specifically requested
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {/* First column - 2 images in rows */}
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          <ImageCard
            image={images[0]}
            index={0}
            onClick={handleImageClick}
            className="h-48 md:h-48"
            featured
          />
          {images[1] && (
            <ImageCard
              image={images[1]}
              index={1}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
          )}
        </div>

        {/* Second column - full height single image */}
        {images[2] && (
          <div className="md:row-span-1">
            <ImageCard
              image={images[2]}
              index={2}
              onClick={handleImageClick}
              className="h-64 md:h-full md:min-h-[400px]"
            />
          </div>
        )}

        {/* Third column - 2 images in rows */}
        <div className="grid grid-cols-1 gap-4 md:gap-6">
          {images[3] && (
            <ImageCard
              image={images[3]}
              index={3}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
          )}
          {images[4] && (
            <ImageCard
              image={images[4]}
              index={4}
              onClick={handleImageClick}
              className="h-48 md:h-48"
            />
          )}
        </div>
      </div>

      {/* Show remaining images if more than 5 */}
      {images.length > 5 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-6">
          {images.slice(5).map((image, idx) => (
            <ImageCard
              key={idx + 5}
              image={image}
              index={idx + 5}
              onClick={handleImageClick}
              className="h-32 md:h-40"
            />
          ))}
        </div>
      )}

      <ImageModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        image={selectedImage}
        onNavigate={handleNavigate}
        totalImages={images.length}
        yachtName={yachtName}
      />
    </>
  );
};

export default ImageGrid;