import React from 'react';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import styles from './PageLayout.module.css';

export const PageLayout = ({ 
  children, 
  hero,
  breadcrumbs,
  sidebar,
  sidebarPosition = 'right',
  maxWidth = '1440px',
  className = '',
  animate = true
}) => {
  const { ref: heroRef, isIntersecting: heroVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  const { ref: contentRef, isIntersecting: contentVisible } = useIntersectionObserver({
    threshold: 0.1,
    freezeOnceVisible: true
  });

  return (
    <div className={`${styles.pageLayout} ${className}`}>
      {/* Hero Section */}
      {hero && (
        <section 
          ref={heroRef}
          className={`${styles.heroSection} ${animate && heroVisible ? styles.visible : ''}`}
        >
          {hero}
        </section>
      )}

      {/* Breadcrumbs */}
      {breadcrumbs && (
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <div className={styles.container} style={{ maxWidth }}>
            {breadcrumbs}
          </div>
        </nav>
      )}

      {/* Main Content Area */}
      <div 
        ref={contentRef}
        className={`${styles.contentArea} ${animate && contentVisible ? styles.visible : ''}`}
      >
        <div className={styles.container} style={{ maxWidth }}>
          <div className={`${styles.contentGrid} ${sidebar ? styles.withSidebar : ''} ${sidebar ? styles[sidebarPosition] : ''}`}>
            {/* Main Content */}
            <main className={styles.mainContent}>
              {children}
            </main>

            {/* Sidebar */}
            {sidebar && (
              <aside className={styles.sidebar}>
                {sidebar}
              </aside>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Breadcrumbs Component
export const Breadcrumbs = ({ items }) => {
  return (
    <ol className={styles.breadcrumbList}>
      {items.map((item, index) => (
        <li key={index} className={styles.breadcrumbItem}>
          {index < items.length - 1 ? (
            <>
              <a href={item.href} className={styles.breadcrumbLink}>
                {item.label}
              </a>
              <span className={styles.breadcrumbSeparator}>/</span>
            </>
          ) : (
            <span className={styles.breadcrumbCurrent}>{item.label}</span>
          )}
        </li>
      ))}
    </ol>
  );
};

// Page Hero Component
export const PageHero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  overlay = true,
  height = '400px',
  centered = true 
}) => {
  return (
    <div 
      className={styles.pageHero}
      style={{ 
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : 'none',
        height 
      }}
    >
      {overlay && <div className={styles.heroOverlay} />}
      <div className={`${styles.heroContent} ${centered ? styles.centered : ''}`}>
        {subtitle && (
          <p className={styles.heroSubtitle}>{subtitle}</p>
        )}
        <h1 className={styles.heroTitle}>{title}</h1>
      </div>
    </div>
  );
};

// Sidebar Widget Component
export const SidebarWidget = ({ title, children, className = '' }) => {
  return (
    <div className={`${styles.sidebarWidget} ${className}`}>
      {title && <h3 className={styles.widgetTitle}>{title}</h3>}
      <div className={styles.widgetContent}>
        {children}
      </div>
    </div>
  );
};