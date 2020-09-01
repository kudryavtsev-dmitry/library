import React from "react";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const LibSidebar = ({
  getAllOrdersHandler,
  getPendingOrders,
  getReturnerdOrders,
  openBooks,
  goToCart,
  getOrdersHandler
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Заказы</div>
      <div className="sidebar-orderButtons">
        <Button variant="contained" onClick={openBooks}>
          Все заказы
        </Button>
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
      <div className="sidebar-button-container">
        <Button
          onClick={getOrdersHandler()}
          variant="contained"
          color="primary"
          startIcon={<LibraryAddCheckIcon />}
        >
          Мои заказы
        </Button>
        <Button
          onClick={goToCart}
          variant="contained"
          color="default"
          startIcon={<ShoppingCartIcon />}
        >
          В корзину
        </Button>
      </div>
    </div>
  );
};
export default LibSidebar;
