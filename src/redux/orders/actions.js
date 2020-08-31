import {
  GET_ORDERS,
  GET_ALL_ORDERS,
  OPEN_PENDING_ORDERS,
  OPEN_RETURNED_ORDERS,
  OPEN_ALL_ORDERS,
} from "./actionTypes";
import { ToastSuccess, ToastError } from "../../common/Toasts";

export const getUserOrders = (orders) => ({
  payload: orders,
  type: GET_ORDERS,
});

export const allOrders = (orders) => ({
  payload: orders,
  type: GET_ALL_ORDERS,
});

export const openReturnedOrders = () => ({
  type: OPEN_RETURNED_ORDERS,
});
export const openPendingOrders = () => ({
  type: OPEN_PENDING_ORDERS,
});
export const openAllOrders = () => ({
  type: OPEN_ALL_ORDERS,
});

export const addOrder = (order, token) => async () => {
  try {
    let response = await fetch(
      "http://localhost:54407/api/orders/place-orders",
      {
        method: "POST",
        body: JSON.stringify(order),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    const { status } = response;
    switch (status) {
      case 401:
        ToastError("Вы не авторизованы");
        break;
      case 400:
        ToastError("Одна или несколько книг уже в корзине");
        break;
      default:
        ToastSuccess("Заказ оформлен, ожидайте подверждения");
    }
    console.log("response", status);

    let result = await response.json();

    console.log("RESULT", result);
  } catch (e) {
    console.log("error", e);
  }
};

export const getOrders = (id, token) => async (dispatch) => {
  console.log(id);
  try {
    const response = await fetch(
      `http://localhost:54407/api/orders/user-orders/${id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const { status } = response;
    if (status === 401) {
      ToastError("Вы не авторизованы");
    } else {
      const result = await response.json();
      dispatch(getUserOrders(result));
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const getAllOrders = (token) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:54407/api/orders/list`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });

    const { status } = response;
    if (status === 401) {
      ToastError("Вы не авторизованы");
    } else {
      const result = await response.json();

      dispatch(allOrders(result));
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const approveOrder = (orderId, token) => async (dispatch) => {
  console.log(orderId);
  try {
    let response = await fetch("http://localhost:54407/api/orders/add-orders", {
      method: "POST",
      body: JSON.stringify([orderId]),
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    const { status } = response;

    if (status === 200) {
      dispatch(getAllOrders(token));

    } else {
      ToastError(`Произошла ошибка ${status}`)
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const returnUserOrder = (orderId, userId, token) => async (dispatch) => {
  try {
    let response = await fetch(
      `http://localhost:54407/api/orders/return-orders/${userId}`,
      {
        method: "POST",
        body: JSON.stringify([orderId]),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const { status } = response;
    console.log("status", status);
    if (status === 200) {
      dispatch(getOrders(userId, token));
      ToastSuccess(`Возврат оформлен`)
    } else {
      ToastError(`Произошла ошибка ${status}`)
    }
  } catch (e) {
    console.log("error", e);
  }
};

export const approveReturnedOrder = (orderId, token) => async (dispatch) => {
  console.log(orderId);
  try {
    let response = await fetch(
      "http://localhost:54407/api/orders/close-orders",
      {
        method: "POST",
        body: JSON.stringify([orderId]),
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    const { status } = response;

    console.log(11111, status);
    if (status === 200) {
      dispatch(getAllOrders(token));
      ToastSuccess(`Возврат подтвержден `)
    } else {
      ToastError(`Произошла ошибка ${status}`)
    }
  } catch (e) {
    console.log("error", e);
  }
};
