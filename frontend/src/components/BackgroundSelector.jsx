import React from "react";

const BackgroundSelector = ({ backgrounds, currentBg, onChange }) => {
  const buttonStyles = [
    // { top: '582.42px', left: '246.16px' },
    // { top: '582.48px', left: '286.16px' },
    // { top: '582.55px', left: '326.16px' },
    // { top: '582.61px', left: '366.16px' }
  
      { top: '532.42px', left: '206.16px' },
      { top: '532.48px', left: '246.16px' },
      { top: '532.55px', left: '286.16px' },
      { top: '532.61px', left: '326.16px' }

    
  ];

  const commonStyle = {
    position: 'absolute',
    width: '32px',
    height: '6px',
    transform: 'rotate(-0.1deg)',
    borderRadius: '30px',
    cursor: 'pointer',
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    transition: 'background-color 0.2s, box-shadow 0.2s, opacity 0.2s',
    opacity: 0.8,
  };

  return (
    <>
   <div className="background-selector" style={{ position: 'relative', marginLeft: '15px',marginBottom:'15px'}}>
  {backgrounds.map((bg, index) => (
    <div
      key={index}
      style={{
        ...commonStyle,
        ...buttonStyles[index],
        backgroundColor:
          currentBg === bg ? 'rgba(255, 255, 255, 1)' : commonStyle.backgroundColor,
        boxShadow: currentBg === bg ? '0 0 8px rgba(255, 255, 255, 0.8)' : 'none'
      }}
      onClick={() => onChange(bg)}
    />
  ))}
</div>

    </>
  );
};

export default BackgroundSelector;
