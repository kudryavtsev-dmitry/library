import React from "react";
import { Modal } from "@material-ui/core";
import "./BookModal.css";

const BookModal = ({ modalFlag, handleCloseModal, modalBook }) => {
  console.log(modalBook);
  return (
    <Modal
      className='modal-container'
      open={modalFlag}
      onClose={handleCloseModal}
    >
      <div className='modal-paper'>
        <img
          className='modal-image'
          src='https://cdn.pixabay.com/photo/2014/04/03/10/50/book-311432_960_720.png'
          alt='book'
        />
        <div className='modal-info-wrapper'>
        <div>Название: <span>{modalBook.title}</span>  </div>
        <div>Авторство:{modalBook.bookAuthors.map((author) => (
            <span> {author.author.fio}</span>
          ))} </div>
        <div>
          Жанры:
          {modalBook.bookGenres.map((genre) => (
            <span> {genre.genre.title}</span>
          ))}
        </div>
        <div>Доступно книг: <span>{modalBook.count}</span></div>
        </div>
      </div>
    </Modal>
  );
};

export default BookModal;
