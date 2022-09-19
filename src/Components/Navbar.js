import React, { useState } from "react";
import { Link } from "react-router-dom";
import LogoMW from "../Images/mediwheelLogo.png";
import "./Navbar.css";
function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false)

  return (
    <div className="navigation">
      <div className="Navigation-container">
        <div className="textLogo">
          <img className="LogoMW" src={LogoMW} alt="logo" />
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        {/* <div className="navElements"> */}

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <Link to="/" className="nav-links">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/WeDoSection" className="nav-links">
            <li className="nav-item">We Do</li>
          </Link>
          <Link to="/StorySectionN" className="nav-links">
            <li className="nav-item">About</li>
          </Link>
          <Link to="/TeamSection" className="nav-links">
            <li className="nav-item">Team</li>
          </Link>
          <li>
            <button className="-Btn-Login">
              <Link to="/Login" className="Nav-Login">
                Login
              </Link>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
