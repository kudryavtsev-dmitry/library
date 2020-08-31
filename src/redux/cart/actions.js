import { ADD_TO_CART,DELETE_FROM_CART,CLEAR_CART } from "./actionTypes";

export const addToCart = (book) => ({
  payload: book,
  type: ADD_TO_CART,
});
export const removeFromCart = (book) => ({
  payload: book,
  type: DELETE_FROM_CART,
});
export const clearCart = (book) => ({
  payload: book,
  type: CLEAR_CART,
});
