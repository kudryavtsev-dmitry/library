import React from "react";
import MenuItem from "../MenuItem/MenuItem";
import { Button } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LibraryAddCheckIcon from "@material-ui/icons/LibraryAddCheck";

const ReaderSidebar = ({
  genres,
  selectGenreHandler,
  getOrdersHandler,
  goToCart,
}) => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-header">Жанры</div>
      <div className="sidebar-genreList">
        <ul>
          <li
            onClick={selectGenreHandler(null)}
            className="sidebar-allGenres-li"
          >
            Все жанры
          </li>
          {genres.genres &&
            genres.genres.map((genre, index) => (
              <MenuItem
                key={index}
                selectedGenre={genres.selectedGenre}
                id={genre.id}
                index={index}
                title={genre.title}
                onClick={selectGenreHandler(genre.id)}
              />
            ))}
        </ul>
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

export default ReaderSidebar;
