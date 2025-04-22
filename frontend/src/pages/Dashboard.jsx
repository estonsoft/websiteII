import React, { useState } from "react";
import './Dashboard.css';
import BG from '../assets/BG.png';
import BG2 from '../assets/BG2.png';
import BG3 from '../assets/BG3.png';
import BG4 from '../assets/BG4.png';
import DashboardHeader from "../components/DashboardHeader";
import BackgroundSelector from "../components/BackgroundSelector";
import Alert from "./Alert";

const Dashboard = () => {
  const [activeLink, setActiveLink] = useState('#home');
  const [bgImage, setBgImage] = useState(BG);

  const buttonStyles = [
    { top: '582.42px', left: '246.16px' },
    { top: '582.48px', left: '286.16px' },
    { top: '582.55px', left: '326.16px' },
    { top: '582.61px', left: '366.16px' }
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
    <div
      className="dashboard-container"
      style={{
        width: '100%',
        // height: '100vh',
        position: 'relative',
        backgroundImage: `url(${bgImage}), linear-gradient(270deg, rgba(0, 0, 0, 0.0001) 0%, #161C2D 99.54%)`,
        backgroundBlendMode: 'multiply',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <DashboardHeader activeLink={activeLink} setActiveLink={setActiveLink} />

<div
  className="highlight-wrapper"
  style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '8px',
    marginBottom: '20px', // Adjust spacing between highlight and hero content
  }}
>
  <div className="vector-highlight" style={{ width: '23px', height: '29px' }}>
    <svg
      width="26"
      height="30"
      viewBox="0 0 26 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.7904 0.352417V14.8524M12.7904 29.3524V14.8524M12.7904 14.8524L1.57091 7.74457M12.7904 14.8524L24.5709 21.9603M12.7904 14.8524L1.57091 21.9603M12.7904 14.8524L24.5709 7.74457"
        stroke="#A7F46A"
        strokeWidth="4"
      />
    </svg>
  </div>

  <div
    className="highlight-text"
    style={{
      fontSize: '16px',
      fontWeight: '600',
      color: '#fff',
      whiteSpace: 'nowrap',
    }}
  >
    World Best Digital Venture
  </div>
</div>

<div className="hero-content" style={{ textAlign: 'center', padding: '0 10px' }}>
  <h1 className="hero-heading" style={{ fontSize: '32px' }}>
    Unlock your ideas with <br />
    Estonsoft's <br />
    transformative <br />
    solutions.
  </h1>
  <button className="cta-button">
    <span>Get in Touch</span>
    <span className="arrow-icon">↗</span>
  </button>
  <BackgroundSelector
    backgrounds={[BG, BG2, BG3, BG4]}
    currentBg={bgImage}
    onChange={setBgImage}
  />
</div>


    </div>
<Alert/>
</>
  );
};
export default Dashboard;
