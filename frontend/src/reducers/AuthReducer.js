const authReducer = (
  state = { authData: null, loading: false, error: false }, action) => {
  switch (action.type) {
    case 'AUTH_START':
    case 'SIGNUP_START':
      return { ...state, loading: true, error: false }
    case 'AUTH_SUCCESS':
    case 'SIGNUP_SUCCESS':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false }
    case 'AUTH_FAIL':
    case 'SIGNUP_FAIL':
      return { ...state, loading: false, error: true }
    case 'LOGOUT_SUCCESS':
      return {
        loading: false,
        authData: null,
        error: false,
      };
    default:
      return state
  }
}

export default authReducer
