import { LOAD_USERS_SUCCESS } from "./actionTypes";
import { ToastError } from "../../common/Toasts";

export const loadUsersSuccess = (users) => ({
  payload: users,
  type: LOAD_USERS_SUCCESS,
});

export const loadUsers = (token) => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:5000/api/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const result = await response.json();
    if (response.status === 401) {
      ToastError("Не авторизован");
    } else {
      dispatch(loadUsersSuccess(result));
    }
  } catch (e) {
    console.log("error", e);
  }
};
