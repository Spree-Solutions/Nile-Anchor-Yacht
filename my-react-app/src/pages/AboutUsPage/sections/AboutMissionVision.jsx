import React from 'react';

export const AboutMissionVision = () => {
  const missionVisionData = [
    {
      icon: "/images/about/mission.webp",
      title: 'OUR MISSION',
      description: `Happiness comes through journeys, experiences and memories.
We aim at bringing the letters of joy to our delightful
customers through our premier services and unforgettable,
luxurious trips across Cairo's Nile River.`
    },
    {
      icon: "/images/about/vision.webp",
      title: 'OUR VISION',
      description: `Expand our services throughout Egypt's Nile River
by providing a diversified collection of cruise boats
which would ease the accessibility
and affordability to all.`
    }
  ];

  return (
    <section className="py-10 px-2 md:px-4 lg:px-8 bg-[#fffbf2]">
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-center md:items-start md:space-x-20 space-y-12 md:space-y-0">
          {missionVisionData.map((item, idx) => (
           <div key={idx} className="flex flex-col md:flex-row items-center md:items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-md md:max-w-none">
              {/* Icon */}
              <div className="w-40 aspect-square rounded-full overflow-hidden bg-[#a18c6d]/5 flex items-center justify-center min-w-16">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-20 h-20 object-contain"
                />
              </div>

              {/* Text */}
              <div className="text-left">
                <h3 className="text-2xl font-['Manrope'] text-[#003950] tracking-wider mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
