import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = (showAfter = 300) => {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  // Show/hide scroll to top button
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > showAfter) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, [showAfter]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    isVisible,
    scrollToTop
  };
};

// Hook for scroll position
export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState({
    x: 0,
    y: 0,
    direction: null,
    percentage: 0
  });

  useEffect(() => {
    let previousScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollPosition = () => {
      const currentScrollY = window.pageYOffset;
      const direction = currentScrollY > previousScrollY ? 'down' : 'up';
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const percentage = (currentScrollY / totalHeight) * 100;

      setScrollPosition({
        x: window.pageXOffset,
        y: currentScrollY,
        direction,
        percentage: Math.min(100, Math.max(0, percentage))
      });

      previousScrollY = currentScrollY;
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollPosition);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return scrollPosition;
};

// Hook for smooth scroll to element
export const useSmoothScroll = () => {
  const scrollToElement = (elementId, offset = 0) => {
    const element = document.getElementById(elementId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (sectionRef, offset = 0) => {
    if (sectionRef.current) {
      const elementPosition = sectionRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return { scrollToElement, scrollToSection };
};