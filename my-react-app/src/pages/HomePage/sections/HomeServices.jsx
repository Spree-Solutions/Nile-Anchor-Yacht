import React from 'react';
import { Link } from 'react-router-dom';
import { useResponsive } from '../../../hooks/useResponsive';

export const ServicesSection = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();

  const services = [
    {
      id: 1,
      title: "Business Events",
      description:
        "We host private events and meetings for groups, corporations, and delegations on Cairo's Nile River.",
      image: "/images/services/business-events.webp",
      path: "/business",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
      features: [
        "Conference Setup",
        "Catering Service",
        "AV Equipment",
        "Professional Staff",
      ],
    },
    {
      id: 2,
      title: "Weddings",
      description:
        "Create unforgettable memories with our exclusive wedding packages on the majestic Nile River.",
      image: "/images/services/weddings.webp",
      path: "/weddings",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      features: ["Decoration", "Photography", "Catering", "Entertainment"],
    },
    {
      id: 3,
      title: "Gatherings & Parties",
      description:
        "Host memorable celebrations with friends and family aboard our luxury yachts.",
      image: "/images/services/parties.webp",
      path: "/gatherings",
      icon: (
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
          />
        </svg>
      ),
      features: ["DJ Service", "Dance Floor", "Bar Service", "Custom Menu"],
    },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Decoration */}
      <img
        src="/images/backgrounds/our_service.webp"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-60 "
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="font-['Marcellus'] text-[#00162c] text-base md:text-lg mb-2">
            our services
          </p>
          <h2 className="font-['Marcellus'] text-[#00162c] text-2xl md:text-3xl lg:text-4xl">
            Discover yachting feel freedom
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service) => (
            <article
              key={service.id}
              className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Container */}
              <div className="relative h-48 md:h-56 lg:h-64 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Icon Overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 text-[#00162c] opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="font-['Outfit'] text-[#00162c] text-xl md:text-2xl mb-3">
                  {service.title}
                </h3>

                <p className="font-['Outfit'] font-light text-[#333333] text-sm md:text-base leading-relaxed mb-4">
                  {service.description}
                </p>

                {/* Features (Desktop Only) */}
                {isDesktop && (
                  <div className="flex flex-wrap gap-2 mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {service.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-[#f5f5f5] text-[#5d6c72] px-2 py-1 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                )}

                {/* Read More Link */}
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 font-['Outfit'] text-[#a18c6d] hover:text-[#8a7659] transition-colors duration-300"
                >
                  <span className="underline">Read More</span>
                  <svg
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <p className="text-[#5d6c72] text-base md:text-lg mb-6">
            Looking for a custom package for your special event?
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#003950] text-white rounded-lg hover:bg-[#004a5e] transition-all duration-300 transform hover:scale-105"
          >
            <span className="font-medium">Contact Us</span>
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};