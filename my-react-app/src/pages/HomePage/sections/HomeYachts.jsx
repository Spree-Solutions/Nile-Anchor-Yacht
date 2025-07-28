import React, { useState, useRef, useEffect } from 'react';
import { useResponsive } from '../../../hooks/useResponsive';

export const YachtsSection = () => {
  const { isMobile, isTablet, isDesktop } = useResponsive();
  const [activeIndex, setActiveIndex] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const yachts = [
    {
      id: 1,
      name: "BELLA",
      image: "/images/yachts/bella/bella-10.png",
      bgImage: "/images/yachts/bella-hero.jpg",
      description: "Embrace the serenity of sailing with a timeless, wind-powered journey",
      capacity: "20 guests",
      features: ["Sundeck", "Lounge", "Bar", "Kitchen"],
      price: "From $1,200/day"
    },
    {
      id: 2,
      name: "ZEIN",
      image: "/images/yachts/zein/zein-main.jpg",
      bgImage: "/images/yachts/zein-hero.jpg",
      description: "Speed and luxury combined for fast, stylish escapes on the open sea",
      capacity: "15 guests",
      features: ["Speed Boat", "Premium Sound", "Mini Bar"],
      price: "From $1,500/day"
    },
    {
      id: 3,
      name: "VIDA",
      image: "/images/yachts/vida/vida-main.jpg",
      bgImage: "/images/yachts/vida-hero.jpg",
      description: "Spacious and stable, perfect for family trips or group adventures at sea",
      capacity: "30 guests",
      features: ["Large Deck", "Dining Area", "Full Kitchen", "Entertainment"],
      price: "From $2,000/day"
    },
    {
      id: 4,
      name: "LIBERTY",
      image: "/images/yachts/liberty/liberty-111.png",
      bgImage: "/images/yachts/liberty-hero.jpg",
      description: "Ultimate luxury experience with premium amenities and exclusive services",
      capacity: "25 guests",
      features: ["VIP Lounge", "Jacuzzi", "Premium Bar", "Chef Service"],
      price: "From $2,500/day"
    }
  ];

  // Calculate card width based on screen size
  const getCardWidth = () => {
    if (isMobile) return 300;
    if (isTablet) return 350;
    return 400;
  };

  // Check scroll position
  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll to specific index
  const scrollToIndex = (index) => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth() + 24; // card width + gap
      scrollRef.current.scrollTo({
        left: cardWidth * index,
        behavior: 'smooth'
      });
      setActiveIndex(index);
    }
  };

  // Scroll by direction
  const scroll = (direction) => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth() + 24;
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollRef.current.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Mouse drag functionality
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Touch events for mobile
  const handleTouchStart = (e) => {
    setStartX(e.touches[0].pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    const x = e.touches[0].pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  // Update active index on scroll
  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = getCardWidth() + 24;
      const scrollPosition = scrollRef.current.scrollLeft;
      const newIndex = Math.round(scrollPosition / cardWidth);
      setActiveIndex(newIndex);
      checkScrollButtons();
    }
  };

  useEffect(() => {
    checkScrollButtons();
    window.addEventListener('resize', checkScrollButtons);
    return () => window.removeEventListener('resize', checkScrollButtons);
  }, []);

  return (
    <section className="relative w-full py-12 md:py-20 bg-[#041125] overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-[#a18c6d] text-sm md:text-base font-medium tracking-[1.5px] mb-4">
            EXPLORE OUR FLEET
          </p>
          <h2 className="font-['Antic_Didone'] text-white text-3xl md:text-4xl lg:text-5xl">
            Luxury Yachts Collection
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className={`absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 ${
              !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={!canScrollLeft}
            aria-label="Previous yacht"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className={`absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white rounded-full p-3 transition-all duration-300 ${
              !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'opacity-100'
            }`}
            disabled={!canScrollRight}
            aria-label="Next yacht"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Yacht Cards Container */}
          <div
            ref={scrollRef}
            className={`flex gap-6 overflow-x-auto scrollbar-hide pb-4 ${
              isDragging ? 'cursor-grabbing' : 'cursor-grab'
            }`}
            style={{
              scrollBehavior: isDragging ? 'auto' : 'smooth',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch'
            }}
            onScroll={handleScroll}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
          >
            {yachts.map((yacht, index) => (
              <article
                key={yacht.id}
                className={`flex-shrink-0 bg-white/10 backdrop-blur-sm rounded-lg border border-[#0e3b81]/30 overflow-hidden hover:transform hover:scale-105 transition-all duration-300`}
                style={{
                  width: `${getCardWidth()}px`,
                  scrollSnapAlign: 'start'
                }}
              >
                <div className="relative h-48 md:h-56">
                  <img
                    src={yacht.bgImage || yacht.image}
                    alt={`${yacht.name} yacht background`}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#041125] to-transparent" />
                </div>

                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-['Antic_Didone'] text-white text-2xl mb-2">
                        {yacht.name}
                      </h3>
                      <p className="text-[#a18c6d] text-sm font-medium">{yacht.price}</p>
                    </div>
                    <span className="bg-white/10 text-white px-3 py-1 rounded-full text-sm">
                      {yacht.capacity}
                    </span>
                  </div>

                  <p className="text-white/80 text-sm leading-relaxed mb-4">
                    {yacht.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {yacht.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded">
                        {feature}
                      </span>
                    ))}
                    {yacht.features.length > 3 && (
                      <span className="text-white/60 text-xs bg-white/5 px-2 py-1 rounded">
                        +{yacht.features.length - 3} more
                      </span>
                    )}
                  </div>

                  <button className="w-full bg-[#a18c6d] text-white py-3 rounded-lg hover:bg-[#8a7659] transition-colors">
                    View Details
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {yachts.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToIndex(index)}
                className={`transition-all duration-300 ${
                  activeIndex === index
                    ? 'w-8 h-2 bg-[#a18c6d]'
                    : 'w-2 h-2 bg-white/30 hover:bg-white/50'
                } rounded-full`}
                aria-label={`Go to yacht ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center gap-3 px-8 py-3 bg-transparent border border-white/30 text-white rounded-lg hover:bg-white hover:text-[#041125] transition-all duration-300">
            <span>View All Yachts</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};