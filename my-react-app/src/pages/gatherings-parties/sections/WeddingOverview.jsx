import React from 'react';

export const WeddingOverview = () => {
  const overviewContent = [
    {
      id: 1,
      text: "If you're planning to have your wedding in Cairo and on the Nile, then this is the place to be. Our yachts provide the essentials needed to host exclusive wedding ceremonies and parties on Cairo's Nile River. We're here to offer you one of the most desirable location settings for wedding scenarios and a luxurious yacht cruise on the Nile.",
      imagePosition: "right",
      imageSrc: "/images/services/weddings/decoration-1.jpg",
      imageAlt: "Wedding ceremony on yacht deck"
    },
    {
      id: 2,
      text: "Our services help you develop, manage and host the ultimate wedding of your lifetime. Whether you're looking to host a small wedding on the Nile River or a large one, our customizable packages are here to fulfill your needs while adding stress-free solutions to your list. We offer several wedding packages that are based on the number of attendees.",
      imagePosition: "left",
      imageSrc: "/images/services/weddings/decoration-2.jpg",
      imageAlt: "Wedding reception setup on yacht"
    },
  ];

    return (
    <section className="py-20 px-4 md:px-8 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-['Manrope'] text-[#003950] mb-4">
            Where Delightful Moments Meet Cherishable Memories
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Transform your special day into an unforgettable celebration on the majestic Nile River
          </p>
        </div>

        {/* Content Sections */}
        {overviewContent.map((content, index) => (
          <div
            key={content.id}
            className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-24 ${
              index > 0 ? 'mt-20' : ''
            }`}
          >
            {content.imagePosition === 'right' ? (
              <>
                <div className="flex-1">
                  <p className="text-xl md:text-2xl font-['Manrope'] font-medium text-gray-700 leading-relaxed">
                    {content.text}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={content.imageSrc}
                        alt={content.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#a18c6d]/20 rounded-full -z-10" />
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="flex-1 order-2 lg:order-1">
                  <div className="relative">
                    <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-2xl">
                      <img
                        src={content.imageSrc}
                        alt={content.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#a18c6d]/20 rounded-full -z-10" />
                  </div>
                </div>
                <div className="flex-1 order-1 lg:order-2">
                  <p className="text-xl md:text-2xl font-['Manrope'] font-medium text-gray-700 leading-relaxed">
                    {content.text}
                  </p>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};