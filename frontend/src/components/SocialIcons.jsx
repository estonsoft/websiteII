import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="#" className="social-link"><FaFacebookF /></a>
      <a href="#" className="social-link"><FaTwitter /></a>
      <a href="#" className="social-link"><FaInstagram /></a>
      <a href="#" className="social-link"><FaLinkedinIn /></a>
    </div>
  );
};

export default SocialIcons;
