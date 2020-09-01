import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import "./BookList.css";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks, deleteBook } from "../../redux/books/actions";
import { addToCart } from "../../redux/cart/actions";
import Book from "./Book/Book";
import { useHistory } from "react-router-dom";
import BookModal from "./BookModal/BookModal";
import { loadAuthors } from "../../redux/authors/actions";
import BooksEditorModal from './BooksEditorModal/BooksEditorModal'
import DeleteDialog from './DeleteDialog/DeleteDialog'

const BookList = () => {
  const [modalFlag, setModalFlag] = useState(false);
  const [editModalFlag, setEditModalFlag] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [modalBook, setModalBook] = useState(false);
  const [openDialog, setOpenDialog] = useState(false);
  const [deletedId, setDelitedId] = useState(null);

  const state = useSelector((state) => state.books);
  const genres = useSelector((state) => state.genres);
  const cart = useSelector((state) => state.cart);
  const auth = useSelector((state) => state.auth);
  const authors = useSelector((state) => state.authors);

  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks());
    dispatch(loadAuthors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const filtBooks = () => {
    const books = state.books;
    if (genres.selectedGenre && !state.filterValue) {
      return books.filter((book) =>
        book.bookGenres.some((genre) => genre.genreId === genres.selectedGenre)
      );
    } else if (!genres.selectedGenre && state.filterValue) {
      return books.filter((book) => book.title.includes(state.filterValue));
    } else if (!genres.selectedGenre && !state.filterValue) {
      return books;
    }
  };

  const addBook = (book) => () => {
    if (cart.selectedBooks.some((el) => el.title === book.title)) {
      history.push("./cart");
    } else {
      dispatch(addToCart(book));
    }
  };

  const handleOpenModal = (book) => () => {
    setModalBook(book);
    setModalFlag(true);
  };
  const handleOpenEditModal = () => () => {
    setEditModalFlag(true);
  };

  const handleDeleteBook = () => () => {
    dispatch(deleteBook(auth.token, deletedId))
    setOpenDialog(false);
  }

  const handleChangeMode = (book) => () => {
    setEditModalFlag(true);
    setSelectedBook(book)
  }

  const handleDialogOpen = (id) => () => {
    setDelitedId(id)
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="bookList-container">
      <div className="bookList-booksContainer">
        {state.books &&
          filtBooks().map((book, index) => (
            <Book
              role={auth.role}
              openDialog={handleDialogOpen(book.id)}
              handleChangeMode={handleChangeMode(book)}
              handleDeleteBook={handleDeleteBook(book.id)}
              onClick={handleOpenModal(book)}
              key={index}
              cart={cart.selectedBooks}
              book={book}
              cartClick={addBook(book)}
              count={book.count}
              index={index}
              title={book.title}
              imageUrl={
                "https://cdn.pixabay.com/photo/2014/04/03/10/50/book-311432_960_720.png"
              }
            />
          ))}
        {modalFlag && (
          <BookModal
            modalFlag={modalFlag}
            handleCloseModal={() => setModalFlag(false)}
            modalBook={modalBook}
          />
        )}
        <BooksEditorModal
          clearSelectedBook={() => setSelectedBook(null)}
          selectedBook={selectedBook}
          books={state.books}
          authors={authors.authors}
          genres={genres.genres}
          modalFlag={editModalFlag}
          handleCloseModal={() => setEditModalFlag(false)}
        />
        <DeleteDialog
          handleDeleteBook={handleDeleteBook()}
          openDialog={openDialog}
          handleDialogClose={handleDialogClose}
        />
      </div>
      <Button onClick={handleOpenEditModal()}>Добавить книгу</Button>
    </div>
  );
};

export default BookList;
