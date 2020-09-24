import React from "react";
import "./BookModal.css";
import { ModalWrapper } from "../../../common/ModalWrapper";
import { ImageCarousel } from "../ImageCarusel/ImageCarousel";

const BookModal = ({ modalFlag, handleCloseModal, modalBook }) => {
  console.log(11111, modalBook);
  return (
    <ModalWrapper open={modalFlag} onClose={handleCloseModal}>
      <ImageCarousel attachments={modalBook.attachments} />
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
