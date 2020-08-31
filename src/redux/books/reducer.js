import { LOAD_BOOKS_SUCCESS,FILTER_BOOK } from "./actionTypes";
const initialState = {
  books: [],
  filterValue: '',
  isLoading: true
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload,
        isLoading: false
      };
    case FILTER_BOOK:
      return {
        ...state,
        filterValue: action.payload 
      };

    default:
      return state;
  }
}
