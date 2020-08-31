import React from "react";
import "./CartItem.css";

const CartItem = ({ title, deleteFromCart }) => {
  return (
    <div className='cart-wrapper'>
      <div className='cart-bookTitle'>{title}</div>
      <i
        onClick={deleteFromCart}
        className='fa fa-trash cart-delite'
        aria-hidden='true'
      ></i>
    </div>
  );
};

export default CartItem;
