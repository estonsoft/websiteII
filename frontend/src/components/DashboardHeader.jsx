// components/DashboardHeader.jsx
import React from "react";
import Vector from "../assets/Vector-logo.png";
import shadepro from "../assets/shadepro.png";
import thinkinnovative from "../assets/THINK INNOVATIVE.png";
import SocialIcons from "./SocialIcons";

const DashboardHeader = ({ activeLink, setActiveLink }) => {
  return (
    <header className="dashboard-header">
      <div className="left-section">
        <div className="logo-container">
          <img src={Vector} alt="Logo" />
          <div className="stacked-logos">
            <img src={shadepro} alt="Logo2" className="logo2" />
            <img src={thinkinnovative} alt="Logo3" className="logo3" />
          </div>
        </div>

        <nav className="nav-links">
          {["home", "aboutus", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeLink === `#${section}` ? "active" : ""}
              onClick={() => setActiveLink(`#${section}`)}
            >
              {section.charAt(0).toUpperCase() +
                section.slice(1).replace("us", " Us")}
            </a>
          ))}
        </nav>
      </div>

      <SocialIcons />
    </header>
  );
};

export default DashboardHeader;
