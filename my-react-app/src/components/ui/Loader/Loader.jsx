import React from 'react';

export const Loader = ({ 
  size = 'medium', // small, medium, large, custom
  color = 'primary', // primary, secondary, white, custom
  text = '',
  fullScreen = false,
  className = ''
}) => {
  const sizeClasses = {
    small: 'w-8 h-8',
    medium: 'w-12 h-12',
    large: 'w-16 h-16'
  };

  const colorClasses = {
    primary: 'border-[#003950]',
    secondary: 'border-[#a18c6d]',
    white: 'border-white'
  };

  const loaderSize = typeof size === 'string' ? sizeClasses[size] : '';
  const loaderColor = typeof color === 'string' ? colorClasses[color] : '';

  const spinner = (
    <div className={`${className} ${text ? 'flex flex-col items-center gap-4' : ''}`}>
      <div
        className={`
          ${loaderSize}
          border-4 
          ${loaderColor}
          border-t-transparent 
          rounded-full 
          animate-spin
        `}
        style={typeof size === 'number' ? { width: size, height: size } : {}}
      />
      {text && (
        <p className={`text-sm font-medium ${color === 'white' ? 'text-white' : 'text-[#003950]'}`}>
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

// Skeleton Loader Component
export const SkeletonLoader = ({ 
  variant = 'text', // text, circular, rectangular, card
  width,
  height,
  className = '',
  count = 1
}) => {
  const baseClasses = 'animate-pulse bg-gray-200 rounded';

  const variantClasses = {
    text: 'h-4 w-full rounded',
    circular: 'rounded-full',
    rectangular: 'rounded-lg',
    card: 'rounded-lg'
  };

  const getSize = () => {
    switch (variant) {
      case 'circular':
        return { width: width || 40, height: height || 40 };
      case 'rectangular':
        return { width: width || '100%', height: height || 120 };
      case 'card':
        return { width: width || '100%', height: height || 300 };
      default:
        return { width: width || '100%', height: height || 16 };
    }
  };

  const renderSkeleton = () => {
    const size = getSize();
    const style = {
      width: typeof size.width === 'number' ? `${size.width}px` : size.width,
      height: typeof size.height === 'number' ? `${size.height}px` : size.height
    };

    return (
      <div
        className={`${baseClasses} ${variantClasses[variant]} ${className}`}
        style={style}
      />
    );
  };

  if (count > 1) {
    return (
      <div className="space-y-3">
        {Array.from({ length: count }).map((_, index) => (
          <div key={index}>{renderSkeleton()}</div>
        ))}
      </div>
    );
  }

  return renderSkeleton();
};