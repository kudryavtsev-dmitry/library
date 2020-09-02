import React, { useEffect } from "react";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { loadGenres, selectGenre } from "../../redux/genres/actions";
import { useHistory } from "react-router-dom";
import {
  getOrders,
  getAllOrders,
  openReturnedOrders,
  openPendingOrders,
  openAllOrders,
} from "../../redux/orders/actions";
import ReaderSidebar from "./ReaderSidebar/ReaderSidebar";
import LibSidebar from "./LibSidebar/LibSidebar";
import AdminSidebar from "./AdminSidebar/AdminSidebar";
import StorekeeperSidebar from "./StorekeeperSidebar/StorekeeperSidebar";
import { loadAuthors } from "../../redux/authors/actions";

const Sidebar = () => {
  const genres = useSelector((state) => state.genres);
  const auth = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const history = useHistory();

  useEffect(() => {
    dispatch(loadGenres());
    dispatch(loadAuthors());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const selectGenreHandler = (genre) => () => {
    dispatch(selectGenre(genre));
  };

  const getOrdersHandler = () => () => {
    dispatch(getOrders(auth.id, auth.token));
    history.push("/orders");
  };
  const getAllOrdersHandler = () => () => {
    history.push("/all-orders");
    dispatch(getAllOrders(auth.token));
    dispatch(openAllOrders());
  };

  const getReturnedOrders = () => () => {
    history.push("/all-orders");
    dispatch(openReturnedOrders());
  };
  const getPendingOrders = () => () => {
    history.push("/all-orders");
    dispatch(openPendingOrders());
  };
  const openPage = (src) => () => {
    history.push(src);
  };


  if (auth.role === 2) {
    return (
      <LibSidebar
        getOrdersHandler={getOrdersHandler}
        goToCart={openPage("/cart")}
        openBooks={openPage("/books")}
        getAllOrdersHandler={getAllOrdersHandler}
        getReturnedOrders={getReturnedOrders}
        getPendingOrders={getPendingOrders}
      />
    );
  } else if (auth.role === 4) {
    return (
      <ReaderSidebar
        genres={genres}
        selectGenreHandler={selectGenreHandler}
        getOrdersHandler={getOrdersHandler}
        goToCart={openPage("/cart")}
      />
    );
  }
  else if (auth.role === 3) {
    return (
      <StorekeeperSidebar
        getOrdersHandler={getOrdersHandler}
        goToCart={openPage("/cart")}
        openBooks={openPage("/books")}
        openGenresEditor={openPage("/genres-editor")}
        openAuthorEditor={openPage("/authors-editor")}
      />
    );
  }
  else
    return (
      <AdminSidebar
        getOrdersHandler={getOrdersHandler}
        goToCart={openPage("/cart")}
        openUsersList={openPage("/users")}
        openGenresEditor={openPage("/genres-editor")}
        openAuthorEditor={openPage("/authors-editor")}
        openBooks={openPage("/books")}
        getAllOrdersHandler={getAllOrdersHandler}
        getReturnedOrders={getReturnedOrders}
        getPendingOrders={getPendingOrders}
      />
    );
};

export default Sidebar;
