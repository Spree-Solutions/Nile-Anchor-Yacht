import React, { useState } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

export const GallerySection = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'yachts', name: 'Yachts' },
    { id: 'events', name: 'Events' },
    { id: 'interiors', name: 'Interiors' },
    { id: 'views', name: 'Views' }
  ];

  const galleryImages = [
    { id: 1, src: '/images/gallery/bella-1.png', category: 'yachts', alt: 'Bella yacht exterior' },
    { id: 2, src: '/images/gallery/bella-2.png', category: 'interiors', alt: 'Bella yacht interior' },
    { id: 3, src: '/images/gallery/bella-3.png', category: 'events', alt: 'Event on yacht' },
    { id: 4, src: '/images/gallery/bella-4.png', category: 'views', alt: 'Nile river view' },
    { id: 5, src: '/images/gallery/bella-5.png', category: 'yachts', alt: 'Yacht at sunset' },
    { id: 6, src: '/images/gallery/liberty-event.jpg', category: 'events', alt: 'Wedding ceremony' },
    { id: 7, src: '/images/gallery/nile-view.jpg', category: 'views', alt: 'Sunset on Nile' },
    { id: 8, src: '/images/gallery/interior-luxury.jpg', category: 'interiors', alt: 'Luxury interior' }
  ];

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <section className="relative">
      {/* Section Header */}
      <header className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12">
        <h2 className="font-['Marcellus'] text-[#00162c] text-3xl md:text-4xl lg:text-5xl mb-4 md:mb-0">
          Gallery
        </h2>
        
        <button className="inline-flex items-center gap-3 px-6 py-3 bg-[#183f5e] text-white rounded-lg hover:bg-[#1a4468] transition-all duration-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
          <span className="font-['Marcellus'] text-lg">View All</span>
        </button>
      </header>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 md:mb-12">
        {categories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 md:px-6 py-2 rounded-full transition-all duration-300 ${
              selectedCategory === category.id
                ? 'bg-[#003950] text-white'
                : 'bg-transparent border border-[#003950]/30 text-[#003950] hover:bg-[#003950]/10'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className={`grid gap-4 ${
        isMobile 
          ? 'grid-cols-1' 
          : isTablet 
            ? 'grid-cols-2' 
            : 'grid-cols-3 lg:grid-cols-4'
      }`}>
        {filteredImages.map((image, index) => (
          <div
            key={image.id}
            className={`relative group cursor-pointer overflow-hidden rounded-lg ${
              !isMobile && index % 3 === 0 ? 'md:col-span-2 md:row-span-2' : ''
            }`}
            onClick={() => setLightboxImage(image)}
          >
            <div className={`relative ${
              !isMobile && index % 3 === 0 ? 'h-96' : 'h-64'
            } overflow-hidden`}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <p className="text-sm font-medium capitalize">{image.category}</p>
                  <p className="text-xs opacity-80">{image.alt}</p>
                </div>
              </div>

              {/* Zoom Icon */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <svg className="w-5 h-5 text-[#003950]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh]">
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              className="w-full h-full object-contain"
            />
            <button
              className="absolute top-4 right-4 bg-white/10 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              onClick={() => setLightboxImage(null)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}

      {/* View More Button (Mobile) */}
      {isMobile && (
        <div className="text-center mt-8">
          <button className="text-[#003950] font-medium underline">
            Load More Images
          </button>
        </div>
      )}
    </section>
  );
};