import React from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

export const AboutSection = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const stats = [
    { number: "2021", label: "Established" },
    { number: "500+", label: "Happy Clients" },
    { number: "4", label: "Luxury Yachts" },
    { number: "24/7", label: "Customer Support" }
  ];

  return (
    <section className="relative">
      {/* Background Pattern */}
      <img
        src="/images/backgrounds/about-pattern.png"
        alt=""
        className="absolute w-[300px] md:w-[400px] lg:w-[595px] h-auto top-0 md:top-10 left-0 md:left-20 opacity-10"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <p className="font-['Antic_Didone'] text-[#003950] text-base md:text-lg mb-2">
            About us
          </p>
          <h2 className="font-['Antic_Didone'] text-black text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-wider">
            NILE ANCHOR SINCE 2021.
          </h2>
          <p className="font-['Rethink_Sans'] text-[#5d6c72] text-base md:text-lg mt-4">
            Leading the way in luxury yacht experiences worldwide.
          </p>
        </header>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Images Section */}
          <div className="relative">
            {isMobile ? (
              // Mobile Layout - Stacked Images
              <div className="space-y-4">
                <img
                  src="/images/about/all-yachts-31.png"
                  alt="Luxury yacht on the Nile"
                  className="w-full h-64 object-cover rounded-lg shadow-lg "
                />
                <img
                  src="/images/about/all-yachts-8.png"
                  alt="Another view of yacht on the Nile"
                  className="w-full h-48 object-cover rounded-lg shadow-lg"
                />
              </div>
            ) : (
              // Desktop Layout - Overlapping Images
              <div className="relative h-[500px] lg:h-[600px]">
                <img
                  src="/images/backgrounds/roller.png"
                  alt="Luxury yacht on the Nile"
                  className="absolute top-20 left-0"
                />
                <img
                  src="/images/about/all-yachts-31.png"
                  alt="Luxury yacht on the Nile"
                  className="absolute top-0 right-0 w-[60%] lg:w-[70%] h-[400px] lg:h-[485px] object-cover rounded-lg shadow-2xl z-10"
                />
                <img
                  src="/images/about/all-yachts-8.png"
                  alt="Another view of yacht on the Nile"
                  className="absolute top-[20%] left-0 w-[70%] lg:w-[60%] h-[280px] lg:h-[336px] object-cover rounded-lg shadow-xl opacity-90"
                />
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#a18c6d]/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#003950]/10 rounded-full blur-3xl" />
              </div>
            )}
          </div>

          {/* Content Section */}
          <article className="space-y-6 md:space-y-8">
            {/* Title with Decorative Line */}
            <div className="relative">
              {!isMobile && (
                <div className="absolute left-0 top-0 w-px h-32 bg-[#c3d2d9]" />
              )}
              <div className={`${!isMobile ? 'pl-8' : ''}`}>
                <h3 className="font-['Sacramento'] text-[#003950] text-3xl md:text-4xl mb-2">
                  The Nile Anchor
                </h3>
                <span className="font-['Rethink_Sans'] font-bold text-[#00364c] text-sm tracking-wider">
                  PROPRIETOR.
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-4">
              <p className="font-['Marcellus'] text-[#00364c] text-xl md:text-2xl lg:text-3xl leading-relaxed">
                aims at providing high-end value by offering exclusive offers and premium packages to create memorable
              </p>
              
              <p className="font-['Rethink_Sans'] text-[#5d6c72] text-base md:text-lg leading-relaxed">
                breathtaking moments on Egypt's Nile River. Packages are currently available to; individuals, 
                corporations and organizations providing stress-free solutions to those who wish to organize and 
                hold exclusive events whether; corporate or group outing's, wedding/engagement ceremonies or even celebrations.
              </p>
            </div>

            {/* Stats Grid (Desktop Only) */}
            {isDesktop && (
              <div className="grid grid-cols-4 gap-4 pt-8 border-t border-[#e0e0e0]">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <p className="font-['Antic_Didone'] text-[#003950] text-3xl font-bold">{stat.number}</p>
                    <p className="font-['Rethink_Sans'] text-[#5d6c72] text-sm mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            )}

            {/* CTA Button */}
            <button className="inline-flex items-center gap-3 px-8 py-4 bg-[#003950] text-white rounded-lg hover:bg-[#004a5e] transition-all duration-300 transform hover:scale-105 group">
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="currentColor" 
                viewBox="0 0 20 20"
              >
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              <span className="font-['Rethink_Sans'] font-bold text-sm tracking-wider">EXPLORE MORE</span>
            </button>
          </article>
        </div>

        {/* Mobile Stats */}
        {isMobile && (
          <div className="grid grid-cols-2 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="bg-[#f8f8f8] rounded-lg p-4 text-center">
                <p className="font-['Antic_Didone'] text-[#003950] text-2xl font-bold">{stat.number}</p>
                <p className="font-['Rethink_Sans'] text-[#5d6c72] text-xs mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};