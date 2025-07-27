import React from 'react';

export const AboutStats = () => {
  const companyStats = [
    { number: '3+', label: 'Years of Excellence' },
    { number: '4', label: 'Luxury Yachts' },
    { number: '500+', label: 'Happy Customers' },
    { number: '1000+', label: 'Memorable Events' }
  ];

  return (
    <section className="bg-[#f8f9fa] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {companyStats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-5xl font-bold text-[#003950] mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
