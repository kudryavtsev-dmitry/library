import React, { useEffect, useState } from "react";
import "./BookList.css";
import { useSelector, useDispatch } from "react-redux";
import { loadBooks } from "../../redux/books/actions";
import { addToCart } from "../../redux/cart/actions";
import Book from "./Book/Book";
import { useHistory } from "react-router-dom";
import BookModal from "./BookModal/BookModal";

const BookList = () => {
  useEffect(() => {
    dispatch(loadBooks());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [modalFlag, setModalFlag] = useState(false);

  const [modalBook, setModalBook] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const state = useSelector((state) => state.books);

  const genres = useSelector((state) => state.genres);

  const cart = useSelector((state) => state.cart);

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

  return (
    <div className="bookList-container">
      {state.books &&
        filtBooks().map((book, index) => (
          <Book
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
    </div>
  );
};

export default BookList;
