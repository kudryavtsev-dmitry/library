import React from "react";
import { Formik, Form } from "formik";
import "./BooksEditorModal.css";
import { useSelector, useDispatch } from "react-redux";
import { Button, MenuItem } from "@material-ui/core";

import { CustomField } from "../../../constants/CustomField";
import { addBook, updateBook } from "../../../redux/books/actions";
import { ModalWrapper } from "../../../common/ModalWrapper";
import { CustomFileInput } from "../../../constants/fileInput";

const BooksEditorModal = ({
  modalFlag,
  handleCloseModal,
  genres,
  authors,
  books,
  selectedBook,
  clearSelectedBook,
}) => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const sendBook = async (values) => {
    console.log(values);

    const book = new FormData();

    let data = {
      title: values.title,
      count: values.count,
      bookAuthors: JSON.stringify(
        values.authorId.map((id) => {
          return {
            authorId: id,
            bookId: books.length + 1,
          };
        })
      ),
      bookGenres: JSON.stringify(
        values.genreId.map((id) => {
          return {
            genreId: id,
            bookId: books.length + 1,
          };
        })
      ),
      attachments: values.photo,
    };

    for (const key in data) {
      await book.append(`${key}`, data[key]);
    }

    await dispatch(addBook(auth.token, book));

    clearSelectedBook();

    handleCloseModal();
  };

  const updateBooks = (values) => {
    const book = {
      id: selectedBook.id,
      title: values.title,
      count: values.count,
      bookAuthors: values.authorId.map((id) => {
        return {
          authorId: id,
          bookId: selectedBook.id,
        };
      }),
      bookGenres: values.genreId.map((id) => {
        return {
          genreId: id,
          bookId: selectedBook.id,
        };
      }),
      attachments: [],
    };
    dispatch(updateBook(auth.token, book));

    handleCloseModal();
    clearSelectedBook();
  };

  return (
    <ModalWrapper open={modalFlag} onClose={handleCloseModal}>
      <Formik
        initialValues={
          selectedBook
            ? {
                title: selectedBook.title,
                count: selectedBook.count,
                authorId: selectedBook.bookAuthors.map(
                  (author) => author.authorId
                ),
                genreId: selectedBook.bookGenres.map((genre) => genre.genreId),
                photo: null,
              }
            : {
                title: "",
                count: "",
                authorId: [],
                genreId: [],
                photo: null,
              }
        }
        onSubmit={
          selectedBook
            ? (values) => updateBooks(values)
            : (values) => sendBook(values)
        }
      >
        {({ setFieldValue, initialValues }) => (
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
              label="Автор"
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
              label="Жанр"
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
            {!selectedBook && (
              <CustomFileInput
                className="BookEditorModal-inputFile"
                id="photo"
                onChange={(e) => setFieldValue("photo", e.target.files[0])}
              />
            )}

            {selectedBook ? (
              <Button type="submit" variant="contained" color="primary">
                Сохранить
              </Button>
            ) : (
              <Button type="submit" variant="contained" color="primary">
                Добавить
              </Button>
            )}
          </Form>
        )}
      </Formik>
    </ModalWrapper>
  );
};
export default BooksEditorModal;
