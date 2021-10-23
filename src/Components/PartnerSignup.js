import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './PartnerSignup.css'
import LogoMW from '../Images/mediwheelLogo.png'
import mainContainer from '../Images/mainContainer.png'
export class PartnerSignup extends Component {
  state = { checked: false }
  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked })
  render() {
    const Checkbox = (props) => <input type="checkbox" {...props} />
    return (
      <div className="layoutSignupPartner">
        <div className="imageContainerSignupPartner">
          <img
            className="mainContainerSignupPartner"
            src={mainContainer}
            alt="mainContainer"
          />
        </div>
        <div className="Logosignuppartner">
          <img className="LogoSignupPartnerSignup" src={LogoMW} alt="logo" />
          <div className="h1-welcome">Welcome to MediWheels</div>
          <div className="h2-welcome">Create your account</div>
        </div>
        <div className="ScrollSignupPartner">
          <div className="PartnersignupContainer">
            <form className="PartnerSignupForm">
              <span>Email address</span>
              <input
                className="FormElementsSignupPartner"
                type="email"
                // placeholder="EMAIL ID"
              />
              <span>Set password</span>
              <input
                className="FormElementsSignupPartner"
                type="password"
                // placeholder="PASSWORD"
              />
              <span>Mobile Number</span>
              <div className="MobileNumberPartnerSignup">
                <input
                  className="mobileNumberPartnerSignup"
                  type="tel"
                  pattern="[0-9]+"
                  name="CONTACT NUMBER"
                  minLength="10"
                  maxLength="10"
                  title="Please Enter Mobile Number"
                  required
                />
                <button className="getOTPPartnerSignup">Get OTP</button>
              </div>

              <div className="OTPinputSignupPartner">
                <input
                  className="otpInputSignupPartner"
                  type="tel"
                  maxLength="1"
                />
                <input
                  className="otpInputSignupPartner"
                  type="tel"
                  maxLength="1"
                />
                <input
                  className="otpInputSignupPartner"
                  type="tel"
                  maxLength="1"
                />
                <input
                  className="otpInputSignupPartner"
                  type="tel"
                  maxLength="1"
                />
              </div>
              <button className="SubmitSignUpPartner">Submit</button>
              <span>Store Name</span>
              <input
                className="FormElementsSignupPartner"
                type="password"
                // placeholder="PASSWORD"
              />
              <span>Your Name</span>
              <input
                className="FormElementsSignupPartner"
                type="password"
                // placeholder="PASSWORD"
              />
              <span>GST No.</span>
              <input
                className="FormElementsSignupPartner"
                type="password"
                // placeholder="PASSWORD"
              />

              <div className="act-login-div">
                <label>
                  <Checkbox
                    checked={this.state.checked}
                    onChange={this.handleCheckboxChange}
                  />
                </label>
                <span className="tNc">
                  {/* <a href="https://xd.adobe.com/view/a8f183fb-bfef-497e-8c2f-377a29fd494b-fda2/screen/7f9abeb8-1ab8-4d59-a0f4-8195c12f05c5/variables/"> */}
                  Terms and condition.
                  {/* </a> */}
                </span>
              </div>
              <div>
                <button className="btn-SignUp">SIGN UP</button>
              </div>
              <div className="acnt-login">
                <span>Already have an account</span>
                <Link to="/Login" className="acnt-login">
                  Login
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default PartnerSignup
