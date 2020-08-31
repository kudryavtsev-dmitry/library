import React from "react";
import { Button } from "@material-ui/core";

const AdminSidebar = ({
  openAuthorEditor,
  getAllOrdersHandler,
  getPendingOrders,
  getReturnerdOrders,
  openBookEditor,
  openGenresEditor,
  openUsersList,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Заказы</div>
      <div className="sidebar-adminButtons">
        <Button variant="contained" onClick={getAllOrdersHandler()}>
          Все заказы
        </Button>
        <Button onClick={getPendingOrders()} variant="contained">
          Ожидают потверждения
        </Button>
        <Button onClick={getReturnerdOrders()} variant="contained">
          Возврат
        </Button>
        <Button onClick={openBookEditor} variant="contained">
          Книги
        </Button>
        <Button onClick={openAuthorEditor} variant="contained">
          Авторы
        </Button>
        <Button onClick={openGenresEditor} variant="contained">
          Жанры
        </Button>
        <Button onClick={openUsersList} variant="contained">
          Пользователи
        </Button>
      </div>
    </div>
  );
};
export default AdminSidebar;
