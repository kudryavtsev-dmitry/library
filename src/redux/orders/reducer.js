import {
  GET_ORDERS,
  GET_ALL_ORDERS,
  OPEN_RETURNED_ORDERS,
  OPEN_PENDING_ORDERS,
  OPEN_ALL_ORDERS,
} from "./actionTypes";
const initialState = {
  userOrders: [],
  allOrders: [],
  filterByStatus: "",
  isLoading: true
};

export default function ordersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ORDERS:
      return {
        ...state,
        userOrders: action.payload,
      };
    case OPEN_PENDING_ORDERS:
      return {
        ...state,
        filterByStatus: "pending",
      };
    case OPEN_RETURNED_ORDERS:
      return {
        ...state,
        filterByStatus: "returned",
      };
    case GET_ALL_ORDERS:
      return {
        ...state,
        allOrders: action.payload,
        isLoading: false
      };
    case OPEN_ALL_ORDERS:
      return {
        ...state,
        filterByStatus: "",
      };

    default:
      return state;
  }
}
