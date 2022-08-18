import React, { useState } from 'react';
import "./Auth.css";
import Logo from "../../img/logo.png";
import { logIn, signUp } from '../../actions/AuthAction';
import { useDispatch, useSelector } from 'react-redux';

const Auth = () => {
  const initialState = {
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch()
  const loading = useSelector((state) => state.authReducer.loading) 

  const [isSignUp, setIsSignUp] = useState(false)
  console.log(loading)

  const [data, setData] = useState(initialState); 
  const [confirmPassword, setConfirmPassword] = useState(true)

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(isSignUp) {
      data.password === data.confirmPassword 
      ? dispatch(signUp(data))
      : setConfirmPassword(false);
    } else {
      dispatch(logIn(data), signUp(data));
    }
    
  }

  const resetForm = (e) => {
    setConfirmPassword(true);
    setData({
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    });
  }
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="img" />
        <div className="brand">
          <h1>DDT Media</h1>
          <h6>Explore the ideas throughout the global</h6>
        </div>
      </div>


      <div className="a-right">
        <form className='infoForm authForm' onSubmit={handleSubmit}>
          <h3>{isSignUp ? 'Sign Up' : 'Login'}</h3>
          <div>
            {isSignUp && (
               <div>
               <input
                 type="text"
                 name='username'
                 placeholder='Username'
                 className="infoInput"
                 onChange={handleChange}
                 value={data.username}
               />
             </div>
            )}
            <input
              type="text"
              name='email'
              placeholder='Email'
              className="infoInput"
              onChange={handleChange}
              value={data.email}
            />
          </div>

          <div>
            <input
              type="password"
              name='password'
              placeholder='Password'
              className="infoInput"
              onChange={handleChange}
              value={data.password}
            />
          </div>

          {isSignUp && (
            <>
              <div>
                <input
                  type="password"
                  name='confirmPassword'
                  placeholder='Confirm Password'
                  className="infoInput"
                  onChange={handleChange}
                  value={data.confirmPassword}
                />
              </div>
              <span onChange={handleChange} style={{ color: 'red', fontSize: "9px", alignSelf: 'flex-start', bottom: '2em', position: 'relative', display: confirmPassword ? "none" : "block" }}>
                The passwords you entered do not match
              </span>
            </>

          )}

          <div>
            <span
              style={{
                fontSize: "8px",
                textDecoration: "underline",
                cursor: "pointer",
                color: "darkblue"
              }}
              onClick={() => { setIsSignUp((prev) => !prev); resetForm() }}
            >
              {isSignUp
                ? "Already have an account"
                : "Don't have an account!! SignUp Here"}
            </span>

            <button className="button btn-signup" type='submit'>
              {isSignUp ? "Sign Up" : "Login"}
            </button>
          </div>

          {/* <div>
            <Link to="/forgotpassword">
              <span
                style={{
                  position:"relative",
                  bottom:"30px",
                  fontSize: "8px",
                  textDecoration: "underline",
                  cursor: "pointer",
                  color: "darkblue",
                  alignSelf: "flex-start"
                }}
              >
                {isSignUp ? "" : "Forgotten Password"}
              </span>
            </Link>
          </div> */}
        </form>
      </div>
    </div>
  )
}

export default Auth