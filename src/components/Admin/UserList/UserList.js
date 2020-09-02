import React, { Component } from "react";
import { connect } from 'react-redux';

import { loadUsers } from "../../../redux/users/actions";
import { CircularProgress } from "@material-ui/core";
import "./UserList.css";
import UserTable from "./UserTable/UserTable";

class UserList extends Component {

  componentDidMount() {
    const { loadUsers, auth } = this.props
    loadUsers(auth.token)
  }

  roleFilter = (roleId) => {
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
  render() {
    const { users, users: { isLoading } } = this.props

    return isLoading ? (
      <CircularProgress />
    ) : (
        <div className="UserList-container">
          <div className="UserList-wrapper">
            <UserTable users={users} roleFilter={this.roleFilter} />
          </div>
        </div>
      );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    loadUsers: (token) => dispatch(loadUsers(token))
  }
}
const mapStateToProps = ({users, auth}) => ({
  users,
  auth
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
