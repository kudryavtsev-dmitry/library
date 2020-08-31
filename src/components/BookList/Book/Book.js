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
}) => {
  return (
    <>
      <div className="listBooks-bookContainer" key={index}>
        <div className="listBooks-bookImage-container" onClick={onClick}>
          <img className="listBooks-bookImage" src={imageUrl} alt="book" />
          <div className="listBook-bookPrice">{count}шт.</div>
        </div>
        <span>{title}</span>
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
        ></i>
      </div>
    </>
  );
};
export default Book;
