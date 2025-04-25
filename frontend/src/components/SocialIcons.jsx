import React, { useEffect, useState } from 'react';
import {  FaFacebook , FaTwitter, FaInstagram, FaLinkedin  } from 'react-icons/fa';

const SocialIcons = () => {
  const [iconColor, setIconColor] = useState('black');

  useEffect(() => {
    const getBackgroundBrightness = () => {
      const bg = getComputedStyle(document.body).backgroundColor;
      const rgb = bg.match(/\d+/g)?.map(Number);
      if (!rgb || rgb.length < 3) return;

      const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
      setIconColor(brightness > 125 ? 'black' : 'white');
    };

    getBackgroundBrightness();

    // Optional: Update if background might change
    window.addEventListener('resize', getBackgroundBrightness);
    return () => window.removeEventListener('resize', getBackgroundBrightness);
  }, []);

  return (
    <div className="social-icons">
      <a href="#" className="social-link" style={{ color: iconColor }}><FaFacebook /></a>
      <a href="#" className="social-link" style={{ color: iconColor }}><FaTwitter /></a>
      <a href="#" className="social-link" style={{ color: iconColor }}><FaInstagram /></a>
      <a href="#" className="social-link" style={{ color: iconColor }}><FaLinkedin  /></a>
    </div>
  );
};

export default SocialIcons;
