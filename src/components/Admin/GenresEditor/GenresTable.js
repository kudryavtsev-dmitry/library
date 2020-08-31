import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

const GenresTable = ({ genres, onClick, handleChangeMode }) => {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow className="header-row">
            <TableCell align="center">Жанр</TableCell>
            <TableCell align="center">Id</TableCell>
            <TableCell align="center">Редактировать </TableCell>
            <TableCell align="center">Удалить</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {genres &&
            genres.genres.map((genre, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {genre.title}
                </TableCell>
                <TableCell align="center">{genre.id}</TableCell>
                <TableCell align="center">
                  <IconButton onClick={handleChangeMode(genre)}>
                    <EditIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                  <IconButton
                    onClick={onClick(genre.id)}
                    className="icon-delete"
                  >
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
export default GenresTable;
