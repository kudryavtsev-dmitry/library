import { combineReducers } from "redux";
import booksReducer from "./books/reducer";
import genresReducer from "./genres/reducer";
import cartReducer from "./cart/reducer";
import authReducer from "./auth/reducer";
import ordersReducer from "./orders/reducer";
import authorsReducer from "./authors/reducer";
import usersReducer from "./users/reducer";

export default combineReducers({
  books: booksReducer,
  genres: genresReducer,
  cart: cartReducer,
  auth: authReducer,
  orders: ordersReducer,
  authors: authorsReducer,
  users: usersReducer,
});
