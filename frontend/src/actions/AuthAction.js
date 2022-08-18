import * as AuthApi from "../api/AuthRequest.js";

export const logIn = (formData, navigate) => async(dispatch) => {

  dispatch({type:"AUTH_START"})
  try {
    const {data} = await AuthApi.logIn(formData);
    dispatch({type:"AUTH_SUCCESS", data: data})

  } catch (err) {
    dispatch({type:"AUTH_FAIL"})
  }
}

export const signUp = (formData) => async(dispatch) => {

  dispatch({type:"SIGNUP_START"})
  try {
    const {data} = await AuthApi.signUp(formData);
    dispatch({type:"SIGNUP_SUCCESS", data: data});
  } catch (err) {
    dispatch({type:"SIGNUP_FAIL"})
  }
}

export const logOut= () => async(dispatch) => {

  try {
    await AuthApi.logOut();
    dispatch({type:"LOGOUT_SUCCESS"});
  } catch (err) {
    dispatch({type:"LOGOUT_FAIL"})
  }
}