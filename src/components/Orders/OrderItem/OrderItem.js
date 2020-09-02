import React from "react";
import { Button } from "@material-ui/core";
import { orderStatus } from "../../../constants/orderStatus";

export const OrderItem = ({ title, status, returnBook }) => {
  return (
    <div className="orders-orderContainer">
      <div className="order-title">{title}</div>
      <span className="order-status">({orderStatus(status)})</span>
      <Button
        onClick={returnBook}
        disabled={status === 3 && true}
        variant="contained"
        color="secondary"
      >
        Отменить заказ
      </Button>
    </div>
  );
};
