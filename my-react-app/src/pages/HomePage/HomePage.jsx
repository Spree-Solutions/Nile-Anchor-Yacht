import React, { useState, useEffect } from 'react';
import { HeroSection } from './sections/HomeHero';
import { YachtsSection } from './sections/HomeYachts';
import { ServicesSection } from './sections/HomeServices';
import { AboutSection } from './sections/HomeAbout';
import { GallerySection } from './sections/HomeGallery';
import { CTASection } from './sections/HomeCTA';
import { useResponsive } from '../../hooks/useResponsive';
import './HomePage.module.css';

export const HomePage = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#002e41]">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-[#a18c6d] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white flex flex-col min-h-screen">
      {/* Hero Section with responsive height */}
      <section className="relative h-screen md:h-[800px] w-full">
        <HeroSection />
      </section>

      {/* Main Content Container */}
      <main className="flex flex-col w-full">
        {/* Yachts Section */}
        <section
          id="yachts-collection"
          className="relative w-full"
          aria-label="Our yacht collection"
        >
          <YachtsSection />
        </section>

        {/* About Section */}
        <section
          id="about-us"
          className="relative w-full py-12 md:py-24 lg:py-32"
          aria-label="About Nile Anchor"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <AboutSection />
          </div>
        </section>

        {/* Services Section */}
        <section
          id="our-services"
          className="relative w-full bg-[#fffbf3] py-12 md:py-24 lg:py-32"
          aria-label="Our services"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <ServicesSection />
          </div>
        </section>

        {/* Gallery Section */}
        <section
          id="gallery"
          className="relative w-full py-12 md:py-24 lg:py-32"
          aria-label="Photo gallery"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <GallerySection />
          </div>
        </section>

        {/* CTA/Booking Section */}
        <section
          id="booking"
          className="relative w-full bg-neutral-50 py-12 md:py-24 lg:py-32"
          aria-label="Book your yacht experience"
        >
          <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
            <CTASection />
          </div>
        </section>
      </main>

      {/* Floating Action Buttons for Mobile */}
      {isMobile && (
        <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 bg-[#003950] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#004a5e] transition-colors"
            aria-label="Scroll to top"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>

          <a
            href="#booking"
            className="w-12 h-12 bg-[#a18c6d] text-white rounded-full shadow-lg flex items-center justify-center hover:bg-[#8a7659] transition-colors"
            aria-label="Quick booking"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </a>
        </div>
      )}

      {/* Quick Contact Bar for Desktop */}
      {isDesktop && (
        <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40">
          <div className="bg-[#003950] text-white py-4 px-2 rounded-l-lg shadow-lg">
            <div className="flex flex-col items-center gap-4">
              <a
                href="tel:+201211140222"
                className="hover:text-[#a18c6d] transition-colors"
                aria-label="Call us"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a
                href="mailto:reservation@thenileanchor.com"
                className="hover:text-[#a18c6d] transition-colors"
                aria-label="Email us"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <a
                href="#booking"
                className="hover:text-[#a18c6d] transition-colors"
                aria-label="Book now"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Loading Overlay for Section Transitions */}
      <div
        className={`fixed inset-0 bg-[#002e41] z-50 transition-opacity duration-500 pointer-events-none ${
          isLoading ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

// Export for lazy loading if needed
export default HomePage;
