import React from "react";

const Book = ({
  count,
  title,
  index,
  imageUrl,
  cartClick,
  cart,
  book,
  onClick,
  handleChangeMode,
  openDialog,
  role,
  image64,
}) => {
  console.log(book);
  return (
    <>
      <div className="listBooks-bookContainer" key={index}>
        <div className="listBooks-bookImage-container">
          <img
            className="listBooks-bookImage"
            src={image64 ? `data:image/jpeg; base64 , ${image64}` : imageUrl}
            alt="book"
            onClick={onClick}
          />
          <div className="listBook-bookPrice">{count}шт.</div>
          {role === 1 || role === 3 ? (
            <>
              <i
                onClick={openDialog}
                className="fa fa-trash-o book-deleteIcon"
                aria-hidden="true"
              />
              <i
                onClick={handleChangeMode}
                className="fa fa-pencil book-editIcon"
                aria-hidden="true"
              />
            </>
          ) : null}
        </div>
        <span className="listBook-bookTitle">{title}</span>
        <i
          onClick={cartClick}
          className={
            cart.some((el) => el.title === book.title)
              ? "fa fa-shopping-cart listBook-cart" +
                " " +
                "listBook-cart--active"
              : "fa fa-cart-plus listBook-cart"
          }
          aria-hidden="true"
        />
      </div>
    </>
  );
};
export default Book;
