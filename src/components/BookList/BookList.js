import React, {Component} from 'react';
import {Button} from "@material-ui/core";
import {connect} from "react-redux";
import {withRouter} from "react-router";

import {loadBooks, deleteBook} from "../../redux/books/actions";
import {addToCart} from "../../redux/cart/actions";
import Book from "./Book/Book";
import BookModal from "./BookModal/BookModal";
import {loadAuthors} from "../../redux/authors/actions";
import BooksEditorModal from './BooksEditorModal/BooksEditorModal'
import DeleteDialog from './DeleteDialog/DeleteDialog'
import "./BookList.css";
import {filterBooks} from "../../constants/filterBooks";

class BookList extends Component {
  state = {
    modalFlag: false,
    editModalFlag: false,
    selectedBook: null,
    modalBook: false,
    openDialog: false,
    deletedId: null
  }

  componentDidMount() {
    const {loadBooks, loadAuthors} = this.props
    loadBooks()
    loadAuthors()
  }

  addBook = (book) => () => {
    const {cart, addToCart, history} = this.props
    if (cart.selectedBooks.some((el) => el.title === book.title)) {
      history.push("./cart");
    } else {
      addToCart(book);
    }
  };

  handleOpenModal = (book) => () => {
    this.setState({modalBook: book, modalFlag: true});
  };
  handleOpenEditModal = () => () => {
    this.setState({editModalFlag: true});
  };

  handleDeleteBook = () => () => {
    const {deleteBook, auth} = this.props
    deleteBook(auth.token, this.state.deletedId)
    this.setState({openDialog: false})
  }

  handleChangeMode = (book) => () => {
    this.setState({editModalFlag: true, selectedBook: book});
  }

  handleDialogOpen = (id) => () => {
    this.setState({deletedId: id, openDialog: true});
  };

  handleDialogClose = () => {
    this.setState({openDialog: false});
  };

  handleClearSelectedBook = () => {
    this.setState({selectedBook: null});
  }

  handleCloseEditModal = () => {
    this.setState({editModalFlag: false});
  }
  handleCloseModal = () => {
    this.setState({modalFlag: false});
  }

  render() {

    const {books, cart, authors, genres, auth} = this.props
    const {openDialog, modalFlag, modalBook, selectedBook, editModalFlag} = this.state

    return (
      <div className="bookList-container">
        <div className="bookList-booksContainer">
          {books &&
          filterBooks(books, genres).map((book, index) => (
            <Book
              role={auth.role}
              openDialog={this.handleDialogOpen(book.id)}
              handleChangeMode={this.handleChangeMode(book)}
              handleDeleteBook={this.handleDeleteBook(book.id)}
              onClick={this.handleOpenModal(book)}
              key={book.id}
              cart={cart.selectedBooks}
              book={book}
              cartClick={this.addBook(book)}
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
              handleCloseModal={this.handleCloseModal}
              modalBook={modalBook}
            />
          )}
          <BooksEditorModal
            clearSelectedBook={this.handleClearSelectedBook}
            selectedBook={selectedBook}
            books={books.books}
            authors={authors.authors}
            genres={genres.genres}
            modalFlag={editModalFlag}
            handleCloseModal={this.handleCloseEditModal}
          />
          <DeleteDialog
            handleDeleteBook={this.handleDeleteBook()}
            openDialog={openDialog}
            handleDialogClose={this.handleDialogClose}
          />
        </div>
        <Button onClick={this.handleOpenEditModal()}>Добавить книгу</Button>
      </div>
    );
  };
}

const mapDispatchToProps = {
  loadBooks,
  loadAuthors,
  addToCart,
  deleteBook,
}
const mapStateToProps = ({books, cart, authors, genres, auth}) => ({
  genres,
  auth,
  books,
  cart,
  authors
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(BookList));
