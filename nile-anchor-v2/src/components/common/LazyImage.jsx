import { useState } from "react";

const LazyImage = ({
  src,
  alt,
  className = "",
  fallbackSrc = "/images/common/fallback.png",
  blurSrc = "/images/common/placeholder-blur.png",
  imgClass = "",
  ...rest
}) => {
  const [error, setError] = useState(false);
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!loaded && (
        <img
          src={blurSrc}
          alt="blur placeholder"
          className="absolute inset-0 w-full h-full object-cover filter blur-lg scale-110"
        />
      )}
      <img
        src={error ? fallbackSrc : src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setError(true)}
        className={`w-full h-full object-cover transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        } ${imgClass}`}
        {...rest}
      />
    </div>
  );
};

export default LazyImage;
