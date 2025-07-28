import React from 'react';
import { Button } from '../Button/Button';
import styles from './YachtCard.module.css';

export const YachtCard = ({ 
  yacht, 
  variant = 'default', // default, compact, featured
  onViewDetails,
  className = ''
}) => {
  const {
    id,
    name,
    image,
    description,
    capacity,
    features = [],
    price,
    badge
  } = yacht;

  if (variant === 'compact') {
    return (
      <article className={`${styles.compactCard} ${className}`}>
        <div className="flex gap-4 p-4 bg-white/90 backdrop-blur-sm rounded-lg">
          <img
            src={image}
            alt={`${name} yacht`}
            className="w-24 h-28 object-cover rounded"
          />
          <div className="flex-1">
            <h3 className="font-['Antic_Didone'] text-[#00162c] text-xl mb-1">
              {name}
            </h3>
            <p className="text-[#a18c6d] text-xs font-medium mb-2">{price}</p>
            <p className="text-[#4b4d4e] text-xs leading-relaxed mb-3 line-clamp-2">
              {description}
            </p>
            <button 
              onClick={() => onViewDetails(id)}
              className="text-[#00162c] text-sm font-medium underline hover:text-[#003950]"
            >
              Details
            </button>
          </div>
        </div>
      </article>
    );
  }

  if (variant === 'featured') {
    return (
      <article className={`${styles.featuredCard} ${className}`}>
        <div className="relative h-96 overflow-hidden rounded-2xl group">
          <img
            src={image}
            alt={`${name} yacht`}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
          
          {badge && (
            <span className="absolute top-4 right-4 bg-[#a18c6d] text-white px-4 py-1 rounded-full text-sm">
              {badge}
            </span>
          )}

          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <h3 className="font-['Antic_Didone'] text-3xl mb-2">{name}</h3>
            <p className="text-white/80 mb-4">{description}</p>
            <div className="flex items-center justify-between">
              <span className="text-2xl font-bold">{price}</span>
              <Button
                variant="secondary"
                size="medium"
                onClick={() => onViewDetails(id)}
              >
                View Details
              </Button>
            </div>
          </div>
        </div>
      </article>
    );
  }

  // Default variant
  return (
    <article className={`${styles.defaultCard} ${className}`}>
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-64 overflow-hidden">
          <img
            src={image}
            alt={`${name} yacht`}
            className="w-full h-full object-cover"
          />
          {badge && (
            <span className="absolute top-4 right-4 bg-[#a18c6d] text-white px-3 py-1 rounded-full text-sm">
              {badge}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-['Antic_Didone'] text-[#00162c] text-2xl mb-1">
                {name}
              </h3>
              <p className="text-[#a18c6d] text-sm font-medium">{price}</p>
            </div>
            <span className="bg-[#f5f5f5] text-[#5d6c72] px-3 py-1 rounded-full text-sm">
              {capacity}
            </span>
          </div>

          <p className="text-[#5d6c72] text-sm leading-relaxed mb-4">
            {description}
          </p>

          {features.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {features.slice(0, 4).map((feature, idx) => (
                <span key={idx} className="text-xs bg-[#f5f5f5] text-[#5d6c72] px-2 py-1 rounded">
                  {feature}
                </span>
              ))}
            </div>
          )}

          <Button
            variant="primary"
            size="medium"
            className="w-full"
            onClick={() => onViewDetails(id)}
          >
            View Details
          </Button>
        </div>
      </div>
    </article>
  );
};