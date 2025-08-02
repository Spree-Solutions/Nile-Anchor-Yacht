import React from 'react';

export const WeddingPackages = () => {
  const packageFeatures = [
    { icon: "⏰", text: "2 Hours Yacht Cruise" },
    { icon: "🎵", text: "Sound System, DJ and Microphone" },
    { icon: "🍾", text: "Waitering Services" },
    { icon: "💡", text: "Lighting System" },
    { icon: "🚤", text: "Zafaa Speed Boat (Per Request)" },
    { icon: "🎪", text: "Kosha (Per Request)" },
    { icon: "🍽️", text: "Catering (Per Request)" },
    { icon: "📸", text: "Photography (Per Request)" },
    { icon: "🎨", text: "Decoration (Per Request)" },
  ];

  const galleryImages = [
    {
      src: "/images/services/weddings/wedding-3.webp",
      alt: "Wedding decoration on yacht",
      aspect: "square"
    },
    {
      src: "/images/services/weddings/wedding-2.webp",
      alt: "Wedding dining setup",
      aspect: "landscape"
    },
    {
      src: "/images/services/weddings/wedding-4.webp",
      alt: "Wedding ceremony area",
      aspect: "landscape"
    },
    {
      src: "/images/services/weddings/wedding-1.webp",
      alt: "Wedding celebration",
      aspect: "square"
    }
  ];

  return (
    <section className="py-20 px-4 md:px-8 lg:px-24 bg-[#fffbf3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Gallery Grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={galleryImages[0].src}
                    alt={galleryImages[0].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={galleryImages[1].src}
                    alt={galleryImages[1].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={galleryImages[2].src}
                    alt={galleryImages[2].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="aspect-square rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={galleryImages[3].src}
                    alt={galleryImages[3].alt}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Package Features */}
          <div>
            <h2 className="text-3xl md:text-4xl font-['Manrope'] text-[#003950] mb-10">
              Every Wedding Package Includes
            </h2>
            
            <ul className="space-y-4">
              {packageFeatures.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#a18c6d]/10 flex items-center justify-center text-2xl group-hover:bg-[#a18c6d]/20 transition-colors">
                    {feature.icon}
                  </div>
                  <span className="text-lg md:text-xl font-['Manrope'] font-medium text-gray-700">
                    {feature.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <p className="text-gray-600 mb-6">
                All packages can be customized to meet your specific needs and preferences
              </p>
              <button className="px-8 py-4 bg-[#003950] text-white rounded-lg hover:bg-[#004a5e] transition-colors duration-200 font-medium">
                View All Packages
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};