import React from "react";
import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const BooksTable = ({ books, onClick, handleChangeMode }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="header-row">
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Название</TableCell>
            <TableCell align="center">Количество книг</TableCell>
            <TableCell align="center">Жанр</TableCell>
            <TableCell align="center">Автор</TableCell>
            <TableCell align="center">Редактировать</TableCell>
            <TableCell align="center">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {books &&
            books.books.map((book, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {book.id}
                </TableCell>
                <TableCell align="center">{book.title}</TableCell>
                <TableCell align="center">{book.count}</TableCell>
                <TableCell align="center">
                  {book.bookGenres.map((genre) => genre.genre.title + " ")}
                </TableCell>
                <TableCell align="center">
                  {book.bookAuthors.map((author) => author.author.fio + " ")}
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleChangeMode(book)} className='icon-edit'>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={onClick(book.id)} className='icon-delete'>
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
export default BooksTable;
