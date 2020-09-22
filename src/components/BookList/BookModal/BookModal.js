import React from "react";
import "./BookModal.css";
import { ModalWrapper } from "../../../common/ModalWrapper";

const BookModal = ({ modalFlag, handleCloseModal, modalBook }) => {
  console.log(11111, modalBook);
  return (
    <ModalWrapper open={modalFlag} onClose={handleCloseModal}>
      <img
        className="modal-image"
        src={
          modalBook.attachments.data
            ? `data:image/jpeg; base64 , ${modalBook.attachments.data}`
            : "https://russrevo.ru/seo/img/not-available.png"
        }
        alt="book"
      />
      <div className="modal-info-wrapper">
        <div>
          Название: <span key={modalBook.id}>{modalBook.title}</span>{" "}
        </div>
        <div>
          Авторство:
          {modalBook.bookAuthors.map((author) => (
            <span key={modalBook.id}> {author.author.fio}</span>
          ))}{" "}
        </div>
        <div>
          Жанры:
          {modalBook.bookGenres.map((genre) => (
            <span key={modalBook.id}> {genre.genre.title}</span>
          ))}
        </div>
        <div>
          Доступно книг: <span>{modalBook.count}</span>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookModal;
