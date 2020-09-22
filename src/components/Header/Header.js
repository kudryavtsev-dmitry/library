import React from "react";
import "./Header.css";
import SearchInput from "./SearchInput/SearchInput";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@material-ui/core";
import { loginOut } from "../../redux/auth/actions";
import { resetSelectedGenre } from "../../redux/genres/actions";

const Header = () => {
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const exitButtonHandler = () => () => {
    localStorage.clear();
    dispatch(resetSelectedGenre());
    dispatch(loginOut());
  };

  return (
    <div className="header-container">
      <div className="header-userLogin">
        {user.login}{" "}
        <Button
          onClick={exitButtonHandler()}
          color="secondary"
          variant="contained"
        >
          Выход
        </Button>
      </div>

      {user.role === 4 && <SearchInput />}
    </div>
  );
};

export default Header;
