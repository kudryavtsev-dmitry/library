import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";

const UserTable = ({ users: { users }, roleFilter }) => {
  console.log(users);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="header-row">
            <TableCell>Login</TableCell>
            <TableCell align="center">Имя</TableCell>
            <TableCell align="center">Фамилия</TableCell>
            <TableCell align="center">Email</TableCell>
            <TableCell align="center">Роль</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users &&
            users.map((user, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {user.login}
                </TableCell>
                <TableCell align="center">{user.firstName}</TableCell>
                <TableCell align="center">{user.lastName}</TableCell>
                <TableCell align="center">{user.email}</TableCell>
                <TableCell align="center">{roleFilter(user.role)}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default UserTable;
