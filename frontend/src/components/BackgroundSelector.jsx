import React from "react";

const BackgroundSelector = ({ backgrounds, currentBg, onChange }) => {
  const buttonStyles = [
    { top: "582.42px", left: "246.16px" },
    { top: "582.48px", left: "286.16px" },
    { top: "582.55px", left: "326.16px" },
    { top: "582.61px", left: "366.16px" },
  ];

  const commonStyle = {
    position: "absolute",
    width: "32px",
    height: "6px",
    transform: "rotate(-0.1deg)",
    borderRadius: "30px",
    cursor: "pointer",
    backgroundColor: "rgba(255, 255, 255, 0.6)",
    transition: "background-color 0.2s, box-shadow 0.2s, opacity 0.2s",
    opacity: 0.8,
  };

  return (
    <div className="image-buttons" style={{ display: "flex", gap: "12px", marginTop: "24px" }}>

{backgrounds.map((bg, idx) => (
  <div
    key={idx}
    className={`bg-thumbnail ${currentBg === bg ? "active" : ""}`}
    onClick={() => onChange(bg)}
    style={{
      width: "32px",
      height: "6px",
      borderRadius: "30px",
      cursor: "pointer",
      backgroundColor: currentBg === bg ? "#ffffff" : "rgba(255, 255, 255, 0.6)",
      transition: "background-color 0.2s, box-shadow 0.2s, opacity 0.2s",
      opacity: currentBg === bg ? 1 : 0.8,
      boxShadow: currentBg === bg ? "0 0 6px rgba(255, 255, 255, 0.8)" : "none",
    }}
  />
))}

    </div>
  );
};

export default BackgroundSelector;
