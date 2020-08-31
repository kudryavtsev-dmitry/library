import React, { useEffect} from "react";
import { CircularProgress } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "../../../redux/users/actions";
import "./UserList.css";
import UserTable from "./UserTable";

const UserList = () => {
  const users = useSelector((state) => state.users);

  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUsers(auth.token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const roleFilter = (roleId) => {
    switch (roleId) {
      case 1:
        return "админ";
      case 2:
        return "библиотекарь";
      case 3:
        return "кладовщик";
      case 4:
        return "читатель";
      default:
        return "неизвестная роль";
    }
  };

  return users.isLoading ? (
    <CircularProgress />
  ) : (
    <div className="UserList-container">
      <div className="UserList-wrapper">
        <UserTable users={users} roleFilter={roleFilter} />
      </div>
    </div>
  );
};

export default UserList;
