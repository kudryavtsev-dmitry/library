import React from "react";
import { Modal } from "@material-ui/core";
import { Formik, Form } from "formik";
import CustomField from "../../Registration/CustomField";
import { Button, MenuItem } from "@material-ui/core";
import { addBook, updateBook } from "../../../redux/books/actions";
import { useSelector, useDispatch } from "react-redux";


const BookEditorModal = ({ modalFlag, handleCloseModal, genres, authors, books, selectedBook, clearSelectedBook }) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sendBook = (values) => {
    let book = {
      title: values.title,
      count: values.count,
      bookAuthors: values.authorId.map((id) => {
        return {
          authorId: id,
          bookId: books.length + 1
        }
      }),
      bookGenres: values.genreId.map((id) => {
        return {
          genreId: id,
          bookId: books.length + 1
        }
      }),
      attachments: [],
    };

    dispatch(addBook(auth.token, book));

    clearSelectedBook()

    handleCloseModal()

  };
  const updateBooks = (values) => {

    let book = {
      id: selectedBook.id,
      title: values.title,
      count: values.count,
      bookAuthors: values.authorId.map((id) => {
        return {
          authorId: id,
          bookId: books.length + 1
        }
      }),
      bookGenres: values.genreId.map((id) => {
        return {
          genreId: id,
          bookId: books.length + 1
        }
      }),

      attachments: [],
    };



    dispatch(updateBook(auth.token, book));

    handleCloseModal()
    clearSelectedBook()

  };

  console.log(selectedBook)

  return (
    <Modal
      className="bookEditorModal-container"
      open={modalFlag}
      onClose={handleCloseModal}
    >
      <div className="bookEditorModal-paper">
        <Formik
          initialValues={
            selectedBook ? {
              title: selectedBook.title,
              count: selectedBook.count,
              authorId: selectedBook.bookAuthors.map((author) => author.authorId),
              genreId: selectedBook.bookGenres.map((genre) => genre.genreId),
            } : {
                title: "",
                count: "",
                authorId: [],
                genreId: [],
              }}
          onSubmit={selectedBook ? (values) => updateBooks(values) : (values) => sendBook(values)}
        >
          <Form className="bookEditorModal-form">
            <h3>Добавить книгу</h3>
            <CustomField required name="title" label="Название" type="text" />
            <CustomField
              required
              name="count"
              label="Количество"
              type="number"
            />
            <CustomField
              select
              required
              name="authorId"
              label="ID автора"
              type="number"
              SelectProps={{
                multiple: true,
              }}
            >
              {authors.map((author, index) => (
                <MenuItem key={index} value={author.id}>
                  {author.fio}
                </MenuItem>
              ))}
            </CustomField>
            <CustomField
              select
              required
              name="genreId"
              label="ID жанра"
              type="number"
              SelectProps={{
                multiple: true,
              }}
            >
              {genres.map((genre, index) => (
                <MenuItem key={index} value={genre.id}>
                  {genre.title}
                </MenuItem>
              ))}
            </CustomField>
            {selectedBook ?
              <Button type="submit" variant="contained" color="primary">
                Сохранить
            </Button> :
              <Button type="submit" variant="contained" color="primary">
                Добавить
            </Button>}
          </Form>
        </Formik>
      </div>
    </Modal>
  );
};
export default BookEditorModal;
