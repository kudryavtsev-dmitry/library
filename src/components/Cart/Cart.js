import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItem/CartItem";
import "./Cart.css";
import { removeFromCart, clearCart } from "../../redux/cart/actions";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { addOrder } from "../../redux/orders/actions";

const Cart = () => {
  const history = useHistory();

  const cart = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const deleteFromCart = (bookForDelite) => () => {
    dispatch(removeFromCart(bookForDelite));
  };

  const backToBookList = () => () => {
    history.push("/");
  };

  const checkout = () => () => {
    const order = cart.selectedBooks.map((book) => {
      return { bookId: book.id, userId: user.id };
    });
    dispatch(addOrder(order,user.token))
    dispatch(clearCart())
    history.push("/");
  };

  return (
    <div className='cart-container'>
      <h3>Количество книг в корзине : {cart.selectedBooks.length} шт</h3>
      {cart.selectedBooks &&
        cart.selectedBooks.map((book, index) => (
          <CartItem
            deleteFromCart={deleteFromCart(book)}
            key={index}
            index={index}
            title={book.title}
          />
        ))}
      <div className='cart-button-wrapper'>
        <Button onClick={checkout()} color='primary' variant='contained'>
          Оформить заказ
        </Button>
        <Button
          onClick={backToBookList()}
          color='secondary'
          variant='contained'
        >
          Назад
        </Button>
      </div>
    </div>
  );
};

export default Cart;
