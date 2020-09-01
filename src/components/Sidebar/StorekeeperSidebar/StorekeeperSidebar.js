import React from "react";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const StorekeeperSidebar = ({
  openAuthorEditor,
  openGenresEditor,
  openBooks,
  goToCart,
  getOrdersHandler

}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Данные</div>
      <div className="sidebar-adminButtons">
        <Button onClick={openBooks} variant="contained">
          Книги
              </Button>
        <Button onClick={openAuthorEditor} variant="contained">
          Авторы
                 </Button>
        <Button onClick={openGenresEditor} variant="contained">
          Жанры
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
export default StorekeeperSidebar;
