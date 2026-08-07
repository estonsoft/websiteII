import React, { useEffect, useState } from 'react';
import PortfolioHero from './PortfolioHero';
import LeaveComment from '../../components/LeaveComment';
import OurPortfolios from './OurPortfolios';
import PortfolioSkeleton from './PortfolioSkeleton';
import Footer from '../../components/Footer';
import localPortfolioData from '../../data/portfolioData.json';

const Portfolio = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPortfolios = async () => {
      // Always start with the CMS JSON as the base (updated on every deploy)
      const cmsPortfolios = localPortfolioData.portfolios || [];

      try {
        setLoading(true);
        const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/portfolios`, {
          headers: {
            Accept: "application/json",
            Authorization: import.meta.env.VITE_API_TOKEN,
          },
        });

        if (!response.ok) throw new Error("API unavailable");

        const apiData = await response.json();

        if (apiData && apiData.length > 0) {
          // Normalize API data: ensure category field is present
          const normalizedApi = apiData.map(item => ({
            ...item,
            category: item.category || (item.title?.toLowerCase().includes('app') ? 'Mobile App' : 'Web App'),
          }));

          // Merge: API items take priority. Append CMS-only items not yet in the API.
          const apiIds = new Set(normalizedApi.map(p => p.id));
          const cmsOnlyPortfolios = cmsPortfolios.filter(p => !apiIds.has(p.id));
          const merged = [...normalizedApi, ...cmsOnlyPortfolios];
          setPortfolios(merged);
        } else {
          // API returned nothing — use CMS JSON
          setPortfolios(cmsPortfolios);
        }
      } catch (error) {
        // API unreachable — fall back to CMS JSON only
        console.error("API unavailable, using CMS portfolio data:", error);
        setPortfolios(cmsPortfolios);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolios();
  }, []);

  return (
    <div>
      <section id="portfolio-section1">
        <PortfolioHero />
      </section>

      <section id="portfolio-section2">
        {loading ? (
          <PortfolioSkeleton />
        ) : (
          <OurPortfolios portfolios={portfolios} />
        )}
      </section>

      <section id="portfolio-section3">
        <LeaveComment />
      </section>

      <section id="portfolio-section4">
        <Footer />
      </section>
    </div>
  );
};

export default Portfolio;
