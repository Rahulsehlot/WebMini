import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Signup.css'
import LogoMW from '../Images/mediwheelLogo.png'
import mainContainer from '../Images/mainContainer.png'
export class Signup extends Component {
  state = { checked: false }
  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked })
  render() {
    const Checkbox = (props) => <input type="checkbox" {...props} />
    return (
      <div className="layoutSignup">
        <div className="imageContainer">
          <img
            className="mainContainer"
            src={mainContainer}
            alt="mainContainer"
          />
        </div>
        <div className="Logosignup">
          <img className="LogoSignup" src={LogoMW} alt="logo" />
          <div className="h1-welcome">Welcome to MediWheels</div>
          <div className="h2-welcome">Create your account</div>
        </div>
        <div className="Scroll">
          <div className="signupContainer">
            <form className="SignupForm">
              <span>Email address</span>
              <input
                className="FormElements"
                type="email"
                // placeholder="EMAIL ID"
              />
              <span>Set password</span>
              <input
                className="FormElements"
                type="password"
                // placeholder="PASSWORD"
              />
              <span>Mobile Number</span>
              <div className="MobileNumber">
                <input
                  className="mobileNumber"
                  type="tel"
                  pattern="[0-9]+"
                  name="CONTACT NUMBER"
                  minLength="10"
                  maxLength="10"
                  title="Please Enter Mobile Number"
                  required
                />
                <button className="getOTP">Get OTP</button>
              </div>

              <div className="OTPinput">
                <input className="otpInput" type="tel" maxLength="1" />
                <input className="otpInput" type="tel" maxLength="1" />
                <input className="otpInput" type="tel" maxLength="1" />
                <input className="otpInput" type="tel" maxLength="1" />
              </div>
              <button className="SubmitSignUpPartner">Submit</button>

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

export default Signup
