import { useEffect, useRef, useState, useCallback } from 'react';

export const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const targetRef = useRef(null);

  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false,
    onChange,
    onEnter,
    onLeave
  } = options;

  const frozen = hasIntersected && freezeOnceVisible;

  const updateEntry = useCallback(([entry]) => {
    const isIntersectingNow = entry.isIntersecting;
    
    setIsIntersecting(isIntersectingNow);
    
    if (isIntersectingNow) {
      setHasIntersected(true);
      onEnter?.(entry);
    } else {
      onLeave?.(entry);
    }
    
    onChange?.(isIntersectingNow, entry);
  }, [onChange, onEnter, onLeave]);

  useEffect(() => {
    const element = targetRef.current;
    
    if (!element || frozen) return;

    const observerOptions = {
      threshold,
      root,
      rootMargin
    };

    const observer = new IntersectionObserver(updateEntry, observerOptions);
    observer.observe(element);

    return () => observer.disconnect();
  }, [threshold, root, rootMargin, frozen, updateEntry]);

  return {
    ref: targetRef,
    isIntersecting,
    hasIntersected
  };
};

// Hook for multiple elements
export const useIntersectionObserverMultiple = (options = {}) => {
  const [entries, setEntries] = useState({});
  const observers = useRef(new Map());

  const {
    threshold = 0.1,
    root = null,
    rootMargin = '0px',
    freezeOnceVisible = false
  } = options;

  const observe = useCallback((element, id) => {
    if (!element || observers.current.has(id)) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setEntries(prev => ({
          ...prev,
          [id]: {
            isIntersecting: entry.isIntersecting,
            hasIntersected: prev[id]?.hasIntersected || entry.isIntersecting,
            entry
          }
        }));
      },
      { threshold, root, rootMargin }
    );

    observer.observe(element);
    observers.current.set(id, observer);
  }, [threshold, root, rootMargin]);

  const unobserve = useCallback((id) => {
    const observer = observers.current.get(id);
    if (observer) {
      observer.disconnect();
      observers.current.delete(id);
      setEntries(prev => {
        const newEntries = { ...prev };
        delete newEntries[id];
        return newEntries;
      });
    }
  }, []);

  const unobserveAll = useCallback(() => {
    observers.current.forEach(observer => observer.disconnect());
    observers.current.clear();
    setEntries({});
  }, []);

  useEffect(() => {
    return () => {
      unobserveAll();
    };
  }, [unobserveAll]);

  return {
    observe,
    unobserve,
    unobserveAll,
    entries
  };
};

// Hook for lazy loading images
export const useLazyLoadImage = (src, placeholder = '') => {
  const [imageSrc, setImageSrc] = useState(placeholder);
  const [imageRef, setImageRef] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const { isIntersecting } = useIntersectionObserver({
    targetRef: imageRef,
    threshold: 0.01,
    rootMargin: '50px'
  });

  useEffect(() => {
    if (isIntersecting && src && !isLoaded && !isError) {
      const img = new Image();
      
      img.onload = () => {
        setImageSrc(src);
        setIsLoaded(true);
      };
      
      img.onerror = () => {
        setIsError(true);
      };
      
      img.src = src;
    }
  }, [isIntersecting, src, isLoaded, isError]);

  return {
    imageSrc,
    imageRef: setImageRef,
    isLoaded,
    isError
  };
};