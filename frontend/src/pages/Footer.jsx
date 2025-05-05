import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import "./Footer.css";
import FooterLogo from "../assets/FooterLogo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__logo">
          <img src={FooterLogo} alt="Footer Logo" className="footer__logo-img" />
        </div>

        <div className="footer__bottom">
          <div className="footer__left">
            <div className="footer__links">
              <a href="#" className="footer__link">Terms & Conditions</a>
              <a href="#" className="footer__link">Privacy Policy</a>
            <p className="footer__copyright">
              © 2025 Copyright, All Right Reserved
            </p>
            </div>
          </div>

          <div className="footer__social">
            <FaFacebookF className="footer__social-icon" />
            <FaTwitter className="footer__social-icon" />
            <FaInstagram className="footer__social-icon" />
          </div>
        </div>

        <div className="footer__divider"></div>
      </div>
    </footer>
  );
};

export default Footer;
