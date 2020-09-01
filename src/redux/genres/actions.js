import { LOAD_GENRES_SUCCESS, SELECT_GENRE } from "./actionTypes";
import { ToastSuccess, ToastError } from "../../common/Toasts";

export const loadGenresSuccess = (genres) => ({
  payload: genres,
  type: LOAD_GENRES_SUCCESS,
});

export const selectGenre = (genre) => ({
  payload: genre,
  type: SELECT_GENRE,
});

export const loadGenres = () => async (dispatch) => {
  try {
    const response = await fetch("http://localhost:54407/api/genres");
    const result = await response.json();
    dispatch(loadGenresSuccess(result));
  } catch (e) {
    console.log("error", e);
  }
};
export const addGenre = (token, genre) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:54407/api/genres", {
      method: "POST",
      body: JSON.stringify(genre),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      ToastSuccess('Жанр добавлен')
      dispatch(loadGenres())
    } else {
      ToastError('Ошибка добавления')
    }
  } catch (e) {
    console.log("error", e);
  }
};
export const deleteGenre = (token, id) => async (dispatch) => {
  try {
    let response = await fetch(`http://localhost:54407/api/genres/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      ToastSuccess('Жанр удален')
      dispatch(loadGenres())
    } else {
      ToastError('Ошибка удаления')
    }
  } catch (e) {
    console.log("error", e);
  }
};
export const editGenre = (token, title, id) => async (dispatch) => {
  try {
    let response = await fetch("http://localhost:54407/api/genres", {
      method: "PUT",
      body: JSON.stringify({id: id, title: title}),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;
    if (status === 200) {
      ToastSuccess('Жанр обновлен')
      dispatch(loadGenres())
    } else {
      ToastError('Ошибка обновления')
    }
  } catch (e) {
    console.log("error", e);
  }
};