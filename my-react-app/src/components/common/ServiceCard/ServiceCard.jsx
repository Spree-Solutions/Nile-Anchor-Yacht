import React from 'react';
import { Button } from '../Button/Button';
import styles from './ServiceCard.module.css';

export const ServiceCard = ({
  service,
  variant = 'default', // default, horizontal, featured
  onLearnMore,
  className = ''
}) => {
  const {
    id,
    title,
    description,
    image,
    icon,
    features = [],
    link
  } = service;

  if (variant === 'horizontal') {
    return (
      <article className={`${styles.horizontalCard} ${className}`}>
        <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden shadow-lg">
          <div className="md:w-1/3 h-48 md:h-auto">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1 p-6 md:p-8">
            <div className="flex items-start gap-4 mb-4">
              {icon && (
                <div className="flex-shrink-0 w-12 h-12 bg-[#003950]/10 rounded-lg flex items-center justify-center text-[#003950]">
                  {icon}
                </div>
              )}
              <div>
                <h3 className="font-['Outfit'] text-[#00162c] text-xl md:text-2xl mb-2">
                  {title}
                </h3>
                <p className="font-['Outfit'] font-light text-[#333333] text-sm md:text-base">
                  {description}
                </p>
              </div>
            </div>

            {features.length > 0 && (
              <ul className="grid grid-cols-2 gap-2 mb-6">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-[#5d6c72]">
                    <svg
                      className="w-4 h-4 text-[#a18c6d]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            )}

            <Button
              variant="outline"
              size="small"
              onClick={() => onLearnMore(id)}
            >
              Learn More
            </Button>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className={`${styles.featuredCard} ${className}`}>
        <div className="relative h-[500px] rounded-2xl overflow-hidden group">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

          <div className="absolute inset-0 p-8 flex flex-col justify-end text-white">
            {icon && (
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                {icon}
              </div>
            )}

            <h3 className="font-['Outfit'] text-3xl mb-4">{title}</h3>
            <p className="text-white/90 mb-6 line-clamp-3">{description}</p>

            {features.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-6">
                {features.slice(0, 3).map((feature, idx) => (
                  <span
                    key={idx}
                    className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm"
                  >
                    {feature}
                  </span>
                ))}
                {features.length > 3 && (
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm">
                    +{features.length - 3} more
                  </span>
                )}
              </div>
            )}

            <Button
              variant="secondary"
              size="medium"
              onClick={() => onLearnMore(id)}
              className="self-start"
            >
              Explore Service
            </Button>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className={`${styles.defaultCard} ${className}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 group">
        {/* Image */}
        <div className="relative h-48 md:h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          {icon && (
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center text-[#00162c]">
              {icon}
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="font-['Outfit'] text-[#00162c] text-xl md:text-2xl mb-3">
            {title}
          </h3>

          <p className="font-['Outfit'] font-light text-[#333333] text-sm md:text-base leading-relaxed mb-4">
            {description}
          </p>

          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {features.slice(0, 3).map((feature, idx) => (
                <span
                  key={idx}
                  className="text-xs bg-[#f5f5f5] text-[#5d6c72] px-2 py-1 rounded"
                >
                  {feature}
                </span>
              ))}
            </div>
          )}

          <a
            href={link || '#'}
            onClick={(e) => {
              if (!link) {
                e.preventDefault();
                onLearnMore(id);
              }
            }}
            className="inline-flex items-center gap-2 font-['Outfit'] text-[#a18c6d] hover:text-[#8a7659] transition-colors"
          >
            <span className="underline">Read More</span>
            <svg
              className="w-4 h-4"
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
          </a>
        </div>
      </div>
    </article>
  );
};
