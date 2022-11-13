const authReducer = (
  state = { authData: null, loading: false, error: false }, action) => {
  switch (action.type) {
    case 'AUTH_START':
    case 'SIGNUP_START':
    case "UPDATE_START":
      return { ...state, loading: true, error: false }
    case 'AUTH_SUCCESS':
    case 'SIGNUP_SUCCESS':
      localStorage.setItem('profile', JSON.stringify({ ...action?.data }));
      return { ...state, authData: action.data, loading: false, error: false }
    case 'AUTH_FAIL':
    case 'SIGNUP_FAIL':
    case "UPDATE_FAIL":
      return { ...state, loading: false, error: true }

      case "UPDATE_SUCCESS":
        return { ...state, authData: action.data, loading: false, error: false }


    case "FOLLOW_USER":
      return {
        ...state, authData: {
          ...state.authData, user: {
            ...state.authData.user, following: [
              ...state.authData.user.following, action.data]
          }
        }, loading: false, error: false
      }

    case "UNFOLLOW_USER":
      return {
        ...state, authData: {
          ...state.authData, user: {
            ...state.authData.user, following: [
              ...state.authData.user.following.filter((personId) => personId !== action.data)]
          }
        }, loading: false, error: false
      }


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
