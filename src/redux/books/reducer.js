import { LOAD_BOOKS_SUCCESS, FILTER_BOOK, REFRESH_LOADER } from "./actionTypes";

const initialState = {
  books: [],
  filterValue: "",
  isLoading: true,
  totalCount: null,
  currentPage: null,
};

export default function booksReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_BOOKS_SUCCESS:
      return {
        ...state,
        books: action.payload.books,
        isLoading: false,
        totalCount: action.payload.totalCount,
        currentPage: action.payload.currentPage,
      };
    case FILTER_BOOK:
      return {
        ...state,
        filterValue: action.payload,
      };
    case REFRESH_LOADER:
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
}
