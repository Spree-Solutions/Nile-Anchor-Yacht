import React from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

export const FooterCTA = () => {
  const { isMobile } = useResponsive();

  return (
    <div className="relative">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-8">
        <div className="bg-[#05384d] rounded-2xl overflow-hidden relative">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute w-64 h-64 bg-[#0d455c] rounded-full -top-32 left-1/2 transform -translate-x-1/2" />
            <img
              src="/images/backgrounds/yacht-silhouette.webp"
              alt=""
              className="absolute top-0 w-auto h-auto opacity-80"
            />
          </div>

          {/* Content */}
          <div className="relative z-10 px-6 md:px-12 py-8 md:py-12">
            <div className={`flex ${isMobile ? 'flex-col' : 'flex-row'} items-center justify-between gap-6`}>
              <div className="text-center md:text-left">
                <h2 className="font-['Marcellus'] text-white text-2xl md:text-3xl lg:text-4xl mb-2">
                  Book Your<br />
                  Yacht Experience.
                </h2>
                <p className="text-white/80 text-sm md:text-base">
                  Ready to create unforgettable memories on the Nile?
                </p>
              </div>

              <button className="px-8 py-4 bg-white text-[#00162c] font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 flex items-center gap-3">
                <span className="text-xs">▸</span>
                <span>YACHT BOOKING</span>
              </button>
            </div>
          </div>

          {/* Yacht Image */}
          {!isMobile && (
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <div className="w-48 h-32 bg-[url('/images/yachts/yacht-3.webp')] bg-cover bg-center" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};