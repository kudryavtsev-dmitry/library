import { LOAD_USERS_SUCCESS } from "./actionTypes";

export const loadUsersSuccess = (users) => ({
  payload: users,
  type: LOAD_USERS_SUCCESS,
});


export const loadUsers = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:54407/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    dispatch(loadUsersSuccess(result));
  } catch (e) {
    console.log("error", e);
  }
};
