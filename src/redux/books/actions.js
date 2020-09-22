import { LOAD_BOOKS_SUCCESS, FILTER_BOOK, REFRESH_LOADER } from "./actionTypes";
import { ToastSuccess, ToastError } from "../../common/Toasts";

export const loadBooksSuccess = (books, totalCount, currentPage) => ({
  payload: {
    books: books,
    totalCount: totalCount,
    currentPage: currentPage,
  },
  type: LOAD_BOOKS_SUCCESS,
});
export const filterBook = (filterValue) => ({
  payload: filterValue,
  type: FILTER_BOOK,
});
export const refreshLoader = () => ({
  type: REFRESH_LOADER,
});

export const loadBooks = (page) => async (dispatch) => {
  dispatch(refreshLoader());
  try {
    let response = await fetch(`http://localhost:5000/api/books/${page}`);
    let result = await response.json();

    console.log(result);

    dispatch(
      loadBooksSuccess(result.books, result.totalCount, result.currentPage)
    );
  } catch (e) {
    console.log("error", e);
  }
};
export const addBook = (token, book) => async (dispatch) => {
  console.log("token", token, "book", book);
  try {
    let response = await fetch("http://localhost:5000/api/books", {
      method: "POST",
      body: book,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const { status } = response;

    if (status === 200) {
      dispatch(loadBooks(1));
      ToastSuccess("Книга добавлена");
    } else {
      ToastError("Ошибка добавления");
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const deleteBook = (token, id) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:5000/api/books/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      dispatch(loadBooks(1));
      ToastSuccess("Книга удалена");
    } else {
      ToastError("Ошибка удаления");
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const updateBook = (token, book) => async (dispatch) => {
  console.log("token", token, "book", book);
  try {
    let response = await fetch("http://localhost:5000/api/books", {
      method: "PUT",
      body: JSON.stringify(book),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      dispatch(loadBooks(1));
      ToastSuccess("Данные обновлены");
    } else {
      ToastError("Ошибка обновления");
    }
  } catch (e) {
    console.log("error", e);
  }
};
