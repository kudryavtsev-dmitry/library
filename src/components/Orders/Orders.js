import React from "react";
import "./Orders.css";
import { useSelector, useDispatch } from "react-redux";
import { OrderItem } from "./OrderItem";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { returnUserOrder } from "../../redux/orders/actions";

const Orders = () => {
  const orders = useSelector((state) => state.orders.userOrders);
  const user = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const history = useHistory();

  const toBookList = () => () => {
    history.push("/");
  };

  const returnBook = (orderId) => () => {
    dispatch(returnUserOrder(orderId, user.id, user.token));
  };

  return (
    <div className="orders-container">
      <h3>Ваши заказы:</h3>
      {orders &&
        orders.map((order, index) => (
          <OrderItem
            status={order.status}
            title={order.book.title}
            key={index}
            returnBook={returnBook(order.id)}
          />
        ))}
      <Button onClick={toBookList()} variant="contained" color="primary">
        Назад
      </Button>
    </div>
  );
};
export default Orders;
