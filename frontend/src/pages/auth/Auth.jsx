import React from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";

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
      <SignUp />
      <SignIn />
    </div>
  )
}

function SignUp() {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>SignUp</h3>

        <div>
          <input
            type="text"
            placeholder='First Name'
            className="infoInput"
          />
          <input
            type="text"
            placeholder='Last Name'
            className="infoInput"
          />
        </div>

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
          <input
            type="password"
            name='comfirmpassword'
            placeholder='Comfirm Password'
            className="infoInput"
          />
        </div>
        <div>
          <span
            style={{
              fontSize: "10px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "darkblue"
            }}
          >
            Already have an account!! Login Here
          </span>
        </div>
        <button className="button btn-signup" type='submit'>
          Sign Up
        </button>
      </form>
    </div>
  )
}


function SignIn() {
  return (
    <div className="a-right">
      <form className='infoForm authForm'>
        <h3>SignUp</h3>


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
          <span
            style={{
              fontSize: "10px",
              textDecoration: "underline",
              cursor: "pointer",
              color: "darkblue"
            }}
          >
            Don't have an account!! SignUp Here
          </span>

          <button className="button btn-signup" type='submit'>
            Sign Up
          </button>
        </div>
        <div>
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
        </div>
      </form>
    </div>
  )
}

export default Auth