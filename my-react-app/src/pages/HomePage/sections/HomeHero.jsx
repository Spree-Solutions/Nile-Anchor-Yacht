import React, { useState, useEffect } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

export const HeroSection = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  return (
    <div className="relative w-full h-screen md:h-[800px] overflow-hidden">
      {/* Background Video/Image */}
      <div className="absolute inset-0">
        {isDesktop ? (
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            onLoadedData={() => setIsVideoLoaded(true)}
          >
            <source src="/videos/hero-yacht.mp4" type="video/mp4" />
          </video>
        ) : (
          <div 
            className="w-full h-full bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/hero-yacht-mobile.jpg)' }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#041125]/70 via-[#041125]/60 to-[#041125]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto text-center md:text-left">
          <div className="max-w-4xl">
            {/* Tagline */}
            <p className="text-[#a18c6d] text-sm md:text-base lg:text-lg font-medium tracking-[1.5px] mb-4 md:mb-6 animate-fadeInUp">
              LUXURY YACHT RENTALS
            </p>

            {/* Main Heading */}
            <h1 className="font-['Antic_Didone'] text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-6 md:mb-8 animate-fadeInUp animation-delay-200">
              Discover the Ultimate
              <br />
              Luxury on the Nile
            </h1>

            {/* Description */}
            <p className="font-['Work_Sans'] text-[#d1d1d1] text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto md:mx-0 mb-8 md:mb-12 animate-fadeInUp animation-delay-400">
              Nile Anchor offers a selection of premium yachts and tailored sailing
              services for every occasion, whether you're seeking adventure,
              relaxation, or an unforgettable event at sea
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fadeInUp animation-delay-600">
              <button className="px-8 py-4 bg-[#e6e1d6] text-[#00162c] font-medium rounded-lg hover:bg-[#d4cfc2] transition-all duration-300 transform hover:scale-105">
                BOOK NOW
              </button>
              
              <button className="px-8 py-4 border border-[#e6e1d6] text-[#e6e1d6] font-medium rounded-lg hover:bg-[#e6e1d6] hover:text-[#00162c] transition-all duration-300 transform hover:scale-105">
                EXPLORE MORE
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>

      {/* Hero Navigation Preview (Desktop Only) */}
      {isDesktop && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#002e41]/90 to-transparent">
          <div className="max-w-7xl mx-auto px-8 py-6">
            <div className="flex items-center justify-between">
              <h2 className="text-white text-lg font-medium tracking-[1.5px]">OUR YACHTS</h2>
              <div className="flex-1 h-px bg-white/30 mx-8"></div>
              <button className="text-white hover:text-[#a18c6d] transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};