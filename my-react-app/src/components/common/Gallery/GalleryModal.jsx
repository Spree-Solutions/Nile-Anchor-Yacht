import React, { useState, useEffect, useCallback } from 'react';
import styles from './Gallery.module.css';

export const GalleryModal = ({ images, currentImage, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(
    images.findIndex(img => img.id === currentImage.id)
  );
  const [isZoomed, setIsZoomed] = useState(false);

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'ArrowLeft') handlePrevious();
  }, [onClose]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [handleKeyDown]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setIsZoomed(false);
  };

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setIsZoomed(false);
  };

  const currentImg = images[currentIndex];

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close gallery"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Navigation Buttons */}
        {images.length > 1 && (
          <>
            <button 
              className={`${styles.navButton} ${styles.prevButton}`}
              onClick={handlePrevious}
              aria-label="Previous image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button 
              className={`${styles.navButton} ${styles.nextButton}`}
              onClick={handleNext}
              aria-label="Next image"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Container */}
        <div className={styles.imageWrapper}>
          <img
            src={currentImg.src}
            alt={currentImg.alt || ''}
            className={`${styles.modalImage} ${isZoomed ? styles.zoomed : ''}`}
            onClick={() => setIsZoomed(!isZoomed)}
          />
        </div>

        {/* Image Info */}
        <div className={styles.imageInfo}>
          {currentImg.caption && (
            <p className={styles.imageCaption}>{currentImg.caption}</p>
          )}
          <div className={styles.imageCounter}>
            {currentIndex + 1} / {images.length}
          </div>
        </div>

        {/* Thumbnails */}
        {images.length > 1 && (
          <div className={styles.thumbnailContainer}>
            {images.map((img, index) => (
              <button
                key={img.id || index}
                className={`${styles.thumbnail} ${index === currentIndex ? styles.activeThumbnail : ''}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsZoomed(false);
                }}
              >
                <img
                  src={img.thumbnail || img.src}
                  alt={img.alt || ''}
                />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};