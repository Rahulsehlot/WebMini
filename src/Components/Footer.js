import React from 'react'
import Logo from '../Images/mediwheelLogo.png'
import arrow from '../Images/arrow.png'
import { Link } from 'react-router-dom'
import './Footer.css'
function Footer() {
  return (
    <div className="footerLayout">
      <div className="footer-Container">
        <div className="footer-lft">
          <div className="footer-Name">
            <img className="FootImage" src={Logo} alt="logo" />
            <div className="Name">
              Medi <span>wheels.</span>
            </div>
          </div>
          <p>
            We are the product of 4S Group, helping people and serving in
            healthcare industry for 20+ years.
          </p>
        </div>

        <div className="footer-mdl1">
          <h3>Know more</h3>
          <ul className="footer-Know-more">
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Features
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Pricing
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Services
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Terms and Conditions
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Privacy Policy
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Cookie policy
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer-mdl2">
          <h3>Our Company</h3>
          <ul className="footer-Know-more">
            <li className="foot-item">
              <Link to="/" className="foot-links">
                About Us
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Blog
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Media Kit
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Brand Story
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                News
              </Link>
            </li>
            <li className="foot-item">
              <Link to="/" className="foot-links">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-RGHT">
          <h3>Subscribe </h3>
          <div className="subscribe">
            <span>Subscribe to get the latest updates</span>

            <input
              className="email"
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              required
              placeholder="Drop your email"
            />
            <div className="submit-btn">
              <img className="arrow" src={arrow} alt="arrow" />
            </div>
          </div>
          <div className="CompanyName">
            <span className="compName">Company : Mediwheels</span>
            <div className="GST">
              <span>GST : APQ16253AFSE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
