import { AUTH_SUCCESS, LOGIN_OUT } from "./actionTypes";

export const authSuccess = (role,id, token, login) => ({
  type: AUTH_SUCCESS,
  role: role,
  id: id,
  token: token,
  login: login
});

export const loginOut = ()=>({type: LOGIN_OUT})


export const auth = (login, password) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:54407/api/auth/authenticate", {
      method: "POST",
      body: JSON.stringify({ login: login, password: password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response.status === 400) {
      console.log("error");
    } else {
      let result = await response.json();
      console.log(result);
      dispatch(authSuccess(result.role, result.id, result.token, result.login));
      localStorage.setItem("object",JSON.stringify(result) );
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const registration = (data) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:54407/api/auth/registration", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
      let result = await response.json();
      console.log('reg',result);
      dispatch(authSuccess(result.role, result.id, result.token));
      localStorage.setItem("object",JSON.stringify(result) );
    
  } catch (e) {
    console.log("error", e);
  }
};

