import { AUTH_SUCCESS, LOGIN_OUT } from "./actionTypes";
import { ToastError, ToastSuccess } from "../../common/Toasts";

export const authSuccess = (role, id, token, login) => ({
  type: AUTH_SUCCESS,
  role: role,
  id: id,
  token: token,
  login: login,
});

export const loginOut = () => ({ type: LOGIN_OUT });

export const auth = (login, password) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:5000/api/auth/authenticate", {
      method: "POST",
      body: JSON.stringify({ login: login, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 400) {
      ToastError("Неверный логин или пароль");
    } else {
      ToastSuccess("Вход выполнен");
      let result = await response.json();
      console.log(1111, result);
      dispatch(authSuccess(result.role, result.id, result.token, result.login));
      localStorage.setItem("object", JSON.stringify(result));
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const registration = (data) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:5000/api/auth/registration", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let result = await response.json();
    dispatch(authSuccess(result.role, result.id, result.token, result.login));
    localStorage.setItem("object", JSON.stringify(result));
  } catch (e) {
    console.log("error", e);
  }
};
