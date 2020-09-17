import { LOAD_BOOKS_SUCCESS, FILTER_BOOK } from "./actionTypes";
import { ToastSuccess, ToastError } from "../../common/Toasts";

export const loadBooksSuccess = (books) => ({
  payload: books,
  type: LOAD_BOOKS_SUCCESS,
});
export const filterBook = (filterValue) => ({
  payload: filterValue,
  type: FILTER_BOOK,
});

export const loadBooks = () => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:5000/api/books");
    let result = await response.json();

    console.log(result);

    dispatch(loadBooksSuccess(result));
  } catch (e) {
    console.log("error", e);
  }
};
export const addBook = (token, book) => async (dispatch) => {
  console.log("token", token, "book", book);
  try {
    let response = await fetch("http://localhost:5000/api/books", {
      method: "POST",
      body: JSON.stringify(book),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const { status } = response;

    if (status === 200) {
      dispatch(loadBooks());
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
      dispatch(loadBooks());
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
      dispatch(loadBooks());
      ToastSuccess("Данные обновлены");
    } else {
      ToastError("Ошибка обновления");
    }
  } catch (e) {
    console.log("error", e);
  }
};
