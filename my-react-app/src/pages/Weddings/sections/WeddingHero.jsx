import React from 'react';
import styles from './WeddingHero.module.css';

export const WeddingHero = () => {
  return (
    <section className={`${styles.hero} relative h-[450px] bg-[#003950] overflow-hidden`}>
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10" />
        <img
          src="/images/services/weddings/weddings.webp"
          alt="Wedding on yacht"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4">
        <p className="text-[#a18c6d] text-sm md:text-base tracking-[2px] mb-4 font-['Manrope']">
          LUXURY WEDDINGS
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-['Manrope'] font-medium text-white mb-6 max-w-4xl">
          Create Your Dream Wedding
          <br />
          on the Nile
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-2xl mb-8">
          Exchange vows against the backdrop of Cairo's stunning skyline 
          aboard our luxury yachts
        </p>
        <button className="px-8 py-4 bg-[#a18c6d] text-white rounded-lg hover:bg-[#8a7659] transition-all duration-300 transform hover:scale-105 font-medium">
          Start Planning Your Wedding
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-white/60" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </section>
  );
};