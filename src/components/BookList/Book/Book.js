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
                role
              }) => {
  return (
    <>
      <div className="listBooks-bookContainer" key={index}>
        <div className="listBooks-bookImage-container">
          <img className="listBooks-bookImage" src={imageUrl} alt="book" onClick={onClick}/>
          <div className="listBook-bookPrice">{count}шт.</div>
          {role === 1 || role === 3 &&
            <>
              <i onClick={openDialog} className="fa fa-trash-o book-deleteIcon" aria-hidden="true"/>
              <i onClick={handleChangeMode} className="fa fa-pencil book-editIcon" aria-hidden="true"/>
            </>
          }
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
        />
      </div>
    </>
  );
};
export default Book;
