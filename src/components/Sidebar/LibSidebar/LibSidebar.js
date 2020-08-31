import React from "react";
import { Button } from "@material-ui/core";

const LibSidebar = ({
  getAllOrdersHandler,
  getPendingOrders,
  getReturnerdOrders,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Заказы</div>
      <div className="sidebar-orderButtons">
        <Button variant="contained" onClick={getAllOrdersHandler()}>
          Все заказы
        </Button>
        <Button onClick={getPendingOrders()} variant="contained">
          Ожидают потверждения
        </Button>
        <Button onClick={getReturnerdOrders()} variant="contained">
          Возврат
        </Button>
      </div>
    </div>
  );
};
export default LibSidebar;
