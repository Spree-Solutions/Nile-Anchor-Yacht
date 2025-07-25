import React, { useState, useEffect } from 'react';
import { DesktopNav } from '../Navigation/DesktopNav';
import { MobileNav } from '../Navigation/MobileNav';
import { useResponsive } from '../../../hooks/useResponsive';
import { useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export const Header = () => {
  const { isMobile, isTablet } = useResponsive();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  // Check if we're on homepage
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial scroll position
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Different header styles for homepage hero section
  const headerClasses = `fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
    isScrolled || !isHomePage
      ? 'bg-white shadow-lg' 
      : 'bg-transparent'
  }`;

  return (
    <>
      <header className={headerClasses}>
        <div className="w-full max-w-[1440px] mx-auto px-4 md:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <a href="/" className="relative z-50 flex items-center">
              <img
                src="/images/common/logo.png"
                alt="Nile Anchor"
                className={`transition-all duration-300 ${
                  isMobile ? 'h-8' : 'h-10 md:h-12'
                }`}
                style={{
                  filter: !isScrolled && isHomePage ? 'brightness(0) invert(1)' : 'none'
                }}
              />
            </a>

            {/* Desktop Navigation */}
            {!isMobile && !isTablet && (
              <DesktopNav isScrolled={isScrolled} isHomePage={isHomePage} />
            )}

            {/* Mobile Menu Button */}
            {(isMobile || isTablet) && (
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={`relative z-50 w-10 h-10 flex flex-col items-center justify-center ${
                  isScrolled || isMobileMenuOpen || !isHomePage ? 'text-[#003950]' : 'text-white'
                }`}
                aria-label="Toggle menu"
              >
                <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
                <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
                <span className={`${styles.hamburgerLine} ${isMobileMenuOpen ? styles.open : ''}`} />
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      {(isMobile || isTablet) && (
        <MobileNav 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </>
  );
};