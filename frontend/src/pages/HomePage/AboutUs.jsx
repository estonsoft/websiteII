import React, { useState, useEffect } from "react";
import "./AboutUs.css";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import CalendlyModal from "../../components/CalendlyModal";

const AboutUs = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`about-us ${isVisible ? 'fade-in' : ''}`}>
            {/* Decorative Ellipses */}
            <div className="ellipse ellipse-21" />
      <div className="ellipse ellipse-19" />
      {/* Header Section */}
      <div className={`about-us-header ${isVisible ? 'animate-slide-up' : ''}`}>
        <h2 className={`about-us-title ${isVisible ? 'animate-slide-up delay-200' : ''}`}>Delivering tech solutions</h2>
        <p className={`about-us-subtext ${isVisible ? 'animate-slide-up delay-400' : ''}`}>
          We are a team of 20+ who are passionate about making the world a better place.
        </p>
      </div>

      {/* Main Image Block */}
      <div className={`main-image-block ${isVisible ? 'animate-scale-up delay-600' : ''}`}>
        <div className="image-overlay" />
        <span className={`badge ${isVisible ? 'animate-fade-in delay-800' : ''}`}>Ready for future</span>
        <h3 className={`overlay-title ${isVisible ? 'animate-slide-up delay-1000' : ''}`}>Leveraging tech to drive a better IT experience</h3>
        <Link to="/portfolio#ourportfolios">
        <button className={`cta-button-about-us ${isVisible ? 'animate-slide-up delay-1200' : ''}`}>
          See Incredible Work <ArrowUpRight size={24} />
        </button>
        </Link>
      </div>

      {/* Cards */}
      <div className={`about-us-cards ${isVisible ? 'animate-fade-in delay-800' : ''}`}>
        <div className={`card card-blog ${isVisible ? 'animate-slide-up delay-1000' : ''}`}>
          <p className="card-text">We have share our journey and some story</p>
          <div className="card-button">
            <Link to="/blogs#blog-hero" style={{color: 'inherit' }}>
            Read our blog <ArrowUpRight size={24} />
            </Link>
          </div>
        </div>

        <div className={`card card-workflow ${isVisible ? 'animate-slide-up delay-1200' : ''}`}>
          <p className="card-text">
            It's a must to that we would like to share our workflow to believe you
          </p>
          <div className="card-button">
          <Link to="/portfolio#portfolio-hero" style={{color: 'inherit' }}>
            See our workflow <ArrowUpRight size={24} />
          </Link>
          </div>
        </div>

        <div className={`card card-expert ${isVisible ? 'animate-slide-up delay-1400' : ''}`}>
          <p className="card-text">
            2,000+ our team members around the world who create incredible and amazing projects
          </p>
          <button
            className="card-button"
            onClick={() => setIsCalendlyOpen(true)}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            Meet Our Expert <ArrowUpRight size={24} />
          </button>
        </div>
      </div>

      {/* Calendly Modal */}
      <CalendlyModal 
        isOpen={isCalendlyOpen} 
        onClose={() => setIsCalendlyOpen(false)} 
      />

    </div>
  );
};

export default AboutUs;
