import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import LogoMW from '../Images/mediwheelLogo.png'
import './Navbar.css'
function Navbar() {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)

  return (
    <div className="navigation">
      <div className="Navigation-container">
        <div className="textLogo">
          <img className="LogoMW" src={LogoMW} alt="logo" />
        </div>

        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
        </div>

        {/* <div className="navElements"> */}

        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              We Do
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Team
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-links">
              Contact
            </Link>
          </li>
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
  )
}

export default Navbar
