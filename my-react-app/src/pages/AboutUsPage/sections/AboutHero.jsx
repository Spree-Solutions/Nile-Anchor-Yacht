import React from 'react';

export const AboutHero = () => (
  <section
    className="relative h-[250px] bg-cover bg-center overflow-hidden"
    style={{ backgroundImage: "url('/images/about/hero.webp')" }} // <-- Replace with your actual image path
  >
    {/* Overlay gradient for visual depth */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />

    {/* Hero content centered */}
    <div className="relative z-10 h-full flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-['Manrope'] font-medium text-white mb-6">
          About Us
        </h1>
        <p className="text-xl text-white/90 max-w-2xl mx-auto">
          Discover the story behind Egypt's premier luxury yacht experience on the Nile
        </p>
      </div>
    </div>

    {/* Bottom fade-out to smooth transition */}
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent" />
  </section>
);
