import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="#" className="social-link" style={{ color: 'black' }}><FaFacebookF /></a>
      <a href="#" className="social-link" style={{ color: 'black' }}><FaTwitter /></a>
      <a href="#" className="social-link" style={{ color: 'black' }}><FaInstagram /></a>
      <a href="#" className="social-link" style={{ color: 'black' }}><FaLinkedinIn /></a>
    </div>
  );
};

export default SocialIcons;
