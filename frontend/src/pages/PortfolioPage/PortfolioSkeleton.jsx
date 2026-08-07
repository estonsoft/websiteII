import React from 'react';
import './PortfolioSkeleton.css';

const PortfolioSkeleton = () => {
  return (
    <section className="portfolio-skeleton-section">
      <div className="portfolio-skeleton-container">

        {/* Section Header Skeleton */}
        <div className="portfolio-skeleton-header">
          <div className="portfolio-skeleton-tagline skeleton-shimmer"></div>
          <div className="portfolio-skeleton-title skeleton-shimmer"></div>
          <div className="portfolio-skeleton-subtext skeleton-shimmer"></div>
        </div>

        {/* Filter Bar Skeleton */}
        <div className="portfolio-skeleton-filters">
          {[1, 2, 3].map((i) => (
            <div key={i} className="portfolio-skeleton-filter-btn skeleton-shimmer"></div>
          ))}
        </div>

        {/* Cards Grid Skeleton */}
        <div className="portfolio-skeleton-grid">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div key={item} className="portfolio-skeleton-card">
              {/* Image placeholder */}
              <div className="portfolio-skeleton-card-image skeleton-shimmer"></div>

              {/* Content placeholder */}
              <div className="portfolio-skeleton-card-content">
                <div className="portfolio-skeleton-card-title skeleton-shimmer"></div>
                <div className="portfolio-skeleton-card-title short skeleton-shimmer"></div>
                <div className="portfolio-skeleton-desc-line skeleton-shimmer"></div>
                <div className="portfolio-skeleton-desc-line skeleton-shimmer"></div>
                <div className="portfolio-skeleton-desc-line last skeleton-shimmer"></div>
                <div className="portfolio-skeleton-card-footer">
                  <div className="portfolio-skeleton-button skeleton-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioSkeleton;
