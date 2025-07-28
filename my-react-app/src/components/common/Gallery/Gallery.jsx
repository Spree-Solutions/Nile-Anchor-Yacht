import React, { useState, useCallback } from 'react';
import { GalleryModal } from './GalleryModal';
import styles from './Gallery.module.css';

export const Gallery = ({
  images = [],
  columns = 3, // 1, 2, 3, 4, masonry
  gap = 16,
  showCaptions = true,
  enableLightbox = true,
  enableFilters = false,
  filters = [],
  className = ''
}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [imageLoadErrors, setImageLoadErrors] = useState({});

  const handleImageError = useCallback((imageId) => {
    setImageLoadErrors(prev => ({ ...prev, [imageId]: true }));
  }, []);

  const filteredImages = selectedFilter === 'all' 
    ? images 
    : images.filter(img => img.category === selectedFilter);

  const getGridClass = () => {
    if (columns === 'masonry') return styles.masonryGrid;
    
    const columnClasses = {
      1: 'grid-cols-1',
      2: 'grid-cols-1 sm:grid-cols-2',
      3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
      4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'
    };
    
    return `grid ${columnClasses[columns] || columnClasses[3]}`;
  };

  return (
    <>
      <div className={`${styles.galleryWrapper} ${className}`}>
        {/* Filters */}
        {enableFilters && filters.length > 0 && (
          <div className={styles.filterContainer}>
            <button
              onClick={() => setSelectedFilter('all')}
              className={`${styles.filterButton} ${selectedFilter === 'all' ? styles.active : ''}`}
            >
              All
            </button>
            {filters.map(filter => (
              <button
                key={filter.value}
                onClick={() => setSelectedFilter(filter.value)}
                className={`${styles.filterButton} ${selectedFilter === filter.value ? styles.active : ''}`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        )}

        {/* Gallery Grid */}
        <div 
          className={getGridClass()} 
          style={{ gap: `${gap}px` }}
        >
          {filteredImages.map((image, index) => (
            <div
              key={image.id || index}
              className={`${styles.imageContainer} ${columns === 'masonry' ? styles.masonryItem : ''}`}
              onClick={() => enableLightbox && setSelectedImage(image)}
            >
              {!imageLoadErrors[image.id] ? (
                <>
                  <img
                    src={image.thumbnail || image.src}
                    alt={image.alt || ''}
                    className={styles.image}
                    loading="lazy"
                    onError={() => handleImageError(image.id)}
                  />
                  {showCaptions && image.caption && (
                    <div className={styles.caption}>
                      <p className={styles.captionText}>{image.caption}</p>
                    </div>
                  )}
                  <div className={styles.overlay}>
                    <div className={styles.overlayContent}>
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.errorPlaceholder}>
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <p className="text-sm text-gray-500 mt-2">Image not available</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {enableLightbox && selectedImage && (
        <GalleryModal
          images={filteredImages}
          currentImage={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};