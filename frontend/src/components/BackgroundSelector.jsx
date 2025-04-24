import React from "react";
import './BackgroundSelector.css';

const BackgroundSelector = ({ backgrounds, currentBg, onChange }) => {
  return (
    <div className="background-selector">
      {backgrounds.map((bg, index) => (
        <div
          key={index}
          className={`bg-button ${currentBg === bg ? 'active' : ''}`}
          style={{
            top: ['532.42px', '532.48px', '532.55px', '532.61px'][index],
            left: ['206.16px', '246.16px', '286.16px', '326.16px'][index]
          }}
          onClick={() => onChange(bg)}
        />
      ))}
    </div>
  );
};

export default BackgroundSelector;