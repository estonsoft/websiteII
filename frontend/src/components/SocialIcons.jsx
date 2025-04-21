import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div
      className="social-icons"
      style={{
        width: '152px',
        height: '20px',
        position: 'absolute',
        top: '17.3px',
        left: '1363.06px',
        transform: 'rotate(-0.1deg)',
        display: 'flex',
        gap: '24px',
        alignItems: 'center',
      }}
    >
      <a href="#" className="social-link"><FaFacebookF /></a>
      <a href="#" className="social-link"><FaTwitter /></a>
      <a href="#" className="social-link"><FaInstagram /></a>
      <a href="#" className="social-link"><FaLinkedinIn /></a>
    </div>
  );
};

export default SocialIcons;
