import React, { useState, Component } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'
import LogoMW from '../Images/mediwheelLogo.png'
import mainContainer from '../Images/mainContainer.png'
export class Login extends Component {
  state = { checked: false }
  handleCheckboxChange = (event) =>
    this.setState({ checked: event.target.checked })
  render() {
    const Checkbox = (props) => <input type="checkbox" {...props} />
    return (
      <div className="layoutLogin">
        <div className="imageContainerLogin">
          <img
            className="mainContainerLogin"
            src={mainContainer}
            alt="mainContainer"
          />
        </div>
        <div className="LogoLogin">
          <img className="Logologin" src={LogoMW} alt="logo" />
        </div>

        <div className="LoginContainer">
          <div className="h1-welcomeLogin">Welcome to MediWheels</div>

          <form className="LoginForm">
            <span>Email address</span>
            <input
              className="FormElementsLogin"
              type="email"
              // placeholder="EMAIL ID"
            />
            <span>Password</span>
            <input
              className="FormElementsLogin"
              type="password"
              // placeholder="PASSWORD"
            />

            <div className="login-div">
              <label>
                <Checkbox
                  checked={this.state.checked}
                  onChange={this.handleCheckboxChange}
                />
              </label>
              <span className="tNcLogin">Terms and condition.</span>
            </div>
            <div>
              <button className="btn-Login">LOGIN</button>
            </div>
            <div className="acnt-Singup">
              <span>New to MediWheels</span>
              <Link to="/Signup" className="Acnt-Singup">
                SignUp
              </Link>
            </div>
            <div className="partner-Singup">
              <span>Are you intrested to be MediWheels partner </span>
              <Link to="/PartnerSignup" className="Partner-Singup">
                SignUp
              </Link>
              <span> here</span>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login
