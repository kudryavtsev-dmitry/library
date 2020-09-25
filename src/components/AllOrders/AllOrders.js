import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./AllOrders.css";
import {
  approveOrder,
  approveReturnedOrder,
  getAllOrders,
} from "../../redux/orders/actions";
import OrdersTable from "./OrdersTable/OrdersTable";
import { CircularProgress } from "@material-ui/core";
import { ToastSuccess, ToastError } from "../../common/Toasts";

const AllOrders = () => {
  const orders = useSelector((state) => state.orders);
  const { token } = useSelector((state) => state.auth);

  const disptach = useDispatch();

  useEffect(() => {
    disptach(getAllOrders(token));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const approveOrdersHandler = (status, id) => () => {
    if (status === 1) {
      disptach(approveOrder(id, token));
      ToastSuccess("Заказ подтвержден");
    } else if (status === 3) {
      disptach(approveReturnedOrder(id, token));
    } else ToastError("Заказ уже подтвержден");
  };

  const allOrderStatus = (status) => {
    switch (status) {
      case 1:
        return "Ожидает подтверждение приема";
      case 2:
        return "Подтвержден";
      case 3:
        return "Подтверждение возврата";
      default:
        return "неизвестный статус";
    }
  };

  const filteredOrders = () => {
    switch (orders.filterByStatus) {
      case "pending":
        return orders.allOrders.filter((order) => order.status === 1);
      case "returned":
        return orders.allOrders.filter((order) => order.status === 3);
      default:
        return orders.allOrders;
    }
  };

  if (orders.allOrders.length < 1) {
    return <div>Заказов нет</div>;
  }

  return orders.isLoading ? (
    <CircularProgress />
  ) : (
    <div className="allOrders-container">
      <div className="allOrders-wrapper">
        <OrdersTable
          filteredOrders={filteredOrders}
          allOrderStatus={allOrderStatus}
          onClick={approveOrdersHandler}
        />
      </div>
    </div>
  );
};

export default AllOrders;
