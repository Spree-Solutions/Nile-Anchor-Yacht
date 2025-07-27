import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../../components/common/Header/Header';
import { Footer } from '../../components/common/Footer/Footer';
import { useScrollToTop } from '../../hooks/useScrollToTop';
import { analyticsAPI } from '../../utils/api';
import styles from './MainLayout.module.css';

export const MainLayout = () => {
  const location = useLocation();
  const { isVisible, scrollToTop } = useScrollToTop();

  // Track page views
  useEffect(() => {
    analyticsAPI.trackPageView(location.pathname);
  }, [location]);

  // Update page title based on route
  useEffect(() => {
    const routeTitles = {
      '/': 'Home',
      '/about': 'About Us',
      '/contact': 'Contact Us',
      '/services/weddings': 'Wedding Services',
      '/services/business-events': 'Business Events',
      '/services/gatherings-parties': 'Gatherings & Parties'
    };

    const pageTitle = routeTitles[location.pathname] || 'Page';
    document.title = `${pageTitle} | Nile Anchor`;
  }, [location]);

  return (
    <div className={styles.layoutWrapper}>
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className={styles.skipLink}>
        Skip to main content
      </a>

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main id="main-content" className={styles.mainContent}>
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll to Top Button */}
      {isVisible && (
        <button
          onClick={scrollToTop}
          className={styles.scrollToTop}
          aria-label="Scroll to top"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 10l7-7m0 0l7 7m-7-7v18" 
            />
          </svg>
        </button>
      )}

      {/* Loading Bar */}
      <div className={styles.loadingBar} id="loading-bar" />

      {/* Notification Container */}
      <div className={styles.notificationContainer} id="notification-container" />
    </div>
  );
};