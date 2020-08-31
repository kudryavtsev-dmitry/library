import { ADD_TO_CART , DELETE_FROM_CART, CLEAR_CART} from "./actionTypes";

const initialState = {
selectedBooks: []
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        selectedBooks: [...state.selectedBooks, action.payload]
      };
    case DELETE_FROM_CART:
      return {
        selectedBooks: state.selectedBooks.filter((book)=> book.title !== action.payload.title)
      };
    case CLEAR_CART:
      return {
        selectedBooks: []
      };
    default:
      return state;
  }
}
