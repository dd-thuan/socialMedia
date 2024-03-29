import * as UserApi from "../api/UserRequest";


export const updateUser = (id, formData) => async (dispatch) => {
  dispatch({ type: "UPDATE_START" });
  try {
    const { data } = await UserApi.updateUser(id, formData);
    dispatch({ type: "UPDATE_SUCCESS", data: data });
  } catch (err) {
    dispatch({ type: "UPDATE_FAIL" });
  }
}

export const followUser = (id, data) => async (dispatch) => {
  dispatch({ type: "FOLLOW_USER", data: id });
  UserApi.followUser(id, data)
}

export const unFollowUser = (id, data) => async (dispatch) => {
  dispatch({ type: "UNFOLLOW_USER", data: id });
  UserApi.unFollowUser(id, data)
}
