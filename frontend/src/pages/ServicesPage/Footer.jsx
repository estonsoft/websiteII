import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Top CTA Section */}
      <div className="footer-cta">
        <p className="cta-text">Ready to get started?</p>
        <button className="cta-button">Get started</button>
      </div>

      <div className="footer-divider" />

      {/* Middle Rows */}
      <div className="footer-content">
        {/* Newsletter */}
        <div className="footer-newsletter">
          <h4>Subscribe to our new</h4>
          <div className="newsletter-form">
            <input type="email" placeholder="Email address" />
            <button type="submit">→</button>
          </div>
        </div>

        {/* Services */}
        <div className="footer-column">
          <h4>Services</h4>
          <ul>
            <li>Email Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
            <li>Offline</li>
          </ul>
        </div>

        {/* About */}
        <div className="footer-column">
          <h4>About</h4>
          <ul>
            <li>Our Story</li>
            <li>Benefits</li>
            <li>Team</li>
            <li>Careers</li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-column">
          <h4>Help</h4>
          <ul>
            <li>FAQs</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="footer-bottom">
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
        <div className="footer-social">
          <FaFacebookF />
          <FaTwitter />
          <FaInstagram />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
