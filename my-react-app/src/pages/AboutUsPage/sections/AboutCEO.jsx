import React from 'react';

export const AboutCEO = () => {
  const ceo = {
    name: 'BASSEL EL BATOUTY',
    title: 'Chief Executive Officer',
    message: `"For thousands of years the Nile River has been bestowing its generosity to Egyptians through its everlasting water and never ending greenery..."`
  };

  return (
    <section className="py-20 px-4 md:px-8 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-['Manrope'] text-[#003950] mb-8">
              CEO's Message
            </h2>
            <blockquote className="text-2xl text-gray-700 leading-relaxed italic">
              {ceo.message}
            </blockquote>
            <div className="mt-8">
              <h4 className="text-xl font-semibold">{ceo.name}</h4>
              <p className="text-gray-600">{ceo.title}</p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-lg overflow-hidden">
              <div>
                <img
                  src="/images/about/bassel.png"
                  alt="Bassel El Batouty"
                  className="w-full rounded-lg shadow-lg"
                />
              </div>
            </div>
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-[#a18c6d]/10 rounded-full -z-10" />
          </div>
        </div>
      </div>
    </section>
);
};
