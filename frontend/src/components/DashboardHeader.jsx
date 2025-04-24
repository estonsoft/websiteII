import React, { useState } from "react";
import './DashboardHeader.css';
import Vector from "../assets/Vector-logo.png";
import Group from "../assets/Group logo.png"
import shadepro from "../assets/shadepro.png";
import thinkinnovative from "../assets/THINK INNOVATIVE.png";
import { FiMenu, FiX } from "react-icons/fi";
import SocialIcons from "../components/SocialIcons";
import "../components/SocialIcons.css";

const DashboardHeader = ({ activeLink, setActiveLink }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

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
        {/* <div className="group-logo-container">
          <img src={Group} alt="group logo"/>
        </div> */}

        <div className="menu-toggle mobile-only" onClick={toggleMenu}>
           <FiMenu size={24} />
        </div>

        <nav className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["home", "aboutus", "services", "contact"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={activeLink === `#${section}` ? "active" : ""}
              onClick={() => {
                setActiveLink(`#${section}`);
                setMenuOpen(false);
              }}
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