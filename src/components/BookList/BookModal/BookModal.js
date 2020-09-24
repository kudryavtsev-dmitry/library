import React from "react";
import "./BookModal.css";
import { ModalWrapper } from "../../../common/ModalWrapper";
import { ImageCarousel } from "../ImageCarusel/ImageCarousel";

const BookModal = ({ modalFlag, handleCloseModal, modalBook }) => {
  return (
    <ModalWrapper open={modalFlag} onClose={handleCloseModal}>
      <ImageCarousel attachments={modalBook.attachments} />
      <div className="modal-info-wrapper">
        <h3>{modalBook.title}</h3>
        <div className="modal-info-count">
          Доступно книг: <span>{modalBook.count}</span>
        </div>
        <div className="modal-info-lists">
          <div>
            Авторы:
            <ul>
              {modalBook.bookAuthors.map((author) => (
                <li key={modalBook.id}> {author.author.fio}</li>
              ))}
            </ul>
          </div>
          <div>
            Жанры:
            <ul>
              {modalBook.bookGenres.map((genre) => (
                <li key={modalBook.id}> {genre.genre.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </ModalWrapper>
  );
};

export default BookModal;
