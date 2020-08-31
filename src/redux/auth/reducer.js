import { AUTH_SUCCESS, LOGIN_OUT } from "./actionTypes";
const initialState = {
  isAuth: Boolean(localStorage.getItem("object")),
  role:
    localStorage.getItem("object") &&
    JSON.parse(localStorage.getItem("object")).role,
  id:
    localStorage.getItem("object") &&
    JSON.parse(localStorage.getItem("object")).id,
  token:
    localStorage.getItem("object") &&
    JSON.parse(localStorage.getItem("object")).token,
  login:
    localStorage.getItem("object") &&
    JSON.parse(localStorage.getItem("object")).login,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        isAuth: true,
        role: action.role,
        id: action.id,
        token: action.token,
        login: action.login,
      };
    case LOGIN_OUT:
      return {
       state: {}
      };

    default:
      return state;
  }
}
