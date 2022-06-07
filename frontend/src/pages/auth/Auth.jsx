import React from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";
import { Link } from 'react-router-dom';

const Auth = () => {
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="img" />
        <div className="brand">
          <h1>DDT Media</h1>
          <h6>Explore the ideas throughout the global</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      <SignIn />
    </div>
  )
}

function SignIn() {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>Login</h3>
        <div>
          <input
            type="text"
            name='username'
            placeholder='Username'
            className="infoInput"
          />
        </div>

        <div>
          <input
            type="password"
            name='password'
            placeholder='Password'
            className="infoInput"
          />
        </div>
        <div>
          <Link to="/signup">
          <span
            style={{
              fontSize: "10px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "darkblue"
            }}
          >
            Don't have an account!! SignUp Here
          </span></Link>

          <button className="button btn-signup" type='submit'>
            Sign Up
          </button>
        </div>
        <div>
          <Link to="/forgotpassword">
          <span
            style={{
              fontSize: "10px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "darkblue",
              alignSelf: "flex-start"
            }}
          >
            Forgotten Password
          </span>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default Auth