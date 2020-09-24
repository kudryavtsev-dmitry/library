import React, { useState } from "react";
import { Button, TextField, InputAdornment } from "@material-ui/core";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";

import "./Auth.css";
import { auth } from "../../redux/auth/actions";

const Auth = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(auth(login, password));
  };

  return (
    <form className="auth-container">
      <h3>Вход в систему</h3>
      <div className="auth-input-wrapper">
        <TextField
          required
          onChange={(e) => setLogin(e.target.value)}
          id="login"
          label="Логин"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <div className="auth-input-wrapper">
        <TextField
          required
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          id="pass"
          label="Пароль"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOpenIcon />
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button onClick={() => onSubmit()} color="primary" variant="contained">
        Вход
      </Button>
      <NavLink to="/registration">Зарегистрироваться</NavLink>
    </form>
  );
};
export default Auth;
