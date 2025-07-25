import React from 'react';

export const AboutOverview = () => (
  <section className="py-20 px-4 md:px-8 lg:px-24">
    <div className="max-w-7xl mx-auto">
      {/* Title & Intro */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center w-24 h-24 mb-8">
          <div className="text-6xl">⚓</div>
        </div>
        <h2 className="text-4xl md:text-5xl font-['Manrope'] tracking-wider mb-6">
          NILE ANCHOR SINCE 2021
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          A dedicated drive towards becoming Egypt's top luxurious, hospitable onboard service cruise boats
        </p>
      </div>

      {/* Image + Text */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Actual Image */}
        <div>
          <img
            src="/images/about/all-yachts-8.png"
            alt="Luxury yacht on the Nile"
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Overview text */}
        <div className="space-y-6">
          <div className="border-l-4 border-[#a18c6d] pl-8">
            <h3 className="text-3xl font-['Manrope'] text-[#003950] mb-4">
              Aims at providing high-end value by offering exclusive offers and premium packages to create memorable moments
            </h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Breathtaking moments on Egypt's Nile River. Premium packages are customizable and are currently available to individuals, corporations and organizations providing stress-free solutions to those who wish to organize and hold exclusive events whether corporate or group outings, wedding/engagement ceremonies or even celebrations.
          </p>
          <p className="text-gray-600 leading-relaxed">
            The Nile Anchor provides a service which takes you on a prehistoric journey vs. today's modern age; a journey that takes you for a walk on Egypt's ancient river (The Nile River) accompanied by an expressive view of today's modern world; Cairo and Giza's districts.
          </p>
        </div>
      </div>
    </div>
  </section>
);
