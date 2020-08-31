import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import BookList from "../BookList/BookList";
import Cart from "../Cart/Cart";
import Orders from "../Orders/Orders";
import "./Layout.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AllOrders from "../AllOrders/AllOrders";
import { useSelector } from "react-redux";
import BooksEditor from "../Admin/BooksEditor/BooksEditor";
import AuthorsEditor from "../Admin/AuthorsEditor/AuthorsEditor";
import GenresEditor from "../Admin/GenresEditor/GenresEditor";
import UserList from "../Admin/UserList/UserList";

const Layout = () => {
  const user = useSelector((state) => state.auth);

  const RouteRule = () => {
    switch (user.role) {
      case 1:
        return (
          <Switch>
            <Route path="/all-orders" component={AllOrders} />
            <Route path="/books-editor" component={BooksEditor} />
            <Route path="/authors-editor" component={AuthorsEditor} />
            <Route path="/genres-editor" component={GenresEditor} />
            <Route path="/users" component={UserList} />
            <Redirect to="/books-editor" />
          </Switch>
        );
      case 2:
        return (
          <Switch>
            <Route path="/all-orders" component={AllOrders} />
            <Redirect to="/all-orders" />
          </Switch>
        );
      case 3:
        return (
          <Switch>
            <Route path="/books-editor" component={BooksEditor} />
            <Route path="/authors-editor" component={AuthorsEditor} />
            <Route path="/genres-editor" component={GenresEditor} />
            <Route path="/all-orders" component={AllOrders} />
            <Redirect to="/books-editor" />
          </Switch>
        );
      default:
        return (
          <Switch>
            <Route path="/books" component={BookList} />
            <Route path="/cart" component={Cart} />
            <Route path="/orders" component={Orders} />
            <Redirect to="/books" />
          </Switch>
        );
    }
  };

  return (
    <div className="Layout-container">
      <Sidebar />
      <div className="Layout-wrapper">
        <div className="Layout-header-wrapper">
          <Header />
        </div>
        <div className="Layout-body-wrapper">
          <RouteRule />
        </div>
      </div>
    </div>
  );
};
export default Layout;
