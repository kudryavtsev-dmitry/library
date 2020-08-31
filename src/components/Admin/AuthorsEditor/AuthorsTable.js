import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const AuthorsTable = ({ authors, onClick, handleChangeMode }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="header-row">
            <TableCell align="center">Автор</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Редактировать</TableCell>
            <TableCell align="center">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {authors &&
            authors.authors.map((author, index) => (
              <TableRow key={index}>
                <TableCell align="center" component="th" scope="row">
                  {author.fio}
                </TableCell>
                <TableCell align="center">{author.id}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleChangeMode(author)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={onClick(author.id)} className='icon-delete'>
                    <DeleteForeverIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default AuthorsTable;
