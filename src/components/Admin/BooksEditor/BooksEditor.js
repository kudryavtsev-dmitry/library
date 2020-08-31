import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks, deleteBook } from "../../../redux/books/actions";
import { Button, CircularProgress } from "@material-ui/core";
import BooksEditorModal from "./BooksEditorModal";
import "./BooksEditor.css";
import { loadAuthors } from "../../../redux/authors/actions";
import BooksTable from "./BooksTable";

const BooksEditor = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const books = useSelector((state) => state.books);
  const genres = useSelector((state) => state.genres);
  const authors = useSelector((state) => state.authors);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadAuthors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleOpenModal = () => () => {
    setModalFlag(true);
  };

  const handleDeleteBook = (id) => () => {
    dispatch(deleteBook(auth.token, id))
  }

  const handleChangeMode = (book) => () => {
    setModalFlag(true);
    setSelectedBook(book)
  }

  return books.isLoading ? (
    <CircularProgress />
  ) : (
      <div className="booksEditor-container">
        <div className="booksEditor-wrapper">
          <BooksTable books={books} onClick={handleDeleteBook} handleChangeMode={handleChangeMode} />
          <div className="booksEditor-addBook">
            <Button
              onClick={handleOpenModal()}
              variant="contained"
              color="primary"
            >
              Добавить
          </Button>
          </div>
        </div>
        <BooksEditorModal
          clearSelectedBook={() => setSelectedBook(null)}
          selectedBook={selectedBook}
          books={books.books}
          authors={authors.authors}
          genres={genres.genres}
          modalFlag={modalFlag}
          handleCloseModal={() => setModalFlag(false)}
        />
      </div>
    );
};
export default BooksEditor;
