import React from "react";
import { Button } from "@material-ui/core";

export const OrderItem = ({ title, status, returnBook }) => {
  const orderStatus = () => {
    switch (status) {
      case 1:
        return "Ожидает подтверждения";
      case 2:
        return "Подтвержден";
      case 3:
      return "Возвращен"
      default:
        return 'неизвестный статус'
    }
  };

  return (
    <div className="orders-orderContainer">
      <div className="order-title">{title}</div>
      <span className="order-status">({orderStatus()})</span>
      <Button onClick={returnBook} variant="contained" color="secondary">
        Отменить заказ
      </Button>
    </div>
  );
};
