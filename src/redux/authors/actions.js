import { LOAD_AUTHORS_SUCCESS } from "./actionTypes";
import { ToastSuccess, ToastError } from "../../common/Toasts";

export const loadAuthorsSuccess = (authors) => ({
  payload: authors,
  type: LOAD_AUTHORS_SUCCESS,
});

export const loadAuthors = () => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:5000/api/authors");

    let result = await response.json();

    dispatch(loadAuthorsSuccess(result));
  } catch (e) {
    console.log("error", e);
  }
};
export const addAuthor = (token, author) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:5000/api/authors", {
      method: "POST",
      body: JSON.stringify(author),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      dispatch(loadAuthors());
      ToastSuccess("Автор добавлен");
    } else {
      ToastError("Ошибка добавления");
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const deleteAuthor = (token, id) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:5000/api/authors/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      dispatch(loadAuthors());
      ToastSuccess("Автор удален");
    } else {
      ToastError("Ошибка удаления");
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const editAuthor = (token, fio, id) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:5000/api/authors", {
      method: "PUT",
      body: JSON.stringify({ id: id, fio: fio }),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      dispatch(loadAuthors());
      ToastSuccess("Автор изменен");
    } else {
      ToastError("Ошибка изменения");
    }
  } catch (e) {
    console.log("error", e);
  }
};
